import { authConfig } from '@/constants/auth';
import NextAuth from 'next-auth';

const handler = NextAuth({
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24, // 1 day
  },
  jwt: {
    maxAge: 60 * 60 * 24,
  },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    jwt: async ({ token, account }) => {
      return token;
    },
    session: async ({ token, session }) => {
      return session;
    },
    signIn: ({ user, account }) => {
      return true;
    },
  },
  ...authConfig,
});

// Export the handler for GET and POST methods
export { handler as GET, handler as POST };
