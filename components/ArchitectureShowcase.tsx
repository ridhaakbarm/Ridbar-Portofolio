const layers = [
  {
    title: "User Roles",
    detail: "Admin, operator, leader, QC, PPIC, verifier, technician, supervisor"
  },
  {
    title: "Workflow Engine",
    detail: "Approvals, tickets, queues, pauses, revisions, verification states"
  },
  {
    title: "Domain Models",
    detail: "Work orders, OEE reports, samples, assets, PM checks, schedules, lots"
  },
  {
    title: "Dashboards",
    detail: "Monitoring boards, KPI views, queues, reports, and operational analysis"
  },
  {
    title: "Exports & APIs",
    detail: "Excel, PDF, Google Sheets sync, REST endpoints, recalculation commands"
  }
];

export function ArchitectureShowcase() {
  return (
    <section className="relative overflow-hidden bg-bg-primary px-5 py-24 text-text-primary">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase text-accent">Systems architecture</p>
            <h2 className="mt-3 font-display text-6xl font-black leading-none text-text-primary md:text-8xl">
              How I Architect Systems
            </h2>
            <p className="mt-5 text-base leading-7 text-text-secondary">
              I map operational complexity into software layers: permissions, workflows, relational models,
              dashboards, and export/integration surfaces.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-border md:block" />
            <div className="grid gap-4">
            {layers.map((layer, index) => (
              <div
                key={layer.title}
                className="group relative grid gap-4 rounded-2xl border border-border bg-bg-secondary p-5 pl-5 shadow-sm transition hover:border-accent md:grid-cols-[4.5rem_1fr] md:items-start"
              >
                <div className="relative z-10 flex md:justify-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/30 bg-accent-soft font-display text-2xl font-black text-accent shadow-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="text-xl font-black leading-tight text-text-primary">{layer.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-text-secondary">{layer.detail}</p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
