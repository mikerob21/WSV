import { ErrorBoundary } from '@/components';
import Navbar from '@/components/Navbar';
import { VideoHeroSection } from '@/components/sections/HeroSection/VideoHeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import FeaturedAchievements from '@/components/FeaturedAchievements';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <ErrorBoundary>
      <main className="min-h-screen bg-white">
        <Navbar />
        <VideoHeroSection />
        <AboutSection />
        <PortfolioSection />
        <FeaturedAchievements />
        <Footer />
      </main>
    </ErrorBoundary>
  );
}
