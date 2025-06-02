import { useState } from 'react';
import { AuthContext } from './auth.context';
import { type User, mockUsers } from '../../../data/mockUsers';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const login = (email: string, _password: string) => {
    // Simulate authentication with mock data
    const user = mockUsers.find(u => u.email === email);
    if (user) {
      setIsAuthenticated(true);
      setCurrentUser(user);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
