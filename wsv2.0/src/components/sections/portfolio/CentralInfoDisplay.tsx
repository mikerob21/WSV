'use client';

import { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { PortfolioCompany } from '@/data/portfolio';
import { getCompanyLogoPath } from '@/lib/portfolio-images';

interface CentralInfoDisplayProps {
  company: PortfolioCompany | null;
}

const CentralInfoDisplay = memo<CentralInfoDisplayProps>(({ company }) => {
  const defaultVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const companyVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.3
      }
    }
  };

  if (!company) {
    return (
      <motion.div
        variants={defaultVariants}
        initial="hidden"
        animate="visible"
        className="min-h-[400px] flex flex-col justify-center items-center text-center px-8"
      >
        <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center">
          <svg className="w-12 h-12 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        
        <h3 className="text-2xl font-black text-emphasis mb-4">
          Portfolio Companies
        </h3>
        
        <p className="text-secondary leading-relaxed max-w-md">
          Hover over any company to explore our investments in soccer innovation, technology, and community impact.
        </p>
      </motion.div>
    );
  }

  const primaryColor = company.primaryBrandColors?.[0] || '#2563eb';
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 37, g: 99, b: 235 };
  };
  const rgb = hexToRgb(primaryColor);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={company.name}
        variants={companyVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="min-h-[400px] flex flex-col justify-center text-center px-8"
      >
        {/* Company Logo */}
        {getCompanyLogoPath(company.name) && (
          <div className="flex justify-center mb-6">
            <div className="p-6 bg-white rounded-3xl shadow-sm border border-neutral-200">
              <Image
                src={getCompanyLogoPath(company.name)!}
                alt={`${company.name} logo`}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        )}

        {/* Brand Color Accent */}
        <div
          className="w-16 h-1 rounded-full mx-auto mb-6"
          style={{ backgroundColor: primaryColor }}
        />

        {/* Company Name */}
        <h2 className="text-3xl font-black text-emphasis mb-3 leading-tight">
          {company.name}
        </h2>

        {/* Company Type */}
        <p 
          className="font-bold text-lg mb-6 tracking-wide"
          style={{ color: primaryColor }}
        >
          {company.type}
        </p>

        {/* Description */}
        <p className="text-secondary leading-relaxed mb-8 max-w-lg mx-auto">
          {company.description}
        </p>

        {/* Key Metrics */}
        {company.metrics && company.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-4 mb-6 max-w-md mx-auto">
            {company.metrics.slice(0, 2).map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="p-4 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl border border-neutral-200"
              >
                <div 
                  className="text-2xl font-black mb-1"
                  style={{ color: primaryColor }}
                >
                  {metric.value}
                </div>
                <div className="text-secondary font-medium text-sm">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Competitive Advantage */}
        {company.competitiveAdvantage && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center space-x-3 p-4 rounded-2xl max-w-lg mx-auto"
            style={{
              backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.05)`,
              border: `1px solid rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)`,
            }}
          >
            <div 
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: primaryColor }}
            />
            <span className="text-emphasis font-semibold text-sm">
              {company.competitiveAdvantage}
            </span>
          </motion.div>
        )}

        {/* Website Link */}
        {company.website && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6"
          >
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-secondary hover:text-emphasis transition-colors duration-200 font-medium text-sm"
            >
              <span>{company.website.replace('https://', '').replace('www.', '')}</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
});

CentralInfoDisplay.displayName = 'CentralInfoDisplay';

export default CentralInfoDisplay;