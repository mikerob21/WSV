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
      color: "#00A651",
      icon: "🎥"
    },
    {
      text: "EU Commission backing and Sony Global partnership",
      company: "Innovosens",
      companyType: "Health Technology",
      color: "#4A90E2",
      icon: "🏥"
    },
    {
      text: "Jeremiah White III joins investor group (November 2024)",
      company: "The Town FC",
      companyType: "Professional Soccer Club",
      color: "#000000",
      icon: "⚽"
    },
    {
      text: "Partnership with The Town FC (November 2024)",
      company: "Drip FC",
      companyType: "Soccer Culture Brand",
      color: "#4A90E2",
      icon: "✨"
    },
    {
      text: "Projected 1 billion views by end of 2025",
      company: "Footy Access",
      companyType: "Soccer Media Platform",
      color: "#00A651",
      icon: "🎥"
    },
    {
      text: "Multiple investor funding rounds completed",
      company: "Replica AI",
      companyType: "E-commerce Technology",
      color: "#4A90E2",
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
    <section ref={ref} className="relative py-24 px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(20,184,166,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Recent 
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent ml-4">
              Victories
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our portfolio companies are hitting major milestones and forging game-changing partnerships.
          </p>
        </motion.div>

        {/* Main Achievement Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative">
            {/* Current Achievement */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/90 backdrop-blur-sm p-8 lg:p-12 rounded-3xl border border-slate-200/50 shadow-2xl"
            >
              <div className="flex items-start gap-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0 text-white text-4xl p-4 rounded-2xl shadow-lg"
                  style={{ backgroundColor: featuredAchievements[currentIndex].color }}
                >
                  {featuredAchievements[currentIndex].icon}
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-slate-900">
                      {featuredAchievements[currentIndex].company}
                    </h3>
                    <span 
                      className="text-white font-medium px-4 py-1 rounded-full text-sm"
                      style={{ backgroundColor: featuredAchievements[currentIndex].color }}
                    >
                      {featuredAchievements[currentIndex].companyType}
                    </span>
                  </div>
                  
                  <p className="text-xl text-slate-700 leading-relaxed">
                    {featuredAchievements[currentIndex].text}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Progress Indicators */}
            <div className="flex justify-center space-x-3 mt-8">
              {featuredAchievements.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'scale-125' : 'scale-100 opacity-50'
                  }`}
                  style={{ 
                    backgroundColor: index === currentIndex 
                      ? featuredAchievements[currentIndex].color 
                      : '#94a3b8' 
                  }}
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {portfolioData.slice(0, 3).map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="text-white text-2xl p-3 rounded-xl shadow-lg"
                  style={{ backgroundColor: getPrimaryColor(company.primaryBrandColors) }}
                >
                  {getCompanyIcon(company.type)}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">{company.name}</h4>
                  <p className="text-sm text-slate-600">{company.type}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                {company.recentAchievements.slice(0, 2).map((achievement, achIndex) => (
                  <div key={achIndex} className="flex items-start space-x-2">
                    <div 
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: getPrimaryColor(company.primaryBrandColors) }}
                    />
                    <span className="text-sm text-slate-700 leading-relaxed">{achievement}</span>
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
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-lg rounded-2xl overflow-hidden shadow-xl shadow-emerald-500/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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