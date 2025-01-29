import { cn } from '@/lib/utils';
import React from 'react';

interface SkillProgressProps {
  logo: React.ReactNode;
  title: string;
  color: string;
  level: number;
  isCompact?: boolean;
}

export const SkillProgress = ({
  logo,
  title,
  color,
  level,
  isCompact,
}: SkillProgressProps) => {
  return (
    <div className="flex items-center gap-2 rounded-lg px-3">
      <div
        className={cn('bg-black/20 p-2 dark:bg-white/20', { 'p-1': isCompact })}
      >
        {logo}
      </div>
      <div className="flex-1">
        <div className="mb-2 flex items-center justify-between">
          <h5 className={cn('text-xs font-normal text-foreground')}>{title}</h5>
        </div>
        <div className="h-0.5 w-full translate-y-[3px] bg-foreground/20">
          <div
            className="relative h-1 -translate-y-[2px]"
            style={{
              width: `${level}%`,
              backgroundColor: color,
            }}
          >
            <div
              className={cn(
                'absolute -right-[18px] bottom-[calc(100%+10px)] z-30 bg-black px-1 py-0.5 text-sm font-semibold text-foreground md:transform'
              )}
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
                style={{
                  backgroundColor: color,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
