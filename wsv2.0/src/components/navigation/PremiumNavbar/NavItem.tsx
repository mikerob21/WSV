'use client';

import { memo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NavItemProps {
  name: string;
  href: string;
  isActive: boolean;
  index: number;
  onClick?: () => void;
}

export const NavItem = memo<NavItemProps>(({ 
  name, 
  href, 
  isActive, 
  index,
  onClick 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1]
      }}
    >
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          "relative px-4 py-2 text-sm font-medium transition-all duration-300",
          "group inline-flex items-center",
          isActive 
            ? "text-blue-600" 
            : "text-neutral-700 hover:text-blue-600"
        )}
      >
        <span className="relative z-10 transition-all duration-300 group-hover:tracking-wider">
          {name}
        </span>
        
        {/* Liquid underline animation */}
        <span
          className={cn(
            "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600",
            "transition-all duration-300 ease-out",
            isActive 
              ? "w-full" 
              : "w-0 group-hover:w-full"
          )}
          style={{
            transformOrigin: 'center',
            transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
          }}
        />
        
        {/* Depth pulse effect for active state */}
        {isActive && (
          <motion.span
            className="absolute inset-0 rounded-lg"
            animate={{
              boxShadow: [
                '0 0 0 0px rgba(59, 130, 246, 0)',
                '0 0 0 4px rgba(59, 130, 246, 0.1)',
                '0 0 0 0px rgba(59, 130, 246, 0)',
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </Link>
    </motion.div>
  );
});

NavItem.displayName = 'NavItem';