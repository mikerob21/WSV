'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';

const timeline = [
  {
    year: '1998-2010',
    title: 'Professional Soccer Career',
    description: 'USMNT player competing across European and Saudi Pro League',
    icon: '⚽'
  },
  {
    year: '2010-2015',
    title: 'Private Equity & Hedge Funds',
    description: 'Strategic roles in institutional asset management',
    icon: '📈'
  },
  {
    year: '2016-2020',
    title: 'JaySocial LLC',
    description: 'Founded, scaled, and successfully exited social media venture',
    icon: '🚀'
  },
  {
    year: '2021',
    title: 'White Sports Ventures',
    description: 'Launched elite soccer venture capital firm',
    icon: '💎'
  },
  {
    year: '2024',
    title: 'The Athlete\'s War',
    description: 'Published thought leadership on athlete entrepreneurship',
    icon: '📚'
  }
];

const expertise = [
  {
    category: 'Soccer Expertise',
    skills: ['Professional Player Experience', 'International Competition', 'Club Development', 'Youth Academy Systems', 'Performance Analytics'],
    gradient: 'var(--gradient-blue-500)'
  },
  {
    category: 'Investment Experience',
    skills: ['Private Equity', 'Hedge Fund Management', 'Venture Capital', 'Portfolio Construction', 'Risk Management'],
    gradient: 'var(--gradient-blue-600)'
  },
  {
    category: 'Entrepreneurship',
    skills: ['Company Formation', 'Strategic Scaling', 'Exit Strategies', 'Team Building', 'Market Analysis'],
    gradient: 'var(--gradient-blue-700)'
  }
];

export default function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <main className="min-h-screen atmosphere-blue">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1 
              className="roboto-thin mb-8 tracking-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <span className="text-neutral-900">
                About
              </span>
              <br />
              <span className="gradient-text">
                Jeremiah White III
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="roboto-light text-neutral-600 max-w-4xl mx-auto leading-relaxed"
            >
              Former USMNT player turned elite venture capitalist, transforming the soccer ecosystem through strategic investments and deep industry expertise.
            </motion.p>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <div className="relative p-12 gradient-blue-800 rounded-3xl overflow-hidden card-shadow">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 data-texture"></div>
              </div>
              
              {/* Gradient Orbs */}
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
              
              <div className="relative text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7, duration: 0.6, type: "spring" }}
                  className="w-32 h-32 gradient-blue-500 rounded-full mx-auto mb-8 flex items-center justify-center text-4xl"
                >
                  🏆
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="text-4xl font-bold text-white mb-4"
                >
                  Jeremiah White III
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="text-xl text-blue-200 mb-6"
                >
                  Founder & Managing Partner
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 }}
                  className="text-neutral-200 leading-relaxed max-w-2xl mx-auto"
                >
                  With 25+ years bridging elite soccer performance and institutional finance, Jeremiah brings unmatched expertise to soccer venture capital. His unique perspective combines on-field athleticism with strategic capital deployment, creating unprecedented value for portfolio companies.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={ref} className="py-20 px-6 lg:px-8 bg-white relative">
        <div className="absolute inset-0 gradient-neutral-50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="roboto-thin mb-8 text-neutral-900">
              Career Journey
            </h2>
            <p className="roboto-light text-neutral-600 max-w-3xl mx-auto">
              From international soccer fields to boardrooms, a unique path to elite venture capital
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full gradient-blue-500 rounded-full"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16 text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-8 bg-white rounded-2xl card-shadow border border-neutral-200/50 hover:border-blue-200 transition-all duration-300"
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <div className="text-blue-600 font-bold text-lg mb-2">{item.year}</div>
                    <h3 className="text-2xl font-bold text-neutral-800 mb-3">{item.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{item.description}</p>
                  </motion.div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 gradient-blue-500 rounded-full border-4 border-white card-shadow"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-6 lg:px-8 atmosphere-blue">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="roboto-thin mb-8 text-neutral-900">
              Areas of Expertise
            </h2>
            <p className="roboto-light text-neutral-600 max-w-3xl mx-auto">
              Multidisciplinary expertise spanning athletics, finance, and entrepreneurship
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {expertise.map((area, index) => (
              <motion.div
                key={area.category}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative p-8 bg-white rounded-2xl card-shadow border border-neutral-200/50 hover:border-blue-200 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300" style={{ background: area.gradient }}></div>
                
                <div className="relative">
                  <div className="inline-flex items-center px-4 py-2 text-white text-sm font-bold rounded-full mb-6 card-shadow" style={{ background: area.gradient }}>
                    {area.category}
                  </div>
                  
                  <div className="space-y-3">
                    {area.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.2) + (skillIndex * 0.1) + 0.5 }}
                        className="flex items-center space-x-3 group/skill"
                      >
                        <div className="w-2 h-2 rounded-full group-hover/skill:scale-150 transition-transform duration-200" style={{ background: area.gradient }}></div>
                        <span className="text-neutral-700 font-medium group-hover/skill:text-neutral-900 transition-colors">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}