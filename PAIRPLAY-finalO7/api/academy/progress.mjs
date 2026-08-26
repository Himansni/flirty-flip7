// Read or update lesson completion after verifying both account ownership and course entitlement.
import { cleanSlug, errorResponse, jsonResponse, parseJsonBody, requireEntitlement, requireMethod, requireSupabaseUser, supabaseAdmin } from "../_lib/academy-server.mjs";

async function readProgress(userId, courseSlug) {
  await requireEntitlement(userId, courseSlug);
  const query = new URLSearchParams({
    select: "lesson_slug,completed,completed_at,updated_at",
    user_id: `eq.${userId}`,
    course_slug: `eq.${courseSlug}`,
    order: "updated_at.asc"
  });
  const rows = (await supabaseAdmin(`academy_lesson_progress?${query}`)) || [];
  return {
    courseSlug,
    completedLessonSlugs: rows.filter(({ completed }) => completed).map(({ lesson_slug }) => lesson_slug),
    lessons: rows.map((row) => ({ lessonSlug: row.lesson_slug, completed: row.completed, completedAt: row.completed_at, updatedAt: row.updated_at }))
  };
}

export default async function handler(request) {
  try {
    requireMethod(request, ["GET", "POST"]);
    const user = await requireSupabaseUser(request);

    if (request.method === "GET") {
      const courseSlug = cleanSlug(new URL(request.url).searchParams.get("course"));
      return jsonResponse({ progress: await readProgress(user.id, courseSlug) });
    }

    const body = await parseJsonBody(request);
    const courseSlug = cleanSlug(body.courseSlug);
    const lessonSlug = cleanSlug(body.lessonSlug);
    await requireEntitlement(user.id, courseSlug);

    const lessonQuery = new URLSearchParams({
      select: "slug",
      course_slug: `eq.${courseSlug}`,
      slug: `eq.${lessonSlug}`,
      published: "eq.true",
      limit: "1"
    });
    const lessons = await supabaseAdmin(`academy_lessons?${lessonQuery}`);
    if (!lessons?.length) return jsonResponse({ code: "LESSON_NOT_FOUND", message: "This lesson is not available." }, 404);

    const completed = Boolean(body.completed);
    const rows = await supabaseAdmin("academy_lesson_progress?on_conflict=user_id,course_slug,lesson_slug", {
      method: "POST",
      prefer: "resolution=merge-duplicates,return=representation",
      body: {
        user_id: user.id,
        course_slug: courseSlug,
        lesson_slug: lessonSlug,
        completed,
        completed_at: completed ? new Date().toISOString() : null,
        updated_at: new Date().toISOString()
      }
    });
    return jsonResponse({ progress: rows?.[0] || { course_slug: courseSlug, lesson_slug: lessonSlug, completed } });
  } catch (error) {
    return errorResponse(error);
  }
}
