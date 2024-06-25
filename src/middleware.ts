import { NextRequest, NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';

import { API_AUTH_PREFIX, RoutePaths } from '@/constants/routes';

const handleNavigate = (invalid: boolean, req: NextRequest) => {
  const { url } = req;
  if (invalid) {
    return NextResponse.redirect(new URL(RoutePaths.LOGIN, url));
  }
  return NextResponse.next();
};

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    const {
      nextUrl,
      nextauth: { token },
      url,
    } = req;
    const isApiAuthRoute = nextUrl.pathname.startsWith(API_AUTH_PREFIX);
    const isExpiredToken = new Date(token?.exp as number) > new Date();
    console.log('token middleware', token);

    if (isApiAuthRoute) {
      return NextResponse.next();
    }
    handleNavigate(isExpiredToken, req);
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  },
);
// }

export const config = {
  matcher: ['/dashboard'],
};
