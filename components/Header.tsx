"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

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
        scrolled ? "border-b border-border bg-bg-primary/82 backdrop-blur-xl" : "border-b border-border/60 bg-bg-primary/55 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-display text-2xl font-black leading-none">
          <span className="text-text-primary">RIDHA</span> <span className="text-accent">AKBAR</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] font-bold uppercase text-text-secondary transition hover:text-text-primary"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            href="/contact"
            className="rounded-lg border border-cta bg-cta px-4 py-2 text-[11px] font-black uppercase text-white transition hover:bg-cta-hover"
          >
            Hire Me
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg-secondary text-text-primary md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        className={`fixed right-3 top-[82px] h-[calc(100vh-96px)] w-72 rounded-2xl border border-border bg-bg-secondary/96 p-6 shadow-soft backdrop-blur-xl transition md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="grid gap-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-border py-4 font-display text-3xl font-black leading-none text-text-primary"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            href="/contact"
            className="mt-3 rounded-lg bg-cta px-4 py-3 text-center text-xs font-black uppercase text-white"
            onClick={() => setOpen(false)}
          >
            Hire Me
          </Link>
        </nav>
      </div>
    </header>
  );
}
