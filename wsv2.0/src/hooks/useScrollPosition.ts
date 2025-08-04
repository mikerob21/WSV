'use client';

import { useState, useEffect, useCallback } from 'react';
import { throttle } from '@/lib/utils';

interface ScrollPosition {
  x: number;
  y: number;
  direction: 'up' | 'down' | 'none';
}

interface UseScrollPositionOptions {
  throttleMs?: number;
  enabled?: boolean;
}

/**
 * Hook to track scroll position and direction with performance optimization
 */
export function useScrollPosition({
  throttleMs = 16, // ~60fps
  enabled = true,
}: UseScrollPositionOptions = {}): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    direction: 'none',
  });

  const updateScrollPosition = useCallback(
    throttle(() => {
      const currentY = window.scrollY;
      const currentX = window.scrollX;
      
      setScrollPosition(prev => ({
        x: currentX,
        y: currentY,
        direction: currentY > prev.y ? 'down' : currentY < prev.y ? 'up' : 'none',
      }));
    }, throttleMs),
    [throttleMs]
  );

  useEffect(() => {
    if (!enabled) return;

    // Set initial position
    setScrollPosition({
      x: window.scrollX,
      y: window.scrollY,
      direction: 'none',
    });

    window.addEventListener('scroll', updateScrollPosition);
    
    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, [updateScrollPosition, enabled]);

  return scrollPosition;
}

/**
 * Hook to detect if an element is in viewport
 */
export function useInViewport(
  ref: React.RefObject<Element>,
  threshold = 0.1
): boolean {
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold]);

  return isInViewport;
}