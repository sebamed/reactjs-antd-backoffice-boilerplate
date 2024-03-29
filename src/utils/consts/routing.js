export const ROUTE_AUTH = '/auth';
export const ROUTE_AUTH_SIGN_IN = `${ROUTE_AUTH}/sign-in`;
export const ROUTE_AUTH_FORGOT_PASSWORD = `${ROUTE_AUTH}/forgot-password`;
export const ROUTE_AUTH_RESET_PASSWORD = `${ROUTE_AUTH}/reset-password`;

export const ROUTE_DASHBOARD = '/dashboard';

export const ROUTE_EXCEPTION = `${ROUTE_DASHBOARD}`;
export const ROUTE_EXCEPTION_PLACEHOLDER = `${ROUTE_DASHBOARD}/error/:id`;
export const ROUTE_EXCEPTION_404 = `${ROUTE_DASHBOARD}/error/404`;
export const ROUTE_EXCEPTION_403 = `${ROUTE_DASHBOARD}/error/403`;
export const ROUTE_EXCEPTION_500 = `${ROUTE_DASHBOARD}/error/500`;

export const ROUTE_DASHBOARD_ENTITY = `${ROUTE_DASHBOARD}/entity`;
export const ROUTE_DASHBOARD_ENTITY_LIST = `${ROUTE_DASHBOARD_ENTITY}`;
export const ROUTE_DASHBOARD_ENTITY_CREATE_NEW = `${ROUTE_DASHBOARD_ENTITY}/create-new`;
export const ROUTE_DASHBOARD_ENTITY_EDIT_PLACEHOLDER = `${ROUTE_DASHBOARD_ENTITY}/create-new/edit/:id`;
export const ROUTE_DASHBOARD_ENTITY_EDIT = `${ROUTE_DASHBOARD_ENTITY}/create-new/edit`;
