import { ReactNode } from 'react';

export type Experience = {
  company: string;
  role: string;
  startDate: string;
  endDate: string | null;
  description: ReactNode;
  logo: string;
  isVisible?: boolean;
};
