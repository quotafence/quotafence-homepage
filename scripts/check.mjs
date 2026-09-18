import { readFile } from "node:fs/promises";

for (const file of ["index.html", "docs/index.html", "robots.txt", "sitemap.xml", "src/main.js", "src/styles.css", "src/docs.css", "src/docs.js", "assets/codex-dark.png", "assets/claude.svg", "assets/brand/quotafence-white-text.png", "assets/brand/quotafence-black.png"]) {
  await readFile(file);
}

const html = await readFile("index.html", "utf8");
const js = await readFile("src/main.js", "utf8");
const docs = await readFile("docs/index.html", "utf8");
const robots = await readFile("robots.txt", "utf8");
const sitemap = await readFile("sitemap.xml", "utf8");

for (const token of ["./src/styles.css", "./src/main.js", "./assets/brand/quotafence-black.png", "./assets/brand/quotafence-white.png", "SoftwareApplication", "index, follow", "Codex &amp; Claude Code Quota Manager", "https://quotafence.com/"]) {
  if (!html.includes(token)) throw new Error(`Missing HTML reference: ${token}`);
}

for (const token of ["QuotaFence", "qfence top --once", "PROJECT ALLOCATIONS", "refreshed just now", "qfence allocations add", "qfence codex", "qfence claude", "Claude Code", "Frequently asked questions", "Quota sources", "Model usage", "Read the docs", "data-menu-button", "data-cli-tab", "Allocations", "Daily usage"]) {
  if (!js.includes(token)) throw new Error(`Missing landing-page content: ${token}`);
}

const structuredDataMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
if (!structuredDataMatch) throw new Error("Missing SoftwareApplication structured data");
const structuredData = JSON.parse(structuredDataMatch[1]);
if (structuredData["@type"] !== "SoftwareApplication" || structuredData.name !== "QuotaFence") {
  throw new Error("Invalid QuotaFence structured data");
}
if (!html.includes("<h1>Protect Codex and Claude Code quota by project</h1>")) {
  throw new Error("Missing crawlable product heading");
}
if (!robots.includes("Allow: /")) throw new Error("robots.txt does not allow crawling");
if (!robots.includes("https://quotafence.com/sitemap.xml")) throw new Error("robots.txt does not advertise the sitemap");
for (const token of ["https://quotafence.com/", "https://quotafence.com/docs/"]) {
  if (!sitemap.includes(token)) throw new Error(`Missing sitemap URL: ${token}`);
}
for (const token of ["QuotaFence user guide", "Allocate weekly quota", "Priority and Safe quota", "Protect Codex and Claude Code work", "qfence top", "Troubleshooting", "https://quotafence.com/docs/"]) {
  if (!docs.includes(token)) throw new Error(`Missing docs content: ${token}`);
}

console.log("Static landing page checks passed.");
