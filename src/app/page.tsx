'use client';

import { signOut, useSession } from 'next-auth/react';

import { Button } from '@/components/button';
import { RoutePaths } from '@/constants/routes';
import Header from '@/layout/Header';
import { redirect } from 'next/navigation';

export default function Home() {
  const { data: session, status } = useSession();
  console.log('session', session);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (!session) {
    return redirect(RoutePaths.LOGIN);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <div className="text-slate-300">HomePage</div>

      <Button size="lg" onClick={() => signOut({ callbackUrl: RoutePaths.LOGIN })}>
        Sign out
      </Button>
    </main>
  );
}
