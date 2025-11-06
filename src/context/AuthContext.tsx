import { useEffect, useState, useCallback } from 'react';
import type { PropsWithChildren } from 'react';
import { setAuthHeader } from '@/services/axios';
import { decodeToken } from '@/utils/jwt';
import type { User } from '@/types/user';
import { AuthContext } from './context';

const TOKEN_KEY = 'auth_token';

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    setAuthHeader(null);
    setUser(null);
  }, []);

  const setAuth = useCallback(
    (token: string | null) => {
      if (!token) {
        logout();
        return;
      }

      const decoded = decodeToken(token);
      if (!decoded) {
        logout();
        return;
      }

      localStorage.setItem(TOKEN_KEY, token);
      setAuthHeader(token);
      setUser(decoded);
    },
    [logout]
  );

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      setAuth(token);
    }
    setIsLoading(false);
  }, [setAuth]);

  return (
    <AuthContext.Provider value={{ user, isLoading, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
