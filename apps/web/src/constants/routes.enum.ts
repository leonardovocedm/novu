export enum ROUTES {
  HOME = '/',
  AUTH_SIGNUP = '/auth/signup',
  AUTH_LOGIN = '/auth/login',
  AUTH_RESET_REQUEST = '/auth/reset/request',
  AUTH_RESET_TOKEN = '/auth/reset/:token',
  AUTH_INVITATION_TOKEN = '/auth/invitation/:token',
  AUTH_APPLICATION = '/auth/application',
  PARTNER_INTEGRATIONS_VERCEL_LINK_PROJECTS = '/partner-integrations/vercel/link-projects',
  PARTNER_INTEGRATIONS_VERCEL_LINK_PROJECTS_EDIT = '/partner-integrations/vercel/link-projects/edit',
  ANY = '/*',
  WORKFLOWS_DIGEST_PLAYGROUND = '/workflows/:templateId/digest-playground',
  WORKFLOWS_CREATE = '/workflows/create',
  WORKFLOWS_EDIT_TEMPLATEID = '/workflows/edit/:templateId',
  WORKFLOWS = '/workflows',
  TENANTS = '/tenants',
  TENANTS_CREATE = '/tenants/create',
  QUICKSTART = '/quickstart',
  GET_STARTED = '/get-started',
  GET_STARTED_PREVIEW = '/get-started/preview',
  QUICK_START_NOTIFICATION_CENTER = '/quickstart/notification-center',
  QUICK_START_SETUP = '/quickstart/notification-center/set-up',
  QUICK_START_SETUP_FRAMEWORK = '/quickstart/notification-center/set-up/:framework',
  QUICK_START_SETUP_TRIGGER = '/quickstart/notification-center/set-up/:framework/trigger',
  QUICK_START_SETUP_SUCCESS = '/quickstart/notification-center/set-up/:framework/success',
  ACTIVITIES = '/activities',
  SETTINGS = '/settings',
  INTEGRATIONS = '/integrations',
  INTEGRATIONS_CREATE = '/integrations/create',
  TEAM = '/team',
  CHANGES = '/changes',
  SUBSCRIBERS = '/subscribers',
  ABOUT = '/about',
  CONTACT = '/contact',
}
