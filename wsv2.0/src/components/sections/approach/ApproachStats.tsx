'use client';

import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { stats } from '@/data/approach';
import { ComponentProps } from '@/types/components';

interface ApproachStatsProps extends ComponentProps {}

const ApproachStats = memo<ApproachStatsProps>(() => {
  const featuredStat = useMemo(() => stats[0], []);
  const otherStats = useMemo(() => stats.slice(1), []);

  return (
    <section className="relative py-24 overflow-hidden bg-neutral-100">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="statsGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d1d5db" strokeWidth="1" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#statsGrid)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <h2 className="text-6xl lg:text-7xl font-black text-emphasis mb-4 tracking-tight leading-tight">
            BY THE 
            <span className="block text-secondary text-4xl lg:text-5xl font-light pl-8 mt-2">
              NUMBERS
            </span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Large Feature Stat */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-6 lg:row-span-2"
          >
            <div className="bg-neutral-0 h-full p-8 rounded-2xl relative overflow-hidden border-2 border-neutral-200 hover:shadow-lg transition-all duration-300 shadow-sm">
              <div className="relative z-10">
                <div className="text-7xl lg:text-8xl font-black mb-4 text-emphasis">
                  {featuredStat.value}
                </div>
                <div className="text-xl font-bold mb-3 text-secondary">{featuredStat.label}</div>
                <div className="text-base text-muted leading-relaxed">{featuredStat.description}</div>
              </div>
            </div>
          </motion.div>

          {/* Other Stats */}
          {otherStats.map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 1) * 0.2, duration: 1 }}
              className={index === 2 ? "lg:col-span-6" : "lg:col-span-3"}
            >
              <div className={`bg-neutral-0 p-6 h-full border-2 border-neutral-200 relative overflow-hidden rounded-2xl hover:shadow-lg transition-all duration-300 shadow-sm ${
                index === 2 ? 'flex items-center justify-between' : ''
              }`}>
                <div className="relative z-10">
                  <div className="text-4xl lg:text-5xl font-black text-emphasis mb-3">
                    {stat.value}
                  </div>
                  <div className="text-base font-semibold text-secondary mb-2">{stat.label}</div>
                  <div className="text-muted text-sm">{stat.description}</div>
                </div>
                {index === 2 && (
                  <div className="w-12 h-12 border-2 border-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom indicator */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-4 px-6 py-3 bg-neutral-0 rounded-full border border-neutral-200 shadow-sm">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span className="text-secondary font-medium">Transforming Soccer Globally</span>
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

ApproachStats.displayName = 'ApproachStats';

export default ApproachStats;