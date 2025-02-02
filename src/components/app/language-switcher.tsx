'use client';

import { useLanguage } from '@/contexts/locale-context';
import { Locale } from '@/types/locale';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../ui/button';

export const LanguageSwitcher = () => {
  const { isPending, locale, handleSetLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const CurrentFlagIcon = ({
    locale,
    size = 32,
  }: {
    locale: Locale;
    size?: number;
  }) => {
    const languages = {
      'pt-BR': (
        <Image
          src="/svgs/flags/pt-br.svg"
          alt="pt-BR"
          width={size}
          height={size}
          unoptimized
        />
      ),
      'en-US': (
        <Image
          src="/svgs/flags/en-us.svg"
          alt="en-US"
          width={size}
          height={size}
          unoptimized
        />
      ),
      'es-ES': (
        <Image
          src="/svgs/flags/es-es.svg"
          alt="es-ES"
          width={size}
          height={size}
          unoptimized
        />
      ),
    };
    return languages[locale];
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        isLoading={isPending}
        onClick={toggleDropdown}
        className="relative flex h-10 min-w-10 flex-row items-center justify-center border-transparent p-0 hover:border hover:bg-neutral-500/20"
      >
        <div className="w-6 overflow-hidden rounded">
          <CurrentFlagIcon locale={locale} />
        </div>
      </Button>

      {/* Dropdown de opções */}
      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-56 rounded-md border border-border bg-background p-1 shadow-md">
          <button
            onClick={() => {
              handleSetLocale('pt-BR');
              setIsOpen(false);
            }}
            className="flex w-full items-center rounded p-2 text-left transition hover:bg-foreground/10"
          >
            <div className="w-6 overflow-hidden rounded">
              <CurrentFlagIcon locale="pt-BR" />
            </div>
            <span className="ml-2">Português (BR)</span>
          </button>
          <button
            onClick={() => {
              handleSetLocale('en-US');
              setIsOpen(false);
            }}
            className="flex w-full items-center rounded p-2 text-left transition hover:bg-foreground/10"
          >
            <div className="w-6 overflow-hidden rounded">
              <CurrentFlagIcon locale="en-US" />
            </div>
            <span className="ml-2">English (US)</span>
          </button>
          <button
            onClick={() => {
              handleSetLocale('es-ES');
              setIsOpen(false);
            }}
            className="flex w-full items-center rounded p-2 text-left transition hover:bg-foreground/10"
          >
            <div className="w-6 overflow-hidden rounded">
              <CurrentFlagIcon locale="es-ES" />
            </div>
            <span className="ml-2">Español (ES)</span>
          </button>
        </div>
      )}
    </div>
  );
};
