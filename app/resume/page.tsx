import Link from "next/link";
import { Download, Eye } from "lucide-react";
import { Header } from "@/components/Header";
import { featuredProjects, skills } from "@/data/projects";
import { profile } from "@/data/profile";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-cloud">
      <Header />
      <section className="mx-auto max-w-4xl px-5 py-16">
        <div className="rounded-lg border border-line/15 bg-white p-6 shadow-sm md:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-signal">Resume</p>
          <h1 className="mt-4 text-5xl font-black tracking-tight text-ink">{profile.name}</h1>
          <p className="mt-3 text-xl font-bold text-steel">{profile.title}</p>
          <p className="mt-2 text-base font-black text-ink/75">{profile.roleFocus}</p>
          <p className="mt-5 text-base leading-7 text-steel">{profile.headline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={profile.cvPath}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-signal hover:text-ink"
            >
              <Eye size={17} />
              View CV
            </Link>
            <Link
              href={profile.cvPath}
              download
              className="inline-flex items-center gap-2 rounded-md border border-line/20 bg-white px-5 py-3 text-sm font-bold text-ink transition hover:border-signal"
            >
              <Download size={17} />
              Download CV
            </Link>
          </div>
        </div>

        <section className="mt-8 rounded-lg border border-line/15 bg-white p-4 shadow-sm md:p-5">
          <div className="flex items-center justify-between gap-4 border-b border-line/10 pb-4">
            <h2 className="text-2xl font-black text-ink">CV Preview</h2>
            <Link href={profile.cvPath} target="_blank" className="text-sm font-bold text-steel transition hover:text-ink">
              Open full PDF
            </Link>
          </div>
          <object
            data={profile.cvPath}
            type="application/pdf"
            className="mt-5 h-[760px] w-full rounded-md border border-line/15 bg-cloud"
          >
            <div className="p-6 text-sm leading-6 text-steel">
              PDF preview is not available in this browser. Open or download the CV using the buttons above.
            </div>
          </object>
        </section>

        <section className="mt-8 rounded-lg border border-line/15 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-black text-ink">Selected Systems</h2>
          <div className="mt-5 grid gap-4">
            {featuredProjects.map((project) => (
              <div key={project.slug} className="border-l-4 border-signal pl-4">
                <h3 className="font-black text-ink">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-steel">{project.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-lg border border-line/15 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-black text-ink">Capability Map</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill.name} className="rounded-md border border-line/15 bg-cloud px-3 py-2 text-sm font-bold text-ink">
                {skill.name}
              </span>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
