'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { portfolioData, getCompanyIcon, type PortfolioCompany } from '@/data/portfolio';

// Portfolio Modal Component
function PortfolioModal({ company, isOpen, onClose }: { 
  company: PortfolioCompany | null; 
  isOpen: boolean; 
  onClose: () => void; 
}) {
  if (!company) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-white rounded-2xl z-50 overflow-hidden shadow-2xl"
          >
            <div className="h-full overflow-y-auto">
              {/* Header */}
              <div className="p-8 bg-white border-b border-neutral-100 relative">
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 bg-neutral-50 rounded-2xl flex items-center justify-center p-4 border border-neutral-200">
                    {company.logoUrl ? (
                      <div className="relative w-16 h-16">
                        <Image
                          src={company.logoUrl}
                          alt={`${company.name} logo`}
                          fill
                          className="object-contain"
                          sizes="64px"
                        />
                      </div>
                    ) : (
                      <div className="text-neutral-500 text-2xl">
                        {getCompanyIcon(company.type)}
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-2 text-neutral-900">{company.name}</h2>
                    <p className="text-neutral-600 mb-3 text-lg">{company.type}</p>
                    <div className="inline-flex items-center bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                      {company.competitiveAdvantage}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-neutral-900">About</h3>
                  <p className="text-neutral-700 leading-relaxed">{company.description}</p>
                </div>
                
                {/* Metrics Grid */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-neutral-900">Key Metrics</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {company.metrics.map((metric, index) => (
                      <div key={index} className="bg-neutral-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">{metric.value}</div>
                        <div className="text-sm text-neutral-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Recent Achievements */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-neutral-900">Recent Achievements</h3>
                  <div className="space-y-2">
                    {company.recentAchievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-neutral-700 text-sm">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Partnerships */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-neutral-900">Key Partnerships</h3>
                  <div className="flex flex-wrap gap-2">
                    {company.keyPartnerships.map((partnership, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                        {partnership}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Website Link */}
                <div className="pt-4 border-t border-neutral-200">
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Visit Website
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCompany, setSelectedCompany] = useState<PortfolioCompany | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 3) % portfolioData.length);
    }, 4000); // Change every 4 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  const handleCompanyClick = (company: PortfolioCompany) => {
    setSelectedCompany(company);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCompany(null);
  };
  
  // Get current 3 companies to display
  const getCurrentCompanies = () => {
    const companies = [];
    for (let i = 0; i < 3; i++) {
      companies.push(portfolioData[(currentIndex + i) % portfolioData.length]);
    }
    return companies;
  };

  return (
    <>
      <section 
        ref={ref} 
        className="bg-gradient-to-b from-white to-neutral-50 py-8 px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-2">
              Diverse Portfolio
            </h2>
            <p className="text-sm text-neutral-600 max-w-2xl mx-auto">
              Strategic investments driving soccer ecosystem innovation.
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur-sm border border-neutral-200/50 p-5 shadow-lg">
            <motion.div
              key={currentIndex}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {getCurrentCompanies().map((company, index) => (
                <motion.div
                  key={`${company.name}-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -8 }}
                  className="group relative bg-white rounded-2xl border border-neutral-200 hover:border-blue-300 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer backdrop-blur-sm"
                  onClick={() => handleCompanyClick(company)}
                >
                  <div className="p-4 text-center">
                    {/* Logo - Prominent but Professional */}
                    <div className="w-20 h-20 mx-auto mb-3 bg-white rounded-xl flex items-center justify-center p-3 shadow-sm border border-neutral-100 group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                      {company.logoUrl ? (
                        <div className="relative w-16 h-16">
                          <Image
                            src={company.logoUrl}
                            alt={`${company.name} logo`}
                            fill
                            className="object-contain"
                            sizes="64px"
                          />
                        </div>
                      ) : (
                        <div className="text-neutral-400 text-2xl">
                          {getCompanyIcon(company.type)}
                        </div>
                      )}
                    </div>
                    
                    {/* Company Name */}
                    <h3 className="font-bold text-neutral-900 text-base mb-2 group-hover:text-blue-600 transition-colors">
                      {company.name}
                    </h3>
                    
                    {/* Company Type */}
                    <p className="text-neutral-500 mb-3 text-xs">
                      {company.type}
                    </p>
                    
                    {/* Key Metric */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-2 mb-3 border border-blue-200">
                      <div className="text-xl font-bold text-blue-700 mb-1">
                        {company.metrics[0]?.value}
                      </div>
                      <div className="text-xs text-blue-600 font-medium">
                        {company.metrics[0]?.label}
                      </div>
                    </div>
                    
                    {/* Competitive Advantage */}
                    <div className="inline-flex items-center bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-xs font-medium group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
                      {company.competitiveAdvantage}
                    </div>
                  </div>
                  
                  {/* Click indicator */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: Math.ceil(portfolioData.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * 3)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / 3) === index
                      ? 'w-6 bg-blue-600'
                      : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Modal */}
      <PortfolioModal 
        company={selectedCompany}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}