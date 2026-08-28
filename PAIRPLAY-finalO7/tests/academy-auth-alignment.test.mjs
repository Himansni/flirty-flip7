// ========================================
// ACADEMY AUTHENTICATION ALIGNMENT TESTS
// Verify Preview exposes only public client config and Academy uses an isolated browser session.
// These tests use synthetic values and never contact Supabase, Vercel or Razorpay.
// ========================================
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

import clientConfig from "../api/academy/client-config.mjs";
import entitlements from "../api/academy/entitlements.mjs";

const TEST_REF = "hacnnarthuzyblahoyqu";
const originalEnvironment = {
  SUPABASE_URL: process.env.SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY: process.env.SUPABASE_PUBLISHABLE_KEY,
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  VERCEL_ENV: process.env.VERCEL_ENV
};

function restoreEnvironment() {
  for (const [name, value] of Object.entries(originalEnvironment)) {
    if (value === undefined) delete process.env[name];
    else process.env[name] = value;
  }
}

function configurePreview(url = `https://${TEST_REF}.supabase.co`, key = "sb_publishable_synthetic_test_key") {
  process.env.VERCEL_ENV = "preview";
  process.env.SUPABASE_URL = url;
  process.env.SUPABASE_PUBLISHABLE_KEY = key;
  process.env.SUPABASE_SERVICE_ROLE_KEY = "synthetic_service_role_value";
}

test("Preview client config returns only the public test project values", async (context) => {
  configurePreview();
  context.after(restoreEnvironment);
  const response = await clientConfig(new Request("https://preview.test/api/academy/client-config"));
  const payload = await response.json();

  assert.equal(response.status, 200);
  assert.deepEqual(Object.keys(payload).sort(), ["supabasePublishableKey", "supabaseUrl"]);
  assert.equal(payload.supabaseUrl, `https://${TEST_REF}.supabase.co`);
  assert.equal(payload.supabasePublishableKey, "sb_publishable_synthetic_test_key");
  assert.equal(JSON.stringify(payload).includes(process.env.SUPABASE_SERVICE_ROLE_KEY), false);
});

test("Preview client config fails closed for another project or a secret key", async (context) => {
  context.after(restoreEnvironment);

  configurePreview("https://another-project.supabase.co");
  let response = await clientConfig(new Request("https://preview.test/api/academy/client-config"));
  assert.equal(response.status, 503);

  configurePreview(`https://${TEST_REF}.supabase.co`, "sb_secret_synthetic_server_key");
  response = await clientConfig(new Request("https://preview.test/api/academy/client-config"));
  assert.equal(response.status, 503);
});

test("Academy API validates bearer sessions against its configured Supabase project", async (context) => {
  configurePreview();
  context.after(restoreEnvironment);
  const calls = [];
  const originalFetch = globalThis.fetch;
  context.after(() => { globalThis.fetch = originalFetch; });
  globalThis.fetch = async (url) => {
    calls.push(String(url));
    if (String(url) === `https://${TEST_REF}.supabase.co/auth/v1/user`) {
      return new Response(JSON.stringify({ id: "test-user-id", email: "student@example.test" }), { status: 200 });
    }
    if (String(url).startsWith(`https://${TEST_REF}.supabase.co/rest/v1/academy_entitlements?`)) {
      return new Response("[]", { status: 200 });
    }
    throw new Error(`Unexpected request: ${url}`);
  };

  const response = await entitlements(new Request("https://preview.test/api/academy/entitlements", {
    headers: { Authorization: "Bearer synthetic_test_project_jwt" }
  }));
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { entitlements: [] });
  assert.equal(calls.every((url) => url.startsWith(`https://${TEST_REF}.supabase.co/`)), true);
});

test("Academy browser client uses isolated storage and never reads the game auth client", async () => {
  const source = await readFile(new URL("../academy-payment.js", import.meta.url), "utf8");
  const calls = [];
  let clientOptions;
  const academyClient = {
    auth: {
      getSession: async () => ({ data: { session: { access_token: "synthetic-academy-jwt", user: { id: "academy-user", email: "student@example.test" } } }, error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe() {} } } }),
      signInWithPassword: async () => ({ data: {}, error: null }),
      signUp: async () => ({ data: {}, error: null }),
      resetPasswordForEmail: async () => ({ error: null })
    }
  };
  const sandbox = {
    AbortController,
    Headers,
    Response,
    URL,
    URLSearchParams,
    Uint8Array,
    clearTimeout,
    console,
    crypto: globalThis.crypto,
    document: {},
    fetch: async (url) => {
      calls.push(String(url));
      return new Response(JSON.stringify({
        supabaseUrl: `https://${TEST_REF}.supabase.co`,
        supabasePublishableKey: "sb_publishable_synthetic_test_key"
      }), { status: 200, headers: { "Content-Type": "application/json" } });
    },
    setTimeout,
    window: {
      crypto: globalThis.crypto,
      supabase: {
        createClient: (url, key, options) => {
          clientOptions = { url, key, options };
          return academyClient;
        }
      }
    }
  };

  vm.runInNewContext(source, sandbox, { filename: "academy-payment.js" });
  const token = await sandbox.window.AcademyPayments.getAccessToken();
  assert.equal(token, "synthetic-academy-jwt");
  assert.equal(calls[0], "/api/academy/client-config");
  assert.equal(clientOptions.url, `https://${TEST_REF}.supabase.co`);
  assert.equal(clientOptions.options.auth.storageKey, "flirtyflip-academy-auth-v1");
  assert.equal("getSupabaseClient" in sandbox, false);
});
