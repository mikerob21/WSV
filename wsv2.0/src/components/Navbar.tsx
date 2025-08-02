'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Approach', href: '/approach' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Insights', href: '#insights' },
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
        ? 'bg-white shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="text-3xl font-black">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              WSV
            </span>
          </div>

          {/* Desktop Navigation - Always Visible */}
          <div className="flex items-center space-x-6">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-gray-700 font-medium hover:text-blue-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
            
            {/* CTA Button */}
            <button className="ml-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors">
              Partner With Us
            </button>
          </div>

          {/* Mobile Menu Button - Hidden on Desktop */}
          <button
            className="md:hidden w-10 h-10 flex flex-col justify-center items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-gray-700 mb-1"></span>
            <span className="w-6 h-0.5 bg-gray-700 mb-1"></span>
            <span className="w-6 h-0.5 bg-gray-700"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-700 font-medium py-2 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl">
              Partner With Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}