import { useEffect, useState } from 'react';
import type { URL } from '~/shared/types/URL';

export interface FetchOutput<T> {
  data: T | null;
  loading: boolean;
}

export function useFetch<T>(uri: URL): FetchOutput<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    fetch(uri)
      .then((res) => res.json() as Promise<T>)
      .then((json: T) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [uri]);

  return { data, loading };
}
