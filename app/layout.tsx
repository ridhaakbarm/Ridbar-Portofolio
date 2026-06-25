import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-display" });

export const metadata: Metadata = {
  title: "Ridha Akbar | Creative-Tech Operations Portfolio",
  description:
    "A cinematic portfolio of manufacturing systems, Laravel applications, operational dashboards, and industrial workflow tools by Muhammad Ridha Akbar.",
  openGraph: {
    title: "Ridha Akbar | Creative-Tech Operations Portfolio",
    description:
      "Manufacturing digitalization systems, OEE dashboards, maintenance workflows, lab dispatch, and process improvement tools.",
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
