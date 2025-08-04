'use client';

import { memo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ComponentProps } from '@/types/components';

interface AboutOfferingsProps extends ComponentProps {}

const AboutOfferings = memo<AboutOfferingsProps>(() => {
  const offeringsRef = useRef(null);
  const isOfferingsInView = useInView(offeringsRef, { once: true, amount: 0.2 });

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

  return (
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
                        <div 
                          className="w-2 h-2 bg-blue-600 rounded-full animate-elastic-entrance" 
                          style={{ animationDelay: `${featureIndex * 100}ms` }} 
                        />
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
  );
});

AboutOfferings.displayName = 'AboutOfferings';

export default AboutOfferings;