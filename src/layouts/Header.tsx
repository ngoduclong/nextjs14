'use client';

import * as React from 'react';
import { useSession } from 'next-auth/react';

export default function Header() {
  const { data } = useSession();

  return (
    <div>
      Header
      <p>{data?.user?.name}</p>
    </div>
  );
}
