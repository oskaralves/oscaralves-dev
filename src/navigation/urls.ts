export const BASE_ROUTE = '/';

// Public
export const LOGIN_URL = `/auth/login`;
export const NEW_PASSWORD_URL = `/auth/new-password`;
export const REGISTER_URL = `/auth/register`;
export const FORGOT_PASSWORD_URL = `/auth/forgot-password`;

// Private
export const HOME_URL = `#home`;
export const ABOUT_URL = `#about`;
export const SKILLS_URL = `#skills`;
export const EXPERIENCES_URL = `#experiences`;
export const RECOMMENDATIONS_URL = '#recommendations';
export const PROJECTS_URL = `#projects`;
export const CONTACT_URL = `#contact`;

// Store
export const STORE_DASHBOARD_URL = `/dashboard`;

export const STORE_CATALOG_URL = `/catalog`;
export const STORE_CATALOG_CATEGORY_EDIT_URL = `/catalog/category/:catalogCategoryId`;
export const STORE_CATALOG_ITEM_EDIT_URL = `/catalog/category/:catalogCategoryId/item/:catalogItemId`;
export const STORE_CATALOG_CATEGORY_CREATE_URL = `/catalog/category/create`;
export const STORE_CATALOG_ITEM_CREATE_URL = `/catalog/category/:catalogCategoryId/item/create`;

export const STORE_ORDER_LIST_URL = `/orders`;
export const STORE_ORDER_DETAIL_URL = `/orders/:id`;

export const STORE_OPERATING_DAY_URL = `/operating-days`;
export const STORE_PAYMENT_METHOD_URL = `/payment-methods`;

// Admin
export const ADMIN_MERCHANT_LIST_URL = `/admin/merchants`;
export const ADMIN_MERCHANT_CREATE_URL = `/admin/merchants/create`;
export const ADMIN_MERCHANT_EDIT_URL = `/admin/merchants/:id/edit`;
export const ADMIN_MERCHANT_DETAIL_URL = `/admin/merchants/:id/details`;
export const ADMIN_MERCHANT_DETAIL_MAIN_DATA_URL = `/admin/merchants/:id/details/main`;
export const ADMIN_MERCHANT_DETAIL_ADDRESSES_URL = `/admin/merchants/:id/details/address`;
export const ADMIN_MERCHANT_DETAIL_DELIVERY_AREAS_URL = `/admin/merchants/:id/details/delivery-areas`;
export const ADMIN_MERCHANT_DETAIL_OPERATING_DAYS_URL = `/admin/merchants/:id/details/operating-days`;
export const ADMIN_MERCHANT_DETAIL_APPEARANCE_URL = `/admin/merchants/:id/details/appearance`;
export const ADMIN_MERCHANT_DETAIL_NOTIFICATIONS_URL = `/admin/merchants/:id/details/notifications`;
export const ADMIN_MERCHANT_DETAIL_ACCESSES_URL = `/admin/merchants/:id/details/accesses`;

export const ADMIN_LEAD_LIST_URL = `/admin/leads`;
export const ADMIN_LEAD_CREATE_URL = `/admin/leads/create`;
export const ADMIN_LEAD_EDIT_URL = `/admin/leads/edit/:id`;
export const ADMIN_LEAD_DETAIL_URL = `/admin/leads/:id/details`;

export const ADMIN_USER_LIST_URL = `/admin/users`;
export const ADMIN_USER_CREATE_URL = `/admin/users/create`;
export const ADMIN_USER_EDIT_URL = `/admin/users/:id/edit`;
export const ADMIN_USER_DETAIL_URL = `/admin/users/:id/details`;
export const ADMIN_USER_DETAIL_PERSONAL_DATA_URL = `/admin/users/:id/details/personal`;
export const ADMIN_USER_DETAIL_ADDRESSES_URL = `/admin/users/:id/details/addresses`;
export const ADMIN_USER_DETAIL_APPEARANCE_URL = `/admin/users/:id/details/appearance`;
export const ADMIN_USER_DETAIL_NOTIFICATIONS_URL = `/admin/users/:id/details/notifications`;

export const ADMIN_ROLE_LIST_URL = `/admin/roles`;
export const ADMIN_ROLE_CREATE_URL = `/admin/roles/create`;
export const ADMIN_ROLE_EDIT_URL = `/admin/roles/edit/:id`;

export const ADMIN_PERMISSION_LIST_URL = `/admin/permissions`;
export const ADMIN_PERMISSION_CREATE_URL = `/admin/permissions/create`;
export const ADMIN_PERMISSION_EDIT_URL = `/admin/permissions/edit/:id`;

export const ADMIN_CATEGORY_TEMPLATE_LIST_URL = `/admin/category-templates`;
export const ADMIN_CATEGORY_TEMPLATE_CREATE_URL = `/admin/category-templates/create`;
export const ADMIN_CATEGORY_TEMPLATE_EDIT_URL = `/admin/category-templates/edit/:id`;

// Settings
export const SETTING_CUSTOM_FIELD_LIST_URL = `/admin/custom-fields`;
export const SETTING_CUSTOM_FIELD_CREATE_URL = `/admin/custom-fields/create`;
export const SETTING_CUSTOM_FIELD_EDIT_URL = `/admin/custom-fields/edit/:id`;

// Error
export const ERROR_404_URL = `/not-found`;
export const ERROR_403_URL = `/unauthorized`;

// Dev & Design
export const DEV_UI_TOOLKIT_URL = `/ui-toolkit`;
