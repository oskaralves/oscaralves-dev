'use client';

import { APP_SIDEBAR_EXPANDED } from '@/constants';
import { setCookie } from 'cookies-next';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

type AppContextProps = {
  sidebarExpanded: boolean;
  handleToggleSidebar: () => void;
  activeSection: string;
  handleMenuClick: (id: string) => void;
};

const initialContext: AppContextProps = {
  sidebarExpanded: true,
  handleToggleSidebar: () => undefined,
  activeSection: 'home',
  handleMenuClick: () => undefined,
};

const AppContext = createContext<AppContextProps>(initialContext);

const AppContextProvider = ({
  defaultSidebarExpanded,
  children,
}: {
  defaultSidebarExpanded: boolean;
  children: ReactNode | ReactNode[];
}) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(
    defaultSidebarExpanded
  );
  const [activeSection, setActiveSection] = useState('home');

  const { scrollY } = useScroll();

  const handleToggleSidebar = useCallback(() => {
    setSidebarExpanded((prevState) => !prevState);
  }, []);

  const handleMenuClick = useCallback((id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const sectionPosition = section.offsetTop;
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth',
      });

      history.replaceState(null, '', `#${id}`);
    }
  }, []);

  useMotionValueEvent(scrollY, 'change', () => {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom > 100) {
        currentSection = section.id;
      }
    });

    setActiveSection(currentSection);
  });

  useEffect(() => {
    setCookie(APP_SIDEBAR_EXPANDED, sidebarExpanded);
  }, [sidebarExpanded]);

  return (
    <AppContext.Provider
      value={{
        sidebarExpanded,
        handleToggleSidebar,
        activeSection,
        handleMenuClick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppContext, AppContextProvider, useAppContext };
