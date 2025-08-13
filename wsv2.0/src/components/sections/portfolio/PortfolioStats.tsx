'use client';

import { memo, useRef, useState, useEffect, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '@/data/portfolio';
import InteractiveSectorChart from './InteractiveSectorChart';

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
      
      // Sophisticated spring easing
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
    <span ref={counterRef} className="font-numeric">
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
});

AnimatedCounter.displayName = 'AnimatedCounter';

const PortfolioStats = memo(() => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, amount: 0.1 });
  const [selectedSector, setSelectedSector] = useState<string | null>(null);

  // Enhanced portfolio statistics calculation
  const stats = useMemo(() => {
    const totalViews = portfolioData.reduce((sum, company) => {
      const viewMetric = company.metrics?.find(m => 
        m.label.toLowerCase().includes('views') || 
        m.label.toLowerCase().includes('video')
      );
      if (viewMetric) {
        const value = viewMetric.value.replace(/[^\d.]/g, '');
        const num = parseFloat(value);
        if (viewMetric.value.includes('M')) return sum + (num * 1000000);
        if (viewMetric.value.includes('K')) return sum + (num * 1000);
        return sum + num;
      }
      return sum;
    }, 0);

    const totalFollowers = portfolioData.reduce((sum, company) => {
      const socialMetrics = company.metrics?.filter(m => 
        m.label.toLowerCase().includes('followers') || 
        m.label.toLowerCase().includes('reach')
      ) || [];
      
      return sum + socialMetrics.reduce((metricSum, metric) => {
        const value = metric.value.replace(/[^\d.]/g, '');
        const num = parseFloat(value);
        if (metric.value.includes('M')) return metricSum + (num * 1000000);
        if (metric.value.includes('K')) return metricSum + (num * 1000);
        return metricSum + num;
      }, 0);
    }, 0);

    const partnerships = portfolioData.reduce((sum, company) => {
      return sum + (company.keyPartnerships?.length || 0);
    }, 0);

    return {
      totalCompanies: portfolioData.length,
      totalViews: Math.round(totalViews / 1000000),
      totalFollowers: Math.round(totalFollowers / 1000),
      partnerships,
      sectors: new Set(portfolioData.map(c => c.type)).size,
    };
  }, []);

  // Sleek key metrics for sophisticated display
  const keyMetrics = useMemo(() => [
    {
      value: stats.totalViews,
      suffix: 'M+',
      label: 'Total Views',
      description: 'Combined content reach'
    },
    {
      value: stats.totalFollowers,
      suffix: 'K+',
      label: 'Social Following',
      description: 'Engaged community'
    },
    {
      value: stats.partnerships,
      suffix: '+',
      label: 'Partnerships',
      description: 'Strategic alliances'
    }
  ], [stats]);

  return (
    <section 
      ref={statsRef}
      className="relative min-h-screen pt-24 pb-12 overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-blue-50/30"
    >
      {/* Sophisticated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-200/10 rounded-full blur-2xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Sophisticated Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-blue-600"></div>
            <span className="caption text-blue-600 tracking-wider">PORTFOLIO OVERVIEW</span>
            <div className="w-12 h-px bg-blue-600"></div>
          </div>
          
          <h1 className="display-hero mb-8 text-balance">
            Strategic Impact
          </h1>
          
          <p className="body-large text-secondary max-w-2xl mx-auto text-balance leading-relaxed">
            Transforming soccer through strategic investments in innovative companies across 
            media, technology, and community development.
          </p>
        </motion.div>

        {/* Interactive Sector Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="card-glass p-12">
            <InteractiveSectorChart
              onSectorHover={(sector) => console.log('Hovered:', sector)}
              onSectorClick={(sector) => setSelectedSector(sector.sector)}
            />
          </div>
        </motion.div>

        {/* Key Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {keyMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.5 + (index * 0.1),
                ease: [0.16, 1, 0.3, 1]
              }}
              className="group"
            >
              <div className="card-sleek p-8 text-center">
                <motion.div 
                  className="text-4xl font-black text-blue-600 mb-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <AnimatedCounter 
                    value={metric.value}
                    suffix={metric.suffix}
                    duration={2000 + (index * 300)}
                  />
                </motion.div>
                <h3 className="heading-tertiary mb-2 group-hover:text-blue-900 transition-colors duration-300">
                  {metric.label}
                </h3>
                <p className="body-small text-secondary">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Investment Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-secondary mb-4 text-balance">
              Investment Philosophy
            </h2>
            <div className="w-24 h-px bg-blue-600 mx-auto mb-12"></div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Strategic Focus",
                  description: "Targeted investments in soccer ecosystem innovation with measurable impact",
                },
                {
                  title: "Active Partnership", 
                  description: "Hands-on support and strategic guidance for sustainable long-term growth",
                },
                {
                  title: "Community Impact",
                  description: "Building lasting value beyond financial returns through ecosystem development",
                }
              ].map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + (index * 0.1),
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="group"
                >
                  <div className="card-sleek p-6 text-center h-full">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 font-black text-lg">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 className="heading-tertiary mb-3 group-hover:text-blue-900 transition-colors duration-300">
                      {principle.title}
                    </h3>
                    <p className="body-small text-secondary leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

PortfolioStats.displayName = 'PortfolioStats';

export default PortfolioStats;