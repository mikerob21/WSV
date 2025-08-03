'use client';

<<<<<<< HEAD
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Approach() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 nav-blur">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold gradient-text">WSV</Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/approach" className="text-blue-600 font-semibold">Approach</Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </div>
            <Link href="/contact" className="button-primary">Connect</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container mx-auto">
          <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Investment Approach</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Data-driven strategies and deep soccer expertise converge to identify and accelerate the most promising opportunities in the American soccer ecosystem
            </p>
=======
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
>>>>>>> d26798b19e70a3ff682eec8e5827e6bd5caf9bc7
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Core Philosophy */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-8">Investment Philosophy</h2>
            <p className="text-lg text-gray-600 mb-8">
              We believe American soccer is at an inflection point. Through strategic investments in technology, infrastructure, and community-driven platforms, we're positioning ourselves at the forefront of this transformation.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 gradient-text">Long-term Vision</h3>
                <p className="text-gray-600">We invest with a 5-10 year horizon, focusing on sustainable growth rather than quick exits.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 gradient-text">Ecosystem Thinking</h3>
                <p className="text-gray-600">Every investment is evaluated for its potential to strengthen the broader soccer ecosystem.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 gradient-text">Operational Value</h3>
                <p className="text-gray-600">We provide hands-on support, leveraging our network and expertise to accelerate growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Criteria */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="fade-in">
              <h2 className="text-4xl font-bold mb-8">Investment Criteria</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Market Opportunity</h4>
                    <p className="text-gray-600">Targeting markets with $100M+ addressable opportunity within the soccer ecosystem</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Technology Edge</h4>
                    <p className="text-gray-600">Proprietary technology or unique data advantages that create defensible moats</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Exceptional Team</h4>
                    <p className="text-gray-600">Founding teams with deep domain expertise and proven execution track records</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 gradient-bg rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">Scalable Model</h4>
                    <p className="text-gray-600">Business models that can scale nationally and potentially internationally</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fade-in-delay-1">
              <div className="w-full h-96 gradient-bg rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <p className="text-xl font-bold">Rigorous Due Diligence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-8">Investment Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures thorough evaluation while maintaining speed and efficiency for promising opportunities
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center fade-in">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4">Initial Screening</h3>
              <p className="text-gray-600">Market analysis and team assessment within 48 hours</p>
            </div>
            <div className="text-center fade-in-delay-1">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4">Deep Dive</h3>
              <p className="text-gray-600">Comprehensive technical and business model evaluation</p>
            </div>
            <div className="text-center fade-in-delay-2">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4">Reference Checks</h3>
              <p className="text-gray-600">Customer interviews and industry expert validation</p>
            </div>
            <div className="text-center fade-in-delay-3">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-4">Investment Decision</h3>
              <p className="text-gray-600">Term sheet and partnership agreement within 2 weeks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Focus Areas */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl font-bold mb-8">Focus Areas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We concentrate our investments across key verticals that are driving transformation in the soccer ecosystem
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="hover-lift fade-in">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Sports Technology</h3>
                <p className="text-gray-600 mb-4">AI-powered analytics, performance optimization, and training technologies that enhance player development and team performance.</p>
                <div className="text-sm text-blue-600">
                  • Performance Analytics<br/>
                  • Training Platforms<br/>
                  • Injury Prevention<br/>
                  • Scouting Systems
                </div>
              </div>
            </div>
            <div className="hover-lift fade-in-delay-1">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Fan Engagement</h3>
                <p className="text-gray-600 mb-4">Digital platforms that connect fans, create communities, and enhance the soccer viewing and participation experience.</p>
                <div className="text-sm text-blue-600">
                  • Social Platforms<br/>
                  • Fantasy Sports<br/>
                  • Live Streaming<br/>
                  • Mobile Apps
                </div>
              </div>
            </div>
            <div className="hover-lift fade-in-delay-2">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Infrastructure</h3>
                <p className="text-gray-600 mb-4">Technologies that improve facilities, operations, and the business side of soccer organizations at all levels.</p>
                <div className="text-sm text-blue-600">
                  • Facility Management<br/>
                  • Operations Software<br/>
                  • Financial Systems<br/>
                  • Smart Stadiums
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Add */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in">
              <h2 className="text-4xl font-bold mb-8">Beyond Capital</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our investment goes beyond funding. We provide strategic guidance, industry connections, and operational expertise to accelerate growth.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Strategic Guidance</h4>
                    <p className="text-gray-600">Market positioning and growth strategy development</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Network Access</h4>
                    <p className="text-gray-600">Connections to key players, customers, and partners</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Operational Support</h4>
                    <p className="text-gray-600">Hands-on assistance with scaling and operations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="fade-in-delay-1">
              <div className="w-full h-96 bg-gray-800 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <p className="text-xl font-bold">Knowledge Transfer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto fade-in">
            <h2 className="text-4xl font-bold mb-6">
              Partner with <span className="gradient-text">WSV</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to transform your soccer venture? Let's discuss how our approach can accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="button-primary">
                Pitch Your Company
              </Link>
              <Link href="/portfolio" className="button-secondary">
                View Our Portfolio
              </Link>
            </div>
=======
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
>>>>>>> d26798b19e70a3ff682eec8e5827e6bd5caf9bc7
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold gradient-text mb-4">White Sports Ventures</div>
          <p className="text-gray-400 mb-6">Powering the Future of Soccer in America</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
            <a href="mailto:jeremiah@whitesportsventures.com" className="text-gray-400 hover:text-white transition-colors">Email</a>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm">
            © 2025 White Sports Ventures. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
=======
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
>>>>>>> d26798b19e70a3ff682eec8e5827e6bd5caf9bc7
  );
}