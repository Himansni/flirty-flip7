// Return only the public Supabase values required by the Academy browser client.
// Keep privileged database and payment credentials in server-only Vercel variables.
import { AcademyHttpError, errorResponse, jsonResponse, requireMethod } from "../_lib/academy-server.mjs";

const ACADEMY_PREVIEW_PROJECT_REF = "hacnnarthuzyblahoyqu";

function getPublicClientConfig() {
  const rawUrl = process.env.SUPABASE_URL?.trim() || "";
  const publishableKey = process.env.SUPABASE_PUBLISHABLE_KEY?.trim()
    || process.env.SUPABASE_ANON_KEY?.trim()
    || "";

  let url;
  try {
    url = new URL(rawUrl);
  } catch (error) {
    throw new AcademyHttpError(503, "ACADEMY_AUTH_UNAVAILABLE", "Academy authentication is not configured for this environment.");
  }

  const legacyPayload = publishableKey.split(".").length === 3
    ? (() => {
        try { return JSON.parse(Buffer.from(publishableKey.split(".")[1], "base64url").toString("utf8")); }
        catch (error) { return null; }
      })()
    : null;
  const isPublicKey = publishableKey.startsWith("sb_publishable_") || legacyPayload?.role === "anon";
  const projectRef = url.hostname.split(".")[0];

  if (url.protocol !== "https:" || !/^[a-z0-9]+\.supabase\.co$/i.test(url.hostname) || url.pathname !== "/" || !isPublicKey
    || (process.env.VERCEL_ENV === "preview" && projectRef !== ACADEMY_PREVIEW_PROJECT_REF)) {
    throw new AcademyHttpError(503, "ACADEMY_AUTH_UNAVAILABLE", "Academy authentication is not configured for this environment.");
  }

  return {
    supabaseUrl: url.origin,
    supabasePublishableKey: publishableKey
  };
}

async function handler(request) {
  try {
    requireMethod(request, ["GET"]);
    return jsonResponse(getPublicClientConfig());
  } catch (error) {
    return errorResponse(error);
  }
}

export { getPublicClientConfig, handler as GET };
