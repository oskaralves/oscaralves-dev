import { ReactNode } from 'react';

export type IMenuItem = {
  id: string;
  title: string;
  caption?: string;
  type: 'collapse' | 'group' | 'item';
  external?: boolean;
  target?: '_self' | '_blank' | '_parent' | '_top';
  icon?: ReactNode;
  url: string;
  children?: IMenuItem[];
  roles?: string[];
};
