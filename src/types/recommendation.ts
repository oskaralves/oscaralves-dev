import { ReactNode } from 'react';

export type Recommendation = {
  avatar: string;
  name: string;
  role: string;
  date: string;
  text: ReactNode;
  linkedinUrl: string;
  isVisible?: boolean;
};
