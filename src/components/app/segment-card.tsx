import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ReactNode } from 'react';
import { SkillProgress } from './skill-progress';

export type SkillLevel = {
  imageUrl: string;
  title: string;
  color: string;
  segment: string;
  level: number;
};

type SegmentCardProps = {
  icon: ReactNode;
  title?: string | number;
  description: ReactNode;
  skills: SkillLevel[];
  isCompact?: boolean;
};
export const SegmentCard = ({
  icon,
  title,
  description,
  skills,
  isCompact,
}: SegmentCardProps) => {
  return (
    <div className="flex h-full w-full flex-col items-center gap-8 bg-card px-6 py-8 shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
      <div className="flex w-full flex-row justify-between px-3">
        <div className="flex min-h-24 flex-1 flex-col gap-2">
          <h3 className="text-2xl font-light text-primary">{title}</h3>
          <p className="text-md leading-7 text-foreground opacity-55">
            {description}
          </p>
        </div>
        <div className="flex-0 min-h-10">{icon}</div>
      </div>
      <p className="text-xs opacity-35">Nível de domínio</p>

      <div className="grid w-full grid-cols-1 items-start justify-items-center gap-3 lg:grid-cols-4">
        {skills?.map((skill, index) => (
          <div
            key={`skill-progress-col1-${index}`}
            className={cn('col-span-2 flex w-full flex-col', {
              'col-span-1': isCompact,
            })}
          >
            <SkillProgress
              logo={
                <Image
                  src={skill.imageUrl}
                  alt={skill.title}
                  className="size-8"
                  width={32}
                  height={32}
                  unoptimized
                />
              }
              isCompact={isCompact}
              title={skill.title}
              color={skill.color}
              level={skill.level}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
