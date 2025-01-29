import { JSXElementConstructor, ReactElement, ReactNode } from 'react';

export interface IMenuItem {
  id: string;
  title: string;
  caption?: string;
  type: 'collapse' | 'group' | 'item';
  external?: boolean;
  target?: '_self' | '_blank' | '_parent' | '_top';
  icon?: ReactNode;
  url: string;
  chip?: IMenuItemChip;
  children?: IMenuItem[];
  roles?: string[];
}

export interface IMenuItemChip {
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
  variant?: 'filled' | 'outlined';
  label: ReactNode;
  avatar?: ReactElement<any, string | JSXElementConstructor<any>>;
}
