import { menuItemIconProps } from '@/constants';
import { getDictionary } from '@/dictionaries';
import { Locale } from '@/types/locale';
import {
  AtIcon,
  Briefcase01Icon,
  Home04Icon,
  InformationSquareIcon,
  MessageFavourite01Icon,
  ToolsIcon,
} from 'hugeicons-react';
import { IMenuItem } from './types';
import {
  ABOUT_URL,
  CONTACT_URL,
  EXPERIENCES_URL,
  HOME_URL,
  RECOMMENDATIONS_URL,
  SKILLS_URL,
} from './urls';

export const getNavigation = (locale: Locale): { items: IMenuItem[] } => {
  const { HOME, ABOUT, SKILLS, EXPERIENCES, RECOMMENDATIONS, CONTACT } =
    getDictionary(locale, 'page');
  return {
    items: [
      {
        id: 'home',
        title: HOME,
        type: 'item',
        url: HOME_URL,
        icon: <Home04Icon {...menuItemIconProps} />,
      },
      {
        id: 'about',
        title: ABOUT,
        type: 'item',
        url: ABOUT_URL,
        icon: <InformationSquareIcon {...menuItemIconProps} />,
      },
      {
        id: 'skills',
        title: SKILLS,
        type: 'item',
        url: SKILLS_URL,
        icon: <ToolsIcon {...menuItemIconProps} />,
      },
      {
        id: 'experiences',
        title: EXPERIENCES,
        type: 'item',
        url: EXPERIENCES_URL,
        icon: <Briefcase01Icon {...menuItemIconProps} />,
      },
      {
        id: 'recommendations',
        title: RECOMMENDATIONS,
        type: 'item',
        url: RECOMMENDATIONS_URL,
        icon: <MessageFavourite01Icon {...menuItemIconProps} />,
      },
      // {
      //   id: 'projects',
      //   title: PROJECTS,
      //   type: 'item',
      //   url: PROJECTS_URL,
      //   icon: <WebDesign02Icon {...menuItemIconProps} />,
      // },
      {
        id: 'contact',
        title: CONTACT,
        type: 'item',
        url: CONTACT_URL,
        icon: <AtIcon {...menuItemIconProps} />,
      },
    ],
  };
};
