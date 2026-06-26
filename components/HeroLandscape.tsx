"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const stars = [
  [8, 16], [18, 32], [31, 18], [43, 28], [57, 14], [68, 34], [82, 20], [92, 38]
];

export function HeroLandscape() {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const skyY = useTransform(scrollY, [0, 700], [0, isMobile ? 0 : 105]);
  const hillsY = useTransform(scrollY, [0, 700], [0, isMobile ? 0 : 245]);
  const frontY = useTransform(scrollY, [0, 700], [0, isMobile ? 0 : 385]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div className="absolute inset-0 will-change-transform" style={{ y: skyY }}>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--sky-top),var(--sky-bottom))]" />
        <div className="cloud-drift absolute left-8 top-24 h-16 w-48 rounded-full bg-white/55 blur-sm" />
        <div className="cloud-drift absolute right-20 top-36 h-14 w-56 rounded-full bg-white/40 blur-sm [animation-delay:1.2s]" />
        <div className="absolute inset-0 opacity-0 transition-opacity duration-700 [data-theme=dark_&]:opacity-100">
          {stars.map(([left, top], index) => (
            <span
              key={`${left}-${top}`}
              className="star-twinkle absolute h-1.5 w-1.5 rounded-full bg-warm"
              style={{ left: `${left}%`, top: `${top}%`, animationDelay: `${index * 0.25}s` }}
            />
          ))}
          <span className="absolute right-[13%] top-[15%] h-20 w-20 rounded-full bg-warm/80 shadow-[0_0_70px_var(--warm-accent)]" />
        </div>
      </motion.div>

      <motion.svg className="absolute inset-x-0 bottom-0 h-[58%] w-full will-change-transform" style={{ y: hillsY }} viewBox="0 0 1440 620" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 320 C180 220 310 245 480 300 C640 352 750 230 930 260 C1130 294 1245 226 1440 290 L1440 620 L0 620 Z" fill="var(--accent-soft)" opacity="0.95" />
        <path d="M0 390 C200 330 315 370 485 405 C650 440 760 345 970 365 C1165 383 1260 342 1440 375 L1440 620 L0 620 Z" fill="var(--bg-elevated)" />
        <rect x="980" y="270" width="120" height="82" rx="16" fill="var(--bg-secondary)" opacity="0.86" />
        <rect x="1000" y="288" width="80" height="42" rx="8" fill="var(--accent)" opacity="0.25" />
        <rect x="336" y="340" width="92" height="58" rx="14" fill="var(--bg-secondary)" opacity="0.82" />
        <path d="M354 360 h36 m-36 14 h56" stroke="var(--accent)" strokeWidth="8" strokeLinecap="round" opacity="0.65" />
      </motion.svg>

      <motion.svg className="absolute inset-x-0 bottom-0 h-[30%] w-full will-change-transform" style={{ y: frontY }} viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 105 C220 70 330 116 520 98 C720 78 820 128 1020 104 C1190 84 1310 90 1440 116 L1440 320 L0 320 Z" fill="var(--accent)" opacity="0.18" />
        <path d="M0 160 C250 120 450 175 690 145 C930 115 1110 180 1440 135 L1440 320 L0 320 Z" fill="var(--accent)" opacity="0.25" />
        {Array.from({ length: 20 }).map((_, index) => (
          <path
            key={index}
            d={`M${index * 74 + 18} 190 c8 -26 18 -38 28 -52`}
            stroke="var(--accent)"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.45"
          />
        ))}
      </motion.svg>
    </div>
  );
}
