'use client';

import { useAppContext } from '@/contexts/AppContext';
import { useLanguage } from '@/contexts/locale-context';
import { cn } from '@/lib/utils';
import { getNavigation } from '@/navigation';
import { ReactNode } from 'react';
import { MenuItem } from './MenuItem';

export type SidebarProps = {
  children?: ReactNode;
};

export const Sidebar = ({ children }: SidebarProps) => {
  const { sidebarExpanded } = useAppContext();
  const { locale } = useLanguage();
  const navigation = getNavigation(locale);
  return (
    <aside
      className={cn(
        'sticky top-[68px] z-50 hidden h-[calc(100vh-68px)] flex-col gap-3 transition-all md:flex',
        sidebarExpanded ? 'w-[246px]' : 'w-[78px]'
      )}
    >
      <nav className="flex h-[calc(100vh-68px)] min-h-[520px] flex-col justify-center">
        <ul className="scrollbar-width-none flex min-w-[40px] flex-1 flex-col justify-center gap-4 overflow-y-auto pb-4">
          {navigation.items.map((item, idx) => (
            <MenuItem key={`menu-item--${item.title}-${idx}`} item={item} />
          ))}
        </ul>
        {children}
      </nav>
    </aside>
  );
};
