const themeButton = document.querySelector("[data-theme-toggle]");
const brandImage = document.querySelector("[data-brand-img]");
const applyTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  brandImage.src = `../assets/brand/quotafence-${theme === "light" ? "black" : "white"}-text.png`;
};
const storedTheme = (() => { try { return localStorage.getItem("qf-theme"); } catch { return null; } })();
applyTheme(storedTheme || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"));
themeButton.addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
  applyTheme(next);
  try { localStorage.setItem("qf-theme", next); } catch {}
});

const menuButton = document.querySelector("[data-docs-menu]");
const sidebar = document.querySelector("[data-docs-sidebar]");
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  sidebar.classList.toggle("open", !open);
});
sidebar.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  sidebar.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

document.querySelectorAll("[data-copy]").forEach((button) => button.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(button.dataset.copy);
    const previous = button.textContent;
    button.textContent = "Copied";
    setTimeout(() => { button.textContent = previous; }, 1200);
  } catch {
    button.textContent = "Select command";
  }
}));

const sectionLinks = [...document.querySelectorAll(".docs-sidebar a[href^='#']")];
const sections = sectionLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
const observer = new IntersectionObserver((entries) => {
  const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
  if (!visible) return;
  sectionLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`));
}, { rootMargin: "-20% 0px -70% 0px" });
sections.forEach((section) => observer.observe(section));
