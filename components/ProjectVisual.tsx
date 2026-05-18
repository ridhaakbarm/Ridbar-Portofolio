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
      <div className="overflow-hidden rounded-lg border border-line/15 bg-white shadow-sm">
        <div className="flex items-center justify-between gap-4 border-b border-line/10 px-4 py-3">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-signal">Real application screenshot</p>
            {!compact && <p className="mt-1 text-xs text-steel">{primary.label} captured from local project runtime</p>}
          </div>
          <span className="rounded-md bg-cloud px-2.5 py-1 text-[11px] font-bold text-ink">{project.sourceFolder}</span>
        </div>

        <div className={compact ? "p-3" : "p-5"}>
          <div className="overflow-hidden rounded-md border border-line/10 bg-cloud">
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
                  <figure key={screenshot.src} className="overflow-hidden rounded-md border border-line/10 bg-cloud">
                    <img
                      src={screenshot.src}
                      alt={screenshot.alt}
                      className="aspect-[16/10] w-full object-cover object-top"
                      loading="lazy"
                    />
                    <figcaption className="border-t border-line/10 bg-white px-3 py-2 text-xs font-bold text-ink">
                      {screenshot.label}
                    </figcaption>
                  </figure>
                ))}
              </div>
              <p className="mt-4 text-xs leading-5 text-steel">
                Screenshots were captured from local Laravel runtimes using the available local databases and safe portfolio routes.
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
    <div className="overflow-hidden rounded-lg border border-line/15 bg-ink text-white shadow-sm">
      <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-signal">{project.preview.label}</p>
          {!compact && <p className="mt-1 text-xs text-white/45">{project.sourceFolder}</p>}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-signal" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
        </div>
      </div>

      <div className={compact ? "p-4" : "p-5"}>
        <div className="grid grid-cols-2 gap-2">
          {metrics.map((metric, index) => (
            <div key={metric} className="rounded-md border border-white/10 bg-white/[0.06] p-3">
              <div className="flex items-center justify-between gap-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/45">{metric}</p>
                {index % 2 === 0 ? <Gauge size={14} className="text-signal" /> : <Activity size={14} className="text-amber" />}
              </div>
              <div className="mt-3 h-2 rounded-full bg-white/10">
                <div
                  className="h-2 rounded-full bg-signal"
                  style={{ width: `${58 + index * 9}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-md border border-white/10 bg-white/[0.06] p-3">
          <div className="flex items-center gap-2 text-signal">
            <RadioTower size={15} />
            <p className="text-[11px] font-bold uppercase tracking-[0.18em]">Operational flow</p>
          </div>
          <div className="mt-3 grid gap-2">
            {flow.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 size={14} className="shrink-0 text-signal" />
                <p className="text-xs font-semibold text-white/72">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {!compact && (
          <p className="mt-4 border-t border-white/10 pt-4 text-xs leading-5 text-white/50">
            {project.preview.note}
          </p>
        )}
      </div>
    </div>
  );
}
