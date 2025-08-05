'use client';

import { forwardRef, memo } from 'react';
import { ButtonProps } from '@/types';
import { cn } from '@/lib/utils';

const buttonVariants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
  secondary: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus:ring-neutral-500',
  ghost: 'bg-transparent text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
  outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
};

const buttonSizes = {
  small: 'px-3 py-1.5 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

export const Button = memo(forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  loading = false,
  icon,
  iconPosition = 'left',
  className,
  children,
  disabled,
  ...props
}, ref) => {
  const isDisabled = disabled || loading;

  return (
    <button
      ref={ref}
      className={cn(
        // Base styles
        'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        
        // Variant styles
        buttonVariants[variant],
        
        // Size styles
        buttonSizes[size],
        
        // Full width
        fullWidth && 'w-full',
        
        // Custom className
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {loading && (
        <svg
          className="w-4 h-4 mr-2 animate-spin"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      
      {!loading && icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      
      {children}
      
      {!loading && icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </button>
  );
}));

Button.displayName = 'Button';