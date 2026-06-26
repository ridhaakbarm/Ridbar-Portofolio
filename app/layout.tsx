import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "Ridha Akbar | Fullstack Developer & Systems Architect",
  description:
    "Fullstack developer and systems architect portfolio covering Laravel, PHP, MySQL, REST APIs, manufacturing systems, dashboards, workflows, and integrations.",
  openGraph: {
    title: "Ridha Akbar | Fullstack Developer & Systems Architect",
    description:
      "Production-grade fullstack systems built with Laravel, PHP, MySQL, dashboards, APIs, exports, and role-based workflows.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen bg-bg-primary font-body text-text-primary antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
