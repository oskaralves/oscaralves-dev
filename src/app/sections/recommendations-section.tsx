'use client';

import { RecommendationCarousel } from '@/components/app/recommendation-carousel';
import { useDictionary } from '@/contexts/dictionary-context';
import { motion } from 'framer-motion';

export const RecommendationsSection = () => {
  const {
    page: { RECOMMENDATIONS },
  } = useDictionary();

  return (
    <section
      id="recommendations"
      className="relative flex min-h-[700px] w-full flex-col bg-background/30 pb-24 pt-12 md:min-h-[calc(100vh-68px)]"
    >
      <div className="space-y-6">
        <motion.h2
          className="text-center text-4xl font-light lg:text-7xl lg:font-extralight"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {RECOMMENDATIONS}
        </motion.h2>
        <RecommendationCarousel />
      </div>
    </section>
  );
};
