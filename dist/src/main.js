const repoUrl = "https://github.com/quotafence/quotafence";

const features = [
  { index: "01", title: "Allocate what matters", body: "Give every local workspace an intentional share of your limit, then reserve capacity for the projects where interruption costs the most." },
  { index: "02", title: "Guard the boundary", body: "Quotafence evaluates policy before a managed Codex launch and can warn, request confirmation, or refuse work at configured thresholds." },
  { index: "03", title: "Attribute usage locally", body: "Managed sessions and provider checkpoints build a local ledger. Ambiguous activity stays explicitly unattributed instead of being presented as false precision." }
];

const workflow = [
  ["Map", "Bind a local folder to a workspace allocation."],
  ["Run", "Start Codex through one lightweight managed command."],
  ["Guard", "Reserve capacity and enforce the active policy boundary."],
  ["Reconcile", "Refresh the provider checkpoint and record trustworthy usage."]
];

const app = document.querySelector("#app");
app.innerHTML = `
  <header class="site-header" data-header>
    <a class="brand" href="#top" aria-label="Quotafence home"><span class="brand-mark" aria-hidden="true"><span></span><span></span><span></span></span><span>quotafence</span></a>
    <button class="menu-button" type="button" aria-label="Toggle navigation" aria-expanded="false" data-menu-button><span></span><span></span></button>
    <nav class="nav" data-nav><a href="#product">Product</a><a href="#workflow">Workflow</a><a href="#principles">Principles</a><a class="nav-cta" href="${repoUrl}" target="_blank" rel="noreferrer">View on GitHub <span>↗</span></a></nav>
  </header>

  <main id="top">
    <section class="hero section-shell">
      <div class="hero-copy reveal">
        <a class="announcement" href="${repoUrl}" target="_blank" rel="noreferrer"><b>Open source</b><i></i> Built for Codex first <span>↗</span></a>
        <h1>Your agent quota.<br><em>Protected.</em></h1>
        <p class="hero-lead">Quotafence allocates, guards, and explains your coding-agent usage—so low-priority work never drains the capacity your important projects need.</p>
        <div class="hero-actions"><a class="button button-primary" href="${repoUrl}" target="_blank" rel="noreferrer">View on GitHub <span>↗</span></a><a class="button button-secondary" href="#workflow">See how it works</a></div>
        <div class="status-row"><span><i class="status-dot"></i> Local-first</span><span>Policy-driven</span><span>Apache 2.0</span></div>
      </div>

      <div class="product-window reveal" aria-label="Quotafence dashboard preview">
        <div class="window-bar"><div class="window-dots"><span></span><span></span><span></span></div><span class="window-title">quotafence</span><span class="window-state"><i></i> Guard active</span></div>
        <div class="window-body">
          <aside class="mock-sidebar">
            <div class="mini-brand"><span class="brand-mark small"><span></span><span></span><span></span></span><strong>QF</strong></div>
            <div class="mock-nav active"><i></i>Overview</div><div class="mock-nav"><i></i>Workspaces</div><div class="mock-nav"><i></i>Sessions</div><div class="mock-nav"><i></i>Settings</div>
            <div class="mock-profile"><span>SA</span><div><strong>Local profile</strong><small>On this device</small></div></div>
          </aside>
          <div class="mock-content">
            <div class="mock-heading"><div><small>OVERVIEW</small><h3>Good morning, Bùi.</h3></div><button>•••</button></div>
            <div class="quota-grid">
              <div class="quota-card main-quota"><div class="quota-ring"><div><strong>82%</strong><span>available</span></div></div><div class="quota-copy"><small>5-HOUR LIMIT</small><strong>Priority work protected</strong><p>Resets in 2h 18m</p></div></div>
              <div class="quota-card metric"><small>MANAGED BURN</small><strong>3.8%</strong><span>per day</span><div class="sparkline"><i></i><i></i><i></i><i></i><i></i><i></i></div></div>
              <div class="quota-card metric"><small>ATTRIBUTION</small><strong>92%</strong><span>trusted coverage</span><div class="progress"><i></i></div></div>
            </div>
            <div class="allocation-card">
              <div class="allocation-head"><div><small>PRIORITY PLAN</small><strong>Workspace allocations</strong></div><span>32% assigned</span></div>
              <div class="allocation-row"><div class="priority">1</div><div class="project"><strong>quotafence</strong><span>~/Code/quotafence</span></div><div class="bar"><i style="width:78%"></i></div><strong>30%</strong></div>
              <div class="allocation-row"><div class="priority">2</div><div class="project"><strong>Client dashboard</strong><span>~/Code/client-dashboard</span></div><div class="bar"><i style="width:47%"></i></div><strong>12%</strong></div>
              <div class="allocation-row muted"><div class="priority">—</div><div class="project"><strong>Unassigned capacity</strong><span>Available to any work</span></div><div class="bar"><i style="width:100%"></i></div><strong>68%</strong></div>
            </div>
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
      <div class="workflow-copy reveal"><p class="section-label">How it works</p><h2>One command.<br>Four quiet checks.</h2><p>Run Codex from an allocated folder. Quotafence resolves context, checks policy, supervises the process, and reconciles usage when the session ends.</p><div class="terminal"><div class="terminal-bar"><span></span><span></span><span></span><small>~/Code/quotafence</small></div><code><span>❯</span> qf run codex</code><p><i>✓</i> Workspace resolved: quotafence</p><p><i>✓</i> 30% allocation · priority protected</p><p><i>✓</i> Admission allowed · reservation active</p><p class="terminal-muted">Launching Codex under Quotafence supervision…</p></div></div>
      <div class="workflow-steps reveal">${workflow.map(([title, body], index) => `<div class="workflow-step"><span>0${index + 1}</span><div><h3>${title}</h3><p>${body}</p></div></div>`).join("")}</div>
    </div></section>

    <section class="section-shell principles-section" id="principles"><div class="principles-card reveal"><div><p class="section-label">Built on trust</p><h2>Local by default.<br><em>Honest by design.</em></h2></div><div class="principle-list"><div><span>01</span><p><strong>Your policy stays on your device.</strong> Workspace metadata, allocations, and the managed-session ledger use local storage. No hosted account is required.</p></div><div><span>02</span><p><strong>Capability claims match reality.</strong> Quotafence distinguishes process control, trusted prompt admission, and observation-only tracking instead of treating them as equivalent.</p></div><div><span>03</span><p><strong>Uncertainty remains visible.</strong> Concurrent or unmapped activity stays unattributed, and forecasts appear only when evidence is good enough.</p></div></div></div></section>

    <section class="cta-section section-shell reveal"><div><p class="section-label">Open source · Early stage</p><h2>Put a fence around<br>your best work.</h2></div><div><p>Quotafence is a Codex-first project. Explore the architecture, follow development, or help shape a calmer way to manage agent capacity.</p><a class="button button-primary light" href="${repoUrl}" target="_blank" rel="noreferrer">Explore the project <span>↗</span></a></div></section>
  </main>

  <footer class="site-footer section-shell"><a class="brand" href="#top"><span class="brand-mark" aria-hidden="true"><span></span><span></span><span></span></span><span>quotafence</span></a><p>Local-first quota control for coding agents.</p><a href="${repoUrl}" target="_blank" rel="noreferrer">GitHub ↗</a></footer>
`;

const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
menuButton.addEventListener("click", () => { const open = menuButton.getAttribute("aria-expanded") === "true"; menuButton.setAttribute("aria-expanded", String(!open)); nav.classList.toggle("open", !open); });
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => { nav.classList.remove("open"); menuButton.setAttribute("aria-expanded", "false"); }));
const header = document.querySelector("[data-header]");
window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 20), { passive: true });
const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); } }); }, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
