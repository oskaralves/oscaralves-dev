import { APP_TITLE } from '@/constants';
import { Metadata } from 'next';

const title = APP_TITLE + ` - Engenheiro de Software`;

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
        url: 'https://oscaralves.dev/images/preview.jpg',
        width: 1440,
        height: 940,
        alt: title,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};
