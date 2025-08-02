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
      className="bg-gradient-to-br from-slate-50 via-white to-emerald-50 py-24 px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
            Elite Portfolio
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Strategic investments transforming the soccer ecosystem through innovation, culture, and technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Company Selection */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {portfolioData.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedCompany(company)}
                  className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                    selectedCompany.name === company.name
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-emerald-500 shadow-xl shadow-emerald-500/25'
                      : 'bg-white/80 backdrop-blur-sm hover:bg-white border-slate-200 hover:border-emerald-200 shadow-lg hover:shadow-xl'
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className={`text-2xl p-3 rounded-xl ${
                        selectedCompany.name === company.name ? 'bg-white/20' : 'bg-slate-100'
                      }`}
                    >
                      {getCompanyIcon(company.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-lg font-bold mb-1 truncate ${
                        selectedCompany.name === company.name ? 'text-white' : 'text-slate-900'
                      }`}>
                        {company.name}
                      </h3>
                      <p className={`text-sm font-medium truncate ${
                        selectedCompany.name === company.name ? 'text-white/90' : 'text-slate-600'
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
            <div className="bg-white/90 backdrop-blur-sm p-8 lg:p-10 rounded-3xl border border-slate-200/50 shadow-2xl">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div 
                      className="text-white text-4xl p-4 rounded-2xl shadow-lg"
                      style={{ backgroundColor: getPrimaryColor(selectedCompany.primaryBrandColors) }}
                    >
                      {getCompanyIcon(selectedCompany.type)}
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-slate-900 mb-2">
                        {selectedCompany.name}
                      </h3>
                      <p className="text-lg font-semibold text-slate-600">
                        {selectedCompany.type}
                      </p>
                      {selectedCompany.foundedYear && (
                        <p className="text-sm text-slate-500 mt-1">
                          Founded {selectedCompany.foundedYear}
                        </p>
                      )}
                    </div>
                  </div>
                  <div 
                    className="text-white font-bold px-6 py-3 rounded-full text-sm shadow-lg"
                    style={{ backgroundColor: getPrimaryColor(selectedCompany.primaryBrandColors) }}
                  >
                    {selectedCompany.competitiveAdvantage}
                  </div>
                </div>
                
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  {selectedCompany.description}
                </p>

                {/* Website Link */}
                <a 
                  href={selectedCompany.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                >
                  <span>Visit Website</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {selectedCompany.metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + (index * 0.1) }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="text-center bg-slate-50/70 hover:bg-slate-100/70 p-4 lg:p-6 rounded-xl border border-slate-200/50 transition-all duration-300 backdrop-blur-sm"
                  >
                    <div className="text-2xl lg:text-3xl font-black mb-2"
                      style={{ color: getPrimaryColor(selectedCompany.primaryBrandColors) }}
                    >
                      {metric.value}
                    </div>
                    <div className="text-xs lg:text-sm font-medium text-slate-600 leading-tight">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Recent Achievements */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-slate-900 mb-4">Recent Achievements</h4>
                <div className="space-y-2">
                  {selectedCompany.recentAchievements.slice(0, 3).map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (index * 0.1) }}
                      className="flex items-center space-x-3"
                    >
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: getPrimaryColor(selectedCompany.primaryBrandColors) }}
                      />
                      <span className="text-slate-700 text-sm">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Industry Tags */}
              <div className="flex flex-wrap gap-2">
                {selectedCompany.industryTags.map((tag) => (
                  <span
                    key={tag}
                    className="font-medium bg-slate-100/70 text-slate-700 px-3 py-1 text-sm rounded-full border border-slate-200/50 backdrop-blur-sm"
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