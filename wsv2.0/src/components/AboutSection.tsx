'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const pillars = [
  {
    title: 'Disruptive Ecosystems',
    description: 'Designs interconnected ventures controlling market access, yielding rapid scale'
  },
  {
    title: 'Strategic Execution',
    description: 'Transforms vision into market reality through precise operational excellence'
  },
  {
    title: 'Legacy-Driven Impact',
    description: 'Builds for enduring value through media, tech, and community ventures'
  }
];

const capacities = [
  {
    title: 'Strategic Advisor',
    points: [
      'Board-level support for venture growth or product-market fit',
      'Ecosystem design across media, tech, brand, and operations'
    ]
  },
  {
    title: 'Fractional Executive',
    points: [
      'Interim CEO, COO, or Chief Innovation roles',
      'Embedding systems, processes, and people to scale'
    ]
  },
  {
    title: 'Investment & Deal Flow Partner',
    points: [
      'Select co-investments in sports, tech, and creator economy',
      'Due diligence support for PE/VC and family offices'
    ]
  },
  {
    title: 'Brand & Narrative Architect',
    points: [
      'Founder positioning and pitch refinement',
      'Go-to-market and growth storytelling'
    ]
  }
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 px-6 lg:px-8 bg-neutral-0">
      <div className="max-w-7xl mx-auto uppercase">
        {/* Three Pillars Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <motion.h2 
            className="heading-primary text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Three Pillars
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
                <div className="relative bg-white p-8 rounded-lg border border-neutral-200">
                  <div className="absolute top-6 right-6 w-8 h-8 bg-neutral-100 text-neutral-400 rounded flex items-center justify-center caption font-bold">
                    {index + 1}
                  </div>
                  <h3 className="heading-tertiary mb-3 pr-12">
                    {pillar.title}
                  </h3>
                  <p className="body-small">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Four Core Capacities Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h2 
            className="heading-primary text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Partnership Framework
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {capacities.map((capacity, index) => (
              <motion.div
                key={capacity.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -2 }}
                className="bg-neutral-50 p-8 rounded-lg border border-neutral-200 hover:border-blue-300 transition-all duration-300"
              >
                <h3 className="heading-tertiary mb-4">
                  {capacity.title}
                </h3>
                <ul className="space-y-2">
                  {capacity.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <span className="inline-block w-1 h-1 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="body-small">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}