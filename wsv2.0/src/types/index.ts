// Centralized type exports for the application
export type {
  BaseComponentProps,
  ComponentSize,
  ComponentVariant,
  AnimationConfig,
  ButtonProps,
  CardProps,
  InputProps,
  ModalProps,
  TypographyProps,
  ContainerProps,
  LayoutProps,
  ErrorBoundaryProps,
  LoadingProps,
  ComponentProps,
} from './components';

export type {
  BaseEntity,
  PerformanceMetric,
  CompanyMetric,
  RiskAssessment,
  InvestmentDetails,
  EnhancedPortfolioCompany,
  Achievement,
  Partnership,
  InvestmentFocus,
  FounderProfile,
  ExperienceItem,
  PortfolioAnalytics,
  DashboardData,
  AnimationState,
  UIState,
  FilterState,
  SortState,
} from './business';

// Re-export original portfolio types for backward compatibility
export type { PortfolioCompany } from '../data/portfolio';