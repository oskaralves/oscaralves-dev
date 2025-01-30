'use client';

import { CanvasParticles } from '@/components/app/canvas-particles';
import { useAppContext } from '@/contexts/AppContext';
import { useDictionary } from '@/contexts/dictionary-context';
import { useLanguage } from '@/contexts/locale-context';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown02Icon } from 'hugeicons-react';
import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { LogoCarousel } from '../../components/app/logo-carousel';

export const HomeSection = () => {
  const { handleMenuClick } = useAppContext();
  const { locale } = useLanguage();
  const {
    page: { HOME_PAGE },
  } = useDictionary();

  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 750], ['0%', '58%']);

  const text01Y = useTransform(scrollY, [0, 800], ['0%', '300%']);
  const text01X = useTransform(scrollY, [100, 500], ['0%', '-500%']);
  const text01Opacity = useTransform(scrollY, [100, 200], ['100%', '0%']);

  const text02Y = useTransform(scrollY, [0, 800], ['0%', '325%']);
  const text02X = useTransform(scrollY, [125, 525], ['0%', '-500%']);
  const text02Opacity = useTransform(scrollY, [150, 200], ['100%', '0%']);

  const text03Y = useTransform(scrollY, [0, 800], ['0%', '400%']);
  const text03X = useTransform(scrollY, [150, 550], ['0%', '-500%']);
  const text03Opacity = useTransform(scrollY, [200, 250], ['100%', '0%']);

  const symbol01Y = useTransform(scrollY, [0, 900], ['-160%', '58%']);
  const symbol02Y = useTransform(scrollY, [0, 900], ['-190%', '-178%']);
  const symbol03Y = useTransform(scrollY, [0, 500], ['128%', '8%']);
  const symbol04Y = useTransform(scrollY, [0, 500], ['108%', '-81%']);
  const symbol05Y = useTransform(scrollY, [0, 500], ['128%', '8%']);

  const opacityOut = useTransform(scrollY, [0, 400], ['100%', '0%']);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsWaiting(true);
    }, 200);

    return () => {
      clearTimeout(timeout);
      setIsWaiting(false);
    };
  }, [locale]);

  const fadeInVariants = {
    profile: { opacity: 1 },
    profileHidden: { opacity: 0 },
  };

  return (
    <section
      id="home"
      className="bg-gradient-section-1 relative z-10 flex min-h-[700px] w-full flex-col items-center justify-center gap-4 overflow-hidden bg-cover bg-center py-36 md:h-[calc(100vh/2)] md:min-h-[calc(100vh-68px)] md:py-0 lg:flex-col"
    >
      <CanvasParticles />
      <motion.div
        className="pointer-events-none absolute inset-0 z-10"
        initial="profileHidden"
        whileInView="profile"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInVariants}
        transition={{
          duration: 2,
          delay: 0.5,
          ease: 'easeInOut',
        }}
        style={{
          backgroundImage: `url(/images/bg-home-oscar-alves.png)`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          y: backgroundY,
        }}
      />

      <motion.div
        className="absolute left-[40%] top-[300px] z-0 text-8xl text-primary blur-[4px]"
        style={{ y: symbol01Y, opacity: opacityOut }}
      >
        ◯
      </motion.div>
      <motion.div
        className="absolute left-[47%] top-[700px] -z-10 scale-125 text-[150px] text-primary opacity-45 blur-[6px]"
        style={{ y: symbol02Y }}
      >
        △
      </motion.div>
      <motion.div
        className="absolute -top-[450px] left-[70%] z-0 rotate-12 scale-125 text-[240px] text-primary opacity-55 blur-[8px] lg:-top-[380px] lg:z-30"
        style={{ y: symbol03Y }}
      >
        △
      </motion.div>

      <motion.div
        className="absolute left-[10%] top-[120px] -z-10 text-6xl text-primary blur-[4px]"
        style={{ y: symbol04Y, opacity: opacityOut }}
      >
        ◯
      </motion.div>
      <motion.div
        className="absolute -top-[190px] left-[13%] -z-10 text-[300px] text-primary opacity-35 blur-[8px]"
        style={{ y: symbol05Y }}
      >
        △
      </motion.div>
      <motion.div
        className="absolute left-[80%] top-[90px] z-30 text-[200px] text-primary opacity-35 blur-[9px]"
        style={{ y: symbol04Y, opacity: opacityOut }}
      >
        ◯
      </motion.div>
      <div className="container relative z-50 flex">
        <div className="min-w-72 max-w-[620px] flex-1 flex-col md:pl-10">
          <motion.h2
            className="text-shadow relative z-20 mb-5 text-xl font-light text-foreground text-neutral-900 dark:text-neutral-400 lg:text-2xl"
            style={{ y: text01Y, x: text01X, opacity: text01Opacity }}
          >
            {isWaiting ? (
              <TypeAnimation
                sequence={['', 400, HOME_PAGE.HELLO]}
                wrapper="span"
                cursor={false}
                repeat={0}
              />
            ) : null}
          </motion.h2>

          <motion.h1
            className="text-shadow relative -z-50 mb-2 min-h-24 text-5xl font-extrabold leading-[50px] text-foreground md:text-7xl md:leading-[80px] lg:whitespace-nowrap lg:text-8xl lg:leading-[90px]"
            style={{
              y: text02Y,
              x: text02X,
              opacity: text02Opacity,
            }}
          >
            <TypeAnimation
              sequence={['', 1000, 'Oscar Alves']}
              wrapper="span"
              speed={1}
              cursor={false}
              repeat={0}
            />
          </motion.h1>
          <motion.p
            className="text-shadow relative z-50 min-h-32 text-xl font-normal leading-7 text-neutral-900 dark:text-neutral-400 md:text-xl md:leading-6 lg:pr-24 lg:text-2xl lg:leading-9"
            style={{ y: text03Y, x: text03X, opacity: text03Opacity }}
          >
            {isWaiting ? (
              <TypeAnimation
                sequence={[
                  '',
                  2000,
                  HOME_PAGE.SOFTWARE_ENGINEER_FULLSTACK,
                  3000,
                  HOME_PAGE.I_AM,
                  0,
                  HOME_PAGE.SOFTWARE_ENGINEER_FRONTEND,
                  3000,
                  HOME_PAGE.I_AM,
                  0,
                  HOME_PAGE.SOFTWARE_ENGINEER_BACKEND,
                  3000,
                  HOME_PAGE.I_AM,
                  0,
                  HOME_PAGE.UI_UX_DESIGNER,
                  3000,
                ]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
              />
            ) : null}
          </motion.p>
        </div>
      </div>
      <div className="absolute right-4 top-[70%] z-30 md:left-1/2 md:right-auto md:-translate-x-1/2 md:transform">
        <motion.button
          className="relative z-50 cursor-pointer rounded-full border border-foreground bg-background/50 py-4"
          onClick={() => handleMenuClick('about')}
          style={{ opacity: opacityOut }}
        >
          <ArrowDown02Icon
            className="size-12 animate-scroll-hint text-primary"
            strokeWidth={0.4}
          />
        </motion.button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 -z-10 w-full">
        <LogoCarousel />
      </div>
    </section>
  );
};
