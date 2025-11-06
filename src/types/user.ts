export interface User {
  userId: string;
  givenName: string;
  familyName: string;
  userType: 'admin' | 'user';
}
