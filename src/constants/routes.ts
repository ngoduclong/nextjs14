export const API_AUTH_PREFIX: string = '/api/auth';

export const RoutePaths = {
  // Auth
  LOGIN: '/login',

  // Main - Protected
  HOME: '/',
  DASHBOARD: '/dashboard',
};

export const ProtectedRoutesPath = [RoutePaths.HOME, RoutePaths.DASHBOARD];

export const PublicRoutesPath = [RoutePaths.LOGIN];
