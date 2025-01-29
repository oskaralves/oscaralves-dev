import { Sidebar } from '@/components/layout/Sidebar';
import { TooltipProvider } from '@/components/ui/tooltip';
import { AppContextProvider } from '@/contexts/AppContext';
import { LocaleProvider } from '@/contexts/locale-context';
import { Locale } from '@/types/locale';
import { getLocale } from '@/utils/locale';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { ThemeProvider } from '../../theme/ThemeProvider';
import { Header } from '../components/layout/Header';
import { getSidebarExtendedAction } from './actions/sidebarExtendedAction';
import './globals.css';

const montserratSans = Montserrat({
  variable: '--font-montserrat-sans',
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Oscar Alves',
  description:
    'Senior Software Engineer | Full Stack Specialist in React, React Native & Node.js | UI/UX',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const defaultSidebarExpanded = await getSidebarExtendedAction();

  return (
    <html lang={locale} suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={`${montserratSans.className} min-h-screen text-pretty antialiased transition-all`}
      >
        <LocaleProvider initialLocale={locale as Locale}>
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
                    <footer className="w-full bg-neutral-100 p-4 text-center text-sm text-muted-foreground dark:bg-neutral-900">
                      © 2025 Oscar Alves. Todos os direitos reservados.
                    </footer>
                  </div>
                </div>
              </AppContextProvider>
            </TooltipProvider>
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
