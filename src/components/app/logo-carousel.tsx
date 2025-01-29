'use client';

import { skills } from '@/constants/skills';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export const LogoCarousel = () => {
  return (
    <div className="relative flex w-screen items-stretch justify-between gap-5 overflow-hidden bg-background/90 shadow-primary">
      <Marquee speed={50}>
        {skills.map((logo, index) => (
          <div
            key={index}
            className="flex h-36 w-32 transform flex-col items-center justify-center gap-3 p-6"
          >
            <Image
              src={logo.imageUrl}
              alt={logo.title}
              width={48}
              height={48}
              unoptimized
              className="object-contain"
            />
            <p className="text-center text-xs">{logo.title}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};
