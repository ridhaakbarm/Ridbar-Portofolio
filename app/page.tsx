import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-void">
      <Header />
      <HeroSection />
      <FeaturedProjects />
    </main>
  );
}
