import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import MetricsSection from '@/components/MetricsSection';
import FeaturedAchievements from '@/components/FeaturedAchievements';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <FeaturedAchievements />
      <MetricsSection />
    </main>
  );
}
