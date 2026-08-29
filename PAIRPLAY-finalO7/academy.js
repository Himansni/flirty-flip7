// ========================================
// FLIRTYFLIP ACADEMY UI AND ACCESS CONTROLLER
// Renders the Academy sub-brand while all paid access remains server-authoritative.
// Edit public content/artwork in academy-data.js and shared access copy in academy-access.js.
// ========================================
(function configureAcademyExperience(global) {
  "use strict";

  const config = global.FLIRTYFLIP_ACADEMY;
  const payments = global.AcademyPayments;
  const accessResolver = global.AcademyAccessState;
  const coverVariants = Object.freeze({
    "confident-connection": {
      variant: "connection",
      label: "Abstract champagne, terracotta and charcoal artwork with two connected figures"
    },
    "better-communication": {
      variant: "communication",
      label: "Abstract ivory, red and coral artwork with overlapping dialogue waves"
    },
    "art-of-romance": {
      variant: "romance",
      label: "Abstract cream, burgundy and gold artwork with elegant heart-like orbits"
    }
  });
  const serverPricing = new Map();
  const accessRecords = new Map();
  const processingCourses = new Set();
  const checkoutFeedback = new Map();
  let pricingPhase = "idle";
  let pricingPromise = null;
  let accessPhase = "idle";
  let accessPromise = null;
  let accessError = null;
  let accessUserId = null;
  let pendingAuthCourse = null;
  let rerenderQueued = false;

  if (!config || !accessResolver) {
    console.warn("FlirtyFlip Academy configuration is unavailable.");
    return;
  }

  function academyEscape(value) {
    return String(value ?? "").replace(/[&<>"']/g, (character) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
    })[character]);
  }

  function getAcademyTarget() { return document.getElementById("academy-content"); }
  function getAcademyCourses() { return Object.values(config.courses).filter((course) => course && course.slug); }
  function getAcademyCourse(slug) { return config.courses[String(slug || "")] || null; }

  function getFlatAcademyLessons(course) {
    if (!course?.modules) return [];
    return course.modules.flatMap((module, moduleIndex) => module.lessons.map((lesson, lessonIndex) => ({
      ...lesson, moduleId: module.id, moduleTitle: module.title, moduleIndex, lessonIndex
    })));
  }

  function getEffectiveCourse(slug) {
    const local = getAcademyCourse(slug);
    if (!local) return null;
    const remote = serverPricing.get(slug);
    const course = remote ? { ...local, ...remote } : { ...local };
    course.flatLessons = getFlatAcademyLessons(course);
    return course;
  }

  function getAudienceLabel(audienceId) {
    return config.audiences.find(({ id }) => id === audienceId)?.label || "Academy";
  }

  function hasRealAcademyAccount() {
    const user = payments?.getCurrentUser?.();
    return Boolean(user?.id && user?.email);
  }

  function academyAuthReady() { return Boolean(payments?.isAuthInitialized?.()); }

  function getCourseAccess(course) {
    return accessResolver.resolveCourseAccess({
      course,
      authReady: academyAuthReady(),
      user: payments?.getCurrentUser?.() || null,
      phase: accessPhase,
      record: accessRecords.get(course.slug) || null,
      processing: processingCourses.has(course.slug),
      error: payments?.getAuthError?.() || accessError
    });
  }

  function renderRouteAgain() {
    if (rerenderQueued || !location.pathname.startsWith("/academy")) return;
    rerenderQueued = true;
    queueMicrotask(() => {
      rerenderQueued = false;
      if (typeof renderCurrentRoute === "function") renderCurrentRoute("replace");
    });
  }

  // Public pricing decorates CTAs, but create-order still re-reads price from Supabase.
  async function hydrateAcademyCatalog() {
    if (pricingPhase === "ready" || pricingPromise || !payments?.getPublicCatalog) return pricingPromise;
    pricingPhase = "checking";
    pricingPromise = payments.getPublicCatalog().then((response) => {
      (response.courses || []).forEach((course) => {
        if (!getAcademyCourse(course.slug)) return;
        serverPricing.set(course.slug, {
          priceMinor: Number.isInteger(course.priceMinor) ? course.priceMinor : null,
          currency: course.currency || "INR",
          checkoutEnabled: Boolean(course.checkoutEnabled)
        });
      });
      pricingPhase = "ready";
    }).catch(() => { pricingPhase = "error"; }).finally(() => {
      pricingPromise = null;
      renderRouteAgain();
    });
    return pricingPromise;
  }

  // Fetch entitlements once per authenticated account, then progress only for owned courses.
  // No local flag, URL, or payment callback can populate accessRecords.
  async function refreshAcademyAccess(force = false) {
    if (!academyAuthReady()) return null;
    const user = payments?.getCurrentUser?.() || null;
    if (!user) {
      accessUserId = null;
      accessRecords.clear();
      accessError = null;
      accessPhase = "ready";
      return null;
    }
    if (!force && accessPhase === "ready" && accessUserId === user.id) return accessRecords;
    if (accessPromise) return accessPromise;

    accessUserId = user.id;
    accessPhase = "checking";
    accessError = null;
    accessPromise = (async () => {
      const response = await payments.getEntitlements();
      const active = (response.entitlements || []).filter(({ status }) => status === "active");
      const nextRecords = new Map();
      await Promise.all(active.map(async (entitlement) => {
        let progress = null;
        try { progress = (await payments.getProgress(entitlement.courseSlug))?.progress || null; } catch (error) { progress = null; }
        nextRecords.set(entitlement.courseSlug, { entitlement, progress });
      }));
      if (payments?.getCurrentUser?.()?.id !== user.id) return;
      accessRecords.clear();
      nextRecords.forEach((record, slug) => accessRecords.set(slug, record));
      accessPhase = "ready";
    })().catch((error) => {
      accessError = error;
      accessPhase = "error";
    }).finally(() => {
      accessPromise = null;
      renderRouteAgain();
    });
    return accessPromise;
  }

  function ensureAcademyHydration() {
    if (pricingPhase === "idle") hydrateAcademyCatalog();
    if (academyAuthReady() && accessPhase === "idle") refreshAcademyAccess();
  }

  function renderAcademyBackLink(path, label = "Back") {
    return `<a class="academy-back" href="${academyEscape(path)}" data-academy-route="${academyEscape(path)}"><span aria-hidden="true">←</span> ${academyEscape(label)}</a>`;
  }

  // The website header remains the dark shell; this compact rail identifies the Academy division.
  function renderAcademyMasthead({ backPath = "/", backLabel = "FlirtyFlip", compact = false } = {}) {
    return `
      <div class="academy-masthead ${compact ? "academy-masthead--compact" : ""}">
        <div>${renderAcademyBackLink(backPath, backLabel)}</div>
        <a class="academy-wordmark" href="/academy" data-academy-route="/academy" aria-label="FlirtyFlip Academy home">
          <span class="academy-wordmark__seal" aria-hidden="true">F</span>
          <span><strong>FlirtyFlip Academy</strong><small>Premium learning · Adults 18+</small></span>
        </a>
        <a class="academy-account-link" href="/academy/dashboard" data-academy-route="/academy/dashboard">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Zm0 15A2.5 2.5 0 0 1 6.5 18H20M8 7h8M8 11h6"/></svg>
          My Learning
        </a>
      </div>`;
  }

  function renderCourseArtwork(course) {
    const cover = coverVariants[course.slug] || coverVariants["confident-connection"];
    return `<div class="academy-artwork academy-cover-art academy-cover-art--${academyEscape(cover.variant)}" role="img" aria-label="${academyEscape(cover.label)}"><span class="academy-cover-art__shape academy-cover-art__shape--one" aria-hidden="true"></span><span class="academy-cover-art__shape academy-cover-art__shape--two" aria-hidden="true"></span><span class="academy-cover-art__shape academy-cover-art__shape--accent" aria-hidden="true"></span></div>`;
  }

  function renderAcademyTrustStrip() {
    return `<aside class="academy-trust-strip" aria-label="Academy principles"><div><span aria-hidden="true">18+</span><strong>Adults only</strong><small>Educational content for adults</small></div><div><span aria-hidden="true">♡</span><strong>Consent first</strong><small>Comfort and boundaries matter</small></div><div><span aria-hidden="true">⌁</span><strong>Private access</strong><small>Paid lessons require verification</small></div></aside>`;
  }

  // Access presentation primitives are shared by catalog, detail, pricing and dashboard views.
  // Change their labels in academy-access.js so every route stays consistent.
  function renderAccessBadge(access) {
    const gold = access.isEntitled ? " academy-access-badge--gold" : "";
    const icon = access.isEntitled ? '<span aria-hidden="true">✓</span>' : "";
    return `<span class="academy-access-badge academy-access-badge--${academyEscape(access.kind)}${gold}">${icon}${academyEscape(access.badge)}</span>`;
  }

  function renderAccessPanel(access) {
    if (access.kind === "checking") return `<div class="academy-access-skeleton" role="status" aria-live="polite"><span></span><div><i></i><i></i></div><em class="sr-only">Checking course access</em></div>`;
    const gold = access.isEntitled ? " academy-access-panel--unlocked" : "";
    const icon = access.isEntitled ? "✓" : access.kind === "error" ? "!" : "⌁";
    return `<div class="academy-access-panel academy-access-panel--${academyEscape(access.kind)}${gold}" role="status" aria-live="polite"><span aria-hidden="true">${icon}</span><div><strong>${academyEscape(access.statusTitle)}</strong><p>${academyEscape(access.statusMessage)}</p></div></div>`;
  }

  function renderPrimaryAction(course, access, { full = false } = {}) {
    const classes = `academy-primary-button${full ? " academy-primary-button--full" : ""}`;
    if (access.primaryAction === "route") return `<a class="${classes}" href="${academyEscape(access.route)}" data-academy-route="${academyEscape(access.route)}">${academyEscape(access.primaryLabel)} <span aria-hidden="true">→</span></a>`;
    if (["login", "enroll", "retry"].includes(access.primaryAction)) return `<button class="${classes}" type="button" data-academy-action="${access.primaryAction === "retry" ? "retry-access" : access.primaryAction}" data-course="${academyEscape(course.slug)}">${academyEscape(access.primaryLabel)} <span aria-hidden="true">→</span></button>`;
    return `<button class="${classes}" type="button" disabled aria-disabled="true">${academyEscape(access.primaryLabel)}</button>`;
  }

  function renderCourseActions(course, access) {
    return `<div class="academy-course-actions">${renderPrimaryAction(course, access)}${["guest", "locked"].includes(access.kind) ? '<a class="academy-secondary-button" href="#academy-curriculum">Preview Curriculum</a>' : '<a class="academy-secondary-button" href="/academy/dashboard" data-academy-route="/academy/dashboard">My Learning</a>'}</div><div id="academy-checkout-status">${renderCourseStatus(course, access)}</div>`;
  }

  function renderCourseStatus(course, access) {
    if (access.isEntitled) return renderAccessPanel(access);
    const feedback = checkoutFeedback.get(course.slug);
    return feedback ? renderCheckoutStatus(feedback.state, feedback.detail) : renderAccessPanel(access);
  }

  function renderAcademyCourseCard(course) {
    const access = getCourseAccess(course);
    const courseRoute = `/academy/course/${encodeURIComponent(course.slug)}`;
    const actionRoute = access.isEntitled ? access.route : courseRoute;
    const actionLabel = access.isEntitled ? access.primaryLabel : "Explore Course";
    return `
      <article class="academy-course-card academy-course-card--${academyEscape(access.kind)}">
        <a class="academy-course-card__visual" href="${actionRoute}" data-academy-route="${actionRoute}" aria-label="${academyEscape(actionLabel)}: ${academyEscape(course.title)}">${renderCourseArtwork(course)}<span class="academy-course-card__category">${academyEscape(course.badge)}</span>${renderAccessBadge(access)}</a>
        <div class="academy-course-card__body"><div class="academy-course-card__meta"><span>${academyEscape(getAudienceLabel(course.audience))}</span><span>${academyEscape(course.duration)}</span></div><h2>${academyEscape(course.title)}</h2><p>${academyEscape(course.description)}</p>${access.isEntitled ? `<div class="academy-card-progress"><span><i style="width:${access.percent}%"></i></span><small>${access.percent}% complete</small></div>` : ""}<div class="academy-course-card__facts"><span>${course.lessonCount} chapters</span><span>${course.chapterOneFree ? "Preview available" : "Premium curriculum"}</span></div></div>
        <a class="academy-course-card__link" href="${actionRoute}" data-academy-route="${actionRoute}">${academyEscape(actionLabel)} <span aria-hidden="true">→</span></a>
      </article>`;
  }

  // Academy catalog: audience tabs, server-derived course states and the shared trust footer.
  // Edit public merchandising fields in academy-data.js rather than adding route-specific copies here.
  function renderAcademyCatalog(audienceId = "for-him") {
    const target = getAcademyTarget();
    if (!target) return;
    const selectedAudience = config.audiences.some(({ id }) => id === audienceId) ? audienceId : config.audiences[0].id;
    const courses = getAcademyCourses().filter((course) => course.audience === selectedAudience).map(({ slug }) => getEffectiveCourse(slug));
    target.innerHTML = `
      ${renderAcademyMasthead()}
      <header class="academy-catalog-hero"><div class="academy-eyebrow">FLIRTYFLIP'S PREMIUM LEARNING DIVISION</div><h1 tabindex="-1">Learn with more <em>confidence and care.</em></h1><p>Warm, private learning paths for clearer communication, deeper attention and respectful connection—built with consent at the centre.</p></header>
      <div class="academy-tabs" role="tablist" aria-label="Choose an Academy audience">${config.audiences.map((audience) => `<button id="academy-tab-${audience.id}" class="academy-tab" type="button" role="tab" aria-selected="${audience.id === selectedAudience}" tabindex="${audience.id === selectedAudience ? "0" : "-1"}" data-academy-action="audience" data-audience="${audience.id}">${academyEscape(audience.label)}</button>`).join("")}</div>
      <section class="academy-catalog-section" role="tabpanel" aria-labelledby="academy-tab-${selectedAudience}"><div class="academy-section-heading"><div><div class="academy-eyebrow">CURATED PATHS</div><h2>${academyEscape(getAudienceLabel(selectedAudience))}</h2></div><p>${courses.length ? `${courses.length} learning ${courses.length === 1 ? "path" : "paths"}` : "More learning paths will appear when real course content is ready."}</p></div>${courses.length ? `<div class="academy-course-grid">${courses.map(renderAcademyCourseCard).join("")}</div>` : `<div class="academy-empty-state"><span aria-hidden="true">◇</span><h2>No learning paths yet.</h2><p>Nothing has been invented for this category.</p></div>`}</section>
      ${renderAcademyTrustStrip()}
      <footer class="academy-legal-footer"><p>Learning is personal. Consent, communication, comfort and boundaries remain essential.</p><nav aria-label="Academy policies"><a href="${config.legalLinks.privacy}" data-academy-route="${config.legalLinks.privacy}">Privacy</a><a href="${config.legalLinks.terms}" data-academy-route="${config.legalLinks.terms}">Terms</a><a href="${config.legalLinks.refund}" data-academy-route="${config.legalLinks.refund}">Refund policy</a><a href="${config.legalLinks.contact}" data-academy-route="${config.legalLinks.contact}">Support</a></nav></footer>`;
    ensureAcademyHydration();
  }

  // Public curriculum preview exposes titles/descriptions only; paid lesson bodies stay behind the API.
  function renderAcademyModulePreview(course, access = null) {
    let lessonNumber = 0;
    const completed = new Set(accessRecords.get(course.slug)?.progress?.completedLessonSlugs || []);
    return course.modules.map((module, moduleIndex) => `<section class="academy-module"><button class="academy-module__toggle" type="button" data-academy-action="toggle-module" aria-expanded="${moduleIndex === 0}" aria-controls="academy-module-${academyEscape(module.id)}"><span><small>${String(moduleIndex + 1).padStart(2, "0")}</small><strong>${academyEscape(module.title)}</strong></span><span>${module.lessons.length} ${module.lessons.length === 1 ? "lesson" : "lessons"}<b aria-hidden="true">+</b></span></button><div class="academy-module__panel" id="academy-module-${academyEscape(module.id)}" ${moduleIndex === 0 ? "" : "hidden"}>${module.lessons.map((lesson) => {
      lessonNumber += 1;
      const done = completed.has(lesson.id);
      const state = access?.isEntitled ? (done ? "✓ Completed" : "Available") : course.chapterOneFree && lessonNumber === 1 ? "Preview" : '<span aria-hidden="true">⌁</span> Locked';
      return `<article class="academy-lesson-preview"><span class="academy-lesson-preview__index">${String(lessonNumber).padStart(2, "0")}</span><div><h3>${academyEscape(lesson.title)}</h3><p>${academyEscape(lesson.preview)}</p></div><span class="academy-lesson-preview__state ${done ? "is-complete" : ""}">${state}</span></article>`;
    }).join("")}</div></section>`).join("");
  }

  // Course detail combines public metadata with the centralized access CTA and progress status.
  function renderAcademyCourseDetail(slug) {
    const target = getAcademyTarget();
    const course = getEffectiveCourse(slug);
    if (!target || !course) return;
    const access = getCourseAccess(course);
    const previewLessons = course.flatLessons.slice(0, 3);
    target.innerHTML = `
      ${renderAcademyMasthead({ backPath: `/academy?audience=${encodeURIComponent(course.audience)}`, backLabel: "Back to Academy" })}
      <article class="academy-course-detail"><header class="academy-course-hero"><div class="academy-course-hero__visual">${renderCourseArtwork(course)}${renderAccessBadge(access)}</div><div class="academy-course-hero__copy"><div class="academy-eyebrow">${academyEscape(course.badge)} · ${academyEscape(getAudienceLabel(course.audience))} · 18+</div><h1 tabindex="-1">${academyEscape(course.title)}</h1><p class="academy-course-hero__subtitle">${academyEscape(course.subtitle)}</p><p>${academyEscape(course.description)}</p><div class="academy-course-hero__facts"><span>${course.lessonCount} chapters</span><span>${academyEscape(course.duration)}</span><span>Self-paced</span></div>${renderCourseActions(course, access)}<small class="academy-course-hero__notice">Adult educational content. Every real-world activity requires mutual consent and respect for personal boundaries.</small></div></header>
      <section class="academy-curriculum-peek" aria-label="Curriculum preview"><div><span>Inside the course</span><strong>${course.lessonCount} focused chapters</strong></div>${previewLessons.map((lesson, index) => `<p><span>${String(index + 1).padStart(2, "0")}</span>${academyEscape(lesson.title)}</p>`).join("")}</section>
      <section class="academy-overview-grid"><div><div class="academy-eyebrow">COURSE OVERVIEW</div><h2>Learn with attention, not pressure.</h2></div><p>${academyEscape(course.description)} This material is educational and does not replace medical, therapeutic or professional advice.</p></section>
      <section class="academy-outcomes"><div class="academy-section-heading"><div><div class="academy-eyebrow">WHAT YOU'LL LEARN</div><h2>Practical ideas for respectful connection.</h2></div></div><div class="academy-outcomes__grid">${course.outcomes.map((outcome, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><p>${academyEscape(outcome)}</p></article>`).join("")}</div></section>
      <section class="academy-curriculum" id="academy-curriculum"><div class="academy-section-heading"><div><div class="academy-eyebrow">CURRICULUM</div><h2>Inside the course.</h2></div><p>Lesson bodies remain private until server-verified enrollment.</p></div><div class="academy-module-list">${renderAcademyModulePreview(course, access)}</div></section>
      <section class="academy-benefits"><div><div class="academy-eyebrow">COURSE FEATURES</div><h2>A quiet, self-paced learning space.</h2></div><ul>${course.benefits.map((benefit) => `<li><span aria-hidden="true">◇</span>${academyEscape(benefit)}</li>`).join("")}</ul></section>
      <section class="academy-pricing-preview"><div><div class="academy-eyebrow">${access.isEntitled ? "YOUR ACCESS" : "ENROLLMENT"}</div><h2>${academyEscape(access.statusTitle)}</h2><p>${academyEscape(access.statusMessage)}</p></div>${renderPrimaryAction(course, access)}</section>
      <section class="academy-faq"><div class="academy-section-heading"><div><div class="academy-eyebrow">FAQ</div><h2>Before you begin.</h2></div></div><div class="academy-faq__list">${course.faq.map(({ question, answer }) => `<details><summary>${academyEscape(question)}</summary><p>${academyEscape(answer)}</p></details>`).join("")}</div></section>${renderRelatedCourses(course)}${renderAcademyTrustStrip()}</article>`;
    ensureAcademyHydration();
  }

  function renderRelatedCourses(course) {
    const related = (course.related || []).map(getEffectiveCourse).filter(Boolean);
    if (!related.length) return "";
    return `<section class="academy-related"><div class="academy-section-heading"><div><div class="academy-eyebrow">KEEP EXPLORING</div><h2>Related learning paths.</h2></div></div><div class="academy-related__grid">${related.map((item) => { const route = `/academy/course/${encodeURIComponent(item.slug)}`; return `<a href="${route}" data-academy-route="${route}"><span>${academyEscape(item.badge)}</span><h3>${academyEscape(item.title)}</h3><p>${academyEscape(item.subtitle)}</p><b aria-hidden="true">→</b></a>`; }).join("")}</div></section>`;
  }

  function renderCheckoutStatus(state, detail = "") {
    const states = {
      "login-required": ["Login required", "Log in or create an Academy account before enrolling."],
      ready: ["Secure enrollment", "Secure checkout through Razorpay."],
      "creating-order": ["Preparing secure checkout", "Please wait while your enrollment is prepared."],
      "checkout-open": ["Razorpay Checkout open", "Complete or close the secure checkout window to continue."],
      processing: ["Verifying payment…", "Access activates after verified payment."],
      "verification-pending": ["Verification pending", "Your payment is awaiting final confirmation. Do not pay again."],
      unlocked: ["Course unlocked", "Verified access is active in My Learning."],
      failed: ["Payment failed", "No access was granted. You can safely retry when ready."],
      cancelled: ["Payment cancelled", "No access was granted."],
      pending: ["Payment pending", "Waiting for the final payment status."],
      "network-error": ["Network interruption", "Retry verification before attempting another payment."],
      duplicate: ["Already purchased", "This course is available in My Learning."],
      "verification-failed": ["Unable to verify", "Access was not granted. Retry verification or contact support."],
      unavailable: ["Enrollment opening soon", "Checkout is not available for this learning path yet."]
    };
    const [title, message] = states[state] || states.unavailable;
    return `<div class="academy-payment-state academy-payment-state--${academyEscape(state)}" role="status" aria-live="polite"><span aria-hidden="true">${state === "unlocked" ? "✓" : "◇"}</span><div><strong>${academyEscape(title)}</strong><p>${academyEscape(detail || message)}</p></div></div>`;
  }

  // Enrollment view removes payment UI for entitled accounts and never derives access from the URL.
  function renderAcademyPricing(slug) {
    const target = getAcademyTarget();
    const course = getEffectiveCourse(slug);
    if (!target || !course) return;
    const access = getCourseAccess(course);
    const isLearningState = access.isEntitled;
    target.innerHTML = `${renderAcademyMasthead({ backPath: `/academy/course/${encodeURIComponent(course.slug)}`, backLabel: "Back to course" })}<div class="academy-pricing-page"><section class="academy-pricing-card ${isLearningState ? "academy-pricing-card--unlocked" : ""}"><div class="academy-pricing-card__course">${renderCourseArtwork(course)}${renderAccessBadge(access)}</div><div class="academy-pricing-card__copy"><div class="academy-eyebrow">${isLearningState ? "ALREADY PURCHASED" : "SECURE ENROLLMENT"}</div><h1 tabindex="-1">${academyEscape(course.title)}</h1><p>${academyEscape(course.subtitle)}</p>${isLearningState ? `<div class="academy-unlocked-heading"><span aria-hidden="true">✓</span><div><strong>Your course is unlocked</strong><small>${access.percent}% complete</small></div></div>` : `<div class="academy-price">${access.price ? academyEscape(access.price) : "Price not configured"}<small>${access.price ? "One-time course access" : "Enrollment remains disabled"}</small></div>`}<ul><li>${course.lessonCount} course chapters</li><li>Self-paced lesson dashboard</li><li>Progress saved to your account</li></ul><div id="academy-checkout-status">${renderCourseStatus(course, access)}</div>${renderPrimaryAction(course, access, { full: true })}<p class="academy-checkout-footnote">Secure checkout through Razorpay. Access activates after verified payment. FlirtyFlip does not store card details.</p></div></section><aside class="academy-pricing-trust"><h2>Secure and straightforward</h2><ol><li><span>01</span>Log in to your private Academy account.</li><li><span>02</span>Complete secure checkout through Razorpay.</li><li><span>03</span>Access activates after verified payment.</li><li><span>04</span>Your learning path appears in My Learning.</li></ol><nav aria-label="Enrollment policies"><a href="${config.legalLinks.privacy}" data-academy-route="${config.legalLinks.privacy}">Privacy</a><a href="${config.legalLinks.terms}" data-academy-route="${config.legalLinks.terms}">Terms</a><a href="${config.legalLinks.refund}" data-academy-route="${config.legalLinks.refund}">Refund policy</a></nav></aside></div>`;
    ensureAcademyHydration();
  }

  function renderAcademyLoginRequired(courseSlug = null) {
    const error = payments?.getAuthError?.();
    if (error) return `<div class="academy-error-state"><span aria-hidden="true">!</span><h2>Academy login could not load.</h2><p>${academyEscape(error.message)}</p><button class="academy-primary-button" type="button" data-academy-action="retry-access">Try again</button></div>`;
    return `<div class="academy-access-state"><span aria-hidden="true">⌁</span><div><div class="academy-eyebrow">ACCOUNT REQUIRED</div><h2>Log in to continue learning.</h2><p>Paid courses are tied to your private Academy account.</p><button class="academy-primary-button" type="button" data-academy-action="login" ${courseSlug ? `data-course="${academyEscape(courseSlug)}"` : ""}>Log in or sign up <span aria-hidden="true">→</span></button></div></div>`;
  }

  function formatLastActivity(value) {
    if (!value) return "";
    try { return new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric" }).format(new Date(value)); } catch (error) { return ""; }
  }

  function renderDashboardCard(course, access) {
    const lastActivity = formatLastActivity(access.lastActivity);
    return `<article class="academy-dashboard-card"><div class="academy-dashboard-card__visual">${renderCourseArtwork(course)}${renderAccessBadge(access)}</div><div class="academy-dashboard-card__copy"><span>${academyEscape(course.badge)}</span><h2>${academyEscape(course.title)}</h2><p><strong>${access.completedCount}</strong> of ${course.flatLessons.length} lessons completed</p><div class="academy-progress" role="progressbar" aria-label="${academyEscape(course.title)} progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${access.percent}"><span style="width:${access.percent}%"></span></div><div class="academy-progress__label"><span>${access.nextLesson ? `Next: ${academyEscape(access.nextLesson.title)}` : "Course review"}</span><strong>${access.percent}%</strong></div>${lastActivity ? `<small class="academy-last-activity">Last activity ${academyEscape(lastActivity)}</small>` : ""}${renderPrimaryAction(course, access, { full: true })}</div></article>`;
  }

  // My Learning lists only entitlements returned by the protected API, with server-saved progress.
  function renderAcademyDashboard() {
    const target = getAcademyTarget();
    if (!target) return;
    const authReady = academyAuthReady();
    const error = payments?.getAuthError?.() || accessError;
    let content;
    if (error) content = `<div class="academy-error-state"><span aria-hidden="true">!</span><h2>Unable to check access</h2><p>${academyEscape(error.message || "Try again in a moment.")}</p><button class="academy-primary-button" type="button" data-academy-action="retry-access">Retry</button></div>`;
    else if (!authReady || (hasRealAcademyAccount() && accessPhase !== "ready")) content = '<div class="academy-dashboard-skeleton" role="status" aria-live="polite"><span></span><span></span><em class="sr-only">Checking your courses</em></div>';
    else if (!hasRealAcademyAccount()) content = renderAcademyLoginRequired();
    else {
      const purchased = getAcademyCourses().map(({ slug }) => getEffectiveCourse(slug)).map((course) => [course, getCourseAccess(course)]).filter(([, access]) => access.isEntitled);
      content = purchased.length ? `<div class="academy-dashboard-grid">${purchased.map(([course, access]) => renderDashboardCard(course, access)).join("")}</div>` : `<div class="academy-empty-state"><span aria-hidden="true">◇</span><h2>No purchased courses yet.</h2><p>Explore the Academy and return here after verified enrollment.</p><a class="academy-primary-button" href="/academy" data-academy-route="/academy">Explore learning paths →</a></div>`;
    }
    target.innerHTML = `${renderAcademyMasthead({ backPath: "/academy", backLabel: "Back to Academy" })}<div class="academy-dashboard"><header><div class="academy-eyebrow">MY LEARNING</div><h1 tabindex="-1">Your learning space.</h1><p>Purchased courses, next lessons and account-saved progress—all in one quiet place.</p></header><div id="academy-dashboard-content">${content}</div></div>`;
    ensureAcademyHydration();
  }

  function renderLessonSidebar(course, lesson) {
    const completed = new Set(accessRecords.get(course.slug)?.progress?.completedLessonSlugs || []);
    return `<aside class="academy-reader-sidebar"><div class="academy-eyebrow">${academyEscape(course.badge)}</div><h2>${academyEscape(course.title)}</h2><ol>${course.flatLessons.map((item, index) => { const route = `/academy/learn/${encodeURIComponent(course.slug)}/${encodeURIComponent(item.id)}`; return `<li class="${item.id === lesson.id ? "is-current" : ""} ${completed.has(item.id) ? "is-complete" : ""}"><a href="${route}" data-academy-route="${route}" ${item.id === lesson.id ? 'aria-current="page"' : ""}><span>${String(index + 1).padStart(2, "0")}</span>${academyEscape(item.title)}<b aria-hidden="true">${completed.has(item.id) ? "✓" : item.id === lesson.id ? "●" : ""}</b></a></li>`; }).join("")}</ol></aside>`;
  }

  // Lesson route stays locked until the shared resolver confirms an active server entitlement.
  function renderAcademyLesson(slug, lessonSlug) {
    const target = getAcademyTarget();
    const course = getEffectiveCourse(slug);
    const lesson = course?.flatLessons.find((item) => item.id === lessonSlug);
    if (!target || !course || !lesson) return;
    const access = getCourseAccess(course);
    let reader;
    if (access.kind === "checking") reader = '<div class="academy-reader-skeleton" role="status" aria-live="polite"><span></span><span></span><span></span><em class="sr-only">Verifying lesson access</em></div>';
    else if (access.kind === "error") reader = `<div class="academy-error-state"><span aria-hidden="true">!</span><h2>Unable to check access</h2><p>${academyEscape(access.statusMessage)}</p><button class="academy-primary-button" type="button" data-academy-action="retry-access">Retry</button></div>`;
    else if (!access.isEntitled) reader = `<div class="academy-access-state"><span aria-hidden="true">⌁</span><div><div class="academy-eyebrow">LESSON LOCKED</div><h2>Verified enrollment required.</h2><p>Preview the curriculum or enroll to open this lesson.</p><a class="academy-primary-button" href="/academy/course/${encodeURIComponent(course.slug)}" data-academy-route="/academy/course/${encodeURIComponent(course.slug)}">View course →</a></div></div>`;
    else reader = '<div class="academy-reader-skeleton" role="status" aria-live="polite"><span></span><span></span><span></span><em class="sr-only">Loading lesson</em></div>';
    target.innerHTML = `${renderAcademyMasthead({ backPath: "/academy/dashboard", backLabel: "My Learning", compact: true })}<div class="academy-reader-layout">${renderLessonSidebar(course, lesson)}<article id="academy-reader-content" class="academy-reader-content">${reader}</article></div>`;
    ensureAcademyHydration();
    if (access.isEntitled) loadAcademyLesson(course, lesson);
  }

  async function loadAcademyLesson(course, lesson) {
    const target = document.getElementById("academy-reader-content");
    if (!target) return;
    try {
      const response = await payments.getLesson(course.slug, lesson.id);
      if (!target.isConnected) return;
      const index = course.flatLessons.findIndex((item) => item.id === lesson.id);
      const previous = course.flatLessons[index - 1];
      const next = course.flatLessons[index + 1];
      const completed = new Set(accessRecords.get(course.slug)?.progress?.completedLessonSlugs || []);
      const paragraphs = String(response.lesson?.content || "").split(/\n{2,}/).map((paragraph) => paragraph.trim()).filter(Boolean);
      target.innerHTML = `<header><div class="academy-eyebrow">${academyEscape(lesson.moduleTitle)}</div><h1 tabindex="-1">${academyEscape(response.lesson?.title || lesson.title)}</h1><p>Lesson ${index + 1} of ${course.flatLessons.length}</p></header><div class="academy-reader-body">${paragraphs.length ? paragraphs.map((paragraph) => `<p>${academyEscape(paragraph)}</p>`).join("") : '<div class="academy-empty-copy">Lesson content has not been configured yet.</div>'}${response.lesson?.mediaUrl ? `<div class="academy-private-media"><p>Private media link expires shortly.</p><a href="${academyEscape(response.lesson.mediaUrl)}" rel="noopener">Open protected lesson media</a></div>` : ""}</div><div id="academy-progress-status" aria-live="polite"></div><button class="academy-complete-button" type="button" data-academy-action="complete-lesson" data-course="${academyEscape(course.slug)}" data-lesson="${academyEscape(lesson.id)}" ${completed.has(lesson.id) ? "disabled" : ""}>${completed.has(lesson.id) ? "Lesson complete ✓" : "Mark lesson complete ✓"}</button><nav class="academy-reader-navigation" aria-label="Academy lesson navigation">${previous ? `<a href="/academy/learn/${encodeURIComponent(course.slug)}/${encodeURIComponent(previous.id)}" data-academy-route="/academy/learn/${encodeURIComponent(course.slug)}/${encodeURIComponent(previous.id)}">← Previous</a>` : "<span></span>"}${next ? `<a href="/academy/learn/${encodeURIComponent(course.slug)}/${encodeURIComponent(next.id)}" data-academy-route="/academy/learn/${encodeURIComponent(course.slug)}/${encodeURIComponent(next.id)}">Next lesson →</a>` : `<a href="/academy/dashboard" data-academy-route="/academy/dashboard">Back to My Learning →</a>`}</nav>`;
    } catch (error) {
      const locked = error.status === 403 || error.code === "ENTITLEMENT_REQUIRED";
      target.innerHTML = `<div class="academy-access-state"><span aria-hidden="true">${locked ? "⌁" : "!"}</span><div><div class="academy-eyebrow">${locked ? "LESSON LOCKED" : "ACCESS ERROR"}</div><h2>${locked ? "Verified enrollment required." : "We couldn't load this lesson."}</h2><p>${academyEscape(error.message)}</p><a class="academy-primary-button" href="/academy/${locked ? `course/${encodeURIComponent(course.slug)}` : "dashboard"}" data-academy-route="/academy/${locked ? `course/${encodeURIComponent(course.slug)}` : "dashboard"}">${locked ? "View course" : "Return to My Learning"} →</a></div></div>`;
    }
  }

  // Payment-result URLs are informational only; the protected status API performs reconciliation.
  function renderAcademyPaymentResult(status, url) {
    const target = getAcademyTarget();
    const course = getEffectiveCourse(url.searchParams.get("course"));
    if (!target) return;
    const safeStatus = ["success", "failed", "cancelled", "pending"].includes(status) ? status : "pending";
    const orderId = url.searchParams.get("order") || "";
    const state = safeStatus === "success" ? (hasRealAcademyAccount() ? "pending" : "login-required") : safeStatus;
    target.innerHTML = `${renderAcademyMasthead({ backPath: "/academy", backLabel: "Back to Academy" })}<div class="academy-payment-result"><div id="academy-payment-result-seal" class="academy-payment-result__seal" aria-hidden="true">◇</div><div class="academy-eyebrow">PAYMENT RESULT</div><h1 id="academy-payment-result-heading" tabindex="-1">${safeStatus === "success" ? "Checking enrollment." : safeStatus === "failed" ? "Payment was not completed." : safeStatus === "cancelled" ? "Checkout cancelled." : "Verification pending."}</h1><div id="academy-payment-result-status">${renderCheckoutStatus(state)}</div><div class="academy-payment-result__actions"><a class="academy-primary-button" href="/academy/dashboard" data-academy-route="/academy/dashboard">Open My Learning →</a>${course ? `<a href="/academy/course/${encodeURIComponent(course.slug)}" data-academy-route="/academy/course/${encodeURIComponent(course.slug)}">Return to course</a>` : ""}</div></div>`;
    if (safeStatus === "success" && orderId && hasRealAcademyAccount()) hydrateAcademyPaymentResult(orderId);
  }

  async function hydrateAcademyPaymentResult(orderId) {
    const heading = document.getElementById("academy-payment-result-heading");
    const statusTarget = document.getElementById("academy-payment-result-status");
    const seal = document.getElementById("academy-payment-result-seal");
    if (!heading || !statusTarget || !payments?.getPaymentStatus) return;
    try {
      const result = await payments.getPaymentStatus(orderId);
      if (result.entitlementActive) {
        await refreshAcademyAccess(true);
        heading.textContent = "Enrollment verified.";
        statusTarget.innerHTML = renderCheckoutStatus("unlocked");
        if (seal) seal.textContent = "✓";
        return;
      }
      heading.textContent = "Verification pending.";
      statusTarget.innerHTML = renderCheckoutStatus("verification-pending");
    } catch (error) {
      heading.textContent = "Unable to verify enrollment.";
      statusTarget.innerHTML = renderCheckoutStatus(error.code === "NETWORK_ERROR" || error.code === "NETWORK_TIMEOUT" ? "network-error" : "verification-failed", error.message);
    }
  }

  // Checkout can start only from the signed-in locked state and reports all intermediate outcomes.
  async function beginAcademyEnrollment(slug) {
    const course = getEffectiveCourse(slug);
    if (!course) return;
    const current = getCourseAccess(course);
    if (current.isEntitled) { navigateToRoute(current.route); return; }
    if (current.kind === "guest") { pendingAuthCourse = slug; showAuthModal("login", "academy"); return; }
    if (!current.canEnroll || current.kind !== "locked") return;

    checkoutFeedback.delete(slug);
    processingCourses.add(slug);
    renderRouteAgain();
    try {
      const result = await payments.startCheckout(course, (state, details = {}) => {
        checkoutFeedback.set(slug, { state, detail: details.description || "" });
        const statusTarget = document.getElementById("academy-checkout-status");
        if (statusTarget?.isConnected) statusTarget.innerHTML = renderCheckoutStatus(state, details.description || "");
      });
      if (result.entitlementActive) await refreshAcademyAccess(true);
      const query = new URLSearchParams({ course: course.slug, order: result.orderId || "" });
      navigateToRoute(`/academy/payment/success?${query}`);
    } catch (error) {
      if (error.code === "ALREADY_ENROLLED" || error.status === 409) {
        checkoutFeedback.set(slug, { state: "duplicate", detail: error.message });
        await refreshAcademyAccess(true);
      }
      else if (error.code !== "CHECKOUT_CANCELLED") {
        const state = error.code === "CHECKOUT_UNAVAILABLE" ? "unavailable" : error.code === "NETWORK_ERROR" || error.code === "NETWORK_TIMEOUT" ? "network-error" : "verification-failed";
        checkoutFeedback.set(slug, { state, detail: error.message });
        const statusTarget = document.getElementById("academy-checkout-status");
        if (statusTarget?.isConnected) statusTarget.innerHTML = renderCheckoutStatus(state, error.message);
      }
    } finally {
      processingCourses.delete(slug);
      renderRouteAgain();
    }
  }

  // An Academy auth change clears cross-account cache before re-fetching entitlements.
  function handleAcademyAuthResolved() {
    const nextUserId = payments?.getCurrentUser?.()?.id || null;
    if (nextUserId !== accessUserId) {
      accessRecords.clear();
      accessError = null;
      accessPhase = academyAuthReady() && !nextUserId ? "ready" : "idle";
      accessUserId = nextUserId;
    }
    if (pendingAuthCourse && nextUserId) {
      const course = pendingAuthCourse;
      pendingAuthCourse = null;
      navigateToRoute(`/academy/course/${encodeURIComponent(course)}`);
    } else renderRouteAgain();
    if (nextUserId) refreshAcademyAccess(true);
  }

  // Progress writes go through the protected API, then refresh the central dashboard/course state.
  async function completeAcademyLesson(courseSlug, lessonSlug, button) {
    const status = document.getElementById("academy-progress-status");
    if (button) button.disabled = true;
    if (status) status.innerHTML = '<p class="academy-inline-status">Saving progress…</p>';
    try {
      await payments.saveProgress(courseSlug, lessonSlug, true);
      if (status) status.innerHTML = '<p class="academy-inline-status academy-inline-status--success">Lesson completed and saved to your account.</p>';
      if (button) button.textContent = "Lesson complete ✓";
      await refreshAcademyAccess(true);
    } catch (error) {
      if (status) status.innerHTML = `<p class="academy-inline-status academy-inline-status--error">${academyEscape(error.message)}</p>`;
      if (button) button.disabled = false;
    }
  }

  async function retryAcademyAccess() {
    accessPhase = "idle";
    accessError = null;
    try { await payments?.initializeAuth?.(); } catch (error) { accessError = error; accessPhase = "error"; }
    if (academyAuthReady()) await refreshAcademyAccess(true);
    renderRouteAgain();
  }

  // One delegated handler owns all dynamic Academy links and buttons to prevent duplicate listeners.
  function bindAcademyEvents() {
    document.addEventListener("click", (event) => {
      const routeLink = event.target.closest("[data-academy-route]");
      if (routeLink) {
        event.preventDefault();
        navigateToRoute(routeLink.dataset.academyRoute || routeLink.getAttribute("href"));
        requestAnimationFrame(() => document.querySelector("#academy h1")?.focus({ preventScroll: true }));
        return;
      }
      const action = event.target.closest("[data-academy-action]");
      if (!action) return;
      const type = action.dataset.academyAction;
      if (type === "audience") {
        const audience = config.audiences.some(({ id }) => id === action.dataset.audience) ? action.dataset.audience : config.audiences[0].id;
        navigateToRoute(`/academy?audience=${encodeURIComponent(audience)}`);
        document.getElementById(`academy-tab-${audience}`)?.focus();
      }
      if (type === "toggle-module") {
        const panel = document.getElementById(action.getAttribute("aria-controls"));
        if (!panel) return;
        const expanded = action.getAttribute("aria-expanded") === "true";
        action.setAttribute("aria-expanded", String(!expanded));
        panel.hidden = expanded;
      }
      if (type === "login") { pendingAuthCourse = action.dataset.course || null; showAuthModal("login", "academy"); }
      if (type === "enroll") beginAcademyEnrollment(action.dataset.course);
      if (type === "retry-access") retryAcademyAccess();
      if (type === "complete-lesson") completeAcademyLesson(action.dataset.course, action.dataset.lesson, action);
    });

    document.addEventListener("keydown", (event) => {
      const tab = event.target.closest('[role="tab"][data-academy-action="audience"]');
      if (!tab || !["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      const tabs = Array.from(document.querySelectorAll('[role="tab"][data-academy-action="audience"]'));
      const current = tabs.indexOf(tab);
      if (current < 0) return;
      event.preventDefault();
      const next = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : event.key === "ArrowRight" ? (current + 1) % tabs.length : (current - 1 + tabs.length) % tabs.length;
      tabs[next].focus();
      tabs[next].click();
    });
  }

  bindAcademyEvents();
  payments?.initializeAuth?.().catch((error) => { accessError = error; accessPhase = "error"; renderRouteAgain(); });

  global.getAcademyCourse = getAcademyCourse;
  global.getAcademyCourses = getAcademyCourses;
  global.getFlatAcademyLessons = getFlatAcademyLessons;
  global.getAcademyAccessState = (slug) => { const course = getEffectiveCourse(slug); return course ? getCourseAccess(course) : null; };
  global.renderAcademyCatalog = renderAcademyCatalog;
  global.renderAcademyCourseDetail = renderAcademyCourseDetail;
  global.renderAcademyPricing = renderAcademyPricing;
  global.renderAcademyDashboard = renderAcademyDashboard;
  global.renderAcademyLesson = renderAcademyLesson;
  global.renderAcademyPaymentResult = renderAcademyPaymentResult;
  global.handleAcademyAuthResolved = handleAcademyAuthResolved;
})(window);
