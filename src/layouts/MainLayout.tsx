import { Navigate, Outlet, useLocation } from 'react-router';
import { useAuth } from '@/state/contexts/auth';

const MainLayout = () => {
  const { pathname } = useLocation();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isAuthenticated, login, logout } = useAuth();

  if (!isAuthenticated) {
    return <Navigate
      to="/welcome"
      state={{ pathname }}
      replace
    />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src="/vite.svg"
              alt="Logo"
              className="w-8 h-8"
            />
            <h1 className="text-xl font-bold">My App</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a
                href="/"
                className="hover:underline"
              >Home</a></li>
              <li><a
                href="/about"
                className="hover:underline"
              >About</a></li>
              <li><a
                href="/contact"
                className="hover:underline"
              >Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-lg font-semibold mb-2">My App</h2>
              <p className="text-gray-400">A React application template</p>
            </div>
            <div>
              <h3 className="text-md font-semibold mb-2">Links</h3>
              <ul className="space-y-1 text-gray-400">
                <li><a
                  href="/"
                  className="hover:text-white"
                >Home</a></li>
                <li><a
                  href="/about"
                  className="hover:text-white"
                >About</a></li>
                <li><a
                  href="/contact"
                  className="hover:text-white"
                >Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700 text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} My App. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
