import { QueryClientProvider } from 'react-query';
import { ReactNode } from 'react';
import { queryClient } from './queryClient.ts';
import { ThemeProvider } from './ThemeProvider.tsx';

export const AppProviders = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>{children}</ThemeProvider>
  </QueryClientProvider>
);
