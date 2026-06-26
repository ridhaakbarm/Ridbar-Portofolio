import Link from "next/link";
import { ArrowUpRight, Database, Factory } from "lucide-react";
import { ProjectVisual } from "@/components/ProjectVisual";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-border bg-bg-secondary p-5 shadow-sm transition hover:-translate-y-1 hover:border-accent hover:shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-text-secondary">{project.category}</p>
          <h3 className="mt-3 text-xl font-black tracking-tight text-text-primary">{project.title}</h3>
        </div>
        <span className="rounded-lg bg-bg-elevated p-2 text-text-primary transition group-hover:bg-accent group-hover:text-white">
          <Factory size={18} />
        </span>
      </div>
      <div className="mt-5">
        <ProjectVisual project={project} compact />
      </div>
      <p className="mt-4 flex-1 text-sm leading-6 text-text-secondary">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.techStack.slice(0, 3).map((tech) => (
          <span key={tech} className="inline-flex items-center gap-1 rounded-full border border-border px-2 py-1 text-xs font-semibold text-text-primary">
            <Database size={12} />
            {tech}
          </span>
        ))}
      </div>
      <Link href={`/projects/${project.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-text-primary">
        View case study
        <ArrowUpRight size={16} />
      </Link>
    </article>
  );
}
