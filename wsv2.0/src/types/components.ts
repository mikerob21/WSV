import { ReactNode, HTMLAttributes, ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

// Base component props interface
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
  'data-testid'?: string;
}

// Size variants for components
export type ComponentSize = 'small' | 'medium' | 'large';

// Component variants
export type ComponentVariant = 'primary' | 'secondary' | 'ghost' | 'outline';

// Animation configuration
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string;
  staggerChildren?: number;
}

// Button component props
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, BaseComponentProps {
  variant?: ComponentVariant;
  size?: ComponentSize;
  fullWidth?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

// Card component props
export interface CardProps extends HTMLAttributes<HTMLDivElement>, BaseComponentProps {
  variant?: 'default' | 'elevated' | 'outlined' | 'ghost';
  padding?: ComponentSize | 'none';
  hoverable?: boolean;
  header?: ReactNode;
  footer?: ReactNode;
}

// Input component props
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, BaseComponentProps {
  label?: string;
  error?: string;
  helperText?: string;
  size?: ComponentSize;
  variant?: 'default' | 'filled' | 'outlined';
  fullWidth?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

// Modal component props
export interface ModalProps extends BaseComponentProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  size?: ComponentSize | 'fullscreen';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  header?: ReactNode;
  footer?: ReactNode;
}

// Typography component props
export interface TypographyProps extends HTMLAttributes<HTMLElement>, BaseComponentProps {
  variant?: 'display-hero' | 'display-section' | 'heading-primary' | 'heading-secondary' | 'heading-tertiary' | 'body-large' | 'body-default' | 'body-small' | 'caption' | 'label';
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  color?: 'primary' | 'secondary' | 'muted' | 'brand' | 'inverse' | 'success' | 'warning' | 'error';
  align?: 'left' | 'center' | 'right' | 'justify';
  noWrap?: boolean;
}

// Container component props
export interface ContainerProps extends HTMLAttributes<HTMLDivElement>, BaseComponentProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: boolean;
  centered?: boolean;
}

// Layout component props
export interface LayoutProps extends BaseComponentProps {
  header?: ReactNode;
  sidebar?: ReactNode;
  footer?: ReactNode;
  sidebarWidth?: number;
  sidebarCollapsed?: boolean;
}

// Error boundary props
export interface ErrorBoundaryProps extends BaseComponentProps {
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

// Loading state props
export interface LoadingProps extends BaseComponentProps {
  variant?: 'spinner' | 'skeleton' | 'pulse';
  size?: ComponentSize;
  fullScreen?: boolean;
  text?: string;
}

// Generic component props with data
export interface ComponentProps<T = Record<string, unknown>> extends BaseComponentProps {
  data?: T;
  loading?: boolean;
  error?: string | null;
}