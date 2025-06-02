import { createBrowserRouter, RouterProvider } from 'react-router';
import { MainLayout } from '@/layouts';
import { lazyRoute, withFallback } from '@/routes/routeHelpers.tsx';
import { routePaths } from '@/routes/paths';

const appRouter = createBrowserRouter([
  {
    path: routePaths.home,
    element: <MainLayout />,
    children: [
      {
        index: true,
        ...lazyRoute(() => import('@/pages/HomePage')),
      },
      {
        path: routePaths.about.slice(1),
        element: <>About Page</>,
      },
    ],
  },
  {
    path: routePaths.welcome,
    ...lazyRoute(() => import('@/pages/WelcomePage')),
  },
  {
    path: routePaths.signin,
    ...lazyRoute(() => import('@/pages/SignInPage')),
  },
  {
    path: routePaths.notFound,
    ...lazyRoute(() => import('@/pages/NotFound')),
  },
]);

export default function AppRouter() {
  return withFallback(<RouterProvider router={appRouter} />);
}
