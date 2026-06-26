import { ChevronDown } from "lucide-react";

type StatusDotProps = {
  label?: string;
};

export function StatusDot({ label }: StatusDotProps) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
      {label ? <span className="text-[10px] font-bold uppercase text-text-secondary">{label}</span> : null}
    </span>
  );
}

export function ProjectCounter({ count }: { count: number }) {
  return (
    <div className="grid overflow-hidden rounded-2xl border border-border bg-bg-secondary/80 shadow-soft backdrop-blur md:grid-cols-3">
      {[
        [`${String(count).padStart(2, "0")}`, "Systems"],
        ["2024-25", "Period"],
        ["Active", "Status"]
      ].map(([value, label]) => (
        <div key={label} className="border-b border-border px-4 py-4 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
          <p className="font-display text-3xl font-black leading-none text-accent md:text-4xl">{value}</p>
          <p className="mt-2 text-[10px] font-bold uppercase text-text-secondary">{label}</p>
        </div>
      ))}
    </div>
  );
}

export function DevFloatingIcons() {
  const icons = [
    { label: ">_", className: "left-[10%] top-[22%]" },
    { label: "</>", className: "right-[12%] top-[28%]" },
    { label: "db", className: "left-[18%] bottom-[24%]" },
    { label: "api", className: "right-[18%] bottom-[18%]" }
  ];

  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block">
      {icons.map((icon, index) => (
        <span
          key={icon.label}
          className={`bob absolute rounded-full border border-border bg-bg-secondary/80 px-3 py-2 text-xs font-black uppercase text-accent shadow-sm ${icon.className}`}
          style={{ animationDelay: `${index * 0.45}s` }}
        >
          {icon.label}
        </span>
      ))}
    </div>
  );
}

export function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center gap-1 text-[10px] font-bold uppercase text-text-secondary">
      <span>scroll ke bawah</span>
      <ChevronDown className="animate-bounce text-accent" size={18} />
    </div>
  );
}
