'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Approach', href: '/approach' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-white shadow-lg border-b border-blue-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="heading-tertiary text-brand hover:text-blue-700 transition-colors duration-200">
            WSV
          </Link>

          {/* Desktop Navigation - Always Visible */}
          <div className="flex items-center space-x-6">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-2 label text-secondary hover:text-brand transition-colors"
              >
                {item.name}
              </a>
            ))}
            
            {/* CTA Button */}
            <Link 
              href="/contact"
              className="ml-4 btn-premium inline-flex items-center justify-center space-x-2 hover-magnetic cursor-magnetic"
            >
              <span>Partner With Us</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button - Hidden on Desktop */}
          <button
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-neutral-700 mb-1"></span>
            <span className="w-6 h-0.5 bg-neutral-700 mb-1"></span>
            <span className="w-6 h-0.5 bg-neutral-700"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-blue-200">
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block label text-secondary py-2 hover:text-brand"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white label rounded-lg">
              Partner With Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}