// src/utils/lazyLoading.tsx
import React, { lazy } from 'react';

// Network-aware loading utilities
export const getConnectionType = () => {
  if (typeof navigator === 'undefined' || !(navigator as any).connection) {
    return 'unknown';
  }
  return (navigator as any).connection.effectiveType;
};

export const isSlowConnection = () => {
  const connectionType = getConnectionType();
  return connectionType === 'slow-2g' || connectionType === '2g';
};

export const isFastConnection = () => {
  const connectionType = getConnectionType();
  return connectionType === '4g' || connectionType === '5g';
};

// Enhanced lazy loading with network awareness
export const createLazyComponent = <T extends React.ComponentType<unknown>>(
  importFunc: () => Promise<{ default: T }>,
  options?: {
    fallback?: React.ComponentType;
    prefetchOnSlowConnection?: boolean;
  }
) => {
  return lazy(() => {
    // For slow connections, add a small delay to prevent overwhelming the network
    if (isSlowConnection() && !options?.prefetchOnSlowConnection) {
      return new Promise<{ default: T }>(resolve => {
        setTimeout(() => {
          importFunc().then(resolve);
        }, 100);
      });
    }
    
    return importFunc();
  });
};

// Intersection Observer for prefetching when links come into viewport
export const setupViewportPrefetching = () => {
  if (typeof IntersectionObserver === 'undefined') return null;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link = entry.target as HTMLAnchorElement;
          const href = link.getAttribute('href');
          
          if (href && href.startsWith('/')) {
            // Prefetch the page when it comes into viewport
            prefetchPage(href);
          }
        }
      });
    },
    { threshold: 0.1 }
  );

  return observer;
};

// Prefetch function that can be called from anywhere
export const prefetchPage = async (path: string) => {
  // Don't prefetch on very slow connections
  if (isSlowConnection()) return;

  const pageMap: Record<string, () => Promise<unknown>> = {
    '/about': () => import('../pages/About'),
    '/toolkit': () => import('../pages/Toolkit'),
    '/portfolio': () => import('../pages/My Work'),
    '/contact': () => import('../pages/Contact'),
    '/privacy-policy': () => import('../pages/PrivacyPolicy'),
    '/terms-of-service': () => import('../pages/TermsOfService'),
    '/waitlist': () => import('../pages/Waitlist'),
  };

  if (pageMap[path]) {
    try {
      await pageMap[path]();
    } catch (error) {
      console.warn(`Failed to prefetch ${path}:`, error);
    }
  }
};

// Enhanced loading component with network awareness
export const SmartLoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  };

  const connectionType = getConnectionType();
  const showNetworkIndicator = connectionType !== 'unknown' && connectionType !== '4g';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className={`animate-spin rounded-full ${sizeClasses[size]} border-b-2 border-white mb-4`}></div>
      {showNetworkIndicator && (
        <p className="text-sm text-gray-400">
          Loading on {connectionType} connection...
        </p>
      )}
    </div>
  );
};

// Debounced prefetch to avoid too many requests
export const debouncedPrefetch = (() => {
  const prefetchCache = new Set<string>();
  const prefetchTimeouts = new Map<string, NodeJS.Timeout>();

  return (path: string, delay = 200) => {
    if (prefetchCache.has(path)) return;

    // Clear existing timeout for this path
    if (prefetchTimeouts.has(path)) {
      clearTimeout(prefetchTimeouts.get(path)!);
    }

    // Set new timeout
    const timeout = setTimeout(() => {
      prefetchPage(path);
      prefetchCache.add(path);
      prefetchTimeouts.delete(path);
    }, delay);

    prefetchTimeouts.set(path, timeout);
  };
})();
