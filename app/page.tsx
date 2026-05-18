import Link from "next/link";
import { ArrowRight, BarChart3, Cpu, Factory, Gauge, GitBranch, ShieldCheck } from "lucide-react";
import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { additionalProjects, featuredProjects, impactMetrics, projects, skills, timeline } from "@/data/projects";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="min-h-screen bg-cloud">
      <Header />

      <section className="grid-lines border-b border-line/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-24">
          <div>
            <p className="inline-flex rounded-md border border-line/15 bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.22em] text-steel">
              Manufacturing systems portfolio
            </p>
            <h1 className="mt-6 text-5xl font-black tracking-tight text-ink md:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-5 text-xl font-black text-ink/80">{profile.roleFocus}</p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-steel">{profile.headline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#projects" className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-signal hover:text-ink">
                Explore systems
                <ArrowRight size={17} />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-md border border-line/20 bg-white px-5 py-3 text-sm font-bold text-ink transition hover:border-signal">
                Contact
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-line/15 bg-ink p-5 text-white shadow-soft">
            <div className="grid grid-cols-2 gap-3">
              {[
                ["Scanned targets", `${projects.length}`],
                ["Featured systems", `${featuredProjects.length}`],
                ["Candidate profile", "Industrial Engineering"],
                ["Career direction", "Operations Leader"]
              ].map(([label, value]) => (
                <div key={label} className="rounded-md border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/50">{label}</p>
                  <p className="mt-3 text-2xl font-black">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-md border border-white/10 bg-white/5 p-4">
              <div className="flex items-center gap-3 text-signal">
                <Gauge size={20} />
                <p className="text-sm font-bold uppercase tracking-[0.2em]">System focus</p>
              </div>
              <p className="mt-4 text-sm leading-6 text-white/70">
                Production visibility, OEE-style monitoring, maintenance workflows, lab dispatch,
                reporting systems, and process digitalization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-5 py-20">
        <SectionTitle
          eyebrow="Featured work"
          title="Internal systems for operational teams"
          description="Verified case studies from real Laravel systems built for production execution, OEE monitoring, maintenance, lab dispatch, and daily reporting workflows."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <SectionTitle
          eyebrow="Additional systems"
          title="Supporting operational applications"
          description="These projects strengthen the portfolio story with autonomous maintenance, cleaning workflow, and mixing process control evidence."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {additionalProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="skills" className="border-y border-line/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <SectionTitle
            eyebrow="Skill mapping"
            title="Engineering capability mapped to manufacturing use cases"
            description="Skills are mapped from routes, controllers, models, migrations, views, services, exports, commands, and package evidence found in the audited codebases."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div key={skill.name} className="rounded-lg border border-line/15 bg-cloud p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-ink text-signal">
                  <Cpu size={18} />
                </div>
                <h3 className="mt-4 text-lg font-black text-ink">{skill.name}</h3>
                <p className="mt-3 text-sm leading-6 text-steel">{skill.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="impact" className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionTitle
            eyebrow="Operational impact"
            title="Business language, not just stack language"
            description="Impact statements stay qualitative because the source audit verifies system capability, while exact before-and-after numbers need operational measurement data."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {impactMetrics.map((metric) => (
              <div key={metric} className="flex items-start gap-3 rounded-lg border border-line/15 bg-white p-4 shadow-sm">
                <ShieldCheck className="mt-0.5 text-signal" size={18} />
                <p className="text-sm font-semibold leading-6 text-ink">{metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <SectionTitle
            eyebrow="Project timeline"
            title="From source audit to portfolio case studies"
            description="The portfolio is built from real code evidence first, then translated into business-oriented presentation for manufacturing and operations audiences."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item) => (
              <div key={item.phase} className="rounded-lg border border-line/15 bg-cloud p-5">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">{item.phase}</p>
                <h3 className="mt-4 text-lg font-black text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-steel">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-3">
          {[
            { icon: Factory, title: "Manufacturing-first", text: "Built around production, lab, maintenance, QC, and process execution systems." },
            { icon: BarChart3, title: "Dashboard-oriented", text: "Designed around monitoring boards, reports, exports, and operational decision support." },
            { icon: GitBranch, title: "Evidence-based", text: "Portfolio content is grounded in actual routes, controllers, models, migrations, views, and package files." }
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-white/10 bg-white/5 p-5">
              <item.icon className="text-signal" size={22} />
              <h3 className="mt-4 text-lg font-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
