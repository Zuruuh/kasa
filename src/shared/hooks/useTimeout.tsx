import { MutableRefObject, useEffect, useRef } from 'react';

export function useTimeout(
  callback: () => unknown,
  timeoutInMs: false | number
): MutableRefObject<NodeJS.Timeout | undefined> {
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

  return timeoutRef;
}
