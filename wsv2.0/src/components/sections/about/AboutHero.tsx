'use client';

import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ComponentProps } from '@/types/components';

interface AboutHeroProps extends ComponentProps {
  // Additional props can be added here as needed
}

const AboutHero = memo<AboutHeroProps>(() => {
  const credentials = useMemo(() => [
    { label: "USMNT PLAYER", description: "International Soccer" },
    { label: "PRIVATE EQUITY", description: "Investment Management" },
    { label: "SOCCER ENTREPRENEUR", description: "Venture Builder" }
  ], []);

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden bg-white">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.01]">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="aboutGrid" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#000000" strokeWidth="0.5"/>
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
              <div className="inline-flex items-center px-3 py-1.5 bg-neutral-50 border border-neutral-200 rounded-full">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 animate-pulse"></div>
                <span className="caption text-neutral-600">Leadership Profile</span>
              </div>
            </motion.div>

            {/* Professional Typography */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6"
            >
              <h1 className="display-section mb-4">
                Jeremiah White III
                <span className="block heading-secondary mt-2">
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
              <p className="body-large">
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
                  <div className="px-4 py-2 bg-white border border-neutral-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-300">
                    <div className="caption text-blue-600 mb-1">
                      {credential.label}
                    </div>
                    <div className="caption text-neutral-500">
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
            <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mb-6"
              >
                <h3 className="heading-tertiary mb-2">Leadership Impact</h3>
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
                    className="flex items-center gap-4 p-3 bg-neutral-50 rounded-lg border border-neutral-100"
                  >
                    <div className="mono-large font-black text-neutral-900">{item.metric}</div>
                    <div>
                      <div className="label text-neutral-700">{item.label}</div>
                      <div className="caption text-neutral-500">{item.desc}</div>
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