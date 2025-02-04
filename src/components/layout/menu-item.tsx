import { IMenuItem } from '@/navigation/types';
import { Cycle } from 'framer-motion';
import { JSX } from 'react';
import { MenuItemCollapse } from './menu-item-collapse';
import { MenuItemGroup } from './menu-item-group';
import { MenuItemSimple } from './menu-item-simple';

type MenuItemProps = {
  item: IMenuItem;
  className?: string;
  toggleOpen?: Cycle;
};

export const MenuItem = ({ item, className, toggleOpen }: MenuItemProps) => {
  const renderByType = (item: IMenuItem) => {
    const menuTypes: Record<IMenuItem['type'], JSX.Element> = {
      group: <MenuItemGroup {...{ item, className }} />,
      collapse: <MenuItemCollapse {...{ item, className }} />,
      item: <MenuItemSimple {...{ item, className, toggleOpen }} />,
    };
    return menuTypes[item.type] || menuTypes.item;
  };

  return renderByType(item);
};
