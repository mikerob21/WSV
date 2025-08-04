'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function About() {
  const heroRef = useRef(null);
  const leadershipRef = useRef(null);
  const offeringsRef = useRef(null);
  const competitiveRef = useRef(null);
  const ecosystemRef = useRef(null);
  const partnershipRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const isLeadershipInView = useInView(leadershipRef, { once: true, amount: 0.3 });
  const isOfferingsInView = useInView(offeringsRef, { once: true, amount: 0.2 });
  const isCompetitiveInView = useInView(competitiveRef, { once: true, amount: 0.2 });
  const isEcosystemInView = useInView(ecosystemRef, { once: true, amount: 0.2 });
  const isPartnershipInView = useInView(partnershipRef, { once: true, amount: 0.3 });

  const offerings = [
    {
      title: "Strategic Investments",
      description: "$100K–$1M in capital, operational expertise, and secondary markets for soccer tech, media, and club ownership.",
      features: ["Capital Deployment", "Operational Support", "Secondary Markets", "Strategic Guidance"]
    },
    {
      title: "Ecosystem Synergies",
      description: "Network with portfolio companies, clients and partners to unlock exponential growth opportunities.",
      features: ["Portfolio Network", "Client Connections", "Partnership Facilitation", "Cross-Promotion"]
    },
    {
      title: "Brand Partnerships",
      description: "Connect sponsors to soccer's growing audience of millions through strategic brand collaborations.",
      features: ["Audience Access", "Brand Integration", "Content Partnerships", "Market Expansion"]
    },
    {
      title: "Performance Tools",
      description: "Proprietary AI optimizes player performance, fan engagement, and operational efficiency.",
      features: ["AI Analytics", "Performance Optimization", "Fan Engagement", "Operational Excellence"]
    }
  ];

  const competitiveAdvantages = [
    {
      title: "Elite Soccer Insight",
      description: "25+ years in professional soccer including USMNT, Saudi Pro League, and European experience.",
      metric: "25+ Years"
    },
    {
      title: "Financial Expertise",
      description: "Deep experience in Private Equity, Hedge Fund management, and proven entrepreneurship track record.",
      metric: "Proven Success"
    },
    {
      title: "Strategic Network",
      description: "Partnerships with MLS, USL, Concacaf, and leading media platforms in the soccer ecosystem.",
      metric: "Elite Network"
    },
    {
      title: "Thought Leadership",
      description: "Guided by insights from 'The Athlete's War', prioritizing strategy, resilience, and sustainable growth.",
      metric: "Published Author"
    }
  ];

  const ecosystemPillars = [
    {
      title: "Media Reach",
      description: "FootyAccess.com and DripFC.com engage millions monthly with premium soccer content.",
      metric: "Millions Monthly"
    },
    {
      title: "Club Infrastructure",
      description: "The Town FC and academies shape the future of soccer infrastructure and development.",
      metric: "Direct Ownership"
    },
    {
      title: "Technology Platform",
      description: "AI tools enhance analytics, performance measurement, and fan engagement across the ecosystem.",
      metric: "Proprietary AI"
    },
    {
      title: "Mental Resilience",
      description: "Programs build psychological strength for both athletes and venture development.",
      metric: "Holistic Approach"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      
      {/* Executive Hero Section */}
      <section 
        ref={heroRef}
        className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden geometric-bg"
      >
        {/* Sophisticated Background Layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-neutral-50/50" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/4 rounded-full blur-3xl animate-sophisticated-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl animate-parallax-drift" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-conic opacity-30 blur-3xl" />
        </div>

        {/* Architectural Lines */}
        <div className="absolute inset-0 architectural-lines" />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Asymmetrical Layout */}
          <div className="grid lg:grid-asymmetrical gap-12 items-center">
            <motion.div
              className="depth-layer-1"
              variants={containerVariants}
              initial="hidden"
              animate={isHeroInView ? "visible" : "hidden"}
            >
              <motion.h1 
                variants={itemVariants}
                className="display-hero mb-8 text-balance animate-text-breathing lg:text-left text-center"
              >
                Led by{' '}
                <span className="text-brand floating-text">
                  Jeremiah White III
                </span>
              </motion.h1>
              
              <motion.p
                variants={itemVariants}
                className="body-large text-secondary mb-12 text-balance lg:text-left text-center"
              >
                We transform US soccer through strategic investments, innovative technology, and community impact.
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="surface-frosted p-8 hover-liquid depth-layer-2 content-spacing"
            >
              <p className="body-default text-emphasis">
                WhiteSportsVentures is dedicated to revolutionizing soccer in America. We combine elite soccer expertise with entrepreneurial acumen to deliver exceptional value through strategic investments, AI-driven innovation, and transformative partnerships.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership & Expertise Section */}
      <section 
        ref={leadershipRef}
        className="py-20 px-6 lg:px-8 bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isLeadershipInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 spacing-fibonacci-3"
          >
            <h2 className="display-section mb-6 text-balance">
              Leadership & Expertise
            </h2>
            <p className="body-large text-secondary max-w-3xl mx-auto">
              Dual expertise in elite soccer and financial markets creates unparalleled investment insight.
            </p>
          </motion.div>

          {/* Sophisticated Grid with Staggered Layout */}
          <div className="grid-staggered gap-golden-2">
            {[
              {
                title: "Professional Soccer",
                subtitle: "USMNT Player",
                description: "International level experience with deep understanding of player development and team dynamics.",
                metric: "Elite Level"
              },
              {
                title: "Global Experience",
                subtitle: "Saudi Pro League & European Pro",
                description: "International career providing global market perspective and cultural insights.",
                metric: "Global Reach"
              },
              {
                title: "Financial Acumen",
                subtitle: "Private Equity & Hedge Funds",
                description: "Proven track record in investment management and entrepreneurial ventures.",
                metric: "Proven Success"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isLeadershipInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="surface-elevated hover-depth cursor-magnetic group"
              >
                <div className="p-8 content-spacing">
                  <div className="mb-6">
                    <div className="inline-flex items-center px-4 py-2 bg-blue-600 text-white caption rounded-full mb-4 animate-elastic-entrance">
                      {item.metric}
                    </div>
                    <h3 className="heading-secondary text-emphasis mb-2">
                      {item.title}
                    </h3>
                    <p className="label text-brand mb-4">
                      {item.subtitle}
                    </p>
                  </div>
                  <p className="body-default text-secondary">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Investment Offerings */}
      <section 
        ref={offeringsRef}
        className="py-20 px-6 lg:px-8 bg-neutral-50 overflow-hidden geometric-bg"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isOfferingsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 spacing-fibonacci-3"
          >
            <h2 className="display-section mb-6 text-balance">
              Strategic Investment Offerings
            </h2>
            <p className="body-large text-secondary max-w-3xl mx-auto">
              Comprehensive investment solutions designed to accelerate growth in the soccer ecosystem.
            </p>
          </motion.div>

          {/* Overlapping Grid Layout */}
          <div className="overlap-container">
            <div className="grid md:grid-cols-2 gap-golden-2">
              {offerings.map((offering, index) => (
                <motion.div
                  key={offering.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isOfferingsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className={`surface-liquid hover-magnetic group ${index % 2 === 1 ? 'overlap-element' : ''}`}
                >
                  <div className="p-8 content-spacing">
                    <h3 className="heading-primary text-emphasis mb-4 floating-text">
                      {offering.title}
                    </h3>
                    <p className="body-default text-secondary mb-6">
                      {offering.description}
                    </p>
                    <div className="space-y-3 stagger-container">
                      {offering.features.map((feature, featureIndex) => (
                        <div key={feature} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full animate-elastic-entrance" 
                               style={{ animationDelay: `${featureIndex * 100}ms` }} />
                          <span className="body-small text-muted">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Differentiation */}
      <section 
        ref={competitiveRef}
        className="py-20 px-6 lg:px-8 bg-white architectural-lines"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isCompetitiveInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 spacing-fibonacci-3"
          >
            <h2 className="display-section mb-6 text-balance">
              Competitive Edge
            </h2>
            <p className="body-large text-secondary max-w-3xl mx-auto">
              Unique combination of insider knowledge and proven financial expertise.
            </p>
          </motion.div>

          {/* Asymmetrical Grid with Depth */}
          <div className="grid md:grid-cols-2 gap-golden-2">
            {competitiveAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isCompetitiveInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`surface-elevated hover-depth cursor-magnetic group ${index % 2 === 0 ? 'depth-layer-1' : 'depth-layer-2'}`}
              >
                <div className="p-8 content-spacing">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="heading-secondary text-emphasis mb-2">
                        {advantage.title}
                      </h3>
                      <p className="body-default text-secondary">
                        {advantage.description}
                      </p>
                    </div>
                    <div className="ml-6">
                      <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-brand caption rounded-full animate-signature-rise hover-magnetic">
                        {advantage.metric}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Portfolio */}
      <section 
        ref={ecosystemRef}
        className="py-20 px-6 lg:px-8 bg-neutral-900"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isEcosystemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="display-section text-inverse mb-6 text-balance">
              Ecosystem Overview
            </h2>
            <p className="body-large text-inverse-secondary max-w-3xl mx-auto">
              Integrated platform spanning media, technology, clubs, and athlete development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ecosystemPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isEcosystemInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="glass-morphism-dark p-6 rounded-2xl border border-white/10"
              >
                <div className="text-center">
                  <div className="inline-flex items-center px-3 py-1 bg-blue-600/20 text-blue-300 caption rounded-full mb-4">
                    {pillar.metric}
                  </div>
                  <h3 className="heading-tertiary text-inverse mb-4">
                    {pillar.title}
                  </h3>
                  <p className="body-small text-inverse-secondary">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Call-to-Action */}
      <section 
        ref={partnershipRef}
        className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-neutral-50 geometric-bg"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isPartnershipInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center spacing-fibonacci-4"
          >
            <h2 className="display-section mb-8 text-balance animate-text-breathing">
              Why Partner with{' '}
              <span className="text-brand floating-text">WSV</span>?
            </h2>
            
            {/* Asymmetrical Benefits Grid */}
            <div className="grid-offset mb-12">
              {[
                "Scale startups to successful exits",
                "Drive growth through ecosystem synergies",
                "Unlock strategic partnerships",
                "Transform ventures with proven methodology"
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isPartnershipInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  transition={{ duration: 0.8, delay: 0.3 + (index * 0.1) }}
                  className="surface-frosted p-6 rounded-2xl hover-depth cursor-magnetic flex items-center space-x-4"
                >
                  <div className="w-3 h-3 bg-blue-600 rounded-full flex-shrink-0 animate-elastic-entrance" />
                  <span className="body-default text-emphasis">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isPartnershipInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="body-large text-secondary mb-12 max-w-2xl mx-auto text-balance floating-content"
            >
              We're builders, transforming soccer one venture at a time. Contact us to explore investment, collaboration, or sponsorship opportunities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isPartnershipInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-golden justify-center"
            >
              <motion.a
                href="/contact"
                className="btn-premium inline-flex items-center justify-center space-x-2 hover-magnetic cursor-magnetic"
              >
                <span>Start the Conversation</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              
              <motion.a
                href="/approach"
                className="surface-elevated inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-blue-600 text-brand label hover:bg-blue-600 hover:text-white transition-all duration-300 hover-liquid cursor-magnetic"
              >
                <span>Learn Our Approach</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}