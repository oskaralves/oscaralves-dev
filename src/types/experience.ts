import { ReactNode } from 'react';

export type Experience = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: ReactNode;
  logo: string;
};
