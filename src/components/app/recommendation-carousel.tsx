'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

import { useLanguage } from '@/contexts/locale-context';
import { getRecommendations } from '@/data/recommendations';
import { Linkedin02Icon } from 'hugeicons-react';
import { Quote } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

export const RecommendationCarousel = () => {
  const { locale } = useLanguage();
  const recommendations = getRecommendations(locale).filter(
    (rec) => rec.isVisible
  );
  const plugin = useRef(Autoplay({ delay: 6000, stopOnInteraction: true }));

  return (
    <div className="relative">
      <Carousel
        opts={{
          align: 'center',
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full"
      >
        <CarouselContent className="pt-24">
          {recommendations.map((rec, index) => (
            <CarouselItem
              key={`recommendation-item-${index}`}
              className="flex basis-[86%] items-center gap-4 pb-24 lg:basis-[32%]"
            >
              <div className="i relative flex h-full w-full flex-col gap-6 bg-white/40 p-8 shadow-lg dark:bg-black/20">
                <Quote
                  className="absolute -top-10 right-3 h-20 w-20 text-primary opacity-40"
                  strokeWidth={0.5}
                />
                <div className="tems-center flex flex-1 flex-col justify-center gap-2">
                  <p className="text-md italic opacity-90">{rec.text}</p>
                </div>

                <div className="relative flex w-full flex-col items-center gap-1">
                  <p className="mb-4 text-sm opacity-60">
                    {rec.date} <span className="opacity-55">(Linkedin)</span>
                  </p>

                  <p className="text-center text-xl font-medium text-primary">
                    {rec.name}
                  </p>
                  <p className="-translate-y-1 text-center text-sm opacity-40">
                    {rec.role}
                  </p>
                  <div className="relative mx-auto mt-6 flex h-0 max-h-0 min-w-[100px] -translate-y-4 flex-row">
                    <Image
                      src={rec.avatar}
                      alt={rec.name}
                      width={100}
                      height={100}
                      unoptimized
                      className="min-h-[100px] rounded-full shadow-lg"
                    />
                    <div className="absolute left-[calc(100%+12px)] top-0 h-0">
                      <div className="flex flex-row gap-2">
                        <a
                          href={rec.linkedinUrl}
                          target="_blank"
                          className="block p-1.5 text-foreground/60 transition-all hover:bg-[#0e76a8] hover:text-white dark:hover:bg-[#0e76a8]"
                        >
                          <Linkedin02Icon className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
