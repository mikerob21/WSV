'use client';

import { memo, useRef, useState, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { portfolioData, PortfolioCompany } from '@/data/portfolio';
import { getCompanyLogoPath, hasCompanyLogo } from '@/lib/portfolio-images';

interface PortfolioCardProps {
  company: PortfolioCompany;
  index: number;
}

const PortfolioCard = memo<PortfolioCardProps>(({ company, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  const primaryColor = company.primaryBrandColors?.[0] || '#4A90E2';
  const logoPath = getCompanyLogoPath(company.name);
  const hasLogo = hasCompanyLogo(company.name);
  
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 74, g: 144, b: 226 };
  };
  
  const rgb = hexToRgb(primaryColor);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          duration: 0.8,
          delay: (index % 6) * 0.1,
          ease: [0.16, 1, 0.3, 1]
        }
      } : {}}
      className="group"
    >
      <div className="surface-elevated hover-depth cursor-magnetic h-full overflow-hidden">
        {/* Brand Color Header */}
        <div 
          className="h-2 w-full"
          style={{ 
            background: `linear-gradient(90deg, ${primaryColor}, ${company.primaryBrandColors?.[1] || primaryColor})`
          }}
        />
        
        <div className="p-6 content-spacing h-full flex flex-col">
          {/* Company Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div 
                className="inline-flex items-center px-3 py-1 rounded-full caption mb-3"
                style={{ 
                  backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)`,
                  color: primaryColor
                }}
              >
                {company.type}
              </div>
              <h3 className="heading-tertiary text-emphasis mb-2 group-hover:text-brand transition-colors duration-300">
                {company.name}
              </h3>
            </div>
            
            {/* Company Logo or Brand Indicator */}
            <div className="flex-shrink-0 ml-4">
              {hasLogo && logoPath ? (
                <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center p-2 animate-elastic-entrance">
                  <Image
                    src={logoPath}
                    alt={`${company.name} logo`}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
              ) : (
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold caption animate-elastic-entrance"
                  style={{ backgroundColor: primaryColor }}
                >
                  {company.name.charAt(0)}
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="body-small text-secondary mb-4 flex-grow line-clamp-3">
            {company.description}
          </p>

          {/* Key Metric */}
          {company.metrics && company.metrics.length > 0 && (
            <div className="mb-4 p-3 rounded-xl bg-gradient-to-r from-neutral-50 to-neutral-100">
              <div className="flex items-center justify-between">
                <div>
                  <div 
                    className="label mb-1"
                    style={{ color: primaryColor }}
                  >
                    {company.metrics[0].value}
                  </div>
                  <div className="caption text-muted">
                    {company.metrics[0].label}
                  </div>
                </div>
                <div 
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: primaryColor }}
                />
              </div>
            </div>
          )}

          {/* Competitive Advantage */}
          <div className="mt-auto pt-4 border-t border-neutral-200">
            <div className="flex items-center space-x-3">
              <div 
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: primaryColor }}
              />
              <span className="caption text-secondary">
                {company.competitiveAdvantage}
              </span>
            </div>
          </div>

          {/* Website Link */}
          {company.website && (
            <div className="mt-3">
              <a 
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="caption text-brand hover:underline transition-colors duration-200"
              >
                Visit Website →
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
});

PortfolioCard.displayName = 'PortfolioCard';

const PortfolioGrid = memo(() => {
  const gridRef = useRef(null);
  const isInView = useInView(gridRef, { once: true, amount: 0.2 });
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Get unique categories
  const categories = useMemo(() => {
    const types = portfolioData.map(company => company.type);
    const uniqueTypes = Array.from(new Set(types));
    return ['All', ...uniqueTypes.sort()];
  }, []);

  // Filter companies based on selected category
  const filteredCompanies = useMemo(() => {
    if (selectedCategory === 'All') {
      return portfolioData;
    }
    return portfolioData.filter(company => company.type === selectedCategory);
  }, [selectedCategory]);

  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section 
      ref={gridRef}
      className="py-20 px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16 spacing-fibonacci-3"
        >
          <h2 className="display-section mb-6 text-balance">
            Complete Portfolio
          </h2>
          <p className="body-large text-secondary max-w-3xl mx-auto mb-8">
            Discover our full ecosystem of innovative companies transforming sports, 
            technology, and community engagement.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full label transition-all duration-300 hover-magnetic ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'surface-frosted text-secondary hover:text-emphasis hover:shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          animate={{ 
            opacity: 1,
            transition: { duration: 0.5 }
          }}
          key={selectedCategory} // Re-animate when category changes
        >
          {filteredCompanies.map((company, index) => (
            <PortfolioCard
              key={`${company.name}-${selectedCategory}`}
              company={company}
              index={index}
            />
          ))}
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="body-small text-secondary">
            Showing {filteredCompanies.length} {filteredCompanies.length === 1 ? 'company' : 'companies'}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
        </motion.div>
      </div>
    </section>
  );
});

PortfolioGrid.displayName = 'PortfolioGrid';

export default PortfolioGrid;