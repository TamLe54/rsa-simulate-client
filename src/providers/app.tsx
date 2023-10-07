import type { ReactNode } from 'react';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Button, ConfigProvider, Spin, theme as antTheme } from 'antd';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import token from '@/config/ant.theme.token';
import { queryClient } from '@/lib/react-query';

const ErrorFallback = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center text-red-500" role="alert">
      <h2 className="text-lg font-semibold">Ooops, something went wrong :(</h2>
      <Button className="mt-4" onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </Button>
    </div>
  );
};

type AppProviderProps = {
  children: ReactNode;
};

const Loading = () => (
  <div className="flex h-screen w-screen items-center justify-center">
    <Spin />
  </div>
);

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ConfigProvider componentSize="middle" theme={{ token: token, algorithm: antTheme.defaultAlgorithm }}>
      <Suspense fallback={<Loading />}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <HelmetProvider>
            <QueryClientProvider client={queryClient}>
              <BrowserRouter>{children}</BrowserRouter>
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </HelmetProvider>
        </ErrorBoundary>
      </Suspense>
    </ConfigProvider>
  );
};
