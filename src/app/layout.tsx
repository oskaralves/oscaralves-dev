import { Sidebar } from '@/components/layout/Sidebar';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { APP_TITLE } from '@/constants';
import { AppContextProvider } from '@/contexts/AppContext';
import { DictionaryProvider } from '@/contexts/dictionary-context';
import { LocaleProvider } from '@/contexts/locale-context';
import { getDictionary } from '@/dictionaries';
import { Locale } from '@/types/locale';
import { getLocale } from '@/utils/locale';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { ThemeProvider } from '../../theme/ThemeProvider';
import { getSidebarExtendedAction } from '../actions/sidebarExtendedAction';
import { Header } from '../components/layout/Header';
import './globals.css';

const montserratSans = Montserrat({
  variable: '--font-montserrat-sans',
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: APP_TITLE,
  description:
    'Senior Software Engineer | Full Stack Specialist in React, React Native & Node.js | UI/UX',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const dictionary = getDictionary(locale as Locale);
  const { ALL_RIGHTS_RESERVED } = getDictionary(locale as Locale, 'general');
  const defaultSidebarExpanded = await getSidebarExtendedAction();
  return (
    <html lang={locale} suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={`${montserratSans.className} min-h-screen text-pretty antialiased transition-all`}
      >
        <LocaleProvider initialLocale={locale as Locale}>
          <DictionaryProvider dictionary={dictionary as any}>
            <ThemeProvider>
              <TooltipProvider>
                <AppContextProvider
                  defaultSidebarExpanded={defaultSidebarExpanded}
                >
                  <Header />

                  <div className="font-default text-background-foreground grid h-full grid-cols-1 md:grid-cols-[auto_1fr]">
                    <Sidebar />

                    <div className="sticky top-[68px] overflow-hidden rounded-tl-3xl bg-neutral-100/20 text-foreground dark:bg-neutral-900/40">
                      {children}
                      <footer className="w-full border-t border-border bg-neutral-100 p-4 text-center text-sm text-muted-foreground dark:bg-neutral-900">
                        © {new Date().getFullYear()} {APP_TITLE} .{' '}
                        {ALL_RIGHTS_RESERVED}
                      </footer>
                    </div>
                  </div>
                </AppContextProvider>
              </TooltipProvider>
              <Toaster richColors closeButton visibleToasts={6} />
            </ThemeProvider>
          </DictionaryProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
