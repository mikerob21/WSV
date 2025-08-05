'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

interface ImpactMetric {
  value: string;
  label: string;
  change: string;
  icon: string;
  description: string;
}


export default function FeaturedAchievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);

  // Key investment impact metrics
  const impactMetrics: ImpactMetric[] = [
    {
      value: "12",
      label: "Portfolio Companies",
      change: "+3 in 2024",
      icon: "",
      description: "Active investments across soccer ecosystem"
    },
    {
      value: "200M+",
      label: "Total Video Views",
      change: "+150M YoY",
      icon: "",
      description: "Combined reach across media platforms"
    },
    {
      value: "$7.5M",
      label: "Revenue Impact",
      change: "+85% growth",
      icon: "",
      description: "Additional revenue generated for partners"
    },
    {
      value: "25+",
      label: "Strategic Partnerships",
      change: "+12 in 2024",
      icon: "",
      description: "Major brand and club collaborations"
    }
  ];

  // Animate counter values
  useEffect(() => {
    if (!isInView) return;
    
    const targetValues = [12, 200, 7.5, 25];
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedValues(targetValues.map(target => 
        Math.floor(target * progress)
      ));
      
      if (currentStep >= steps) {
        clearInterval(interval);
        setAnimatedValues(targetValues);
      }
    }, stepDuration);
    
    return () => clearInterval(interval);
  }, [isInView]);
  

  return (
    <section ref={ref} className="relative py-8 pb-12 px-6 lg:px-8 bg-blue-50 overflow-hidden">

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
            Investment Impact
          </h2>
          <p className="text-base text-neutral-600 max-w-2xl mx-auto">
            Measurable growth and success across our portfolio ecosystem.
          </p>
        </motion.div>

        {/* Impact Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white border border-neutral-200 rounded-lg p-4 hover:shadow-md transition-all duration-300">
                {/* Value with Animation */}
                <div className="mb-3">
                  <motion.div className="text-xl md:text-2xl font-bold text-neutral-900 mb-1 leading-tight">
                    {index === 0 ? animatedValues[0] : 
                     index === 1 ? `${animatedValues[1]}M+` :
                     index === 2 ? `$${animatedValues[2]}M` :
                     `${animatedValues[3]}+`}
                  </motion.div>
                  <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">{metric.label}</div>
                </div>
                
                {/* Change Indicator */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-xs text-blue-600 font-medium">{metric.change}</span>
                </div>
                
                {/* Description */}
                <p className="text-xs text-neutral-600 leading-relaxed">{metric.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="bg-white border border-neutral-200 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-neutral-900">Rapid Growth</h3>
            </div>
            <p className="text-sm text-neutral-600">Portfolio companies achieving 85%+ average growth rates</p>
          </div>

          <div className="bg-white border border-neutral-200 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-neutral-900">Strategic Focus</h3>
            </div>
            <p className="text-sm text-neutral-600">Targeted investments in soccer technology and media</p>
          </div>

          <div className="bg-white border border-neutral-200 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-neutral-900">Market Leaders</h3>
            </div>
            <p className="text-sm text-neutral-600">Companies becoming recognized industry leaders</p>
          </div>
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-8 pt-6 border-t border-neutral-200"
        >
          <div className="text-center mb-4">
            <h3 className="text-lg font-bold text-neutral-900 mb-1">
              Gallery
            </h3>
            <p className="text-sm text-neutral-600">
              Behind the scenes with our portfolio companies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="relative aspect-video rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src="/images/gallery/drip-fc.webp"
                alt="Drip FC - Soccer Culture Brand"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <p className="text-sm font-semibold">Drip FC</p>
                <p className="text-xs opacity-90">Soccer Culture Brand</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="relative aspect-video rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src="/images/gallery/the-town.webp"
                alt="The Town FC - Professional Soccer Club"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <p className="text-sm font-semibold">The Town FC</p>
                <p className="text-xs opacity-90">Professional Soccer Club</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="relative aspect-video rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src="/images/gallery/dunde.webp"
                alt="Odunde Sports - Sports Development Platform"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-3 left-3 text-white">
                <p className="text-sm font-semibold">Odunde Sports</p>
                <p className="text-xs opacity-90">Sports Development Platform</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
} 