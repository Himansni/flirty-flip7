// ========================================
// ACADEMY ACCESS-STATE UX TESTS
// Verify every CTA is derived from server entitlement/progress inputs rather than browser flags.
// ========================================
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const source = await readFile(new URL("../academy-access.js", import.meta.url), "utf8");
const sandbox = { Intl, URL, encodeURIComponent };
sandbox.globalThis = sandbox;
vm.runInNewContext(source, sandbox, { filename: "academy-access.js" });
const { resolveCourseAccess } = sandbox.AcademyAccessState;

const lessons = [
  { id: "introduction", title: "Introduction" },
  { id: "practice", title: "Practice" }
];
const course = {
  slug: "confident-connection",
  currency: "INR",
  priceMinor: 9900,
  checkoutEnabled: true,
  flatLessons: lessons
};
const user = { id: "synthetic-user", email: "student@example.test" };
const entitlement = { courseSlug: course.slug, status: "active" };

test("checking access never flashes an enrollment action", () => {
  const state = resolveCourseAccess({ course, authReady: false, user: null, phase: "idle" });
  assert.equal(state.kind, "checking");
  assert.equal(state.primaryAction, "none");
  assert.equal(state.primaryLabel, "Checking access…");
});

test("guest and signed-in locked states use distinct secure actions", () => {
  const guest = resolveCourseAccess({ course, authReady: true, user: null, phase: "ready" });
  const locked = resolveCourseAccess({ course, authReady: true, user, phase: "ready", record: null });
  assert.equal(guest.kind, "guest");
  assert.equal(guest.primaryAction, "login");
  assert.equal(guest.primaryLabel, "Enroll for ₹99.00");
  assert.equal(locked.kind, "locked");
  assert.equal(locked.primaryAction, "enroll");
  assert.equal(locked.canEnroll, true);
});

test("purchased, in-progress, and completed states never route through checkout", () => {
  const purchased = resolveCourseAccess({ course, authReady: true, user, phase: "ready", record: { entitlement, progress: { completedLessonSlugs: [], lessons: [] } } });
  const inProgress = resolveCourseAccess({ course, authReady: true, user, phase: "ready", record: { entitlement, progress: { completedLessonSlugs: ["introduction"], lessons: [] } } });
  const completed = resolveCourseAccess({ course, authReady: true, user, phase: "ready", record: { entitlement, progress: { completedLessonSlugs: ["introduction", "practice"], lessons: [] } } });

  assert.deepEqual([purchased.kind, purchased.primaryLabel, purchased.primaryAction], ["purchased", "Start Learning", "route"]);
  assert.deepEqual([inProgress.kind, inProgress.primaryLabel, inProgress.percent, inProgress.primaryAction], ["in-progress", "Continue Learning", 50, "route"]);
  assert.deepEqual([completed.kind, completed.primaryLabel, completed.percent, completed.primaryAction], ["completed", "Review Course", 100, "route"]);
  assert.equal([purchased, inProgress, completed].some(({ canEnroll }) => canEnroll), false);
  assert.equal(inProgress.route, "/academy/learn/confident-connection/practice");
});

test("payment processing disables enrollment until verification completes", () => {
  const state = resolveCourseAccess({ course, authReady: true, user, phase: "ready", processing: true });
  assert.equal(state.kind, "processing");
  assert.equal(state.primaryLabel, "Verifying payment…");
  assert.equal(state.primaryAction, "none");
  assert.equal(state.canEnroll, false);
});

test("access errors fail closed and require an explicit retry", () => {
  const state = resolveCourseAccess({ course, authReady: true, user, phase: "error", error: new Error("synthetic") });
  assert.equal(state.kind, "error");
  assert.equal(state.primaryAction, "retry");
  assert.equal(state.canEnroll, false);
  assert.equal(state.statusTitle, "Unable to check access");
});

test("inactive entitlement records remain locked", () => {
  const state = resolveCourseAccess({
    course,
    authReady: true,
    user,
    phase: "ready",
    record: { entitlement: { ...entitlement, status: "refunded" }, progress: { completedLessonSlugs: lessons.map(({ id }) => id) } }
  });
  assert.equal(state.kind, "locked");
  assert.equal(state.isEntitled, false);
  assert.equal(state.primaryAction, "enroll");
});
