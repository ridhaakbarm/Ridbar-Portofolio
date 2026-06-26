"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition duration-300 ${
        scrolled ? "border-b border-white/10 bg-void/82 backdrop-blur-xl" : "border-b border-white/5 bg-void/35 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-display text-2xl leading-none text-bone">
          RIDHA AKBAR
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] font-bold uppercase text-fog transition hover:text-bone"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="border border-ember/60 bg-ember px-4 py-2 text-[11px] font-black uppercase text-bone transition hover:bg-ember-dark"
          >
            Hire Me
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-white/10 text-bone md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        className={`fixed right-0 top-[73px] h-[calc(100vh-73px)] w-72 border-l border-white/10 bg-void/96 p-6 backdrop-blur-xl transition md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="grid gap-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-white/10 py-4 font-display text-4xl leading-none text-bone"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-3 bg-ember px-4 py-3 text-center text-xs font-black uppercase text-bone"
            onClick={() => setOpen(false)}
          >
            Hire Me
          </Link>
        </nav>
      </div>
    </header>
  );
}
