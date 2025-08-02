'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';

const approachSections = [
  {
    title: 'Partnership Philosophy',
    description: 'We don\'t just fund soccer ventures; we build them alongside you. As your growth partners, we provide hands-on support at every stage, from seed to scale, to transform your vision into a game-changer.',
    highlight: 'Founded by Jeremiah White III, a former pro soccer player turned investor, WhiteSportsVentures combines on-field insights with entrepreneurial drive to fuel your success.',
    gradient: 'var(--gradient-blue-500)',
    accent: 'blue',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    )
  },
  {
    title: 'Soccer Expertise',
    description: 'Our deep soccer experience sets us apart. Jeremiah\'s 25+ years as a pro player, investor (e.g., The Town FC), and Techstars mentor inform actionable strategies tailored to your venture.',
    highlight: 'Whether it\'s optimizing AI-driven analytics or growing a community club, we maximize your potential with proven playbooks.',
    gradient: 'var(--gradient-blue-600)',
    accent: 'blue',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    )
  },
  {
    title: 'Industry Connections',
    description: 'Our extensive soccer network gives your venture a strategic edge. With connections to clubs, media, sponsors, and tech innovators, we open doors for WhiteSportsVentures portfolio companies.',
    highlight: 'From grassroots programs to global partnerships, we accelerate your growth with unmatched industry access.',
    gradient: 'var(--gradient-blue-700)',
    accent: 'blue',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    )
  },
  {
    title: 'Network Impact',
    description: 'Join a vibrant soccer ecosystem. Our portfolio companies, youth programs, clubs, family offices, and industry contacts form a dynamic network that amplifies your impact.',
    highlight: 'Collaborate with ventures like Footy Access (50% efficiency gain) or tap into our 100K+ community reach to scale smarter.',
    gradient: 'var(--gradient-blue-800)',
    accent: 'blue',
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    )
  }
];

const verticals = [
  {
    title: 'Soccer Technology',
    subtitle: 'Revolutionizing Performance & Engagement',
    description: 'Technology is revolutionizing soccer performance and fan engagement. We invest in cutting-edge solutions, like Footy Access\' AI analytics, that enhance scouting, training, and fan experiences at scale.',
    highlight: 'Our focus is on novel products that redefine the game.',
    features: ['AI Analytics', 'Performance Optimization', 'Fan Engagement', 'Data Intelligence'],
    gradient: 'var(--gradient-blue-500)',
    accent: 'blue',
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    )
  },
  {
    title: 'Soccer Clubs & Programs',
    subtitle: 'Building Community & Talent',
    description: 'Clubs and youth programs are the heart of soccer\'s growth. We back ventures like The Town FC, with 10K+ fans and 50+ youth trained, that build community and talent.',
    highlight: 'Our investments strengthen the backbone of the sport in the USA.',
    features: ['Youth Development', 'Club Operations', 'Training Facilities', 'Community Building'],
    gradient: 'var(--gradient-blue-600)',
    accent: 'blue',
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    )
  },
  {
    title: 'Soccer Content & Media',
    subtitle: 'Authentic Storytelling & Engagement',
    description: 'In a fragmented media landscape, compelling content drives engagement. We prioritize authentic storytelling and modern platforms to connect with fans, leveraging our network to amplify reach.',
    highlight: 'Our focus is on engagement over vanity metrics, inspired by the World Cup\'s momentum. We are on pace to reach 1 Billion views by the end of 2025.',
    features: ['Digital Platforms', 'Content Creation', 'Community Building', 'Brand Partnerships'],
    gradient: 'var(--gradient-blue-700)',
    accent: 'blue',
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    )
  }
];

const stats = [
  { value: '25+', label: 'Years Soccer Experience', description: 'Professional playing & investing' },
  { value: '100K+', label: 'Community Reach', description: 'Active soccer network' },
  { value: '50%', label: 'Efficiency Gain', description: 'Footy Access improvement' },
  { value: '1B', label: 'Views by 2025', description: 'Content reach target' }
];

export default function ApproachPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <main className="min-h-screen atmosphere-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 data-texture"></div>
      </div>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block px-8 py-4 gradient-blue-500 text-white roboto-medium rounded-full card-shadow">
              Our Approach
            </span>
          </motion.div>
          
          <motion.h1 
            className="roboto-thin mb-8 tracking-tight leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="text-neutral-900">
              Building the Future
            </span>
            <br />
            <span className="gradient-text">
              of Soccer Together
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="roboto-light text-neutral-600 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            At WhiteSportsVentures, we're more than investors—we're your partners in scaling soccer ventures with passion, expertise, and a global network.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <div className="gradient-blue-500 text-white px-10 py-6 rounded-2xl card-shadow hover-lift magnetic">
              <div className="metric-large">Partners</div>
              <div className="metric-context">Not Just Investors</div>
            </div>
            <div className="gradient-blue-600 text-white px-10 py-6 rounded-2xl card-shadow hover-lift magnetic">
              <div className="metric-large">Global Network</div>
              <div className="metric-context">Industry Access</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 lg:px-8 bg-white relative">
        <div className="absolute inset-0 gradient-blue-subtle"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="relative">
                  <div className="metric-huge mb-3">
                    {stat.value}
                  </div>
                  <div className="absolute -inset-4 bg-blue-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="roboto-medium text-neutral-800 mb-2">{stat.label}</div>
                <div className="roboto-regular text-neutral-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Sections */}
      <section className="py-20 px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="roboto-thin mb-8 text-neutral-900">
              Our Approach
            </h2>
            <p className="roboto-light text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Strategic partnership methodology built on deep soccer expertise and proven growth frameworks
            </p>
          </motion.div>

          <div className="space-y-24">
            {approachSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 lg:max-w-2xl">
                  <div className="flex items-center mb-8">
                    <div className="w-20 h-20 rounded-3xl flex items-center justify-center text-white card-shadow mr-8" style={{ background: section.gradient }}>
                      {section.icon}
                    </div>
                    <h3 className="roboto-light text-neutral-800">{section.title}</h3>
                  </div>
                  
                  <p className="roboto-regular text-neutral-600 leading-relaxed mb-8">
                    {section.description}
                  </p>
                  
                  <div className="p-8 gradient-blue-subtle rounded-3xl border-l-4 border-blue-500 card-shadow">
                    <p className="roboto-medium text-neutral-700 leading-relaxed">
                      {section.highlight}
                    </p>
                  </div>
                </div>
                
                <div className="w-full lg:w-96 h-96 gradient-neutral-50 rounded-3xl flex items-center justify-center card-shadow relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/5"></div>
                  <div className="relative z-10 text-9xl opacity-20">
                    {section.icon}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/20"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Verticals */}
      <section ref={ref} className="py-20 px-6 lg:px-8 bg-white relative">
        <div className="absolute inset-0 gradient-neutral-50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="roboto-thin mb-8 text-neutral-900">
              Investment Verticals
            </h2>
            <p className="roboto-light text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Three strategic pillars transforming the soccer ecosystem through technology, community, and content
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {verticals.map((vertical, index) => (
              <motion.div
                key={vertical.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.02, y: -10 }}
                className="group relative bg-white rounded-3xl p-10 card-shadow hover-scale overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500" style={{ background: vertical.gradient }}></div>
                
                <div className="relative">
                  <div className="inline-flex items-center px-6 py-3 text-white roboto-medium rounded-full mb-8 card-shadow" style={{ background: vertical.gradient }}>
                    {vertical.subtitle}
                  </div>
                  
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white card-shadow mr-6" style={{ background: vertical.gradient }}>
                      {vertical.icon}
                    </div>
                    <h3 className="roboto-light text-neutral-800 group-hover:text-blue-600 transition-colors">
                      {vertical.title}
                    </h3>
                  </div>
                  
                  <p className="roboto-regular text-neutral-600 leading-relaxed mb-8">
                    {vertical.description}
                  </p>

                  {/* Highlight Box */}
                  <div className="p-6 bg-neutral-50 rounded-2xl mb-8 border-l-4 border-blue-500 card-shadow">
                    <p className="roboto-medium text-neutral-700">
                      {vertical.highlight}
                    </p>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-4">
                    {vertical.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: (index * 0.2) + (featureIndex * 0.1) + 0.5 }}
                        className="flex items-center space-x-4"
                      >
                        <div className="w-3 h-3 rounded-full card-shadow" style={{ background: vertical.gradient }}></div>
                        <span className="roboto-medium text-neutral-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 gradient-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="roboto-thin mb-8">
              Ready to Build the Future of Soccer?
            </h2>
            <p className="roboto-light text-neutral-200 max-w-3xl mx-auto mb-12 leading-relaxed">
              Join our network of soccer innovators and let's transform your vision into a game-changer together.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-blue-500 text-white px-12 py-6 rounded-3xl roboto-medium card-shadow hover-lift"
            >
              Start Your Partnership
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}