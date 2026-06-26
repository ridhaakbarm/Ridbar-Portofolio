type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  inverted?: boolean;
};

export function SectionTitle({ eyebrow, title, description, inverted = false }: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">{eyebrow}</p>
      <h2 className={`mt-3 text-3xl font-black tracking-tight md:text-5xl ${inverted ? "text-text-primary" : "text-text-primary"}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 ${inverted ? "text-text-secondary" : "text-text-secondary"}`}>{description}</p>
      ) : null}
    </div>
  );
}
