'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface ResizeObserverEntry {
  width: number;
  height: number;
  contentRect: DOMRectReadOnly;
}

interface UseResizeObserverOptions {
  debounceMs?: number;
  enabled?: boolean;
}

/**
 * Hook to observe element resize events with performance optimization
 * 
 * @param options Configuration options
 * @returns Ref to attach to element and current dimensions
 */
export function useResizeObserver<T extends HTMLElement = HTMLDivElement>(
  options: UseResizeObserverOptions = {}
): [React.RefObject<T>, ResizeObserverEntry | null] {
  const { debounceMs = 16, enabled = true } = options;
  const ref = useRef<T>(null);
  const [entry, setEntry] = useState<ResizeObserverEntry | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const updateEntry = useCallback(
    (newEntry: ResizeObserverEntry) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setEntry(newEntry);
      }, debounceMs);
    },
    [debounceMs]
  );

  useEffect(() => {
    if (!enabled || !ref.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const resizeEntry = entries[0];
      if (resizeEntry) {
        const { width, height } = resizeEntry.contentRect;
        updateEntry({
          width,
          height,
          contentRect: resizeEntry.contentRect,
        });
      }
    });

    resizeObserver.observe(ref.current);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      resizeObserver.disconnect();
    };
  }, [enabled, updateEntry]);

  return [ref, entry];
}

/**
 * Hook to track element dimensions and breakpoint information
 * 
 * @param breakpoints Custom breakpoint definitions
 * @returns Ref, dimensions, and breakpoint utilities
 */
export function useElementBreakpoints<T extends HTMLElement = HTMLDivElement>(
  breakpoints: Record<string, number> = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  }
): {
  ref: React.RefObject<T>;
  width: number;
  height: number;
  breakpoint: string | null;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
} {
  const [ref, entry] = useResizeObserver<T>();

  const width = entry?.width || 0;
  const height = entry?.height || 0;

  // Determine current breakpoint
  const breakpoint = Object.entries(breakpoints)
    .sort(([, a], [, b]) => b - a) // Sort descending
    .find(([, minWidth]) => width >= minWidth)?.[0] || null;

  const isMobile = width < breakpoints.md;
  const isTablet = width >= breakpoints.md && width < breakpoints.lg;
  const isDesktop = width >= breakpoints.lg;

  return {
    ref,
    width,
    height,
    breakpoint,
    isMobile,
    isTablet,
    isDesktop,
  };
}