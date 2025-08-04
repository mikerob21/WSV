'use client';

import { memo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ComponentProps } from '@/types/components';

interface AboutLeadershipProps extends ComponentProps {}

const AboutLeadership = memo<AboutLeadershipProps>(() => {
  const leadershipRef = useRef(null);
  const isLeadershipInView = useInView(leadershipRef, { once: true, amount: 0.2 });

  const careerJourney = [
    {
      phase: "PROFESSIONAL SOCCER",
      period: "International Career",
      achievements: ["USMNT Player", "Saudi Pro League", "European Professional"],
      description: "Elite-level international soccer career providing deep understanding of player development, team dynamics, and global market perspectives.",
      icon: "⚽",
      metrics: { years: "10+", level: "International" }
    },
    {
      phase: "FINANCIAL MARKETS",
      period: "Investment Management",
      achievements: ["Private Equity", "Hedge Funds", "Portfolio Management"],
      description: "Proven track record in investment management and financial markets, developing expertise in capital deployment and strategic business development.",
      icon: "📈",
      metrics: { years: "5+", level: "Institutional" }
    },
    {
      phase: "SOCCER VENTURES",
      period: "Entrepreneurial Leadership",
      achievements: ["WSV Founder", "12 Portfolio Companies", "Ecosystem Builder"],
      description: "Combining soccer expertise with financial acumen to build and scale innovative ventures across the soccer ecosystem, from media to technology.",
      icon: "🚀",
      metrics: { companies: "12", focus: "Soccer Tech" }
    }
  ];

  const uniqueValue = [
    {
      title: "Dual Expertise",
      description: "Rare combination of elite sports and finance backgrounds",
      metric: "Unique Position"
    },
    {
      title: "Global Perspective",
      description: "International experience across multiple soccer markets",
      metric: "Worldwide Reach"
    },
    {
      title: "Proven Results",
      description: "Track record of successful investments and exits",
      metric: "85% Success Rate"
    }
  ];

  return (
    <section 
      ref={leadershipRef}
      className="py-24 px-6 lg:px-8 bg-neutral-0 overflow-hidden"
    >
      {/* Clean background pattern */}
      <div className="absolute inset-0 opacity-15">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="leadershipGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#e5e7eb" strokeWidth="1" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#leadershipGrid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <h2 className="text-6xl lg:text-7xl font-black text-emphasis mb-4 tracking-tight leading-tight">
            LEADERSHIP
            <span className="block text-secondary text-4xl lg:text-5xl font-light pl-8 mt-2">
              JOURNEY
            </span>
          </h2>
          <p className="text-xl text-secondary leading-relaxed max-w-3xl mt-6">
            A unique career path combining elite soccer and financial expertise to create unparalleled investment insight.
          </p>
        </motion.div>

        {/* Career Journey Timeline */}
        <div className="mb-20">
          <div className="space-y-12">
            {careerJourney.map((journey, index) => (
              <motion.div
                key={journey.phase}
                initial={{ opacity: 0, y: 50 }}
                animate={isLeadershipInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className="relative"
              >
                {/* Timeline connector */}
                {index < careerJourney.length - 1 && (
                  <div className="absolute left-8 top-24 w-0.5 h-20 bg-gradient-to-b from-blue-400 to-blue-200" />
                )}
                
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  {/* Phase Marker */}
                  <div className="lg:col-span-3">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                        <span className="text-2xl">{index + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-emphasis mb-2">
                          {journey.phase}
                        </h3>
                        <p className="text-blue-600 font-semibold text-sm">
                          {journey.period}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-9">
                    <div className="bg-white p-8 rounded-2xl border-2 border-neutral-100 shadow-sm hover:shadow-lg transition-all duration-300">
                      <div className="grid md:grid-cols-3 gap-6 mb-6">
                        {journey.achievements.map((achievement, achIndex) => (
                          <div key={achievement} className="text-center">
                            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 font-semibold rounded-full text-sm mb-2">
                              {achievement}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <p className="text-secondary leading-relaxed mb-6">
                        {journey.description}
                      </p>

                      {/* Metrics */}
                      <div className="flex flex-wrap gap-4">
                        {Object.entries(journey.metrics).map(([key, value]) => (
                          <div key={key} className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                            <span className="text-sm font-semibold text-muted">
                              {key}: <span className="text-emphasis">{value}</span>
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Unique Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isLeadershipInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-gradient-to-br from-blue-50 to-neutral-50 p-8 rounded-3xl border border-blue-100/50"
        >
          <h3 className="text-3xl font-black text-emphasis mb-8 text-center">
            The WSV Advantage
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {uniqueValue.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isLeadershipInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.4 + (index * 0.2) }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl border-2 border-blue-100 flex items-center justify-center shadow-sm">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
                </div>
                <div className="inline-flex items-center px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-3">
                  {value.metric}
                </div>
                <h4 className="text-lg font-bold text-emphasis mb-2">
                  {value.title}
                </h4>
                <p className="text-secondary text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom indicator */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-4 px-6 py-3 bg-white rounded-full border border-neutral-200 shadow-sm">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span className="text-secondary font-medium">Elite Soccer + Financial Markets = Unique Investment Edge</span>
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

AboutLeadership.displayName = 'AboutLeadership';

export default AboutLeadership;