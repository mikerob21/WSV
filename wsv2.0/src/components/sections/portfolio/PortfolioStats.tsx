'use client';

import { memo, useRef, useState, useEffect, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const AnimatedCounter = memo<AnimatedCounterProps>(({ 
  value, 
  duration = 2000, 
  suffix = '', 
  prefix = '' 
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(easeOutQuart * value);
      
      setDisplayValue(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [isInView, value, duration]);

  return (
    <span ref={counterRef}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
});

AnimatedCounter.displayName = 'AnimatedCounter';

const PortfolioStats = memo(() => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, amount: 0.3 });

  // Calculate portfolio statistics
  const stats = useMemo(() => ({
    totalCompanies: portfolioData.length,
    totalFollowers: portfolioData.reduce((sum, company) => {
      const instagramMetric = company.metrics?.find(m => 
        m.label.toLowerCase().includes('instagram') || 
        m.label.toLowerCase().includes('followers')
      );
      if (instagramMetric) {
        const value = instagramMetric.value.replace(/[^\d.]/g, '');
        const num = parseFloat(value);
        if (instagramMetric.value.includes('K')) return sum + (num * 1000);
        if (instagramMetric.value.includes('M')) return sum + (num * 1000000);
        return sum + num;
      }
      return sum;
    }, 0),
    sectors: new Set(portfolioData.map(c => c.type)).size,
  }), []);

  // Featured stat and others following ApproachStats pattern
  const featuredStat = useMemo(() => ({
    value: stats.totalCompanies,
    label: 'Portfolio Companies',
    description: 'Innovative ventures across the sports ecosystem, from media platforms to professional clubs, technology solutions, and community development initiatives.',
  }), [stats.totalCompanies]);

  const otherStats = useMemo(() => [
    {
      value: Math.round(stats.totalFollowers / 1000),
      suffix: 'K+',
      label: 'Combined Reach',
      description: 'Social media followers across our portfolio companies'
    },
    {
      value: stats.sectors,
      suffix: '',
      label: 'Industry Verticals',
      description: 'Diverse sectors from media to technology'
    },
    {
      value: 85,
      suffix: '%',
      label: 'Success Rate',
      description: 'Companies meeting or exceeding growth targets and strategic milestones'
    }
  ], [stats]);

  return (
    <section 
      ref={statsRef}
      className="relative py-24 overflow-hidden bg-neutral-100"
    >
      {/* Sophisticated background pattern - Following ApproachStats style */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="portfolioStatsGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--blue-300)" strokeWidth="1" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#portfolioStatsGrid)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header - Typography-focused following ApproachStats pattern */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <h2 className="text-6xl lg:text-7xl font-black text-emphasis mb-4 tracking-tight leading-tight">
            PORTFOLIO
            <span className="block text-secondary text-4xl lg:text-5xl font-light pl-8 mt-2">
              IMPACT
            </span>
          </h2>
        </motion.div>

        {/* Asymmetrical Stats Grid - Following ApproachStats layout */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Large Feature Stat - Company Count */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-6 lg:row-span-2"
          >
            <div className="bg-neutral-0 h-full p-8 rounded-2xl relative overflow-hidden border-2 border-neutral-200 hover:shadow-lg transition-all duration-300 shadow-sm">
              <div className="relative z-10">
                <div className="text-7xl lg:text-8xl font-black mb-4 text-emphasis">
                  <AnimatedCounter value={featuredStat.value} duration={2500} />
                </div>
                <div className="text-xl font-bold mb-3 text-secondary">{featuredStat.label}</div>
                <div className="text-base text-muted leading-relaxed">{featuredStat.description}</div>
              </div>
              
              {/* Subtle brand accent */}
              <div className="absolute bottom-6 right-6">
                <div className="w-12 h-12 border-2 border-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Other Stats - Varying sizes for visual interest */}
          {otherStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 1) * 0.2, duration: 1 }}
              className={index === 2 ? "lg:col-span-6" : "lg:col-span-3"}
            >
              <div className={`bg-neutral-0 p-6 h-full border-2 border-neutral-200 relative overflow-hidden rounded-2xl hover:shadow-lg transition-all duration-300 shadow-sm ${
                index === 2 ? 'flex items-center justify-between' : ''
              }`}>
                <div className="relative z-10">
                  <div className="text-4xl lg:text-5xl font-black text-emphasis mb-3">
                    <AnimatedCounter 
                      value={stat.value} 
                      suffix={stat.suffix}
                      duration={2500}
                    />
                  </div>
                  <div className="text-base font-semibold text-secondary mb-2">{stat.label}</div>
                  <div className="text-muted text-sm">{stat.description}</div>
                </div>
                
                {/* Add visual accent for the wide card */}
                {index === 2 && (
                  <div className="w-12 h-12 border-2 border-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Investment Philosophy Section - More sophisticated than emojis */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16"
        >
          <div className="bg-neutral-0 p-8 rounded-2xl border-2 border-neutral-200 shadow-sm">
            <h3 className="text-2xl font-black text-emphasis mb-8 text-center">
              Investment Philosophy
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Strategic Focus */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-2xl border-2 border-blue-100 flex items-center justify-center">
                  {/* Typography-based visual */}
                  <div className="text-2xl font-black text-blue-600">S</div>
                </div>
                <h4 className="text-lg font-bold text-secondary mb-2">Strategic Focus</h4>
                <p className="text-muted text-sm leading-relaxed">
                  Targeted investments in soccer ecosystem innovation and community development
                </p>
              </div>

              {/* Active Partnership */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-2xl border-2 border-blue-100 flex items-center justify-center">
                  {/* Data visualization style */}
                  <div className="flex space-x-1">
                    <div className="w-2 h-8 bg-blue-600 rounded-full"></div>
                    <div className="w-2 h-6 bg-blue-500 rounded-full"></div>
                    <div className="w-2 h-10 bg-blue-700 rounded-full"></div>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-secondary mb-2">Active Partnership</h4>
                <p className="text-muted text-sm leading-relaxed">
                  Hands-on support and strategic guidance for sustainable growth
                </p>
              </div>

              {/* Community Impact */}
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-2xl border-2 border-blue-100 flex items-center justify-center">
                  {/* Network visualization */}
                  <div className="relative">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <div className="absolute -top-1 -right-2 w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="absolute -bottom-1 -left-2 w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="absolute top-2 right-1 w-1 h-1 bg-blue-300 rounded-full"></div>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-secondary mb-2">Community Impact</h4>
                <p className="text-muted text-sm leading-relaxed">
                  Building lasting value beyond financial returns through ecosystem development
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom indicator - Following ApproachStats pattern */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-4 px-6 py-3 bg-neutral-0 rounded-full border border-neutral-200 shadow-sm">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span className="text-secondary font-medium">Transforming Soccer Through Strategic Investment</span>
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

PortfolioStats.displayName = 'PortfolioStats';

export default PortfolioStats;