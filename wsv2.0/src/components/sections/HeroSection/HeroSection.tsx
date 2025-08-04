'use client';

import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Typography, Button } from '@/components/ui';
import { StatisticsGrid, FloatingOrbs, ScrollIndicator } from '@/components/business';
import { useStaggerAnimation } from '@/hooks';
import type { BaseComponentProps } from '@/types';

interface HeroSectionProps extends BaseComponentProps {
  statistics?: Array<{
    value: string;
    label: string;
  }>;
  enableFloatingOrbs?: boolean;
  showScrollIndicator?: boolean;
}

// Memoized animation configurations
const HERO_ANIMATIONS = {
  title: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  },
  subtitle: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.3, duration: 0.8 }
  },
  buttons: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.5, duration: 0.8 }
  },
  statistics: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.7, duration: 0.8 }
  }
} as const;

const HeroTitle = memo(() => (
  <motion.div
    {...HERO_ANIMATIONS.title}
    className="mb-8"
  >
    <Typography
      variant="display-hero"
      className="mb-6"
      component="h1"
    >
      <span className="block">
        <span className="text-brand-dark">
          Transforming
        </span>
      </span>
      <motion.span 
        className="block text-brand"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        US Soccer
      </motion.span>
    </Typography>
  </motion.div>
));

HeroTitle.displayName = 'HeroTitle';

const HeroSubtitle = memo(() => (
  <motion.div {...HERO_ANIMATIONS.subtitle}>
    <Typography
      variant="body-large"
      className="max-w-3xl mx-auto mb-12"
      align="center"
    >
      Elite soccer venture capital led by{' '}
      <span className="text-emphasis gradient-text">
        Jeremiah White III
      </span>
      , former USMNT player. Strategic investments in technology, clubs, and media transforming the soccer ecosystem.
    </Typography>
  </motion.div>
));

HeroSubtitle.displayName = 'HeroSubtitle';

const HeroCTAButtons = memo(() => (
  <motion.div
    {...HERO_ANIMATIONS.buttons}
    className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
  >
    <Button
      variant="primary"
      size="large"
      className="group"
      icon={
        <motion.svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </motion.svg>
      }
      iconPosition="right"
    >
      View Investment Approach
    </Button>

    <Button
      variant="outline"
      size="large"
      className="group"
      icon={
        <motion.svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: 0 }}
          whileHover={{ rotate: 90 }}
          transition={{ duration: 0.3 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </motion.svg>
      }
      iconPosition="right"
    >
      Portfolio Companies
    </Button>
  </motion.div>
));

HeroCTAButtons.displayName = 'HeroCTAButtons';

export const HeroSection = memo<HeroSectionProps>(({
  statistics,
  enableFloatingOrbs = true,
  showScrollIndicator = true,
  className,
  ...props
}) => {
  // Default statistics data
  const defaultStatistics = useMemo(() => [
    { value: '200M+', label: 'Total Video Views', delay: 0.2 },
    { value: '380K+', label: 'Social Followers', delay: 0.4 },
    { value: '6', label: 'Portfolio Companies', delay: 0.6 },
    { value: '25+', label: 'Key Partnerships', delay: 0.8 },
  ], []);

  const statsData = useMemo(() => 
    statistics ? statistics.map((stat, index) => ({
      ...stat,
      delay: 0.2 + (index * 0.2)
    })) : defaultStatistics,
    [statistics, defaultStatistics]
  );

  return (
    <section 
      className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-white ${className || ''}`}
      {...props}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 data-texture" />
      </div>

      {/* Floating Orbs */}
      <FloatingOrbs enabled={enableFloatingOrbs}>
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-32 pb-20 text-center">
          {/* Main Content */}
          <HeroTitle />
          <HeroSubtitle />
          <HeroCTAButtons />

          {/* Statistics */}
          <motion.div {...HERO_ANIMATIONS.statistics}>
            <StatisticsGrid
              data={statsData}
              columns={4}
              animated={true}
            />
          </motion.div>
        </div>
      </FloatingOrbs>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <ScrollIndicator variant="mouse" animated={true} />
        </div>
      )}
    </section>
  );
});

HeroSection.displayName = 'HeroSection';