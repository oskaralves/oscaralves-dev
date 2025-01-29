import { experiences } from '@/constants/experiences';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ExpandableDescription } from './expandable-description';

export const ExperienceTimeline = () => {
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
            <div className="col-span-3 flex flex-col items-end gap-2 text-right text-muted-foreground">
              <h5
                className={cn('text-4xl font-light text-primary lg:text-4xl', {
                  'h-0.5 opacity-0': previousYear === currentYear,
                })}
              >
                {currentYear}
              </h5>
              <p className="text-sm font-medium">{exp.company}</p>

              <p className="lg:text-md text-sm">
                {exp.startDate} → {exp.endDate}
              </p>
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
               * portfolio galery

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
            </div>

            <div className="relative col-span-1 flex h-full justify-center">
              <div className="absolute left-1/2 top-4 h-full w-0.5 -translate-x-1/2 transform bg-foreground/30" />
              <div className="z-10 mt-3 size-4 rounded-full bg-primary" />
            </div>

            <div className="relative col-span-8 mb-24 flex flex-col space-y-3 bg-card p-8 shadow-md">
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col">
                  <span className="text-xl font-medium text-primary">
                    {exp.role}
                  </span>
                </div>
                {/* <Image
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
            </div>
          </div>
        );
      })}
    </div>
  );
};
