import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { renderPage } from "../src/template.js";

await rm("dist", { recursive: true, force: true });
await mkdir("dist/src", { recursive: true });
await mkdir("dist/assets", { recursive: true });
await mkdir("dist/docs", { recursive: true });
await Promise.all([
  cp("robots.txt", "dist/robots.txt"),
  cp("sitemap.xml", "dist/sitemap.xml"),
  cp("docs/index.html", "dist/docs/index.html"),
  cp("src/main.js", "dist/src/main.js"),
  cp("src/template.js", "dist/src/template.js"),
  cp("src/styles.css", "dist/src/styles.css"),
  cp("src/docs.css", "dist/src/docs.css"),
  cp("src/docs.js", "dist/src/docs.js"),
  cp("assets/codex-dark.png", "dist/assets/codex-dark.png"),
  cp("assets/claude.svg", "dist/assets/claude.svg"),
  cp("assets/brand", "dist/assets/brand", { recursive: true }),
]);

const markup = renderPage();

// Search engines and social crawlers should get the full page without executing JS,
// so the shipped HTML carries the rendered markup instead of the placeholder shell.
const shell = await readFile("index.html", "utf8");
const prerendered = shell.replace(
  /<div id="app">[\s\S]*?<\/div>\s*(?=<script)/,
  `<div id="app">${markup}</div>\n    `
);
if (prerendered === shell) throw new Error("Could not inject pre-rendered markup into index.html");

// FAQ rich results are generated from the same source as the visible FAQ so the two cannot drift.
const faq = [...markup.matchAll(/<details><summary>(.*?)<\/summary><p>(.*?)<\/p><\/details>/g)].map(
  ([, question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer.replace(/<[^>]+>/g, "") },
  })
);
if (faq.length === 0) throw new Error("No FAQ entries found to build FAQPage structured data");

const faqLd = `<script type="application/ld+json">\n${JSON.stringify(
  { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq },
  null,
  2
)}\n    </script>\n  </head>`;

await writeFile("dist/index.html", prerendered.replace("</head>", faqLd));

console.log(`Quotafence static site built in dist/ (pre-rendered, ${faq.length} FAQ entries).`);
