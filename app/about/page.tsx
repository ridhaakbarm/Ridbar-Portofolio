import { Code2, Database, GitBranch, PlugZap } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { impactMetrics, skills, timeline } from "@/data/projects";
import { profile } from "@/data/profile";

const focusAreas = [
  {
    icon: Code2,
    title: "Fullstack Application Development",
    text: "Laravel, PHP, MySQL, Blade, Tailwind, Bootstrap, Alpine.js, Vite, and Chart.js interfaces for operational users."
  },
  {
    icon: Database,
    title: "Database & Domain Modeling",
    text: "Relational structures for work orders, OEE reports, samples, tickets, assets, schedules, lots, users, and approvals."
  },
  {
    icon: GitBranch,
    title: "Workflow Architecture",
    text: "Role-based permissions, approval flows, ticket states, verification steps, queues, revisions, and dispatch logic."
  },
  {
    icon: PlugZap,
    title: "Integration & Reporting",
    text: "Excel exports, PDFs, Google Sheets API sync, REST-style endpoints, imports, commands, and recalculation utilities."
  }
];

const teamValue = [
  "I ship production-grade systems, not toy projects.",
  "I design data models that handle real operational complexity.",
  "I build role-based workflows that multiple teams can use daily.",
  "I integrate with external services, exports, reports, and automation."
];

export const metadata = {
  title: "About | Ridha Akbar, Fullstack Developer",
  description:
    "Engineering profile of Ridha Akbar, a fullstack developer and systems architect building Laravel, PHP, MySQL, workflow, dashboard, and integration systems."
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-void text-chalk">
      <Header />

      <section className="mx-auto max-w-7xl px-5 pb-16 pt-32">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase text-ember">About</p>
            <h1 className="mt-4 font-display text-7xl leading-none text-bone md:text-8xl">{profile.name}</h1>
            <p className="mt-5 text-xl font-bold text-chalk">{profile.title}</p>
            <p className="mt-2 text-sm font-black uppercase text-fog">{profile.roleFocus}</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-fog">{profile.headline}</p>
          </div>
          <div className="border border-white/10 bg-surface p-6 md:p-8">
            <h2 className="font-display text-5xl leading-none text-bone">Engineering Profile</h2>
            <p className="mt-5 text-sm leading-7 text-fog">
              {profile.summary} My industrial engineering background is a domain advantage:
              I understand the factory workflows I am turning into software.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {skills.slice(0, 8).map((skill) => (
                <span key={skill.name} className="border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-bold text-chalk">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-surface px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase text-ember">Focus areas</p>
            <h2 className="mt-3 font-display text-6xl leading-none text-bone md:text-8xl">What I Build</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => (
              <div key={area.title} className="border border-white/10 bg-void/60 p-5">
                <area.icon className="text-ember" size={24} />
                <h3 className="mt-5 text-lg font-black text-bone">{area.title}</h3>
                <p className="mt-3 text-sm leading-6 text-fog">{area.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-bold uppercase text-ember">Experience timeline</p>
            <h2 className="mt-3 font-display text-6xl leading-none text-bone md:text-8xl">Engineering Progression</h2>
            <p className="mt-5 text-base leading-7 text-fog">
              The work evolved from domain mapping into fullstack system architecture across multiple enterprise-like internal applications.
            </p>
          </div>
          <div className="grid gap-4">
            {timeline.map((item) => (
              <div key={item.phase} className="border border-white/10 bg-surface p-5">
                <p className="text-xs font-bold uppercase text-ember">{item.phase}</p>
                <h3 className="mt-3 text-lg font-black text-bone">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-fog">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-surface px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-bold uppercase text-ember">Team value</p>
            <h2 className="mt-3 font-display text-6xl leading-none text-bone md:text-8xl">What I Bring</h2>
          </div>
          <div className="grid gap-3">
            {teamValue.map((value) => (
              <div key={value} className="border border-white/10 bg-void/60 p-4 text-sm font-semibold leading-6 text-chalk">
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase text-ember">Proof points</p>
          <h2 className="mt-3 font-display text-6xl leading-none text-bone md:text-8xl">Production Signals</h2>
        </div>
        <div className="mt-10 grid gap-3 md:grid-cols-2">
          {impactMetrics.map((metric) => (
            <div key={metric} className="border border-white/10 bg-surface p-4 text-sm font-semibold leading-6 text-fog">
              {metric}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
