import { createContext } from 'react';
import { type User } from '../../../data/mockUsers';

interface AuthContextType {
  isAuthenticated: boolean;
  currentUser: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  currentUser: null,
  login: () => {},
  logout: () => {}
});
