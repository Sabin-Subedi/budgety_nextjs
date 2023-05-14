export const API_ROUTES: Readonly<Record<string, string>> = Object.freeze({
  login: "/auth/login",
  register: "/auth/register",
  refresh_token: "/auth/refresh",
  logout: "/auth/logout",
  forgot_password: "/auth/forgot-password",
  google_oauth: "/oauth/google",
  facebook_oauth: "/oauth/facebook",
});
