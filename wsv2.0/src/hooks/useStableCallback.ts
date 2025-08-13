'use client';

import { useCallback, useRef, useState } from 'react';

/**
 * A hook that returns a stable callback that always calls the latest version of the provided function.
 * This is useful for preventing unnecessary re-renders when passing callbacks to child components.
 * 
 * @param callback The callback function to stabilize
 * @param deps Optional dependency array (for TypeScript satisfaction)
 * @returns A stable callback reference
 */
export function useStableCallback<T extends (...args: unknown[]) => unknown>(
  callback: T,
  deps?: React.DependencyList
): T {
  const callbackRef = useRef(callback);
  
  // Update the ref whenever the callback changes
  callbackRef.current = callback;
  
  // Create a stable wrapper function
  const stableCallback = useCallback(
    ((...args: Parameters<T>) => {
      return callbackRef.current(...args);
    }) as T,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps || []
  );
  
  return stableCallback;
}

/**
 * A hook that provides event handlers optimized for performance.
 * Automatically stabilizes the callback and provides common event utilities.
 * 
 * @param callback The event handler function
 * @param options Configuration options
 * @returns Optimized event handler
 */
export function useEventHandler<T extends Event>(
  callback: (event: T) => void,
  options: {
    preventDefault?: boolean;
    stopPropagation?: boolean;
    passive?: boolean;
  } = {}
): (event: T) => void {
  const { preventDefault = false, stopPropagation = false } = options;
  
  const stableCallback = useStableCallback(callback);
  
  return useCallback(
    (event: T) => {
      if (preventDefault) {
        event.preventDefault();
      }
      
      if (stopPropagation) {
        event.stopPropagation();
      }
      
      stableCallback(event);
    },
    [stableCallback, preventDefault, stopPropagation]
  );
}

/**
 * A hook for creating optimized click handlers with built-in loading states.
 * 
 * @param callback The async click handler
 * @param options Configuration options
 * @returns Object with handler and loading state
 */
export function useAsyncClickHandler(
  callback: () => Promise<void> | void,
  options: {
    disabled?: boolean;
    preventDefault?: boolean;
  } = {}
): {
  handler: (event: React.MouseEvent) => Promise<void>;
  isLoading: boolean;
} {
  const { disabled = false, preventDefault = true } = options;
  const [isLoading, setIsLoading] = useState(false);
  
  const handler = useCallback(
    async (event: React.MouseEvent) => {
      if (disabled || isLoading) return;
      
      if (preventDefault) {
        event.preventDefault();
      }
      
      try {
        setIsLoading(true);
        await callback();
      } catch (error) {
        console.error('Async click handler error:', error);
      } finally {
        setIsLoading(false);
      }
    },
    [callback, disabled, isLoading, preventDefault]
  );
  
  return { handler, isLoading };
}