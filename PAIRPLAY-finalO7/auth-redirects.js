// ========================================
// AUTHENTICATION REDIRECT CONFIGURATION
// Keeps Supabase email destinations same-origin in development and canonical in Production.
// Edit the approved Production hosts here; callers cannot supply arbitrary redirect paths.
// ========================================
(function configureAuthRedirects(root) {
  "use strict";

  const PRODUCTION_AUTH_ORIGIN = "https://flirtyflip.com";
  const PRODUCTION_HOSTS = new Set(["flirtyflip.com", "www.flirtyflip.com"]);

  function parseLocation(locationLike) {
    const value = typeof locationLike === "string"
      ? locationLike
      : locationLike?.href || locationLike?.origin;
    const url = new URL(String(value || ""));
    if (!new Set(["http:", "https:"]).has(url.protocol)) throw new Error("invalid_auth_origin");
    return url;
  }

  function getAuthRedirectUrls(locationLike) {
    const current = parseLocation(locationLike);
    const baseOrigin = PRODUCTION_HOSTS.has(current.hostname.toLowerCase())
      ? PRODUCTION_AUTH_ORIGIN
      : current.origin;

    return Object.freeze({
      passwordRecovery: new URL("/reset-password", `${baseOrigin}/`).href,
      signupConfirmation: new URL("/", `${baseOrigin}/`).href
    });
  }

  const api = Object.freeze({ getAuthRedirectUrls });
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  if (root) root.FlirtyFlipAuthRedirects = api;
})(typeof window !== "undefined" ? window : globalThis);
