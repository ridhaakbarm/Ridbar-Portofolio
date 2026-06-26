"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className="relative inline-flex h-10 w-20 items-center rounded-full border border-border bg-bg-elevated p-1 text-text-primary shadow-sm transition"
    >
      <motion.span
        className="absolute h-8 w-8 rounded-full bg-bg-secondary shadow-sm"
        animate={{ x: isLight ? 0 : 40 }}
        transition={{ type: "spring", stiffness: 360, damping: 26 }}
      />
      <span className="relative z-10 flex h-8 w-8 items-center justify-center text-warm">
        <Sun size={16} />
      </span>
      <span className="relative z-10 flex h-8 w-8 items-center justify-center text-accent">
        <Moon size={16} />
      </span>
    </button>
  );
}
