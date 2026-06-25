"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { DataGrid, StatusDot, WorkflowNodes } from "@/components/TechDecorations";

export function HeroVisual() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);

  return (
    <motion.div
      className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden border border-white/10 bg-elevated/70 p-5 shadow-glow"
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
      <div className="absolute inset-0 grid-lines opacity-60" />
      <div className="absolute left-5 top-5 z-10">
        <StatusDot label="profile signal" />
      </div>
      <div className="absolute right-5 top-5 z-10 text-right text-[10px] font-bold uppercase text-fog">
        <p>Industrial</p>
        <p>Interface</p>
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="pt-14">
          <div className="relative mx-auto flex aspect-square w-[72%] items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-dashed border-white/20" />
            <div className="absolute inset-[12%] rounded-full border border-dashed border-ember/50" />
            <div className="absolute inset-[24%] rounded-full border border-white/15" />
            <motion.div
              className="absolute inset-[5%] rounded-full border border-dashed border-white/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-[18%] rounded-full border border-dashed border-ember/30"
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
            {/* REPLACE: Add your profile photo here. Keep it square or portrait for best results. */}
            <div className="relative flex h-[46%] w-[46%] items-center justify-center rounded-full border border-white/15 bg-void text-center">
              <span className="font-display text-6xl leading-none text-bone">RA</span>
              <span className="absolute -right-2 top-5 h-4 w-4 rounded-full bg-ember shadow-glow" />
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <WorkflowNodes />
          <DataGrid />
          <div className="grid grid-cols-3 gap-2 text-[10px] font-bold uppercase text-fog">
            {["MES", "OEE", "QC"].map((item) => (
              <span key={item} className="border border-white/10 bg-white/[0.04] px-2 py-2 text-center">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
