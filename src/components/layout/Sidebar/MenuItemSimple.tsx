import { TooltipContent } from '@/components/ui/tooltip';
import { useAppContext } from '@/contexts/AppContext';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipTrigger } from '@radix-ui/react-tooltip';
import { useCallback } from 'react';
import { MenuItemProps } from './types';

export const MenuItemSimple = ({
  item,
  className,
  toggleOpen,
}: MenuItemProps) => {
  const { sidebarExpanded, activeSection, handleMenuClick } = useAppContext();

  const isActive = activeSection === item.id;
  const handleMenuItemClick = useCallback(
    (id: string) => {
      toggleOpen?.();
      handleMenuClick(id);
    },
    [handleMenuClick, toggleOpen]
  );

  return (
    <li className="relative">
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <button
            onClick={() => handleMenuItemClick(item.id)}
            className={cn(
              `group relative mx-3 flex w-[calc(100vw-124px)] flex-row items-center space-x-2 p-3 transition-all hover:bg-neutral-500/10 md:min-w-[224px] md:max-w-[224px]`,
              { 'bg-primary/10 hover:bg-primary/10': isActive },
              { 'md:w-[54px] md:min-w-0': !sidebarExpanded },
              className
            )}
          >
            <div
              className={cn(
                `items-center justify-center transition-all group-hover:scale-[1.2]`,
                {
                  'text-primary dark:text-primary': isActive,
                }
              )}
            >
              {item.icon}
              {isActive ? (
                <div className="absolute inset-0 -left-8 top-[50%] -z-20 hidden h-0 w-0 items-center justify-center md:block">
                  <div className="rounded-full bg-transparent shadow-[0_0_50px_50px_rgba(206,44,90,0.35)]" />
                </div>
              ) : null}
            </div>
            <span
              className={cn(
                `overflow-hidden text-ellipsis text-nowrap text-sm font-semibold text-foreground/90`,
                { 'text-primary': isActive }
              )}
            >
              {item.title}
            </span>
          </button>
        </TooltipTrigger>
        <TooltipContent
          className={cn('ml-5 hidden font-semibold', {
            'md:flex': !sidebarExpanded,
          })}
          side="right"
        >
          {item.title}
        </TooltipContent>
      </Tooltip>
    </li>
  );
};
