'use client';

import { memo, useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ComponentProps } from '@/types/components';

interface AboutExpertiseProps extends ComponentProps {}

const AboutExpertise = memo<AboutExpertiseProps>(() => {
  const [activePhase, setActivePhase] = useState<number>(0);

  const careerJourney = useMemo(() => [
    {
      phase: "Professional Soccer",
      period: "International Career",
      achievements: ["USMNT Player", "Saudi Pro League", "European Professional"],
      description: "Elite-level international soccer career providing deep understanding of player development, team dynamics, and global market perspectives.",
      metrics: { years: "10+", level: "International" },
      gradient: "from-emerald-500 to-teal-600",
      strokePattern: "M12 2L2 17h20L12 2z"
    },
    {
      phase: "Financial Markets",
      period: "Investment Management", 
      achievements: ["Private Equity", "Hedge Funds", "Portfolio Management"],
      description: "Proven track record in investment management and financial markets, developing expertise in capital deployment and strategic business development.",
      metrics: { years: "5+", level: "Institutional" },
      gradient: "from-blue-500 to-indigo-600",
      strokePattern: "M3 3l18 18M21 3L3 21"
    },
    {
      phase: "Soccer Ventures",
      period: "Entrepreneurial Leadership",
      achievements: ["WSV Founder", "12 Portfolio Companies", "Ecosystem Builder"],
      description: "Combining soccer expertise with financial acumen to build and scale innovative ventures across the soccer ecosystem, from media to technology.",
      metrics: { companies: "12", focus: "Soccer Tech" },
      gradient: "from-purple-500 to-pink-600",
      strokePattern: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
    }
  ], []);

  const offerings = useMemo(() => [
    {
      title: "Strategic Investments",
      description: "$100K–$1M in capital, operational expertise, and secondary markets for soccer tech, media, and club ownership.",
      features: ["Capital Deployment", "Operational Support", "Secondary Markets", "Strategic Guidance"]
    },
    {
      title: "Ecosystem Synergies", 
      description: "Network with portfolio companies, clients and partners to unlock exponential growth opportunities.",
      features: ["Portfolio Network", "Client Connections", "Partnership Facilitation", "Cross-Promotion"]
    },
    {
      title: "Brand Partnerships",
      description: "Connect sponsors to soccer's growing audience of millions through strategic brand collaborations.",
      features: ["Audience Access", "Brand Integration", "Content Partnerships", "Market Expansion"]
    },
    {
      title: "Performance Tools",
      description: "Proprietary AI optimizes player performance, fan engagement, and operational efficiency.",
      features: ["AI Analytics", "Performance Optimization", "Fan Engagement", "Operational Excellence"]
    }
  ], []);

  const [tabDimensions, setTabDimensions] = useState({ width: 0, left: 0 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Calculate tab indicator position
  useEffect(() => {
    const activeTab = tabRefs.current[activePhase];
    if (activeTab) {
      const { offsetWidth, offsetLeft } = activeTab;
      setTabDimensions({ width: offsetWidth, left: offsetLeft });
    }
  }, [activePhase]);

  const handlePhaseClick = useCallback((index: number) => {
    setActivePhase(index);
  }, []);

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden bg-neutral-0" role="region" aria-labelledby="expertise-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 id="expertise-heading" className="heading-primary mb-3">
            Expertise & Offerings
          </h2>
          <div className="w-12 h-0.5 bg-blue-600 rounded-full mb-4"></div>
          <p className="body-default text-muted max-w-2xl">
            Three decades of experience across soccer, finance, and entrepreneurship
          </p>
        </motion.div>

        {/* Career Journey Timeline */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h3 className="heading-secondary mb-6">Career Journey</h3>
            
            {/* Clean Timeline Navigation */}
            <div className="relative flex flex-wrap gap-1 p-1 bg-neutral-50 rounded-lg border border-neutral-200">
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
              {careerJourney.map((journey, index) => (
                <motion.button
                  key={journey.phase}
                  ref={(el) => (tabRefs.current[index] = el)}
                  onClick={() => handlePhaseClick(index)}
                  className={`relative flex-1 min-w-0 px-4 py-3 label rounded-md transition-all duration-300 z-10 ${
                    activePhase === index
                      ? 'text-white'
                      : 'text-secondary hover:text-emphasis hover:bg-neutral-0/50'
                  }`}
                  aria-selected={activePhase === index}
                  role="tab"
                  tabIndex={activePhase === index ? 0 : -1}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    color: activePhase === index ? '#ffffff' : undefined
                  }}
                >
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-current rounded-full"></div>
                    <span className="truncate font-semibold">{journey.phase}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Timeline Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-neutral-50 rounded-lg p-6 border border-neutral-200"
            >
              <div className="grid md:grid-cols-3 gap-6">
                
                {/* Phase Info */}
                <div className="md:col-span-2">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center caption font-bold">
                          {String(activePhase + 1).padStart(2, '0')}
                        </div>
                        <div>
                          <h4 className="heading-tertiary">
                            {careerJourney[activePhase].phase}
                          </h4>
                          <p className="label text-blue-600">
                            {careerJourney[activePhase].period}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <p className="body-small mb-4">
                      {careerJourney[activePhase].description}
                    </p>

                    {/* Achievements */}
                    <div className="flex flex-wrap gap-2">
                      {careerJourney[activePhase].achievements.map((achievement, index) => (
                        <motion.span
                          key={achievement}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + (index * 0.05) }}
                          className="caption text-blue-600 bg-blue-50 px-2 py-1 rounded border border-blue-200"
                        >
                          {achievement}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Metrics */}
                <div className="bg-neutral-0 p-4 rounded-lg border border-neutral-200">
                  <div className="caption text-blue-600 mb-3">
                    Key Metrics
                  </div>
                  <div className="space-y-3">
                    {Object.entries(careerJourney[activePhase].metrics).map(([key, value], index) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (index * 0.1) }}
                        className="flex justify-between items-center"
                      >
                        <span className="caption text-muted">{key}</span>
                        <span className="label text-emphasis">{value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Investment Offerings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="heading-secondary mb-6">Investment Offerings</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  y: -2, 
                  scale: 1.01
                }}
                className="group relative bg-neutral-0 p-6 rounded-xl border border-neutral-200 hover:border-blue-300 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Numbered Indicator */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center caption font-bold">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="pr-12">
                  <h4 className="heading-tertiary mb-3 group-hover:text-blue-900 transition-colors duration-300">
                    {offering.title}
                  </h4>
                </div>
                
                <p className="text-sm text-secondary leading-relaxed mb-4">
                  {offering.description}
                </p>

                <div className="grid grid-cols-2 gap-2">
                  {offering.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 + (featureIndex * 0.05) }}
                      className="flex items-center gap-2 p-2 bg-neutral-0 rounded border border-neutral-200"
                    >
                      <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                      <span className="caption text-secondary truncate">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expertise Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <div className="max-w-2xl mx-auto p-5 bg-neutral-0 rounded-lg border border-neutral-200">
            <p className="body-small">
              Three decades of experience converge to create unique value for soccer ventures through deep industry knowledge, proven investment methodology, and comprehensive ecosystem support.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
});

AboutExpertise.displayName = 'AboutExpertise';

export default AboutExpertise;