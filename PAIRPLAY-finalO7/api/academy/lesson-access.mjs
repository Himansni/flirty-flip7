// Fetch one protected lesson only after server-side entitlement verification.
import { cleanSlug, errorResponse, jsonResponse, requireEntitlement, requireMethod, requireSupabaseUser, supabaseAdmin } from "../_lib/academy-server.mjs";

async function createSignedMediaUrl(courseSlug, lessonSlug, mediaPath) {
  if (!mediaPath) return null;
  const safePath = String(mediaPath).trim();
  const pathParts = safePath.split("/");
  if (
    safePath.length > 1024
    || pathParts.some((part) => !part || part === "." || part === "..")
    || pathParts[0] !== courseSlug
  ) {
    console.error("Academy lesson media path rejected", { courseSlug, lessonSlug });
    return null;
  }
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  const root = process.env.SUPABASE_URL?.trim().replace(/\/(?:rest\/v1)?\/?$/, "");
  if (!serviceKey || !root) return null;
  const encodedPath = pathParts.map((part) => encodeURIComponent(part)).join("/");
  const response = await fetch(`${root}/storage/v1/object/sign/academy-private/${encodedPath}`, {
    method: "POST",
    headers: { apikey: serviceKey, Authorization: `Bearer ${serviceKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ expiresIn: 600 })
  });
  if (!response.ok) return null;
  const payload = await response.json();
  return payload?.signedURL ? `${root}/storage/v1${payload.signedURL}` : null;
}

export default async function handler(request) {
  try {
    requireMethod(request, ["GET"]);
    const user = await requireSupabaseUser(request);
    const url = new URL(request.url);
    const courseSlug = cleanSlug(url.searchParams.get("course"));
    const lessonSlug = cleanSlug(url.searchParams.get("lesson"));
    await requireEntitlement(user.id, courseSlug);

    const query = new URLSearchParams({
      select: "slug,title,body,media_path,module_slug,sort_order",
      course_slug: `eq.${courseSlug}`,
      slug: `eq.${lessonSlug}`,
      published: "eq.true",
      limit: "1"
    });
    const rows = await supabaseAdmin(`academy_lessons?${query}`);
    const lesson = rows?.[0];
    if (!lesson) return jsonResponse({ code: "LESSON_NOT_FOUND", message: "This lesson is not available." }, 404);

    return jsonResponse({
      lesson: {
        slug: lesson.slug,
        title: lesson.title,
        content: lesson.body || "",
        mediaUrl: await createSignedMediaUrl(courseSlug, lessonSlug, lesson.media_path)
      }
    });
  } catch (error) {
    return errorResponse(error);
  }
}
