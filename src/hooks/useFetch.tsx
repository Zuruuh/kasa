import { useEffect, useState } from 'react';
import type { URL } from '../types/shared/URL';

export function useFetch<T>(uri: URL): T | null {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    let ignore = false;

    fetch(uri)
      .then((res) => res.json() as Promise<T>)
      .then((json: T) => {
        if (!ignore) {
          setData(json);
        }
      });

    return () => {
      ignore = true;
    };
  }, [uri]);

  return data;
}
