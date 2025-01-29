import { IMenuItem } from '@/navigation/types';
import { Cycle } from 'framer-motion';

export type MenuItemProps = {
  item: IMenuItem;
  className?: string;
  toggleOpen?: Cycle;
};
