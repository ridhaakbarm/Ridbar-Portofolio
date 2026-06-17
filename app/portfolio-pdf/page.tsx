import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail, MapPin, Printer } from "lucide-react";
import { PdfDownloadButton } from "@/components/PdfDownloadButton";
import { featuredProjects, impactMetrics, skills } from "@/data/projects";
import { profile } from "@/data/profile";

export const metadata = {
  title: "Portfolio PDF | Muhammad Ridha Akbar",
  description:
    "Printable portfolio PDF for Muhammad Ridha Akbar, covering profile, capability summary, screenshots, and selected operations systems."
};

const selectedProjects = featuredProjects.slice(0, 5);

export default function PortfolioPdfPage() {
  return (
    <main className="min-h-screen bg-slate-200 px-4 py-6 text-ink print:bg-white print:p-0">
      <div className="mx-auto mb-5 flex max-w-[920px] items-center justify-between gap-3 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md border border-line/20 bg-white px-4 py-2 text-sm font-bold text-ink shadow-sm transition hover:border-signal"
        >
          <ArrowLeft size={16} />
          Back to portfolio
        </Link>
        <PdfDownloadButton />
      </div>

      <article className="mx-auto max-w-[920px] bg-white p-10 shadow-2xl print:max-w-none print:p-0 print:shadow-none">
        <section className="border-b-4 border-ink pb-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-signal">Portfolio summary</p>
              <h1 className="mt-3 text-4xl font-black tracking-tight text-ink print:text-3xl">{profile.name}</h1>
              <p className="mt-2 text-lg font-black text-steel">{profile.title}</p>
              <p className="mt-1 text-sm font-bold text-ink/75">{profile.roleFocus}</p>
            </div>
            <div className="grid gap-2 text-sm font-semibold text-steel md:text-right">
              <span className="inline-flex items-center gap-2 md:justify-end">
                <MapPin size={15} />
                {profile.location}
              </span>
              <a className="inline-flex items-center gap-2 md:justify-end" href={`mailto:${profile.email}`}>
                <Mail size={15} />
                {profile.email}
              </a>
              <span>{profile.linkedin.replace("https://", "")}</span>
            </div>
          </div>

          <p className="mt-6 max-w-4xl text-base leading-7 text-steel">{profile.headline}</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              ["Portfolio focus", "Manufacturing operations systems"],
              ["Featured systems", `${selectedProjects.length} operational systems`],
              ["Availability", "Open for operational roles"]
            ].map(([label, value]) => (
              <div key={label} className="rounded-md border border-line/15 bg-cloud p-3 print:bg-white">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-steel">{label}</p>
                <p className="mt-1 text-sm font-black text-ink">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 border-b border-line/15 py-6 md:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="text-xl font-black text-ink">Professional Summary</h2>
            <p className="mt-3 text-sm leading-6 text-steel">
              {profile.summary} The selected work below shows practical system delivery, operational
              thinking, and manufacturing workflow understanding through real dashboard and workflow screens.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-black text-ink">Operational Value</h2>
            <div className="mt-3 grid gap-2">
              {impactMetrics.slice(0, 5).map((metric) => (
                <p key={metric} className="rounded-md border border-line/15 px-3 py-2 text-sm font-semibold leading-5 text-ink">
                  {metric}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-line/15 py-6">
          <h2 className="text-xl font-black text-ink">Capability Map</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {skills.slice(0, 8).map((skill) => (
              <div key={skill.name} className="rounded-md border border-line/15 p-3">
                <h3 className="text-sm font-black text-ink">{skill.name}</h3>
                <p className="mt-2 text-xs leading-5 text-steel">{skill.context}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-signal">Selected system evidence</p>
              <h2 className="mt-2 text-2xl font-black text-ink">Featured Operations Systems</h2>
            </div>
            <div className="hidden items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-steel print:flex">
              <Printer size={14} />
              Portfolio PDF
            </div>
          </div>

          <div className="mt-5 grid gap-5">
            {selectedProjects.map((project, index) => (
              <article key={project.slug} className="break-inside-avoid rounded-lg border border-line/15 p-5 print:rounded-none">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-steel">
                      {String(index + 1).padStart(2, "0")} / {project.category}
                    </p>
                    <h3 className="mt-2 text-xl font-black text-ink">{project.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-steel">{project.summary}</p>
                  </div>
                  <div className="rounded-md bg-ink px-3 py-2 text-center text-sm font-black text-signal">
                    {project.score}
                  </div>
                </div>

                {project.screenshots && project.screenshots.length > 0 ? (
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {project.screenshots.slice(0, 2).map((screenshot) => (
                      <figure key={screenshot.src} className="overflow-hidden rounded-md border border-line/15 bg-cloud print:bg-white">
                        <Image
                          src={screenshot.src}
                          alt={screenshot.alt}
                          width={520}
                          height={292}
                          className="h-40 w-full object-cover object-top print:h-32"
                        />
                        <figcaption className="border-t border-line/10 px-3 py-2 text-[11px] font-bold text-steel">
                          {screenshot.label}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ) : null}

                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.16em] text-ink">Problem</h4>
                    <p className="mt-2 text-xs leading-5 text-steel">{project.businessProblem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.16em] text-ink">Solution</h4>
                    <p className="mt-2 text-xs leading-5 text-steel">{project.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.16em] text-ink">Impact</h4>
                    <ul className="mt-2 space-y-1 text-xs leading-5 text-steel">
                      {project.impact.slice(0, 3).map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-[1fr_0.75fr]">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.16em] text-ink">Key Features</h4>
                    <p className="mt-2 text-xs leading-5 text-steel">{project.features.slice(0, 4).join("; ")}.</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.16em] text-ink">Tech Stack</h4>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 6).map((tech) => (
                        <span key={tech} className="rounded border border-line/15 px-2 py-1 text-[11px] font-bold text-ink">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
