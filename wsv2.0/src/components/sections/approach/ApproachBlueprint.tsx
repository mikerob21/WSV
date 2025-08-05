'use client';

import { memo, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { approachSections } from '@/data/approach';
import { ComponentProps } from '@/types/components';

interface ApproachBlueprintProps extends ComponentProps {}

const ApproachBlueprint = memo<ApproachBlueprintProps>(() => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sectionsWithColors = useMemo(() => 
    approachSections.map((section, index) => ({
      ...section,
      borderColor: 'border-neutral-200',
      bgColor: 'bg-neutral-50',
      numberBg: 'bg-gradient-to-r from-neutral-800 to-neutral-900'
    })), []);

  return (
    <section className="relative py-24 overflow-hidden bg-neutral-50">
      {/* Blueprint grid background */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" className="absolute inset-0 opacity-10">
          <defs>
            <pattern id="subtleGrid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#d1d5db" strokeWidth="1" opacity="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#subtleGrid)" />
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
          <div className="relative inline-block">
            <h2 className="text-7xl lg:text-8xl font-black text-emphasis leading-none mb-4">
              CORE
            </h2>
            <div className="absolute -inset-4 border-2 border-neutral-300 transform rotate-1 rounded-2xl"></div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative"
          >
            <h3 className="text-4xl lg:text-5xl font-light text-secondary mb-6">
              ARCHITECTURE
            </h3>
            <p className="text-xl text-muted max-w-4xl mx-auto leading-relaxed">
              Four foundational pillars engineered to build soccer's future
            </p>
          </motion.div>
        </motion.div>

        {/* Core Architecture Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {sectionsWithColors.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.2 }
              }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative"
            >
              {/* Blueprint Card */}
              <div 
                onClick={() => {
                  setSelectedCard(index);
                  setIsModalOpen(true);
                }}
                className={`relative p-6 lg:p-8 rounded-2xl border-2 overflow-hidden hover:shadow-xl cursor-pointer transition-all duration-300 group ${
                  section.borderColor
                } ${section.bgColor} shadow-sm`}
              >
                
                {/* Card Number */}
                <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-lg ${section.numberBg}`}>
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Header */}
                <div className="mb-6 border-b border-neutral-200 pb-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-emphasis mb-2">
                    {section.title}
                  </h3>
                  <div className="text-sm text-muted uppercase tracking-wide">
                    Core Architecture #{String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Description */}
                <div className="relative mb-6">
                  <p className="text-base text-secondary leading-relaxed mb-4">
                    {section.description}
                  </p>
                  
                  {/* Highlight Box */}
                  <div className="relative p-4 rounded-lg border-l-4 border-blue-600 bg-neutral-100">
                    <p className="text-sm font-medium text-emphasis leading-relaxed">
                      {section.highlight}
                    </p>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 gap-3">
                  {section.metrics.map((metric, metricIndex) => (
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

                {/* Clickable Indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center space-x-2 text-xs font-medium text-muted bg-neutral-100 px-2 py-1 rounded">
                    <span>View Details</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="relative inline-block p-6 border border-neutral-200 rounded-2xl bg-neutral-0 shadow-sm">
            <h4 className="text-2xl font-bold text-emphasis mb-3">
              Architecture Complete
            </h4>
            <p className="text-base text-secondary">
              Ready to build your soccer empire on this foundation?
            </p>
          </div>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedCard !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-neutral-0 rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-muted transition-all z-10"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-6 lg:p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold ${sectionsWithColors[selectedCard].numberBg}`}>
                    {String(selectedCard + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-emphasis">
                      {sectionsWithColors[selectedCard].title}
                    </h2>
                    <div className="text-sm text-muted mt-1">
                      Detailed Overview
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-base text-secondary leading-relaxed mb-4">
                    {sectionsWithColors[selectedCard].description}
                  </p>
                  
                  <div className="p-4 rounded-lg border-l-4 border-blue-600 bg-neutral-100 mb-6">
                    <h4 className="text-base font-semibold text-emphasis mb-2">Key Insight</h4>
                    <p className="text-sm text-secondary leading-relaxed">
                      {sectionsWithColors[selectedCard].highlight}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {sectionsWithColors[selectedCard].metrics.map((metric, metricIndex) => (
                    <div
                      key={metric}
                      className="p-4 rounded-lg border border-neutral-200 bg-neutral-0"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                        <span className="text-sm font-medium text-secondary">
                          {metric}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});

ApproachBlueprint.displayName = 'ApproachBlueprint';

export default ApproachBlueprint;