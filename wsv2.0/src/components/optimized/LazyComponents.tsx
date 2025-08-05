'use client';

import { lazy, Suspense, memo } from 'react';
import { Loading } from '@/components/ui';

// Lazy load heavy components for better performance
export const LazyPortfolioSection = lazy(() => 
  import('@/components/PortfolioSection').then(module => ({ 
    default: module.default 
  }))
);

export const LazyMetricsSection = lazy(() => 
  import('@/components/MetricsSection').then(module => ({ 
    default: module.default 
  }))
);

export const LazyFeaturedAchievements = lazy(() => 
  import('@/components/FeaturedAchievements').then(module => ({ 
    default: module.default 
  }))
);

export const LazyAboutSection = lazy(() => 
  import('@/components/AboutSection').then(module => ({ 
    default: module.default 
  }))
);

// Wrapper components with Suspense and error boundaries
interface LazyWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  componentName?: string;
}

const LazyWrapper = memo<LazyWrapperProps>(({ 
  children, 
  fallback, 
  componentName = 'Component' 
}) => (
  <Suspense 
    fallback={
      fallback || (
        <Loading 
          variant="skeleton" 
          size="large" 
          text={`Loading ${componentName}...`}
          className="min-h-96"
        />
      )
    }
  >
    {children}
  </Suspense>
));

LazyWrapper.displayName = 'LazyWrapper';

// Ready-to-use lazy components with suspense
export const OptimizedPortfolioSection = memo(() => (
  <LazyWrapper componentName="Portfolio">
    <LazyPortfolioSection />
  </LazyWrapper>
));

export const OptimizedMetricsSection = memo(() => (
  <LazyWrapper componentName="Metrics">
    <LazyMetricsSection />
  </LazyWrapper>
));

export const OptimizedFeaturedAchievements = memo(() => (
  <LazyWrapper componentName="Achievements">
    <LazyFeaturedAchievements />
  </LazyWrapper>
));

export const OptimizedAboutSection = memo(() => (
  <LazyWrapper componentName="About">
    <LazyAboutSection />
  </LazyWrapper>
));

OptimizedPortfolioSection.displayName = 'OptimizedPortfolioSection';
OptimizedMetricsSection.displayName = 'OptimizedMetricsSection';
OptimizedFeaturedAchievements.displayName = 'OptimizedFeaturedAchievements';
OptimizedAboutSection.displayName = 'OptimizedAboutSection';