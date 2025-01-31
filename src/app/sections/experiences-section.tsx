'use client';

import { ExperienceTimeline } from '@/components/app/experience-timeline';
import { useDictionary } from '@/contexts/dictionary-context';
import { motion } from 'framer-motion';

export const ExperiencesSection = () => {
  const {
    page: { EXPERIENCES_PAGE },
  } = useDictionary();
  return (
    <section
      id="experiences"
      className="relative flex min-h-[700px] w-full flex-col bg-background/30 pb-24 pt-12 md:min-h-[calc(100vh-68px)]"
    >
      <div className="container space-y-6">
        <motion.h2
          className="text-5xl font-light lg:text-7xl lg:font-extralight"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {EXPERIENCES_PAGE.TITLE}
        </motion.h2>
        <motion.p
          className="text-lg leading-8 opacity-70"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 0.7, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {EXPERIENCES_PAGE.PARAGRAPH_1}
        </motion.p>
        <ExperienceTimeline />
      </div>
    </section>
  );
};
