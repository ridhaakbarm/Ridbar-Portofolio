"use client";

import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";
import { HeroVisual } from "@/components/HeroVisual";
import { Marquee } from "@/components/Marquee";
import { Coordinates, ProjectCounter, SystemLabel } from "@/components/TechDecorations";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

const reveal = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 }
};

export function HeroSection() {
  const headlineLines = profile.heroHeadline.split("\n");

  return (
    <section className="grain-overlay relative min-h-screen overflow-hidden border-b border-white/10 bg-void text-chalk">
      <div className="absolute inset-0 grid-lines opacity-70" />
      <div className="absolute left-0 top-24 h-px w-full bg-white/10" />
      <div className="absolute bottom-20 left-0 h-px w-full bg-white/10" />

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl gap-8 px-5 pb-28 pt-28 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1, delayChildren: 0.15 }}
          className="relative"
        >
          <motion.div variants={reveal} transition={{ duration: 0.6, ease: "easeOut" }}>
            <Coordinates />
          </motion.div>

          <div className="mt-10">
            {headlineLines.map((line) => (
              <motion.div
                key={line}
                variants={reveal}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <h1 className="font-display text-[clamp(4.5rem,12vw,10.5rem)] leading-[0.82] text-bone">
                  {line}
                </h1>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={reveal}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mt-8 max-w-2xl text-base leading-8 text-fog md:text-lg"
          >
            {profile.heroSubtitle}
          </motion.p>

          <motion.div variants={reveal} className="mt-9">
            <p className="text-xs font-bold uppercase text-fog">{profile.name}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.roles.map((role) => (
                <span key={role} className="border border-white/[0.12] bg-white/[0.03] px-3 py-2 text-[10px] font-bold uppercase text-chalk">
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
            <SystemLabel label="Operations system builder" />
            <p className="hidden text-[10px] font-bold uppercase text-fog sm:block">Selected interface archive</p>
          </div>
          <HeroVisual />
          <Link
            href="#projects"
            className="group absolute -bottom-10 right-3 z-20 flex h-28 w-28 items-center justify-center rounded-full bg-ember text-center text-[11px] font-black uppercase text-bone shadow-glow transition duration-300 hover:scale-105 hover:bg-ember-dark md:-right-5 md:h-32 md:w-32"
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

      <div className="absolute bottom-0 left-0 z-20 w-full">
        <Marquee items={profile.marqueeItems} />
      </div>
    </section>
  );
}
