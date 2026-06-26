import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bg-primary": "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",
        "bg-elevated": "var(--bg-elevated)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        accent: {
          DEFAULT: "var(--accent)",
          soft: "var(--accent-soft)"
        },
        border: "var(--border)",
        cta: {
          DEFAULT: "var(--cta-bg)",
          hover: "var(--cta-hover)"
        },
        warm: "var(--warm-accent)",
        ink: "var(--text-primary)",
        panel: "var(--bg-secondary)",
        line: "var(--border)",
        steel: "var(--text-secondary)",
        signal: "var(--accent)",
        amber: "var(--warm-accent)",
        cloud: "var(--bg-primary)",
        void: "var(--bg-primary)",
        surface: "var(--bg-secondary)",
        elevated: "var(--bg-elevated)",
        muted: "var(--border)",
        dust: "var(--text-muted)",
        fog: "var(--text-secondary)",
        chalk: "var(--text-primary)",
        bone: "var(--text-primary)",
        ember: "var(--accent)",
        "ember-dark": "var(--cta-hover)"
      },
      fontFamily: {
        display: ["var(--font-display)", "Outfit", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(26, 43, 60, 0.12)",
        glow: "0 20px 80px rgba(45, 155, 110, 0.2)"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        "reveal-up": {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        "cloud-drift": {
          "0%": { transform: "translateX(-8%)" },
          "100%": { transform: "translateX(8%)" }
        },
        "star-twinkle": {
          "0%, 100%": { opacity: "0.35", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1)" }
        },
        bob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "reveal-up": "reveal-up 0.8s ease-out both",
        "fade-in": "fade-in 0.8s ease-out both",
        "cloud-drift": "cloud-drift 16s ease-in-out infinite alternate",
        "star-twinkle": "star-twinkle 2.8s ease-in-out infinite",
        bob: "bob 4s ease-in-out infinite"
      },
      screens: {
        "3xl": "1720px"
      }
    }
  },
  plugins: []
};

export default config;
