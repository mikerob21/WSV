'use client';

import { memo, useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { ComponentProps } from '@/types/components';

interface AboutEcosystemProps extends ComponentProps {}

const AboutEcosystem = memo<AboutEcosystemProps>(() => {
  const ecosystemRef = useRef(null);
  const isEcosystemInView = useInView(ecosystemRef, { once: true, amount: 0.2 });

  // Featured ecosystem pillar and supporting pillars
  const featuredPillar = useMemo(() => ({
    title: "Technology Platform",
    description: "AI tools enhance analytics, performance measurement, and fan engagement across the entire soccer ecosystem, providing data-driven insights for players, clubs, and fans.",
    metric: "Proprietary AI",
    details: ["Performance Analytics", "Fan Engagement Tools", "Data Intelligence", "Predictive Modeling"]
  }), []);

  const supportingPillars = useMemo(() => [
    {
      title: "Media Reach",
      description: "FootyAccess.com and DripFC.com engage millions monthly with premium soccer content.",
      metric: "Millions Monthly",
      value: "2M+"
    },
    {
      title: "Club Infrastructure",
      description: "The Town FC and academies shape the future of soccer infrastructure and development.",
      metric: "Direct Ownership",
      value: "Multiple"
    },
    {
      title: "Mental Resilience",
      description: "Programs build psychological strength for both athletes and venture development.",
      metric: "Holistic Approach",
      value: "360°"
    }
  ], []);

  return (
    <section 
      ref={ecosystemRef}
      className="relative py-24 overflow-hidden bg-neutral-100"
    >
      {/* Background pattern matching stats sections */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="ecosystemGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--blue-300)" strokeWidth="1" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ecosystemGrid)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header - Following stats section pattern */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <h2 className="text-6xl lg:text-7xl font-black text-emphasis mb-4 tracking-tight leading-tight">
            ECOSYSTEM
            <span className="block text-secondary text-4xl lg:text-5xl font-light pl-8 mt-2">
              OVERVIEW
            </span>
          </h2>
          <p className="text-xl text-secondary leading-relaxed max-w-3xl mt-6">
            Integrated platform spanning media, technology, clubs, and athlete development across the soccer landscape.
          </p>
        </motion.div>

        {/* Asymmetrical Grid Layout - Following stats pattern */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Large Feature - Technology Platform */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-6 lg:row-span-2"
          >
            <div className="bg-neutral-0 h-full p-8 rounded-2xl relative overflow-hidden border-2 border-neutral-200 hover:shadow-lg transition-all duration-300 shadow-sm">
              <div className="relative z-10">
                <div className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-full text-sm mb-6">
                  {featuredPillar.metric}
                </div>
                
                <h3 className="text-4xl lg:text-5xl font-black mb-6 text-emphasis">
                  {featuredPillar.title}
                </h3>
                
                <p className="text-lg text-secondary leading-relaxed mb-8">
                  {featuredPillar.description}
                </p>

                {/* Feature details */}
                <div className="grid grid-cols-2 gap-4">
                  {featuredPillar.details.map((detail, index) => (
                    <div key={detail} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm font-medium text-muted">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Brand accent */}
              <div className="absolute bottom-6 right-6">
                <div className="w-12 h-12 border-2 border-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Supporting Pillars - Varying sizes */}
          {supportingPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 1) * 0.2, duration: 1 }}
              className={index === 2 ? "lg:col-span-6" : "lg:col-span-3"}
            >
              <div className={`bg-neutral-0 p-6 h-full border-2 border-neutral-200 relative overflow-hidden rounded-2xl hover:shadow-lg transition-all duration-300 shadow-sm ${
                index === 2 ? 'flex items-center justify-between' : ''
              }`}>
                <div className="relative z-10">
                  <div className="text-3xl lg:text-4xl font-black text-emphasis mb-3">
                    {pillar.value}
                  </div>
                  <div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 font-semibold rounded-full text-xs mb-3">
                    {pillar.metric}
                  </div>
                  <h4 className="text-lg font-bold text-secondary mb-2">{pillar.title}</h4>
                  <p className="text-muted text-sm leading-relaxed">{pillar.description}</p>
                </div>
                
                {/* Visual accent for the wide card */}
                {index === 2 && (
                  <div className="w-12 h-12 border-2 border-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16"
        >
          <div className="bg-neutral-0 p-8 rounded-2xl border-2 border-neutral-200 shadow-sm">
            <h3 className="text-2xl font-black text-emphasis mb-8 text-center">
              Ecosystem Synergies
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Cross-Platform Integration */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-2xl border-2 border-blue-100 flex items-center justify-center">
                  <div className="flex space-x-1">
                    <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
                    <div className="w-2 h-6 bg-blue-500 rounded-full"></div>
                    <div className="w-2 h-10 bg-blue-700 rounded-full"></div>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-secondary mb-2">Cross-Platform Data</h4>
                <p className="text-muted text-sm leading-relaxed">
                  Unified data flow across media, clubs, and technology platforms for comprehensive insights
                </p>
              </div>

              {/* Network Effects */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-2xl border-2 border-blue-100 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <div className="absolute -top-1 -right-2 w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute -bottom-1 -left-2 w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="absolute top-2 right-1 w-1 h-1 bg-blue-300 rounded-full"></div>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-secondary mb-2">Network Effects</h4>
                <p className="text-muted text-sm leading-relaxed">
                  Each platform amplifies the others, creating exponential value across the ecosystem
                </p>
              </div>

              {/* Holistic Development */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-2xl border-2 border-blue-100 flex items-center justify-center">
                  <div className="text-2xl font-black text-blue-600">360°</div>
                </div>
                <h4 className="text-lg font-bold text-secondary mb-2">Holistic Development</h4>
                <p className="text-muted text-sm leading-relaxed">
                  Complete player and fan journey from youth development to professional engagement
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom indicator */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-4 px-6 py-3 bg-neutral-0 rounded-full border border-neutral-200 shadow-sm">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span className="text-secondary font-medium">Integrated Soccer Ecosystem Transformation</span>
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

AboutEcosystem.displayName = 'AboutEcosystem';

export default AboutEcosystem;