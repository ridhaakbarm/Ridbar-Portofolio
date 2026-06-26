"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

function shortTitle(title: string) {
  return title
    .replace(" And ", " & ")
    .replace(" System", "")
    .replace(" Workflow", "")
    .replace(" Production", "")
    .replace(" Manufacturing", "");
}

export function FeaturedProjects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-bg-secondary px-5 py-20 text-text-primary md:py-28">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase text-accent">Selected work</p>
            <h2 className="mt-3 font-display text-5xl font-black leading-none text-text-primary md:text-7xl">
              Production Systems
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-text-secondary">
              Eight real internal systems across production execution, OEE, maintenance, QC, reporting, cleaning, and process control.
            </p>
          </div>
          <p className="text-xs font-bold uppercase text-text-secondary">
            {String(projects.length).padStart(2, "0")} Projects
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project, index) => {
            const primary = project.screenshots?.[0];

            return (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: (index % 4) * 0.06, ease: "easeOut" }}
                className="group rounded-xl border border-border bg-bg-primary shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-soft"
              >
                <Link href={`/projects/${project.slug}`} className="flex h-full flex-col p-4">
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-display text-5xl font-black leading-none text-text-muted/25">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <ArrowUpRight
                      className="text-text-secondary transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
                      size={22}
                    />
                  </div>

                  <h3 className="mt-5 min-h-20 text-balance font-display text-3xl font-black leading-[1.02] text-text-primary">
                    {shortTitle(project.title)}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-text-secondary">{project.summary}</p>

                  <div className="mt-5 overflow-hidden rounded-xl border border-border bg-bg-elevated">
                    {primary ? (
                      <img
                        src={primary.src}
                        alt={primary.alt}
                        className="aspect-[16/10] w-full object-cover object-top opacity-[0.88] transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex aspect-[16/10] items-center justify-center bg-accent-soft text-xs font-bold uppercase text-accent">
                        Interface Preview
                      </div>
                    )}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-2 pt-5">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border px-2.5 py-1.5 text-[10px] font-bold uppercase text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
