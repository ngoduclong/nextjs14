import { getServerSession } from 'next-auth';
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next';
import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { authConfig } from '@/constants/auth';

/** Merge classes with tailwind-merge with clsx full feature */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function auth(
  ...args: [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']] | [NextApiRequest, NextApiResponse] | []
) {
  return getServerSession(...args, authConfig);
}
