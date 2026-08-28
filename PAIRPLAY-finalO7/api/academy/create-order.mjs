// Create one Razorpay order from the database-owned course price with idempotency protection.
import { AcademyHttpError, createRazorpayOrder, enforceOrderRateLimit, errorResponse, findEntitlement, findIdempotentOrder, getPublishedCourse, insertPaymentOrder, jsonResponse, mapOrder, parseJsonBody, requireMethod, requireSupabaseUser, updatePaymentOrder } from "../_lib/academy-server.mjs";

function validIdempotencyKey(request) {
  const key = String(request.headers.get("idempotency-key") || "").trim();
  if (!/^[A-Za-z0-9_-]{16,100}$/.test(key)) throw new AcademyHttpError(400, "INVALID_IDEMPOTENCY_KEY", "A valid idempotency key is required.");
  return key;
}

async function handler(request) {
  let databaseOrder = null;
  try {
    requireMethod(request, ["POST"]);
    const user = await requireSupabaseUser(request);
    const body = await parseJsonBody(request);
    const course = await getPublishedCourse(body.courseSlug);
    if (!course) throw new AcademyHttpError(404, "COURSE_NOT_FOUND", "This Academy course is not available.");
    if (!course.checkout_enabled || !Number.isInteger(course.price_minor) || course.price_minor <= 0) {
      throw new AcademyHttpError(503, "CHECKOUT_UNAVAILABLE", "Enrollment is not configured for this course yet.");
    }
    if (await findEntitlement(user.id, course.slug)) throw new AcademyHttpError(409, "ALREADY_ENROLLED", "This course is already available in your dashboard.");

    const idempotencyKey = validIdempotencyKey(request);
    const existing = await findIdempotentOrder(user.id, idempotencyKey);
    if (existing) {
      if (existing.course_slug !== course.slug) throw new AcademyHttpError(409, "IDEMPOTENCY_CONFLICT", "This request key was already used for another course.");
      if (existing.provider_order_id && ["created", "attempted", "authorized"].includes(existing.status)) {
        return jsonResponse({ ...mapOrder(existing), keyId: process.env.RAZORPAY_KEY_ID, courseTitle: course.title });
      }
      throw new AcademyHttpError(409, "ORDER_NOT_REUSABLE", "This order cannot be reused. Refresh before trying again.");
    }

    await enforceOrderRateLimit(user.id);
    databaseOrder = await insertPaymentOrder({ userId: user.id, course, idempotencyKey });
    const providerOrder = await createRazorpayOrder(databaseOrder, course);
    if (Number(providerOrder.amount) !== Number(course.price_minor) || providerOrder.currency !== course.currency) {
      throw new AcademyHttpError(502, "ORDER_MISMATCH", "The payment provider returned an invalid order.");
    }
    const saved = await updatePaymentOrder(databaseOrder.id, { provider_order_id: providerOrder.id, status: "created", updated_at: new Date().toISOString() });
    return jsonResponse({ ...mapOrder(saved), keyId: process.env.RAZORPAY_KEY_ID, courseTitle: course.title }, 201);
  } catch (error) {
    if (databaseOrder?.id) {
      try { await updatePaymentOrder(databaseOrder.id, { status: "failed", updated_at: new Date().toISOString() }); } catch (updateError) { console.error("Unable to mark Academy order failed", updateError); }
    }
    return errorResponse(error);
  }
}

export { handler as POST };
