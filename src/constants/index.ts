export const menuItemIconProps = {
  width: 30,
  height: 30,
  strokeWidth: 1,
};

export const PREFIX_KEY =
  process.env.NODE_ENV === 'development' ? 'oa.__dev__' : 'oa';

export const APP_TITLE = `${PREFIX_KEY !== 'oa' ? '[DEV] ' : ''}Oscar Alves`;

export const APP_LOCALE_KEY = `${PREFIX_KEY}.app-locale`;
export const APP_SIDEBAR_EXPANDED = `${PREFIX_KEY}.sidebar-expanded`;

export const MY_EMAIL = 'index@oscaralves.dev';
export const MY_LINKEDIN = 'linkedin.com/in/oskaralves';
export const MY_GITHUB = 'github.com/oskaralves';
