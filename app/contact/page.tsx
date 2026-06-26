import Link from "next/link";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { profile } from "@/data/profile";

export const metadata = {
  title: "Contact | Ridha Akbar",
  description: "Contact Ridha Akbar for fullstack developer, backend engineer, and systems architect opportunities."
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <Header />
      <section className="mx-auto max-w-7xl px-5 pb-20 pt-32">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="inline-flex items-center gap-2 border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-[11px] font-bold uppercase text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Available for hire
            </span>
            <h1 className="mt-6 font-display text-7xl leading-none text-text-primary md:text-8xl">
              Looking for a fullstack developer who ships real systems?
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">{profile.availability}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={profile.cvPath}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-lg bg-cta px-5 py-3 text-sm font-bold uppercase text-white transition hover:bg-cta-hover"
              >
                <Download size={17} />
                Download Resume
              </Link>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-bold uppercase text-text-primary transition hover:border-accent"
              >
                <Mail size={17} />
                Email Me
              </a>
            </div>
          </div>

          <ContactForm />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          <a href={`mailto:${profile.email}`} className="rounded-xl border border-border bg-bg-secondary p-5 transition hover:border-accent">
            <Mail className="text-accent" size={22} />
            <p className="mt-4 text-sm font-bold uppercase text-text-secondary">Email</p>
            <p className="mt-2 font-black text-text-primary">{profile.email}</p>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-xl border border-border bg-bg-secondary p-5 transition hover:border-accent">
            <Linkedin className="text-accent" size={22} />
            <p className="mt-4 text-sm font-bold uppercase text-text-secondary">LinkedIn</p>
            <p className="mt-2 font-black text-text-primary">ridhaakbar</p>
          </a>
          <a href={profile.socialLinks.github} className="rounded-xl border border-border bg-bg-secondary p-5 transition hover:border-accent">
            <Github className="text-accent" size={22} />
            <p className="mt-4 text-sm font-bold uppercase text-text-secondary">GitHub</p>
            <p className="mt-2 font-black text-text-primary">ridhaakbarm</p>
          </a>
          <div className="rounded-xl border border-border bg-bg-secondary p-5">
            <MapPin className="text-accent" size={22} />
            <p className="mt-4 text-sm font-bold uppercase text-text-secondary">Location</p>
            <p className="mt-2 font-black text-text-primary">{profile.location}</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
