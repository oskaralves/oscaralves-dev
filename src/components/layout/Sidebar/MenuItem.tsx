import { IMenuItem } from '@/navigation/types';
import { Cycle } from 'framer-motion';
import { JSX } from 'react';
import { MenuItemCollapse } from './MenuItemCollapse';
import { MenuItemGroup } from './MenuItemGroup';
import { MenuItemSimple } from './MenuItemSimple';

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
