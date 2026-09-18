// Pure markup for the landing page. Shared by the browser entry point (main.js)
// and the build step, which pre-renders it into static HTML for crawlers.
export const repoUrl = "https://github.com/quotafence/quotafence";
const docsUrl = "/docs/";
export const releasesUrl = `${repoUrl}/releases`;
export const releasesApiUrl = "https://api.github.com/repos/quotafence/quotafence/releases?per_page=10";
export const npmPackageUrl = "https://www.npmjs.com/package/@quotafence/cli";
export const npmRegistryUrl = "https://registry.npmjs.org/@quotafence%2Fcli";

const features = [
  { index: "01", visual: "quota", title: "Track both allowance windows", body: "See Codex and Claude Code 5-hour and weekly limits, reset times, sync health, and basic local usage history in one view." },
  { index: "02", visual: "allocate", title: "Budget quota by project", body: "Create, resize, remove, and reprioritize weekly project budgets from the desktop app or the interactive terminal UI." },
  { index: "03", visual: "guard", title: "Protect new work", body: "Apply local Warn and Stop policies before a managed launch or a new prompt observed by a verified provider hook." }
];

const featureVisuals = {
  quota: `<div class="feature-demo quota-demo"><div><span>5-hour</span><i><b style="width:93%"></b></i><strong>93%</strong></div><div><span>Weekly</span><i><b style="width:85%"></b></i><strong>85%</strong></div></div>`,
  allocate: `<div class="feature-demo allocation-demo"><div><span>project-a</span><i><b style="width:40%"></b></i><strong>40%</strong></div><div><span>project-b</span><i><b style="width:30%"></b></i><strong>30%</strong></div></div>`,
  guard: `<div class="feature-demo guard-demo"><code>qfence codex</code><div><i></i><span>Allowed</span><strong>2% reserved</strong></div></div>`
};

const iconPaths = {
  gauge: `<path d="M4.9 19a9 9 0 1 1 14.2 0"/><path d="m12 13 4-4"/><path d="M9 19h6"/>`,
  folder: `<path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2h7.5A2.5 2.5 0 0 1 21 9.5v7A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5z"/>`,
  settings: `<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/>`,
  activity: `<path d="M4 12h3l2-5 4 10 2-5h5"/>`,
  spark: `<path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5z"/>`,
  plus: `<path d="M12 5v14M5 12h14"/>`,
  "chevron-down": `<path d="m7 10 5 5 5-5"/>`,
  sun: `<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>`,
  moon: `<path d="M20 15.2A8 8 0 0 1 8.8 4 8 8 0 1 0 20 15.2Z"/>`,
  grip: `<circle cx="8" cy="7" r="1" fill="currentColor" stroke="none"/><circle cx="16" cy="7" r="1" fill="currentColor" stroke="none"/><circle cx="8" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="16" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="8" cy="17" r="1" fill="currentColor" stroke="none"/><circle cx="16" cy="17" r="1" fill="currentColor" stroke="none"/>`
};

const icon = (name, size) => `<svg class="ic" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name]}</svg>`;

const workflow = [
  ["Connect", "Sync the allowance windows returned by Codex or Claude Code."],
  ["Allocate", "Give each local project folder a weekly budget and priority."],
  ["Protect", "Check the active policy before supported new work begins."],
  ["Review", "Reconcile provider movement and keep uncertain usage unattributed."]
];

export const renderPage = () => `
  <header class="site-header" data-header>
    <a class="brand" href="#top" aria-label="QuotaFence home"><img class="brand-lockup" src="./assets/brand/quotafence-white-text.png" alt="QuotaFence" data-brand-img /></a>
    <button class="menu-button" type="button" aria-label="Toggle navigation" aria-expanded="false" data-menu-button><span></span><span></span></button>
    <nav class="nav" data-nav><a href="#product">Product</a><a href="#workflow">Workflow</a><a href="#install">Install</a><a href="#faq">FAQ</a><a href="${docsUrl}">Docs</a><a class="nav-cta" href="${repoUrl}" target="_blank" rel="noreferrer">View on GitHub<span class="star-count" data-star-count hidden></span> <span>↗</span></a><button class="theme-toggle" type="button" data-theme-toggle aria-label="Switch colour theme">${icon("sun", 16)}${icon("moon", 16)}</button></nav>
  </header>

  <main id="top">
    <section class="hero section-shell">
      <div class="hero-copy reveal">
        <a class="announcement" href="${repoUrl}" target="_blank" rel="noreferrer"><b>Open source</b><i></i> Codex + Claude Code · Local-first <span>↗</span></a>
        <h1><span>Protect AI agent quota.</span><em>Project by project.</em></h1>
        <p class="hero-lead">QuotaFence is an open-source quota manager for AI coding agents. It tracks Codex and Claude Code allowances, assigns weekly budgets to local folders, and helps prevent lower-priority work from consuming quota intended for critical projects.</p>
        <div class="hero-actions"><a class="button button-primary" href="#install">Install QuotaFence <span>↓</span></a><a class="button button-secondary" href="#workflow">See how it works</a></div>
        <div class="status-row"><span><i class="status-dot"></i> Local-first</span><span>Multi-provider</span><span>Apache 2.0</span></div>
      </div>

      <div class="hero-stage reveal">
      <div class="product-window real-ui" aria-label="Quotafence desktop application">
        <div class="window-bar"><div class="window-dots"><span></span><span></span><span></span></div><span class="window-title">QuotaFence</span><span></span></div>
        <div class="real-app-layout">
          <aside class="real-sidebar">
            <div class="real-brand"><img class="real-brand-lockup" src="./assets/brand/quotafence-white-text.png" alt="QuotaFence" data-brand-img /></div>
            <nav class="real-nav"><a class="active">${icon("gauge", 16)}Overview</a><a>${icon("folder", 16)}Projects</a><a>${icon("settings", 16)}Settings</a></nav>
            <div class="source-label"><span>Quota sources</span>${icon("plus", 14)}</div>
            <div class="source-card"><img src="./assets/claude.svg" alt="" /><div><strong>Claude Code</strong><small>5-hour + Weekly</small></div><i></i></div>
            <div class="source-card"><img src="./assets/codex-dark.png" alt="" /><div><strong>Codex</strong><small>5-hour + Weekly</small></div><i></i></div>
          </aside>
          <div class="real-main">
            <article class="allowance-card real-panel">
              <div class="card-kicker">${icon("gauge", 15)}<i></i>2 allowance windows<small>Synced just now</small></div>
              <div class="allowance-row"><div><strong>5-hour allowance</strong><span>Resets today at 19:29</span></div><b>62% left</b><div class="allowance-track"><i style="width:62%"></i></div></div>
              <div class="allowance-row"><div><strong>Weekly allowance</strong><span>Resets in 4 days</span></div><b>74% left</b><div class="allowance-track"><i style="width:74%"></i></div></div>
              <div class="usage-insights">
                <div class="heatmap-block">
                  <div class="heatmap-title"><span>${icon("activity", 15)}Daily usage</span><small>Last 6 months · 48 active days</small></div>
                  <div class="heatmap"><div class="heatmap-cells">${Array.from({ length: 182 }, (_, index) => `<i class="level-${[0,0,1,0,2,0,0,1,0,0,3,0,0,1,0,2,0,0,0,4,0,1,0,2,0,0,3,1,0,0,2,0,1,0,0][index % 35]}"></i>`).join("")}</div><div class="heatmap-scale"><span>6 months ago</span><span class="heatmap-legend">Less<i class="level-0"></i><i class="level-1"></i><i class="level-2"></i><i class="level-3"></i><i class="level-4"></i>More</span><span>Today</span></div></div>
                </div>
                <div class="model-card">
                  <div class="model-card-head"><span>${icon("spark", 15)}Model usage</span><small>Observed token share</small></div>
                  <div class="model-card-row"><div><span>gpt-5.6-sol</span><b>84%</b></div><i><b style="width:84%"></b></i></div>
                  <div class="model-card-row"><div><span>gpt-5.5</span><b>13%</b></div><i><b style="width:13%"></b></i></div>
                  <div class="model-card-row"><div><span>codex-auto-review</span><b>2%</b></div><i><b style="width:2%"></b></i></div>
                  <div class="model-card-row"><div><span>gpt-5.6-terra</span><b>&lt;1%</b></div><i><b style="width:1%"></b></i></div>
                </div>
              </div>
            </article>
            <article class="workspace-card real-panel">
              <header><div><h3>${icon("folder", 17)}Allocations</h3><p>Weekly quota · priority 1 is protected first</p></div><button>${icon("plus", 13)} Add allocation</button></header>
              <div class="budget-summary"><span><b>20%</b> used</span><span><b>65%</b> planned</span><span><b>35%</b> free</span></div>
              <div class="allocation-head"><span>Project</span><span>Weekly</span><span>Used</span><span>Left</span><span>Status</span><span></span></div>
              ${[["project-a", "40%", "15%", "25%"], ["project-b", "25%", "5%", "20%"]].map(([name, weekly, used, left], index) => `<div class="workspace-row"><div class="workspace-name"><em class="rank">${index + 1}</em>${icon("folder", 14)}<b>${name}</b>${icon("chevron-down", 13)}</div><span>${weekly}</span><span>${used}</span><div class="row-left"><strong>${left}</strong><i><b style="width:${left}"></b></i></div><em class="status">${icon("activity", 12)}Tracking</em><span class="row-actions">${icon("settings", 13)}${icon("grip", 13)}</span></div>`).join("")}
            </article>
          </div>
        </div>
      </div>

      <div class="hero-terminal" aria-label="qfence top running in a terminal">
        <div class="terminal-bar"><span></span><span></span><span></span><small>~/Code/project-a - qfence top</small></div>
        <pre><b> QUOTAFENCE TOP </b><i>  live local control plane</i>

<i>PROVIDER      5-HOUR            WEEKLY</i>
Claude Code   <em>━━━━━━</em><i>──</i>  62%     <em>━━━━━━━━</em>  74%
Codex         <em>━━━━━━━━</em>  93%     <em>━━━━━━━</em><i>─</i>  85%

<i>#  PROJECT      WEEKLY  USED  LEFT  STATUS</i>
1  project-a    40%     15%   25%   <em>● allow</em>
2  project-b    25%      5%   20%   <em>● allow</em>

<i>refreshed just now · live interval 30s</i></pre>
      </div>
      </div>
    </section>

    <section class="problem-band"><div class="section-shell problem-grid reveal"><p class="section-label">The problem</p><h2>Shared limits create <em>project-level blind spots.</em></h2><p>Provider usage pages show account-level capacity. They do not give each local project an explicit weekly budget or priority when several agents share the same allowance.</p></div></section>

    <section class="section-shell feature-section" id="product">
      <div class="section-intro reveal">
        <div><p class="section-label">The control layer</p><h2>See the limit. Decide where it goes.</h2><p>QuotaFence combines provider allowance tracking, weekly folder budgets, local policy checks, and basic history without requiring a hosted account.</p></div>
        <a class="pill-link" href="#workflow">How it works ${icon("chevron-down", 14)}</a>
      </div>
      <div class="feature-grid">${features.map((feature) => `<article class="feature-card reveal"><span>${feature.index}</span>${featureVisuals[feature.visual]}<h3>${feature.title}</h3><p>${feature.body}</p></article>`).join("")}</div>
    </section>

    <section class="section-shell compare-section">
      <div class="compare-intro reveal"><p class="section-label">Why not just the provider dashboard</p><h2>Awareness isn't control.</h2></div>
      <div class="compare-grid reveal">
        <div class="compare-col compare-without">
          <p class="compare-col-label">Without QuotaFence</p>
          <ul>
            <li>One shared allowance with no explicit project budgets</li>
            <li>No priority order when several projects compete for capacity</li>
            <li>No local policy check before supported new work begins</li>
            <li>Checking usage means leaving the terminal for a browser tab</li>
          </ul>
        </div>
        <div class="compare-col compare-with">
          <p class="compare-col-label">With QuotaFence</p>
          <ul>
            <li>Weekly budgets attached to real project folders</li>
            <li>Priority determines which budget is protected first</li>
            <li>Warn or Stop decisions based on current local policy</li>
            <li>One local ledger for the CLI and desktop - no round-trip required</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="workflow-section" id="workflow"><div class="section-shell">
      <div class="cli-heading reveal"><div><p class="section-label">The CLI</p><h2>The same ledger, without leaving the terminal.</h2></div><p>The same local ledger powers the desktop app and <code>qfence</code>. Monitor quota live, manage project budgets, and launch protected agents without changing context.</p></div>
      <div class="cli-showcase reveal">
        <div class="cli-menu" role="tablist" aria-label="QuotaFence CLI capabilities">
          <button class="active" type="button" role="tab" aria-selected="true" data-cli-tab="top"><span>01</span><b>Live dashboard</b><small>Quota, projects, history</small></button>
          <button type="button" role="tab" aria-selected="false" data-cli-tab="allocate"><span>02</span><b>Manage budgets</b><small>Add, resize, reprioritize</small></button>
          <button type="button" role="tab" aria-selected="false" data-cli-tab="guard"><span>03</span><b>Guard agents</b><small>Codex and Claude</small></button>
        </div>
        <div class="terminal cli-terminal">
          <div class="terminal-bar"><span></span><span></span><span></span><small>~/Code/project-a</small></div>
          <div class="cli-panel active" role="tabpanel" data-cli-panel="top"><code><span>❯</span> qfence top --once</code><pre><b> QUOTAFENCE TOP </b><i>  live local control plane  interactive mode: qfence top</i>

<i>╭─────────────┬──────────────────────────────┬──────────────────────────────┬──────────────╮
│ PROVIDER    │ 5-HOUR                       │ WEEKLY                       │ SYNCED       │
├─────────────┼──────────────────────────────┼──────────────────────────────┼──────────────┤</i>
<i>│</i> Claude Code <i>│</i> <em>━━━━━━</em><i>──</i>  70% ↻ today 12:00  <i>│</i> <em>━━━━━━━━</em>  90% ↻ tomorrow     <i>│</i> <em>● 55s ago</em>    <i>│</i>
<i>│</i> Codex       <i>│</i> <em>━━━━━━━━</em>  93% ↻ today 16:22  <i>│</i> <em>━━━━━━━</em><i>─</i>  85% ↻ Sep 15 04:21 <i>│</i> <em>● 7s ago</em>     <i>│</i>
<i>╰─────────────┴──────────────────────────────┴──────────────────────────────┴──────────────╯</i>

<strong>  PROJECT ALLOCATIONS</strong>
<i>╭─────┬─────────────┬─────────────────────┬──────────┬──────────┬──────────┬──────────────╮
│ #   │ PROVIDER    │ PROJECT             │ WEEKLY   │ USED     │ LEFT     │ STATUS       │
├─────┼─────────────┼─────────────────────┼──────────┼──────────┼──────────┼──────────────┤</i>
<i>│</i> 1   <i>│</i> Claude Code <i>│</i> project-c           <i>│</i> 15%      <i>│</i> 2%       <i>│</i> 13%      <i>│</i> <em>● allow</em>      <i>│</i>
<i>│</i> 1   <i>│</i> Codex       <i>│</i> project-a           <i>│</i> 50%      <i>│</i> 12%      <i>│</i> 38%      <i>│</i> <em>● allow</em>      <i>│</i>
<i>│</i> 2   <i>│</i> Codex       <i>│</i> project-b           <i>│</i> 30%      <i>│</i> 6%       <i>│</i> 24%      <i>│</i> <em>● allow</em>      <i>│</i>
<i>╰─────┴─────────────┴─────────────────────┴──────────┴──────────┴──────────┴──────────────╯</i>

  <em>●</em>  Claude Code · 20% used over 30 days
  <strong>··········▂···▄··············█</strong>
  <i>10 Aug                  08 Sep</i>

  <em>●</em>  Codex · 35% used over 30 days
  <strong>·▂▂█····▁·▂···▁···▁▁······▂·▁▂</strong>
  <i>10 Aug                  08 Sep</i>

  <i>refreshed just now · live interval 30s</i></pre></div>
          <div class="cli-panel" role="tabpanel" data-cli-panel="allocate"><code><span>❯</span> qfence allocations add --provider codex --percent 20</code><pre><b>PROJECT             WEEKLY   USED   LEFT   STATUS</b>
project-a           50%      12%    38%    ● allow
project-b           30%       6%    24%    ● allow
project-c           20%       0%    20%    ● allow

<i># Resize, fund from another project, or change priority</i>
❯ qfence allocations set project-c --percent 30 --from project-a
❯ qfence allocations move project-c up</pre></div>
          <div class="cli-panel" role="tabpanel" data-cli-panel="guard"><code><span>❯</span> qfence codex</code><pre>QuotaFence: launching Codex for project-a with 2 percentage points reserved (Weekly)

<i># Claude uses the same admission and reconciliation flow</i>
❯ qfence claude

<i># Preview a decision without launching</i>
❯ qfence admit codex</pre></div>
        </div>
      </div>
      <div class="workflow-steps reveal">${workflow.map(([title, body], index) => `<div class="workflow-step"><span>0${index + 1}</span><div><h3>${title}</h3><p>${body}</p></div></div>`).join("")}</div>
    </div></section>

    <section class="install-section section-shell" id="install">
      <div class="install-heading reveal">
        <div><p class="section-label">Install QuotaFence</p><h2>Desktop app, CLI, one local ledger.</h2></div>
        <div class="release-summary"><span class="release-indicator" data-release-indicator></span><p data-release-summary>Checking the latest release…</p></div>
      </div>
      <div class="install-grid">
        <article class="install-card install-card-featured reveal" data-install-card="npm">
          <span class="featured-tag">Recommended</span>
          <div class="install-card-head"><span class="platform-mark">›_</span><span class="availability" data-npm-status>Checking npm</span></div>
          <h3>CLI via npm</h3>
          <p>One command for supported macOS, Windows x64, and GNU/Linux x64 machines.</p>
          <code>npm install -g @quotafence/cli</code>
          <a class="install-link" data-npm-link href="${docsUrl}#install">Installation guide <span>→</span></a>
        </article>
        <article class="install-card reveal" data-install-card="macos">
          <div class="install-card-head"><span class="platform-mark">⌘</span><span class="availability" data-platform-status="macos">Checking release</span></div>
          <h3>macOS</h3>
          <p>Universal DMG for Apple Silicon and Intel. Signing status is listed with each release.</p>
          <a class="install-link" data-download="macos" href="${releasesUrl}" target="_blank" rel="noreferrer">View releases <span>↗</span></a>
        </article>
        <article class="install-card reveal" data-install-card="windows">
          <div class="install-card-head"><span class="platform-mark">⊞</span><span class="availability" data-platform-status="windows">Checking release</span></div>
          <h3>Windows</h3>
          <p>Unsigned x64 installer preview. Verify the published checksum before bypassing SmartScreen.</p>
          <a class="install-link" data-download="windows" href="${releasesUrl}" target="_blank" rel="noreferrer">View releases <span>↗</span></a>
        </article>
        <article class="install-card reveal" data-install-card="linux">
          <div class="install-card-head"><span class="platform-mark">◆</span><span class="availability" data-platform-status="linux">Checking release</span></div>
          <h3>Linux</h3>
          <p>x64 AppImage for portable use, plus a Debian package for compatible distributions.</p>
          <div class="linux-actions"><a class="install-link" data-download="linux-appimage" href="${releasesUrl}" target="_blank" rel="noreferrer">View releases <span>↗</span></a><a class="install-link secondary-install-link" data-download="linux-deb" href="${releasesUrl}" target="_blank" rel="noreferrer" hidden>Download .deb <span>↓</span></a></div>
        </article>
      </div>
      <p class="install-note reveal">Desktop downloads come from GitHub Releases. CI artifacts are temporary build outputs and are not used by these buttons. <a href="${docsUrl}#install">Read the installation guide →</a></p>
    </section>

    <section class="faq-section section-shell" id="faq">
      <div class="faq-heading reveal"><p class="section-label">Frequently asked questions</p><h2>What QuotaFence does, and what it does not.</h2></div>
      <div class="faq-list reveal">
        <details><summary>What is QuotaFence?</summary><p>QuotaFence is an open-source, local-first coding agent quota manager for Codex and Claude Code. It tracks provider allowance windows and lets you assign weekly budgets and priorities to local project folders.</p></details>
        <details><summary>Does QuotaFence read my prompts or source code?</summary><p>No. QuotaFence does not intentionally collect or upload prompts, responses, source files, transcripts, provider credentials, or its local SQLite database.</p></details>
        <details><summary>Can it show exact token usage for every project?</summary><p>No. Providers expose aggregate subscription usage, not exact subscription-token totals by folder. QuotaFence attributes supported managed activity and leaves ambiguous or concurrent activity explicitly unattributed.</p></details>
        <details><summary>Does it support both Codex and Claude Code?</summary><p>Yes. Both providers support 5-hour and weekly allowance sync, weekly project budgets, managed CLI launches, and provider-specific desktop prompt integrations where available.</p></details>
        <details><summary>Is QuotaFence free?</summary><p>The current core is open source under Apache 2.0 and includes project allocations, local enforcement, basic history, and desktop and terminal dashboards without a project-count limit.</p></details>
      </div>
    </section>

    <section class="section-shell principles-section" id="principles"><div class="principles-card reveal"><div><p class="section-label">Built on trust</p><h2>We would rather say <em>&ldquo;we don't know&rdquo;</em> than guess.</h2></div><div class="principle-list"><div><span>01</span><p><strong>Your policy stays on your device.</strong> Workspace metadata, allocations, and the managed-session ledger use local storage. No hosted account is required.</p></div><div><span>02</span><p><strong>Capability claims match reality.</strong> QuotaFence distinguishes process control, trusted prompt admission, and observation-only tracking instead of treating them as equivalent.</p></div><div><span>03</span><p><strong>Uncertainty remains visible.</strong> Concurrent or unmapped activity stays unattributed instead of being assigned to the wrong project.</p></div></div></div></section>

    <section class="cta-section section-shell reveal"><div><p class="section-label">Open source · Apache 2.0</p><h2>Give important projects<br>room to finish.</h2></div><div><p>Track Codex and Claude Code in one local dashboard, then turn shared weekly allowance into explicit project budgets and priorities.</p><div class="cta-actions"><a class="button button-primary light" href="#install">Install QuotaFence <span>↓</span></a><a class="button docs-button" href="${docsUrl}">Read the docs <span>→</span></a></div></div></section>
  </main>

  <footer class="site-footer section-shell"><a class="brand" href="#top" aria-label="QuotaFence home"><img class="brand-lockup" src="./assets/brand/quotafence-white-text.png" alt="QuotaFence" data-brand-img /></a><p>Local-first quota management for Codex and Claude Code.</p><a href="${repoUrl}" target="_blank" rel="noreferrer">GitHub ↗</a></footer>
`;
