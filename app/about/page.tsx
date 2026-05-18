import { Cpu, Factory, Gauge, Workflow } from "lucide-react";
import { Header } from "@/components/Header";
import { SectionTitle } from "@/components/SectionTitle";
import { impactMetrics, skills, timeline } from "@/data/projects";
import { profile } from "@/data/profile";

const focusAreas = [
  {
    icon: Factory,
    title: "Manufacturing Operations",
    text: "Production execution, OEE-style monitoring, daily reporting, mixing, lab, and shop-floor workflow systems."
  },
  {
    icon: Workflow,
    title: "Internal Application Engineering",
    text: "Role-based Laravel applications with approvals, tickets, queues, exports, traceability, and operational documentation."
  },
  {
    icon: Gauge,
    title: "Dashboard And Reporting",
    text: "Monitoring boards, KPI views, weekly/monthly reports, Excel exports, and analysis pages for supervisors and leaders."
  },
  {
    icon: Cpu,
    title: "System Integration",
    text: "Google Sheet synchronization, console automation, import/export flows, scheduled cleanup, and recalculation utilities."
  }
];

export const metadata = {
  title: "About | Muhammad Ridha Akbar",
  description: "About Muhammad Ridha Akbar, an Industrial Engineering fresh graduate focused on operations, process optimization, data-driven decisions, and internal systems."
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cloud">
      <Header />

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-signal">About</p>
            <h1 className="mt-4 text-5xl font-black tracking-tight text-ink md:text-6xl">{profile.name}</h1>
            <p className="mt-5 text-xl font-bold text-steel">{profile.title}</p>
            <p className="mt-2 text-base font-black text-ink/75">{profile.roleFocus}</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">{profile.headline}</p>
          </div>
          <div className="rounded-lg border border-line/15 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-black text-ink">Professional Positioning</h2>
            <p className="mt-4 text-sm leading-7 text-steel">
              {profile.summary} The portfolio is centered on production monitoring, maintenance,
              QC lab dispatch, daily reporting, traceability, approval flows, exports, automation,
              and workflow tools for operational teams.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {skills.slice(0, 6).map((skill) => (
                <span key={skill.name} className="rounded-md border border-line/15 bg-cloud px-3 py-2 text-xs font-bold text-ink">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line/10 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <SectionTitle
            eyebrow="Focus areas"
            title="Built for factory workflows and internal operations"
            description="The work is shaped around practical software used by production, QC, PPIC, maintenance, technicians, operators, leaders, and supervisors."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((area) => (
              <div key={area.title} className="rounded-lg border border-line/15 bg-cloud p-5">
                <area.icon className="text-signal" size={24} />
                <h2 className="mt-4 text-lg font-black text-ink">{area.title}</h2>
                <p className="mt-3 text-sm leading-6 text-steel">{area.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionTitle
            eyebrow="Engineering showcase"
            title="Systems built for daily operational work"
            description="The case studies highlight practical systems for manufacturing teams: dashboards, queues, tickets, approvals, exports, reports, and traceability across real workflows."
          />
          <div className="grid gap-4">
            {timeline.map((item) => (
              <div key={item.phase} className="rounded-lg border border-line/15 bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-signal">{item.phase}</p>
                <h2 className="mt-3 text-lg font-black text-ink">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-steel">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-5 py-16">
          <SectionTitle
            eyebrow="Impact language"
            title="Operational value without fake numbers"
            description="The current impact statements remain qualitative until real before-and-after measurements are available."
            inverted
          />
          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {impactMetrics.map((metric) => (
              <div key={metric} className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm font-semibold leading-6 text-white/72">
                {metric}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
