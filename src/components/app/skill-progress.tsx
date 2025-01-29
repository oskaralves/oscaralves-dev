'use client';

import { cn } from '@/lib/utils';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

interface SkillProgressProps {
  logo: React.ReactNode;
  title: string;
  color: string;
  level: number;
  isCompact?: boolean;
  index: number;
}

export const SkillProgress = ({
  logo,
  title,
  color,
  level,
  isCompact,
  index,
}: SkillProgressProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      className="flex items-center gap-2 rounded-lg px-3 opacity-0"
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        className={cn('bg-black/20 p-2 dark:bg-white/20', { 'p-1': isCompact })}
      >
        {logo}
      </div>
      <div className="flex-1">
        <div className="mb-2 flex items-center justify-between">
          <h5 className="text-xs font-normal text-foreground">{title}</h5>
        </div>
        <div className="h-0.5 w-full translate-y-[3px] bg-foreground/20">
          <motion.div
            className="relative h-1 -translate-y-[2px]"
            initial={{ width: '0%' }}
            animate={isInView ? { width: `${level}%` } : {}}
            transition={{ duration: 1.2, delay: index * 0.1 }}
            style={{ backgroundColor: color }}
          >
            <motion.div
              className="absolute -right-[18px] bottom-[calc(100%+10px)] z-30 bg-black px-1 py-0.5 text-sm font-semibold text-white"
              initial={{ opacity: 0, y: -5 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{
                backgroundColor: color,
                color: ['#f8df1d', '#fff', '#61dafc', '#99cd00'].includes(color)
                  ? '#000'
                  : undefined,
              }}
            >
              {level}%
              <div
                className="absolute -bottom-[3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 bg-black"
                style={{ backgroundColor: color }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
