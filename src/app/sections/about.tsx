'use client';

import { useDictionary } from '@/contexts/dictionary-context';
import { motion } from 'framer-motion';

export const AboutSection = () => {
  const {
    page: { ABOUT_PAGE },
  } = useDictionary();
  return (
    <section
      id="about"
      className="relative flex min-h-[700px] w-full flex-col bg-background/20 pb-24 pt-12 md:min-h-[calc(100vh-68px)] lg:bg-[url('/images/img-about.png')] lg:bg-cover lg:bg-right-top"
    >
      <div className="container space-y-6">
        <div className="grid grid-cols-1 items-start justify-items-center gap-4 lg:grid-cols-3">
          <div className="col-span-2 flex flex-col space-y-10 md:pr-24">
            <motion.h2
              className="text-5xl font-light lg:text-7xl lg:font-extralight"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              {ABOUT_PAGE.TITLE}
            </motion.h2>
            <motion.p
              className="text-lg leading-8 opacity-70"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}
            >
              {ABOUT_PAGE.PARAGRAPH_1}
            </motion.p>

            <motion.p
              className="text-lg leading-8 opacity-70"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.4, ease: 'easeOut' }}
            >
              {ABOUT_PAGE.PARAGRAPH_2}
            </motion.p>

            <motion.p
              className="text-lg leading-8 opacity-70"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.6, ease: 'easeOut' }}
            >
              {ABOUT_PAGE.PARAGRAPH_3}
            </motion.p>

            <motion.p
              className="text-lg leading-8 opacity-70"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.8, ease: 'easeOut' }}
            >
              {ABOUT_PAGE.PARAGRAPH_4}
            </motion.p>
          </div>
          {/* <div className="min-w-full border border-primary bg-white/30 p-12 dark:bg-black/30 md:col-span-1">
            <Image
              src="/images/img-about.jpg"
              className="block w-full opacity-35 "
              alt=""
              width={780}
              height={1783}
              unoptimized
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};
