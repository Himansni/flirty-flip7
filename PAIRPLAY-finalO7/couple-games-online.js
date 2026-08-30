// ========================================
// SECURE ONLINE MINI-GAME READINESS
// Online play never reuses the production auth client and never simulates remote players.
// Add only a dedicated public Supabase URL/key here at runtime after the reviewed migration is applied.
// ========================================
(function configureOnlineGameReadiness(global) {
  "use strict";

  function getPublicConfig() {
    const config = global.FLIRTYFLIP_ONLINE_GAMES_CONFIG || null;
    if (!config || config.enabled !== true) return null;
    if (!/^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(String(config.supabaseUrl || ""))) return null;
    if (!String(config.publishableKey || "").startsWith("sb_publishable_")) return null;
    return { supabaseUrl: config.supabaseUrl, publishableKey: config.publishableKey };
  }

  function getReadiness() {
    const config = getPublicConfig();
    return {
      ready: false,
      configPresent: Boolean(config),
      status: config ? "Adapter verification required" : "Setup required",
      reason: config
        ? "Public configuration is present, but two-session Realtime verification must pass before rooms are enabled."
        : "Apply the reviewed migration to a dedicated non-production project and provide its public URL and publishable key."
    };
  }

  global.FlirtyFlipOnlineGames = Object.freeze({ getReadiness });
})(window);
