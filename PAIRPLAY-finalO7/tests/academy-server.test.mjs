// ========================================
// ACADEMY SERVER SECURITY TESTS
// Run with `node --test tests/academy-server.test.mjs` before changing payment verification.
// These tests mock Supabase and Razorpay; they never contact live services or use real credentials.
// ========================================
import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import test from "node:test";

import verifyPayment from "../api/academy/verify-payment.mjs";

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
  process.env.SUPABASE_URL = "https://academy-test.supabase.co";
  process.env.SUPABASE_PUBLISHABLE_KEY = "publishable_test_key";
  process.env.SUPABASE_SERVICE_ROLE_KEY = "service_test_key";
  process.env.RAZORPAY_KEY_ID = "rzp_test_key";
  process.env.RAZORPAY_KEY_SECRET = "razorpay_test_secret";
}

function restoreTestEnvironment() {
  globalThis.fetch = originalFetch;
  for (const [name, value] of Object.entries(originalEnvironment)) {
    if (value === undefined) delete process.env[name];
    else process.env[name] = value;
  }
}

function paymentRequest(signature) {
  return new Request("https://flirtyflip.test/api/academy/verify-payment", {
    method: "POST",
    headers: { Authorization: "Bearer user_access_token", "Content-Type": "application/json" },
    body: JSON.stringify({
      razorpayOrderId: "order_test123",
      razorpayPaymentId: "pay_test123",
      razorpaySignature: signature
    })
  });
}

function orderRow() {
  return {
    id: "77bbc2b7-c57d-4c8d-8dcf-cf62da86e195",
    user_id: "1d4c54bb-4ea1-49fd-818c-f2d98566d971",
    course_slug: "confident-connection",
    amount_minor: 100,
    currency: "INR",
    status: "created",
    provider_order_id: "order_test123",
    provider_payment_id: null,
    idempotency_key: "test-idempotency-key"
  };
}

test("rejects a forged Checkout signature before contacting Razorpay", async (context) => {
  configureTestEnvironment();
  context.after(restoreTestEnvironment);
  const calls = [];
  globalThis.fetch = async (url) => {
    calls.push(String(url));
    if (String(url).endsWith("/auth/v1/user")) return json({ id: orderRow().user_id, email: "student@example.test" });
    if (String(url).includes("/rest/v1/academy_payment_orders?")) return json([orderRow()]);
    throw new Error(`Unexpected external call: ${url}`);
  };

  const response = await verifyPayment(paymentRequest("0".repeat(64)));
  const payload = await response.json();
  assert.equal(response.status, 400);
  assert.equal(payload.code, "INVALID_PAYMENT_SIGNATURE");
  assert.equal(calls.some((url) => url.includes("api.razorpay.com")), false);
});

test("grants entitlement only after a matching captured Razorpay payment", async (context) => {
  configureTestEnvironment();
  context.after(restoreTestEnvironment);
  let fulfillmentCalls = 0;
  globalThis.fetch = async (url) => {
    const target = String(url);
    if (target.endsWith("/auth/v1/user")) return json({ id: orderRow().user_id, email: "student@example.test" });
    if (target.includes("/rest/v1/academy_payment_orders?")) return json([orderRow()]);
    if (target.endsWith("/v1/payments/pay_test123")) {
      return json({ id: "pay_test123", order_id: "order_test123", amount: 100, currency: "INR", status: "captured" });
    }
    if (target.endsWith("/rest/v1/rpc/academy_fulfill_payment")) {
      fulfillmentCalls += 1;
      return json([{ course_slug: "confident-connection", entitlement_status: "active" }]);
    }
    throw new Error(`Unexpected external call: ${url}`);
  };

  const signature = createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update("order_test123|pay_test123")
    .digest("hex");
  const response = await verifyPayment(paymentRequest(signature));
  const payload = await response.json();
  assert.equal(response.status, 200);
  assert.equal(payload.entitlementActive, true);
  assert.equal(payload.paymentStatus, "captured");
  assert.equal(fulfillmentCalls, 1);
});
