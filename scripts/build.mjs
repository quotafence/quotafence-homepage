import { cp, mkdir, rm } from "node:fs/promises";

await rm("dist", { recursive: true, force: true });
await mkdir("dist/src", { recursive: true });
await mkdir("dist/assets", { recursive: true });
await mkdir("dist/docs", { recursive: true });
await Promise.all([
  cp("index.html", "dist/index.html"),
  cp("robots.txt", "dist/robots.txt"),
  cp("sitemap.xml", "dist/sitemap.xml"),
  cp("docs/index.html", "dist/docs/index.html"),
  cp("src/main.js", "dist/src/main.js"),
  cp("src/styles.css", "dist/src/styles.css"),
  cp("src/docs.css", "dist/src/docs.css"),
  cp("src/docs.js", "dist/src/docs.js"),
  cp("assets/codex-dark.png", "dist/assets/codex-dark.png"),
  cp("assets/claude.svg", "dist/assets/claude.svg"),
  cp("assets/brand", "dist/assets/brand", { recursive: true }),
]);

console.log("Quotafence static site built in dist/.");
