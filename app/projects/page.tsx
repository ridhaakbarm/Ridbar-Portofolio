import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-cloud">
      <Header />
      <section className="mx-auto max-w-7xl px-5 py-16">
        <SectionTitle
          eyebrow="Project inventory"
          title="Portfolio candidates and featured systems"
          description="This page keeps every target project visible while the homepage focuses on the strongest case studies."
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
