'use client';

import { memo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ComponentProps } from '@/types/components';

interface AboutHeroProps extends ComponentProps {}

const AboutHero = memo<AboutHeroProps>(() => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });

  const credentials = [
    { label: "USMNT PLAYER", description: "International Soccer" },
    { label: "PRIVATE EQUITY", description: "Investment Management" },
    { label: "SOCCER ENTREPRENEUR", description: "Venture Builder" }
  ];

  return (
    <section 
      ref={heroRef}
      className="relative py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-neutral-0 via-blue-50/30 to-neutral-100"
    >
      {/* Executive Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="executiveGrid" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#d1d5db" strokeWidth="1" opacity="0.4"/>
              <circle cx="0" cy="0" r="2" fill="#3b82f6" opacity="0.15"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#executiveGrid)" />
        </svg>
      </div>

      {/* Subtle floating elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-50/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[70vh]">
          
          {/* Left Side - Typography Portrait */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              {/* Vision Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-8"
              >
                <span className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full text-sm tracking-wide">
                  TRANSFORMING US SOCCER
                </span>
              </motion.div>

              {/* Typographic Name Treatment */}
              <div className="mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="relative"
                >
                  <h1 className="text-7xl lg:text-8xl font-black text-emphasis leading-[0.85] tracking-tight mb-4">
                    <span className="block">JEREMIAH</span>
                    <span className="block text-right">
                      <span className="text-blue-600">WHITE</span>
                    </span>
                    <span className="block text-right text-5xl lg:text-6xl text-secondary font-light tracking-wider">
                      III
                    </span>
                  </h1>
                  
                  {/* Signature Line */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isHeroInView ? { width: '200px' } : { width: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full ml-auto"
                  />
                </motion.div>
              </div>

              {/* Executive Statement */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl lg:text-2xl text-secondary leading-relaxed mb-8 max-w-2xl"
              >
                Leading soccer's transformation through strategic investments, 
                innovative technology, and community impact.
              </motion.p>
            </motion.div>
          </div>

          {/* Right Side - Credentials & Monogram */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="relative"
            >
              {/* JW Monogram */}
              <div className="absolute top-0 right-0 opacity-10">
                <div className="text-[200px] lg:text-[250px] font-black text-blue-600 leading-none select-none">
                  JW
                </div>
              </div>

              {/* Floating Credentials */}
              <div className="relative z-10 space-y-6">
                {credentials.map((credential, index) => (
                  <motion.div
                    key={credential.label}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={isHeroInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                    transition={{ duration: 0.8, delay: 1 + (index * 0.2) }}
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-black text-emphasis mb-1">
                          {credential.label}
                        </h3>
                        <p className="text-secondary font-medium">
                          {credential.description}
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mission Statement Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="mt-8 bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-2xl text-white shadow-xl"
              >
                <p className="font-semibold text-lg leading-relaxed">
                  "We combine elite soccer expertise with entrepreneurial acumen to deliver 
                  exceptional value through strategic investments and transformative partnerships."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutHero.displayName = 'AboutHero';

export default AboutHero;