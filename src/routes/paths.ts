/**
 * Application route paths
 *
 * Centralized location for all application route paths.
 * Use this instead of hardcoding path strings throughout the application.
 */

export const routePaths = {
  // Main routes
  home: '/',
  about: '/about',
  welcome: '/welcome',
  signin: '/signin',

  // Fallback routes
  notFound: '*',

  // Add more route paths here as needed
} as const;

// Type for route keys - useful for type safety
export type RoutePathsKeys = keyof typeof routePaths;
