// ========================================
// FLIRTYFLIP ACADEMY UI AND ACCESS CONTROLLER
// This file renders public Academy screens, dashboard states and protected lesson responses.
// Edit public course metadata in academy-data.js; edit server authorization/payment rules in /api/academy.
// Paid access is always re-read from the backend and is never inferred from browser storage or query strings.
// ========================================
(function configureAcademyExperience(global) {
  "use strict";

  const config = global.FLIRTYFLIP_ACADEMY;
  const payments = global.AcademyPayments;
  const serverPricing = new Map();
  let pendingAuthCourse = null;

  if (!config) {
    console.warn("FlirtyFlip Academy public configuration is unavailable.");
    return;
  }

  function academyEscape(value) {
    return String(value ?? "").replace(/[&<>"']/g, (character) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    })[character]);
  }

  function getAcademyTarget() {
    return document.getElementById("academy-content");
  }

  function getAcademyCourses() {
    return Object.values(config.courses).filter((course) => course && course.slug);
  }

  function getAcademyCourse(slug) {
    return config.courses[String(slug || "")] || null;
  }

  function getEffectiveCourse(slug) {
    const course = getAcademyCourse(slug);
    if (!course) return null;
    const remote = serverPricing.get(slug);
    return remote ? { ...course, ...remote } : { ...course };
  }

  function getFlatAcademyLessons(course) {
    if (!course?.modules) return [];
    return course.modules.flatMap((module, moduleIndex) => module.lessons.map((lesson, lessonIndex) => ({
      ...lesson,
      moduleId: module.id,
      moduleTitle: module.title,
      moduleIndex,
      lessonIndex
    })));
  }

  function getAudienceLabel(audienceId) {
    return config.audiences.find(({ id }) => id === audienceId)?.label || "Academy";
  }

  function formatAcademyPrice(course) {
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

  function hasRealAcademyAccount() {
    return Boolean(typeof signedInUser !== "undefined" && signedInUser?.id && signedInUser?.email);
  }

  function renderAcademyBackLink(path, label = "Back") {
    return `<a class="academy-back" href="${academyEscape(path)}" data-academy-route="${academyEscape(path)}">← ${academyEscape(label)}</a>`;
  }

  // Shared Academy masthead keeps public pages, account state and dashboard access consistent.
  // Edit the trust wording here rather than duplicating it inside individual page renderers.
  function renderAcademyMasthead({ backPath = "/", backLabel = "FlirtyFlip", compact = false } = {}) {
    return `
      <div class="academy-masthead ${compact ? "academy-masthead--compact" : ""}">
        <div>${renderAcademyBackLink(backPath, backLabel)}</div>
        <a class="academy-wordmark" href="/academy" data-academy-route="/academy" aria-label="FlirtyFlip Academy home">
          <span class="academy-wordmark__seal" aria-hidden="true">FF</span>
          <span><strong>FlirtyFlip</strong><small>Academy · 18+</small></span>
        </a>
        <a class="academy-account-link" href="/academy/dashboard" data-academy-route="/academy/dashboard">${hasRealAcademyAccount() ? "My learning" : "Student login"}</a>
      </div>
    `;
  }

  function renderAcademyTrustStrip() {
    return `
      <aside class="academy-trust-strip" aria-label="Academy principles">
        <div><span aria-hidden="true">◇</span><strong>Adults 18+</strong><small>Educational content for adults</small></div>
        <div><span aria-hidden="true">♡</span><strong>Consent first</strong><small>Comfort and boundaries matter</small></div>
        <div><span aria-hidden="true">⌁</span><strong>Private access</strong><small>Paid lessons require verification</small></div>
      </aside>
    `;
  }

  function renderAcademyCourseCard(course) {
    const route = `/academy/course/${encodeURIComponent(course.slug)}`;
    return `
      <article class="academy-course-card" style="--academy-accent:${academyEscape(course.accent)}">
        <div class="academy-course-card__visual" aria-hidden="true">
          <span class="academy-course-card__badge">${academyEscape(course.badge)}</span>
          ${course.chapterOneFree ? '<span class="academy-course-card__free">Chapter 1 free</span>' : ""}
          <strong>${academyEscape(course.monogram)}</strong>
          <i></i>
        </div>
        <div class="academy-course-card__body">
          <div class="academy-course-card__meta"><span>${academyEscape(getAudienceLabel(course.audience))}</span><span>${academyEscape(course.duration)}</span></div>
          <h2>${academyEscape(course.title)}</h2>
          <p>${academyEscape(course.description)}</p>
          <div class="academy-course-card__facts"><span>${course.lessonCount} chapters</span><span>${course.chapterOneFree ? "Preview available" : "Premium curriculum"}</span></div>
        </div>
        <a class="academy-course-card__link" href="${route}" data-academy-route="${route}">Explore course <span aria-hidden="true">→</span></a>
      </article>
    `;
  }

  // Academy catalog uses keyboard-operable ARIA tabs and one centralized data source.
  // Add future audiences in academy-data.js; an audience with no courses receives an honest empty state.
  function renderAcademyCatalog(audienceId = "for-him") {
    const target = getAcademyTarget();
    if (!target) return;
    const selectedAudience = config.audiences.some(({ id }) => id === audienceId) ? audienceId : config.audiences[0].id;
    const courses = getAcademyCourses().filter((course) => course.audience === selectedAudience);

    target.innerHTML = `
      ${renderAcademyMasthead()}
      <header class="academy-catalog-hero">
        <div class="academy-eyebrow">PRIVATE LEARNING · CONSENT FIRST</div>
        <h1 tabindex="-1">FlirtyFlip <em>Academy</em></h1>
        <p>Thoughtful adult education for clearer communication, deeper attention and more respectful intimacy—without pressure or guaranteed claims.</p>
      </header>
      <div class="academy-tabs" role="tablist" aria-label="Choose an Academy audience">
        ${config.audiences.map((audience) => `
          <button id="academy-tab-${audience.id}" class="academy-tab" type="button" role="tab" aria-selected="${audience.id === selectedAudience}" tabindex="${audience.id === selectedAudience ? "0" : "-1"}" data-academy-action="audience" data-audience="${audience.id}">${academyEscape(audience.label)}</button>
        `).join("")}
      </div>
      <section class="academy-catalog-section" role="tabpanel" aria-labelledby="academy-tab-${selectedAudience}">
        <div class="academy-section-heading">
          <div><div class="academy-eyebrow">CURATED PATHS</div><h2>${academyEscape(getAudienceLabel(selectedAudience))}</h2></div>
          <p>${courses.length ? `${courses.length} configured ${courses.length === 1 ? "course" : "courses"}` : "More learning paths can be added when real course content is supplied."}</p>
        </div>
        ${courses.length
          ? `<div class="academy-course-grid">${courses.map(renderAcademyCourseCard).join("")}</div>`
          : `<div class="academy-empty-state"><span aria-hidden="true">◇</span><h2>No configured courses yet.</h2><p>Nothing has been invented for this category. Add real course information in <code>academy-data.js</code> when it is ready.</p></div>`}
      </section>
      ${renderAcademyTrustStrip()}
      <footer class="academy-legal-footer">
        <p>Learning is personal. Consent, communication, comfort and boundaries remain essential.</p>
        <nav aria-label="Academy policies">
          <a href="${config.legalLinks.privacy}" data-academy-route="${config.legalLinks.privacy}">Privacy</a>
          <a href="${config.legalLinks.terms}" data-academy-route="${config.legalLinks.terms}">Terms</a>
          <a href="${config.legalLinks.refund}" data-academy-route="${config.legalLinks.refund}">Refund policy</a>
          <a href="${config.legalLinks.contact}" data-academy-route="${config.legalLinks.contact}">Support</a>
        </nav>
      </footer>
    `;
  }

  function renderAcademyModulePreview(course) {
    let lessonNumber = 0;
    return course.modules.map((module, moduleIndex) => `
      <section class="academy-module">
        <button class="academy-module__toggle" type="button" data-academy-action="toggle-module" aria-expanded="${moduleIndex === 0}" aria-controls="academy-module-${academyEscape(module.id)}">
          <span><small>${String(moduleIndex + 1).padStart(2, "0")}</small><strong>${academyEscape(module.title)}</strong></span>
          <span>${module.lessons.length} ${module.lessons.length === 1 ? "lesson" : "lessons"}<b aria-hidden="true">+</b></span>
        </button>
        <div class="academy-module__panel" id="academy-module-${academyEscape(module.id)}" ${moduleIndex === 0 ? "" : "hidden"}>
          ${module.lessons.map((lesson) => {
            lessonNumber += 1;
            const isPreview = Boolean(course.chapterOneFree && lessonNumber === 1);
            return `
              <article class="academy-lesson-preview">
                <span class="academy-lesson-preview__index">${String(lessonNumber).padStart(2, "0")}</span>
                <div><h3>${academyEscape(lesson.title)}</h3><p>${academyEscape(lesson.preview)}</p></div>
                <span class="academy-lesson-preview__state">${isPreview ? "Preview" : '<span aria-hidden="true">⌁</span> Locked'}</span>
              </article>
            `;
          }).join("")}
        </div>
      </section>
    `).join("");
  }

  // Course landing pages intentionally omit instructors, testimonials, ratings and pricing claims.
  // Those sections should only be added after verified business information is supplied.
  function renderAcademyCourseDetail(slug) {
    const target = getAcademyTarget();
    const course = getEffectiveCourse(slug);
    if (!target || !course) return;
    const price = formatAcademyPrice(course);

    target.innerHTML = `
      ${renderAcademyMasthead({ backPath: `/academy?audience=${encodeURIComponent(course.audience)}`, backLabel: "Academy" })}
      <article class="academy-course-detail" style="--academy-accent:${academyEscape(course.accent)}">
        <header class="academy-course-hero">
          <div class="academy-course-hero__visual" aria-hidden="true"><span>${academyEscape(course.monogram)}</span><small>${academyEscape(course.badge)}</small><i></i></div>
          <div class="academy-course-hero__copy">
            <div class="academy-eyebrow">${academyEscape(getAudienceLabel(course.audience))} · ADULTS 18+</div>
            <h1 tabindex="-1">${academyEscape(course.title)}</h1>
            <p class="academy-course-hero__subtitle">${academyEscape(course.subtitle)}</p>
            <p>${academyEscape(course.description)}</p>
            <div class="academy-course-hero__facts"><span>${course.lessonCount} chapters</span><span>${academyEscape(course.duration)}</span><span>Self-paced</span></div>
            <a class="academy-gold-button" href="/academy/pricing/${encodeURIComponent(course.slug)}" data-academy-route="/academy/pricing/${encodeURIComponent(course.slug)}">${price ? `Enroll for ${academyEscape(price)}` : "View enrollment"} <span aria-hidden="true">→</span></a>
            <small class="academy-course-hero__notice">Adult educational content. Every real-world activity requires mutual consent and respect for personal boundaries.</small>
          </div>
        </header>

        <section class="academy-overview-grid">
          <div><div class="academy-eyebrow">COURSE OVERVIEW</div><h2>Learn with attention, not pressure.</h2></div>
          <p>${academyEscape(course.description)} This material is educational and does not replace medical, therapeutic or professional advice.</p>
        </section>

        <section class="academy-outcomes">
          <div class="academy-section-heading"><div><div class="academy-eyebrow">WHAT YOU'LL LEARN</div><h2>Practical ideas for respectful connection.</h2></div></div>
          <div class="academy-outcomes__grid">${course.outcomes.map((outcome, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><p>${academyEscape(outcome)}</p></article>`).join("")}</div>
        </section>

        <section class="academy-curriculum">
          <div class="academy-section-heading"><div><div class="academy-eyebrow">CURRICULUM</div><h2>Inside the course.</h2></div><p>Lesson bodies remain private until server-verified enrollment.</p></div>
          <div class="academy-module-list">${renderAcademyModulePreview(course)}</div>
        </section>

        <section class="academy-benefits">
          <div><div class="academy-eyebrow">COURSE FEATURES</div><h2>A quiet, self-paced learning space.</h2></div>
          <ul>${course.benefits.map((benefit) => `<li><span aria-hidden="true">◇</span>${academyEscape(benefit)}</li>`).join("")}</ul>
        </section>

        <section class="academy-pricing-preview">
          <div><div class="academy-eyebrow">ENROLLMENT</div><h2>${price ? academyEscape(price) : "Enrollment opening soon"}</h2><p>${price ? "The amount shown is supplied by the secure Academy backend." : "A real price has not been supplied, so live checkout is disabled."}</p></div>
          <a class="academy-gold-button" href="/academy/pricing/${encodeURIComponent(course.slug)}" data-academy-route="/academy/pricing/${encodeURIComponent(course.slug)}">View enrollment <span aria-hidden="true">→</span></a>
        </section>

        <section class="academy-faq">
          <div class="academy-section-heading"><div><div class="academy-eyebrow">FAQ</div><h2>Before you begin.</h2></div></div>
          <div class="academy-faq__list">${course.faq.map(({ question, answer }) => `<details><summary>${academyEscape(question)}</summary><p>${academyEscape(answer)}</p></details>`).join("")}</div>
        </section>

        ${renderRelatedCourses(course)}
        ${renderAcademyTrustStrip()}
      </article>
    `;
  }

  function renderRelatedCourses(course) {
    const related = (course.related || []).map(getEffectiveCourse).filter(Boolean);
    if (!related.length) return "";
    return `
      <section class="academy-related">
        <div class="academy-section-heading"><div><div class="academy-eyebrow">KEEP EXPLORING</div><h2>Related courses.</h2></div></div>
        <div class="academy-related__grid">${related.map((item) => {
          const route = `/academy/course/${encodeURIComponent(item.slug)}`;
          return `<a href="${route}" data-academy-route="${route}" style="--academy-accent:${academyEscape(item.accent)}"><span>${academyEscape(item.badge)}</span><h3>${academyEscape(item.title)}</h3><p>${academyEscape(item.subtitle)}</p><b aria-hidden="true">→</b></a>`;
        }).join("")}</div>
      </section>
    `;
  }

  function renderCheckoutStatus(state, detail = "") {
    const states = {
      "login-required": ["Login required", "Use your email account before purchasing. Guest mode can browse public course information only."],
      ready: ["Ready to enroll", "Your order will be created securely using the authoritative server-side price."],
      "creating-order": ["Creating your order", "Please wait. The enrollment button is temporarily disabled."],
      "checkout-open": ["Razorpay Checkout open", "Complete or cancel the secure checkout window to continue."],
      processing: ["Payment processing", "Your payment response is being verified securely."],
      "verification-pending": ["Verification pending", "Payment was received but access is waiting for final server confirmation."],
      unlocked: ["Course unlocked", "Verified access is active. Continue to your student dashboard."],
      failed: ["Payment failed", "No access was granted. You can safely retry when ready."],
      cancelled: ["Payment cancelled", "No access was granted and you can return whenever you are ready."],
      pending: ["Payment pending", "We are still waiting for a final payment status."],
      "network-error": ["Network interruption", "Your payment status remains server-authoritative. Retry the status check before paying again."],
      duplicate: ["Already purchased", "This course is already available in your dashboard."],
      "verification-failed": ["Unable to verify", "Access was not granted. Retry verification or contact support with your order ID."],
      unavailable: ["Enrollment opening soon", "Checkout is disabled until a real price and server payment configuration are supplied."]
    };
    const [title, message] = states[state] || states.unavailable;
    return `<div class="academy-payment-state academy-payment-state--${academyEscape(state)}" role="status"><span aria-hidden="true">${state === "unlocked" ? "✓" : "◇"}</span><div><strong>${academyEscape(title)}</strong><p>${academyEscape(detail || message)}</p></div></div>`;
  }

  // Pricing reads public backend configuration but stays safely unavailable when that configuration is absent.
  // The browser display is informational; create-order always re-reads price and course state server-side.
  function renderAcademyPricing(slug, { hydrate = true } = {}) {
    const target = getAcademyTarget();
    const course = getEffectiveCourse(slug);
    if (!target || !course) return;
    const price = formatAcademyPrice(course);
    const configured = Boolean(price && course.checkoutEnabled);
    const accountReady = hasRealAcademyAccount();
    const state = !configured ? "unavailable" : accountReady ? "ready" : "login-required";

    target.innerHTML = `
      ${renderAcademyMasthead({ backPath: `/academy/course/${encodeURIComponent(course.slug)}`, backLabel: "Course" })}
      <div class="academy-pricing-page" style="--academy-accent:${academyEscape(course.accent)}">
        <section class="academy-pricing-card">
          <div class="academy-pricing-card__course"><span>${academyEscape(course.badge)}</span><strong aria-hidden="true">${academyEscape(course.monogram)}</strong></div>
          <div class="academy-pricing-card__copy">
            <div class="academy-eyebrow">SECURE ENROLLMENT</div>
            <h1 tabindex="-1">${academyEscape(course.title)}</h1>
            <p>${academyEscape(course.subtitle)}</p>
            <div class="academy-price">${price ? academyEscape(price) : "Price not configured"}<small>${price ? "One-time course access" : "Enrollment remains disabled"}</small></div>
            <ul><li>${course.lessonCount} course chapters</li><li>Self-paced lesson dashboard</li><li>Progress saved to your account</li></ul>
            <div id="academy-checkout-status">${renderCheckoutStatus(state)}</div>
            ${configured
              ? `<button class="academy-gold-button academy-enroll-button" type="button" data-academy-action="enroll" data-course="${academyEscape(course.slug)}">${accountReady ? "Enroll securely" : "Log in to enroll"} <span aria-hidden="true">→</span></button>`
              : `<button class="academy-gold-button academy-enroll-button" type="button" disabled aria-disabled="true">Enrollment opening soon</button>`}
            <p class="academy-checkout-footnote">Payments are processed by Razorpay. FlirtyFlip does not store card details. Access is activated only after server-side verification of a captured payment.</p>
          </div>
        </section>
        <aside class="academy-pricing-trust">
          <h2>What happens next</h2>
          <ol><li><span>01</span>Sign in with your existing FlirtyFlip account.</li><li><span>02</span>The server creates an order using its configured price.</li><li><span>03</span>Razorpay handles payment details in Checkout.</li><li><span>04</span>Verified access appears in your dashboard.</li></ol>
          <nav aria-label="Enrollment policies"><a href="${config.legalLinks.privacy}" data-academy-route="${config.legalLinks.privacy}">Privacy</a><a href="${config.legalLinks.terms}" data-academy-route="${config.legalLinks.terms}">Terms</a><a href="${config.legalLinks.refund}" data-academy-route="${config.legalLinks.refund}">Refund policy</a></nav>
        </aside>
      </div>
    `;

    if (hydrate) hydrateAcademyPricing(slug);
  }

  async function hydrateAcademyPricing(slug) {
    if (!payments?.getPublicCatalog) return;
    try {
      const response = await payments.getPublicCatalog();
      (response.courses || []).forEach((course) => {
        if (!getAcademyCourse(course.slug)) return;
        serverPricing.set(course.slug, {
          priceMinor: Number.isInteger(course.priceMinor) ? course.priceMinor : null,
          currency: course.currency || "INR",
          checkoutEnabled: Boolean(course.checkoutEnabled)
        });
      });
      if (location.pathname === `/academy/pricing/${slug}`) renderAcademyPricing(slug, { hydrate: false });
    } catch (error) {
      // The explicit unavailable state is already rendered; local static servers have no /api functions.
    }
  }

  function renderAcademyLoginRequired(courseSlug = null) {
    return `
      <div class="academy-access-state">
        <span aria-hidden="true">⌁</span><div><div class="academy-eyebrow">ACCOUNT REQUIRED</div><h2>Log in to continue learning.</h2><p>Paid courses are tied to your Supabase account. Guest mode cannot purchase or unlock Academy lessons.</p>
        <button class="academy-gold-button" type="button" data-academy-action="login" ${courseSlug ? `data-course="${academyEscape(courseSlug)}"` : ""}>Log in or sign up <span aria-hidden="true">→</span></button></div>
      </div>
    `;
  }

  // Dashboard starts from a server-authoritative entitlement query and never trusts local progress flags.
  // Add dashboard card fields in the Vercel entitlements response and map them here.
  function renderAcademyDashboard() {
    const target = getAcademyTarget();
    if (!target) return;
    target.innerHTML = `
      ${renderAcademyMasthead({ backPath: "/academy", backLabel: "Academy" })}
      <div class="academy-dashboard">
        <header><div class="academy-eyebrow">STUDENT DASHBOARD</div><h1 tabindex="-1">Your learning space.</h1><p>Purchased courses, current lessons and progress appear here after secure entitlement verification.</p></header>
        <div id="academy-dashboard-content">${hasRealAcademyAccount() ? '<div class="academy-loading" role="status"><span></span>Checking your courses…</div>' : renderAcademyLoginRequired()}</div>
      </div>
    `;
    if (hasRealAcademyAccount()) loadAcademyDashboard();
  }

  async function loadAcademyDashboard() {
    const target = document.getElementById("academy-dashboard-content");
    if (!target) return;
    try {
      const response = await payments.getEntitlements();
      const entitlements = (response.entitlements || []).filter(({ status }) => status === "active");
      if (!entitlements.length) {
        target.innerHTML = `<div class="academy-empty-state"><span aria-hidden="true">◇</span><h2>No purchased courses yet.</h2><p>Browse Academy course information and return here after a verified enrollment.</p><a class="academy-gold-button" href="/academy" data-academy-route="/academy">Explore courses →</a></div>`;
        return;
      }

      const progressResults = await Promise.all(entitlements.map(async (entitlement) => {
        try { return await payments.getProgress(entitlement.courseSlug); } catch (error) { return { progress: null }; }
      }));

      target.innerHTML = `<div class="academy-dashboard-grid">${entitlements.map((entitlement, index) => {
        const course = getEffectiveCourse(entitlement.courseSlug);
        if (!course) return "";
        const lessons = getFlatAcademyLessons(course);
        const progress = progressResults[index]?.progress || {};
        const completed = Array.isArray(progress.completedLessonSlugs) ? progress.completedLessonSlugs.length : 0;
        const percent = lessons.length ? Math.round((completed / lessons.length) * 100) : 0;
        const nextLesson = lessons.find((lesson) => !progress.completedLessonSlugs?.includes(lesson.id)) || lessons[lessons.length - 1];
        const route = nextLesson ? `/academy/learn/${encodeURIComponent(course.slug)}/${encodeURIComponent(nextLesson.id)}` : `/academy/course/${encodeURIComponent(course.slug)}`;
        return `<article class="academy-dashboard-card" style="--academy-accent:${academyEscape(course.accent)}"><div class="academy-dashboard-card__mark" aria-hidden="true">${academyEscape(course.monogram)}</div><div><span>${academyEscape(course.badge)}</span><h2>${academyEscape(course.title)}</h2><p>${completed} of ${lessons.length} lessons completed</p><div class="academy-progress"><span style="width:${percent}%"></span></div><div class="academy-progress__label"><span>Overall progress</span><strong>${percent}%</strong></div><a class="academy-gold-button" href="${route}" data-academy-route="${route}">${completed ? "Continue learning" : "Start learning"} →</a></div></article>`;
      }).join("")}</div>`;
    } catch (error) {
      target.innerHTML = `<div class="academy-error-state"><span aria-hidden="true">!</span><h2>We couldn't verify your courses.</h2><p>${academyEscape(error.message || "Try again in a moment.")}</p><button class="academy-gold-button" type="button" data-academy-action="retry-dashboard">Retry</button></div>`;
    }
  }

  function renderAcademyLesson(slug, lessonSlug) {
    const target = getAcademyTarget();
    const course = getEffectiveCourse(slug);
    const lessons = getFlatAcademyLessons(course);
    const lesson = lessons.find((item) => item.id === lessonSlug);
    if (!target || !course || !lesson) return;

    target.innerHTML = `
      ${renderAcademyMasthead({ backPath: "/academy/dashboard", backLabel: "Dashboard", compact: true })}
      <div class="academy-reader-layout">
        <aside class="academy-reader-sidebar"><div class="academy-eyebrow">${academyEscape(course.badge)}</div><h2>${academyEscape(course.title)}</h2><ol>${lessons.map((item, index) => `<li class="${item.id === lesson.id ? "is-current" : ""}"><span>${String(index + 1).padStart(2, "0")}</span>${academyEscape(item.title)}<b aria-hidden="true">${item.id === lesson.id ? "●" : "⌁"}</b></li>`).join("")}</ol></aside>
        <article id="academy-reader-content" class="academy-reader-content">${hasRealAcademyAccount() ? '<div class="academy-loading" role="status"><span></span>Verifying lesson access…</div>' : renderAcademyLoginRequired(course.slug)}</article>
      </div>
    `;
    if (hasRealAcademyAccount()) loadAcademyLesson(course, lesson);
  }

  async function loadAcademyLesson(course, lesson) {
    const target = document.getElementById("academy-reader-content");
    if (!target) return;
    try {
      const response = await payments.getLesson(course.slug, lesson.id);
      const lessons = getFlatAcademyLessons(course);
      const index = lessons.findIndex((item) => item.id === lesson.id);
      const previous = lessons[index - 1];
      const next = lessons[index + 1];
      const paragraphs = String(response.lesson?.content || "").split(/\n{2,}/).map((paragraph) => paragraph.trim()).filter(Boolean);

      target.innerHTML = `
        <header><div class="academy-eyebrow">${academyEscape(lesson.moduleTitle)}</div><h1 tabindex="-1">${academyEscape(response.lesson?.title || lesson.title)}</h1><p>Lesson ${index + 1} of ${lessons.length}</p></header>
        <div class="academy-reader-body">${paragraphs.length ? paragraphs.map((paragraph) => `<p>${academyEscape(paragraph)}</p>`).join("") : '<div class="academy-empty-copy">Lesson content has not been configured yet.</div>'}${response.lesson?.mediaUrl ? `<div class="academy-private-media"><p>Private media link expires shortly.</p><a href="${academyEscape(response.lesson.mediaUrl)}" rel="noopener">Open protected lesson media</a></div>` : ""}</div>
        <div id="academy-progress-status" aria-live="polite"></div>
        <button class="academy-complete-button" type="button" data-academy-action="complete-lesson" data-course="${academyEscape(course.slug)}" data-lesson="${academyEscape(lesson.id)}">Mark lesson complete ✓</button>
        <nav class="academy-reader-navigation" aria-label="Academy lesson navigation">${previous ? `<a href="/academy/learn/${encodeURIComponent(course.slug)}/${encodeURIComponent(previous.id)}" data-academy-route="/academy/learn/${encodeURIComponent(course.slug)}/${encodeURIComponent(previous.id)}">← Previous</a>` : "<span></span>"}${next ? `<a href="/academy/learn/${encodeURIComponent(course.slug)}/${encodeURIComponent(next.id)}" data-academy-route="/academy/learn/${encodeURIComponent(course.slug)}/${encodeURIComponent(next.id)}">Next lesson →</a>` : `<a href="/academy/dashboard" data-academy-route="/academy/dashboard">Back to dashboard →</a>`}</nav>
      `;
    } catch (error) {
      const isLocked = error.status === 403 || error.code === "ENTITLEMENT_REQUIRED";
      target.innerHTML = `<div class="academy-access-state"><span aria-hidden="true">${isLocked ? "⌁" : "!"}</span><div><div class="academy-eyebrow">${isLocked ? "LESSON LOCKED" : "ACCESS ERROR"}</div><h2>${isLocked ? "Verified enrollment required." : "We couldn't load this lesson."}</h2><p>${academyEscape(error.message)}</p><a class="academy-gold-button" href="/academy/${isLocked ? `pricing/${encodeURIComponent(course.slug)}` : "dashboard"}" data-academy-route="/academy/${isLocked ? `pricing/${encodeURIComponent(course.slug)}` : "dashboard"}">${isLocked ? "View enrollment" : "Return to dashboard"} →</a></div></div>`;
    }
  }

  function renderAcademyPaymentResult(status, url) {
    const target = getAcademyTarget();
    const course = getEffectiveCourse(url.searchParams.get("course"));
    if (!target) return;
    const safeStatus = ["success", "failed", "cancelled", "pending"].includes(status) ? status : "pending";
    const orderId = url.searchParams.get("order") || "";
    // A success-looking URL is never proof of purchase; only payment-status can show unlocked.
    const state = safeStatus === "success" ? (hasRealAcademyAccount() ? "pending" : "login-required") : safeStatus;
    target.innerHTML = `
      ${renderAcademyMasthead({ backPath: "/academy", backLabel: "Academy" })}
      <div class="academy-payment-result"><div id="academy-payment-result-seal" class="academy-payment-result__seal" aria-hidden="true">◇</div><div class="academy-eyebrow">PAYMENT RESULT</div><h1 id="academy-payment-result-heading" tabindex="-1">${safeStatus === "success" ? "Checking enrollment." : safeStatus === "failed" ? "Payment was not completed." : safeStatus === "cancelled" ? "Checkout cancelled." : "Verification pending."}</h1><div id="academy-payment-result-status">${renderCheckoutStatus(state)}</div><div class="academy-payment-result__actions"><a class="academy-gold-button" href="/academy/dashboard" data-academy-route="/academy/dashboard">Open dashboard →</a>${course ? `<a href="/academy/course/${encodeURIComponent(course.slug)}" data-academy-route="/academy/course/${encodeURIComponent(course.slug)}">Return to course</a>` : ""}</div></div>
    `;
    if (safeStatus === "success" && orderId && hasRealAcademyAccount()) hydrateAcademyPaymentResult(orderId);
  }

  // Re-read the order and entitlement from the backend before presenting a successful result.
  // Direct URL edits, query strings and browser storage can therefore never imitate an unlock.
  async function hydrateAcademyPaymentResult(orderId) {
    const heading = document.getElementById("academy-payment-result-heading");
    const statusTarget = document.getElementById("academy-payment-result-status");
    const seal = document.getElementById("academy-payment-result-seal");
    if (!heading || !statusTarget || !payments?.getPaymentStatus) return;
    try {
      const result = await payments.getPaymentStatus(orderId);
      if (result.entitlementActive) {
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

  async function beginAcademyEnrollment(slug) {
    const course = getEffectiveCourse(slug);
    const statusTarget = document.getElementById("academy-checkout-status");
    if (!course || !statusTarget) return;
    if (!hasRealAcademyAccount()) {
      pendingAuthCourse = slug;
      statusTarget.innerHTML = renderCheckoutStatus("login-required");
      if (typeof showAuthModal === "function") showAuthModal("login");
      return;
    }

    const button = document.querySelector('[data-academy-action="enroll"]');
    if (button) button.disabled = true;
    try {
      const result = await payments.startCheckout(course, (state, details = {}) => {
        if (!statusTarget.isConnected) return;
        statusTarget.innerHTML = renderCheckoutStatus(state, details.description || "");
      });
      if (result.entitlementActive) {
        const query = new URLSearchParams({ course: course.slug, order: result.orderId || "" });
        navigateToRoute(`/academy/payment/success?${query}`);
      }
    } catch (error) {
      if (statusTarget.isConnected && error.code !== "CHECKOUT_CANCELLED") {
        const state = error.code === "CHECKOUT_UNAVAILABLE" ? "unavailable" : error.code === "NETWORK_ERROR" || error.code === "NETWORK_TIMEOUT" ? "network-error" : error.status === 409 ? "duplicate" : "verification-failed";
        statusTarget.innerHTML = renderCheckoutStatus(state, error.message);
      }
    } finally {
      if (button?.isConnected) button.disabled = false;
    }
  }

  // Existing Supabase auth calls this hook after login/logout so pending enrollment returns safely.
  // The pending route is only navigation state and never grants course entitlement.
  function handleAcademyAuthResolved() {
    if (pendingAuthCourse && hasRealAcademyAccount()) {
      const course = pendingAuthCourse;
      pendingAuthCourse = null;
      navigateToRoute(`/academy/pricing/${encodeURIComponent(course)}`);
      return;
    }
    // Re-render any Academy route so logout immediately clears protected lesson bodies,
    // while login refreshes enrollment, dashboard and payment-verification states.
    if (location.pathname.startsWith("/academy") && typeof renderCurrentRoute === "function") {
      renderCurrentRoute("replace");
    }
  }

  async function completeAcademyLesson(courseSlug, lessonSlug, button) {
    const status = document.getElementById("academy-progress-status");
    if (button) button.disabled = true;
    if (status) status.innerHTML = '<p class="academy-inline-status">Saving progress…</p>';
    try {
      await payments.saveProgress(courseSlug, lessonSlug, true);
      if (status) status.innerHTML = '<p class="academy-inline-status academy-inline-status--success">Lesson completed and saved to your account.</p>';
      if (button) button.textContent = "Lesson complete ✓";
    } catch (error) {
      if (status) status.innerHTML = `<p class="academy-inline-status academy-inline-status--error">${academyEscape(error.message)}</p>`;
      if (button) button.disabled = false;
    }
  }

  // One delegated handler owns dynamic Academy links, tabs, enrollment and lesson progress actions.
  // Keep actions centralized here to avoid duplicate listeners after SPA route renders.
  function bindAcademyEvents() {
    document.addEventListener("click", (event) => {
      const routeLink = event.target.closest("[data-academy-route]");
      if (routeLink) {
        event.preventDefault();
        navigateToRoute(routeLink.dataset.academyRoute || routeLink.getAttribute("href"));
        if (location.pathname.startsWith("/academy")) {
          requestAnimationFrame(() => document.querySelector("#academy h1")?.focus({ preventScroll: true }));
        }
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
      if (type === "login") {
        pendingAuthCourse = action.dataset.course || null;
        showAuthModal("login");
      }
      if (type === "enroll") beginAcademyEnrollment(action.dataset.course);
      if (type === "retry-dashboard") loadAcademyDashboard();
      if (type === "complete-lesson") completeAcademyLesson(action.dataset.course, action.dataset.lesson, action);
    });

    document.addEventListener("keydown", (event) => {
      const tab = event.target.closest('[role="tab"][data-academy-action="audience"]');
      if (!tab || !["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      const tabs = Array.from(document.querySelectorAll('[role="tab"][data-academy-action="audience"]'));
      const current = tabs.indexOf(tab);
      if (current < 0) return;
      event.preventDefault();
      let next = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : event.key === "ArrowRight" ? (current + 1) % tabs.length : (current - 1 + tabs.length) % tabs.length;
      tabs[next].focus();
      tabs[next].click();
    });
  }

  bindAcademyEvents();

  global.getAcademyCourse = getAcademyCourse;
  global.getAcademyCourses = getAcademyCourses;
  global.getFlatAcademyLessons = getFlatAcademyLessons;
  global.renderAcademyCatalog = renderAcademyCatalog;
  global.renderAcademyCourseDetail = renderAcademyCourseDetail;
  global.renderAcademyPricing = renderAcademyPricing;
  global.renderAcademyDashboard = renderAcademyDashboard;
  global.renderAcademyLesson = renderAcademyLesson;
  global.renderAcademyPaymentResult = renderAcademyPaymentResult;
  global.handleAcademyAuthResolved = handleAcademyAuthResolved;
})(window);
