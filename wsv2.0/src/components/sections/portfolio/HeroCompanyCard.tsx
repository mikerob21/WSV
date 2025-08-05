'use client';

import { memo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PortfolioCompany } from '@/data/portfolio';

interface HeroCompanyCardProps {
  company: PortfolioCompany;
  index: number;
  featured?: boolean;
}

const HeroCompanyCard = memo<HeroCompanyCardProps>(({ 
  company, 
  index, 
  featured = false 
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const primaryColor = company.primaryBrandColors?.[0] || '#4A90E2';
  const accentColor = company.primaryBrandColors?.[1] || '#FFFFFF';

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`group ${featured ? 'lg:col-span-2' : ''}`}
    >
      <div className="surface-elevated hover-depth cursor-magnetic h-full">
        <div className="p-8 content-spacing h-full flex flex-col">
          {/* Company Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div 
                className="inline-flex items-center px-4 py-2 rounded-full caption mb-4 animate-elastic-entrance"
                style={{ 
                  backgroundColor: `${primaryColor}15`,
                  color: primaryColor
                }}
              >
                {company.type}
              </div>
              <h3 className="heading-primary text-emphasis mb-2 floating-text">
                {company.name}
              </h3>
              {company.website && (
                <a 
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="body-small text-brand hover:underline"
                >
                  {company.website.replace('https://', '').replace('www.', '')}
                </a>
              )}
            </div>
            
            {/* Brand Color Indicator */}
            <div className="flex space-x-2 ml-4">
              {company.primaryBrandColors?.slice(0, 2).map((color, colorIndex) => (
                <div
                  key={colorIndex}
                  className="w-4 h-4 rounded-full animate-elastic-entrance"
                  style={{ 
                    backgroundColor: color,
                    animationDelay: `${colorIndex * 100}ms`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="body-default text-secondary mb-6 flex-grow">
            {company.description}
          </p>

          {/* Key Metrics */}
          {company.metrics && company.metrics.length > 0 && (
            <div className="space-y-4 mb-6">
              <h4 className="label text-emphasis">Key Metrics</h4>
              <div className="grid grid-cols-2 gap-4">
                {company.metrics.slice(0, 4).map((metric, metricIndex) => (
                  <div 
                    key={metricIndex}
                    className="p-3 rounded-xl surface-frosted text-center stagger-container"
                  >
                    <div 
                      className="heading-tertiary mb-1"
                      style={{ color: primaryColor }}
                    >
                      {metric.value}
                    </div>
                    <div className="caption text-muted">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Competitive Advantage */}
          {company.competitiveAdvantage && (
            <div className="mt-auto pt-4 border-t border-neutral-200">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-3 h-3 rounded-full animate-elastic-entrance"
                  style={{ backgroundColor: primaryColor }}
                />
                <span className="body-small text-emphasis">
                  {company.competitiveAdvantage}
                </span>
              </div>
            </div>
          )}

          {/* Recent Achievements */}
          {company.recentAchievements && company.recentAchievements.length > 0 && (
            <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-neutral-50 to-neutral-100">
              <div className="flex items-start space-x-3">
                <div 
                  className="w-2 h-2 rounded-full mt-2 animate-elastic-entrance"
                  style={{ backgroundColor: primaryColor }}
                />
                <div>
                  <div className="caption text-brand mb-1">Latest Achievement</div>
                  <div className="body-small text-secondary">
                    {company.recentAchievements[0]}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
});

HeroCompanyCard.displayName = 'HeroCompanyCard';

export default HeroCompanyCard;