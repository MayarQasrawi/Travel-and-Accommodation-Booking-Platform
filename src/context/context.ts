import { createContext } from 'react';
import type { User } from '@/types/user';

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  setAuth: (token: string | null) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
