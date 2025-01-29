'use client';

import { Locale } from '@/types/locale';
import { useRouter } from 'next/navigation';
import { createContext, useContext, useState, useTransition } from 'react';


type LocaleContextProps = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isPending: boolean;
};

const LocaleContext = createContext<LocaleContextProps | undefined>(
  undefined
);

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

      // Atualiza o estado do idioma
      setLocale(newLocale);

      // Usando o router.replace para forçar o re-render sem recarregar a página
      router.refresh();
    });
  };

  return (
    <LocaleContext.Provider
      value={{ locale, setLocale: handleSetLocale,  isPending }}
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
