import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-display" });

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
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="min-h-screen bg-void font-body text-chalk antialiased">{children}</body>
    </html>
  );
}
