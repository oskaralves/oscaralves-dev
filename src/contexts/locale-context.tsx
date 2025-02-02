'use client';

import { Locale } from '@/types/locale';
import { useRouter } from 'next/navigation';
import { createContext, useContext, useState, useTransition } from 'react';
import { Country } from 'react-phone-number-input';

export const countries: Record<Locale, Country> = {
  'pt-BR': 'BR',
  'en-US': 'US',
  'es-ES': 'ES',
};

type LocaleContextProps = {
  locale: Locale;
  handleSetLocale: (locale: Locale) => void;
  isPending: boolean;
  countries: Record<Locale, Country>;
};

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

export const LocaleProvider = ({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale: Locale;
}) => {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const handleSetLocale = async (newLocale: Locale) => {
    startTransition(async () => {
      await fetch('/api/set-locale', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ locale: newLocale }),
      });

      setLocale(newLocale);

      router.refresh();
    });
  };

  return (
    <LocaleContext.Provider
      value={{ locale, handleSetLocale, countries, isPending }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
