import { readFile } from "node:fs/promises";

for (const file of ["index.html", "src/main.js", "src/styles.css", "favicon.svg", "assets/codex-dark.png"]) {
  await readFile(file);
}

const html = await readFile("index.html", "utf8");
const js = await readFile("src/main.js", "utf8");

for (const token of ["./src/styles.css", "./src/main.js", "./favicon.svg"]) {
  if (!html.includes(token)) throw new Error(`Missing HTML reference: ${token}`);
}

for (const token of ["quotafence", "qf run codex", "data-menu-button", "Weekly workspace allocations", "2 allowance windows"]) {
  if (!js.includes(token)) throw new Error(`Missing landing-page content: ${token}`);
}

console.log("Static landing page checks passed.");
