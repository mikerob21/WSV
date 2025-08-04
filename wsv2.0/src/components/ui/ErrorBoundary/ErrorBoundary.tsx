'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { ErrorBoundaryProps } from '@/types';
import { Card } from '../Card';
import { Typography } from '../Typography';
import { Button } from '../Button';

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo,
    });

    // Call optional error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <Card variant="outlined" className="max-w-2xl mx-auto my-8">
          <div className="text-center py-8">
            <div className="text-6xl mb-4">⚠️</div>
            <Typography variant="heading-secondary" className="mb-4">
              Something went wrong
            </Typography>
            <Typography variant="body-default" color="secondary" className="mb-6">
              We apologize for the inconvenience. Please try refreshing the page or contact support if the problem persists.
            </Typography>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                onClick={this.handleReset}
              >
                Try Again
              </Button>
              <Button
                variant="outline"
                onClick={() => window.location.reload()}
              >
                Refresh Page
              </Button>
            </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="cursor-pointer text-sm text-neutral-600 hover:text-neutral-800">
                  Show Error Details (Development Only)
                </summary>
                <div className="mt-4 p-4 bg-neutral-100 rounded-lg">
                  <Typography variant="body-small" className="font-mono text-error">
                    {this.state.error.toString()}
                  </Typography>
                  {this.state.errorInfo && (
                    <pre className="mt-2 text-xs text-neutral-600 overflow-auto">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  )}
                </div>
              </details>
            )}
          </div>
        </Card>
      );
    }

    return this.props.children;
  }
}