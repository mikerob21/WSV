'use client';

import { memo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ComponentProps } from '@/types/components';

interface AboutPartnershipProps extends ComponentProps {}

const AboutPartnership = memo<AboutPartnershipProps>(() => {
  const partnershipRef = useRef(null);
  const isPartnershipInView = useInView(partnershipRef, { once: true, amount: 0.3 });

  const benefits = [
    "Scale startups to successful exits",
    "Drive growth through ecosystem synergies",
    "Unlock strategic partnerships",
    "Transform ventures with proven methodology"
  ];

  return (
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
            {benefits.map((benefit, index) => (
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
  );
});

AboutPartnership.displayName = 'AboutPartnership';

export default AboutPartnership;