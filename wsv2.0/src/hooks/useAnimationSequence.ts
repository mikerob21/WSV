'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { AnimationConfig } from '@/types';

interface AnimationStep {
  id: string;
  config: AnimationConfig;
  trigger?: 'immediate' | 'delay' | 'scroll' | 'hover';
}

interface UseAnimationSequenceOptions {
  steps: AnimationStep[];
  autoStart?: boolean;
  resetOnComplete?: boolean;
}

interface AnimationSequenceState {
  currentStep: number;
  isPlaying: boolean;
  isComplete: boolean;
  activeSteps: Set<string>;
}

/**
 * Hook to manage complex animation sequences with performance optimization
 */
export function useAnimationSequence({
  steps,
  autoStart = true,
  resetOnComplete = false,
}: UseAnimationSequenceOptions) {
  const [state, setState] = useState<AnimationSequenceState>({
    currentStep: 0,
    isPlaying: false,
    isComplete: false,
    activeSteps: new Set(),
  });

  // Memoize animation configs to prevent unnecessary recalculations
  const animationConfigs = useMemo(() => {
    return steps.reduce((acc, step) => {
      acc[step.id] = step.config;
      return acc;
    }, {} as Record<string, AnimationConfig>);
  }, [steps]);

  const startSequence = useCallback(() => {
    setState(prev => ({ ...prev, isPlaying: true, isComplete: false }));
  }, []);

  const pauseSequence = useCallback(() => {
    setState(prev => ({ ...prev, isPlaying: false }));
  }, []);

  const resetSequence = useCallback(() => {
    setState({
      currentStep: 0,
      isPlaying: false,
      isComplete: false,
      activeSteps: new Set(),
    });
  }, []);

  const playStep = useCallback((stepId: string) => {
    setState(prev => ({
      ...prev,
      activeSteps: new Set([...prev.activeSteps, stepId]),
    }));
  }, []);

  // Auto-start sequence
  useEffect(() => {
    if (autoStart && steps.length > 0) {
      startSequence();
    }
  }, [autoStart, steps.length, startSequence]);

  // Handle step progression
  useEffect(() => {
    if (!state.isPlaying || state.isComplete) return;

    const currentStepData = steps[state.currentStep];
    if (!currentStepData) return;

    const delay = currentStepData.config.delay || 0;
    const duration = currentStepData.config.duration || 300;

    const timer = setTimeout(() => {
      playStep(currentStepData.id);

      // Move to next step after duration
      setTimeout(() => {
        setState(prev => {
          const nextStep = prev.currentStep + 1;
          const isComplete = nextStep >= steps.length;

          if (isComplete && resetOnComplete) {
            return {
              currentStep: 0,
              isPlaying: false,
              isComplete: true,
              activeSteps: new Set(),
            };
          }

          return {
            ...prev,
            currentStep: nextStep,
            isComplete,
          };
        });
      }, duration);
    }, delay);

    return () => clearTimeout(timer);
  }, [state.currentStep, state.isPlaying, state.isComplete, steps, playStep, resetOnComplete]);

  return {
    ...state,
    animationConfigs,
    controls: {
      start: startSequence,
      pause: pauseSequence,
      reset: resetSequence,
      playStep,
    },
  };
}

/**
 * Hook for simple stagger animations
 */
export function useStaggerAnimation(
  itemCount: number,
  staggerDelay = 100,
  autoStart = true
) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  const startStagger = useCallback(() => {
    setVisibleItems(new Set());
    
    for (let i = 0; i < itemCount; i++) {
      setTimeout(() => {
        setVisibleItems(prev => new Set([...prev, i]));
      }, i * staggerDelay);
    }
  }, [itemCount, staggerDelay]);

  const resetStagger = useCallback(() => {
    setVisibleItems(new Set());
  }, []);

  useEffect(() => {
    if (autoStart) {
      startStagger();
    }
  }, [autoStart, startStagger]);

  return {
    visibleItems,
    isItemVisible: (index: number) => visibleItems.has(index),
    controls: {
      start: startStagger,
      reset: resetStagger,
    },
  };
}