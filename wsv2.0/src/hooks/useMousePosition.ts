'use client';

import { useState, useEffect, useCallback } from 'react';
import { throttle } from '@/lib/utils';

interface MousePosition {
  x: number;
  y: number;
}

interface UseMousePositionOptions {
  throttleMs?: number;
  enabled?: boolean;
}

/**
 * Hook to track mouse position with performance optimization
 * Uses throttling to prevent excessive re-renders
 */
export function useMousePosition({
  throttleMs = 16, // ~60fps
  enabled = true,
}: UseMousePositionOptions = {}): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  const updateMousePosition = useCallback(
    throttle((e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }, throttleMs),
    [throttleMs]
  );

  useEffect(() => {
    if (!enabled) return;

    window.addEventListener('mousemove', updateMousePosition);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [updateMousePosition, enabled]);

  return mousePosition;
}