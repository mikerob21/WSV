'use client';

import { memo, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useScrollPosition } from '@/hooks';

interface NavigationItem {
  name: string;
  href: string;
}

interface WSVNavbarProps {
  items?: NavigationItem[];
}

const DEFAULT_NAV_ITEMS: NavigationItem[] = [
  { name: 'About', href: '/about' },
  { name: 'Approach', href: '/approach' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

// Custom Soccer Field Line Animation Component
const FieldLineAnimation = memo<{ isActive: boolean }>(({ isActive }) => (
  <svg
    className="absolute bottom-0 left-0 w-full h-0.5 overflow-hidden"
    viewBox="0 0 100 2"
    preserveAspectRatio="none"
  >
    <motion.path
      d="M0,1 Q25,0.5 50,1 T100,1"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{
        pathLength: isActive ? 1 : 0,
        opacity: isActive ? 1 : 0,
      }}
      transition={{
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1]
      }}
      style={{
        filter: 'drop-shadow(0 0 2px currentColor)'
      }}
    />
  </svg>
));

FieldLineAnimation.displayName = 'FieldLineAnimation';

// Custom Navigation Item with Soccer-Inspired Animations
const WSVNavItem = memo<{
  item: NavigationItem;
  isActive: boolean;
  index: number;
  isHomepage: boolean;
  isScrolled: boolean;
}>(({ item, isActive, index, isHomepage, isScrolled }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link
        href={item.href}
        className={`
          relative px-3 py-2 text-sm font-medium tracking-wide transition-all duration-300
          ${isActive 
            ? 'text-blue-600' 
            : isHomepage && !isScrolled
            ? 'text-white hover:text-blue-200'
            : 'text-neutral-700 hover:text-blue-600'
          }
        `}
      >
        {/* Athletic Letter Spacing Animation */}
        <motion.span
          animate={{
            letterSpacing: isHovered ? '0.05em' : '0.025em'
          }}
          transition={{ duration: 0.2 }}
        >
          {item.name}
        </motion.span>
        
        {/* Soccer Field Line Animation */}
        <div className={`absolute bottom-0 left-0 right-0 ${
          isActive 
            ? 'text-blue-600' 
            : isHomepage && !isScrolled
            ? 'text-white'
            : 'text-blue-600'
        }`}>
          <FieldLineAnimation isActive={isHovered || isActive} />
        </div>
      </Link>
    </motion.div>
  );
});

WSVNavItem.displayName = 'WSVNavItem';

// Mobile Menu with Soccer Energy
const WSVMobileMenu = memo<{
  isOpen: boolean;
  onClose: () => void;
  items: NavigationItem[];
  currentPath: string;
}>(({ isOpen, onClose, items, currentPath }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        {/* Sophisticated Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, rgba(17, 24, 39, 0.8) 70%)',
            backdropFilter: 'blur(24px) saturate(150%)'
          }}
          onClick={onClose}
        />
        
        {/* Menu Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-6 top-6 bottom-6 rounded-3xl z-50 flex flex-col overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 251, 252, 0.98) 50%, rgba(239, 246, 255, 0.95) 100%)',
            backdropFilter: 'blur(32px) saturate(200%)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 24px 64px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 0 rgba(59, 130, 246, 0.1)'
          }}
        >
          {/* Header with WSV Athletic Typography */}
          <div className="flex items-center justify-between p-8 border-b border-neutral-100">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="text-3xl font-bold font-display text-neutral-900 tracking-tight uppercase">
                WSV
              </span>
            </motion.div>
            
            <motion.button
              onClick={onClose}
              className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center hover:bg-neutral-200 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.2 }}
            >
              <svg className="w-6 h-6 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </div>
          
          {/* Navigation Items with Staggered Animation */}
          <div className="flex-1 p-8">
            <nav className="space-y-1">
              {items.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (index * 0.05), duration: 0.4 }}
                  whileHover={{ x: 8 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block px-6 py-4 rounded-2xl text-lg font-semibold transition-all duration-300"
                    style={{
                      background: currentPath === item.href
                        ? 'linear-gradient(135deg, rgba(239, 246, 255, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%)'
                        : 'transparent',
                      color: currentPath === item.href ? '#2563eb' : '#374151',
                      boxShadow: currentPath === item.href
                        ? '0 2px 8px rgba(37, 99, 235, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
                        : 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (currentPath !== item.href) {
                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(249, 250, 251, 0.6) 0%, rgba(255, 255, 255, 0.8) 100%)';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.6)';
                        e.currentTarget.style.color = '#111827';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (currentPath !== item.href) {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.boxShadow = 'none';
                        e.currentTarget.style.color = '#374151';
                      }
                    }}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>
          
          {/* Footer CTA */}
          <div className="p-8 border-t border-neutral-100">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/contact"
                onClick={onClose}
                className="block w-full py-4 px-6 text-white text-center font-semibold rounded-2xl transform hover:scale-[1.02] transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)',
                  boxShadow: '0 4px 16px rgba(37, 99, 235, 0.3), 0 8px 32px rgba(37, 99, 235, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%)';
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(37, 99, 235, 0.4), 0 12px 48px rgba(37, 99, 235, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(37, 99, 235, 0.3), 0 8px 32px rgba(37, 99, 235, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
                }}
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
));

WSVMobileMenu.displayName = 'WSVMobileMenu';

export const WSVNavbar = memo<WSVNavbarProps>(({
  items = DEFAULT_NAV_ITEMS
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const scrollY = useScrollPosition();
  
  const isScrolled = scrollY > 100;
  const isHomepage = pathname === '/';
  
  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-40 transition-all duration-700 ${
          isHomepage && !isScrolled
            ? 'bg-transparent'
            : ''
        }`}
        style={{
          background: isHomepage && !isScrolled 
            ? 'transparent' 
            : 'linear-gradient(135deg, rgba(250, 251, 252, 0.95) 0%, rgba(255, 255, 255, 0.98) 50%, rgba(239, 246, 255, 0.95) 100%)',
          backdropFilter: isHomepage && !isScrolled ? 'none' : 'blur(20px) saturate(180%)',
          boxShadow: isHomepage && !isScrolled 
            ? 'none' 
            : '0 1px 3px rgba(0, 0, 0, 0.05), 0 8px 32px rgba(59, 130, 246, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ 
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1]
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* WSV Athletic Wordmark - Always Visible */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="flex items-center">
                <motion.span
                  className={`text-2xl font-bold font-display tracking-wide transition-colors duration-300 uppercase ${
                    isHomepage && !isScrolled ? 'text-white' : 'text-neutral-900'
                  }`}
                  whileHover={{ 
                    scale: 1.02,
                    letterSpacing: '0.05em'
                  }}
                  transition={{ duration: 0.2 }}
                >
                  WSV
                </motion.span>
              </Link>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {items.map((item, index) => (
                <WSVNavItem
                  key={item.name}
                  item={item}
                  isActive={pathname === item.href}
                  index={index}
                  isHomepage={isHomepage}
                  isScrolled={isScrolled}
                />
              ))}
              
              {/* Athletic CTA */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: items.length * 0.05, duration: 0.5 }}
                className="ml-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 hover:scale-[1.02] rounded-xl"
                  style={{
                    background: isHomepage && !isScrolled
                      ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)'
                      : 'linear-gradient(135deg, rgba(239, 246, 255, 0.6) 0%, rgba(255, 255, 255, 0.8) 100%)',
                    color: isHomepage && !isScrolled ? '#ffffff' : '#2563eb',
                    backdropFilter: 'blur(10px) saturate(150%)',
                    boxShadow: isHomepage && !isScrolled
                      ? '0 2px 8px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                      : '0 2px 8px rgba(37, 99, 235, 0.1), 0 4px 16px rgba(37, 99, 235, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
                  }}
                  onMouseEnter={(e) => {
                    if (isHomepage && !isScrolled) {
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
                    } else {
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(239, 246, 255, 0.8) 0%, rgba(255, 255, 255, 0.95) 100%)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(37, 99, 235, 0.15), 0 8px 32px rgba(37, 99, 235, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.8)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isHomepage && !isScrolled) {
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
                    } else {
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(239, 246, 255, 0.6) 0%, rgba(255, 255, 255, 0.8) 100%)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(37, 99, 235, 0.1), 0 4px 16px rgba(37, 99, 235, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6)';
                    }
                  }}
                >
                  Get Started
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </div>
            
            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-lg md:hidden hover:bg-white/10 transition-colors duration-200"
              aria-label="Open mobile menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg 
                className={`w-6 h-6 ${
                  isHomepage && !isScrolled ? 'text-white' : 'text-neutral-700'
                }`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.nav>
      
      {/* Mobile Menu */}
      <WSVMobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={items}
        currentPath={pathname}
      />
    </>
  );
});

WSVNavbar.displayName = 'WSVNavbar';