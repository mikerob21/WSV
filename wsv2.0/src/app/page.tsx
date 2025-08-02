import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  return (
    <main className="min-h-screen atmosphere-blue">
      <Navbar />
      <HeroSection />
      <AboutSection />
    </main>
  );
}
