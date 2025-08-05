'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '@/hooks';
import type { BaseComponentProps } from '@/types';

interface FloatingOrbsProps extends BaseComponentProps {
  enabled?: boolean;
  orbCount?: number;
  sensitivity?: number;
}

interface OrbConfig {
  size: number;
  color: string;
  opacity: number;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  parallax: {
    x: number;
    y: number;
  };
}

const defaultOrbs: OrbConfig[] = [
  {
    size: 128,
    color: 'bg-blue-400/10',
    opacity: 0.6,
    position: { top: '20%', left: '10%' },
    parallax: { x: 0.02, y: 0.02 },
  },
  {
    size: 160,
    color: 'bg-blue-500/10',
    opacity: 0.4,
    position: { bottom: '20%', right: '10%' },
    parallax: { x: -0.02, y: -0.02 },
  },
  {
    size: 96,
    color: 'bg-blue-300/15',
    opacity: 0.5,
    position: { top: '60%', left: '70%' },
    parallax: { x: 0.015, y: -0.015 },
  },
];

const FloatingOrb = memo<{ 
  config: OrbConfig; 
  mousePosition: { x: number; y: number }; 
  index: number;
}>(({ config, mousePosition, index }) => {
  return (
    <motion.div
      className={`absolute rounded-full blur-2xl ${config.color}`}
      style={{
        width: config.size,
        height: config.size,
        ...config.position,
      }}
      animate={{
        x: mousePosition.x * config.parallax.x,
        y: mousePosition.y * config.parallax.y,
      }}
      transition={{ 
        type: "spring", 
        stiffness: 50, 
        damping: 20,
        delay: index * 0.1 
      }}
      initial={{ 
        opacity: 0, 
        scale: 0.8 
      }}
      whileInView={{ 
        opacity: config.opacity, 
        scale: 1 
      }}
      viewport={{ once: true }}
    />
  );
});

FloatingOrb.displayName = 'FloatingOrb';

export const FloatingOrbs = memo<FloatingOrbsProps>(({
  enabled = true,
  orbCount,
  sensitivity = 1,
  className,
  children,
  ...props
}) => {
  const mousePosition = useMousePosition({ 
    enabled,
    throttleMs: 16 
  });

  if (!enabled) {
    return <>{children}</>;
  }

  const orbs = orbCount ? defaultOrbs.slice(0, orbCount) : defaultOrbs;
  const adjustedMousePosition = {
    x: mousePosition.x * sensitivity,
    y: mousePosition.y * sensitivity,
  };

  return (
    <div 
      className={`relative overflow-hidden ${className || ''}`}
      {...props}
    >
      {/* Floating orbs */}
      {orbs.map((orb, index) => (
        <FloatingOrb
          key={index}
          config={orb}
          mousePosition={adjustedMousePosition}
          index={index}
        />
      ))}
      
      {/* Content */}
      {children}
    </div>
  );
});

FloatingOrbs.displayName = 'FloatingOrbs';