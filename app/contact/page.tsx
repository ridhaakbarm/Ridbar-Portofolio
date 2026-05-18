import { Linkedin, Mail, MapPin } from "lucide-react";
import { Header } from "@/components/Header";
import { profile } from "@/data/profile";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cloud">
      <Header />
      <section className="mx-auto max-w-4xl px-5 py-20">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-signal">Contact</p>
        <h1 className="mt-4 text-5xl font-black tracking-tight text-ink">Contact {profile.shortName}</h1>
        <p className="mt-6 text-lg leading-8 text-steel">{profile.availability}</p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <a href={`mailto:${profile.email}`} className="rounded-lg border border-line/15 bg-white p-5 shadow-sm transition hover:border-signal">
            <Mail className="text-signal" size={22} />
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-steel">Email</p>
            <p className="mt-2 font-black text-ink">{profile.email}</p>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-lg border border-line/15 bg-white p-5 shadow-sm transition hover:border-signal">
            <Linkedin className="text-signal" size={22} />
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-steel">LinkedIn</p>
            <p className="mt-2 font-black text-ink">ridhaakbar</p>
          </a>
          <div className="rounded-lg border border-line/15 bg-white p-5 shadow-sm">
            <MapPin className="text-signal" size={22} />
            <p className="mt-4 text-sm font-bold uppercase tracking-[0.18em] text-steel">Location</p>
            <p className="mt-2 font-black text-ink">{profile.location}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
