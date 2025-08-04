'use client';

import { useCallback, useRef, useMemo, useEffect } from 'react';

/**
 * Hook to create stable callback references to prevent unnecessary re-renders
 */
export function useStableCallback<T extends (...args: any[]) => any>(
  callback: T,
  deps: React.DependencyList
): T {
  const callbackRef = useRef<T>(callback);
  
  useEffect(() => {
    callbackRef.current = callback;
  }, deps);

  return useCallback((...args: any[]) => {
    return callbackRef.current(...args);
  }, []) as T;
}

/**
 * Hook to memoize expensive calculations
 */
export function useExpensiveCalculation<T>(
  calculationFn: () => T,
  deps: React.DependencyList
): T {
  return useMemo(calculationFn, deps);
}

/**
 * Hook to debounce values for performance optimization
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

/**
 * Hook to track component render performance
 */
export function useRenderTracker(componentName: string, enabled = false) {
  const renderCount = useRef(0);
  const lastRenderTime = useRef(Date.now());
  
  useEffect(() => {
    if (!enabled) return;
    
    renderCount.current += 1;
    const currentTime = Date.now();
    const timeSinceLastRender = currentTime - lastRenderTime.current;
    
    console.log(`[${componentName}] Render #${renderCount.current}, Time since last: ${timeSinceLastRender}ms`);
    
    lastRenderTime.current = currentTime;
  });

  return {
    renderCount: renderCount.current,
    reset: () => {
      renderCount.current = 0;
      lastRenderTime.current = Date.now();
    },
  };
}

/**
 * Hook to optimize image loading with intersection observer
 */
export function useLazyImage(src: string, options: IntersectionObserverInit = {}) {
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(src);
          observer.disconnect();
        }
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [src, options]);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    setIsError(false);
  }, []);

  const handleError = useCallback(() => {
    setIsError(true);
    setIsLoaded(false);
  }, []);

  return {
    imgRef,
    src: imageSrc,
    isLoaded,
    isError,
    onLoad: handleLoad,
    onError: handleError,
  };
}

/**
 * Hook to manage component mounting state for cleanup
 */
export function useIsMounted() {
  const isMountedRef = useRef(true);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return useCallback(() => isMountedRef.current, []);
}

/**
 * Hook to prevent unnecessary re-renders with deep object comparison
 */
export function useDeepMemo<T>(value: T, isEqual?: (a: T, b: T) => boolean): T {
  const ref = useRef<T>(value);
  
  const compareValues = isEqual || ((a: T, b: T) => JSON.stringify(a) === JSON.stringify(b));
  
  if (!compareValues(ref.current, value)) {
    ref.current = value;
  }
  
  return ref.current;
}

/**
 * Hook to batch state updates for performance
 */
export function useBatchedState<T>(initialState: T) {
  const [state, setState] = useState(initialState);
  const pendingUpdates = useRef<Partial<T>[]>([]);
  const batchTimeout = useRef<NodeJS.Timeout>();

  const batchedSetState = useCallback((update: Partial<T> | ((prev: T) => Partial<T>)) => {
    const updateValue = typeof update === 'function' ? update(state) : update;
    
    pendingUpdates.current.push(updateValue);
    
    if (batchTimeout.current) {
      clearTimeout(batchTimeout.current);
    }
    
    batchTimeout.current = setTimeout(() => {
      setState(prevState => {
        const finalUpdate = pendingUpdates.current.reduce(
          (acc, update) => ({ ...acc, ...update }),
          {} as Partial<T>
        );
        
        pendingUpdates.current = [];
        return { ...prevState, ...finalUpdate };
      });
    }, 0);
  }, [state]);

  return [state, batchedSetState] as const;
}

// Import useState for hooks that need it
import { useState } from 'react';