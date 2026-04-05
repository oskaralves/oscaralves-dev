import { APP_TITLE } from '@/constants';
import { Metadata, Viewport } from 'next';

const title = APP_TITLE + ` - Engenheiro de Software`;

export const viewport: Viewport = {
  themeColor: '#CE2C5A',
};

export const metadata: Metadata = {
  title,
  description:
    'Senior Software Engineer | Full Stack Specialist in React, React Native & Node.js | UI/UX',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/images/apple-touch-icon.png',
  },
  openGraph: {
    title,
    description:
      'Senior Software Engineer | Full Stack Specialist in React, React Native & Node.js | UI/UX',
    url: 'https://oscaralves.dev',
    siteName: title,
    images: [
      {
        url: 'https://www.oscaralves.dev/images/preview.jpg',
        width: 1220,
        height: 693,
        alt: title,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  other: {
    'msapplication-TileColor': '#CE2C5A',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};
