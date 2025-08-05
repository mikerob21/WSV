'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { ComponentProps } from '@/types/components';

interface ApproachHeroProps extends ComponentProps {}

const ApproachHero = memo<ApproachHeroProps>(() => {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-neutral-50 via-neutral-0 to-neutral-50">
      {/* Subtle geometric background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="sophisticatedGrid" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#3b82f6" strokeWidth="1"/>
              <circle cx="0" cy="0" r="1" fill="#3b82f6" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sophisticatedGrid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Refined Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-3 py-1.5 bg-neutral-0 border border-neutral-200 rounded-full shadow-sm">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 animate-pulse"></div>
              <span className="text-xs font-medium text-secondary">Investment Platform</span>
            </div>
          </motion.div>
          
          {/* Professional Typography */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className="mb-6"
          >
            <h1 className="text-4xl lg:text-5xl font-black text-emphasis leading-tight tracking-tight mb-4">
              Strategic Investment
              <span className="block text-3xl lg:text-4xl text-secondary font-light mt-1">
                in Soccer Innovation
              </span>
            </h1>
            
            <div className="w-16 h-0.5 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>
          
          {/* Concise Description */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-lg lg:text-xl text-secondary leading-relaxed max-w-3xl mx-auto">
              We partner with visionary companies transforming soccer through technology, community, and content.
            </p>
          </motion.div>

          {/* Streamlined Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <motion.button
              whileHover={{ y: -1, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              View Portfolio
            </motion.button>

            <motion.button
              whileHover={{ y: -1, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 border border-neutral-300 text-secondary font-semibold rounded-lg bg-neutral-0 hover:border-blue-300 hover:text-blue-600 transition-all duration-300"
            >
              Partnership Approach
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

ApproachHero.displayName = 'ApproachHero';

export default ApproachHero;