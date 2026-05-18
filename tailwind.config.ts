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
        ink: "#101418",
        panel: "#151b21",
        line: "#26313a",
        steel: "#60717f",
        signal: "#23c6a5",
        amber: "#f3b64f",
        cloud: "#eef3f5"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(16, 20, 24, 0.14)"
      }
    }
  },
  plugins: []
};

export default config;
