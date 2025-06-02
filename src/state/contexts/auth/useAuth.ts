import { use } from 'react';
import { AuthContext } from '@/state/contexts/auth/auth.context.ts';

export const useAuth = () => {
  const context = use(AuthContext);

  if (!context) {
    throw Error('useAuth has to be used within AuthContext.Provider');
  }

  return context;
};
