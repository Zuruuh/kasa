import { renderHook } from '@testing-library/react';
import {
  type SpyInstance,
  afterAll,
  beforeAll,
  describe,
  expect,
  test,
  vi,
} from 'vitest';
import { buildFetcher } from '../tests/mocks/fetch';
import { readFile } from 'fs/promises';
import { useFetch } from './useFetch';
import { setTimeout } from 'timers/promises';

describe('useFetch', async () => {
  let fetchSpy!: SpyInstance<Parameters<typeof global.fetch>>;
  const FIXTURE_CONTENT = (
    await readFile('./public/data/housings.json')
  ).toString();

  beforeAll(async () => {
    const fetcher = buildFetcher({
      '/data/housings.json': {
        body: FIXTURE_CONTENT,
        headers: { 'Content-Type': 'application/json' },
      },
    });
    fetchSpy = vi.spyOn(global, 'fetch');
    fetchSpy.mockImplementation(fetcher);
  });

  test('Should be loading on 1st mount', async () => {
    const { result } = renderHook(() => useFetch('/data/housings.json'));

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(true);
  });

  test('It fetches data correctly', async () => {
    const { result } = renderHook(() => useFetch('/data/housings.json'));
    await setTimeout(1);

    const json = JSON.stringify(result.current.data as Record<string, unknown>);

    expect(json).toBe(JSON.stringify(JSON.parse(FIXTURE_CONTENT)));
    expect(result.current.loading).toBe(false);
  });

  test('It is marked as loaded when an exception is thrown', async () => {
    const { result } = renderHook(() => useFetch('/url/that/does/not/exists'));
    await setTimeout(1);

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(false);
  });

  afterAll(async () => {
    fetchSpy.mockClear();
  });
});
