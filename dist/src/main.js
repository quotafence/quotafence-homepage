const repoUrl = "https://github.com/quotafence/quotafence";
const docsUrl = `${repoUrl}/tree/main/docs`;

const features = [
  { index: "01", title: "See everything live", body: "Open qfence top for a live terminal dashboard of provider allowances, project budgets, sync health, and six months of local usage history." },
  { index: "02", title: "Allocate from the CLI", body: "Create, resize, remove, and reprioritize project budgets without leaving the terminal—or use the desktop app for the same local ledger." },
  { index: "03", title: "Guard every launch", body: "Start Codex or Claude through QuotaFence. It checks policy, reserves capacity, supervises the process, and reconciles trustworthy usage when it exits." }
];

const workflow = [
  ["Map", "Bind a local folder to a workspace allocation."],
  ["Run", "Start a supported agent through one lightweight managed command."],
  ["Guard", "Reserve capacity and enforce the active policy boundary."],
  ["Reconcile", "Refresh the provider checkpoint and record trustworthy usage."]
];

const app = document.querySelector("#app");
app.innerHTML = `
  <header class="site-header" data-header>
    <a class="brand" href="#top" aria-label="QuotaFence home"><img class="brand-lockup" src="./assets/brand/quotafence-white-text.png" alt="QuotaFence" /></a>
    <button class="menu-button" type="button" aria-label="Toggle navigation" aria-expanded="false" data-menu-button><span></span><span></span></button>
    <nav class="nav" data-nav><a href="#product">Product</a><a href="#workflow">Workflow</a><a href="#principles">Principles</a><a href="${docsUrl}" target="_blank" rel="noreferrer">Docs</a><a class="nav-cta" href="${repoUrl}" target="_blank" rel="noreferrer">View on GitHub <span>↗</span></a></nav>
  </header>

  <main id="top">
    <section class="hero section-shell">
      <div class="hero-copy reveal">
        <a class="announcement" href="${repoUrl}" target="_blank" rel="noreferrer"><b>Open source</b><i></i> Codex + Claude today · Copilot next <span>↗</span></a>
        <h1><span>Your agent quota.</span><em>Protected.</em></h1>
        <p class="hero-lead">QuotaFence allocates, guards, and explains your coding-agent usage—so low-priority work never drains the capacity your important projects need.</p>
        <div class="hero-actions"><a class="button button-primary" href="${repoUrl}" target="_blank" rel="noreferrer">View on GitHub <span>↗</span></a><a class="button button-secondary" href="#workflow">See how it works</a></div>
        <div class="status-row"><span><i class="status-dot"></i> Local-first</span><span>Multi-provider</span><span>Apache 2.0</span></div>
      </div>

      <div class="product-window real-ui reveal" aria-label="Quotafence application interface">
        <div class="window-bar"><div class="window-dots"><span></span><span></span><span></span></div><span class="window-title">QuotaFence</span><span></span></div>
        <div class="real-app-layout">
          <aside class="real-sidebar">
            <div class="real-brand"><img class="real-brand-lockup" src="./assets/brand/quotafence-white-text.png" alt="QuotaFence" /></div>
            <nav class="real-nav"><a class="active"><span class="gauge-icon"><i></i></span>Overview</a><a><span class="folder-icon">▰</span>Projects</a><a><span class="settings-icon">⌾</span>Settings</a></nav>
            <div class="source-label"><span>Quota sources</span><b>＋</b></div>
            <div class="source-card active"><img src="./assets/codex-dark.png" alt="" /><div><strong>Codex</strong><small>5-hour + Weekly</small></div><i></i></div>
            <div class="source-card"><img src="./assets/claude.svg" alt="" /><div><strong>Claude Code</strong><small>5-hour + Weekly</small></div><i></i></div>
            <div class="source-card upcoming"><span class="copilot-mark">GH</span><div><strong>GitHub Copilot</strong><small>Coming soon</small></div><span class="soon-badge">Soon</span></div>
          </aside>
          <div class="real-main">
            <header class="real-topbar"><div><h3>Codex</h3><p>5-hour + Weekly allowances</p></div><button><span>↻</span> Sync</button></header>
            <article class="allowance-card real-panel">
              <div class="card-kicker"><span class="gauge-mini">◔</span><i></i>2 allowance windows <small>Synced just now</small></div>
              <div class="allowance-row"><div><strong>5-hour</strong><span>Resets today, 16:22</span></div><b>93% left</b><div class="allowance-track"><i style="width:93%"></i></div></div>
              <div class="allowance-row"><div><strong>Weekly</strong><span>Resets Sep 15, 04:21</span></div><b>85% left</b><div class="allowance-track"><i style="width:85%"></i></div></div>
              <div class="usage-insights">
                <div><div class="heatmap-title"><span>⌁ Daily usage</span><small>Last 6 months</small></div><div class="heatmap"><div class="heatmap-cells">${Array.from({ length: 70 }, (_, index) => `<i class="level-${[0,0,1,0,2,0,0,1,0,0,3,0,0,1,0,2,0,0,0,4,0][index % 21]}"></i>`).join("")}</div></div></div>
                <div class="model-card"><div><span>✦ Model usage</span><small>Observed token share</small></div><p><b>gpt-5</b><span>68%</span></p><i><b style="width:68%"></b></i><p><b>gpt-5-mini</b><span>24%</span></p><i><b style="width:24%"></b></i></div>
              </div>
            </article>
            <article class="workspace-card real-panel">
              <header><div><h3>▰ Allocations</h3><p>Weekly quota · priority 1 is protected first</p></div><button>＋ Add allocation</button></header>
              <div class="budget-summary"><span><b>18%</b> used</span><span><b>42%</b> protected</span><span><b>40%</b> free</span></div>
              <div class="allocation-head"><span>Project</span><span>Weekly</span><span>Used</span><span>Left</span><span>Status</span><span></span></div>
              <div class="workspace-row"><span class="rank">1</span><div class="workspace-name"><b>quotafence</b><small>⌄</small></div><strong>30%</strong><span>12%</span><span>18%</span><em>● Active</em><span class="grip">⋯</span></div>
              <div class="workspace-row"><span class="rank">2</span><div class="workspace-name"><b>client-platform</b><small>⌄</small></div><strong>18%</strong><span>6%</span><span>12%</span><em>● Active</em><span class="grip">⋯</span></div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="problem-band"><div class="section-shell problem-grid reveal"><p class="section-label">The problem</p><h2>Shared limits create<br><em>invisible trade-offs.</em></h2><p>Provider dashboards tell you what remains. They don't tell you which project spent it—or stop background work before it consumes capacity reserved for something critical.</p></div></section>

    <section class="section-shell feature-section" id="product">
      <div class="section-intro reveal"><p class="section-label">The control layer</p><h2>Spend with intention.<br><em>Not anxiety.</em></h2><p>QuotaFence puts allocation, admission, supervision, and reconciliation in one honest workflow.</p></div>
      <div class="feature-grid">${features.map((feature) => `<article class="feature-card reveal"><span>${feature.index}</span><div class="feature-icon" aria-hidden="true"><i></i><i></i><i></i></div><h3>${feature.title}</h3><p>${feature.body}</p></article>`).join("")}</div>
    </section>

    <section class="workflow-section" id="workflow"><div class="section-shell">
      <div class="cli-heading reveal"><div><p class="section-label">The CLI</p><h2>Your control plane.<br>Right in the terminal.</h2></div><p>The same local ledger powers the desktop app and <code>qfence</code>. Monitor quota live, manage project budgets, and launch protected agents without changing context.</p></div>
      <div class="cli-showcase reveal">
        <div class="cli-menu" role="tablist" aria-label="QuotaFence CLI capabilities">
          <button class="active" type="button" role="tab" aria-selected="true" data-cli-tab="top"><span>01</span><b>Live dashboard</b><small>Quota, projects, history</small></button>
          <button type="button" role="tab" aria-selected="false" data-cli-tab="allocate"><span>02</span><b>Manage budgets</b><small>Add, resize, reprioritize</small></button>
          <button type="button" role="tab" aria-selected="false" data-cli-tab="guard"><span>03</span><b>Guard agents</b><small>Codex and Claude</small></button>
        </div>
        <div class="terminal cli-terminal">
          <div class="terminal-bar"><span></span><span></span><span></span><small>~/Code/quotafence</small></div>
          <div class="cli-panel active" role="tabpanel" data-cli-panel="top"><code><span>❯</span> qfence top --once</code><pre><b> QUOTAFENCE TOP </b>  live local control plane  interactive mode: qfence top

╭─────────────┬──────────────────────────────┬──────────────────────────────┬──────────────╮
│ PROVIDER    │ 5-HOUR                       │ WEEKLY                       │ SYNCED       │
├─────────────┼──────────────────────────────┼──────────────────────────────┼──────────────┤
│ Claude Code │ ━━━━━━──  70% ↻ today 12:00  │ ━━━━━━━━  90% ↻ tomorrow     │ ● 55s ago    │
│ Codex       │ ━━━━━━━━  93% ↻ today 16:22  │ ━━━━━━━─  85% ↻ Sep 15 04:21 │ ● 7s ago     │
╰─────────────┴──────────────────────────────┴──────────────────────────────┴──────────────╯

<strong>  PROJECT ALLOCATIONS</strong>
╭─────┬─────────────┬─────────────────────┬──────────┬──────────┬──────────┬──────────────╮
│ #   │ PROVIDER    │ PROJECT             │ WEEKLY   │ USED     │ LEFT     │ STATUS       │
├─────┼─────────────┼─────────────────────┼──────────┼──────────┼──────────┼──────────────┤
│ 1   │ Claude Code │ research            │ 15%      │ 2%       │ 13%      │ ● allow      │
│ 1   │ Codex       │ quotafence          │ 50%      │ 12%      │ 38%      │ ● allow      │
│ 2   │ Codex       │ client-platform     │ 30%      │ 6%       │ 24%      │ ● allow      │
╰─────┴─────────────┴─────────────────────┴──────────┴──────────┴──────────┴──────────────╯

  <i>●  Claude Code · 20% used over 30 days</i>
  ··········▂···▄··············█
  10 Aug                  08 Sep

  <i>●  Codex · 35% used over 30 days</i>
  ·▂▂█····▁·▂···▁···▁▁······▂·▁▂
  10 Aug                  08 Sep

  refreshed just now · live interval 30s</pre></div>
          <div class="cli-panel" role="tabpanel" data-cli-panel="allocate"><code><span>❯</span> qfence allocations add --provider codex --percent 20</code><pre><b>PROJECT             WEEKLY   USED   LEFT   STATUS</b>
quotafence          50%      12%    38%    ● allow
client-platform     30%       6%    24%    ● allow
new-project         20%       0%    20%    ● allow

<i># Resize, fund from another project, or change priority</i>
❯ qfence allocations set new-project --percent 30 --from quotafence
❯ qfence allocations move new-project up</pre></div>
          <div class="cli-panel" role="tabpanel" data-cli-panel="guard"><code><span>❯</span> qfence codex --model gpt-5</code><pre>QuotaFence: launching Codex for quotafence with 2 percentage points reserved (Weekly)

<i># Claude uses the same admission and reconciliation flow</i>
❯ qfence claude --model sonnet

<i># Preview a decision without launching</i>
❯ qfence admit codex</pre></div>
        </div>
      </div>
      <div class="workflow-steps reveal">${workflow.map(([title, body], index) => `<div class="workflow-step"><span>0${index + 1}</span><div><h3>${title}</h3><p>${body}</p></div></div>`).join("")}</div>
    </div></section>

    <section class="section-shell principles-section" id="principles"><div class="principles-card reveal"><div><p class="section-label">Built on trust</p><h2>Local by default.<br><em>Honest by design.</em></h2></div><div class="principle-list"><div><span>01</span><p><strong>Your policy stays on your device.</strong> Workspace metadata, allocations, and the managed-session ledger use local storage. No hosted account is required.</p></div><div><span>02</span><p><strong>Capability claims match reality.</strong> Quotafence distinguishes process control, trusted prompt admission, and observation-only tracking instead of treating them as equivalent.</p></div><div><span>03</span><p><strong>Uncertainty remains visible.</strong> Concurrent or unmapped activity stays unattributed, and forecasts appear only when evidence is good enough.</p></div></div></div></section>

    <section class="cta-section section-shell reveal"><div><p class="section-label">Open source · Early stage</p><h2>Put a fence around<br>your best work.</h2></div><div><p>QuotaFence supports Codex and Claude today, with GitHub Copilot next on the roadmap. Explore the architecture or help shape a calmer way to manage agent capacity.</p><div class="cta-actions"><a class="button button-primary light" href="${repoUrl}" target="_blank" rel="noreferrer">Explore the project <span>↗</span></a><a class="button docs-button" href="${docsUrl}" target="_blank" rel="noreferrer">Read the docs <span>↗</span></a></div></div></section>
  </main>

  <footer class="site-footer section-shell"><a class="brand" href="#top" aria-label="QuotaFence home"><img class="brand-lockup" src="./assets/brand/quotafence-white-text.png" alt="QuotaFence" /></a><p>Multi-provider quota control for coding agents.</p><a href="${repoUrl}" target="_blank" rel="noreferrer">GitHub ↗</a></footer>
`;

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
