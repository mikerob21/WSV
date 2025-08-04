'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { portfolioData, getCompanyIcon, getPrimaryColor, type PortfolioCompany } from '@/data/portfolio';

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedCompany, setSelectedCompany] = useState<PortfolioCompany>(portfolioData[0]);

  return (
    <section 
      ref={ref} 
      className="bg-white py-12 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="display-section text-emphasis mb-4">
            Elite Portfolio
          </h2>
          <p className="body-large text-secondary max-w-3xl mx-auto">
            Strategic investments transforming the soccer ecosystem through innovation, culture, and technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Company Selection */}
          <div className="lg:col-span-1">
            <div className="space-y-3">
              {portfolioData.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedCompany(company)}
                  className={`cursor-pointer p-4 rounded-xl border transition-all duration-300 ${
                    selectedCompany.name === company.name
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                      : 'bg-white/80 backdrop-blur-sm hover:bg-white border-neutral-200 hover:border-blue-200 shadow-md hover:shadow-lg'
                  }`}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className={`text-lg p-2 rounded-lg ${
                        selectedCompany.name === company.name ? 'bg-white/20' : 'bg-neutral-100'
                      }`}
                    >
                      {getCompanyIcon(company.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`label mb-1 truncate ${
                        selectedCompany.name === company.name ? 'text-white' : 'text-emphasis'
                      }`}>
                        {company.name}
                      </h3>
                      <p className={`body-small truncate ${
                        selectedCompany.name === company.name ? 'text-white/90' : 'text-secondary'
                      }`}>
                        {company.competitiveAdvantage}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Selected Company Details */}
          <motion.div
            key={selectedCompany.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-neutral-200/50 shadow-xl">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div 
                      className="text-white text-2xl p-3 rounded-xl shadow-md"
                      style={{ backgroundColor: getPrimaryColor(selectedCompany.primaryBrandColors) }}
                    >
                      {getCompanyIcon(selectedCompany.type)}
                    </div>
                    <div>
                      <h3 className="heading-primary text-emphasis mb-1">
                        {selectedCompany.name}
                      </h3>
                      <p className="label text-secondary">
                        {selectedCompany.type}
                      </p>
                      {selectedCompany.foundedYear && (
                        <p className="caption text-muted mt-1">
                          Founded {selectedCompany.foundedYear}
                        </p>
                      )}
                    </div>
                  </div>
                  <div 
                    className="text-white label px-4 py-2 rounded-full shadow-md"
                    style={{ backgroundColor: getPrimaryColor(selectedCompany.primaryBrandColors) }}
                  >
                    {selectedCompany.competitiveAdvantage}
                  </div>
                </div>
                
                <p className="body-default text-secondary mb-4">
                  {selectedCompany.description}
                </p>

                {/* Website Link */}
                <a 
                  href={selectedCompany.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-brand hover:text-brand-dark label transition-colors"
                >
                  <span>Visit Website</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                {selectedCompany.metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + (index * 0.1) }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="text-center bg-neutral-50/70 hover:bg-neutral-100/70 p-3 lg:p-4 rounded-lg border border-neutral-200/50 transition-all duration-300 backdrop-blur-sm"
                  >
                    <div className="mono-large mb-1 font-numeric"
                      style={{ color: getPrimaryColor(selectedCompany.primaryBrandColors) }}
                    >
                      {metric.value}
                    </div>
                    <div className="body-small text-secondary">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Recent Achievements */}
              <div className="mb-6">
                <h4 className="heading-tertiary text-emphasis mb-3">Recent Achievements</h4>
                <div className="space-y-2">
                  {selectedCompany.recentAchievements.slice(0, 3).map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (index * 0.1) }}
                      className="flex items-start space-x-2"
                    >
                      <div 
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: getPrimaryColor(selectedCompany.primaryBrandColors) }}
                      />
                      <span className="body-default text-secondary">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Industry Tags */}
              <div className="flex flex-wrap gap-2">
                {selectedCompany.industryTags.map((tag) => (
                  <span
                    key={tag}
                    className="caption bg-neutral-100/70 text-muted px-3 py-1 rounded-full border border-neutral-200/50 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}