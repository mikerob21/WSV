'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { Card, Typography } from '@/components/ui';
import type { ComponentProps } from '@/types';

interface Statistic {
  value: string;
  label: string;
  delay: number;
}

interface StatisticsGridProps extends ComponentProps<Statistic[]> {
  data: Statistic[];
  columns?: 2 | 3 | 4;
  animated?: boolean;
}

const StatCard = memo<{ stat: Statistic; index: number; animated: boolean }>(({ 
  stat, 
  index, 
  animated 
}) => {
  const CardWrapper = animated ? motion.div : 'div';
  
  const animationProps = animated ? {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: { 
      delay: stat.delay, 
      duration: 0.6, 
      type: "spring",
      stiffness: 100,
      damping: 10 
    },
    whileHover: { scale: 1.05, y: -5 },
  } : {};

  return (
    <CardWrapper {...animationProps}>
      <Card
        variant="default"
        hoverable
        className="group relative p-4 bg-white rounded-xl border border-blue-200 hover:border-blue-400 transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105"
      >
        <div className="relative text-center">
          <Typography
            variant="heading-tertiary"
            className="mono-large text-brand mb-2 font-numeric group-hover:scale-110 transition-transform duration-200"
          >
            {stat.value}
          </Typography>
          <Typography
            variant="body-small"
            color="secondary"
            className="group-hover:text-brand transition-colors duration-200"
          >
            {stat.label}
          </Typography>
        </div>
      </Card>
    </CardWrapper>
  );
});

StatCard.displayName = 'StatCard';

export const StatisticsGrid = memo<StatisticsGridProps>(({
  data,
  columns = 4,
  animated = true,
  className,
  loading = false,
  error = null,
  ...props
}) => {
  if (loading) {
    return (
      <div className={`grid grid-cols-2 lg:grid-cols-${columns} gap-4 max-w-5xl mx-auto`}>
        {Array.from({ length: columns }).map((_, i) => (
          <Card key={i} className="h-24 animate-pulse bg-neutral-200" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <Typography variant="body-default" color="error">
          {error}
        </Typography>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="text-center py-8">
        <Typography variant="body-default" color="secondary">
          No statistics available
        </Typography>
      </div>
    );
  }

  return (
    <div 
      className={`grid grid-cols-2 lg:grid-cols-${columns} gap-4 max-w-5xl mx-auto ${className || ''}`}
      {...props}
    >
      {data.map((stat, index) => (
        <StatCard
          key={`${stat.label}-${index}`}
          stat={stat}
          index={index}
          animated={animated}
        />
      ))}
    </div>
  );
});

StatisticsGrid.displayName = 'StatisticsGrid';