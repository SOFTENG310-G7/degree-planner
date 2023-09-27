'use client';

import { useSearchParams } from 'next/navigation';

export default function Messages() {
  const searchParams = useSearchParams();
  const message = searchParams.get('message');

  return (
    <>
      {message && <p className="mt-4 p-4 bg-neutral-900 text-neutral-300 text-center">{message}</p>}
    </>
  );
}
