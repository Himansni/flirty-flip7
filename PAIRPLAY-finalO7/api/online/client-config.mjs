// ========================================
// PLAY ONLINE PUBLIC CLIENT CONFIGURATION
// Returns only the dedicated test-project URL, publishable key and reviewed feature flags.
// Secret/service-role values are never read or returned by this endpoint.
// ========================================
const REQUIRED_SCHEMA_VERSION = "20260830000000-v2";

function parseBoolean(value) {
  return String(value || "").toLowerCase() === "true";
}

function projectReferenceFromUrl(value) {
  try {
    const url = new URL(String(value || ""));
    if (url.protocol !== "https:" || !/^[a-z0-9-]+\.supabase\.co$/i.test(url.hostname) || url.pathname !== "/") return "";
    return url.hostname.split(".")[0];
  } catch (_) {
    return "";
  }
}

export function buildOnlineClientConfig(environment = {}) {
  const supabaseUrl = String(environment.ONLINE_GAMES_SUPABASE_URL || "").trim();
  const publishableKey = String(environment.ONLINE_GAMES_SUPABASE_PUBLISHABLE_KEY || "").trim();
  const expectedProjectRef = String(environment.ONLINE_GAMES_EXPECTED_PROJECT_REF || "").trim();
  const projectRef = projectReferenceFromUrl(supabaseUrl);
  const schemaVersion = String(environment.ONLINE_GAMES_SCHEMA_VERSION || "").trim();
  const enabled = parseBoolean(environment.ONLINE_GAMES_ENABLED);
  const configurationValid = Boolean(
    projectRef
    && expectedProjectRef
    && projectRef === expectedProjectRef
    && publishableKey.startsWith("sb_publishable_")
    && schemaVersion === REQUIRED_SCHEMA_VERSION
  );

  if (!configurationValid) {
    return {
      enabled: false,
      anonymousAuthEnabled: false,
      schemaVersion: REQUIRED_SCHEMA_VERSION,
      status: "setup_required"
    };
  }

  return {
    enabled,
    anonymousAuthEnabled: enabled && parseBoolean(environment.ONLINE_GAMES_ANONYMOUS_AUTH_ENABLED),
    supabaseUrl,
    publishableKey,
    projectRef,
    schemaVersion,
    status: enabled ? "configured" : "disabled"
  };
}

export default function handler(request, response) {
  response.setHeader("Cache-Control", "no-store, max-age=0");
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return response.status(405).json({ error: "method_not_allowed" });
  }
  return response.status(200).json(buildOnlineClientConfig(process.env));
}
