'use server';

import { APP_SIDEBAR_EXPANDED } from '@/constants';
import { cookies } from 'next/headers';

export const getSidebarExtendedAction = async () => {
  const expanded = (await cookies()).get(APP_SIDEBAR_EXPANDED)?.value;
  return expanded === undefined ? true : expanded === 'true';
};
