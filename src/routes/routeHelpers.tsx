import { Suspense } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const lazyRoute = (importFn: () => Promise<any>) => ({
  lazy: async () => {
    const mod = await importFn();
    return { Component: mod.default };
  },
});

export const withFallback = (children: React.ReactNode) => (
  <Suspense fallback={<>Loading...</>}>{children}</Suspense>
);
