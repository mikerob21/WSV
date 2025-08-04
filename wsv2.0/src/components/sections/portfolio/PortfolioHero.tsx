'use client';

import { memo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { FloatingOrbs } from '@/components/business';
import { portfolioData, PortfolioCompany } from '@/data/portfolio';
import { useStableHover } from '@/hooks/useStableHover';
import { getCompanyLogoPath } from '@/lib/portfolio-images';
import CentralInfoDisplay from './CentralInfoDisplay';

interface CompanyOrbProps {
  company: PortfolioCompany;
  index: number;
  onHoverStart: (company: PortfolioCompany) => void;
  onHoverEnd: () => void;
}

const CompanyOrb = memo<CompanyOrbProps>(({ 
  company, 
  index, 
  onHoverStart,
  onHoverEnd
}) => {
  const primaryColor = company.primaryBrandColors?.[0] || '#2563eb';
  const logoPath = getCompanyLogoPath(company.name);
  
  // Create elegant company name abbreviation for fallback
  const getCompanyAbbreviation = (name: string) => {
    const words = name.split(' ');
    if (words.length === 1) return words[0].substring(0, 3);
    return words.map(word => word.charAt(0)).join('').substring(0, 3);
  };

  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
      viewport={{ once: true }}
      onHoverStart={() => onHoverStart(company)}
      onHoverEnd={onHoverEnd}
    >
      {/* Professional White Orb */}
      <div className="relative">
        <div
          className="w-40 h-40 rounded-full bg-white border border-neutral-200 flex items-center justify-center relative overflow-hidden group-hover:border-neutral-300 transition-all duration-300"
          style={{
            boxShadow: `
              0 4px 20px rgba(0, 0, 0, 0.08),
              0 1px 3px rgba(0, 0, 0, 0.05)
            `,
          }}
        >
          {/* Subtle brand color accent on hover */}
          <div 
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-5 transition-opacity duration-300"
            style={{ backgroundColor: primaryColor }}
          />
          
          {/* Company Logo or Fallback Typography */}
          {logoPath ? (
            <Image
              src={logoPath}
              alt={`${company.name} logo`}
              width={80}
              height={80}
              className="object-contain"
            />
          ) : (
            <div className="text-center">
              <div
                className="text-2xl font-black tracking-wide mb-1"
                style={{ color: primaryColor }}
              >
                {getCompanyAbbreviation(company.name)}
              </div>
              <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                {company.type.split(' ')[0]}
              </div>
            </div>
          )}
        </div>
        
        {/* Hover shadow enhancement */}
        <div 
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
          style={{
            boxShadow: `
              0 8px 40px rgba(0, 0, 0, 0.12),
              0 2px 8px ${primaryColor}20
            `,
          }}
        />
      </div>
      
      {/* Company name label */}
      <div className="mt-4 text-center">
        <div className="text-sm font-semibold text-neutral-900 group-hover:text-neutral-700 transition-colors duration-200">
          {company.name}
        </div>
      </div>
    </motion.div>
  );
});

CompanyOrb.displayName = 'CompanyOrb';

const PortfolioHero = memo(() => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.3 });
  
  const {
    hoveredItem: hoveredCompany,
    handleHoverStart,
    handleHoverEnd,
  } = useStableHover<PortfolioCompany>({
    enterDelay: 100,
    leaveDelay: 200,
  });

  // All 12 companies for 3x4 grid
  const allCompanies = portfolioData;
  
  // Professional 3x4 grid layout
  const gridCompanies = [
    // Row 1
    'Footy Access', 'The Town FC', 'Innovosens',
    // Row 2  
    'Atlantic City FC', 'Drip FC', 'Replica AI',
    // Row 3
    'Odunde Sports', 'FieldOfVision', 'Partum Inicio',
    // Row 4
    'Soccer Box Training', 'Soccer As Art', 'Apex Mental'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen pt-32 pb-20 px-6 lg:px-8 overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, 
            var(--neutral-50) 0%, 
            var(--blue-50) 20%, 
            var(--neutral-100) 100%
          )
        `
      }}
    >
      {/* Clean Background */}
      <FloatingOrbs 
        enabled={true}
        orbCount={2}
        sensitivity={0.2}
        className="absolute inset-0"
      />

      {/* Minimal Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/30 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-conic from-blue-100/10 via-transparent to-blue-200/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-20 items-center min-h-[80vh]"
        >
          {/* Left Side - Clean Content with Central Information Display */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h1 className="text-6xl lg:text-7xl font-black mb-8 text-balance tracking-tight leading-tight">
                Portfolio
              </h1>
              
              <p className="text-xl text-secondary mb-12 text-balance leading-relaxed">
                Twelve innovative companies transforming soccer through technology, culture, and community impact.
              </p>
            </motion.div>

            {/* Central Information Display */}
            <motion.div 
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/40 shadow-lg"
            >
              <CentralInfoDisplay company={hoveredCompany} />
            </motion.div>
          </div>

          {/* Right Side - Professional 3x4 Grid */}
          <div className="relative">
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 justify-items-center"
            >
              {gridCompanies.map((companyName, index) => {
                const company = allCompanies.find(c => c.name === companyName);
                if (!company) return null;
                
                return (
                  <CompanyOrb
                    key={company.name}
                    company={company}
                    index={index}
                    onHoverStart={handleHoverStart}
                    onHoverEnd={handleHoverEnd}
                  />
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

PortfolioHero.displayName = 'PortfolioHero';

export default PortfolioHero;