// Custom hooks exports
export { useMousePosition } from './useMousePosition';
export { useStableHover } from './useStableHover';
export { useScrollPosition, useInViewport } from './useScrollPosition';
export { useAnimationSequence, useStaggerAnimation } from './useAnimationSequence';
export { usePortfolioData, usePortfolioCompany, usePortfolioMetrics } from './usePortfolioData';
export {
  useStableCallback as useStableCallbackPerf,
  useExpensiveCalculation as useExpensiveCalculationPerf,
  useDebounce,
  useRenderTracker,
  useLazyImage,
  useIsMounted,
  useDeepMemo,
  useBatchedState,
} from './usePerformanceOptimization';

// Enhanced Performance Hooks
export { useStableCallback, useEventHandler, useAsyncClickHandler } from './useStableCallback';
export { useResizeObserver, useElementBreakpoints } from './useResizeObserver';
export { useExpensiveCalculation, useAdvancedMemo, useThrottledOperation } from './useExpensiveCalculation';