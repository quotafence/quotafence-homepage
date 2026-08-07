const repoUrl = "https://github.com/buisonanh/agent-quota-manager";

const features = [
  { index: "01", title: "Protect priority work", body: "Allocate the shared quota window across local workspaces, then keep lower-priority tasks from silently consuming capacity reserved for the projects that matter most." },
  { index: "02", title: "Put policy in the path", body: "AQM evaluates the workspace boundary before a managed Codex launch and can warn, request confirmation, or refuse work at configured thresholds." },
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
    <a class="brand" href="#top" aria-label="Agent Quota Manager home"><span class="brand-mark" aria-hidden="true"><span></span><span></span><span></span></span><span>Agent Quota Manager</span></a>
    <button class="menu-button" type="button" aria-label="Toggle navigation" aria-expanded="false" data-menu-button><span></span><span></span></button>
    <nav class="nav" data-nav><a href="#product">Product</a><a href="#workflow">Workflow</a><a href="#principles">Principles</a><a class="nav-cta" href="${repoUrl}" target="_blank" rel="noreferrer">View on GitHub <span>↗</span></a></nav>
  </header>

  <main id="top">
    <section class="hero section-shell">
      <div class="hero-copy reveal">
        <p class="eyebrow"><span></span> Local-first control for coding agents</p>
        <h1>Save your AI quota for the work that matters.</h1>
        <p class="hero-lead">Agent Quota Manager is a local budget guard and routing layer for AI coding agents. Allocate shared capacity by workspace, apply policy before work starts, and understand where managed usage went.</p>
        <div class="hero-actions"><a class="button button-primary" href="${repoUrl}" target="_blank" rel="noreferrer">Explore the project <span>↗</span></a><a class="button button-secondary" href="#workflow">See how it works</a></div>
        <div class="status-row"><span class="status-dot"></span><span>Early local MVP · Codex first · Apache 2.0</span></div>
      </div>

      <div class="product-window reveal" aria-label="Agent Quota Manager dashboard preview">
        <div class="window-bar"><div class="window-dots"><span></span><span></span><span></span></div><span class="window-title">Agent Quota Manager</span><span class="window-state">Protected</span></div>
        <div class="window-body">
          <aside class="mock-sidebar">
            <div class="mini-brand"><span class="brand-mark small"><span></span><span></span><span></span></span><strong>AQM</strong></div>
            <div class="mock-nav active"><i></i>Overview</div><div class="mock-nav"><i></i>Workspaces</div><div class="mock-nav"><i></i>Sessions</div><div class="mock-nav"><i></i>Settings</div>
            <div class="mock-profile"><span>SA</span><div><strong>Local profile</strong><small>On this device</small></div></div>
          </aside>
          <div class="mock-content">
            <div class="mock-heading"><div><small>CODEX QUOTA WINDOW</small><h3>Capacity overview</h3></div><button>Refresh</button></div>
            <div class="quota-grid">
              <div class="quota-card main-quota"><div class="quota-ring"><div><strong>68%</strong><span>remaining</span></div></div><div class="quota-copy"><small>CURRENT WINDOW</small><strong>Protected capacity</strong><p>Resets in 3d 8h</p></div></div>
              <div class="quota-card metric"><small>MANAGED BURN</small><strong>3.8%</strong><span>per day</span><div class="sparkline"><i></i><i></i><i></i><i></i><i></i><i></i></div></div>
              <div class="quota-card metric"><small>ATTRIBUTION</small><strong>92%</strong><span>trusted coverage</span><div class="progress"><i></i></div></div>
            </div>
            <div class="allocation-card">
              <div class="allocation-head"><div><small>PRIORITY PLAN</small><strong>Workspace allocations</strong></div><span>32% assigned</span></div>
              <div class="allocation-row"><div class="priority">1</div><div class="project"><strong>Agent Quota Manager</strong><span>~/Code/agent-quota-manager</span></div><div class="bar"><i style="width:78%"></i></div><strong>20%</strong></div>
              <div class="allocation-row"><div class="priority">2</div><div class="project"><strong>Client dashboard</strong><span>~/Code/client-dashboard</span></div><div class="bar"><i style="width:47%"></i></div><strong>12%</strong></div>
              <div class="allocation-row muted"><div class="priority">—</div><div class="project"><strong>Unassigned capacity</strong><span>Available to any work</span></div><div class="bar"><i style="width:100%"></i></div><strong>68%</strong></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="problem-band"><div class="section-shell problem-grid reveal"><p class="section-label">The problem</p><h2>One shared limit.<br>Many competing projects.</h2><p>Provider dashboards show account-level capacity, but they rarely explain which local workspace consumed it or stop low-priority work before important tasks lose their budget.</p></div></section>

    <section class="section-shell feature-section" id="product">
      <div class="section-intro reveal"><p class="section-label">A local control layer</p><h2>More than another usage dashboard.</h2><p>AQM places allocation, admission, process supervision, and reconciliation in one honest workflow.</p></div>
      <div class="feature-grid">${features.map((feature) => `<article class="feature-card reveal"><span>${feature.index}</span><div class="feature-icon" aria-hidden="true"><i></i><i></i><i></i></div><h3>${feature.title}</h3><p>${feature.body}</p></article>`).join("")}</div>
    </section>

    <section class="workflow-section" id="workflow"><div class="section-shell workflow-grid">
      <div class="workflow-copy reveal"><p class="section-label">The daily workflow</p><h2>One managed command between intent and execution.</h2><p>Run Codex from an allocated folder. AQM resolves context, checks policy, supervises the process, and reconciles usage when the session ends.</p><div class="terminal"><div class="terminal-bar"><span></span><span></span><span></span><small>terminal</small></div><code><span>$</span> aqm run codex</code><p><i>✓</i> Workspace resolved: Agent Quota Manager</p><p><i>✓</i> 20% target · 13.6% currently funded</p><p><i>✓</i> Admission allowed · reservation active</p><p class="terminal-muted">Launching Codex under AQM supervision…</p></div></div>
      <div class="workflow-steps reveal">${workflow.map(([title, body], index) => `<div class="workflow-step"><span>0${index + 1}</span><div><h3>${title}</h3><p>${body}</p></div></div>`).join("")}</div>
    </div></section>

    <section class="section-shell principles-section" id="principles"><div class="principles-card reveal"><div><p class="section-label">Built on clear principles</p><h2>Local by default.<br>Honest by design.</h2></div><div class="principle-list"><div><span>01</span><p><strong>Your policy stays on your device.</strong> Workspace metadata, allocations, and the managed-session ledger use local storage. No hosted account is required.</p></div><div><span>02</span><p><strong>Capability claims match reality.</strong> AQM distinguishes process control, trusted prompt admission, and observation-only tracking instead of treating them as equivalent.</p></div><div><span>03</span><p><strong>Uncertainty remains visible.</strong> Concurrent or unmapped activity stays unattributed, and forecasts appear only when evidence is good enough.</p></div></div></div></section>

    <section class="cta-section section-shell reveal"><div><p class="section-label">Open source · Early stage</p><h2>Help shape the control layer for agentic work.</h2></div><div><p>Agent Quota Manager is an early Codex-first MVP. Explore the architecture, follow development, or contribute on GitHub.</p><a class="button button-primary light" href="${repoUrl}" target="_blank" rel="noreferrer">View repository <span>↗</span></a></div></section>
  </main>

  <footer class="site-footer section-shell"><a class="brand" href="#top"><span class="brand-mark" aria-hidden="true"><span></span><span></span><span></span></span><span>Agent Quota Manager</span></a><p>Independent open-source project. Not affiliated with or endorsed by OpenAI.</p><a href="${repoUrl}" target="_blank" rel="noreferrer">GitHub ↗</a></footer>
`;

const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
menuButton.addEventListener("click", () => { const open = menuButton.getAttribute("aria-expanded") === "true"; menuButton.setAttribute("aria-expanded", String(!open)); nav.classList.toggle("open", !open); });
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => { nav.classList.remove("open"); menuButton.setAttribute("aria-expanded", "false"); }));
const header = document.querySelector("[data-header]");
window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 20), { passive: true });
const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); } }); }, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
