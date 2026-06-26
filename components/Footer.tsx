import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface px-5 py-12 text-chalk">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto]">
        <div>
          <p className="font-display text-5xl leading-none text-bone">RIDHA AKBAR</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-fog">{profile.title} building production-grade internal systems.</p>
          <span className="mt-5 inline-flex items-center gap-2 border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-[11px] font-bold uppercase text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            Open to opportunities
          </span>
        </div>
        <div className="space-y-5">
          <nav className="flex flex-wrap gap-4 text-xs font-bold uppercase text-fog">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-bone">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-3">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="border border-white/10 p-2 text-fog transition hover:border-ember hover:text-bone" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${profile.email}`} className="border border-white/10 p-2 text-fog transition hover:border-ember hover:text-bone" aria-label="Email">
              <Mail size={18} />
            </a>
            <a href={profile.socialLinks.github} className="border border-white/10 p-2 text-fog transition hover:border-ember hover:text-bone" aria-label="GitHub">
              <Github size={18} />
            </a>
          </div>
          <p className="text-xs text-dust">(c) 2026 Muhammad Ridha Akbar. Built with Next.js.</p>
        </div>
      </div>
    </footer>
  );
}
