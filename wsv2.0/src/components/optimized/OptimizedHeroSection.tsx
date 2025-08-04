'use client';

import { memo, useMemo, useCallback } from 'react';
import { HeroSection } from '@/components/sections';
import { usePortfolioMetrics, useStableCallback } from '@/hooks';
import type { BaseComponentProps } from '@/types';

interface OptimizedHeroSectionProps extends BaseComponentProps {
  enableFloatingOrbs?: boolean;
  showScrollIndicator?: boolean;
}

/**
 * Performance-optimized Hero Section with memoized statistics
 * Uses portfolio data to generate dynamic statistics
 */
export const OptimizedHeroSection = memo<OptimizedHeroSectionProps>(({
  enableFloatingOrbs = true,
  showScrollIndicator = true,
  ...props
}) => {
  const portfolioMetrics = usePortfolioMetrics();

  // Memoize statistics to prevent recalculation
  const statistics = useMemo(() => [
    { 
      value: portfolioMetrics.totalViews > 1000000 
        ? `${Math.round(portfolioMetrics.totalViews / 1000000)}M+` 
        : `${Math.round(portfolioMetrics.totalViews / 1000)}K+`,
      label: 'Total Video Views' 
    },
    { 
      value: portfolioMetrics.totalFollowers > 1000 
        ? `${Math.round(portfolioMetrics.totalFollowers / 1000)}K+` 
        : `${portfolioMetrics.totalFollowers}+`,
      label: 'Social Followers' 
    },
    { 
      value: portfolioMetrics.totalCompanies.toString(),
      label: 'Portfolio Companies' 
    },
    { 
      value: '25+',
      label: 'Key Partnerships' 
    },
  ], [portfolioMetrics]);

  return (
    <HeroSection
      statistics={statistics}
      enableFloatingOrbs={enableFloatingOrbs}
      showScrollIndicator={showScrollIndicator}
      {...props}
    />
  );
});

OptimizedHeroSection.displayName = 'OptimizedHeroSection';