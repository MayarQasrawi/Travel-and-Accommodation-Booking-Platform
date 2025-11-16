import axiosInstance from '@/services/axios';
import type { LoginPayload, LoginResponse } from './types';

export const LoginAPI = async (payload: LoginPayload) => {
  const res = await axiosInstance.post<LoginResponse>('/auth/authenticate', payload);
  return res;
};
