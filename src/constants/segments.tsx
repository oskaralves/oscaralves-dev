import { getDictionary } from '@/dictionaries';
import { Locale } from '@/types/locale';
import {
  CloudServerIcon,
  DatabaseIcon,
  MobileProgramming01Icon,
  PackageIcon,
  SourceCodeIcon,
  TestTube01Icon,
  WebDesign02Icon,
} from 'hugeicons-react';

export const getSegments = (locale: Locale = 'pt-BR') => {
  const { FRONT_END, BACK_END, MOBILE, TEST, DATABASE, DEVOPS, LIBS } =
    getDictionary(locale, 'segment');
  return [
    {
      id: 'frontend',
      icon: (
        <WebDesign02Icon className="h-10 w-10 text-primary" strokeWidth={0.5} />
      ),
      title: FRONT_END.TITLE,
      description: FRONT_END.DESCRIPTION,
    },
    {
      id: 'backend',
      icon: (
        <SourceCodeIcon className="h-10 w-10 text-primary" strokeWidth={0.5} />
      ),
      title: BACK_END.TITLE,
      description: BACK_END.DESCRIPTION,
    },
    {
      id: 'mobile',
      icon: (
        <MobileProgramming01Icon
          className="h-10 w-10 text-primary"
          strokeWidth={0.5}
        />
      ),
      title: MOBILE.TITLE,
      description: MOBILE.DESCRIPTION,
    },
    {
      id: 'test',
      icon: (
        <TestTube01Icon className="h-10 w-10 text-primary" strokeWidth={0.5} />
      ),
      title: TEST.TITLE,
      description: TEST.DESCRIPTION,
    },
    {
      id: 'database',
      icon: (
        <DatabaseIcon className="h-10 w-10 text-primary" strokeWidth={0.5} />
      ),
      title: DATABASE.TITLE,
      description: DATABASE.DESCRIPTION,
    },
    {
      id: 'devops',
      icon: (
        <CloudServerIcon className="h-10 w-10 text-primary" strokeWidth={0.5} />
      ),
      title: DEVOPS.TITLE,
      description: DEVOPS.DESCRIPTION,
    },
    {
      id: 'libs',
      icon: (
        <PackageIcon className="h-10 w-10 text-primary" strokeWidth={0.5} />
      ),
      title: LIBS.TITLE,
      description: LIBS.DESCRIPTION,
    },
  ];
};
