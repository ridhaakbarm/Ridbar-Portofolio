import Link from "next/link";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { profile } from "@/data/profile";

export const metadata = {
  title: "Contact | Ridha Akbar",
  description: "Contact Ridha Akbar for fullstack developer, backend engineer, and systems architect opportunities."
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-void text-chalk">
      <Header />
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-32">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="inline-flex items-center gap-2 border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-[11px] font-bold uppercase text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Available for hire
            </span>
            <h1 className="mt-6 font-display text-7xl leading-none text-bone md:text-8xl">
              Looking for a fullstack developer who ships real systems?
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-fog">{profile.availability}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={profile.cvPath}
                target="_blank"
                className="inline-flex items-center gap-2 bg-ember px-5 py-3 text-sm font-bold uppercase text-bone transition hover:bg-ember-dark"
              >
                <Download size={17} />
                Download Resume
              </Link>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 border border-white/10 px-5 py-3 text-sm font-bold uppercase text-chalk transition hover:border-ember"
              >
                <Mail size={17} />
                Email Me
              </a>
            </div>
          </div>

          <form className="border border-white/10 bg-surface p-5 md:p-8">
            <h2 className="font-display text-5xl leading-none text-bone">Start a Conversation</h2>
            <div className="mt-6 grid gap-4">
              <label className="grid gap-2 text-xs font-bold uppercase text-fog">
                Name
                <input
                  className="border border-white/10 bg-void px-4 py-3 text-sm normal-case text-chalk outline-none transition placeholder:text-dust focus:border-ember"
                  name="name"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-xs font-bold uppercase text-fog">
                Email
                <input
                  className="border border-white/10 bg-void px-4 py-3 text-sm normal-case text-chalk outline-none transition placeholder:text-dust focus:border-ember"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                />
              </label>
              <label className="grid gap-2 text-xs font-bold uppercase text-fog">
                Message
                <textarea
                  className="min-h-36 border border-white/10 bg-void px-4 py-3 text-sm normal-case text-chalk outline-none transition placeholder:text-dust focus:border-ember"
                  name="message"
                  placeholder="Tell me about the role, project, or system you need built."
                />
              </label>
              <button
                type="button"
                className="bg-bone px-5 py-3 text-sm font-black uppercase text-void transition hover:bg-ember hover:text-bone"
              >
                Frontend-only form
              </button>
            </div>
          </form>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          <a href={`mailto:${profile.email}`} className="border border-white/10 bg-surface p-5 transition hover:border-ember">
            <Mail className="text-ember" size={22} />
            <p className="mt-4 text-sm font-bold uppercase text-fog">Email</p>
            <p className="mt-2 font-black text-bone">{profile.email}</p>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="border border-white/10 bg-surface p-5 transition hover:border-ember">
            <Linkedin className="text-ember" size={22} />
            <p className="mt-4 text-sm font-bold uppercase text-fog">LinkedIn</p>
            <p className="mt-2 font-black text-bone">ridhaakbar</p>
          </a>
          <a href={profile.socialLinks.github} className="border border-white/10 bg-surface p-5 transition hover:border-ember">
            <Github className="text-ember" size={22} />
            <p className="mt-4 text-sm font-bold uppercase text-fog">GitHub</p>
            <p className="mt-2 font-black text-bone">Add profile URL</p>
          </a>
          <div className="border border-white/10 bg-surface p-5">
            <MapPin className="text-ember" size={22} />
            <p className="mt-4 text-sm font-bold uppercase text-fog">Location</p>
            <p className="mt-2 font-black text-bone">{profile.location}</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
