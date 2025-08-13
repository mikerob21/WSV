'use client';

import { memo, useState, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useScrollPosition } from '@/hooks';
import { NavItem } from './NavItem';
import { NavLogo } from './NavLogo';
import { MobileMenu } from './MobileMenu';
import type { BaseComponentProps } from '@/types';

interface NavigationItem {
  name: string;
  href: string;
}

interface PremiumNavbarProps extends BaseComponentProps {
  items?: NavigationItem[];
  logo?: string;
}

const DEFAULT_NAV_ITEMS: NavigationItem[] = [
  { name: 'About', href: '/about' },
  { name: 'Approach', href: '/approach' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

export const PremiumNavbar = memo<PremiumNavbarProps>(({
  items = DEFAULT_NAV_ITEMS,
  logo,
  className,
  ...props
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const scrollY = useScrollPosition();
  
  const isScrolled = scrollY > 50;
  
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
  
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);
  
  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 w-full z-40 transition-all duration-500",
          isScrolled 
            ? "bg-white/80 backdrop-blur-md shadow-md border-b border-neutral-200/50" 
            : "bg-white/60 backdrop-blur-sm",
          className
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ 
          duration: 0.6,
          ease: [0.23, 1, 0.32, 1]
        }}
        {...props}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={cn(
            "flex justify-between items-center transition-all duration-300",
            isScrolled ? "h-16" : "h-20"
          )}>
            {/* Logo */}
            <NavLogo isScrolled={isScrolled} logo={logo} />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {items.map((item, index) => (
                <NavItem
                  key={item.name}
                  name={item.name}
                  href={item.href}
                  isActive={pathname === item.href}
                  index={index}
                />
              ))}
              
              {/* CTA Button - Desktop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: items.length * 0.1,
                  duration: 0.5
                }}
                className="ml-4"
              >
                <a
                  href="/contact"
                  className={cn(
                    "inline-flex items-center px-5 py-2.5 rounded-xl",
                    "bg-gradient-to-r from-blue-600 to-indigo-600",
                    "text-white text-sm font-semibold",
                    "transform transition-all duration-300",
                    "hover:scale-[1.02] hover:shadow-lg",
                    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  )}
                >
                  Get Started
                  <svg 
                    className="w-4 h-4 ml-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M17 8l4 4m0 0l-4 4m4-4H3" 
                    />
                  </svg>
                </a>
              </motion.div>
            </div>
            
            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMobileMenu}
              className={cn(
                "p-2 rounded-lg md:hidden",
                "hover:bg-neutral-100 transition-colors",
                "focus:outline-none focus:ring-2 focus:ring-blue-500"
              )}
              aria-label="Toggle mobile menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.svg
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-6 h-6 text-neutral-700" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M6 18L18 6M6 6l12 12" 
                    />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-6 h-6 text-neutral-700" 
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
                  </motion.svg>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
        
        {/* Progress indicator */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600"
          style={{
            width: '100%',
            scaleX: 0,
            transformOrigin: 'left'
          }}
          animate={{
            scaleX: isScrolled ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.nav>
      
      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={items}
        currentPath={pathname}
      />
      
      {/* Spacer to prevent content from going under fixed navbar */}
      <div className={cn(
        "transition-all duration-300",
        isScrolled ? "h-16" : "h-20"
      )} />
    </>
  );
});

PremiumNavbar.displayName = 'PremiumNavbar';