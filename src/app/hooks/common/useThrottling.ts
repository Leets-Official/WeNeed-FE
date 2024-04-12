'use client';

import { useState, useCallback } from 'react';

const useThrottling = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number | undefined = 2000,
) => {
  const [lastCall, setLastCall] = useState(0);

  const throttledCallback = useCallback(() => {
    const currentTime = Date.now();
    if (currentTime - lastCall >= delay) {
      setLastCall(currentTime);
      callback();
    }
  }, [callback, delay, lastCall]);

  return throttledCallback;
};

export default useThrottling;
