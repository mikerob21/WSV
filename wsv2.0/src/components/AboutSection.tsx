'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const achievements = [
  {
    icon: '🇺🇸',
    title: 'Former USMNT Player',
    description: 'Competed at the highest international level',
  },
  {
    icon: '🌍',
    title: 'Global Professional Career',
    description: 'European & Saudi Pro League experience',
  },
  {
    icon: '💼',
    title: 'Private Equity Expertise',
    description: 'Proven success in hedge fund management',
  },
  {
    icon: '🚀',
    title: 'Serial Entrepreneur',
    description: 'Scaled and exited JaySocial LLC',
  },
  {
    icon: '📖',
    title: 'Published Author',
    description: '"The Athlete\'s War" thought leadership',
  },
  {
    icon: '🎯',
    title: 'Techstars Mentor',
    description: 'Strategic advisor to emerging ventures',
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-32 px-6 lg:px-8 atmosphere-blue">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="roboto-thin mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Elite Soccer Experience
            <br />
            <span className="gradient-text">
              Meets Strategic Capital
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="roboto-light text-neutral-600 max-w-3xl mx-auto leading-relaxed"
          >
            <strong className="text-neutral-800">Jeremiah White III</strong> brings 25+ years of professional soccer 
            experience combined with proven success in private equity and hedge fund management, 
            creating unique value for soccer ecosystem investments.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6 + (index * 0.1),
                  type: "spring",
                  stiffness: 100 
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative p-6 bg-white rounded-2xl border border-neutral-200/50 hover:border-blue-200 transition-all duration-300 card-shadow"
              >
                <div className="absolute inset-0 bg-blue-50/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-3xl mb-3">{achievement.icon}</div>
                  <h3 className="font-bold text-neutral-800 mb-2 group-hover:text-blue-700 transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Investment Range Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative"
          >
            <div className="relative p-12 gradient-blue-800 rounded-3xl overflow-hidden card-shadow">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 data-texture"></div>
              </div>
              
              {/* Gradient Orb */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl"></div>
              
              <div className="relative">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.6, delay: 1, type: "spring" }}
                  className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-200 text-sm font-semibold rounded-full mb-6"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                  Strategic Investment Range
                </motion.div>
                
                <motion.h3 
                  className="text-3xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.2 }}
                >
                  Investment Focus
                </motion.h3>
                
                <motion.div 
                  className="text-6xl font-black gradient-text mb-4"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ delay: 1.4, type: "spring" }}
                >
                  $100K - $1M
                </motion.div>
                
                <motion.p 
                  className="text-neutral-200 leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.6 }}
                >
                  Strategic capital deployment for soccer ecosystem transformation, 
                  combining operational expertise with deep industry networks.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.8 }}
                  className="space-y-3"
                >
                  {['Technology & AI Analytics', 'Club Ownership & Development', 'Media & Content Platforms'].map((focus, index) => (
                    <motion.div
                      key={focus}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 2 + (index * 0.1) }}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-neutral-200 font-medium">{focus}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}