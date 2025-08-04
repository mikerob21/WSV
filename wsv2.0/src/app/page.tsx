import { Navigation, ErrorBoundary } from '@/components';
import { 
  OptimizedHeroSection,
  OptimizedAboutSection,
  OptimizedPortfolioSection,
  OptimizedFeaturedAchievements,
  OptimizedMetricsSection,
} from '@/components/optimized';

export default function Home() {
  return (
    <ErrorBoundary>
      <main className="min-h-screen bg-white">
        <Navigation />
        <OptimizedHeroSection />
        <OptimizedAboutSection />
        <OptimizedPortfolioSection />
        <OptimizedFeaturedAchievements />
        <OptimizedMetricsSection />
      </main>
    </ErrorBoundary>
  );
}
