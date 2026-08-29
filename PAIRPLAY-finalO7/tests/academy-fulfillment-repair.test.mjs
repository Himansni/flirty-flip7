// ========================================
// ACADEMY FULFILLMENT REPAIR REGRESSION TESTS
// Guard the forward-only SQL repair and repeated captured-payment reconciliation behavior.
// These tests use synthetic identifiers and never contact Supabase or Razorpay.
// ========================================
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

import { GET as paymentStatus } from "../api/academy/payment-status.mjs";

const originalMigrationUrl = new URL("../supabase/migrations/20260827000000_flirtyflip_academy.sql", import.meta.url);
const repairMigrationUrl = new URL("../supabase/migrations/20260829093000_academy_fulfillment_constraint_repair.sql", import.meta.url);
const originalFetch = globalThis.fetch;
const originalEnvironment = {
  SUPABASE_URL: process.env.SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY: process.env.SUPABASE_PUBLISHABLE_KEY,
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID,
  RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET
};

function json(payload, status = 200) {
  return new Response(JSON.stringify(payload), { status, headers: { "Content-Type": "application/json" } });
}

function configureTestEnvironment() {
  process.env.SUPABASE_URL = "https://academy-repair-test.supabase.co";
  process.env.SUPABASE_PUBLISHABLE_KEY = "publishable_synthetic_test_key";
  process.env.SUPABASE_SERVICE_ROLE_KEY = "service_synthetic_test_key";
  process.env.RAZORPAY_KEY_ID = "rzp_test_synthetic";
  process.env.RAZORPAY_KEY_SECRET = "razorpay_synthetic_secret";
}

function restoreTestEnvironment() {
  globalThis.fetch = originalFetch;
  for (const [name, value] of Object.entries(originalEnvironment)) {
    if (value === undefined) delete process.env[name];
    else process.env[name] = value;
  }
}

test("the repair removes the confirmed ambiguous course_slug conflict target", async () => {
  const original = await readFile(originalMigrationUrl, "utf8");
  const repair = await readFile(repairMigrationUrl, "utf8");

  // PostgreSQL 42702 is reproduced when the TABLE output variable course_slug and the
  // unqualified ON CONFLICT course_slug identifier share the same PL/pgSQL scope.
  assert.match(original, /returns table \(course_slug text,[\s\S]*on conflict \(user_id, course_slug\) do update/i);
  assert.doesNotMatch(repair, /on conflict \(user_id, course_slug\)/i);
  assert.match(repair, /on conflict on constraint academy_entitlements_user_id_course_slug_key do update/i);
});

test("the repaired RPC preserves security, refund, payment, and idempotency guards", async () => {
  const repair = await readFile(repairMigrationUrl, "utf8");

  assert.match(repair, /security definer/i);
  assert.match(repair, /set search_path = public/i);
  assert.match(repair, /v_order\.status = 'refunded'/i);
  assert.match(repair, /v_order\.provider_payment_id <> p_provider_payment_id/i);
  assert.match(repair, /v_order\.status = 'captured' and v_order\.provider_payment_id = p_provider_payment_id/i);
  assert.match(repair, /revoke all on function public\.academy_fulfill_payment\(text, text, text\) from public, anon, authenticated/i);
  assert.match(repair, /grant execute on function public\.academy_fulfill_payment\(text, text, text\) to service_role/i);
});

test("repeated payment-status reconciliation performs one fulfillment and returns one entitlement", async (context) => {
  configureTestEnvironment();
  context.after(restoreTestEnvironment);

  const order = {
    id: "00000000-0000-4000-8000-000000000001",
    user_id: "00000000-0000-4000-8000-000000000002",
    course_slug: "confident-connection",
    amount_minor: 9900,
    currency: "INR",
    status: "created",
    provider_order_id: "order_synthetic",
    provider_payment_id: null,
    idempotency_key: "synthetic-idempotency-key"
  };
  let fulfillmentCalls = 0;
  let entitlementCount = 0;

  globalThis.fetch = async (url) => {
    const target = String(url);
    if (target.endsWith("/auth/v1/user")) return json({ id: order.user_id, email: "student@example.test" });
    if (target.includes("/rest/v1/academy_payment_orders?")) return json([order]);
    if (target.endsWith("/v1/orders/order_synthetic/payments")) {
      return json({ items: [{ id: "pay_synthetic", order_id: order.provider_order_id, amount: 9900, currency: "INR", status: "captured" }] });
    }
    if (target.endsWith("/rest/v1/rpc/academy_fulfill_payment")) {
      fulfillmentCalls += 1;
      order.status = "captured";
      order.provider_payment_id = "pay_synthetic";
      entitlementCount = 1;
      return json([{ course_slug: order.course_slug, entitlement_status: "active" }]);
    }
    if (target.includes("/rest/v1/academy_entitlements?")) {
      return json(entitlementCount ? [{ course_slug: order.course_slug, status: "active", granted_at: new Date().toISOString(), expires_at: null }] : []);
    }
    throw new Error(`Unexpected request: ${target}`);
  };

  const request = () => new Request("https://preview.test/api/academy/payment-status?orderId=order_synthetic", {
    headers: { Authorization: "Bearer synthetic_test_project_jwt" }
  });
  const first = await paymentStatus(request());
  const second = await paymentStatus(request());

  assert.equal(first.status, 200);
  assert.equal(second.status, 200);
  assert.equal((await first.json()).entitlementActive, true);
  assert.equal((await second.json()).entitlementActive, true);
  assert.equal(fulfillmentCalls, 1);
  assert.equal(entitlementCount, 1);
});
