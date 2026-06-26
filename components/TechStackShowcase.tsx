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
    <section className="bg-bg-secondary px-5 py-24 text-text-primary">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase text-accent">Engineering stack</p>
          <h2 className="mt-3 font-display text-6xl font-black leading-none text-text-primary md:text-8xl">Tech Arsenal</h2>
          <p className="mt-5 text-base leading-7 text-text-secondary">
            The portfolio is not just domain knowledge. It is fullstack implementation: backend models,
            frontend interfaces, integrations, exports, and workflow architecture.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {groups.map((group) => (
            <article key={group.title} className="rounded-xl border border-border bg-bg-primary p-5 shadow-sm">
              <h3 className="font-display text-4xl font-black leading-none text-text-primary">{group.title}</h3>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-bg-elevated px-3 py-2 text-[11px] font-bold uppercase text-text-secondary transition hover:border-accent hover:text-text-primary"
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
