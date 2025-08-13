'use client';

import { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NavLogoProps {
  isScrolled: boolean;
  logo?: string;
}

export const NavLogo = memo<NavLogoProps>(({ 
  isScrolled, 
  logo = '/images/logo.webp' 
}) => {
  return (
    <Link href="/" className="flex items-center group">
      <motion.div 
        className={cn(
          "relative transition-all duration-300",
          isScrolled ? "w-10 h-10" : "w-12 h-12"
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, rotate: -180 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ 
          duration: 0.6,
          ease: [0.23, 1, 0.32, 1]
        }}
      >
        <Image
          src={logo}
          alt="White Sports Ventures"
          fill
          className="object-contain"
          sizes="48px"
          priority
        />
        
        {/* Subtle glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-full bg-blue-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      
      {/* Company name - hidden on mobile, visible on desktop */}
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className={cn(
          "ml-3 font-bold text-neutral-900 transition-all duration-300",
          "hidden md:block",
          isScrolled ? "text-base" : "text-lg"
        )}
      >
        WSV
      </motion.span>
    </Link>
  );
});

NavLogo.displayName = 'NavLogo';