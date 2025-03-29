import { Navbar } from "@/components/navbar";
import { Hero } from "../components/hero";
import { Features } from "@/components/feature";
import { ExploreProjects } from "@/components/explore-project";
import { Footer } from "@/components/footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <ExploreProjects />
      <Footer />
    </main>
  );
}
