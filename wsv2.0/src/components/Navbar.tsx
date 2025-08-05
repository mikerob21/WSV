'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

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
        ? 'bg-white shadow-xl border-b border-neutral-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className={`relative transition-all duration-300 ${
              isScrolled ? 'w-12 h-12' : 'w-16 h-16'
            }`}>
              <Image
                src="/images/logo.webp"
                alt="White Sports Ventures Logo"
                fill
                className="object-contain"
                sizes="64px"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - Always Visible */}
          <div className="flex items-center space-x-6">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 font-medium transition-all duration-300 rounded-lg ${
                  isScrolled 
                    ? 'text-neutral-700 hover:text-blue-600 hover:bg-blue-50' 
                    : 'text-white hover:text-white hover:bg-white/10 shadow-lg backdrop-blur-sm'
                }`}
              >
                {item.name}
              </a>
            ))}
            
            {/* CTA Button */}
            <Link 
              href="/contact"
              className={`ml-6 inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                isScrolled 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg' 
                  : 'bg-white text-blue-900 hover:bg-blue-50 shadow-xl backdrop-blur-md border border-white/20'
              }`}
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
            <span className={`w-6 h-0.5 mb-1 transition-colors ${
              isScrolled ? 'bg-neutral-700' : 'bg-white'
            }`}></span>
            <span className={`w-6 h-0.5 mb-1 transition-colors ${
              isScrolled ? 'bg-neutral-700' : 'bg-white'
            }`}></span>
            <span className={`w-6 h-0.5 transition-colors ${
              isScrolled ? 'bg-neutral-700' : 'bg-white'
            }`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-neutral-200/50"
          >
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block label text-neutral-700 py-2 hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white label rounded-lg transition-colors">
                Partner With Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}