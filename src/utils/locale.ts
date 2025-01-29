'use server';

import { APP_LOCALE_KEY } from '@/constants';
import { Locale } from '@/types/locale';
import { cookies } from 'next/headers';

export const getLocale = async () => {
  return ((await cookies()).get(APP_LOCALE_KEY)?.value) || 'pt-BR' as Locale;
};
