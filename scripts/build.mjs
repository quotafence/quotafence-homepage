import { cp, mkdir, rm } from "node:fs/promises";

await rm("dist", { recursive: true, force: true });
await mkdir("dist/src", { recursive: true });
await mkdir("dist/assets", { recursive: true });
await Promise.all([
  cp("index.html", "dist/index.html"),
  cp("robots.txt", "dist/robots.txt"),
  cp("src/main.js", "dist/src/main.js"),
  cp("src/styles.css", "dist/src/styles.css"),
  cp("assets/codex-dark.png", "dist/assets/codex-dark.png"),
  cp("assets/claude.svg", "dist/assets/claude.svg"),
  cp("assets/brand", "dist/assets/brand", { recursive: true }),
]);

console.log("Quotafence static site built in dist/.");
