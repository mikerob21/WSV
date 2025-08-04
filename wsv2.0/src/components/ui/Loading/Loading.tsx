'use client';

import { memo } from 'react';
import { LoadingProps } from '@/types';
import { cn } from '@/lib/utils';
import { Typography } from '../Typography';

const loadingSizes = {
  small: 'w-4 h-4',
  medium: 'w-8 h-8',
  large: 'w-12 h-12',
};

const SpinnerVariant = memo<{ size: 'small' | 'medium' | 'large'; className?: string }>(({ 
  size, 
  className 
}) => (
  <svg
    className={cn(
      'animate-spin text-blue-600',
      loadingSizes[size],
      className
    )}
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
));

SpinnerVariant.displayName = 'SpinnerVariant';

const SkeletonVariant = memo<{ className?: string }>(({ className }) => (
  <div className={cn(
    'bg-neutral-200 rounded animate-pulse',
    className
  )} />
));

SkeletonVariant.displayName = 'SkeletonVariant';

const PulseVariant = memo<{ size: 'small' | 'medium' | 'large'; className?: string }>(({ 
  size, 
  className 
}) => (
  <div className={cn(
    'bg-blue-600 rounded-full animate-pulse',
    loadingSizes[size],
    className
  )} />
));

PulseVariant.displayName = 'PulseVariant';

export const Loading = memo<LoadingProps>(({
  variant = 'spinner',
  size = 'medium',
  fullScreen = false,
  text,
  className,
  children,
  ...props
}) => {
  const content = (
    <div
      className={cn(
        'flex flex-col items-center justify-center',
        fullScreen && 'fixed inset-0 bg-white/80 backdrop-blur-sm z-50',
        !fullScreen && 'py-8',
        className
      )}
      {...props}
    >
      {variant === 'spinner' && (
        <SpinnerVariant size={size} />
      )}
      
      {variant === 'skeleton' && (
        <SkeletonVariant className={cn(
          'w-full',
          size === 'small' && 'h-4',
          size === 'medium' && 'h-8',
          size === 'large' && 'h-12'
        )} />
      )}
      
      {variant === 'pulse' && (
        <PulseVariant size={size} />
      )}
      
      {text && (
        <Typography
          variant="body-default"
          color="secondary"
          className="mt-4 text-center"
        >
          {text}
        </Typography>
      )}
      
      {children}
    </div>
  );

  return content;
});

Loading.displayName = 'Loading';