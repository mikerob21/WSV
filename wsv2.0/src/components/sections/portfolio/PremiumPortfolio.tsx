'use client';

import { memo, useState, useMemo, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { portfolioData, PortfolioCompany } from '@/data/portfolio';
import { getCompanyLogoPath, hasCompanyLogo } from '@/lib/portfolio-images';

interface CompanyTileProps {
  company: PortfolioCompany;
  index: number;
}

const CompanyTile = memo<CompanyTileProps>(({ company, index }) => {
  const tileRef = useRef(null);
  const isInView = useInView(tileRef, { once: true, amount: 0.2 });
  
  const logoPath = getCompanyLogoPath(company.name);
  const hasLogo = hasCompanyLogo(company.name);
  const primaryMetric = company.metrics && company.metrics.length > 0 ? company.metrics[0] : null;

  return (
    <motion.div
      ref={tileRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        transition: {
          duration: 0.8,
          delay: (index % 6) * 0.1,
          ease: [0.16, 1, 0.3, 1]
        }
      } : {}}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
      }}
      className="group cursor-pointer"
    >
      <div className="relative h-96 bg-white rounded-2xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-500">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-neutral-100" />
        
        {/* Company Logo Area */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <Image
            src={logoPath}
            alt={`${company.name} logo`}
            width={200}
            height={200}
            className="object-contain group-hover:scale-110 transition-transform duration-500 max-w-full max-h-full"
          />
        </div>

        {/* Enhanced Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/96 via-black/80 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 p-5 flex flex-col justify-end">
            {/* Header */}
            <div className="mb-3">
              <h3 className="text-base font-semibold text-white mb-1 leading-tight">
                {company.name}
              </h3>
              <p className="text-neutral-200 text-xs font-medium uppercase tracking-wider">
                {company.type}
              </p>
            </div>
            
            {/* Company Description - Full Length */}
            <div className="flex-1 mb-4 overflow-hidden">
              <p className="text-white text-sm leading-relaxed">
                {company.description}
              </p>
            </div>
            
            {/* Bottom Row - Metric and Link */}
            <div className="flex items-end justify-between pt-2">
              {/* Key Metric */}
              {primaryMetric && (
                <div className="text-white">
                  <div className="text-sm font-semibold">{primaryMetric.value}</div>
                  <div className="text-xs text-neutral-300">{primaryMetric.label}</div>
                </div>
              )}
              
              {/* Website Link */}
              {company.website && (
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-300 transition-colors duration-200 flex items-center gap-1 text-sm font-medium ml-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>Visit</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Subtle Brand Accent */}
        <div 
          className="absolute top-0 left-0 right-0 h-1 opacity-60"
          style={{ backgroundColor: company.primaryBrandColors?.[0] || '#2563eb' }}
        />
      </div>
    </motion.div>
  );
});

CompanyTile.displayName = 'CompanyTile';

const PremiumPortfolio = memo(() => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });
  
  const [selectedSector, setSelectedSector] = useState<string>('All');

  // Organize companies by sophisticated sectors
  const sectors = useMemo(() => {
    const sectorMap: Record<string, string> = {
      'Soccer Media Platform': 'Media',
      'Professional Soccer Club': 'Organizations',
      'Athletic Enhancement Technology': 'Technology',
      'Athletic Community Platform': 'Community',
      'Sports Training Technology': 'Technology',
      'Soccer Education Platform': 'Education',
      'Athletic Performance Technology': 'Technology',
      'Sports Content Creation': 'Media',
      'Soccer Training Equipment': 'Training',
      'Mental Performance Training': 'Training'
    };

    const sectors = Array.from(new Set(
      portfolioData.map(company => sectorMap[company.type] || 'Other')
    )).sort();
    
    return ['All', ...sectors];
  }, []);

  const filteredCompanies = useMemo(() => {
    if (selectedSector === 'All') return portfolioData;
    
    const sectorMap: Record<string, string> = {
      'Soccer Media Platform': 'Media',
      'Professional Soccer Club': 'Organizations',
      'Athletic Enhancement Technology': 'Technology',
      'Athletic Community Platform': 'Community',
      'Sports Training Technology': 'Technology',
      'Soccer Education Platform': 'Education',
      'Athletic Performance Technology': 'Technology',
      'Sports Content Creation': 'Media',
      'Soccer Training Equipment': 'Training',
      'Mental Performance Training': 'Training'
    };

    return portfolioData.filter(company => 
      (sectorMap[company.type] || 'Other') === selectedSector
    );
  }, [selectedSector]);

  return (
    <div className="min-h-screen bg-white">
      {/* Sophisticated Hero */}
      <section 
        ref={heroRef}
        className="pt-24 pb-16 px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <h1 className="text-3xl lg:text-4xl font-semibold text-neutral-900 mb-4 tracking-tight">
              Our Portfolio
            </h1>
            <p className="text-lg text-neutral-600 font-light leading-relaxed">
              Twelve innovative companies transforming soccer through technology, 
              culture, and community impact.
            </p>
          </motion.div>

          {/* Sophisticated Filter Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 mb-8"
          >
            <div className="flex items-center justify-between border-b border-neutral-200">
              <div className="flex -mb-px">
                {sectors.map((sector, index) => (
                  <button
                    key={sector}
                    onClick={() => setSelectedSector(sector)}
                    className="relative px-6 py-4 text-sm font-medium transition-all duration-300"
                  >
                    <span className={`${
                      selectedSector === sector
                        ? 'text-neutral-900'
                        : 'text-neutral-500 hover:text-neutral-700'
                    }`}>
                      {sector}
                    </span>
                    {selectedSector === sector && (
                      <motion.div
                        layoutId="activeFilter"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isHeroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-between mb-12"
          >
            <div className="text-sm text-neutral-500">
              {filteredCompanies.length} companies
              {selectedSector !== 'All' && ` in ${selectedSector}`}
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-200 to-transparent ml-8" />
          </motion.div>
        </div>
      </section>

      {/* Premium Company Gallery */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredCompanies.map((company, index) => (
                <CompanyTile
                  key={`${company.name}-${selectedSector}`}
                  company={company}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
});

PremiumPortfolio.displayName = 'PremiumPortfolio';

export default PremiumPortfolio;