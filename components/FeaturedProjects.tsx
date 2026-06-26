"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

type FeaturedCard = {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  tech: string[];
  href: string;
};

const cmb = projects.find((project) => project.slug === "cmb-manufacturing-execution");
const oee = projects.find((project) => project.slug === "oee-production-monitoring");

const cards: FeaturedCard[] = [
  {
    number: "01",
    title: "CMB",
    description: "Computerized monitoring board for production execution, QC visibility, traceability, and machine status.",
    image: cmb?.screenshots?.[0]?.src ?? "/screenshots/cmb-dashboard.png",
    alt: cmb?.screenshots?.[0]?.alt ?? "CMB dashboard interface",
    tech: ["Laravel", "MySQL", "Vite"],
    href: "/projects/cmb-manufacturing-execution"
  },
  {
    number: "02",
    title: "OEE Dashboard",
    description: "Machine performance, downtime, and operational efficiency analytics for production review.",
    image: oee?.screenshots?.[0]?.src ?? "/screenshots/oee-dashboard-real.png",
    alt: oee?.screenshots?.[0]?.alt ?? "OEE dashboard interface",
    tech: ["Laravel", "Chart.js", "MySQL"],
    href: "/projects/oee-production-monitoring"
  },
  {
    number: "03",
    title: "Production Scheduling",
    description: "Mixer and extruder scheduling workflow for planning, coordination, and shop-floor visibility.",
    image: "/screenshots/cmb-schedule.png",
    alt: "Production schedule interface preview",
    tech: ["Scheduling", "Workflow", "Exports"],
    href: "/projects"
  },
  {
    number: "04",
    title: "Color Formulation",
    description: "Formula adjustment and color estimation workspace for controlled process decisions.",
    image: "/screenshots/mixing-check-method.png",
    alt: "Color formulation related method interface preview",
    tech: ["Formula", "Traceability", "Reports"],
    href: "/projects"
  }
];

export function FeaturedProjects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-bg-secondary px-5 py-24 text-text-primary md:py-32">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-6 border-b border-border pb-8">
          <div>
            <p className="text-xs font-bold uppercase text-accent">Selected work</p>
            <h2 className="mt-3 font-display text-6xl font-black leading-none text-text-primary md:text-8xl">Interface Archive</h2>
          </div>
          <p className="hidden text-xs font-bold uppercase text-text-secondary sm:block">04 Projects</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {cards.map((card, index) => (
            <motion.article
              key={card.number}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
              className="group min-h-[460px] rounded-xl border border-border bg-bg-primary transition duration-300 hover:-translate-y-1 hover:border-accent"
            >
              <Link href={card.href} className="flex h-full flex-col p-5">
                <div className="flex items-start justify-between gap-5">
                  <p className="font-display text-6xl font-black leading-none text-text-muted/20">{card.number}</p>
                  <ArrowUpRight className="text-text-secondary transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" size={24} />
                </div>

                <h3 className="mt-6 font-display text-5xl font-black leading-none text-text-primary md:text-6xl">{card.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-6 text-text-secondary">{card.description}</p>

                <div className="mt-8 overflow-hidden rounded-xl border border-border bg-bg-elevated">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="aspect-[16/9] w-full object-cover object-top opacity-[0.82] transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                    loading="lazy"
                  />
                </div>

                <div className="mt-auto flex flex-wrap gap-2 pt-6">
                  {card.tech.map((tech) => (
                    <span key={tech} className="rounded-full border border-border px-2.5 py-1.5 text-[10px] font-bold uppercase text-text-secondary">
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
