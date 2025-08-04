'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import type { BaseComponentProps } from '@/types';

interface ScrollIndicatorProps extends BaseComponentProps {
  variant?: 'mouse' | 'arrow' | 'dots';
  size?: 'small' | 'medium' | 'large';
  animated?: boolean;
}

const sizeConfig = {
  small: { width: 20, height: 32, dotSize: 8 },
  medium: { width: 24, height: 40, dotSize: 12 },
  large: { width: 32, height: 48, dotSize: 16 },
};

const MouseIndicator = memo<{ size: keyof typeof sizeConfig; animated: boolean }>(({ 
  size, 
  animated 
}) => {
  const config = sizeConfig[size];
  
  return (
    <div
      className="border-2 border-neutral-400 rounded-full flex justify-center"
      style={{ width: config.width, height: config.height }}
    >
      <motion.div
        className="bg-neutral-400 rounded-full mt-2"
        style={{ width: 4, height: config.dotSize }}
        animate={animated ? { y: [0, config.dotSize, 0] } : {}}
        transition={animated ? { duration: 2, repeat: Infinity } : {}}
      />
    </div>
  );
});

MouseIndicator.displayName = 'MouseIndicator';

const ArrowIndicator = memo<{ size: keyof typeof sizeConfig; animated: boolean }>(({ 
  size, 
  animated 
}) => {
  const config = sizeConfig[size];
  
  return (
    <motion.svg
      width={config.width}
      height={config.height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className="text-neutral-400"
      animate={animated ? { y: [0, 8, 0] } : {}}
      transition={animated ? { duration: 2, repeat: Infinity } : {}}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </motion.svg>
  );
});

ArrowIndicator.displayName = 'ArrowIndicator';

const DotsIndicator = memo<{ size: keyof typeof sizeConfig; animated: boolean }>(({ 
  size, 
  animated 
}) => {
  const config = sizeConfig[size];
  const dotSize = config.dotSize / 3;
  
  return (
    <div className="flex flex-col space-y-2">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="bg-neutral-400 rounded-full"
          style={{ width: dotSize, height: dotSize }}
          animate={animated ? { 
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1] 
          } : {}}
          transition={animated ? {
            duration: 1.5,
            repeat: Infinity,
            delay: index * 0.3
          } : {}}
        />
      ))}
    </div>
  );
});

DotsIndicator.displayName = 'DotsIndicator';

export const ScrollIndicator = memo<ScrollIndicatorProps>(({
  variant = 'mouse',
  size = 'medium',
  animated = true,
  className,
  ...props
}) => {
  const IndicatorComponent = {
    mouse: MouseIndicator,
    arrow: ArrowIndicator,
    dots: DotsIndicator,
  }[variant];

  return (
    <motion.div
      className={`flex items-center justify-center ${className || ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      {...props}
    >
      <IndicatorComponent size={size} animated={animated} />
    </motion.div>
  );
});

ScrollIndicator.displayName = 'ScrollIndicator';