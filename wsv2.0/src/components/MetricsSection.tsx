'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { portfolioData } from '@/data/portfolio';

interface MetricCardProps {
  value: string;
  label: string;
  description: string;
  icon: string;
  delay: number;
  color: string;
}

const MetricCard = ({ value, label, description, icon, delay, color }: MetricCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    if (isInView) {
      // Animate the value display
      const timer = setTimeout(() => {
        setDisplayValue(value);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 50 }}
      transition={{ duration: 0.8, delay: delay, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
        style={{ background: `linear-gradient(135deg, ${color}15, ${color}05)` }}
      />
      
      {/* Icon */}
      <div className="relative mb-6">
        <motion.div
          animate={isInView ? { rotate: [0, 10, -10, 0] } : {}}
          transition={{ duration: 2, delay: delay + 0.5 }}
          className="text-6xl mb-4"
        >
          {icon}
        </motion.div>
      </div>

      {/* Value */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.8, delay: delay + 0.3, type: "spring" }}
        className="text-5xl lg:text-6xl font-black mb-4"
        style={{ color }}
      >
        {displayValue}
      </motion.div>

      {/* Label */}
      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
        {label}
      </h3>

      {/* Description */}
      <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
        {description}
      </p>

      {/* Floating particles */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3] 
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          delay: delay 
        }}
        className="absolute top-4 right-4 w-2 h-2 rounded-full"
        style={{ backgroundColor: color }}
      />
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.2, 0.5, 0.2] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          delay: delay + 1 
        }}
        className="absolute bottom-8 right-8 w-1 h-1 rounded-full"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
};

export default function MetricsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Calculate combined metrics from portfolio data
  const combinedMetrics = [
    {
      value: "200M+",
      label: "Total Video Views",
      description: "Combined reach across all media platforms, establishing WSV as a dominant force in soccer content.",
      icon: "📱",
      color: "#00A651"
    },
    {
      value: "380K+",
      label: "Social Media Followers",
      description: "Engaged community across Instagram, TikTok, Twitter, and other platforms driving cultural influence.",
      icon: "👥",
      color: "#4A90E2"
    },
    {
      value: "6",
      label: "Portfolio Companies",
      description: "Strategic investments spanning media, technology, clubs, and cultural brands transforming soccer.",
      icon: "🏢",
      color: "#6A4C93"
    },
    {
      value: "15+",
      label: "Key Partnerships",
      description: "Major collaborations with MLS clubs, tech giants, and industry leaders amplifying our ecosystem impact.",
      icon: "🤝",
      color: "#00CED1"
    }
  ];

  return (
    <section ref={ref} className="relative py-24 px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse" />
      </div>

      {/* Floating Orbs */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Portfolio Impact
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
          >
            Our strategic investments are reshaping the global soccer landscape through innovation, 
            community building, and technological advancement.
          </motion.p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {combinedMetrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              value={metric.value}
              label={metric.label}
              description={metric.description}
              icon={metric.icon}
              delay={index * 0.2}
              color={metric.color}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center justify-center space-x-3">
              <span>Explore Our Investment Approach</span>
              <motion.svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 