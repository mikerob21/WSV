'use client';

import { memo, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { approachSections } from '@/data/approach';
import { ComponentProps } from '@/types/components';

interface ApproachBlueprintProps extends ComponentProps {}

const ApproachBlueprint = memo<ApproachBlueprintProps>(() => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const coreValues = useMemo(() => 
    approachSections.map((section, index) => ({
      id: index,
      title: section.title,
      description: section.description,
      highlight: section.highlight,
      metrics: section.metrics
    })), []);

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Refined Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl lg:text-4xl font-black text-emphasis mb-3 leading-tight">
            Core Values
          </h2>
          <div className="w-12 h-0.5 bg-blue-600 rounded-full mb-4"></div>
          <p className="text-base text-muted max-w-2xl leading-relaxed">
            The fundamental principles that guide our strategic investment approach
          </p>
        </motion.div>

        {/* Enhanced Values Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
              onMouseEnter={() => setActiveCard(value.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <motion.div 
                className="relative p-5 lg:p-6 bg-neutral-0 rounded-xl border border-neutral-200 cursor-pointer overflow-hidden"
                whileHover={{ y: -2, scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                
                {/* Value Number */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xs">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Content */}
                <div className="pr-12">
                  <h3 className="text-lg font-bold text-emphasis mb-3 leading-tight">
                    {value.title}
                  </h3>
                  
                  <p className="text-sm text-secondary leading-relaxed mb-4">
                    {value.description}
                  </p>

                  {/* Progressive Disclosure */}
                  <AnimatePresence>
                    {activeCard === value.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-neutral-200 pt-3">
                          <p className="text-xs font-medium text-emphasis mb-2">
                            {value.highlight}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {value.metrics.map((metric, metricIndex) => (
                              <motion.span
                                key={metricIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: metricIndex * 0.05 }}
                                className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded border border-blue-200"
                              >
                                {metric}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Refined Hover Indicator */}
                <motion.div
                  className="absolute bottom-3 left-5 h-0.5 bg-blue-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: activeCard === value.id ? 20 : 0 }}
                  transition={{ duration: 0.25 }}
                />

                {/* Subtle Hover Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-50/0 to-blue-50/30 rounded-xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === value.id ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Compact Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 text-center"
        >
          <div className="max-w-2xl mx-auto p-5 bg-neutral-0 rounded-lg border border-neutral-200">
            <p className="text-sm text-secondary leading-relaxed">
              These core values form the foundation of every partnership, ensuring alignment between our expertise and your vision.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
});

ApproachBlueprint.displayName = 'ApproachBlueprint';

export default ApproachBlueprint;