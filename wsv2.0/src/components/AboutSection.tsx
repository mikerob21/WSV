'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const achievements = [
  { icon: '🇺🇸', title: 'USMNT Player', description: 'International level' },
  { icon: '🌍', title: 'Global Career', description: 'European & Saudi Pro' },
  { icon: '💼', title: 'Private Equity', description: 'Hedge fund success' },
  { icon: '🚀', title: 'Entrepreneur', description: 'Scaled JaySocial LLC' },
  { icon: '📖', title: 'Published Author', description: '"The Athlete\'s War"' },
  { icon: '🎯', title: 'Techstars Mentor', description: 'Strategic advisor' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-12 px-6 lg:px-8 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <motion.h2 
            className="heading-primary mb-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Elite Soccer Experience <span className="text-brand">Meets Strategic Capital</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="body-default max-w-xl mx-auto"
          >
            <strong>Jeremiah White III</strong> brings 25+ years professional soccer + private equity success.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-4 items-start">
          {/* Achievements Grid */}
          <div className="lg:col-span-3 grid grid-cols-3 gap-2">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + (index * 0.03) }}
                whileHover={{ scale: 1.02 }}
                className="group p-3 bg-white rounded-lg border border-blue-200 hover:border-blue-400 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
              >
                <div className="text-center">
                  <div className="text-base mb-1">{achievement.icon}</div>
                  <h3 className="label text-emphasis mb-0.5 group-hover:text-brand transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="body-small text-secondary">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Investment Range Card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="relative p-4 bg-blue-700 rounded-lg overflow-hidden shadow-md">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 data-texture"></div>
              </div>
              
              <div className="absolute -top-5 -right-5 w-12 h-12 bg-blue-500/30 rounded-full blur-xl"></div>
              
              <div className="relative">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="inline-flex items-center px-1.5 py-0.5 bg-blue-500/20 text-blue-200 caption rounded-full mb-2"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-1 animate-pulse"></span>
                  Range
                </motion.div>
                
                <motion.h3 
                  className="label text-inverse mb-1"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Investment Focus
                </motion.h3>
                
                <motion.div 
                  className="mono-large text-inverse mb-2 font-numeric"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ delay: 0.6, type: "spring" }}
                >
                  $100K - $1M
                </motion.div>
                
                <motion.p 
                  className="body-small text-inverse-secondary mb-3"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  Strategic capital for soccer transformation.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.8 }}
                  className="space-y-1"
                >
                  {['Tech & AI', 'Clubs', 'Media'].map((focus, index) => (
                    <motion.div
                      key={focus}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.8 + (index * 0.02) }}
                      className="flex items-center space-x-1.5"
                    >
                      <div className="w-0.5 h-0.5 bg-blue-400 rounded-full"></div>
                      <span className="body-small text-inverse-secondary">{focus}</span>
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