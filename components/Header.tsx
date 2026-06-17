import Link from "next/link";
import { Download } from "lucide-react";
import { profile } from "@/data/profile";

const nav = [
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#impact", label: "Impact" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/10 bg-cloud/86 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-ink text-sm font-black text-signal">
            {profile.initials}
          </span>
          <span className="text-sm font-semibold tracking-wide text-ink">{profile.shortName}</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-steel md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/portfolio-pdf"
          className="inline-flex items-center gap-2 rounded-md border border-line/20 bg-white px-3 py-2 text-sm font-semibold text-ink shadow-sm transition hover:border-signal"
        >
          <Download size={16} />
          PDF
        </Link>
      </div>
    </header>
  );
}
