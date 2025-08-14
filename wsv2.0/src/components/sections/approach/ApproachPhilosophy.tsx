'use client';

import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { stats, processSteps } from '@/data/approach';
import { ComponentProps } from '@/types/components';

interface ApproachPhilosophyProps extends ComponentProps {}

const ApproachPhilosophy = memo<ApproachPhilosophyProps>(() => {
  const keyStats = useMemo(() => stats.slice(0, 3), []);
  const methodology = useMemo(() => processSteps, []);

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden bg-neutral-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Integrated Header with Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="heading-primary text-emphasis mb-3">
                Partnership Philosophy
              </h2>
              <p className="body-default text-secondary">
                Strategic partnership through proven expertise and methodical execution
              </p>
            </div>
            
            {/* Inline Stats */}
            <div className="grid grid-cols-3 gap-4">
              {keyStats.map((stat, index) => (
                <motion.div
                  key={stat.value}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 hover:shadow-sm transition-all duration-300">
                    <div className="heading-secondary text-emphasis mb-1">
                      {stat.value}
                    </div>
                    <div className="caption text-secondary mb-1">
                      {stat.label}
                    </div>
                    <div className="caption text-muted">
                      {stat.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Horizontal Timeline Methodology */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="heading-secondary text-emphasis mb-6">Our Methodology</h3>
          
          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-6 left-6 right-6 h-0.5 bg-neutral-200"></div>
            <motion.div
              className="absolute top-6 left-6 h-0.5 bg-blue-600"
              initial={{ width: 0 }}
              whileInView={{ width: 'calc(100% - 3rem)' }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            
            {/* Timeline Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodology.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="relative"
                >
                  {/* Timeline Node */}
                  <div className="absolute top-4 left-4 w-4 h-4 bg-blue-600 rounded-full border-2 border-neutral-0 z-10"></div>
                  
                  {/* Step Card */}
                  <div className="bg-neutral-50 p-5 rounded-lg border border-neutral-200 hover:shadow-sm transition-all duration-300 ml-10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="caption text-blue-600 bg-blue-50 px-2 py-1 rounded border border-blue-200">
                        {step.step}
                      </span>
                      <span className="caption text-muted">
                        {step.duration}
                      </span>
                    </div>
                    
                    <h4 className="heading-tertiary text-emphasis mb-2">
                      {step.title}
                    </h4>
                    
                    <p className="body-small text-secondary">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Compact Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="max-w-3xl mx-auto p-6 bg-gradient-to-r from-neutral-50 to-neutral-100/50 rounded-lg border border-neutral-200">
            <p className="body-default text-secondary">
              We combine deep soccer expertise with proven investment methodology to accelerate your venture's path to market leadership.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
});

ApproachPhilosophy.displayName = 'ApproachPhilosophy';

export default ApproachPhilosophy;