import { renderPage, repoUrl, releasesUrl, releasesApiUrl, npmPackageUrl, npmRegistryUrl } from "./template.js";

document.querySelector("#app").innerHTML = renderPage();

const themeToggle = document.querySelector("[data-theme-toggle]");
const applyTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  const variant = theme === "light" ? "black" : "white";
  document.querySelectorAll("[data-brand-img]").forEach((img) => { img.src = `./assets/brand/quotafence-${variant}-text.png`; });
};
const storedTheme = (() => { try { return localStorage.getItem("qf-theme"); } catch { return null; } })();
applyTheme(storedTheme || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"));
themeToggle.addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
  applyTheme(next);
  try { localStorage.setItem("qf-theme", next); } catch {}
});

const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
menuButton.addEventListener("click", () => { const open = menuButton.getAttribute("aria-expanded") === "true"; menuButton.setAttribute("aria-expanded", String(!open)); nav.classList.toggle("open", !open); });
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => { nav.classList.remove("open"); menuButton.setAttribute("aria-expanded", "false"); }));
const header = document.querySelector("[data-header]");
window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 20), { passive: true });
const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); } }); }, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
const cliTabs = document.querySelectorAll("[data-cli-tab]");
const cliPanels = document.querySelectorAll("[data-cli-panel]");
cliTabs.forEach((tab) => tab.addEventListener("click", () => {
  const selected = tab.dataset.cliTab;
  cliTabs.forEach((item) => { const active = item === tab; item.classList.toggle("active", active); item.setAttribute("aria-selected", String(active)); });
  cliPanels.forEach((panel) => panel.classList.toggle("active", panel.dataset.cliPanel === selected));
}));

const assetMatchers = {
  macos: (name) => name.endsWith(".dmg"),
  windows: (name) => /setup\.exe$/i.test(name),
  "linux-appimage": (name) => name.endsWith(".AppImage"),
  "linux-deb": (name) => name.endsWith(".deb")
};

function setDownload(download, asset, release) {
  const link = document.querySelector(`[data-download="${download}"]`);
  if (!link || !asset) return false;
  link.href = asset.browser_download_url;
  link.innerHTML = download === "linux-deb" ? "Download .deb <span>↓</span>" : `Download ${release.tag_name} <span>↓</span>`;
  link.hidden = false;
  return true;
}

async function hydrateReleaseDownloads() {
  const summary = document.querySelector("[data-release-summary]");
  const indicator = document.querySelector("[data-release-indicator]");
  try {
    const response = await fetch(releasesApiUrl, { headers: { Accept: "application/vnd.github+json" } });
    if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
    const releases = await response.json();
    const release = releases.find((item) => !item.draft);
    if (!release) throw new Error("No published release");
    const assets = release.assets || [];
    const availability = {};
    Object.entries(assetMatchers).forEach(([platform, matches]) => {
      availability[platform] = setDownload(platform, assets.find((asset) => matches(asset.name)), release);
    });
    ["macos", "windows", "linux"].forEach((platform) => {
      const status = document.querySelector(`[data-platform-status="${platform}"]`);
      const ready = platform === "linux" ? availability["linux-appimage"] || availability["linux-deb"] : availability[platform];
      if (ready) { status.textContent = `${release.tag_name} available`; status.classList.add("available"); }
    });
    summary.textContent = `${release.name || release.tag_name} is the latest published build.`;
    indicator.classList.add("available");
  } catch {
    summary.textContent = "No desktop release published yet. Downloads activate automatically once one is out.";
    indicator.classList.add("pending");
  }
}

async function hydrateNpmInstall() {
  const status = document.querySelector("[data-npm-status]");
  const link = document.querySelector("[data-npm-link]");
  try {
    const response = await fetch(npmRegistryUrl);
    if (!response.ok) throw new Error(`npm returned ${response.status}`);
    const metadata = await response.json();
    const version = metadata["dist-tags"]?.latest || metadata["dist-tags"]?.beta;
    if (!version) throw new Error("No published npm tag");
    status.textContent = `${version} available`;
    status.classList.add("available");
    link.href = npmPackageUrl;
    link.innerHTML = "View on npm <span>↗</span>";
  } catch {
    status.textContent = "npm release pending";
  }
}

async function hydrateGithubStars() {
  const badge = document.querySelector("[data-star-count]");
  try {
    const response = await fetch("https://api.github.com/repos/quotafence/quotafence", { headers: { Accept: "application/vnd.github+json" } });
    if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
    const repo = await response.json();
    if (!repo.stargazers_count) return;
    badge.textContent = `★ ${repo.stargazers_count.toLocaleString()}`;
    badge.hidden = false;
  } catch {}
}

hydrateReleaseDownloads();
hydrateNpmInstall();
hydrateGithubStars();
