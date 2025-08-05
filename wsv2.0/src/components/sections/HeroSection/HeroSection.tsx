'use client';

import { memo } from 'react';
import { VideoHeroSection } from './VideoHeroSection';
import type { BaseComponentProps } from '@/types';

interface HeroSectionProps extends BaseComponentProps {
  statistics?: Array<{
    value: string;
    label: string;
  }>;
  enableFloatingOrbs?: boolean;
  showScrollIndicator?: boolean;
  videoSrc?: string;
}

export const HeroSection = memo<HeroSectionProps>(({
  showScrollIndicator = true,
  videoSrc,
  className,
  ...props
}) => {
  return (
    <VideoHeroSection
      showScrollIndicator={showScrollIndicator}
      videoSrc={videoSrc}
      className={className}
      {...props}
    />
  );
});

HeroSection.displayName = 'HeroSection';