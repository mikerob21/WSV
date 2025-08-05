'use client';

import { memo, useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { verticals } from '@/data/approach';
import { ComponentProps } from '@/types/components';

interface ApproachVerticalsProps extends ComponentProps {}

const ApproachVerticals = memo<ApproachVerticalsProps>(() => {
  const [activeVertical, setActiveVertical] = useState<number>(0);
  const [tabDimensions, setTabDimensions] = useState({ width: 0, left: 0 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const investmentVerticals = useMemo(() => 
    verticals.map((vertical, index) => ({
      ...vertical,
      id: index
    })), []);

  // Calculate tab indicator position
  useEffect(() => {
    const activeTab = tabRefs.current[activeVertical];
    if (activeTab) {
      const { offsetWidth, offsetLeft } = activeTab;
      setTabDimensions({ width: offsetWidth, left: offsetLeft });
    }
  }, [activeVertical]);

  const handleTabClick = useCallback((index: number) => {
    setActiveVertical(index);
  }, []);

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden bg-neutral-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Refined Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl lg:text-4xl font-black text-emphasis mb-3 leading-tight">
            Investment Focus
          </h2>
          <div className="w-12 h-0.5 bg-blue-600 rounded-full mb-4"></div>
          <p className="text-base text-muted max-w-2xl leading-relaxed">
            Strategic verticals driving soccer's digital transformation
          </p>
        </motion.div>

        {/* Enhanced Tab System with Sliding Indicator */}
        <div className="mb-8">
          <div className="relative flex flex-wrap gap-1 p-1 bg-neutral-50 rounded-lg border border-neutral-200 overflow-hidden">
            
            {/* Sliding Tab Indicator */}
            <motion.div
              className="absolute bg-blue-600 rounded-md shadow-sm z-0"
              animate={{
                width: tabDimensions.width,
                x: tabDimensions.left,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              style={{
                height: 'calc(100% - 8px)',
                top: 4,
                left: 4,
              }}
            />

            {/* Tab Buttons */}
            {investmentVerticals.map((vertical, index) => (
              <motion.button
                key={vertical.id}
                ref={(el) => (tabRefs.current[index] = el)}
                onClick={() => handleTabClick(index)}
                className={`relative flex-1 min-w-0 px-4 py-3 text-sm font-medium rounded-md transition-all duration-300 z-10 ${
                  activeVertical === index
                    ? 'text-white'
                    : 'text-secondary hover:text-emphasis hover:bg-neutral-0/50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  color: activeVertical === index ? '#ffffff' : undefined
                }}
              >
                <div className="flex items-center justify-center gap-2">
                  <motion.svg 
                    className="w-4 h-4" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{
                      scale: activeVertical === index ? 1.1 : 1,
                      rotate: activeVertical === index ? 360 : 0
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <path d={vertical.iconPath}/>
                  </motion.svg>
                  <span className="truncate">{vertical.title}</span>
                </div>

                {/* Active Indicator Pulse */}
                {activeVertical === index && (
                  <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Enhanced Content Display with Staggered Animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVertical}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-neutral-50 rounded-lg p-6 border border-neutral-200"
          >
            
            {/* Active Vertical Header with Staggered Animation */}
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div 
                  className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 15,
                    delay: 0.2 
                  }}
                >
                  <motion.svg 
                    className="w-5 h-5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  >
                    <path d={investmentVerticals[activeVertical].iconPath}/>
                  </motion.svg>
                </motion.div>
                <div>
                  <motion.h3 
                    className="text-xl font-bold text-emphasis"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {investmentVerticals[activeVertical].title}
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-muted"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    {investmentVerticals[activeVertical].subtitle}
                  </motion.p>
                </div>
              </div>
              
              <motion.p 
                className="text-sm text-secondary leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {investmentVerticals[activeVertical].description}
              </motion.p>
            </motion.div>

            {/* Two-Column Layout with Enhanced Interactions */}
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Strategic Focus Card */}
              <motion.div 
                className="group bg-neutral-0 p-4 rounded-lg border border-neutral-200 cursor-pointer transition-all duration-300 hover:shadow-md hover:border-blue-300"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ y: -2, scale: 1.02 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <motion.div
                    className="w-2 h-2 bg-blue-600 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1
                    }}
                  />
                  <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                    Strategic Focus
                  </div>
                </div>
                <p className="text-sm font-medium text-emphasis leading-relaxed group-hover:text-blue-900 transition-colors duration-300">
                  {investmentVerticals[activeVertical].highlight}
                </p>
              </motion.div>

              {/* Key Metrics Card */}
              <motion.div 
                className="group bg-neutral-0 p-4 rounded-lg border border-neutral-200 cursor-pointer transition-all duration-300 hover:shadow-md hover:border-blue-300"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ y: -2, scale: 1.02 }}
              >
                <div className="text-xs font-semibold text-blue-600 mb-3 uppercase tracking-wide">
                  Key Metrics
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {investmentVerticals[activeVertical].metrics.map((metric, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.8 + (index * 0.1) 
                      }}
                    >
                      <motion.div 
                        className="w-1.5 h-1.5 bg-blue-600 rounded-full"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: 1.5 + (index * 0.2)
                        }}
                      />
                      <span className="text-sm font-medium text-emphasis group-hover:text-blue-900 transition-colors duration-300">
                        {metric}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Investment Features with Sophisticated Animations */}
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="text-xs font-semibold text-blue-600 mb-3 uppercase tracking-wide">
                Investment Features
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {investmentVerticals[activeVertical].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 1.1 + (index * 0.05),
                      type: "spring",
                      stiffness: 150
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    className="group flex items-center gap-2 p-2 bg-neutral-0 rounded border border-neutral-200 cursor-pointer hover:border-blue-300 hover:shadow-sm transition-all duration-300"
                  >
                    <motion.div 
                      className="w-1 h-1 bg-blue-600 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 2 + (index * 0.1)
                      }}
                    />
                    <span className="text-xs font-medium text-secondary truncate group-hover:text-blue-900 transition-colors duration-300">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Enhanced CTA with Sophisticated Interactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-10"
        >
          <motion.div 
            className="max-w-lg mx-auto p-5 bg-gradient-to-r from-blue-50 to-neutral-50 rounded-lg border border-blue-200 relative overflow-hidden group cursor-pointer"
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Background Gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-blue-50/50"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative z-10">
              <motion.h4 
                className="text-lg font-bold text-emphasis mb-2"
                animate={{
                  color: ["#1f2937", "#2563eb", "#1f2937"]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                Ready to Transform Soccer?
              </motion.h4>
              <p className="text-sm text-secondary mb-4 leading-relaxed">
                Join our portfolio of innovative companies shaping the future of the game.
              </p>
              
              <motion.button 
                className="relative px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-lg overflow-hidden text-sm group-hover:bg-blue-700 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span 
                  className="relative z-10"
                  animate={{
                    x: [0, 2, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  Start Your Journey
                </motion.span>
                
                {/* Button Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "easeInOut"
                  }}
                />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
});

ApproachVerticals.displayName = 'ApproachVerticals';

export default ApproachVerticals;