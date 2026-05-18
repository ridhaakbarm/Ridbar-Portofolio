import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/Header";
import { ProjectVisual } from "@/components/ProjectVisual";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);
  return {
    title: project ? `${project.title} | ${profile.shortName}` : `Project | ${profile.shortName}`,
    description: project?.summary
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-cloud">
      <Header />
      <article className="mx-auto max-w-5xl px-5 py-12">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-steel hover:text-ink">
          <ArrowLeft size={16} />
          All projects
        </Link>

        <header className="mt-8 rounded-lg border border-line/15 bg-white p-6 shadow-sm md:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">{project.category}</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-ink md:text-6xl">{project.title}</h1>
          <p className="mt-5 text-lg leading-8 text-steel">{project.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="rounded-md border border-line/15 bg-cloud px-3 py-2 text-xs font-bold text-ink">
                {tech}
              </span>
            ))}
          </div>
        </header>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <CaseBlock title="Business Problem" text={project.businessProblem} />
          <CaseBlock title="Solution" text={project.solution} />
        </div>

        <section className="mt-8">
          <ProjectVisual project={project} />
        </section>

        <section className="mt-8 rounded-lg border border-line/15 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-black text-ink">Key Features</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {project.features.map((feature) => (
              <ListItem key={feature}>{feature}</ListItem>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          <InfoList title="Operational Impact" items={project.impact} />
          <InfoList title="Architecture Highlights" items={project.architecture} />
        </section>

        <section className="mt-8 rounded-lg border border-amber/40 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-black text-ink">Delivery Highlights</h2>
          <p className="mt-3 text-sm leading-6 text-steel">
            A closer look at the operational workflows, automation, reporting, and integration points delivered in this system.
          </p>
          <div className="mt-5 grid gap-3">
            {project.deliveryHighlights.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}

function CaseBlock({ title, text }: { title: string; text: string }) {
  return (
    <section className="rounded-lg border border-line/15 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-black text-ink">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-steel">{text}</p>
    </section>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-lg border border-line/15 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-black text-ink">{title}</h2>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </div>
    </section>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 className="mt-0.5 shrink-0 text-signal" size={17} />
      <p className="text-sm leading-6 text-steel">{children}</p>
    </div>
  );
}
