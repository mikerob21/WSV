import { VideoHeroSection } from '@/components/sections/HeroSection/VideoHeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import FeaturedAchievements from '@/components/FeaturedAchievements';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <VideoHeroSection />
      <AboutSection />
      <PortfolioSection />
      <FeaturedAchievements />

    </div>
  );
}