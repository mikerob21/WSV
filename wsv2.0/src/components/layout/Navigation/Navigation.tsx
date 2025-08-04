'use client';

import { memo, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typography, Button } from '@/components/ui';
import { useScrollPosition, useStableCallback } from '@/hooks';
import type { BaseComponentProps } from '@/types';

interface NavigationItem {
  name: string;
  href: string;
  external?: boolean;
}

interface NavigationProps extends BaseComponentProps {
  items?: NavigationItem[];
  logo?: string;
  ctaText?: string;
  onCTAClick?: () => void;
  variant?: 'default' | 'transparent';
  position?: 'fixed' | 'sticky' | 'static';
}

// Memoized default navigation items
const DEFAULT_NAV_ITEMS: NavigationItem[] = [
  { name: 'About', href: '/about' },
  { name: 'Approach', href: '/approach' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Insights', href: '#insights' },
];

const NavItem = memo<{ 
  item: NavigationItem; 
  onClick?: () => void;
}>(({ item, onClick }) => (
  <a
    href={item.href}
    className="px-3 py-2 label text-secondary hover:text-brand transition-colors duration-200"
    onClick={onClick}
    {...(item.external && { target: '_blank', rel: 'noopener noreferrer' })}
  >
    {item.name}
  </a>
));

NavItem.displayName = 'NavItem';

const MobileMenuButton = memo<{
  isOpen: boolean;
  onClick: () => void;
}>(({ isOpen, onClick }) => (
  <button
    className="md:hidden w-10 h-10 flex flex-col justify-center items-center focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
    onClick={onClick}
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
    aria-expanded={isOpen}
  >
    <motion.span 
      className="w-6 h-0.5 bg-neutral-700 mb-1 origin-center"
      animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
      transition={{ duration: 0.2 }}
    />
    <motion.span 
      className="w-6 h-0.5 bg-neutral-700 mb-1"
      animate={{ opacity: isOpen ? 0 : 1 }}
      transition={{ duration: 0.2 }}
    />
    <motion.span 
      className="w-6 h-0.5 bg-neutral-700"
      animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
      transition={{ duration: 0.2 }}
    />
  </button>
));

MobileMenuButton.displayName = 'MobileMenuButton';

const MobileMenu = memo<{
  items: NavigationItem[];
  ctaText?: string;
  onCTAClick?: () => void;
  onItemClick: () => void;
}>(({ items, ctaText, onCTAClick, onItemClick }) => (
  <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: 'auto' }}
    exit={{ opacity: 0, height: 0 }}
    transition={{ duration: 0.2 }}
    className="md:hidden bg-white border-t border-blue-200 overflow-hidden"
  >
    <div className="px-6 py-6 space-y-4">
      {items.map((item) => (
        <NavItem
          key={item.name}
          item={item}
          onClick={onItemClick}
        />
      ))}
      
      {ctaText && (
        <div className="pt-4">
          <Button
            variant="primary"
            fullWidth
            onClick={() => {
              onCTAClick?.();
              onItemClick();
            }}
          >
            {ctaText}
          </Button>
        </div>
      )}
    </div>
  </motion.div>
));

MobileMenu.displayName = 'MobileMenu';

export const Navigation = memo<NavigationProps>(({
  items = DEFAULT_NAV_ITEMS,
  logo = 'WSV',
  ctaText = 'Partner With Us',
  onCTAClick,
  variant = 'default',
  position = 'fixed',
  className,
  ...props
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { y: scrollY } = useScrollPosition({ throttleMs: 16 });

  // Memoize scroll-based styling
  const isScrolled = useMemo(() => scrollY > 50, [scrollY]);
  
  // Stable callbacks to prevent unnecessary re-renders
  const handleMenuToggle = useStableCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const handleMobileItemClick = useStableCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleCTAClick = useStableCallback(() => {
    onCTAClick?.();
  }, [onCTAClick]);

  // Dynamic styling based on scroll position and variant
  const navClasses = useMemo(() => {
    const baseClasses = 'top-0 w-full z-50 transition-all duration-700';
    const positionClasses = {
      fixed: 'fixed',
      sticky: 'sticky',
      static: 'static',
    };
    
    const variantClasses = variant === 'transparent' && !isScrolled
      ? 'bg-transparent'
      : 'bg-white shadow-lg border-b border-blue-200';

    return `${baseClasses} ${positionClasses[position]} ${variantClasses} ${className || ''}`;
  }, [position, variant, isScrolled, className]);

  return (
    <nav className={navClasses} {...props}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Typography
            variant="heading-tertiary"
            className="text-brand cursor-pointer hover:text-brand-dark transition-colors"
            component="div"
          >
            {logo}
          </Typography>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {items.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
            
            {ctaText && (
              <Button
                variant="primary"
                size="medium"
                onClick={handleCTAClick}
                className="ml-4"
              >
                {ctaText}
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <MobileMenuButton
            isOpen={isMenuOpen}
            onClick={handleMenuToggle}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenu
            items={items}
            ctaText={ctaText}
            onCTAClick={onCTAClick}
            onItemClick={handleMobileItemClick}
          />
        )}
      </AnimatePresence>
    </nav>
  );
});

Navigation.displayName = 'Navigation';