import { Readable } from 'stream';

export type Fetcher = typeof global.fetch;

export interface FakeResponse {
  body: string | Record<PropertyKey, unknown> | Readable | null;
  headers?: Record<string, string>;
  status?: number;
}

export function buildFetcher(matchers: Record<string, FakeResponse>): Fetcher {
  return async function (
    input: RequestInfo | URL,
    _options?: RequestInit // eslint-disable-line @typescript-eslint/no-unused-vars
  ): Promise<Response> {
    const uri = input instanceof Request ? input.url : String(input);

    for (const [
      matcher,
      { body, headers = {}, status = 200 },
    ] of Object.entries(matchers)) {
      if (uri.match(matcher)) {
        const stringBody =
          typeof body === 'object' ? JSON.stringify(body) : String(body);

        return new Response(stringBody, { headers, status });
      }
    }

    throw new Error('404');
  } as Fetcher;
}
