'use client';

import { useGetExampleQuery } from '@/services/queries/example';
import * as React from 'react';

export default function Dashboard() {
  const { data } = useGetExampleQuery('2');

  return <div>Dashboard: {data?.name}</div>;
}
