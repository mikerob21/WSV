'use client';

import { memo } from 'react';
import Navbar from '@/components/Navbar';
import {
  PortfolioHero,
  PortfolioGrid,
  PortfolioStats
} from '@/components/sections/portfolio';

const PortfolioPage = memo(() => {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navbar />
      
      {/* Interactive Hero with Floating Company Orbs */}
      <PortfolioHero />

      {/* Portfolio Impact Statistics */}
      <PortfolioStats />

      {/* Complete Portfolio Grid with Filtering */}
      <PortfolioGrid />

      {/* Call-to-Action Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-neutral-50 to-blue-100 geometric-bg">
        <div className="max-w-5xl mx-auto text-center">
          <div className="spacing-fibonacci-4">
            <h2 className="display-section mb-8 text-balance animate-text-breathing">
              Join Our{' '}
              <span className="text-brand floating-text">Portfolio</span>
            </h2>
            
            <p className="body-large text-secondary mb-12 max-w-3xl mx-auto text-balance">
              Are you building the next generation of soccer technology or community-focused ventures? 
              We'd love to explore potential partnership opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/contact"
                className="btn-premium inline-flex items-center justify-center space-x-2 hover-magnetic cursor-magnetic"
              >
                <span>Submit Your Pitch</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <a
                href="/approach"
                className="surface-elevated inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-blue-600 text-brand label hover:bg-blue-600 hover:text-white transition-all duration-300 hover-liquid cursor-magnetic"
              >
                <span>Learn Our Approach</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
});

PortfolioPage.displayName = 'PortfolioPage';

export default PortfolioPage;