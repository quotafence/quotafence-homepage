const repoUrl = "https://github.com/quotafence/quotafence";

const features = [
  { index: "01", title: "Allocate what matters", body: "Give every local workspace an intentional share of your limit, then reserve capacity for the projects where interruption costs the most." },
  { index: "02", title: "Guard the boundary", body: "Quotafence evaluates policy before a managed agent launch and can warn, request confirmation, or refuse work at configured thresholds." },
  { index: "03", title: "Attribute usage locally", body: "Managed sessions and provider checkpoints build a local ledger. Ambiguous activity stays explicitly unattributed instead of being presented as false precision." }
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
    <nav class="nav" data-nav><a href="#product">Product</a><a href="#workflow">Workflow</a><a href="#principles">Principles</a><a class="nav-cta" href="${repoUrl}" target="_blank" rel="noreferrer">View on GitHub <span>↗</span></a></nav>
  </header>

  <main id="top">
    <section class="hero section-shell">
      <div class="hero-copy reveal">
        <a class="announcement" href="${repoUrl}" target="_blank" rel="noreferrer"><b>Open source</b><i></i> Codex + Claude today · Copilot next <span>↗</span></a>
        <h1>Your agent quota.<br><em>Protected.</em></h1>
        <p class="hero-lead">Quotafence allocates, guards, and explains your coding-agent usage—so low-priority work never drains the capacity your important projects need.</p>
        <div class="hero-actions"><a class="button button-primary" href="${repoUrl}" target="_blank" rel="noreferrer">View on GitHub <span>↗</span></a><a class="button button-secondary" href="#workflow">See how it works</a></div>
        <div class="status-row"><span><i class="status-dot"></i> Local-first</span><span>Multi-provider</span><span>Apache 2.0</span></div>
      </div>

      <div class="product-window real-ui reveal" aria-label="Quotafence application interface">
        <div class="window-bar"><div class="window-dots"><span></span><span></span><span></span></div><span class="window-title">QuotaFence</span><span></span></div>
        <div class="real-app-layout">
          <aside class="real-sidebar">
            <div class="real-brand"><img class="real-brand-lockup" src="./assets/brand/quotafence-white-text.png" alt="QuotaFence" /></div>
            <nav class="real-nav"><a class="active"><span class="gauge-icon"><i></i></span>Overview</a><a><span class="settings-icon">⌾</span>Settings</a></nav>
            <div class="source-label"><span>Quota sources</span><b>＋</b></div>
            <div class="source-card active"><img src="./assets/codex-dark.png" alt="" /><div><strong>Codex</strong><small>5-hour + Weekly</small></div><i></i></div>
            <div class="source-card"><img src="./assets/claude.svg" alt="" /><div><strong>Claude Code</strong><small>5-hour + Weekly</small></div><i></i></div>
            <div class="source-card upcoming"><span class="copilot-mark">GH</span><div><strong>GitHub Copilot</strong><small>Coming soon</small></div><span class="soon-badge">Soon</span></div>
          </aside>
          <div class="real-main">
            <header class="real-topbar"><div><h3>Codex</h3><p>5-hour + Weekly allowances</p></div><button><span>↻</span> Sync</button></header>
            <div class="real-grid">
              <article class="allowance-card real-panel">
                <div class="card-kicker"><span class="gauge-mini">◔</span><i></i>2 allowance windows <small>Synced just now</small></div>
                <div class="allowance-row"><div><strong>5-hour</strong><span>Resets Sep 4</span></div><b>82% left</b><div class="allowance-track"><i style="width:82%"></i></div></div>
                <div class="allowance-row"><div><strong>Weekly</strong><span>Resets Sep 8</span></div><b>64% left</b><div class="allowance-track"><i style="width:64%"></i></div></div>
                <div class="heatmap-title"><span>⌁ Daily usage</span><small>Last 6 months · 34 active days</small></div>
                <div class="heatmap"><span class="days">Sun<br>Mon<br>Tue<br>Wed<br>Thu<br>Fri<br>Sat</span><div class="heatmap-cells">${Array.from({ length: 84 }, (_, index) => `<i class="level-${[0,0,1,0,2,0,0,1,0,0,3,0,0,1,0,2,0,0,0,4,0][index % 21]}"></i>`).join("")}</div></div>
              </article>
              <article class="summary-card real-panel">
                <div class="reset-row"><span>▣ Resets</span><strong>4 days</strong><small>Sep 8</small></div>
                <div class="real-donut"><span><strong>64%</strong><small>left</small></span></div>
                <dl><div><dt><i class="used"></i>Used</dt><dd>36%</dd></div><div><dt><i class="funded"></i>Protected</dt><dd>44%</dd></div><div><dt><i class="free"></i>Unassigned</dt><dd>20%</dd></div></dl>
              </article>
            </div>
            <article class="workspace-card real-panel">
              <header><div><h3>▱ Weekly workspace allocations</h3><p>Drag to set priority. Higher allocations are protected first.</p></div><button>＋ Add allocation</button></header>
              <div class="workspace-row"><span class="rank">1</span><div class="workspace-name"><b>quotafence</b><small>~/Code/quotafence</small></div><div class="workspace-quota"><span><b>12% used</b><small>18% available</small></span><div><i style="width:40%"></i><b style="width:35%"></b></div></div><strong class="limit">30%<small>limit</small></strong><span class="grip">⠿</span></div>
              <div class="workspace-row"><span class="rank">2</span><div class="workspace-name"><b>client-platform</b><small>~/Code/client-platform</small></div><div class="workspace-quota"><span><b>6% used</b><small>12% available</small></span><div><i style="width:32%"></i><b style="width:30%"></b></div></div><strong class="limit">18%<small>limit</small></strong><span class="grip">⠿</span></div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="problem-band"><div class="section-shell problem-grid reveal"><p class="section-label">The problem</p><h2>Shared limits create<br><em>invisible trade-offs.</em></h2><p>Provider dashboards tell you what remains. They don't tell you which project spent it—or stop background work before it consumes capacity reserved for something critical.</p></div></section>

    <section class="section-shell feature-section" id="product">
      <div class="section-intro reveal"><p class="section-label">The control layer</p><h2>Spend with intention.<br><em>Not anxiety.</em></h2><p>Quotafence puts allocation, admission, supervision, and reconciliation in one honest workflow.</p></div>
      <div class="feature-grid">${features.map((feature) => `<article class="feature-card reveal"><span>${feature.index}</span><div class="feature-icon" aria-hidden="true"><i></i><i></i><i></i></div><h3>${feature.title}</h3><p>${feature.body}</p></article>`).join("")}</div>
    </section>

    <section class="workflow-section" id="workflow"><div class="section-shell workflow-grid">
      <div class="workflow-copy reveal"><p class="section-label">How it works</p><h2>One command.<br>Four quiet checks.</h2><p>Run a supported agent from an allocated folder. Quotafence resolves context, checks policy, supervises the process, and reconciles usage when the session ends.</p><div class="terminal"><div class="terminal-bar"><span></span><span></span><span></span><small>Codex example · ~/Code/quotafence</small></div><code><span>❯</span> qf run codex</code><p><i>✓</i> Workspace resolved: quotafence</p><p><i>✓</i> 30% allocation · priority protected</p><p><i>✓</i> Admission allowed · reservation active</p><p class="terminal-muted">Launching agent under Quotafence supervision…</p></div></div>
      <div class="workflow-steps reveal">${workflow.map(([title, body], index) => `<div class="workflow-step"><span>0${index + 1}</span><div><h3>${title}</h3><p>${body}</p></div></div>`).join("")}</div>
    </div></section>

    <section class="section-shell principles-section" id="principles"><div class="principles-card reveal"><div><p class="section-label">Built on trust</p><h2>Local by default.<br><em>Honest by design.</em></h2></div><div class="principle-list"><div><span>01</span><p><strong>Your policy stays on your device.</strong> Workspace metadata, allocations, and the managed-session ledger use local storage. No hosted account is required.</p></div><div><span>02</span><p><strong>Capability claims match reality.</strong> Quotafence distinguishes process control, trusted prompt admission, and observation-only tracking instead of treating them as equivalent.</p></div><div><span>03</span><p><strong>Uncertainty remains visible.</strong> Concurrent or unmapped activity stays unattributed, and forecasts appear only when evidence is good enough.</p></div></div></div></section>

    <section class="cta-section section-shell reveal"><div><p class="section-label">Open source · Early stage</p><h2>Put a fence around<br>your best work.</h2></div><div><p>Quotafence supports Codex and Claude today, with GitHub Copilot next on the roadmap. Explore the architecture or help shape a calmer way to manage agent capacity.</p><a class="button button-primary light" href="${repoUrl}" target="_blank" rel="noreferrer">Explore the project <span>↗</span></a></div></section>
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
