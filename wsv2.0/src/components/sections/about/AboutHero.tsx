'use client';

import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ComponentProps } from '@/types/components';

interface AboutHeroProps extends ComponentProps {}

const AboutHero = memo<AboutHeroProps>(() => {
  const credentials = useMemo(() => [
    { label: "USMNT PLAYER", description: "International Soccer" },
    { label: "PRIVATE EQUITY", description: "Investment Management" },
    { label: "SOCCER ENTREPRENEUR", description: "Venture Builder" }
  ], []);

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-neutral-0 via-neutral-50/30 to-neutral-100">
      
      {/* Refined Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="aboutGrid" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#3b82f6" strokeWidth="1"/>
              <circle cx="0" cy="0" r="1" fill="#3b82f6" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#aboutGrid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Professional Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6"
            >
              <div className="inline-flex items-center px-3 py-1.5 bg-neutral-0 border border-neutral-200 rounded-full shadow-sm">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 animate-pulse"></div>
                <span className="text-xs font-medium text-secondary">Leadership Profile</span>
              </div>
            </motion.div>

            {/* Professional Typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6"
            >
              <h1 className="text-3xl lg:text-4xl font-black text-emphasis leading-tight mb-4">
                Jeremiah White III
                <span className="block text-xl lg:text-2xl text-secondary font-medium mt-2">
                  Founder & Managing Partner
                </span>
              </h1>
              <div className="w-16 h-0.5 bg-blue-600 rounded-full"></div>
            </motion.div>

            {/* Professional Summary */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <p className="text-base text-secondary leading-relaxed">
                Former USMNT player and private equity professional building the future of soccer through strategic investments and ecosystem development.
              </p>
            </motion.div>

            {/* Inline Credentials */}
            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {credentials.map((credential, index) => (
                <motion.div
                  key={credential.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.6 + (index * 0.1),
                    type: "spring",
                    stiffness: 150
                  }}
                  className="group"
                >
                  <div className="px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-300">
                    <div className="text-xs font-bold text-blue-600 mb-1">
                      {credential.label}
                    </div>
                    <div className="text-xs text-muted">
                      {credential.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Professional Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:justify-self-end"
          >
            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mb-6"
              >
                <h3 className="text-lg font-bold text-emphasis mb-2">Leadership Impact</h3>
                <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
              </motion.div>

              <div className="space-y-4">
                {[
                  { metric: "12+", label: "Portfolio Companies", desc: "Strategic investments" },
                  { metric: "10+", label: "Years Professional", desc: "International soccer" },
                  { metric: "$1M+", label: "Capital Deployed", desc: "Soccer ventures" }
                ].map((item, index) => (
                  <motion.div
                    key={item.metric}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                    className="flex items-center gap-4 p-3 bg-neutral-0 rounded-lg border border-neutral-200"
                  >
                    <div className="text-2xl font-black text-emphasis">{item.metric}</div>
                    <div>
                      <div className="text-sm font-semibold text-secondary">{item.label}</div>
                      <div className="text-xs text-muted">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

AboutHero.displayName = 'AboutHero';

export default AboutHero;