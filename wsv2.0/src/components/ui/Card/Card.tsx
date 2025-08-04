'use client';

import { forwardRef, memo } from 'react';
import { CardProps } from '@/types';
import { cn } from '@/lib/utils';

const cardVariants = {
  default: 'bg-white border border-neutral-200 shadow-md',
  elevated: 'bg-white shadow-xl border-0',
  outlined: 'bg-transparent border-2 border-neutral-300 shadow-none',
  ghost: 'bg-transparent border-0 shadow-none',
};

const cardPadding = {
  none: '',
  small: 'p-4',
  medium: 'p-6',
  large: 'p-8',
};

export const Card = memo(forwardRef<HTMLDivElement, CardProps>(({
  variant = 'default',
  padding = 'medium',
  hoverable = false,
  header,
  footer,
  className,
  children,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        // Base styles
        'rounded-xl transition-all duration-300',
        
        // Variant styles
        cardVariants[variant],
        
        // Padding styles
        cardPadding[padding],
        
        // Hoverable styles
        hoverable && [
          'cursor-pointer',
          'hover:shadow-lg hover:scale-[1.02]',
          variant === 'default' && 'hover:border-blue-300',
          variant === 'outlined' && 'hover:border-blue-500',
        ],
        
        // Custom className
        className
      )}
      {...props}
    >
      {header && (
        <div className={cn(
          'mb-4',
          padding !== 'none' && '-mt-2'
        )}>
          {header}
        </div>
      )}
      
      <div className={cn(
        header && footer && 'flex-1'
      )}>
        {children}
      </div>
      
      {footer && (
        <div className={cn(
          'mt-4',
          padding !== 'none' && '-mb-2'
        )}>
          {footer}
        </div>
      )}
    </div>
  );
}));

Card.displayName = 'Card';