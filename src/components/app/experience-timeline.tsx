'use client';

import { getExperiences } from '@/constants/experiences';
import { useLanguage } from '@/contexts/locale-context';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ArrowDown02Icon, ArrowRight02Icon } from 'hugeicons-react';
import Image from 'next/image';
import { ExpandableDescription } from './expandable-description';

export const ExperienceTimeline = () => {
  const { locale } = useLanguage();
  const experiences = getExperiences(locale);
  return (
    <div className="flex flex-col">
      {experiences.map((exp, index) => {
        const previousExp = experiences[index - 1];
        const currentYear = exp.endDate.split('/')[1];
        const previousYear = previousExp
          ? previousExp.endDate.split('/')[1]
          : null;

        return (
          <div key={index} className="grid grid-cols-12 items-start gap-6">
            <motion.div
              className="col-span-3 flex flex-col items-end gap-2 text-right text-muted-foreground"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h5
                className={cn('text-3xl font-light text-primary lg:text-4xl', {
                  'h-0.5 opacity-0': previousYear === currentYear,
                })}
              >
                {currentYear}
              </h5>
              <p className="text-sm font-medium">{exp.company}</p>
              <div className="lg:text-md flex flex-col items-end gap-2 text-sm lg:flex-row lg:items-center">
                <span>{exp.startDate}</span>
                <ArrowRight02Icon className="hidden h-4 w-4 lg:flex" />
                <ArrowDown02Icon className="flex h-4 w-4 lg:hidden" />
                <span>{exp.endDate}</span>
              </div>
              <div className="aspect-square bg-foreground/10 transition-all">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} Logo`}
                  width={72}
                  height={72}
                  unoptimized
                />
              </div>
              {/**
               * Todo: Portfolio galery

              <div className="mb-24 grid w-full grid-cols-2 gap-2 lg:grid-cols-3">
                <div className="aspect-square bg-foreground/10 transition-all">
                  <Image
                    src={exp.logo}
                    alt={`${exp.company} Logo`}
                    width={140}
                    height={140}
                    unoptimized
                  />
                </div>
              </div> */}
            </motion.div>

            <motion.div
              className="relative col-span-1 flex h-full justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="absolute left-1/2 top-4 h-full w-0.5 -translate-x-1/2 transform bg-foreground/10" />
              <div className="absolute top-0 z-10 mt-3 h-4 w-4 rounded-full bg-primary" />
              <div className="absolute -bottom-7 z-10 mt-3 h-4 w-4 rounded-full bg-primary" />
            </motion.div>

            <motion.div
              className="relative col-span-8 mb-24 flex flex-col space-y-3 bg-card p-4 shadow-md lg:p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col">
                  <span className="text-xl font-medium text-primary">
                    {exp.role}
                  </span>
                </div>
                {/**
                 * Todo: Company Logo
                 *
                <Image
                  src={exp.logo}
                  alt={`${exp.company} Logo`}
                  width={56}
                  height={56}
                  unoptimized
                /> */}
              </div>
              <ExpandableDescription
                description={
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                }
              />
              <div className="absolute left-0 top-0 z-10 h-4 w-4 -translate-x-1/2 rotate-45 bg-card" />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};
