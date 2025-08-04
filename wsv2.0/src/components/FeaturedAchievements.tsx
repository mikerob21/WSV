'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { portfolioData, getCompanyIcon, getPrimaryColor } from '@/data/portfolio';

interface Achievement {
  text: string;
  company: string;
  companyType: string;
  color: string;
  icon: string;
}

export default function FeaturedAchievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Extract and enhance key achievements
  const featuredAchievements: Achievement[] = [
    {
      text: "Partnership with New York City FC Academy (December 2024)",
      company: "Footy Access",
      companyType: "Soccer Media Platform",
      color: "#3B82F6",
      icon: "🎥"
    },
    {
      text: "EU Commission backing and Sony Global partnership",
      company: "Innovosens",
      companyType: "Health Technology",
      color: "#3B82F6",
      icon: "🏥"
    },
    {
      text: "Jeremiah White III joins investor group (November 2024)",
      company: "The Town FC",
      companyType: "Professional Soccer Club",
      color: "#3B82F6",
      icon: "⚽"
    },
    {
      text: "Partnership with The Town FC (November 2024)",
      company: "Drip FC",
      companyType: "Soccer Culture Brand",
      color: "#3B82F6",
      icon: "✨"
    },
    {
      text: "Projected 1 billion views by end of 2025",
      company: "Footy Access",
      companyType: "Soccer Media Platform",
      color: "#3B82F6",
      icon: "🎥"
    },
    {
      text: "Multiple investor funding rounds completed",
      company: "Replica AI",
      companyType: "E-commerce Technology",
      color: "#3B82F6",
      icon: "🛒"
    }
  ];

  // Auto-rotate achievements
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredAchievements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [featuredAchievements.length]);

  return (
    <section ref={ref} className="relative py-16 px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-neutral-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="display-section mb-4">
            Recent 
            <span className="gradient-text ml-2">
              Victories
            </span>
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            Our portfolio companies are hitting major milestones and forging game-changing partnerships.
          </p>
        </motion.div>

        {/* Main Achievement Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="relative">
            {/* Current Achievement */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-neutral-200/50 shadow-xl"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0 text-white text-2xl p-3 rounded-xl shadow-md"
                  style={{ backgroundColor: featuredAchievements[currentIndex].color }}
                >
                  {featuredAchievements[currentIndex].icon}
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="heading-secondary text-emphasis">
                      {featuredAchievements[currentIndex].company}
                    </h3>
                    <span 
                      className="text-white label px-3 py-1 rounded-full"
                      style={{ backgroundColor: featuredAchievements[currentIndex].color }}
                    >
                      {featuredAchievements[currentIndex].companyType}
                    </span>
                  </div>
                  
                  <p className="body-default text-secondary">
                    {featuredAchievements[currentIndex].text}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Progress Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {featuredAchievements.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'scale-125 bg-blue-500' : 'scale-100 opacity-50 bg-neutral-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Achievement Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {portfolioData.slice(0, 3).map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
              whileHover={{ scale: 1.02, y: -3 }}
              className="bg-white/70 backdrop-blur-sm p-5 rounded-xl border border-neutral-200/50 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="text-white text-lg p-2 rounded-lg shadow-md"
                  style={{ backgroundColor: getPrimaryColor(company.primaryBrandColors) }}
                >
                  {getCompanyIcon(company.type)}
                </div>
                <div>
                  <h4 className="text-base font-bold text-neutral-900">{company.name}</h4>
                  <p className="text-sm text-neutral-600">{company.type}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                {company.recentAchievements.slice(0, 2).map((achievement, achIndex) => (
                  <div key={achIndex} className="flex items-start space-x-2">
                    <div 
                      className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: getPrimaryColor(company.primaryBrandColors) }}
                    />
                    <span className="text-sm text-neutral-700 leading-relaxed">{achievement}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 gradient-blue-500 text-white font-bold text-base rounded-2xl overflow-hidden shadow-xl shadow-blue-500/25"
          >
            <div className="absolute inset-0 gradient-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center justify-center space-x-2">
              <span>View Complete Portfolio</span>
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 