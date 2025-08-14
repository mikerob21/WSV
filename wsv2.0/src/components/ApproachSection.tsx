'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { verticals } from '@/data/approach'; // Assuming approach.ts is renamed/moved to data/approach.ts for consistency

export default function ApproachSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-12 px-6 lg:px-8 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-neutral-900 mb-2">Our Approach</h2>
          <p className="text-base text-neutral-600 max-w-xl mx-auto">Strategic, resilient, impactful – building soccer's future with elite insight.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {verticals.map((vertical, index) => (
            <motion.div
              key={vertical.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <svg className="w-8 h-8 mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d={vertical.iconPath} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
              <h3 className="text-lg font-bold mb-2">{vertical.title}</h3>
              <p className="text-sm text-neutral-600 mb-4">{vertical.description}</p>
              <ul className="space-y-1">
                {vertical.features.map((feature) => (
                  <li key={feature} className="text-sm text-blue-600">• {feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}