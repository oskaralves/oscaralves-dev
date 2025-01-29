'use client';

import { useLanguage } from '@/contexts/locale-context';
import { Locale } from '@/types/locale';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../ui/button';

export const LanguageSwitcher = () => {
  const { isPending, locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const CurrentFlagIcon = ({
    locale,
    size = 38,
  }: {
    locale: Locale;
    size?: number;
  }) => {
    switch (locale) {
      case 'pt-BR':
        return (
          <Image
            src="/svgs/flags/pt-br.svg"
            alt="pt-BR"
            width={size}
            height={size}
            unoptimized
          />
        );
      case 'en-US':
        return (
          <Image
            src="/svgs/flags/en-us.svg"
            alt="en-US"
            width={size}
            height={size}
            unoptimized
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative">
      {/* Botão que ativa o dropdown */}
      <Button
        variant="ghost"
        isLoading={isPending}
        onClick={toggleDropdown}
        className="relative flex h-10 min-w-10 flex-row items-center justify-center border-transparent p-0 hover:border hover:bg-neutral-500/20"
      >
        <CurrentFlagIcon locale={locale} />
      </Button>

      {/* Dropdown de opções */}
      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-56 rounded-md border border-border bg-background p-1 shadow-md">
          <button
            onClick={() => {
              setLocale('pt-BR');
              setIsOpen(false);
            }}
            className="flex w-full items-center rounded px-2 py-1 text-left transition hover:bg-foreground/10"
          >
            <CurrentFlagIcon locale="pt-BR" size={46} />
            <span className="ml-2">Português (BR)</span>
          </button>
          <button
            onClick={() => {
              setLocale('en-US');
              setIsOpen(false);
            }}
            className="flex w-full items-center rounded px-2 py-1 text-left transition hover:bg-foreground/10"
          >
            <CurrentFlagIcon locale="en-US" size={46} />
            <span className="ml-2">English (US)</span>
          </button>
        </div>
      )}
    </div>
  );
};
