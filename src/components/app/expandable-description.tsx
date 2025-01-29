'use client';

import { ReactNode, useState } from 'react';
import { Button } from '../ui/button';

export const ExpandableDescription = ({
  description,
}: {
  description: ReactNode;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      <div
        className={`overflow-hidden text-sm leading-relaxed text-muted-foreground transition-all duration-300 ${
          isExpanded ? 'line-clamp-none' : 'line-clamp-4'
        }`}
      >
        {description}
      </div>
      <Button
        variant="link"
        className="mt-2 p-0 text-sm text-primary underline"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Ver menos' : 'Ver mais'}
      </Button>
    </div>
  );
};
