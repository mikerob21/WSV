'use client';

import { useState, useCallback, useRef } from 'react';

interface UseStableHoverOptions {
  enterDelay?: number;
  leaveDelay?: number;
}

/**
 * Hook for stable hover detection that prevents glitches and accidental triggers
 * Uses debouncing to ensure smooth hover states
 */
export function useStableHover<T>({
  enterDelay = 50,
  leaveDelay = 100,
}: UseStableHoverOptions = {}) {
  const [hoveredItem, setHoveredItem] = useState<T | null>(null);
  const enterTimeoutRef = useRef<NodeJS.Timeout>();
  const leaveTimeoutRef = useRef<NodeJS.Timeout>();

  const handleHoverStart = useCallback((item: T) => {
    // Clear any pending leave timeout
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = undefined;
    }

    // Set enter timeout for stable hover detection
    enterTimeoutRef.current = setTimeout(() => {
      setHoveredItem(item);
    }, enterDelay);
  }, [enterDelay]);

  const handleHoverEnd = useCallback(() => {
    // Clear any pending enter timeout
    if (enterTimeoutRef.current) {
      clearTimeout(enterTimeoutRef.current);
      enterTimeoutRef.current = undefined;
    }

    // Set leave timeout for stable hover detection
    leaveTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, leaveDelay);
  }, [leaveDelay]);

  const clearHover = useCallback(() => {
    if (enterTimeoutRef.current) {
      clearTimeout(enterTimeoutRef.current);
      enterTimeoutRef.current = undefined;
    }
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = undefined;
    }
    setHoveredItem(null);
  }, []);

  return {
    hoveredItem,
    handleHoverStart,
    handleHoverEnd,
    clearHover,
  };
}