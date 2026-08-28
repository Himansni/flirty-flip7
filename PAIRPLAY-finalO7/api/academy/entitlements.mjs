// Return only the signed-in user's current Academy entitlements.
import { errorResponse, jsonResponse, mapEntitlement, requireMethod, requireSupabaseUser, supabaseAdmin } from "../_lib/academy-server.mjs";

async function handler(request) {
  try {
    requireMethod(request, ["GET"]);
    const user = await requireSupabaseUser(request);
    const query = new URLSearchParams({
      select: "course_slug,status,granted_at,expires_at,payment_order_id",
      user_id: `eq.${user.id}`,
      status: "eq.active",
      order: "granted_at.desc"
    });
    const rows = (await supabaseAdmin(`academy_entitlements?${query}`)) || [];
    const current = rows.filter((row) => !row.expires_at || Date.parse(row.expires_at) > Date.now());
    return jsonResponse({ entitlements: current.map(mapEntitlement) });
  } catch (error) {
    return errorResponse(error);
  }
}

export { handler as GET };
