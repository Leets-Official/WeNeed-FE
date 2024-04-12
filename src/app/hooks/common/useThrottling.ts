import { useState, useCallback } from 'react';

interface useThrottlingProps {
  callback: (...args: any) => void;
  delay: number;
}

const useThrottling = ({ callback, delay }: useThrottlingProps) => {
  const [lastCall, setLastCall] = useState(0);

  const throttledCallback = useCallback(
    (...args: any) => {
      const currentTime = Date.now();
      if (currentTime - lastCall >= delay) {
        setLastCall(currentTime);
        callback(...args);
      }
    },
    [callback, delay, lastCall],
  );

  return throttledCallback;
};

export default useThrottling;
