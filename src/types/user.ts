export interface User {
  userId: string;
  givenName: string;
  familyName: string;
  userType: UserTypes;
}

export type UserTypes = 'admin' | 'user';
