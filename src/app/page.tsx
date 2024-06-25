'use client';

import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

import { Button } from '@/components/button';
import { RoutePaths } from '@/constants/routes';
import Header from '@/layouts/Header';
import useExampleStore from '@/stores/example';

export default function Home() {
  const { data: session, status } = useSession();
  const { count, increase, decrease } = useExampleStore();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (!session) {
    return redirect(RoutePaths.LOGIN);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <div className="text-slate-300">
        {count}
        <Button onClick={() => increase(2)}>Increase</Button>
        <Button onClick={() => decrease(2)}>Decrease</Button>
      </div>

      <Button size="lg" onClick={() => signOut({ callbackUrl: RoutePaths.LOGIN })}>
        Sign out
      </Button>
    </main>
  );
}
