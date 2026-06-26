"use client";

import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";
import { HeroLandscape } from "@/components/HeroLandscape";
import { HeroVisual } from "@/components/HeroVisual";
import { Marquee } from "@/components/Marquee";
import { DevFloatingIcons, ProjectCounter, ScrollIndicator, StatusDot } from "@/components/TechDecorations";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

const reveal = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 }
};

function renderHeadline(line: string) {
  const parts = line.split("SYSTEMS");
  if (parts.length === 1) {
    return line;
  }

  return (
    <>
      {parts[0]}
      <span className="text-accent">SYSTEMS</span>
      {parts.slice(1).join("SYSTEMS")}
    </>
  );
}

export function HeroSection() {
  const headlineLines = profile.heroHeadline.split("\n");

  return (
    <section className="relative min-h-screen overflow-hidden border-b border-border bg-bg-primary text-text-primary">
      <HeroLandscape />
      <DevFloatingIcons />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl gap-8 px-5 pb-32 pt-28 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:pb-28">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1, delayChildren: 0.15 }}
          className="relative"
        >
          <motion.div variants={reveal} transition={{ duration: 0.6, ease: "easeOut" }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-secondary/80 px-4 py-2 shadow-sm backdrop-blur">
              <StatusDot />
              <span className="text-xs font-bold uppercase text-text-secondary">Full Stack Developer</span>
            </div>
          </motion.div>

          <div className="mt-8">
            {headlineLines.map((line) => (
              <motion.div
                key={line}
                variants={reveal}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <h1 className="font-display text-[clamp(3.8rem,10vw,8.5rem)] font-black leading-[0.9] text-text-primary">
                  {renderHeadline(line)}
                </h1>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={reveal}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mt-8 max-w-2xl text-base leading-8 text-text-secondary md:text-lg"
          >
            {profile.heroSubtitle}
          </motion.p>

          <motion.div variants={reveal} className="mt-9">
            <p className="text-xs font-bold uppercase text-text-secondary">{profile.name}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.roles.map((role) => (
                <span key={role} className="rounded-full border border-border bg-bg-secondary/80 px-3 py-2 text-[10px] font-bold uppercase text-text-secondary shadow-sm backdrop-blur">
                  {role}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={reveal} className="mt-10 max-w-2xl">
            <ProjectCounter count={projects.length} />
          </motion.div>
        </motion.div>

        <div className="relative">
          <div className="mb-5 flex items-center justify-between gap-4">
            <span className="rounded-full border border-border bg-bg-secondary/80 px-3 py-2 text-[10px] font-bold uppercase text-text-secondary shadow-sm backdrop-blur">
              Friendly systems builder
            </span>
            <p className="hidden text-[10px] font-bold uppercase text-text-secondary sm:block">Selected interface archive</p>
          </div>
          <HeroVisual />
          <Link
            href="#projects"
            className="group absolute -bottom-10 right-3 z-20 flex h-28 w-28 items-center justify-center rounded-full bg-cta text-center text-[11px] font-black uppercase text-white shadow-glow transition duration-300 hover:scale-105 hover:bg-cta-hover md:-right-5 md:h-32 md:w-32"
            aria-label="View projects"
          >
            <span className="flex flex-col items-center gap-1">
              View
              <span>Projects</span>
              <ArrowDownRight size={18} className="transition group-hover:translate-x-1 group-hover:translate-y-1" />
            </span>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 z-20 hidden -translate-x-1/2 md:block">
        <ScrollIndicator />
      </div>

      <div className="absolute bottom-0 left-0 z-20 w-full">
        <Marquee items={profile.marqueeItems} />
      </div>
    </section>
  );
}
