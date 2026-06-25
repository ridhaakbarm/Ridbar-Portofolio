type MarqueeProps = {
  items: string[];
};

export function Marquee({ items }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-void/80 py-4">
      <div className="marquee-track flex w-max items-center gap-6 whitespace-nowrap">
        {doubled.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-6 text-xs font-bold uppercase text-fog">
            <span>{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-ember" />
          </span>
        ))}
      </div>
    </div>
  );
}
