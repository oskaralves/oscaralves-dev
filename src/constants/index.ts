export const menuItemIconProps = {
  width: 30,
  height: 30,
  strokeWidth: 1,
};

export const PREFIX_KEY =
  process.env.NODE_ENV === 'development' ? 'oa.__dev__' : 'oa';

//  Keys of local storage or cookie
export const APP_TITLE = `${PREFIX_KEY !== 'oa' ? '[DEV] ' : ''}Oscar Alves`;
export const APP_LOCALE_KEY = `${PREFIX_KEY}.app-locale`;
export const APP_SIDEBAR_EXPANDED = `${PREFIX_KEY}.sidebar-expanded`;
