import { Activity, CheckCircle2, Gauge, RadioTower } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectVisualProps = {
  project: Project;
  compact?: boolean;
};

export function ProjectVisual({ project, compact = false }: ProjectVisualProps) {
  if (project.screenshots?.length) {
    const [primary, ...rest] = project.screenshots;

    return (
      <div className="overflow-hidden rounded-xl border border-border bg-bg-secondary shadow-sm">
        <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-3">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">Operational interface</p>
            {!compact && <p className="mt-1 text-xs text-text-secondary">{primary.label}</p>}
          </div>
          <span className="rounded-full bg-bg-elevated px-2.5 py-1 text-[11px] font-bold text-text-primary">{project.category}</span>
        </div>

        <div className={compact ? "p-3" : "p-5"}>
          <div className="overflow-hidden rounded-xl border border-border bg-bg-elevated">
            <img
              src={primary.src}
              alt={primary.alt}
              className={`w-full object-cover object-top ${compact ? "aspect-[16/10]" : "aspect-[16/9]"}`}
              loading="lazy"
            />
          </div>
          {!compact && (
            <>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {rest.map((screenshot) => (
                  <figure key={screenshot.src} className="overflow-hidden rounded-xl border border-border bg-bg-elevated">
                    <img
                      src={screenshot.src}
                      alt={screenshot.alt}
                      className="aspect-[16/10] w-full object-cover object-top"
                      loading="lazy"
                    />
                    <figcaption className="border-t border-border bg-bg-secondary px-3 py-2 text-xs font-bold text-text-primary">
                      {screenshot.label}
                    </figcaption>
                  </figure>
                ))}
              </div>
              <p className="mt-4 text-xs leading-5 text-text-secondary">
                Interface examples show the operational workflows, dashboard views, and reporting screens used across the system.
              </p>
            </>
          )}
        </div>
      </div>
    );
  }

  const metrics = compact ? project.preview.metrics.slice(0, 3) : project.preview.metrics;
  const flow = compact ? project.preview.flow.slice(0, 3) : project.preview.flow;

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-bg-secondary text-text-primary shadow-sm">
      <div className="flex items-center justify-between border-b border-border bg-bg-elevated px-4 py-3">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">{project.preview.label}</p>
          {!compact && <p className="mt-1 text-xs text-text-secondary">{project.category}</p>}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          <span className="h-2.5 w-2.5 rounded-full bg-warm" />
          <span className="h-2.5 w-2.5 rounded-full bg-text-muted" />
        </div>
      </div>

      <div className={compact ? "p-4" : "p-5"}>
        <div className="grid grid-cols-2 gap-2">
          {metrics.map((metric, index) => (
            <div key={metric} className="rounded-xl border border-border bg-bg-primary p-3">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-text-secondary">{metric}</p>
                {index % 2 === 0 ? <Gauge size={14} className="text-accent" /> : <Activity size={14} className="text-warm" />}
              </div>
              <div className="mt-3 h-2 rounded-full bg-bg-elevated">
                <div
                  className="h-2 rounded-full bg-accent"
                  style={{ width: `${58 + index * 9}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-border bg-bg-primary p-3">
          <div className="flex items-center gap-2 text-accent">
            <RadioTower size={15} />
            <p className="text-[11px] font-bold uppercase tracking-[0.18em]">Operational flow</p>
          </div>
          <div className="mt-3 grid gap-2">
            {flow.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 size={14} className="shrink-0 text-accent" />
                <p className="text-xs font-semibold text-text-secondary">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {!compact && (
          <p className="mt-4 border-t border-border pt-4 text-xs leading-5 text-text-secondary">
            {project.preview.note}
          </p>
        )}
      </div>
    </div>
  );
}
