'use client';

import { forwardRef, memo, useState } from 'react';
import { InputProps } from '@/types';
import { cn } from '@/lib/utils';

const inputVariants = {
  default: 'border border-neutral-300 focus:border-blue-500 focus:ring-blue-500/20',
  filled: 'bg-neutral-100 border border-transparent focus:bg-white focus:border-blue-500 focus:ring-blue-500/20',
  outlined: 'border-2 border-neutral-300 focus:border-blue-500',
};

const inputSizes = {
  small: 'px-3 py-2 text-sm',
  medium: 'px-4 py-3 text-base',
  large: 'px-5 py-4 text-lg',
};

export const Input = memo(forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  helperText,
  size = 'medium',
  variant = 'default',
  fullWidth = false,
  startIcon,
  endIcon,
  className,
  ...props
}, ref) => {
  const [focused, setFocused] = useState(false);
  const hasError = Boolean(error);
  const hasStartIcon = Boolean(startIcon);
  const hasEndIcon = Boolean(endIcon);

  return (
    <div className={cn(
      'relative',
      fullWidth && 'w-full'
    )}>
      {label && (
        <label className={cn(
          'block label mb-2',
          hasError ? 'text-error' : 'text-neutral-700',
          focused && !hasError && 'text-blue-600'
        )}>
          {label}
        </label>
      )}
      
      <div className="relative">
        {hasStartIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500">
            {startIcon}
          </div>
        )}
        
        <input
          ref={ref}
          className={cn(
            // Base styles
            'w-full rounded-xl transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-offset-0',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'placeholder:text-neutral-400',
            
            // Variant styles
            inputVariants[variant],
            
            // Size styles
            inputSizes[size],
            
            // Icon padding adjustments
            hasStartIcon && 'pl-10',
            hasEndIcon && 'pr-10',
            
            // Error styles
            hasError && [
              'border-error focus:border-error focus:ring-error/20',
              variant === 'filled' && 'bg-error/5'
            ],
            
            // Custom className
            className
          )}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
        
        {hasEndIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500">
            {endIcon}
          </div>
        )}
      </div>
      
      {(error || helperText) && (
        <div className={cn(
          'mt-2 body-small',
          hasError ? 'text-error' : 'text-neutral-500'
        )}>
          {error || helperText}
        </div>
      )}
    </div>
  );
}));

Input.displayName = 'Input';