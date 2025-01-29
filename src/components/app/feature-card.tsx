import { ReactNode } from 'react';

type FeatureCardProps = {
  icon: ReactNode;
  bigLabel?: string | number;
  description: ReactNode;
};
export const FeatureCard = ({
  icon,
  bigLabel,
  description,
}: FeatureCardProps) => {
  return (
    <div className="flex w-full flex-row items-center bg-card p-4 shadow-lg transition-all hover:scale-105 hover:shadow-2xl">
      {icon}
      <div className="flex min-h-16 flex-1 items-center gap-3 px-4">
        {bigLabel ? (
          <h3 className="text-6xl font-extralight text-foreground">
            {bigLabel}
          </h3>
        ) : null}
        <p className="text-lg leading-6 text-foreground">{description}</p>
      </div>
    </div>
  );
};
