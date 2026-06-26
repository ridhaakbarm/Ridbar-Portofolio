"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { StatusDot } from "@/components/TechDecorations";

const codeLines = [
  ["const", " systems = buildFactoryApps();"],
  ["await", " deploy(workflows);"],
  ["return", " dashboards.ready();"]
];

export function HeroVisual() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);

  return (
    <motion.div
      className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-3xl border border-border bg-bg-secondary/86 p-5 shadow-glow backdrop-blur"
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-warm/20 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <StatusDot label="available" />
          <span className="rounded-full bg-accent-soft px-3 py-1 text-[10px] font-black uppercase text-accent">
            Fullstack
          </span>
        </div>

        <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-[2rem] border border-border bg-bg-elevated shadow-soft">
          <span className="rounded-[1.5rem] bg-bg-secondary px-6 py-5 font-display text-5xl font-black text-accent shadow-sm">
            RA
          </span>
        </div>

        <div className="rounded-2xl border border-border bg-bg-primary/80 p-4 shadow-sm">
          <div className="mb-4 flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-warm" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="h-2.5 w-2.5 rounded-full bg-text-muted" />
          </div>
          <div className="space-y-3 font-mono text-xs">
            {codeLines.map(([keyword, rest]) => (
              <p key={`${keyword}-${rest}`} className="text-text-secondary">
                <span className="font-bold text-accent">{keyword}</span>
                {rest}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {["Laravel", "PHP", "MySQL", "REST", "Tailwind"].map((item) => (
            <span key={item} className="rounded-full border border-border bg-bg-elevated px-3 py-1.5 text-[10px] font-black uppercase text-text-secondary">
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
