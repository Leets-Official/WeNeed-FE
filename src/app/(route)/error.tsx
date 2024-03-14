'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
    // router.push('/login');
  }, [error]);

  return (
    <html>
      <body>
        <h2>문제가 발생했습니다.</h2>
        <button onClick={() => reset()}>reset</button>
      </body>
    </html>
  );
}
