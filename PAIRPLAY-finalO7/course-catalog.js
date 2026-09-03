(function initializeCourseCatalog(globalScope) {
  "use strict";

  /* ==================================================
     COURSE CATALOG
     Edit course titles, summaries, categories and ordering here.

     id: stable internal identifier; do not change after publishing.
     slug: URL used for /course/{slug}; a title can change without changing this.
     category: use for-her, for-him or for-couples.
     title/subtitle/summary: course-specific text used by cards and detail pages.
     navigationLabel: optional shorter title used only in the desktop menu.
     chapters/time: existing informational metadata; lesson counts come from content.
     tags: topic-filter keys such as communication, romance or connection.
     order: smaller numbers appear first inside a category.
     visible: set false to hide the card from /courses without deleting content.
     comingSoon: replaces the card link with a Coming Soon display state.
     featured: includes the course in the desktop Courses navigation.

     These values control display only. They never grant lesson or payment access.
     Modules, lessons and long educational content stay in script.js.
     ================================================== */

  // Edit a visible category name here once; every matching card and heading updates.
  const COURSE_CATEGORIES = [
    { id: "for-her", label: "For Her", order: 1 },
    { id: "for-him", label: "For Him", order: 2 },
    { id: "for-couples", label: "For Couples", order: 3 }
  ];

  // Topic filters preserve the existing /courses?filter=... links.
  const COURSE_FILTERS = [
    { id: "all", label: "All" },
    ...COURSE_CATEGORIES.map(({ id, label }) => ({ id, label })),
    { id: "communication", label: "Communication" },
    { id: "romance", label: "Romance" },
    { id: "connection", label: "Connection" }
  ];

  const COURSE_CATALOG = [
    /* ===== FOR HER ===== */
    // Add future For Her course metadata here and set category: "for-her".

    /* ===== FOR HIM ===== */
    {
      id: "better-communication",
      slug: "better-communication",
      category: "for-him",
      title: "THE INTIMACY BLUEPRINT FOR MEN",
      navigationLabel: "Better Communication",
      subtitle: "Become More Present. More Connected. More Confident.",
      summary: "The Intimacy Blueprint for Men is not designed to teach you how to manipulate attraction, perform masculinity, or become someone you are not It is designed to help you develop the internal and relational skills required to create deeper, healthier, more intentional intimacy.",
      chapters: 7,
      time: "",
      tags: ["communication"],
      order: 1,
      visible: true,
      comingSoon: false,
      featured: true
    },
    {
      id: "confident-connection",
      slug: "confident-connection",
      category: "for-him",
      title: "Confident Connection",
      subtitle: "Build confidence & presence",
      summary: "Courses focused on confidence, communication, intimacy, and being a better partner.",
      chapters: 8,
      time: "~25 min",
      tags: ["connection"],
      order: 2,
      visible: true,
      comingSoon: false,
      featured: true
    },
    {
      id: "art-of-romance",
      slug: "art-of-romance",
      category: "for-him",
      title: "The Art of Romance",
      subtitle: "Create small romantic moments",
      summary: "Turn everyday moments into meaningful romantic experiences.",
      chapters: 8,
      time: "~25 min",
      tags: ["romance"],
      order: 3,
      visible: true,
      comingSoon: false,
      featured: true
    },
    {
      id: "how-to-last-longer",
      // This unusual slug preserves the existing direct route exactly.
      slug: "How to last longer",
      category: "for-him",
      title: "How to last longer",
      subtitle: "Create small romantic moments",
      summary: "Turn everyday moments into meaningful romantic experiences.",
      chapters: 8,
      time: "~25 min",
      tags: ["romance"],
      order: 4,
      visible: true,
      comingSoon: false,
      featured: false
    },

    /* ===== FOR COUPLES ===== */
    // Add future For Couples course metadata here and set category: "for-couples".
  ];

  const CATEGORY_IDS = new Set(COURSE_CATEGORIES.map(({ id }) => id));

  // Return clear editing warnings without rejecting safe optional omissions.
  function validateCourseCatalog(courses = COURSE_CATALOG) {
    if (!Array.isArray(courses)) return ["Course catalog must be an array."];

    const issues = [];
    const ids = new Set();
    const slugs = new Set();

    courses.forEach((course, index) => {
      const location = `Course ${index + 1}`;
      if (!course || typeof course !== "object" || Array.isArray(course)) {
        issues.push(`${location}: entry must be an object.`);
        return;
      }

      if (typeof course.id !== "string" || !course.id.trim()) {
        issues.push(`${location}: id is required.`);
      } else if (ids.has(course.id)) {
        issues.push(`${location}: duplicate id "${course.id}".`);
      } else {
        ids.add(course.id);
      }

      if (typeof course.slug !== "string" || !course.slug.trim()) {
        issues.push(`${location}: slug is required.`);
      } else if (slugs.has(course.slug)) {
        issues.push(`${location}: duplicate slug "${course.slug}".`);
      } else {
        slugs.add(course.slug);
      }

      if (typeof course.title !== "string" || !course.title.trim()) {
        issues.push(`${location}: title is required.`);
      }
      if (!CATEGORY_IDS.has(course.category)) {
        issues.push(`${location}: invalid category "${String(course.category)}".`);
      }
      if (!Number.isFinite(course.order) || course.order < 0) {
        issues.push(`${location}: order must be a non-negative number.`);
      }
    });

    return issues;
  }

  // Invalid required fields are omitted from rendering so one typo cannot break the page.
  function buildSafeCatalog(courses) {
    const safeCourses = [];
    const ids = new Set();
    const slugs = new Set();

    courses.forEach((course) => {
      const isSafe = course
        && typeof course === "object"
        && typeof course.id === "string"
        && course.id.trim()
        && !ids.has(course.id)
        && typeof course.slug === "string"
        && course.slug.trim()
        && !slugs.has(course.slug)
        && typeof course.title === "string"
        && course.title.trim()
        && CATEGORY_IDS.has(course.category)
        && Number.isFinite(course.order)
        && course.order >= 0;

      if (!isSafe) return;
      ids.add(course.id);
      slugs.add(course.slug);
      safeCourses.push(Object.freeze({ ...course, tags: Object.freeze([...(course.tags || [])]) }));
    });

    return Object.freeze(safeCourses);
  }

  const validationIssues = validateCourseCatalog();
  if (validationIssues.length && typeof console !== "undefined") {
    console.warn(`Course catalog warnings:\n${validationIssues.join("\n")}`);
  }

  const safeCatalog = buildSafeCatalog(COURSE_CATALOG);

  function getCategory(categoryId) {
    return COURSE_CATEGORIES.find(({ id }) => id === categoryId) || null;
  }

  function getCourseBySlug(slug) {
    return safeCatalog.find((course) => course.slug === slug) || null;
  }

  function matchesFilter(course, filterId) {
    if (!filterId || filterId === "all") return true;
    if (CATEGORY_IDS.has(filterId)) return course.category === filterId;
    return Array.isArray(course.tags) && course.tags.includes(filterId);
  }

  function selectVisibleCourses(courses, filterId = "all") {
    if (!Array.isArray(courses)) return [];
    return courses
      .filter((course) => course.visible !== false && matchesFilter(course, filterId))
      .slice()
      .sort((left, right) => {
        const categoryOrder = (getCategory(left.category)?.order || 0) - (getCategory(right.category)?.order || 0);
        return categoryOrder || left.order - right.order || left.title.localeCompare(right.title);
      });
  }

  function getVisibleCourses(filterId = "all") {
    return selectVisibleCourses(safeCatalog, filterId);
  }

  function getFeaturedCourses() {
    return getVisibleCourses().filter((course) => course.featured && !course.comingSoon);
  }

  globalScope.FlirtyFlipCourseCatalog = Object.freeze({
    categories: Object.freeze(COURSE_CATEGORIES.map((category) => Object.freeze({ ...category }))),
    filters: Object.freeze(COURSE_FILTERS.map((filter) => Object.freeze({ ...filter }))),
    courses: safeCatalog,
    validationIssues: Object.freeze([...validationIssues]),
    validateCourseCatalog,
    getCategory,
    getCourseBySlug,
    getVisibleCourses,
    getFeaturedCourses,
    selectVisibleCourses,
    matchesFilter
  });
})(typeof window !== "undefined" ? window : globalThis);
