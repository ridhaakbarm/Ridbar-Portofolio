import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Ridha Akbar | Operations & Industrial Systems Portfolio",
  description:
    "Portfolio of Muhammad Ridha Akbar, an Industrial Engineering fresh graduate focused on operations, process optimization, data-driven decision making, and internal systems.",
  openGraph: {
    title: "Muhammad Ridha Akbar | Operations & Industrial Systems Portfolio",
    description:
      "Industrial Engineering portfolio covering manufacturing digitalization systems, operational dashboards, maintenance workflows, lab dispatch, and process improvement.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
