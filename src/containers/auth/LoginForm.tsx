'use client';

import * as React from 'react';
import { signIn } from 'next-auth/react';
import { IoLogoGithub } from 'react-icons/io5';

import { loginSchema } from '@/schemas/auth';
import { cn } from '@/libs/utils';
import { useSearchParams } from 'next/navigation';

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  const onClick = (provider: 'google' | 'github') => {
    signIn(provider, {
      callbackUrl,
    });
  };

  return (
    <div className="w-full">
      <h1>Login</h1>
      <button
        className="text-2xl border-input bg-background hover:bg-accent hover:text-accent-foreground"
        onClick={() => onClick('github')}
      >
        <IoLogoGithub style={{ width: 50, height: 50 }} />
      </button>
    </div>
  );
}
