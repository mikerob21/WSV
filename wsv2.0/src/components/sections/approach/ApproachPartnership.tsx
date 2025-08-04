'use client';

import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ComponentProps } from '@/types/components';

interface ApproachPartnershipProps extends ComponentProps {}

const ApproachPartnership = memo<ApproachPartnershipProps>(() => {
  const infrastructureItems = useMemo(() => [
    { system: 'Blueprint Architecture', status: 'ACTIVE', progress: 100 },
    { system: 'Investment Verticals', status: 'ACTIVE', progress: 100 },
    { system: 'Growth Methodology', status: 'PROVEN', progress: 100 },
    { system: 'Global Network', status: 'EXPANDING', progress: 100 }
  ], []);

  const valueProps = useMemo(() => [
    {
      title: 'Expertise: 25+ Years Soccer DNA',
      description: 'Deep industry knowledge and proven track record'
    },
    {
      title: 'Network: 100K+ Connections',
      description: 'Access to global soccer ecosystem'
    },
    {
      title: 'Growth: 1B Views by 2025',
      description: 'Accelerated scale and market reach'
    }
  ], []);

  return (
    <section className="relative py-24 overflow-hidden bg-neutral-100">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="partnershipGrid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#d1d5db" strokeWidth="1" opacity="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#partnershipGrid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="text-center mb-20"
        >
          <div className="relative mb-8">
            <h2 className="text-7xl lg:text-8xl font-black text-emphasis leading-none tracking-tighter">
              PARTNERSHIP
              <span className="block text-secondary text-4xl lg:text-5xl font-light mt-2">
                HUB
              </span>
            </h2>
          </div>
          
          <div className="relative inline-block p-6 bg-neutral-0 rounded-2xl border border-neutral-200 shadow-sm">
            <div className="text-sm text-muted mb-2">
              Strategic Alliance Protocol
            </div>
            <p className="text-xl text-secondary font-medium">
              Your soccer venture transformation begins here
            </p>
          </div>
        </motion.div>

        {/* Partnership Dashboard */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Infrastructure */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="space-y-8"
          >
            <div className="bg-neutral-0 p-8 rounded-2xl border-2 border-neutral-200 shadow-sm">
              <h3 className="text-3xl font-bold text-emphasis mb-6">
                Partnership Infrastructure
              </h3>
              
              {infrastructureItems.map((item, index) => (
                <motion.div
                  key={item.system}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="flex items-center justify-between p-4 rounded-lg bg-neutral-50 border border-neutral-200 mb-4"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-secondary font-medium">{item.system}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-20 h-2 bg-neutral-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-green-500"
                        initial={{ width: '0%' }}
                        whileInView={{ width: `${item.progress}%` }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                      />
                    </div>
                    <span className="text-green-600 text-sm font-semibold">{item.status}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="space-y-8"
          >
            <div className="bg-neutral-0 p-8 rounded-2xl border-2 border-neutral-200 shadow-sm">
              <h3 className="text-3xl font-bold text-emphasis mb-6">
                Partnership Value
              </h3>
              
              <div className="space-y-4">
                {valueProps.map((prop, index) => (
                  <div 
                    key={prop.title}
                    className="p-4 rounded-lg border border-neutral-200 bg-neutral-50"
                  >
                    <div className="text-lg font-semibold text-emphasis mb-2">{prop.title}</div>
                    <div className="text-secondary">{prop.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="text-center"
        >
          <div className="relative mb-12">
            <h3 className="text-5xl lg:text-6xl font-black text-emphasis mb-6 leading-none">
              READY TO
              <span className="block text-secondary text-3xl lg:text-4xl font-light mt-2">
                PARTNER?
              </span>
            </h3>
            
            <p className="text-xl text-secondary max-w-4xl mx-auto leading-relaxed mb-8">
              Your soccer venture transformation starts with a strategic partnership. Join the network that's building the future of the beautiful game.
            </p>
          </div>

          {/* Action Center */}
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
            <button className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-sm hover:shadow-md">
              START PARTNERSHIP
            </button>

            <button className="px-8 py-4 border-2 border-neutral-300 text-secondary text-lg font-semibold rounded-lg bg-neutral-0 hover:bg-neutral-50 transition-all duration-300">
              EXPLORE PORTFOLIO
            </button>
          </div>

          {/* Status indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-12"
          >
            <div className="inline-flex items-center space-x-4 px-6 py-3 bg-neutral-0 rounded-full border border-neutral-200 shadow-sm">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-secondary font-medium text-base">
                Partnership Infrastructure Active
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

ApproachPartnership.displayName = 'ApproachPartnership';

export default ApproachPartnership;