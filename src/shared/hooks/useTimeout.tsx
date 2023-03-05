import { MutableRefObject, useEffect, useRef } from 'react';

export interface UseTimeoutData {
  timeoutRef: MutableRefObject<NodeJS.Timeout | undefined>;
  reset(): void;
}

export function useTimeout(
  callback: () => unknown,
  timeoutInMs: false | number
): UseTimeoutData {
  const timeoutRef = useRef<NodeJS.Timeout>();
  const callbackRef = useRef<typeof callback>(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => callbackRef.current();

    if (timeoutInMs === false) {
      return;
    }

    timeoutRef.current = setTimeout(tick, timeoutInMs);

    return () => clearTimeout(timeoutRef.current!);
  }, [timeoutInMs]);

  return {
    timeoutRef,
    reset() {
      clearTimeout(timeoutRef.current);
      if (timeoutInMs !== false) {
        timeoutRef.current = setTimeout(callbackRef.current, timeoutInMs);
      }
    },
  };
}
