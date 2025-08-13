'use client';

import { useMemo, useRef, useState, useEffect } from 'react';

/**
 * Hook for expensive calculations with performance optimization and caching
 * 
 * @param calculation The expensive calculation function
 * @param dependencies Dependency array for recalculation
 * @param options Configuration options
 * @returns The calculated value and loading state
 */
export function useExpensiveCalculation<T>(
  calculation: () => T,
  dependencies: React.DependencyList,
  options: {
    debounceMs?: number;
    cacheSize?: number;
    enableCache?: boolean;
  } = {}
): {
  value: T | undefined;
  isCalculating: boolean;
  error: Error | null;
} {
  const { debounceMs = 100, cacheSize = 10, enableCache = true } = options;
  
  const [value, setValue] = useState<T | undefined>(undefined);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  
  const cacheRef = useRef<Map<string, T>>(new Map());
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Create cache key from dependencies
  const cacheKey = useMemo(() => {
    return JSON.stringify(dependencies);
  }, dependencies);
  
  // Debounced calculation function
  const performCalculation = useMemo(
    () => {
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        
        timeoutRef.current = setTimeout(async () => {
          setIsCalculating(true);
          setError(null);
          
          try {
            // Check cache first
            if (enableCache && cacheRef.current.has(cacheKey)) {
              const cachedValue = cacheRef.current.get(cacheKey)!;
              setValue(cachedValue);
              setIsCalculating(false);
              return;
            }
            
            // Perform calculation
            const result = await Promise.resolve(calculation());
            
            // Cache the result
            if (enableCache) {
              // Implement LRU cache behavior
              if (cacheRef.current.size >= cacheSize) {
                const firstKey = cacheRef.current.keys().next().value;
                cacheRef.current.delete(firstKey);
              }
              cacheRef.current.set(cacheKey, result);
            }
            
            setValue(result);
          } catch (err) {
            setError(err instanceof Error ? err : new Error('Calculation failed'));
          } finally {
            setIsCalculating(false);
          }
        }, debounceMs);
      };
    },
    [calculation, cacheKey, debounceMs, enableCache, cacheSize]
  );
  
  // Trigger calculation when dependencies change
  useEffect(() => {
    performCalculation();
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [performCalculation]);
  
  return { value, isCalculating, error };
}

/**
 * Hook for memoizing expensive operations with advanced caching strategies
 * 
 * @param factory Function that creates the expensive value
 * @param deps Dependency array
 * @param cacheStrategy Caching strategy to use
 * @returns Memoized value
 */
export function useAdvancedMemo<T>(
  factory: () => T,
  deps: React.DependencyList,
  cacheStrategy: 'standard' | 'deep' | 'weak' = 'standard'
): T {
  const weakCache = useRef<WeakMap<object, T>>(new WeakMap());
  
  // Standard memoization for most cases
  const standardResult = useMemo(() => {
    if (cacheStrategy === 'standard') {
      return factory();
    }
    return null;
  }, cacheStrategy === 'standard' ? deps : []);
  
  // Deep comparison memoization
  const deepDeps = useMemo(() => JSON.stringify(deps), deps);
  const deepResult = useMemo(() => {
    if (cacheStrategy === 'deep') {
      return factory();
    }
    return null;
  }, cacheStrategy === 'deep' ? [deepDeps] : []);
  
  // WeakMap-based memoization for object dependencies
  const weakResult = useMemo(() => {
    if (cacheStrategy !== 'weak') {
      return null;
    }
    
    const objectDeps = deps.filter(dep => typeof dep === 'object' && dep !== null);
    
    if (objectDeps.length === 0) {
      return factory();
    }
    
    // Use first object as cache key
    const cacheKey = objectDeps[0];
    
    if (weakCache.current.has(cacheKey)) {
      return weakCache.current.get(cacheKey)!;
    }
    
    const result = factory();
    weakCache.current.set(cacheKey, result);
    return result;
  }, cacheStrategy === 'weak' ? deps : []);
  
  return (standardResult || deepResult || weakResult) as T;
}

/**
 * Hook for creating throttled expensive operations
 * 
 * @param operation The operation to throttle
 * @param delay Throttle delay in milliseconds
 * @returns Throttled operation and loading state
 */
export function useThrottledOperation<T extends (...args: unknown[]) => unknown>(
  operation: T,
  delay: number = 300
): {
  throttledOperation: T;
  isThrottling: boolean;
} {
  const [isThrottling, setIsThrottling] = useState(false);
  const lastCallRef = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  const throttledOperation = useMemo(
    () => {
      return ((...args: Parameters<T>) => {
        const now = Date.now();
        const timeSinceLastCall = now - lastCallRef.current;
        
        if (timeSinceLastCall >= delay) {
          lastCallRef.current = now;
          return operation(...args);
        }
        
        setIsThrottling(true);
        
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        
        timeoutRef.current = setTimeout(() => {
          lastCallRef.current = Date.now();
          setIsThrottling(false);
          return operation(...args);
        }, delay - timeSinceLastCall);
      }) as T;
    },
    [operation, delay]
  );
  
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  
  return { throttledOperation, isThrottling };
}