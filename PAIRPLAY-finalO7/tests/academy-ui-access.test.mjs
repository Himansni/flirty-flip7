// ========================================
// ACADEMY UI ACCESS-STATE INTEGRATION TESTS
// Render key Academy views with protected API mocks to prevent enrollment regressions.
// ========================================
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const [dataSource, accessSource, uiSource] = await Promise.all([
  readFile(new URL("../academy-data.js", import.meta.url), "utf8"),
  readFile(new URL("../academy-access.js", import.meta.url), "utf8"),
  readFile(new URL("../academy.js", import.meta.url), "utf8")
]);

function createAcademyHarness({ user, entitlements = [], progress = null }) {
  const target = { innerHTML: "" };
  const payments = {
    getCurrentUser: () => user,
    getAuthError: () => null,
    isAuthInitialized: () => true,
    initializeAuth: async () => user,
    getPublicCatalog: async () => ({
      courses: [{ slug: "confident-connection", currency: "INR", priceMinor: 9900, checkoutEnabled: true }]
    }),
    getEntitlements: async () => ({ entitlements }),
    getProgress: async () => ({ progress: progress || { completedLessonSlugs: [], lessons: [] } })
  };
  const document = {
    addEventListener() {},
    getElementById(id) { return id === "academy-content" ? target : null; },
    querySelector() { return null; },
    querySelectorAll() { return []; }
  };
  const sandbox = {
    Intl,
    URL,
    URLSearchParams,
    clearTimeout,
    console,
    document,
    encodeURIComponent,
    location: { pathname: "/academy" },
    navigateToRoute() {},
    queueMicrotask,
    requestAnimationFrame(callback) { callback(); },
    setTimeout,
    showAuthModal() {}
  };
  sandbox.window = sandbox;
  sandbox.AcademyPayments = payments;
  vm.runInNewContext(dataSource, sandbox, { filename: "academy-data.js" });
  vm.runInNewContext(accessSource, sandbox, { filename: "academy-access.js" });
  vm.runInNewContext(uiSource, sandbox, { filename: "academy.js" });
  return { sandbox, target };
}

async function settleAcademy(harness) {
  harness.sandbox.renderAcademyCatalog("for-him");
  await new Promise((resolve) => setTimeout(resolve, 0));
  await new Promise((resolve) => setTimeout(resolve, 0));
}

test("purchased course uses learning CTAs across catalog, detail, pricing, and dashboard", async () => {
  const entitlement = { courseSlug: "confident-connection", status: "active" };
  const harness = createAcademyHarness({
    user: { id: "test-user", email: "student@example.test" },
    entitlements: [entitlement],
    progress: { completedLessonSlugs: ["introduction"], lessons: [] }
  });
  await settleAcademy(harness);

  harness.sandbox.renderAcademyCatalog("for-him");
  assert.match(harness.target.innerHTML, /Continue Learning/);
  assert.doesNotMatch(harness.target.innerHTML, /Enroll for/);

  harness.sandbox.renderAcademyCourseDetail("confident-connection");
  assert.match(harness.target.innerHTML, /Course in progress/);
  assert.match(harness.target.innerHTML, /academy\/learn\/confident-connection\/presence-confidence/);
  assert.doesNotMatch(harness.target.innerHTML, /data-academy-action="enroll"/);

  harness.sandbox.renderAcademyPricing("confident-connection");
  assert.match(harness.target.innerHTML, /ALREADY PURCHASED/);
  assert.doesNotMatch(harness.target.innerHTML, /One-time course access/);

  harness.sandbox.renderAcademyDashboard();
  assert.match(harness.target.innerHTML, /1<\/strong> of 8 lessons completed/);
  assert.match(harness.target.innerHTML, /Next: Presence and confidence/);
});

test("signed-in account without entitlement remains locked and can enroll", async () => {
  const harness = createAcademyHarness({ user: { id: "test-user", email: "student@example.test" } });
  await settleAcademy(harness);
  harness.sandbox.renderAcademyCourseDetail("confident-connection");
  assert.match(harness.target.innerHTML, /Enroll for ₹99\.00/);
  assert.match(harness.target.innerHTML, /Course locked/);
  assert.match(harness.target.innerHTML, /data-academy-action="enroll"/);
});

test("guest enrollment requires login and never starts checkout directly", async () => {
  const harness = createAcademyHarness({ user: null });
  await settleAcademy(harness);
  harness.sandbox.renderAcademyCourseDetail("confident-connection");
  assert.match(harness.target.innerHTML, /Enroll for ₹99\.00/);
  assert.match(harness.target.innerHTML, /data-academy-action="login"/);
  assert.doesNotMatch(harness.target.innerHTML, /data-academy-action="enroll"/);
});

test("catalog renders three accessible CSS cover variants without image assets or initials", async () => {
  const harness = createAcademyHarness({ user: null });
  await settleAcademy(harness);
  harness.sandbox.renderAcademyCatalog("for-him");
  assert.match(harness.target.innerHTML, /academy-cover-art--connection/);
  assert.match(harness.target.innerHTML, /academy-cover-art--communication/);
  assert.match(harness.target.innerHTML, /academy-cover-art--romance/);
  assert.match(harness.target.innerHTML, /aria-label="Abstract champagne, terracotta and charcoal artwork with two connected figures"/);
  assert.doesNotMatch(harness.target.innerHTML, /<img\b|>CC<|>BC<|>AR</);
});
