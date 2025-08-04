'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { ComponentProps } from '@/types/components';

interface ApproachHeroProps extends ComponentProps {}

const ApproachHero = memo<ApproachHeroProps>(() => {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-neutral-50 via-neutral-0 to-neutral-50">
      {/* Sophisticated background with subtle parallax */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          repeatType: 'reverse',
          ease: 'linear'
        }}
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.03) 0%, transparent 50%)
          `,
          backgroundSize: '400px 400px'
        }}
      />
      
      {/* Refined grid pattern */}
      <div className="absolute inset-0 opacity-[0.15]">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="heroGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#e5e7eb" strokeWidth="1" opacity="0.6"/>
              <circle cx="0" cy="0" r="1" fill="#3b82f6" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Floating Badge with Sophisticated Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-12"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block"
            >
              <span className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-blue-100/50 text-blue-600 font-medium rounded-full border border-blue-200/60 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                <span className="relative z-10">Revolutionary Approach</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/0 via-blue-200/20 to-blue-100/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  className="ml-2 w-2 h-2 bg-blue-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </span>
            </motion.div>
          </motion.div>
          
          {/* Sophisticated Typography with Staggered Animation */}
          <div className="mb-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <h1 className="text-6xl lg:text-8xl font-black text-emphasis leading-[0.9] tracking-tight mb-6">
                <span className="block">BUILDING THE</span>
                <span className="block relative">
                  <span className="text-blue-600">FUTURE</span>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                    className="absolute bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                  />
                </span>
              </h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="relative inline-block"
              >
                <h2 className="text-4xl lg:text-5xl font-light text-secondary leading-tight tracking-wide">
                  of soccer
                </h2>
                <div className="absolute -right-4 top-0 w-2 h-2 bg-blue-500 rounded-full opacity-60" />
              </motion.div>
            </motion.div>
          </div>
          
          {/* Refined Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mb-12"
          >
            <p className="text-xl lg:text-2xl text-secondary leading-relaxed max-w-4xl mx-auto font-light">
              We don't just invest in soccer—we architect its revolution. 
              <br className="hidden lg:block" />
              <span className="text-emphasis font-medium">Join the movement that's reshaping the beautiful game.</span>
            </p>
          </motion.div>

          {/* Sophisticated Button Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* Primary Button */}
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 text-white text-lg font-semibold rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center space-x-3">
                <span>Start The Revolution</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-5 h-5 border-r-2 border-t-2 border-white transform rotate-45"
                />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {/* Secondary Button */}
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-10 py-4 border-2 border-neutral-300 text-secondary font-semibold text-lg rounded-xl bg-neutral-0 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden"
            >
              <span className="relative z-10">Explore Ventures</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100"
                initial={{ y: '100%' }}
                whileHover={{ y: '0%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

ApproachHero.displayName = 'ApproachHero';

export default ApproachHero;