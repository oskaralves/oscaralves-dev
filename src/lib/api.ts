import { APP_LOCALE_KEY } from '@/constants';
import { cookies } from 'next/headers';

export type RequestOptions = RequestInit & {
  withCredentials?: boolean;
};

async function fetchRequest(
  input: string,
  options?: RequestOptions
): Promise<Response> {
  const xLang = (await cookies()).get(APP_LOCALE_KEY)?.value || 'pt-BR';
  const headers: HeadersInit = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json; charset=utf-8',
    'x-lang': xLang,
  };

  const requestOptions: RequestInit = {
    ...options,
    headers: {
      ...headers,
      ...(options?.headers || {}),
    },
  };
  if (typeof input === 'string' && !input.startsWith('http')) {
    input = `${process.env.NEXT_PUBLIC_API_BASE_URL}${input}`;
  }
  return fetch(input, requestOptions);
}

const api = {
  fetch: fetchRequest,
};

export { api };
