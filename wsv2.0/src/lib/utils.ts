import { type ClassValue, clsx } from 'clsx';

/**
 * Utility function to merge class names
 * Combines clsx for conditional classes with proper handling of undefined values
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function for performance optimization
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Format number with proper separators
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num);
}

/**
 * Format currency with proper symbols
 */
export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

/**
 * Create a stable reference for objects to prevent unnecessary re-renders
 */
export function createStableRef<T>(value: T, isEqual?: (a: T, b: T) => boolean): T {
  // This would typically be implemented with useMemo in the component
  return value;
}

/**
 * Check if an element is in viewport
 */
export function isInViewport(element: Element): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Get responsive value based on screen size
 */
export function getResponsiveValue<T>(
  values: { default: T; sm?: T; md?: T; lg?: T; xl?: T },
  screenWidth: number
): T {
  if (screenWidth >= 1280 && values.xl) return values.xl;
  if (screenWidth >= 1024 && values.lg) return values.lg;
  if (screenWidth >= 768 && values.md) return values.md;
  if (screenWidth >= 640 && values.sm) return values.sm;
  return values.default;
}

/**
 * Safe JSON parse with fallback
 */
export function safeJsonParse<T>(str: string, fallback: T): T {
  try {
    return JSON.parse(str);
  } catch {
    return fallback;
  }
}

/**
 * Generate unique ID for components
 */
export function generateId(prefix = 'id'): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}