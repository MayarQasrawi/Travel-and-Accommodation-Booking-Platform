import { useMutation } from '@tanstack/react-query';
import { LoginAPI } from '../API';
import type { LoginPayload, LoginResponse } from '../API/types';
import { useAuth } from '@/hooks/useAuth';

export const useLoginMutation = () => {
  const { setAuth } = useAuth();

  return useMutation({
    mutationFn: async (payload: LoginPayload) => {
      const res = await LoginAPI(payload);
      return res.data as LoginResponse;
    },


    onError: (error) => {
      console.error('Login failed:', error);
    },
    onSuccess: (data) => {
      setAuth(data.authentication);
      console.log('Login succeeded:', data);
    },
  });

};
