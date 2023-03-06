import { type MutableRefObject, useCallback, useEffect, useRef } from 'react';

export interface UseTimeoutData {
  timeoutRef: MutableRefObject<NodeJS.Timeout | undefined>;
  reset(): void;
  clear(): void;
}

export function useTimeout(
  callback: () => void,
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

  const clear = useCallback(() => {
    clearTimeout(timeoutRef.current);
  }, []);

  const reset = useCallback(() => {
    clear();
    if (timeoutInMs !== false) {
      timeoutRef.current = setTimeout(callbackRef.current, timeoutInMs);
    }
  }, [clear, timeoutInMs]);

  return {
    timeoutRef,
    clear,
    reset,
  };
}
