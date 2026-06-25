type StatusDotProps = {
  tone?: "red" | "green";
  label?: string;
};

export function Coordinates() {
  return (
    <div className="space-y-1 text-[10px] font-bold uppercase text-fog">
      <p>SYS.001</p>
      <p>06.25S / 106.82E</p>
      <p>OPERATIONS // 2024</p>
    </div>
  );
}

export function SystemLabel({ label = "LIVE BUILD" }: { label?: string }) {
  return (
    <div className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] px-3 py-2 text-[10px] font-bold uppercase text-fog">
      <StatusDot />
      {label}
    </div>
  );
}

export function StatusDot({ tone = "green", label }: StatusDotProps) {
  return (
    <span className="inline-flex items-center gap-2">
      <span
        className={`h-2 w-2 rounded-full ${tone === "green" ? "bg-emerald-400" : "bg-ember"} animate-pulse`}
      />
      {label ? <span className="text-[10px] font-bold uppercase text-fog">{label}</span> : null}
    </span>
  );
}

export function DataGrid() {
  return (
    <div className="grid grid-cols-6 gap-1">
      {Array.from({ length: 24 }).map((_, index) => (
        <span
          key={index}
          className={`h-2 border border-white/10 ${index % 5 === 0 ? "bg-ember/50" : "bg-white/[0.04]"}`}
        />
      ))}
    </div>
  );
}

export function ProjectCounter({ count }: { count: number }) {
  return (
    <div className="grid grid-cols-3 border-y border-white/10">
      {[
        [`${String(count).padStart(2, "0")}`, "Systems"],
        ["2024-25", "Period"],
        ["Active", "Status"]
      ].map(([value, label]) => (
        <div key={label} className="border-r border-white/10 px-4 py-4 last:border-r-0">
          <p className="font-display text-3xl leading-none text-bone md:text-4xl">{value}</p>
          <p className="mt-2 text-[10px] font-bold uppercase text-fog">{label}</p>
        </div>
      ))}
    </div>
  );
}

export function WorkflowNodes() {
  const nodes = ["Plan", "Build", "Monitor", "Improve"];

  return (
    <div className="flex items-center">
      {nodes.map((node, index) => (
        <div key={node} className="flex items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-[9px] font-bold uppercase text-chalk">
            {node}
          </div>
          {index < nodes.length - 1 ? <span className="h-px w-8 bg-white/15" /> : null}
        </div>
      ))}
    </div>
  );
}
