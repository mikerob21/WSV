// Enhanced business domain types for WSV
export interface BaseEntity {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Performance and metrics interfaces
export interface PerformanceMetric {
  value: string;
  label: string;
  source: string;
  trend?: 'up' | 'down' | 'stable';
  change?: number;
  period?: string;
}

export interface CompanyMetric extends PerformanceMetric {
  category: 'engagement' | 'financial' | 'growth' | 'partnerships';
  isPublic: boolean;
  verified: boolean;
}

// Risk assessment and investment interfaces
export interface RiskAssessment {
  level: 'low' | 'medium' | 'high';
  factors: string[];
  mitigation: string[];
  lastUpdated: Date;
}

export interface InvestmentDetails {
  stage: 'pre-seed' | 'seed' | 'series-a' | 'series-b' | 'growth' | 'acquisition';
  amount?: string;
  date: Date;
  leadInvestor?: string;
  coinvestors?: string[];
  valuation?: string;
}

// Enhanced portfolio company interface
export interface EnhancedPortfolioCompany extends BaseEntity {
  name: string;
  type: string;
  website: string;
  description: string;
  competitiveAdvantage: string;
  
  // Enhanced metrics
  metrics: CompanyMetric[];
  performanceIndicators: PerformanceMetric[];
  
  // Business details
  primaryBrandColors: string[];
  socialMediaHandles: Record<string, string>;
  logoUrl: string | null;
  foundedYear: number | null;
  
  // Performance tracking
  recentAchievements: Achievement[];
  industryTags: string[];
  keyPartnerships: Partnership[];
  
  // Investment information
  investmentDetails?: InvestmentDetails;
  riskProfile?: RiskAssessment;
  
  // Status and tracking
  status: 'active' | 'exited' | 'monitoring';
  lastReviewDate?: Date;
  nextMilestone?: string;
}

export interface Achievement {
  title: string;
  description?: string;
  date: Date;
  impact: 'high' | 'medium' | 'low';
  category: 'partnership' | 'growth' | 'recognition' | 'milestone';
  verified: boolean;
}

export interface Partnership {
  name: string;
  type: 'strategic' | 'commercial' | 'technology' | 'distribution';
  status: 'active' | 'pending' | 'completed';
  announcementDate?: Date;
  value?: string;
}

// Investment focus areas
export interface InvestmentFocus {
  area: 'technology' | 'media' | 'clubs' | 'infrastructure' | 'talent';
  description: string;
  allocation: number; // percentage
  activeInvestments: number;
  targetRange: {
    min: number;
    max: number;
  };
}

// Founder and team interfaces
export interface FounderProfile extends BaseEntity {
  name: string;
  title: string;
  bio: string;
  experience: ExperienceItem[];
  achievements: string[];
  socialLinks: Record<string, string>;
  imageUrl?: string;
}

export interface ExperienceItem {
  title: string;
  organization: string;
  duration: string;
  description?: string;
  type: 'professional' | 'athletic' | 'academic' | 'board';
}

// Analytics and reporting interfaces
export interface PortfolioAnalytics {
  totalCompanies: number;
  totalInvestment: string;
  averageInvestment: string;
  exitCount: number;
  activeMonitoring: number;
  performanceByCategory: Record<string, PerformanceMetric[]>;
  riskDistribution: Record<string, number>;
  geographicDistribution: Record<string, number>;
}

export interface DashboardData {
  overview: PortfolioAnalytics;
  recentActivity: Achievement[];
  upcomingMilestones: string[];
  performanceAlerts: string[];
  marketInsights: string[];
}

// Animation and UI state interfaces
export interface AnimationState {
  isVisible: boolean;
  hasAnimated: boolean;
  currentStep: number;
  totalSteps: number;
}

export interface UIState {
  loading: boolean;
  error: string | null;
  selectedCompany: string | null;
  filterState: FilterState;
  sortState: SortState;
}

export interface FilterState {
  industry: string[];
  stage: string[];
  riskLevel: string[];
  status: string[];
}

export interface SortState {
  field: string;
  direction: 'asc' | 'desc';
}