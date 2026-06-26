const groups = [
  {
    title: "Backend",
    items: ["Laravel 10/12", "PHP 8.1/8.2", "MySQL", "Laravel Sanctum", "REST APIs"]
  },
  {
    title: "Frontend",
    items: ["Tailwind CSS", "Bootstrap", "Alpine.js", "Blade", "Vite", "Chart.js"]
  },
  {
    title: "Tools & Integration",
    items: ["Google Sheets API", "Maatwebsite Excel", "DomPDF", "Yajra DataTables"]
  },
  {
    title: "Architecture",
    items: ["MVC", "Role-Based Access", "Multi-step Workflows", "State Machines", "Domain Modeling"]
  }
];

export function TechStackShowcase() {
  return (
    <section className="bg-surface px-5 py-24 text-chalk">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase text-ember">Engineering stack</p>
          <h2 className="mt-3 font-display text-6xl leading-none text-bone md:text-8xl">Tech Arsenal</h2>
          <p className="mt-5 text-base leading-7 text-fog">
            The portfolio is not just domain knowledge. It is fullstack implementation: backend models,
            frontend interfaces, integrations, exports, and workflow architecture.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {groups.map((group) => (
            <article key={group.title} className="border border-white/10 bg-void/60 p-5">
              <h3 className="font-display text-4xl leading-none text-bone">{group.title}</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="border border-white/10 bg-white/[0.03] px-3 py-2 text-[11px] font-bold uppercase text-fog transition hover:border-ember hover:text-bone"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
