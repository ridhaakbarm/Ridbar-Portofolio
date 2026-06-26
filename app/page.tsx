import { ArchitectureShowcase } from "@/components/ArchitectureShowcase";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { StatsBar } from "@/components/StatsBar";
import { TechStackShowcase } from "@/components/TechStackShowcase";

export default function Home() {
  return (
    <main className="min-h-screen bg-void">
      <Header />
      <HeroSection />
      <StatsBar />
      <TechStackShowcase />
      <FeaturedProjects />
      <ArchitectureShowcase />
      <Footer />
    </main>
  );
}
