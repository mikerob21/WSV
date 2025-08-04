# WSV 2.0 - Enterprise Next.js Application

## Project Overview
This is an enterprise Next.js application built with TypeScript, React 19, and Tailwind CSS v4, featuring a comprehensive component architecture and design system optimized for performance and maintainability.

## Tech Stack
- **Framework**: Next.js 15.4.5
- **Language**: TypeScript 5
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS v4 + Modular Design Tokens
- **Build Tool**: Turbopack (dev mode)
- **Animation**: Framer Motion (optimized imports)
- **State Management**: React Context + Custom Hooks
- **Performance**: React.memo, useMemo, useCallback, Code Splitting

## Enterprise Architecture

### Project Structure
```
wsv2.0/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout with error boundaries
│   │   ├── page.tsx           # Optimized home page
│   │   └── globals.css        # Imports modular design tokens
│   ├── components/             # Component Architecture
│   │   ├── ui/                # Core UI Components
│   │   │   ├── Button/        # Enterprise Button component
│   │   │   ├── Card/          # Flexible Card component
│   │   │   ├── Typography/    # Typography system
│   │   │   ├── Input/         # Form input component
│   │   │   ├── ErrorBoundary/ # Error handling component
│   │   │   └── Loading/       # Loading states component
│   │   ├── layout/            # Layout Components
│   │   │   └── Navigation/    # Optimized navigation
│   │   ├── business/          # Domain-Specific Components
│   │   │   ├── StatisticsGrid/
│   │   │   ├── FloatingOrbs/
│   │   │   └── ScrollIndicator/
│   │   ├── sections/          # Page Sections
│   │   │   └── HeroSection/   # Refactored hero section
│   │   └── optimized/         # Performance-Optimized Components
│   │       ├── LazyComponents.tsx
│   │       └── OptimizedHeroSection.tsx
│   ├── hooks/                 # Custom Hooks
│   │   ├── useMousePosition.ts
│   │   ├── useScrollPosition.ts
│   │   ├── useAnimationSequence.ts
│   │   ├── usePortfolioData.ts
│   │   └── usePerformanceOptimization.ts
│   ├── lib/                   # Utilities
│   │   └── utils.ts          # Helper functions
│   ├── styles/               # Modular Design System
│   │   └── tokens/           # Design Tokens
│   │       ├── colors.css    # Color system
│   │       ├── typography.css # Typography tokens
│   │       ├── spacing.css   # Spacing & layout
│   │       ├── animations.css # Animation system
│   │       └── index.css     # Token orchestration
│   ├── types/                # TypeScript Definitions
│   │   ├── components.ts     # Component interfaces
│   │   ├── business.ts       # Business domain types
│   │   └── index.ts          # Type exports
│   └── data/                 # Data Layer
│       └── portfolio.ts      # Portfolio data
```

## Enterprise Development Standards

### Component Development Standards

#### Component Structure Pattern
```typescript
// Standard enterprise component pattern
interface ComponentProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  data?: T;
  loading?: boolean;
  error?: string | null;
}

export const Component = memo<ComponentProps>(({ 
  variant = 'primary',
  size = 'medium',
  className,
  children,
  ...props 
}) => {
  return (
    <div className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {children}
    </div>
  );
});

Component.displayName = 'Component';
```

### Performance Standards
- **ALWAYS** use React.memo() for components with complex props
- **ALWAYS** use useMemo() for expensive calculations
- **ALWAYS** use useCallback() for event handlers passed to child components
- **NEVER** create objects or functions inside render methods
- **ALWAYS** implement code splitting for route-level components
- **USE** lazy loading for heavy components and images
- **IMPLEMENT** proper cleanup in useEffect hooks

### TypeScript Standards
- **ALL** components must have proper TypeScript interfaces
- **ALL** props must be typed with strict interfaces extending BaseComponentProps
- **NO** any types allowed in production code
- **ALL** API responses must be typed with business domain interfaces
- **USE** generic types for reusable components
- **IMPLEMENT** discriminated unions for variant props

### Animation Standards
- **USE** centralized animation presets from design system tokens
- **IMPLEMENT** proper animation cleanup in useEffect
- **USE** Framer Motion's optimized imports: `from 'framer-motion/dist/framer-motion'`
- **IMPLEMENT** reduced motion support with `@media (prefers-reduced-motion: reduce)`
- **NEVER** block main thread with animations
- **USE** GPU acceleration with `transform: translateZ(0)` for complex animations

### State Management Standards
- **USE** Context API for global state with proper provider patterns
- **USE** custom hooks for business logic and data fetching
- **KEEP** component state local when possible
- **IMPLEMENT** proper state normalization for complex data
- **USE** immutable update patterns with proper TypeScript typing
- **IMPLEMENT** error states and loading states consistently

### CSS & Design System Standards
- **USE** modular design tokens from `src/styles/tokens/`
- **FOLLOW** BEM-inspired naming conventions for custom classes
- **USE** CSS custom properties for theming and consistency
- **IMPLEMENT** mobile-first responsive design patterns
- **USE** logical properties (margin-inline, padding-block) for better RTL support
- **LEVERAGE** CSS Grid and Flexbox for layouts
- **MAINTAIN** consistent spacing using design token scale

### Testing Standards
- **WRITE** unit tests for all custom hooks using React Testing Library
- **WRITE** integration tests for complex business components
- **USE** React Testing Library for component testing patterns
- **MOCK** external dependencies and API calls in tests
- **ACHIEVE** 80%+ code coverage for business logic
- **TEST** error boundaries and loading states
- **IMPLEMENT** accessibility testing in component tests

### Development Workflow Standards
- **RUN** `npm run lint` before every commit
- **RUN** `npm run build` to verify production builds locally
- **USE** TypeScript strict mode with proper configuration
- **IMPLEMENT** pre-commit hooks for code quality enforcement
- **DOCUMENT** complex business logic with comprehensive JSDoc
- **USE** conventional commit messages for changelog generation

### Security Standards
- **SANITIZE** all user inputs and dynamic content
- **USE** Content Security Policy headers in production
- **IMPLEMENT** proper error boundaries to prevent information leakage
- **NEVER** expose sensitive data in client-side bundles
- **USE** environment variables for all configuration
- **VALIDATE** all external data with TypeScript guards
- **IMPLEMENT** proper HTTPS and security headers

### Performance Monitoring Standards
- **MONITOR** Core Web Vitals in production environment
- **USE** React DevTools Profiler for performance debugging
- **IMPLEMENT** bundle analysis in CI/CD pipeline
- **TRACK** component render performance with custom hooks
- **MONITOR** memory usage patterns and prevent leaks
- **IMPLEMENT** performance budgets and alerts
- **USE** lighthouse CI for performance regression detection

### Error Handling Patterns
- **IMPLEMENT** ErrorBoundary components at route level
- **USE** proper error types with discriminated unions
- **LOG** errors to monitoring service (e.g., Sentry)
- **PROVIDE** user-friendly error messages
- **IMPLEMENT** retry mechanisms for transient failures
- **GRACEFUL** degradation for non-critical features

### Accessibility Standards
- **IMPLEMENT** WCAG 2.1 AA compliance minimum
- **USE** semantic HTML elements and proper ARIA attributes
- **ENSURE** keyboard navigation support for all interactive elements
- **PROVIDE** proper focus management and visual indicators
- **TEST** with screen readers and accessibility tools
- **IMPLEMENT** proper color contrast ratios
- **SUPPORT** reduced motion preferences

## Available Scripts & Commands

### Development Commands
- **Start Development**: `npm run dev` (with Turbopack)
- **Build for Production**: `npm run build`
- **Start Production**: `npm run start`
- **Type Checking**: `npx tsc --noEmit`
- **Linting**: `npm run lint`

### Architecture Commands
```bash
# Component development
npm run dev              # Start with hot reload
npm run build           # Production build with optimizations
npm run lint            # ESLint with enterprise rules
npx tsc --noEmit       # Type checking without emit

# Performance analysis
npm run build:analyze   # Bundle analysis (add to package.json)
npm run test:perf      # Performance testing (add to package.json)
```

## Component Usage Patterns

### Using Enterprise Components
```typescript
import { Button, Card, Typography, ErrorBoundary } from '@/components/ui';
import { Navigation } from '@/components/layout';
import { StatisticsGrid } from '@/components/business';
import { OptimizedHeroSection } from '@/components/optimized';

// Error boundary wrapped usage
<ErrorBoundary>
  <Navigation />
  <OptimizedHeroSection />
  <StatisticsGrid data={stats} columns={4} animated />
</ErrorBoundary>
```

### Custom Hook Usage
```typescript
import { usePortfolioData, useMousePosition, useAnimationSequence } from '@/hooks';

const Component = () => {
  const { companies, loading, error } = usePortfolioData();
  const mousePosition = useMousePosition({ throttleMs: 16 });
  const { controls } = useAnimationSequence({ steps, autoStart: true });
  
  // Component logic...
};
```

### Performance Optimization Patterns
```typescript
import { memo, useMemo, useCallback } from 'react';
import { useStableCallback, useExpensiveCalculation } from '@/hooks';

const OptimizedComponent = memo<Props>(({ data, onAction }) => {
  const expensiveValue = useExpensiveCalculation(() => 
    heavyCalculation(data), [data]
  );
  
  const stableCallback = useStableCallback(onAction, []);
  
  return <div>{/* Component JSX */}</div>;
});
```

## Migration Guidelines

### Legacy Component Migration
1. **Identify** components that need refactoring
2. **Extract** business logic into custom hooks
3. **Replace** with enterprise UI components
4. **Add** proper TypeScript interfaces
5. **Implement** error boundaries and loading states
6. **Test** performance improvements

### Design System Migration
1. **Replace** hardcoded styles with design tokens
2. **Use** semantic typography classes
3. **Implement** consistent spacing scale
4. **Add** proper animation classes
5. **Test** responsive behavior across devices

## Deployment & Production

### Build Optimization
- Automatic code splitting by route
- Tree shaking for unused code elimination
- CSS optimization and minification
- Image optimization with Next.js Image component
- Static asset optimization and caching

### Production Checklist
- [ ] All components have proper error boundaries
- [ ] Performance monitoring is configured
- [ ] Security headers are implemented
- [ ] Accessibility testing is completed
- [ ] Bundle size is within acceptable limits
- [ ] Core Web Vitals meet performance targets

This enterprise architecture ensures maintainable, performant, and scalable frontend development with comprehensive type safety, error handling, and professional development patterns.