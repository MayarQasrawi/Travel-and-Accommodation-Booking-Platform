import jwtDecode from 'jwt-decode';
import type { User, UserTypes } from '@/types/user';

export interface JwtPayload {
  exp: number;
  user_id: string;
  given_name: string;
  family_name: string;
  userType: UserTypes;
}

export const decodeToken = (token: string): User | null => {
  try {
    const payload = jwtDecode<JwtPayload>(token);
    if (payload.exp * 1000 < Date.now()) return null;
    return {
      userId: payload.user_id,
      givenName: payload.given_name,
      familyName: payload.family_name,
      userType: payload.userType,
    };
  } catch {
    return null;
  }
};
