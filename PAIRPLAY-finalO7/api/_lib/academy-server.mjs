// ========================================
// FLIRTYFLIP ACADEMY SERVER UTILITIES
// Shared Vercel Function helpers for authentication, database access and Razorpay verification.
// Edit environment-variable names here; keep privileged credentials in Vercel, never in source control.
// ========================================
import { createHash, createHmac, randomUUID, timingSafeEqual } from "node:crypto";

export class AcademyHttpError extends Error {
  constructor(status, code, message) {
    super(message);
    this.name = "AcademyHttpError";
    this.status = status;
    this.code = code;
  }
}

export function jsonResponse(payload, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store, max-age=0",
      "X-Content-Type-Options": "nosniff",
      ...extraHeaders
    }
  });
}

export function errorResponse(error) {
  if (error instanceof AcademyHttpError) {
    return jsonResponse({ code: error.code, message: error.message }, error.status);
  }
  console.error("Unexpected Academy function error", error);
  return jsonResponse({ code: "ACADEMY_INTERNAL_ERROR", message: "The Academy service could not complete this request." }, 500);
}

export function requireMethod(request, allowedMethods) {
  if (!allowedMethods.includes(request.method)) {
    throw new AcademyHttpError(405, "METHOD_NOT_ALLOWED", "This request method is not supported.");
  }
}

export async function parseJsonBody(request, maxBytes = 32_000) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > maxBytes) throw new AcademyHttpError(413, "BODY_TOO_LARGE", "The request body is too large.");
  const raw = await request.text();
  if (!raw) return {};
  if (new TextEncoder().encode(raw).byteLength > maxBytes) {
    throw new AcademyHttpError(413, "BODY_TOO_LARGE", "The request body is too large.");
  }
  try {
    return JSON.parse(raw);
  } catch (error) {
    throw new AcademyHttpError(400, "INVALID_JSON", "The request body must be valid JSON.");
  }
}

function requiredEnvironment(name) {
  const value = process.env[name]?.trim();
  if (!value) throw new AcademyHttpError(503, "SERVICE_NOT_CONFIGURED", "The Academy service is not configured yet.");
  return value;
}

function getSupabaseRoot() {
  return requiredEnvironment("SUPABASE_URL").replace(/\/(?:rest\/v1)?\/?$/, "");
}

function getSupabasePublicKey() {
  return process.env.SUPABASE_PUBLISHABLE_KEY?.trim()
    || process.env.SUPABASE_ANON_KEY?.trim()
    || requiredEnvironment("SUPABASE_ANON_KEY");
}

function getSupabaseServiceKey() {
  return requiredEnvironment("SUPABASE_SERVICE_ROLE_KEY");
}

function bearerToken(request) {
  const authorization = request.headers.get("authorization") || "";
  const match = authorization.match(/^Bearer\s+(.+)$/i);
  return match?.[1]?.trim() || null;
}

// Validate the browser's Supabase JWT with the existing project's Auth endpoint.
// Guest-mode profiles have no bearer token and are deliberately rejected here.
export async function requireSupabaseUser(request) {
  const token = bearerToken(request);
  if (!token) throw new AcademyHttpError(401, "AUTH_REQUIRED", "Please log in with your email account to continue.");

  const response = await fetch(`${getSupabaseRoot()}/auth/v1/user`, {
    headers: {
      apikey: getSupabasePublicKey(),
      Authorization: `Bearer ${token}`,
      Accept: "application/json"
    }
  });
  if (!response.ok) throw new AcademyHttpError(401, "INVALID_SESSION", "Your session has expired. Please log in again.");
  const user = await response.json();
  if (!user?.id || !user?.email) throw new AcademyHttpError(401, "INVALID_SESSION", "A verified account session is required.");
  return user;
}

// Call Supabase REST with the service role from server code only.
// Endpoint handlers must still scope every query to the authenticated user before returning data.
export async function supabaseAdmin(path, { method = "GET", body, prefer, headers = {} } = {}) {
  const serviceKey = getSupabaseServiceKey();
  const response = await fetch(`${getSupabaseRoot()}/rest/v1/${path}`, {
    method,
    headers: {
      apikey: serviceKey,
      Authorization: `Bearer ${serviceKey}`,
      Accept: "application/json",
      ...(body === undefined ? {} : { "Content-Type": "application/json" }),
      ...(prefer ? { Prefer: prefer } : {}),
      ...headers
    },
    body: body === undefined ? undefined : JSON.stringify(body)
  });
  const raw = await response.text();
  const payload = raw ? (() => { try { return JSON.parse(raw); } catch (error) { return raw; } })() : null;
  if (!response.ok) {
    console.error("Supabase Academy request failed", { path: path.split("?")[0], status: response.status, payload });
    throw new AcademyHttpError(503, "DATABASE_ERROR", "The Academy database is temporarily unavailable.");
  }
  return payload;
}

export function cleanSlug(value) {
  const slug = String(value || "").trim();
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || slug.length > 80) {
    throw new AcademyHttpError(400, "INVALID_SLUG", "A valid course and lesson identifier is required.");
  }
  return slug;
}

export async function getPublishedCourse(courseSlug) {
  const slug = cleanSlug(courseSlug);
  const query = new URLSearchParams({
    select: "slug,title,audience,currency,price_minor,checkout_enabled,published",
    slug: `eq.${slug}`,
    published: "eq.true",
    limit: "1"
  });
  const rows = await supabaseAdmin(`academy_courses?${query}`);
  return rows?.[0] || null;
}

export async function listPublishedCourses() {
  const query = new URLSearchParams({
    select: "slug,title,audience,currency,price_minor,checkout_enabled",
    published: "eq.true",
    order: "sort_order.asc,slug.asc"
  });
  return (await supabaseAdmin(`academy_courses?${query}`)) || [];
}

function entitlementIsCurrent(entitlement) {
  return entitlement?.status === "active" && (!entitlement.expires_at || Date.parse(entitlement.expires_at) > Date.now());
}

export async function findEntitlement(userId, courseSlug) {
  const slug = cleanSlug(courseSlug);
  const query = new URLSearchParams({
    select: "course_slug,status,granted_at,expires_at,payment_order_id",
    user_id: `eq.${userId}`,
    course_slug: `eq.${slug}`,
    limit: "1"
  });
  const rows = await supabaseAdmin(`academy_entitlements?${query}`);
  const entitlement = rows?.[0] || null;
  return entitlementIsCurrent(entitlement) ? entitlement : null;
}

export async function requireEntitlement(userId, courseSlug) {
  const entitlement = await findEntitlement(userId, courseSlug);
  if (!entitlement) throw new AcademyHttpError(403, "ENTITLEMENT_REQUIRED", "A verified enrollment is required for this course.");
  return entitlement;
}

export function mapEntitlement(row) {
  return {
    courseSlug: row.course_slug,
    status: row.status,
    grantedAt: row.granted_at,
    expiresAt: row.expires_at || null
  };
}

export function mapOrder(row) {
  return {
    id: row.id,
    courseSlug: row.course_slug,
    amountMinor: row.amount_minor,
    currency: row.currency,
    status: row.status,
    orderId: row.provider_order_id,
    paymentId: row.provider_payment_id || null
  };
}

export async function findUserOrderByProviderId(userId, providerOrderId) {
  if (!/^order_[A-Za-z0-9]+$/.test(String(providerOrderId || ""))) {
    throw new AcademyHttpError(400, "INVALID_ORDER", "A valid payment order ID is required.");
  }
  const query = new URLSearchParams({
    select: "id,user_id,course_slug,amount_minor,currency,status,provider_order_id,provider_payment_id,idempotency_key",
    user_id: `eq.${userId}`,
    provider_order_id: `eq.${providerOrderId}`,
    limit: "1"
  });
  const rows = await supabaseAdmin(`academy_payment_orders?${query}`);
  return rows?.[0] || null;
}

export async function findOrderByProviderId(providerOrderId) {
  if (!/^order_[A-Za-z0-9]+$/.test(String(providerOrderId || ""))) return null;
  const query = new URLSearchParams({
    select: "id,user_id,course_slug,amount_minor,currency,status,provider_order_id,provider_payment_id,idempotency_key",
    provider_order_id: `eq.${providerOrderId}`,
    limit: "1"
  });
  const rows = await supabaseAdmin(`academy_payment_orders?${query}`);
  return rows?.[0] || null;
}

export async function findIdempotentOrder(userId, idempotencyKey) {
  const query = new URLSearchParams({
    select: "id,user_id,course_slug,amount_minor,currency,status,provider_order_id,provider_payment_id,idempotency_key",
    user_id: `eq.${userId}`,
    idempotency_key: `eq.${idempotencyKey}`,
    limit: "1"
  });
  const rows = await supabaseAdmin(`academy_payment_orders?${query}`);
  return rows?.[0] || null;
}

// Bound order creation per authenticated account to limit scripted provider-order abuse.
// Existing idempotency keys remain reusable, so this check runs only for genuinely new orders.
export async function enforceOrderRateLimit(userId) {
  const since = new Date(Date.now() - 10 * 60 * 1000).toISOString();
  const query = new URLSearchParams({
    select: "id",
    user_id: `eq.${userId}`,
    created_at: `gte.${since}`,
    limit: "5"
  });
  const rows = (await supabaseAdmin(`academy_payment_orders?${query}`)) || [];
  if (rows.length >= 5) throw new AcademyHttpError(429, "ORDER_RATE_LIMITED", "Too many checkout attempts. Please wait before trying again.");
}

export async function insertPaymentOrder({ userId, course, idempotencyKey }) {
  const rows = await supabaseAdmin("academy_payment_orders", {
    method: "POST",
    prefer: "return=representation",
    body: {
      id: randomUUID(),
      user_id: userId,
      course_slug: course.slug,
      amount_minor: course.price_minor,
      currency: course.currency,
      status: "creating",
      provider: "razorpay",
      idempotency_key: idempotencyKey
    }
  });
  return rows?.[0];
}

export async function updatePaymentOrder(orderId, changes) {
  const query = new URLSearchParams({ id: `eq.${orderId}` });
  const rows = await supabaseAdmin(`academy_payment_orders?${query}`, {
    method: "PATCH",
    prefer: "return=representation",
    body: changes
  });
  return rows?.[0] || null;
}

function getRazorpayCredentials() {
  return {
    keyId: requiredEnvironment("RAZORPAY_KEY_ID"),
    keySecret: requiredEnvironment("RAZORPAY_KEY_SECRET")
  };
}

export function razorpayIsConfigured() {
  return Boolean(process.env.RAZORPAY_KEY_ID?.trim() && process.env.RAZORPAY_KEY_SECRET?.trim());
}

export async function razorpayRequest(path, { method = "GET", body } = {}) {
  const { keyId, keySecret } = getRazorpayCredentials();
  const response = await fetch(`https://api.razorpay.com/v1/${path}`, {
    method,
    headers: {
      Authorization: `Basic ${Buffer.from(`${keyId}:${keySecret}`).toString("base64")}`,
      Accept: "application/json",
      ...(body === undefined ? {} : { "Content-Type": "application/json" })
    },
    body: body === undefined ? undefined : JSON.stringify(body)
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    console.error("Razorpay Academy request failed", { path, status: response.status, description: payload?.error?.description });
    throw new AcademyHttpError(502, "PAYMENT_PROVIDER_ERROR", "The payment provider could not complete this request.");
  }
  return payload;
}

export async function createRazorpayOrder(databaseOrder, course) {
  return razorpayRequest("orders", {
    method: "POST",
    body: {
      amount: course.price_minor,
      currency: course.currency,
      receipt: `academy_${databaseOrder.id.replace(/-/g, "").slice(0, 24)}`,
      notes: { course_slug: course.slug, academy_order_id: databaseOrder.id }
    }
  });
}

function safeSignatureMatch(expectedHex, receivedHex) {
  if (!/^[a-f0-9]{64}$/i.test(String(receivedHex || ""))) return false;
  const expected = Buffer.from(expectedHex, "hex");
  const received = Buffer.from(receivedHex, "hex");
  return expected.length === received.length && timingSafeEqual(expected, received);
}

export function verifyCheckoutSignature(orderId, paymentId, signature) {
  const secret = requiredEnvironment("RAZORPAY_KEY_SECRET");
  const expected = createHmac("sha256", secret).update(`${orderId}|${paymentId}`).digest("hex");
  return safeSignatureMatch(expected, signature);
}

export function verifyWebhookSignature(rawBody, signature) {
  const secret = requiredEnvironment("RAZORPAY_WEBHOOK_SECRET");
  const expected = createHmac("sha256", secret).update(rawBody).digest("hex");
  return safeSignatureMatch(expected, signature);
}

export function paymentMatchesOrder(payment, order) {
  return payment
    && payment.order_id === order.provider_order_id
    && Number(payment.amount) === Number(order.amount_minor)
    && String(payment.currency || "").toUpperCase() === String(order.currency || "").toUpperCase();
}

export async function fulfillCapturedPayment(order, paymentId, eventId = null) {
  const payload = await supabaseAdmin("rpc/academy_fulfill_payment", {
    method: "POST",
    body: {
      p_provider_order_id: order.provider_order_id,
      p_provider_payment_id: paymentId,
      p_event_id: eventId
    }
  });
  return payload?.[0] || payload || null;
}

export async function revokeRefundedPayment(paymentId, eventId = null) {
  const payload = await supabaseAdmin("rpc/academy_revoke_refunded_payment", {
    method: "POST",
    body: { p_provider_payment_id: paymentId, p_event_id: eventId }
  });
  return payload?.[0] || payload || null;
}

export async function recordWebhookEvent(eventId, eventType, payload) {
  const safeId = String(eventId || "").trim();
  if (!safeId || safeId.length > 200) throw new AcademyHttpError(400, "INVALID_EVENT_ID", "A valid webhook event ID is required.");
  const digest = createHash("sha256").update(payload).digest("hex");
  const rows = await supabaseAdmin("academy_webhook_events?on_conflict=event_id", {
    method: "POST",
    prefer: "resolution=ignore-duplicates,return=representation",
    body: { event_id: safeId, event_type: String(eventType || "unknown").slice(0, 120), payload_sha256: digest }
  });
  return Boolean(rows?.length);
}

// If this helper path is requested directly, reveal no server details.
export default function helperNotFound() {
  return jsonResponse({ code: "NOT_FOUND", message: "Not found." }, 404);
}
