import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <Header />
      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionTitle
          eyebrow="Systems portfolio"
          title="Manufacturing and operations systems"
          description="A collection of internal applications built for production visibility, workflow automation, reporting, traceability, maintenance, lab dispatch, and process control."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
