import { ExploreProjects } from '@/components/explore-project';
import { Features } from '@/components/feature';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { Hero } from '../components/hero';

export default function Home() {
  return (
    <main className='min-h-screen bg-black text-white'>
      <Navbar />
      <Hero />
      <Features />
      <ExploreProjects />
      <Footer />
    </main>
  );
}
