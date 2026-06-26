"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "8", label: "Production systems built" },
  { value: "5", label: "Enterprise domains" },
  { value: "8+", label: "Months building real systems" },
  { value: "3", label: "Laravel versions mastered" }
];

export function StatsBar() {
  return (
    <section className="border-y border-border bg-bg-primary px-5 py-8 text-text-primary">
      <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            className="rounded-xl border border-border bg-bg-secondary p-5 shadow-sm"
          >
            <p className="font-display text-6xl font-black leading-none text-accent md:text-7xl">{stat.value}</p>
            <p className="mt-3 text-xs font-bold uppercase leading-5 text-text-secondary">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
