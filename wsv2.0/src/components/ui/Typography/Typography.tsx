'use client';

import { forwardRef, memo, ElementType } from 'react';
import { TypographyProps } from '@/types';
import { cn } from '@/lib/utils';

const typographyVariants = {
  'display-hero': 'display-hero',
  'display-section': 'display-section',
  'heading-primary': 'heading-primary',
  'heading-secondary': 'heading-secondary',
  'heading-tertiary': 'heading-tertiary',
  'body-large': 'body-large',
  'body-default': 'body-default',
  'body-small': 'body-small',
  'caption': 'caption',
  'label': 'label',
};

const typographyColors = {
  primary: 'text-neutral-900',
  secondary: 'text-neutral-600',
  muted: 'text-neutral-500',
  brand: 'text-brand',
  inverse: 'text-inverse',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-error',
};

const typographyAlign = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
};

const defaultComponents: Record<string, ElementType> = {
  'display-hero': 'h1',
  'display-section': 'h1',
  'heading-primary': 'h1',
  'heading-secondary': 'h2',
  'heading-tertiary': 'h3',
  'body-large': 'p',
  'body-default': 'p',
  'body-small': 'p',
  'caption': 'span',
  'label': 'span',
};

export const Typography = memo(forwardRef<HTMLElement, TypographyProps>(({
  variant = 'body-default',
  component,
  color = 'primary',
  align = 'left',
  noWrap = false,
  className,
  children,
  ...props
}, ref) => {
  const Component = component || defaultComponents[variant] || 'p';

  return (
    <Component
      ref={ref}
      className={cn(1
        // Base typography class from design system
        ,typographyVariants[variant],
        
        // Color styles
        typographyColors[color],
        
        // Alignment styles
        typographyAlign[align],
        
        // No wrap styles
        noWrap && 'whitespace-nowrap overflow-hidden text-ellipsis',
        
        // Custom className
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}) as <C extends ElementType = 'p'>(
  props: TypographyProps & { component?: C } & React.ComponentPropsWithoutRef<C> & { ref?: React.Ref<React.ElementRef<C>> }
) => React.ReactElement | null);

Typography.displayName = 'Typography';