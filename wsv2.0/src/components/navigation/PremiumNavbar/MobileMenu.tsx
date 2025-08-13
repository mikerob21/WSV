'use client';

import { memo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: Array<{
    name: string;
    href: string;
  }>;
  currentPath: string;
}

export const MobileMenu = memo<MobileMenuProps>(({ 
  isOpen, 
  onClose, 
  items,
  currentPath 
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={onClose}
          />
          
          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ 
              type: "spring", 
              damping: 30,
              stiffness: 300
            }}
            className="fixed right-0 top-0 h-full w-full max-w-sm bg-white/95 backdrop-blur-xl shadow-2xl z-50 md:hidden"
          >
            {/* Close Button */}
            <div className="flex justify-end p-6">
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                aria-label="Close menu"
              >
                <svg 
                  className="w-6 h-6 text-neutral-600" 
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
                </svg>
              </button>
            </div>
            
            {/* Navigation Items */}
            <nav className="px-6 pb-6">
              {items.map((item, index) => {
                const isActive = currentPath === item.href;
                
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: index * 0.1,
                      duration: 0.5,
                      ease: [0.23, 1, 0.32, 1]
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "block py-4 text-lg font-medium transition-all duration-300",
                        "border-b border-neutral-100",
                        "relative overflow-hidden group",
                        isActive 
                          ? "text-blue-600" 
                          : "text-neutral-700 hover:text-blue-600"
                      )}
                    >
                      <span className="relative z-10 flex items-center justify-between">
                        {item.name}
                        <svg 
                          className={cn(
                            "w-5 h-5 transition-transform duration-300",
                            "group-hover:translate-x-1"
                          )}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 5l7 7-7 7" 
                          />
                        </svg>
                      </span>
                      
                      {/* Sliding background effect */}
                      <motion.span
                        className="absolute inset-0 bg-blue-50 -z-10"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </Link>
                  </motion.div>
                );
              })}
              
              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: items.length * 0.1,
                  duration: 0.5
                }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  onClick={onClose}
                  className={cn(
                    "block w-full py-4 px-6 rounded-xl",
                    "bg-gradient-to-r from-blue-600 to-indigo-600",
                    "text-white font-semibold text-center",
                    "transform transition-all duration-300",
                    "hover:scale-[1.02] hover:shadow-lg",
                    "active:scale-[0.98]"
                  )}
                >
                  Partner With Us
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});

MobileMenu.displayName = 'MobileMenu';