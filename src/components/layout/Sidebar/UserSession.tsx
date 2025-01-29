'use client';

import { AppAvatar } from '@/components/app/app-avatar';
import { ThemeButton } from '@/components/app/theme-button';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAppContext } from '@/contexts/AppContext';
import { cn } from '@/lib/utils';
import { ChevronDownIcon, MoreVerticalIcon } from 'lucide-react';

type UserSessionProps = {
  id: string;
  isHeader?: boolean;
};

export const UserSession = ({ id, isHeader }: UserSessionProps) => {
  const { sidebarExpanded } = useAppContext();

  return (
    <div
      className={cn('md:border-border flex transition-all md:border-t md:p-3', {
        'md:hidden': isHeader,
      })}
    >
      <div className="flex w-full">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={cn(
                'group/avatar text-accent-foreground hover:text-accent-foreground relative flex h-auto w-full justify-start gap-4 overflow-hidden py-1 md:gap-2 md:py-2',
                {
                  'md:hover:bg-foreground/10 rounded-lg bg-none px-1 md:px-2':
                    sidebarExpanded,
                },
                {
                  'bg-none px-[8px] hover:bg-transparent dark:bg-transparent':
                    !sidebarExpanded && !isHeader,
                },
                {
                  'bg-none py-1 hover:bg-transparent dark:bg-transparent':
                    isHeader,
                }
              )}
              startIcon={
                <AppAvatar
                  id={`avatar-${id}`}
                  imageUrl={undefined}
                  size={42}
                  strokeWidth={3}
                  className="fill-neutral-100"
                />
              }
            >
              {!isHeader ? (
                <div className="hidden flex-1 flex-col truncate text-left leading-4 md:flex">
                  <h4 className="font-semibold">Eu sou Oscar Alves</h4>
                  <p className="leading-2 truncate text-xs font-normal opacity-50">
                    osk.alves@gmail.com
                  </p>
                </div>
              ) : (
                <ChevronDownIcon
                  size={16}
                  className="flex stroke-neutral-500 md:hidden"
                />
              )}

              {sidebarExpanded ? (
                <MoreVerticalIcon
                  size={20}
                  className="hidden stroke-neutral-500 md:flex"
                />
              ) : null}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-row items-center justify-between">
                <span className="text-md text-foreground/80 h-10 rounded-md bg-emerald-100 p-3 font-semibold leading-none dark:bg-emerald-700">
                  Plano Free
                </span>
                <ThemeButton />
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Perfil
                {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
              </DropdownMenuItem>
              <DropdownMenuItem>
                Billing
                {/* <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> */}
              </DropdownMenuItem>
              <DropdownMenuItem>
                Settings
                {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
              </DropdownMenuItem>
              {/* <DropdownMenuItem>New Team</DropdownMenuItem> */}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
