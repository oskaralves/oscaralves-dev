'use client';

import { useDictionary } from '@/contexts/dictionary-context';
import { ReactNode, useState } from 'react';
import { Button } from '../ui/button';

export const ExpandableDescription = ({
  description,
}: {
  description: ReactNode;
}) => {
  const {
    general: { SEE_MORE, SEE_LESS },
  } = useDictionary();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      <div
        className={`overflow-hidden text-xs leading-relaxed text-muted-foreground transition-all duration-300 md:text-sm ${
          isExpanded ? 'line-clamp-none' : 'line-clamp-6 lg:line-clamp-4'
        }`}
      >
        {description}
      </div>
      <Button
        variant="link"
        className="-mb-1 mt-2 p-0 text-sm font-medium text-primary underline"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? SEE_LESS : SEE_MORE}
      </Button>
    </div>
  );
};
