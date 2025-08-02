'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';

const approachSections = [
  {
    title: 'Partnership Philosophy',
    description: 'We don\'t just fund soccer ventures; we build them alongside you. As your growth partners, we provide hands-on support at every stage, from seed to scale, to transform your vision into a game-changer.',
    highlight: 'Founded by Jeremiah White III, a former pro soccer player turned investor, WhiteSportsVentures combines on-field insights with entrepreneurial drive to fuel your success.',
    metrics: ['Hands-on Support', 'Growth Partnership', 'Proven Playbooks'],
    gradient: 'var(--gradient-blue-500)',
    accent: 'blue'
  },
  {
    title: 'Soccer Expertise',
    description: 'Our deep soccer experience sets us apart. Jeremiah\'s 25+ years as a pro player, investor (e.g., The Town FC), and Techstars mentor inform actionable strategies tailored to your venture.',
    highlight: 'Whether it\'s optimizing AI-driven analytics or growing a community club, we maximize your potential with proven playbooks.',
    metrics: ['25+ Years Experience', 'Pro Player Background', 'Techstars Mentor'],
    gradient: 'var(--gradient-blue-600)',
    accent: 'blue'
  },
  {
    title: 'Industry Connections',
    description: 'Our extensive soccer network gives your venture a strategic edge. With connections to clubs, media, sponsors, and tech innovators, we open doors for WhiteSportsVentures portfolio companies.',
    highlight: 'From grassroots programs to global partnerships, we accelerate your growth with unmatched industry access.',
    metrics: ['Global Network', 'Club Connections', 'Media Partnerships'],
    gradient: 'var(--gradient-blue-700)',
    accent: 'blue'
  },
  {
    title: 'Network Impact',
    description: 'Join a vibrant soccer ecosystem. Our portfolio companies, youth programs, clubs, family offices, and industry contacts form a dynamic network that amplifies your impact.',
    highlight: 'Collaborate with ventures like Footy Access (50% efficiency gain) or tap into our 100K+ community reach to scale smarter.',
    metrics: ['100K+ Community', '50% Efficiency Gain', 'Dynamic Ecosystem'],
    gradient: 'var(--gradient-blue-800)',
    accent: 'blue'
  }
];

const verticals = [
  {
    title: 'Soccer Technology',
    subtitle: 'Revolutionizing Performance & Engagement',
    description: 'Technology is revolutionizing soccer performance and fan engagement. We invest in cutting-edge solutions, like Footy Access\' AI analytics, that enhance scouting, training, and fan experiences at scale.',
    highlight: 'Our focus is on novel products that redefine the game.',
    features: ['AI Analytics', 'Performance Optimization', 'Fan Engagement', 'Data Intelligence'],
    metrics: ['50% Efficiency Gain', 'AI-Driven Insights', 'Real-time Analytics'],
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
    metrics: ['10K+ Fans', '50+ Youth Trained', 'Community Impact'],
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
    metrics: ['1B Views by 2025', 'Authentic Content', 'Global Reach'],
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

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Alignment',
    description: 'We dive deep into your vision, understanding your unique position in the soccer ecosystem and aligning on growth objectives.',
    duration: '2-4 weeks'
  },
  {
    step: '02',
    title: 'Strategic Partnership',
    description: 'Beyond funding, we become your growth partner, providing hands-on support, industry connections, and proven playbooks.',
    duration: 'Ongoing'
  },
  {
    step: '03',
    title: 'Network Integration',
    description: 'We integrate you into our ecosystem of soccer innovators, creating opportunities for collaboration and accelerated growth.',
    duration: 'Immediate'
  },
  {
    step: '04',
    title: 'Scale & Impact',
    description: 'Together, we scale your venture while building the future of soccer, creating lasting impact in the sport we love.',
    duration: 'Long-term'
  }
];

export default function ApproachPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen premium-pattern relative overflow-hidden">
      {/* Premium Scroll Indicator */}
      <div className="scroll-indicator">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Premium Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 data-texture"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-premium-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-premium-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <Navbar />
      
      {/* Heroic Entrance - Monumental */}
      <section className="space-heroic px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-12"
          >
            <span className="inline-block px-10 py-5 glass-morphism text-white roboto-medium rounded-full architectural-shadow animate-premium-glow">
              Our Approach
            </span>
          </motion.div>
          
          <motion.h1 
            className="monumental-display mb-12 tracking-tight leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="text-neutral-900">
              BUILDING THE
            </span>
            <br />
            <span className="gradient-text">
              FUTURE
            </span>
            <br />
            <span className="text-neutral-900">
              OF SOCCER
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="monumental-subhead text-neutral-600 max-w-5xl mx-auto leading-relaxed mb-16"
          >
            At WhiteSportsVentures, we're more than investors—we're your partners in scaling soccer ventures with passion, expertise, and a global network.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col sm:flex-row gap-8 justify-center"
          >
            <div className="card-premium-interactive text-white px-12 py-8 premium-hover-lift">
              <div className="metric-large mb-2">Partners</div>
              <div className="metric-context">Not Just Investors</div>
            </div>
            <div className="card-premium-interactive text-white px-12 py-8 premium-hover-lift">
              <div className="metric-large mb-2">Global Network</div>
              <div className="metric-context">Industry Access</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Enhanced */}
      <section className="space-monumental px-6 lg:px-8 bg-white relative">
        <div className="absolute inset-0 premium-pattern-subtle"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="text-center group magnetic-element"
              >
                <div className="relative">
                  <div className="monumental-headline mb-4 text-blue-600 premium-counter">
                    {stat.value}
                  </div>
                  <div className="absolute -inset-8 bg-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
                <div className="roboto-medium text-neutral-800 mb-3 text-lg">{stat.label}</div>
                <div className="roboto-regular text-neutral-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Premium */}
      <section className="space-monumental px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-24"
          >
            <h2 className="monumental-headline mb-8 text-neutral-900">
              Our Partnership Process
            </h2>
            <p className="monumental-subhead text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              A proven methodology that transforms soccer ventures into game-changers
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3, duration: 1 }}
                className="group relative premium-focus"
              >
                <div className="flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-3xl premium-gradient-blue text-white flex items-center justify-center roboto-medium text-2xl architectural-shadow-lg magnetic-element">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-6">
                      <h3 className="monumental-subhead text-neutral-800 mr-6">{step.title}</h3>
                      <span className="px-4 py-2 glass-morphism text-blue-700 roboto-medium text-sm rounded-full architectural-shadow">
                        {step.duration}
                      </span>
                    </div>
                    <p className="roboto-regular text-neutral-600 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="absolute left-10 top-20 w-1 h-16 bg-gradient-to-b from-blue-500 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-premium-thick"></div>

      {/* Approach Sections - Premium */}
      <section className="space-monumental px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-24"
          >
            <h2 className="monumental-headline mb-8 text-neutral-900">
              Our Core Strengths
            </h2>
            <p className="monumental-subhead text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              Strategic partnership methodology built on deep soccer expertise and proven growth frameworks
            </p>
          </motion.div>

          <div className="grid-premium">
            {approachSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 1 }}
                className="card-premium-interactive p-10 premium-hover"
              >
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 rounded-3xl flex items-center justify-center text-white architectural-shadow-lg mr-8 magnetic-element" style={{ background: section.gradient }}>
                    <span className="text-3xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="monumental-subhead text-neutral-800">{section.title}</h3>
                </div>
                
                <p className="roboto-regular text-neutral-600 leading-relaxed mb-8 text-lg">
                  {section.description}
                </p>
                
                <div className="p-8 glass-morphism rounded-3xl border-l-4 border-blue-500 architectural-shadow mb-8">
                  <p className="roboto-medium text-neutral-700 leading-relaxed text-lg">
                    {section.highlight}
                  </p>
                </div>

                {/* Metrics */}
                <div className="space-y-4">
                  {section.metrics.map((metric, metricIndex) => (
                    <motion.div
                      key={metric}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.2) + (metricIndex * 0.1) + 0.5 }}
                      className="flex items-center space-x-4"
                    >
                      <div className="w-3 h-3 rounded-full architectural-shadow" style={{ background: section.gradient }}></div>
                      <span className="roboto-medium text-neutral-700 text-lg">{metric}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-premium-thick"></div>

      {/* Investment Verticals - Premium */}
      <section ref={ref} className="space-monumental px-6 lg:px-8 bg-white relative">
        <div className="absolute inset-0 premium-pattern-subtle"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="text-center mb-24"
          >
            <h2 className="monumental-headline mb-8 text-neutral-900">
              Investment Verticals
            </h2>
            <p className="monumental-subhead text-neutral-600 max-w-4xl mx-auto leading-relaxed">
              Three strategic pillars transforming the soccer ecosystem through technology, community, and content
            </p>
          </motion.div>

          <div className="grid-premium-wide">
            {verticals.map((vertical, index) => (
              <motion.div
                key={vertical.title}
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.9 }}
                transition={{ delay: index * 0.3, duration: 1 }}
                whileHover={{ scale: 1.02, y: -15 }}
                className="card-premium-interactive p-12 overflow-hidden"
              >
                <div className="relative">
                  <div className="inline-flex items-center px-8 py-4 glass-morphism text-white roboto-medium rounded-full architectural-shadow mb-10" style={{ background: vertical.gradient }}>
                    {vertical.subtitle}
                  </div>
                  
                  <div className="flex items-center mb-10">
                    <div className="w-20 h-20 rounded-3xl flex items-center justify-center text-white architectural-shadow-lg mr-8 magnetic-element" style={{ background: vertical.gradient }}>
                      {vertical.icon}
                    </div>
                    <h3 className="monumental-subhead text-neutral-800 group-hover:text-blue-600 transition-colors">
                      {vertical.title}
                    </h3>
                  </div>
                  
                  <p className="roboto-regular text-neutral-600 leading-relaxed mb-10 text-lg">
                    {vertical.description}
                  </p>

                  {/* Highlight Box */}
                  <div className="p-8 glass-morphism rounded-3xl mb-10 border-l-4 border-blue-500 architectural-shadow">
                    <p className="roboto-medium text-neutral-700 text-lg">
                      {vertical.highlight}
                    </p>
                  </div>

                  {/* Metrics */}
                  <div className="mb-10">
                    <h4 className="roboto-medium text-neutral-800 mb-6 text-xl">Key Metrics</h4>
                    <div className="space-y-4">
                      {vertical.metrics.map((metric, metricIndex) => (
                        <motion.div
                          key={metric}
                          initial={{ opacity: 0, x: -30 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                          transition={{ delay: (index * 0.3) + (metricIndex * 0.1) + 0.5 }}
                          className="flex items-center space-x-4"
                        >
                          <div className="w-3 h-3 rounded-full architectural-shadow" style={{ background: vertical.gradient }}></div>
                          <span className="roboto-medium text-neutral-700 text-lg">{metric}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="space-y-4">
                    <h4 className="roboto-medium text-neutral-800 mb-6 text-xl">Focus Areas</h4>
                    {vertical.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ delay: (index * 0.3) + (featureIndex * 0.1) + 0.5 }}
                        className="flex items-center space-x-6"
                      >
                        <div className="w-4 h-4 rounded-full architectural-shadow" style={{ background: vertical.gradient }}></div>
                        <span className="roboto-medium text-neutral-700 text-lg">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="space-majestic px-6 lg:px-8 premium-gradient-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="monumental-headline mb-8">
              Ready to Build the Future of Soccer?
            </h2>
            <p className="monumental-subhead text-neutral-200 max-w-4xl mx-auto mb-16 leading-relaxed">
              Join our network of soccer innovators and let's transform your vision into a game-changer together.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-premium px-16 py-8 text-xl roboto-medium magnetic-element"
            >
              Start Your Partnership
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}