import type { UserTypes } from '@/types/user';

export interface LoginPayload {
  userName: string;
  password: string;
}

export interface LoginResponse {
  userType: UserTypes;
  authentication: string;
}
