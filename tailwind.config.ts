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
        void: "#0A0A0A",
        surface: "#111111",
        elevated: "#1A1A1A",
        muted: "#2A2A2A",
        dust: "#666666",
        fog: "#999999",
        chalk: "#E8E4E0",
        bone: "#F5F2EE",
        ember: "#DC2626",
        "ember-dark": "#991B1B",
        ink: "#101418",
        panel: "#151b21",
        line: "#26313a",
        steel: "#60717f",
        signal: "#23c6a5",
        amber: "#f3b64f",
        cloud: "#eef3f5"
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 60px rgba(16, 20, 24, 0.14)",
        glow: "0 0 80px rgba(220, 38, 38, 0.24)"
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
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 rgba(220, 38, 38, 0)" },
          "50%": { boxShadow: "0 0 48px rgba(220, 38, 38, 0.35)" }
        }
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "reveal-up": "reveal-up 0.8s ease-out both",
        "fade-in": "fade-in 0.8s ease-out both",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite"
      },
      screens: {
        "3xl": "1720px"
      }
    }
  },
  plugins: []
};

export default config;
