const layers = [
  { title: "User Roles", detail: "Admin, operator, leader, QC, PPIC, verifier, technician, supervisor" },
  { title: "Workflow Engine", detail: "Approvals, tickets, queues, pauses, revisions, verification states" },
  { title: "Domain Models", detail: "Work orders, OEE reports, samples, assets, PM checks, schedules, lots" },
  { title: "Dashboards", detail: "Monitoring boards, KPI views, queues, reports, and operational analysis" },
  { title: "Exports & APIs", detail: "Excel, PDF, Google Sheets sync, REST endpoints, recalculation commands" }
];

export function ArchitectureShowcase() {
  return (
    <section className="relative overflow-hidden bg-void px-5 py-24 text-chalk">
      <div className="absolute inset-0 grid-lines opacity-40" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase text-ember">Systems architecture</p>
            <h2 className="mt-3 font-display text-6xl leading-none text-bone md:text-8xl">
              How I Architect Systems
            </h2>
            <p className="mt-5 text-base leading-7 text-fog">
              I map operational complexity into software layers: permissions, workflows, relational models,
              dashboards, and export/integration surfaces.
            </p>
          </div>

          <div className="grid gap-3">
            {layers.map((layer, index) => (
              <div key={layer.title} className="group grid gap-4 border border-white/10 bg-surface/80 p-4 transition hover:border-ember/70 md:grid-cols-[150px_1fr]">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ember/40 font-display text-2xl text-ember">
                    {index + 1}
                  </span>
                  <h3 className="font-display text-3xl leading-none text-bone">{layer.title}</h3>
                </div>
                <p className="text-sm leading-6 text-fog">{layer.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
