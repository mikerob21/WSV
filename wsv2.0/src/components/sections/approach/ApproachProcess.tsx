'use client';

import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '@/data/approach';
import { ComponentProps } from '@/types/components';

interface ApproachProcessProps extends ComponentProps {}

const ApproachProcess = memo<ApproachProcessProps>(() => {
  const stepsWithColors = useMemo(() => 
    processSteps.map((step, index) => ({
      ...step
    })), []);

  return (
    <section className="relative py-24 overflow-hidden bg-neutral-0">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="processGrid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#e5e7eb" strokeWidth="1" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#processGrid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-20">
              <h2 className="text-6xl lg:text-7xl font-black text-emphasis leading-tight mb-6">
                HOW WE
                <span className="block text-secondary text-4xl lg:text-5xl font-light pl-4 mt-2">
                  TRANSFORM
                </span>
                <span className="block text-muted text-xl font-light mt-2">
                  your vision
                </span>
              </h2>
              <p className="text-lg text-secondary leading-relaxed max-w-xl">
                A proven 4-step methodology that turns soccer dreams into successful realities.
              </p>
            </div>
          </motion.div>

          {/* Process Steps */}
          <div className="lg:col-span-1 space-y-8">
            {stepsWithColors.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                {/* Step Card */}
                <div className="relative p-6 lg:p-8 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-neutral-0 border-2 border-neutral-200 shadow-sm">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-neutral-800 to-neutral-900 text-white flex items-center justify-center text-lg font-bold shadow-lg">
                    {step.step}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 pt-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                      <h3 className="text-xl lg:text-2xl font-bold text-emphasis mb-3 lg:mb-0">
                        {step.title}
                      </h3>
                      <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 border border-blue-200">
                        {step.duration}
                      </span>
                    </div>
                    
                    <p className="text-base text-secondary leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Progress indicator */}
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                      <span className="text-sm font-medium text-muted">
                        Step {index + 1} of 4
                      </span>
                      <div className="flex-1 h-1 bg-neutral-200 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-blue-600"
                          initial={{ width: '0%' }}
                          whileInView={{ width: `${(index + 1) * 25}%` }}
                          transition={{ delay: 0.3, duration: 0.8 }}
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-sm hover:shadow-md">
            Begin Your Transformation
          </button>
        </motion.div>
      </div>
    </section>
  );
});

ApproachProcess.displayName = 'ApproachProcess';

export default ApproachProcess;