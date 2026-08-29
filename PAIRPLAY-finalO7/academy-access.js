// ========================================
// FLIRTYFLIP ACADEMY ACCESS-STATE RESOLVER
// This pure resolver turns server entitlement/progress responses into one shared UX state.
// Edit CTA/status copy here; never infer paid access from browser storage or payment callbacks.
// ========================================
(function configureAcademyAccessState(global) {
  "use strict";

  const ENTITLED_STATES = new Set(["purchased", "in-progress", "completed"]);

  function formatPrice(course) {
    if (!Number.isInteger(course?.priceMinor) || course.priceMinor <= 0) return null;
    try {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: course.currency || "INR",
        maximumFractionDigits: 2
      }).format(course.priceMinor / 100);
    } catch (error) {
      return `${course.currency || "INR"} ${(course.priceMinor / 100).toFixed(2)}`;
    }
  }

  function getProgressSummary(course, progress) {
    const lessons = Array.isArray(course?.flatLessons) ? course.flatLessons : [];
    const completedSlugs = new Set(Array.isArray(progress?.completedLessonSlugs) ? progress.completedLessonSlugs : []);
    const completedCount = lessons.filter(({ id }) => completedSlugs.has(id)).length;
    const percent = lessons.length ? Math.min(100, Math.round((completedCount / lessons.length) * 100)) : 0;
    const nextLesson = lessons.find(({ id }) => !completedSlugs.has(id)) || lessons[0] || null;
    const activityDates = Array.isArray(progress?.lessons)
      ? progress.lessons.map(({ updatedAt, completedAt }) => Date.parse(updatedAt || completedAt || "")).filter(Number.isFinite)
      : [];
    return {
      completedCount,
      percent,
      nextLesson,
      lastActivity: activityDates.length ? new Date(Math.max(...activityDates)).toISOString() : null
    };
  }

  function learningRoute(course, summary) {
    const lesson = summary.nextLesson || course?.flatLessons?.[0];
    return lesson
      ? `/academy/learn/${encodeURIComponent(course.slug)}/${encodeURIComponent(lesson.id)}`
      : `/academy/course/${encodeURIComponent(course.slug)}`;
  }

  function resolveCourseAccess({ course, authReady, user, phase, record, processing = false, error = null }) {
    const price = formatPrice(course);
    const checkoutAvailable = Boolean(price && course?.checkoutEnabled);
    const base = {
      price,
      checkoutAvailable,
      completedCount: 0,
      percent: 0,
      nextLesson: null,
      lastActivity: null,
      route: `/academy/course/${encodeURIComponent(course?.slug || "")}`,
      canEnroll: false,
      isEntitled: false
    };

    if (processing) {
      return { ...base, kind: "processing", badge: "Locked", primaryLabel: "Verifying payment…", primaryAction: "none", statusTitle: "Verifying payment…", statusMessage: "Keep this page open while secure payment verification completes." };
    }
    if (error || phase === "error") {
      return { ...base, kind: "error", badge: "Access unavailable", primaryLabel: "Retry", primaryAction: "retry", statusTitle: "Unable to check access", statusMessage: "We couldn't confirm your course access. Retry before attempting enrollment." };
    }
    if (!authReady || (user && phase !== "ready")) {
      return { ...base, kind: "checking", badge: "Checking access", primaryLabel: "Checking access…", primaryAction: "none", statusTitle: "Checking access", statusMessage: "Confirming your account and learning access securely." };
    }
    if (!user) {
      return {
        ...base,
        kind: "guest",
        badge: "Locked",
        primaryLabel: checkoutAvailable ? `Enroll for ${price}` : "Enrollment opening soon",
        primaryAction: checkoutAvailable ? "login" : "none",
        statusTitle: "Course locked",
        statusMessage: checkoutAvailable ? "Log in or create an Academy account to unlock all chapters." : "Enrollment is not available for this learning path yet."
      };
    }
    if (record?.entitlement?.status !== "active") {
      return {
        ...base,
        kind: "locked",
        badge: "Locked",
        primaryLabel: checkoutAvailable ? `Enroll for ${price}` : "Enrollment opening soon",
        primaryAction: checkoutAvailable ? "enroll" : "none",
        canEnroll: checkoutAvailable,
        statusTitle: "Course locked",
        statusMessage: checkoutAvailable ? "Unlock all chapters with one payment." : "Enrollment is not available for this learning path yet."
      };
    }

    const summary = getProgressSummary(course, record.progress);
    const route = learningRoute(course, summary);
    const totalLessons = course.flatLessons?.length || 0;
    const kind = totalLessons > 0 && summary.completedCount >= totalLessons
      ? "completed"
      : summary.completedCount > 0 ? "in-progress" : "purchased";
    const labels = {
      purchased: ["Purchased", "Start Learning", "Course unlocked", "Available in My Learning."],
      "in-progress": ["In Progress", "Continue Learning", "Course in progress", `${summary.percent}% complete · Continue with ${summary.nextLesson?.title || "your next lesson"}.`],
      completed: ["Purchased", "Review Course", "Course completed", "100% complete · Revisit any lesson whenever you like."]
    };
    const [badge, primaryLabel, statusTitle, statusMessage] = labels[kind];
    return { ...base, ...summary, kind, badge, primaryLabel, primaryAction: "route", route, statusTitle, statusMessage, isEntitled: true };
  }

  global.AcademyAccessState = Object.freeze({
    ENTITLED_STATES,
    formatPrice,
    resolveCourseAccess
  });
})(typeof window === "undefined" ? globalThis : window);
