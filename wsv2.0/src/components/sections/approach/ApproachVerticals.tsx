'use client';

import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { verticals } from '@/data/approach';
import { ComponentProps } from '@/types/components';

interface ApproachVerticalsProps extends ComponentProps {}

const ApproachVerticals = memo<ApproachVerticalsProps>(() => {
  const verticalsWithColors = useMemo(() => 
    verticals.map((vertical, index) => ({
      ...vertical,
      numberBg: 'bg-gradient-to-r from-neutral-800 to-neutral-900'
    })), []);

  return (
    <section className="relative py-24 overflow-hidden bg-neutral-50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="verticalGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#d1d5db" strokeWidth="1" opacity="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#verticalGrid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center mb-32"
        >
          <div className="relative">
            <h2 className="text-7xl lg:text-8xl font-black text-emphasis leading-none mb-6">
              INVESTMENT
              <span className="block text-secondary text-4xl lg:text-5xl font-light mt-2">
                VERTICALS
              </span>
            </h2>
          </div>
          
          <p className="text-xl text-muted max-w-4xl mx-auto leading-relaxed mt-6">
            Three strategic pillars transforming the soccer ecosystem through technology, community, and content
          </p>
        </motion.div>

        {/* Investment Verticals */}
        <div className="space-y-16">
          {verticalsWithColors.map((vertical, index) => (
            <motion.div
              key={vertical.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative"
            >
              <div className="relative max-w-full">
                
                {/* Vertical Container */}
                <div className="relative p-8 lg:p-10 bg-neutral-0 rounded-2xl border-2 border-neutral-200 overflow-hidden hover:shadow-lg transition-all duration-300 shadow-sm">
                  {/* Vertical Number */}
                  <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg ${vertical.numberBg}`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Classification */}
                  <div className="mb-6 pt-4">
                    <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 bg-blue-50 text-blue-600 border border-blue-200">
                      {vertical.subtitle}
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white ${vertical.numberBg}`}>
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d={vertical.iconPath}/>
                        </svg>
                      </div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-emphasis">
                        {vertical.title}
                      </h3>
                    </div>
                    
                    <div className="text-sm text-muted">
                      Investment Vertical #{String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Overview */}
                  <div className="relative mb-6">
                    <p className="text-base text-secondary leading-relaxed mb-4">
                      {vertical.description}
                    </p>
                    
                    {/* Strategic Insight */}
                    <div className="relative p-4 rounded-lg border-l-4 border-blue-600 bg-neutral-100">
                      <div className="text-sm font-medium text-muted mb-2">
                        Strategic Insight
                      </div>
                      <p className="text-sm font-medium text-emphasis leading-relaxed">
                        {vertical.highlight}
                      </p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                    {vertical.metrics.map((metric, metricIndex) => (
                      <div
                        key={metric}
                        className="relative p-3 rounded-lg border border-neutral-200 bg-neutral-0 hover:shadow-sm transition-shadow"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                          <span className="text-sm font-medium text-secondary">
                            {metric}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3">
                    {vertical.features.map((feature, featureIndex) => (
                      <div
                        key={feature}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-neutral-50 border border-neutral-200"
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                        <span className="text-sm text-secondary font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="relative inline-block p-6 bg-neutral-0 rounded-2xl border border-neutral-200 shadow-sm">
            <h4 className="text-2xl font-bold text-emphasis mb-3">
              Investment Verticals Complete
            </h4>
            <p className="text-base text-secondary">
              Ready to build your soccer venture within these strategic verticals?
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

ApproachVerticals.displayName = 'ApproachVerticals';

export default ApproachVerticals;