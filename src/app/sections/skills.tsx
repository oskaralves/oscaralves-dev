'use client';

import { SegmentCard } from '@/components/app/segment-card';
import { getSegments } from '@/constants/segments';
import { skills } from '@/constants/skills';
import { useDictionary } from '@/contexts/dictionary-context';
import { useLanguage } from '@/contexts/locale-context';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export const SkillsSection = () => {
  const {
    page: { SKILLS_PAGE },
  } = useDictionary();
  const { locale } = useLanguage();

  const segments = getSegments(locale);
  return (
    <section
      id="skills"
      className="flex min-h-[700px] w-full flex-col pb-24 pt-12 dark:bg-black/10 md:min-h-[calc(100vh-68px)]"
    >
      <div className="container space-y-6">
        <motion.h2
          className="text-center text-5xl font-light lg:text-7xl lg:font-extralight"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {SKILLS_PAGE.TITLE}
        </motion.h2>

        <motion.p
          className="text-center text-lg leading-8 opacity-70"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {SKILLS_PAGE.PARAGRAPH_1}
        </motion.p>

        <div className="grid w-full grid-cols-1 items-start justify-items-center gap-12 lg:grid-cols-2">
          {segments.map((segment, index) => (
            <motion.div
              key={`segment-card-${segment.id}`}
              className={cn(
                'col-span-2 flex h-full flex-col gap-12 lg:col-span-1',
                {
                  'lg:col-span-2': segments.length - 1 === index,
                }
              )}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <SegmentCard
                title={segment.title}
                description={segment.description}
                icon={segment.icon}
                skills={skills
                  .filter((skill) => skill.segment === segment.id)
                  .sort((a, b) => b.level - a.level)}
                isCompact={segments.length - 1 === index}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
