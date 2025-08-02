'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
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
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({ target: containerRef });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      
      const sections = document.querySelectorAll('[data-section]');
      let current = 0;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) current = index;
      });
      setActiveSection(current);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen relative overflow-hidden">
      {/* Dynamic Scroll Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-neutral-200/20 z-50">
        <motion.div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 animate-gradient-shift"
          style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
        />
      </div>

      {/* Interactive Cursor Follower */}
      <motion.div 
        className="fixed w-6 h-6 bg-blue-500/30 rounded-full pointer-events-none z-40 mix-blend-difference"
        animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />

      {/* Dynamic Background Layers */}
      <div className="fixed inset-0 overflow-hidden">
        <motion.div 
          className="absolute inset-0 noise opacity-20"
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
        />
        <motion.div 
          className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float"
          style={{ x: useTransform(scrollYProgress, [0, 1], [0, 200]) }}
        />
        <motion.div 
          className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-premium-float"
          style={{ 
            x: useTransform(scrollYProgress, [0, 1], [0, -300]),
            y: useTransform(scrollYProgress, [0, 1], [0, 150])
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-1/3 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-float"
          style={{ 
            y: useTransform(scrollYProgress, [0, 1], [0, -200]),
            x: useTransform(scrollYProgress, [0, 1], [0, 100])
          }}
        />
      </div>
      
      <Navbar />
      
      {/* Revolutionary Hero - Asymmetrical & Bold */}
      <section data-section="0" className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div 
          ref={heroRef}
          className="absolute inset-0 atmosphere-blue"
          style={{ y: heroY, opacity: heroOpacity }}
        />
        
        {/* Diagonal Split Layout */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-0 right-0 w-2/3 h-full premium-gradient-blue transform skew-x-12 origin-top-right"
            initial={{ x: '100%' }}
            animate={{ x: '20%' }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-1/2 h-2/3 gradient-blue-deep transform -skew-y-6 origin-bottom-left opacity-80"
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 grid lg:grid-cols-12 gap-16 items-center min-h-screen">
          {/* Left Content - Asymmetrical */}
          <div className="lg:col-span-7 lg:col-start-1">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <span className="inline-block px-8 py-4 glass-morphism-dark text-blue-300 roboto-medium rounded-2xl architectural-shadow animate-pulse-glow">
                REVOLUTIONARY APPROACH
              </span>
            </motion.div>
            
            {/* Staggered Typography */}
            <div className="space-y-2 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 1.2 }}
                className="overflow-hidden"
              >
                <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                  BUILDING
                </h1>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 1.2 }}
                className="overflow-hidden pl-8"
              >
                <h1 className="text-4xl lg:text-5xl font-thin gradient-text-light leading-tight tracking-wide animate-gradient-shift">
                  THE FUTURE
                </h1>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 1.2 }}
                className="overflow-hidden pl-4"
              >
                <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                  OF SOCCER
                </h1>
              </motion.div>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-lg text-blue-100 leading-relaxed mb-8 max-w-2xl font-light"
            >
              We don't just invest in soccer—we architect its revolution. Join the movement that's reshaping the beautiful game.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="group relative px-8 py-4 btn-premium text-lg font-semibold overflow-hidden magnetic">
                <span className="relative z-10">START THE REVOLUTION</span>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700"></div>
              </button>
              <button className="px-8 py-4 border-2 border-white/30 text-white font-semibold text-lg hover-lift glass-morphism-dark magnetic">
                EXPLORE VENTURES
              </button>
            </motion.div>
          </div>

          {/* Right Content - Floating Elements */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 1.2, duration: 1.5 }}
              className="relative"
            >
              {/* Floating Stats Cards */}
              <div className="space-y-6">
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="card-premium p-6 transform rotate-3 hover-scale magnetic"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                  <div className="text-sm font-medium text-neutral-800">Years Soccer DNA</div>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="card-premium p-6 transform -rotate-2 ml-8 hover-scale magnetic"
                >
                  <div className="text-3xl font-bold text-green-600 mb-2">100K+</div>
                  <div className="text-sm font-medium text-neutral-800">Global Network</div>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="card-premium p-6 transform rotate-1 -ml-2 hover-scale magnetic"
                >
                  <div className="text-3xl font-bold text-purple-600 mb-2">1B</div>
                  <div className="text-sm font-medium text-neutral-800">Views by 2025</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Action Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
        >
          <div className="flex flex-col items-center space-y-3">
            <span className="text-sm font-medium tracking-wider">SCROLL TO EXPLORE</span>
            <div className="w-1 h-8 bg-gradient-to-b from-transparent via-white to-transparent rounded-full animate-flow"></div>
          </div>
        </motion.div>
      </section>

      {/* Revolutionary Stats - Blue Gradient Mastery */}
      <section data-section="1" className="relative py-32 overflow-hidden gradient-blue-deep">
        <div className="absolute inset-0 noise opacity-20"></div>
        
        {/* Blue Gradient Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-0 w-1/3 h-1/2 gradient-blue-600 transform -skew-y-12 animate-premium-float opacity-30"
            style={{ y: useTransform(scrollYProgress, [0.1, 0.3], [100, -100]) }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-2/5 h-3/4 gradient-blue-800 transform skew-x-12 animate-float opacity-20"
            style={{ x: useTransform(scrollYProgress, [0.1, 0.3], [100, -50]) }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Asymmetrical Header */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
              BY THE 
              <span className="block gradient-text-light animate-gradient-shift pl-8">
                NUMBERS
              </span>
            </h2>
          </motion.div>

          {/* Broken Grid Layout */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Large Feature Stat - Deepest Blue */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="lg:col-span-6 lg:row-span-2"
            >
              <div className="card-premium h-full p-8 gradient-blue-900 text-white relative overflow-hidden magnetic">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-300/20 rounded-full blur-2xl animate-pulse-glow"></div>
                <div className="relative z-10">
                  <div className="text-5xl lg:text-6xl font-black mb-4 text-blue-100 animate-premium-shimmer">
                    {stats[0].value}
                  </div>
                  <div className="text-xl font-bold mb-3 text-blue-200">{stats[0].label}</div>
                  <div className="text-base text-blue-300 leading-relaxed">{stats[0].description}</div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-blue-400/30 rounded-full animate-float"></div>
              </div>
            </motion.div>

            {/* Medium Stats - Blue Spectrum */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="lg:col-span-3"
            >
              <div className="glass-morphism-dark p-6 h-full border border-blue-400/40 relative overflow-hidden hover-lift">
                <div className="absolute inset-0 gradient-blue-600 opacity-20"></div>
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-blue-300 mb-3 premium-counter">
                    {stats[1].value}
                  </div>
                  <div className="text-base font-semibold text-white mb-2">{stats[1].label}</div>
                  <div className="text-blue-200 text-sm">{stats[1].description}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="lg:col-span-3"
            >
              <div className="glass-morphism-dark p-6 h-full border border-blue-500/40 relative overflow-hidden hover-lift">
                <div className="absolute inset-0 gradient-blue-700 opacity-15"></div>
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-blue-400 mb-3 premium-counter">
                    {stats[2].value}
                  </div>
                  <div className="text-base font-semibold text-white mb-2">{stats[2].label}</div>
                  <div className="text-blue-300 text-sm">{stats[2].description}</div>
                </div>
              </div>
            </motion.div>

            {/* Wide Feature - Flowing Blue */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="lg:col-span-6"
            >
              <div className="relative p-6 border-2 border-blue-300/40 rounded-3xl overflow-hidden hover-scale">
                <div className="absolute inset-0 gradient-blue-flow opacity-10 animate-gradient-shift"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <div className="text-4xl font-black text-blue-200 mb-2 premium-counter">
                      {stats[3].value}
                    </div>
                    <div className="text-lg font-bold text-white mb-1">{stats[3].label}</div>
                    <div className="text-blue-300 text-sm">{stats[3].description}</div>
                  </div>
                  <div className="w-16 h-16 border-2 border-blue-400/40 rounded-full flex items-center justify-center animate-float">
                    <div className="w-8 h-8 gradient-blue-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Floating Elements */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-20 text-center"
          >
            <div className="inline-flex items-center space-x-4 px-8 py-4 glass-morphism-dark rounded-full border border-blue-400/40">
              <div className="w-3 h-3 bg-blue-300 rounded-full animate-pulse"></div>
              <span className="text-blue-200 font-medium">Transforming Soccer Globally</span>
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Revolutionary Process - Blue Diagonal Flow */}
      <section data-section="2" className="relative py-32 overflow-hidden gradient-blue-white">
        {/* Blue Diagonal Background Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute -top-20 -left-20 w-full h-2/3 gradient-blue-500 transform rotate-12 opacity-15"
            style={{ x: useTransform(scrollYProgress, [0.3, 0.6], [-200, 200]) }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-2/3 h-1/2 gradient-blue-700 transform -rotate-6 opacity-10"
            style={{ y: useTransform(scrollYProgress, [0.3, 0.6], [100, -100]) }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Radical Header Layout */}
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-20">
                <h2 className="text-4xl lg:text-5xl font-black text-neutral-900 leading-tight mb-6">
                  HOW WE
                  <span className="block gradient-text animate-gradient-shift pl-4">
                    TRANSFORM
                  </span>
                  <span className="block text-blue-600 text-2xl font-light mt-2">
                    your vision
                  </span>
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed max-w-xl">
                  A revolutionary 4-step methodology that turns soccer dreams into billion-dollar realities.
                </p>
              </div>
            </motion.div>

            {/* Interactive Process Steps */}
            <div className="lg:col-span-1 space-y-12">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: 100, rotate: 5 }}
                  whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                  whileHover={{ scale: 1.02, rotate: -1 }}
                  transition={{ delay: index * 0.2, duration: 1 }}
                  className="group relative"
                >
                  {/* Step Card with Dynamic Layout */}
                  <div className={`relative p-6 lg:p-8 rounded-3xl overflow-hidden hover-lift premium-focus ${
                    index % 2 === 0 ? 'card-premium mr-0 lg:mr-6' : 'card-premium ml-0 lg:ml-6'
                  }`}>
                    {/* Animated Background */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                      index === 0 ? 'gradient-blue-200' :
                      index === 1 ? 'gradient-blue-400' :
                      index === 2 ? 'gradient-blue-600' :
                      'gradient-blue-800'
                    }`}></div>

                    {/* Step Number - Dynamic Position */}
                    <div className={`absolute ${
                      index % 2 === 0 ? '-top-4 -left-4' : '-top-4 -right-4'
                    } w-16 h-16 rounded-full ${
                      index === 0 ? 'gradient-blue-500' :
                      index === 1 ? 'gradient-blue-600' :
                      index === 2 ? 'gradient-blue-700' :
                      'gradient-blue-800'
                    } text-white flex items-center justify-center text-lg font-black architectural-shadow-lg animate-pulse-glow magnetic`}>
                      {step.step}
                    </div>

                    {/* Content */}
                    <div className="relative z-10 pt-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                        <h3 className="text-xl lg:text-2xl font-bold text-neutral-800 mb-3 lg:mb-0 group-hover:text-blue-600 transition-colors">
                          {step.title}
                        </h3>
                        <span className={`inline-flex px-4 py-2 rounded-full text-xs font-bold ${
                          index === 0 ? 'bg-blue-100 text-blue-700' :
                          index === 1 ? 'bg-blue-200 text-blue-800' :
                          index === 2 ? 'bg-blue-300 text-blue-900' :
                          'bg-blue-400 text-blue-950'
                        } animate-premium-shimmer`}>
                          {step.duration}
                        </span>
                      </div>
                      
                      <p className="text-base text-neutral-600 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Dynamic Action Indicators */}
                      <div className="flex items-center space-x-4">
                        <div className={`w-4 h-4 rounded-full ${
                          index === 0 ? 'bg-blue-400' :
                          index === 1 ? 'bg-blue-500' :
                          index === 2 ? 'bg-blue-600' :
                          'bg-blue-700'
                        } animate-pulse`}></div>
                        <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
                          Step {index + 1} of 4
                        </span>
                        <div className="flex-1 h-1 bg-neutral-200 rounded-full overflow-hidden">
                          <motion.div 
                            className={`h-full ${
                              index === 0 ? 'gradient-blue-400' :
                              index === 1 ? 'gradient-blue-500' :
                              index === 2 ? 'gradient-blue-600' :
                              'gradient-blue-700'
                            }`}
                            initial={{ width: '0%' }}
                            whileInView={{ width: `${(index + 1) * 25}%` }}
                            transition={{ delay: 0.5, duration: 1 }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Connecting Lines - Dynamic */}
                    {index < processSteps.length - 1 && (
                      <motion.div 
                        className={`absolute ${
                          index % 2 === 0 ? 'bottom-0 left-1/2' : 'bottom-0 right-1/2'
                        } w-1 h-12 bg-gradient-to-b ${
                          index === 0 ? 'from-blue-400' :
                          index === 1 ? 'from-blue-500' :
                          'from-blue-600'
                        } to-transparent transform ${
                          index % 2 === 0 ? 'translate-x-8' : '-translate-x-8'
                        } animate-flow`}
                        initial={{ height: 0 }}
                        whileInView={{ height: 48 }}
                        transition={{ delay: 1, duration: 0.8 }}
                      />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA - Floating */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-center mt-24"
          >
            <button className="group relative px-16 py-8 gradient-blue-600 text-white text-2xl font-bold rounded-full overflow-hidden magnetic architectural-shadow-xl">
              <span className="relative z-10">Begin Your Transformation</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-700"></div>
              <div className="absolute -top-1 -left-1 w-4 h-4 bg-blue-200/50 rounded-full animate-float"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-300/60 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
            </button>
          </motion.div>
        </div>
      </section>

      <div className="divider-premium-thick"></div>

      {/* Blueprint Architecture - Core Strengths */}
      <section data-section="3" className="relative py-32 overflow-hidden bg-white">
        <div className="absolute inset-0 data-texture opacity-10"></div>
        
        {/* Blueprint Grid Background */}
        <div className="absolute inset-0">
          <svg width="100%" height="100%" className="absolute inset-0 opacity-20">
            <defs>
              <pattern id="blueprintGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blueprintGrid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Blueprint Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center mb-32"
          >
            <div className="relative inline-block">
              <h2 className="text-8xl lg:text-9xl font-black text-neutral-900 leading-none mb-4 tracking-tighter">
                CORE
              </h2>
              <div className="absolute -inset-4 border-4 border-blue-500/30 transform rotate-1 rounded-2xl"></div>
              <div className="absolute -inset-8 border-2 border-blue-300/20 transform -rotate-1 rounded-3xl"></div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="relative"
            >
              <h3 className="gradient-text text-6xl lg:text-7xl font-light mb-8 animate-gradient-shift">
                ARCHITECTURE
              </h3>
              <p className="text-2xl text-blue-600 max-w-4xl mx-auto leading-relaxed">
                Four foundational pillars engineered to build soccer's future
              </p>
            </motion.div>
          </motion.div>

          {/* Overlapping Blueprint Cards */}
          <div className="relative">
            {approachSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200, y: 100 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                transition={{ delay: index * 0.3, duration: 1.2 }}
                className={`absolute w-full max-w-4xl ${
                  index === 0 ? 'top-0 left-0' :
                  index === 1 ? 'top-32 right-0' :
                  index === 2 ? 'top-64 left-8' :
                  'top-96 right-8'
                }`}
                style={{ zIndex: 4 - index }}
              >
                {/* Blueprint Card */}
                <div className={`relative p-12 lg:p-16 rounded-3xl border-4 overflow-hidden premium-hover cursor-pointer ${
                  index === 0 ? 'border-blue-300 gradient-blue-50' :
                  index === 1 ? 'border-blue-400 gradient-blue-100' :
                  index === 2 ? 'border-blue-500 gradient-blue-200' :
                  'border-blue-600 gradient-blue-300'
                } architectural-shadow-xl`}>
                  
                  {/* Blueprint Corner Markers */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-l-4 border-t-4 border-blue-500"></div>
                  <div className="absolute top-4 right-4 w-6 h-6 border-r-4 border-t-4 border-blue-500"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-l-4 border-b-4 border-blue-500"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-r-4 border-b-4 border-blue-500"></div>

                  {/* Blueprint Number */}
                  <div className={`absolute -top-8 -left-8 w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-black architectural-shadow-lg magnetic ${
                    index === 0 ? 'gradient-blue-500' :
                    index === 1 ? 'gradient-blue-600' :
                    index === 2 ? 'gradient-blue-700' :
                    'gradient-blue-800'
                  } animate-pulse-glow`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Technical Specifications Header */}
                  <div className="mb-8 border-b-2 border-blue-400/30 pb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-4xl lg:text-5xl font-black text-neutral-900 uppercase tracking-tight">
                        {section.title}
                      </h3>
                      <div className="w-8 h-8 rounded-full bg-blue-500 animate-pulse"></div>
                    </div>
                    <div className="text-sm font-mono text-blue-600 uppercase tracking-widest">
                      SPECIFICATION #{String(index + 1).padStart(3, '0')} / SOCCER ARCHITECTURE
                    </div>
                  </div>

                  {/* Blueprint Description */}
                  <div className="relative mb-8">
                    <p className="text-xl text-neutral-700 leading-relaxed mb-6">
                      {section.description}
                    </p>
                    
                    {/* Technical Highlight Box */}
                    <div className={`relative p-6 rounded-2xl border-l-8 ${
                      index === 0 ? 'border-blue-400 bg-blue-50/50' :
                      index === 1 ? 'border-blue-500 bg-blue-100/50' :
                      index === 2 ? 'border-blue-600 bg-blue-200/50' :
                      'border-blue-700 bg-blue-300/50'
                    } backdrop-blur-sm`}>
                      <div className="absolute top-2 right-2 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                      <p className="text-lg font-semibold text-neutral-800 leading-relaxed">
                        {section.highlight}
                      </p>
                    </div>
                  </div>

                  {/* Technical Metrics Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {section.metrics.map((metric, metricIndex) => (
                      <motion.div
                        key={metric}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (index * 0.3) + (metricIndex * 0.2) + 0.5 }}
                        className={`relative p-4 rounded-xl border-2 backdrop-blur-sm hover-scale ${
                          index === 0 ? 'border-blue-300/50 bg-blue-50/30' :
                          index === 1 ? 'border-blue-400/50 bg-blue-100/30' :
                          index === 2 ? 'border-blue-500/50 bg-blue-200/30' :
                          'border-blue-600/50 bg-blue-300/30'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${
                            index === 0 ? 'bg-blue-400' :
                            index === 1 ? 'bg-blue-500' :
                            index === 2 ? 'bg-blue-600' :
                            'bg-blue-700'
                          } animate-pulse`}></div>
                          <span className="text-sm font-bold text-neutral-800 uppercase tracking-wide">
                            {metric}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Blueprint Watermark */}
                  <div className="absolute bottom-6 right-6 text-xs font-mono text-blue-400/60 uppercase tracking-widest">
                    WSV BLUEPRINT v2.0
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Spacer for Overlapping Cards */}
          <div className="h-[800px] lg:h-[1000px]"></div>

          {/* Blueprint Footer */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-center mt-24"
          >
            <div className="relative inline-block p-8 border-4 border-blue-500/30 rounded-3xl backdrop-blur-sm">
              <div className="absolute inset-0 gradient-blue-subtle rounded-3xl"></div>
              <div className="relative z-10">
                <h4 className="text-3xl font-black text-neutral-900 mb-4 uppercase tracking-tight">
                  Architecture Complete
                </h4>
                <p className="text-lg text-blue-600 font-medium">
                  Ready to build your soccer empire on this foundation?
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="divider-premium-thick"></div>

      {/* Investment Verticals - Strategic Focus Areas */}
      <section ref={ref} data-section="4" className="relative py-32 overflow-hidden gradient-blue-deep">
        <div className="absolute inset-0 noise opacity-30"></div>
        
        {/* Dynamic Grid Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20">
            {/* Hexagonal Pattern */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-32 h-32 border border-blue-300/30"
                style={{
                  left: `${(i % 5) * 20}%`,
                  top: `${Math.floor(i / 5) * 25}%`,
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                }}
                animate={{ 
                  opacity: [0.2, 0.6, 0.2],
                  scale: [1, 1.1, 1] 
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Investment Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center mb-32"
          >
            <div className="relative">
              <motion.h2 
                className="text-8xl lg:text-9xl font-black text-white leading-none mb-8 tracking-tighter"
                animate={{ 
                  textShadow: [
                    '0 0 20px rgba(59, 130, 246, 0.5)',
                    '0 0 40px rgba(59, 130, 246, 0.8)',
                    '0 0 20px rgba(59, 130, 246, 0.5)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                INVESTMENT
                <span className="block gradient-text-light animate-gradient-shift">
                  VERTICALS
                </span>
              </motion.h2>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-16 h-16 border-4 border-blue-300 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-12 h-12 bg-blue-400/30 rounded-full blur-sm"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
            
            <p className="text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed mt-8">
              Three strategic pillars transforming the soccer ecosystem through technology, community, and content
            </p>
          </motion.div>

          {/* Investment Focus Areas */}
          <div className="space-y-32">
            {verticals.map((vertical, index) => (
              <motion.div
                key={vertical.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -300 : 300 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 1.5 }}
                className={`relative ${index % 2 === 0 ? '' : 'flex justify-end'}`}
              >
                <div className={`relative max-w-5xl ${
                  index % 2 === 0 ? 'pr-0 lg:pr-32' : 'pl-0 lg:pl-32'
                }`}>
                  
                  {/* Investment Area Container */}
                  <div className="relative p-12 lg:p-16 glass-morphism-dark rounded-3xl border-2 border-blue-400/40 overflow-hidden hover-lift">
                    
                    {/* Professional Corner Effects */}
                    <div className="absolute top-0 left-0 w-full h-full">
                      <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-blue-300"></div>
                      <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-blue-300"></div>
                      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-blue-300"></div>
                      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-blue-300"></div>
                    </div>

                    {/* Investment Area Number */}
                    <motion.div
                      className={`absolute ${
                        index % 2 === 0 ? '-right-8 top-8' : '-left-8 top-8'
                      } w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-black architectural-shadow-lg magnetic ${
                        index === 0 ? 'gradient-blue-600' :
                        index === 1 ? 'gradient-blue-700' :
                        'gradient-blue-800'
                      }`}
                      animate={{ 
                        boxShadow: [
                          '0 0 20px rgba(59, 130, 246, 0.3)',
                          '0 0 40px rgba(59, 130, 246, 0.6)',
                          '0 0 20px rgba(59, 130, 246, 0.3)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </motion.div>

                    {/* Investment Classification */}
                    <div className="mb-8">
                      <div className={`inline-flex items-center px-6 py-3 rounded-full text-sm font-bold mb-6 ${
                        index === 0 ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30' :
                        index === 1 ? 'bg-blue-600/20 text-blue-200 border border-blue-500/30' :
                        'bg-blue-700/20 text-blue-100 border border-blue-600/30'
                      } animate-premium-shimmer`}>
                        {vertical.subtitle}
                      </div>
                      
                      <div className="flex items-center space-x-6 mb-4">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white ${
                          index === 0 ? 'gradient-blue-500' :
                          index === 1 ? 'gradient-blue-600' :
                          'gradient-blue-700'
                        } magnetic`}>
                          {vertical.icon}
                        </div>
                        <h3 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
                          {vertical.title}
                        </h3>
                      </div>
                      
                      <div className="text-xs font-mono text-blue-300 uppercase tracking-widest">
                        VERTICAL #{String(index + 1).padStart(3, '0')} / STRATEGIC INVESTMENT FOCUS
                      </div>
                    </div>

                    {/* Investment Overview */}
                    <div className="relative mb-8">
                      <p className="text-xl text-blue-100 leading-relaxed mb-8">
                        {vertical.description}
                      </p>
                      
                      {/* Strategic Insight */}
                      <div className={`relative p-8 rounded-2xl border-l-8 backdrop-blur-sm ${
                        index === 0 ? 'border-blue-400 bg-blue-500/10' :
                        index === 1 ? 'border-blue-500 bg-blue-600/10' :
                        'border-blue-600 bg-blue-700/10'
                      }`}>
                        <div className="absolute top-4 right-4 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                        <div className="text-sm font-mono text-blue-300 mb-3 uppercase tracking-wider">
                          STRATEGIC INSIGHT
                        </div>
                        <p className="text-lg font-semibold text-white leading-relaxed">
                          {vertical.highlight}
                        </p>
                      </div>
                    </div>

                    {/* Performance Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      {vertical.metrics.map((metric, metricIndex) => (
                        <motion.div
                          key={metric}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ delay: (index * 0.2) + (metricIndex * 0.1) + 0.5 }}
                          className={`relative p-6 rounded-xl border-2 backdrop-blur-sm ${
                            index === 0 ? 'border-blue-400/40 bg-blue-500/10' :
                            index === 1 ? 'border-blue-500/40 bg-blue-600/10' :
                            'border-blue-600/40 bg-blue-700/10'
                          }`}
                        >
                          <div className="flex items-center space-x-4">
                            <div className={`w-4 h-4 rounded-full ${
                              index === 0 ? 'bg-blue-400' :
                              index === 1 ? 'bg-blue-500' :
                              'bg-blue-600'
                            } animate-pulse`}></div>
                            <span className="text-sm font-bold text-white uppercase tracking-wide">
                              {metric}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Investment Focus Areas */}
                    <div className="grid grid-cols-2 gap-4">
                      {vertical.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: (index * 0.2) + (featureIndex * 0.1) + 0.8 }}
                          className="flex items-center space-x-3 p-3 rounded-lg bg-blue-900/20 border border-blue-600/20"
                        >
                          <div className={`w-2 h-2 rounded-full ${
                            index === 0 ? 'bg-blue-300' :
                            index === 1 ? 'bg-blue-400' :
                            'bg-blue-500'
                          } animate-pulse`}></div>
                          <span className="text-sm text-blue-200 font-medium">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Investment Status */}
                    <div className="absolute bottom-4 right-4 text-xs font-mono text-blue-400/60 uppercase tracking-widest">
                      STATUS: ACTIVE INVESTMENT
                    </div>
                  </div>

                  {/* Connecting Growth Flow */}
                  {index < verticals.length - 1 && (
                    <motion.div
                      className={`absolute ${
                        index % 2 === 0 ? 'right-0 top-full' : 'left-0 top-full'
                      } w-px h-32 bg-gradient-to-b from-blue-400 to-transparent`}
                      initial={{ height: 0 }}
                      whileInView={{ height: 128 }}
                      transition={{ delay: 1, duration: 1 }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Investment Portfolio Summary */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="text-center mt-32"
          >
            <div className="relative inline-block p-8 glass-morphism-dark rounded-3xl border-2 border-blue-400/40">
              <motion.div
                className="absolute inset-0 gradient-blue-subtle rounded-3xl opacity-20"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative z-10">
                <h4 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">
                  Portfolio Overview Complete
                </h4>
                <p className="text-lg text-blue-200 font-medium">
                  Ready to build your soccer venture within these strategic verticals?
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Hub - Strategic Alliance */}
      <section data-section="5" className="relative py-32 overflow-hidden gradient-blue-deep">
        <div className="absolute inset-0 noise opacity-40"></div>
        
        {/* Dynamic Growth Background */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 opacity-30"
            animate={{ 
              background: [
                'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
                'radial-gradient(circle at 70% 70%, rgba(59, 130, 246, 0.5) 0%, transparent 50%)',
                'radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)'
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          
          {/* Floating Growth Elements */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-300 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Partnership Hub Header */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-center mb-20"
          >
            <div className="relative mb-12">
              <motion.div
                className="absolute -inset-8 border-4 border-blue-300/40 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -inset-16 border-2 border-blue-400/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              
              <h2 className="text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter relative z-10">
                PARTNERSHIP
                <span className="block gradient-text-light animate-gradient-shift">
                  HUB
                </span>
              </h2>
            </div>
            
            <div className="relative inline-block p-6 glass-morphism-dark rounded-2xl border border-blue-400/40">
              <div className="text-sm font-mono text-blue-300 uppercase tracking-widest mb-2">
                STRATEGIC ALLIANCE PROTOCOL
              </div>
              <p className="text-2xl text-blue-100 font-medium">
                Your soccer venture transformation begins here
              </p>
            </div>
          </motion.div>

          {/* Partnership Dashboard */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Partnership Readiness */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              className="space-y-8"
            >
              <div className="glass-morphism-dark p-8 rounded-3xl border border-blue-400/40">
                <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">
                  Partnership Infrastructure
                </h3>
                
                {[
                  { system: 'Blueprint Architecture', status: 'ACTIVE', progress: 100 },
                  { system: 'Investment Verticals', status: 'ACTIVE', progress: 100 },
                  { system: 'Growth Methodology', status: 'PROVEN', progress: 100 },
                  { system: 'Global Network', status: 'EXPANDING', progress: 100 }
                ].map((item, index) => (
                  <motion.div
                    key={item.system}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-blue-900/20 border border-blue-600/20 mb-4"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white font-medium">{item.system}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-20 h-2 bg-blue-900 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-400 to-green-400"
                          initial={{ width: '0%' }}
                          whileInView={{ width: `${item.progress}%` }}
                          transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
                        />
                      </div>
                      <span className="text-green-400 text-sm font-bold">{item.status}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Strategic Value Proposition */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              className="space-y-8"
            >
              <div className="glass-morphism-dark p-8 rounded-3xl border border-blue-400/40">
                <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tight">
                  Partnership Value
                </h3>
                
                <div className="space-y-6">
                  <div className="p-6 rounded-xl border border-blue-500/30 bg-blue-500/10">
                    <div className="text-lg font-bold text-white mb-2">Expertise: 25+ Years Soccer DNA</div>
                    <div className="text-blue-200">Deep industry knowledge and proven track record</div>
                  </div>
                  
                  <div className="p-6 rounded-xl border border-blue-600/30 bg-blue-600/10">
                    <div className="text-lg font-bold text-white mb-2">Network: 100K+ Connections</div>
                    <div className="text-blue-200">Access to global soccer ecosystem</div>
                  </div>
                  
                  <div className="p-6 rounded-xl border border-blue-700/30 bg-blue-700/10">
                    <div className="text-lg font-bold text-white mb-2">Growth: 1B Views by 2025</div>
                    <div className="text-blue-200">Accelerated scale and market reach</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Partnership Activation */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="text-center"
          >
            <div className="relative mb-12">
              <h3 className="text-6xl lg:text-7xl font-black text-white mb-8 leading-none">
                READY TO
                <span className="block gradient-text-light">
                  PARTNER?
                </span>
              </h3>
              
              <p className="text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed mb-12">
                Your soccer venture transformation starts with a strategic partnership. Join the network that's building the future of the beautiful game.
              </p>
            </div>

            {/* Partnership Action Center */}
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-16 py-8 gradient-blue-600 text-white text-2xl font-black rounded-full overflow-hidden magnetic architectural-shadow-xl"
              >
                <span className="relative z-10 flex items-center space-x-4">
                  <span>START PARTNERSHIP</span>
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-6 border-r-4 border-t-4 border-white transform rotate-45"
                  />
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  animate={{ 
                    background: [
                      'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                      'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                      'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-16 py-8 border-4 border-blue-400/50 text-blue-200 text-2xl font-bold rounded-full glass-morphism-dark hover-lift magnetic"
              >
                EXPLORE PORTFOLIO
              </motion.button>
            </div>

            {/* Partnership Status */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="mt-16"
            >
              <div className="inline-flex items-center space-x-6 px-12 py-6 glass-morphism-dark rounded-full border border-blue-400/40">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-4 h-4 bg-green-400 rounded-full"
                />
                <span className="text-blue-200 font-mono text-lg">
                  PARTNERSHIP INFRASTRUCTURE ACTIVE
                </span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}