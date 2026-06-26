import Link from "next/link";
import { Download, Eye } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { featuredProjects, skills } from "@/data/projects";
import { profile } from "@/data/profile";

const highlights = [
  ["8", "Production systems"],
  ["5", "Enterprise domains"],
  ["PHP", "Backend focus"],
  ["MySQL", "Data modeling"]
];

const skillGroups = [
  ["Backend", ["Laravel 10/12", "PHP 8.1/8.2", "REST APIs", "Laravel Sanctum"]],
  ["Frontend", ["Tailwind CSS", "Bootstrap", "Blade", "Alpine.js", "Vite", "Chart.js"]],
  ["Data & Reports", ["MySQL", "Excel exports", "PDF generation", "Google Sheets API"]],
  ["Architecture", ["MVC", "RBAC", "State workflows", "Domain modeling"]]
];

export const metadata = {
  title: "Resume | Ridha Akbar",
  description: "Resume and technical skills for Ridha Akbar, fullstack developer and systems architect."
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-void text-chalk">
      <Header />
      <section className="mx-auto max-w-5xl px-5 pb-20 pt-32">
        <div className="border border-white/10 bg-surface p-6 md:p-9">
          <p className="text-xs font-bold uppercase text-ember">Resume</p>
          <h1 className="mt-4 font-display text-7xl leading-none text-bone md:text-8xl">{profile.name}</h1>
          <p className="mt-3 text-xl font-bold text-chalk">{profile.title}</p>
          <p className="mt-2 text-sm font-black uppercase text-fog">{profile.roleFocus}</p>
          <p className="mt-5 text-base leading-7 text-fog">{profile.headline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={profile.cvPath}
              target="_blank"
              className="inline-flex items-center gap-2 bg-ember px-5 py-3 text-sm font-bold uppercase text-bone transition hover:bg-ember-dark"
            >
              <Eye size={17} />
              View CV
            </Link>
            <Link
              href={profile.cvPath}
              download
              className="inline-flex items-center gap-2 border border-white/10 px-5 py-3 text-sm font-bold uppercase text-chalk transition hover:border-ember"
            >
              <Download size={17} />
              Download CV
            </Link>
          </div>
        </div>

        <section className="mt-8 grid gap-3 md:grid-cols-4">
          {highlights.map(([value, label]) => (
            <div key={label} className="border border-white/10 bg-surface p-5">
              <p className="font-display text-5xl leading-none text-ember">{value}</p>
              <p className="mt-2 text-xs font-bold uppercase text-fog">{label}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 border border-white/10 bg-surface p-6 md:p-8">
          <h2 className="font-display text-5xl leading-none text-bone">Technical Skills</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {skillGroups.map(([group, items]) => (
              <div key={group as string} className="border border-white/10 bg-void/60 p-4">
                <h3 className="text-sm font-black uppercase text-ember">{group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(items as string[]).map((item) => (
                    <span key={item} className="border border-white/10 px-3 py-2 text-xs font-bold text-fog">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 border border-white/10 bg-surface p-4 md:p-5">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <h2 className="font-display text-5xl leading-none text-bone">CV Preview</h2>
            <Link href={profile.cvPath} target="_blank" className="text-sm font-bold text-fog transition hover:text-bone">
              Open full PDF
            </Link>
          </div>
          <object
            data={profile.cvPath}
            type="application/pdf"
            className="mt-5 h-[760px] w-full border border-white/10 bg-void"
          >
            <div className="p-6 text-sm leading-6 text-fog">
              PDF preview is not available in this browser. Open or download the CV using the buttons above.
            </div>
          </object>
        </section>

        <section className="mt-8 border border-white/10 bg-surface p-6 md:p-8">
          <h2 className="font-display text-5xl leading-none text-bone">Selected Systems</h2>
          <div className="mt-5 grid gap-4">
            {featuredProjects.map((project) => (
              <div key={project.slug} className="border-l-4 border-ember pl-4">
                <h3 className="font-black text-bone">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-fog">{project.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 border border-white/10 bg-surface p-6 md:p-8">
          <h2 className="font-display text-5xl leading-none text-bone">Capability Map</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {skills.map((skill, index) => (
              <div key={skill.name} className="border border-white/10 bg-void/60 p-4">
                <div className="h-1 bg-white/10">
                  <div className="h-1 bg-ember" style={{ width: `${88 - (index % 3) * 8}%` }} />
                </div>
                <h3 className="mt-4 text-sm font-black text-bone">{skill.name}</h3>
                <p className="mt-2 text-xs leading-5 text-fog">{skill.context}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}
