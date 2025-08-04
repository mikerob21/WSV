'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { PortfolioCompany } from '@/data/portfolio';
import { portfolioData } from '@/data/portfolio';
import { FilterState, SortState } from '@/types';

interface UsePortfolioDataOptions {
  initialFilters?: Partial<FilterState>;
  initialSort?: SortState;
}

interface UsePortfolioDataReturn {
  companies: PortfolioCompany[];
  filteredCompanies: PortfolioCompany[];
  loading: boolean;
  error: string | null;
  filters: FilterState;
  sort: SortState;
  stats: {
    total: number;
    filtered: number;
    categories: Record<string, number>;
  };
  actions: {
    setFilter: (key: keyof FilterState, value: string[]) => void;
    clearFilters: () => void;
    setSort: (field: string, direction: 'asc' | 'desc') => void;
    refreshData: () => void;
  };
}

/**
 * Hook to manage portfolio data with filtering, sorting, and caching
 */
export function usePortfolioData({
  initialFilters = {},
  initialSort = { field: 'name', direction: 'asc' },
}: UsePortfolioDataOptions = {}): UsePortfolioDataReturn {
  const [companies, setCompanies] = useState<PortfolioCompany[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [filters, setFilters] = useState<FilterState>({
    industry: [],
    stage: [],
    riskLevel: [],
    status: [],
    ...initialFilters,
  });
  
  const [sort, setSort] = useState<SortState>(initialSort);

  // Load portfolio data
  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Simulate API call delay in development
      if (process.env.NODE_ENV === 'development') {
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      
      setCompanies(portfolioData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load portfolio data');
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial data load
  useEffect(() => {
    loadData();
  }, [loadData]);

  // Filter and sort companies
  const filteredCompanies = useMemo(() => {
    let filtered = [...companies];

    // Apply filters
    if (filters.industry.length > 0) {
      filtered = filtered.filter(company =>
        filters.industry.some(industry =>
          company.industryTags.includes(industry)
        )
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      const aValue = a[sort.field as keyof PortfolioCompany];
      const bValue = b[sort.field as keyof PortfolioCompany];
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        const comparison = aValue.localeCompare(bValue);
        return sort.direction === 'asc' ? comparison : -comparison;
      }
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        const comparison = aValue - bValue;
        return sort.direction === 'asc' ? comparison : -comparison;
      }
      
      return 0;
    });

    return filtered;
  }, [companies, filters, sort]);

  // Calculate stats
  const stats = useMemo(() => {
    const categories = companies.reduce((acc, company) => {
      company.industryTags.forEach(tag => {
        acc[tag] = (acc[tag] || 0) + 1;
      });
      return acc;
    }, {} as Record<string, number>);

    return {
      total: companies.length,
      filtered: filteredCompanies.length,
      categories,
    };
  }, [companies, filteredCompanies]);

  // Actions
  const setFilter = useCallback((key: keyof FilterState, value: string[]) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({
      industry: [],
      stage: [],
      riskLevel: [],
      status: [],
    });
  }, []);

  const setSortState = useCallback((field: string, direction: 'asc' | 'desc') => {
    setSort({ field, direction });
  }, []);

  return {
    companies,
    filteredCompanies,
    loading,
    error,
    filters,
    sort,
    stats,
    actions: {
      setFilter,
      clearFilters,
      setSort: setSortState,
      refreshData: loadData,
    },
  };
}

/**
 * Hook to get a specific portfolio company
 */
export function usePortfolioCompany(companyName: string) {
  return useMemo(() => {
    return portfolioData.find(company => 
      company.name.toLowerCase() === companyName.toLowerCase()
    );
  }, [companyName]);
}

/**
 * Hook to calculate portfolio metrics
 */
export function usePortfolioMetrics() {
  return useMemo(() => {
    const totalCompanies = portfolioData.length;
    const totalViews = portfolioData.reduce((sum, company) => {
      const viewMetric = company.metrics.find(m => m.label.includes('Views'));
      if (viewMetric) {
        const value = viewMetric.value.replace(/[^\d]/g, '');
        return sum + parseInt(value, 10);
      }
      return sum;
    }, 0);

    const totalFollowers = portfolioData.reduce((sum, company) => {
      const followerMetrics = company.metrics.filter(m => 
        m.label.includes('Followers') || m.label.includes('Reach')
      );
      return sum + followerMetrics.reduce((metricSum, metric) => {
        const value = metric.value.replace(/[^\d]/g, '');
        return metricSum + parseInt(value, 10);
      }, 0);
    }, 0);

    const industryBreakdown = portfolioData.reduce((acc, company) => {
      company.industryTags.forEach(tag => {
        acc[tag] = (acc[tag] || 0) + 1;
      });
      return acc;
    }, {} as Record<string, number>);

    return {
      totalCompanies,
      totalViews,
      totalFollowers,
      industryBreakdown,
      averageMetrics: {
        viewsPerCompany: Math.round(totalViews / totalCompanies),
        followersPerCompany: Math.round(totalFollowers / totalCompanies),
      },
    };
  }, []);
}