'use client';

import { LanguageSwitcher } from '@/components/app/language-switcher';
import { ThemeButton } from '@/components/app/theme-button';
import { Button } from '@/components/ui/button';
import { useAppContext } from '@/contexts/app-context';
import { cn } from '@/lib/utils';
import { Menu09Icon } from 'hugeicons-react';
import Image from 'next/image';
import Link from 'next/link';
import { SidebarMobile } from './sidebar-mobile';

export function Header() {
  const { sidebarExpanded, handleToggleSidebar } = useAppContext();

  return (
    <header className="sticky top-0 z-50 col-span-full flex h-[68px] items-center px-3 transition-all">
      <div
        className={cn(
          'fixed left-0 top-[68px] -z-20 h-6 w-6 text-[#d6d6d6] transition-all dark:text-[#212121]',
          {
            'md:left-[246px]': sidebarExpanded,
            'md:left-[78px]': !sidebarExpanded,
          }
        )}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100 0H0V100C0 44.7715 44.7715 0 100 0Z"
          />
        </svg>
      </div>

      <div className="flex w-full items-center justify-between gap-3">
        <div className="flex items-center justify-between gap-8">
          <Button
            onClick={handleToggleSidebar}
            variant="secondary"
            className="mx-2 hidden bg-transparent hover:bg-neutral-500/10 md:flex"
            size="icon"
          >
            <Menu09Icon
              width={24}
              height={24}
              className="h-6 w-6 stroke-neutral-700 dark:stroke-neutral-400"
            />
          </Button>

          <div />
          <div className="absolute left-8 flex h-24 w-20 items-center justify-center bg-background pt-3 shadow-lg dark:bg-[#090909] md:left-1/2 md:-translate-x-1/2">
            <Link
              href="/"
              className="relative flex items-center justify-center transition-all hover:scale-110"
            >
              <Image
                src="/svgs/logotype.svg"
                className="overflow-hidden transition-all"
                width={44}
                height={52}
                priority
                unoptimized
                alt="Logo Oscar Alves"
              />
            </Link>

            <div className="absolute items-center justify-center">
              <div className="rounded-full bg-transparent shadow-[0_0_100px_100px_rgba(206,44,90,0.15)]"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <LanguageSwitcher />
          <ThemeButton />
          <SidebarMobile />
        </div>
      </div>
    </header>
  );
}
