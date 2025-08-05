'use client';

import { memo, useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ComponentProps } from '@/types/components';

interface AboutEcosystemProps extends ComponentProps {}

const AboutEcosystem = memo<AboutEcosystemProps>(() => {
  const [activePillar, setActivePillar] = useState<number>(0);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  const ecosystemPillars = useMemo(() => [
    {
      title: "Technology Platform",
      description: "AI tools enhance analytics, performance measurement, and fan engagement across the entire soccer ecosystem, providing data-driven insights for players, clubs, and fans.",
      metric: "Proprietary AI",
      details: ["Performance Analytics", "Fan Engagement Tools", "Data Intelligence", "Predictive Modeling"],
      gradient: "from-cyan-500 to-blue-600",
      shape: "polygon",
      strokePattern: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "Media Reach", 
      description: "FootyAccess.com and DripFC.com engage millions monthly with premium soccer content.",
      metric: "2M+ Monthly",
      details: ["Premium Content", "Global Audience", "Media Distribution", "Content Strategy"],
      gradient: "from-orange-500 to-red-600",
      shape: "hexagon",
      strokePattern: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18H3a2 2 0 01-2-2V8a2 2 0 012-2h2"
    },
    {
      title: "Club Infrastructure",
      description: "The Town FC and academies shape the future of soccer infrastructure and development.",
      metric: "Direct Ownership", 
      details: ["Club Operations", "Academy Development", "Infrastructure", "Talent Pipeline"],
      gradient: "from-green-500 to-emerald-600",
      shape: "diamond",
      strokePattern: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1"
    },
    {
      title: "Mental Resilience",
      description: "Programs build psychological strength for both athletes and venture development.",
      metric: "360° Approach",
      details: ["Athlete Psychology", "Mental Training", "Resilience Building", "Performance Mindset"],
      gradient: "from-purple-500 to-indigo-600",
      shape: "circle",
      strokePattern: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    }
  ], []);

  const partnershipBenefits = useMemo(() => [
    {
      title: "Scale to Success",
      description: "Transform startups into successful exits through proven methodologies",
      gradient: "from-emerald-500 to-teal-600",
      strokePattern: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    },
    {
      title: "Ecosystem Synergies",
      description: "Drive growth through strategic connections across our portfolio",
      gradient: "from-blue-500 to-cyan-600",
      strokePattern: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
    },
    {
      title: "Strategic Partnerships",
      description: "Unlock high-value partnerships through our extensive network",
      gradient: "from-purple-500 to-pink-600",
      strokePattern: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    },
    {
      title: "Proven Methodology",
      description: "Transform ventures with battle-tested growth strategies",
      gradient: "from-amber-500 to-orange-600",
      strokePattern: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    }
  ], []);

  const [tabDimensions, setTabDimensions] = useState({ width: 0, left: 0 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Calculate tab indicator position
  useEffect(() => {
    const activeTab = tabRefs.current[activePillar];
    if (activeTab) {
      const { offsetWidth, offsetLeft } = activeTab;
      setTabDimensions({ width: offsetWidth, left: offsetLeft });
    }
  }, [activePillar]);

  const handlePillarClick = useCallback((index: number) => {
    setActivePillar(index);
  }, []);

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden bg-neutral-100" role="region" aria-labelledby="ecosystem-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 id="ecosystem-heading" className="text-3xl lg:text-4xl font-black text-emphasis leading-tight mb-3">
            Ecosystem & Partnership
          </h2>
          <div className="w-12 h-0.5 bg-blue-600 rounded-full mb-4"></div>
          <p className="text-base text-muted max-w-2xl leading-relaxed">
            Four interconnected pillars creating exponential value for portfolio companies
          </p>
        </motion.div>

        {/* Ecosystem Pillars */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-emphasis mb-6">Ecosystem Pillars</h3>
            
            {/* Clean Pillar Navigation */}
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
              {ecosystemPillars.map((pillar, index) => (
                <motion.button
                  key={pillar.title}
                  ref={(el) => (tabRefs.current[index] = el)}
                  onClick={() => handlePillarClick(index)}
                  className={`relative flex-1 min-w-0 px-4 py-3 text-sm font-medium rounded-md transition-all duration-300 z-10 ${
                    activePillar === index
                      ? 'text-white'
                      : 'text-secondary hover:text-emphasis hover:bg-neutral-0/50'
                  }`}
                  aria-selected={activePillar === index}
                  role="tab"
                  tabIndex={activePillar === index ? 0 : -1}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    color: activePillar === index ? '#ffffff' : undefined
                  }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-current rounded-full"></div>
                    <span className="truncate font-semibold">{pillar.title}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Pillar Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-neutral-0 rounded-lg p-6 border border-neutral-200"
            >
              <div className="grid md:grid-cols-3 gap-6">
                
                {/* Pillar Info */}
                <div className="md:col-span-2">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xs">
                          {String(activePillar + 1).padStart(2, '0')}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-emphasis leading-tight">
                            {ecosystemPillars[activePillar].title}
                          </h4>
                          <p className="text-sm text-blue-600 font-semibold">
                            {ecosystemPillars[activePillar].metric}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-secondary leading-relaxed mb-4">
                      {ecosystemPillars[activePillar].description}
                    </p>

                    {/* Pillar Details */}
                    <div className="grid grid-cols-2 gap-2">
                      {ecosystemPillars[activePillar].details.map((detail, index) => (
                        <motion.div
                          key={detail}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + (index * 0.05) }}
                          className="flex items-center gap-2 p-2 bg-neutral-50 rounded border border-neutral-200"
                        >
                          <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                          <span className="text-xs font-medium text-secondary">
                            {detail}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Clean Metrics Display */}
                <div className="bg-neutral-0 p-4 rounded-lg border border-neutral-200">
                  <div className="text-xs font-semibold text-blue-600 mb-3 uppercase tracking-wide">
                    Key Metrics
                  </div>
                  <div className="space-y-3">
                    {Object.entries({ 
                      'Pillar': ecosystemPillars[activePillar].title,
                      'Focus': ecosystemPillars[activePillar].metric,
                      'Impact': 'Portfolio Growth'
                    }).map(([key, value], index) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                        className="flex justify-between items-center"
                      >
                        <span className="text-xs text-muted capitalize">{key}</span>
                        <span className="text-sm font-bold text-emphasis">{value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Partnership Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-emphasis mb-6">Why Partner with WSV</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
                className="group relative"
              >
                <motion.div
                  className="relative bg-neutral-0 p-6 rounded-xl border border-neutral-200 hover:border-blue-300 transition-all duration-300 cursor-pointer overflow-hidden"
                  whileHover={{ 
                    y: -2, 
                    scale: 1.01
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Numbered Indicator */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xs">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="pr-12">
                    <h4 className="text-lg font-bold text-emphasis mb-3 leading-tight group-hover:text-blue-900 transition-colors duration-300">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-secondary leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                  
                  {/* Refined Hover Indicator */}
                  <motion.div
                    className="absolute bottom-3 left-6 h-0.5 bg-blue-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: hoveredBenefit === index ? 20 : 0 }}
                    transition={{ duration: 0.25 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ecosystem CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <div className="max-w-2xl mx-auto p-5 bg-neutral-0 rounded-lg border border-neutral-200">
            <p className="text-sm text-secondary leading-relaxed">
              Partner with us to transform your soccer venture through our comprehensive ecosystem of technology, media, infrastructure, and expertise.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
});

AboutEcosystem.displayName = 'AboutEcosystem';

export default AboutEcosystem;