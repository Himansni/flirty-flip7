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

     Safe new course pattern:
       Catalog: id: "my-course", slug: "my-course"
       Content: 'my-course': { outcomes: [...], sections: [...] }
     The catalog id must exactly equal the courseContentData key.
     ================================================== */

  // Edit a visible category name here once; every matching card and heading updates.

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
    {
      id: "how-to-last-longer",
      slug: "How to last longer",
      category: "for-her",
      title: "How to last longer",
      subtitle: "Create small romantic moments",
      summary: "Turn everyday moments into meaningful romantic experiences.",
      chapters: 8,
      time: "~25 min",
      tags: ["romance", "connection", "communication"],
      order: 4,
      visible: false,
      comingSoon: true,
      featured: false,
      entitlement: "free",
      accentColor: "#f48fb1",
      coverStyle: "rose-cards"
    },
    {
      id: "The-Art-of-Receiving-Love",
      // This unusual slug preserves the existing direct route exactly.
      slug: "The-Art-of-Receiving-Love",
      category: "for-her",
      title: "When Loving Him Costs You",
      subtitle: "Create small romantic moments",
      summary: `Love can ask for patience, compromise, vulnerability, forgiveness, and effort.
       But there is a point where effort becomes self-erasure—where keeping the relationship begins costing you your peace, boundaries, friendships, confidence, identity, or ability to trust your own judgment.
         .`,
      chapters: 8,
     // time: "~25 min",
      tags: ["romance" , "connection", "communication"],
      order: 1,
      visible: true,
      comingSoon: false,
      featured: false,
      entitlement: "free",
      accentColor: "#f48fb1",
      coverStyle: "petals"
    },

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
     // time: "",
      tags: ["communication"],
      order: 2,
      visible: true,
      comingSoon: false,
      featured: true,
      entitlement: "free",
      accentColor: "#64b5f6",
      coverStyle: "blueprint"
    },

    //========== ___Finding Love Without Losing Yourself____-----------===========
    {
      id: "confident-connection",
      slug: "confident-connection",
      category: "for-her",
      title: "Finding Love Without Losing Yourself",
      subtitle: "Finding Love Without Losing Yourself teaches a different way to approach relationships:",
      summary: "A healthy relationship should give you room to become more fully yourself—not require you to become smaller, quieter, less ambitious, or less honest to keep someone close. Yet the fear of losing love can make people compromise their needs before they have even recognized what those needs are..",
      chapters: 8,
      time: "~25 min",
      tags: ["connection"],
      order: 1,
      visible: true,
      comingSoon: false,
      featured: true,
      entitlement: "free",
      accentColor: "#ff80ab",
      coverStyle: "rose-cards"
    },

    //========== ___When Love Needs New Rules____-----------===========

    {
      id: "art-of-romance",
      slug: "art-of-romance",
      category: "for-couples",
      title: "When Love Needs New Rules",
      subtitle: "Some relationships do not end because love disappears. They begin to struggle because the way two people have been loving each other no longer works.",
      summary: "When Love Needs New Rules is a course about redesigning the way a relationship functions—not controlling your partner, creating a list of punishments, or using agreements to force someone to stay. It teaches couples how to recognize failing patterns, communicate their needs, establish fair agreements, repair conflict and damaged trust, restore connection, and decide whether the relationship can genuinely support the people they are becoming.",
      chapters: 8,
      time: "~25 min",
      tags: ["romance"],
      order: 5,
      visible: true,
      comingSoon: false,
      featured: false,
      entitlement: "free",
      accentColor: "#ba68c8",
      coverStyle: "rings"
    },
    // -------- "How Men Heal After Goodbye"-------------
    {
      id: "party-ka-din",
      slug: "party-ka-din",
      category: "for-him",
      title: "How Men Heal After Goodbye",
      subtitle: "Create small romantic moments",
      summary: `A breakup can look simple from the outside: two people were together, something stopped working, 
      and now they are apart. Internally, it can dismantle far more than a relationship. 
      A man may lose a daily attachment figure, routines, physical closeness, imagined plans, 
      a familiar source of reassurance, and even a version of himself that existed only inside that relationship..`,
      chapters: 8,
     // time: "~25 min",
      tags: ["romance"],
      order: 3,
      visible: true,
      comingSoon: false,
      featured: false,
      entitlement: "free",
      accentColor: "#4fc3f7",
      coverStyle: "horizon"
    },
    /* ===== FOR COUPLES ===== */
    // Add future For Couples course metadata here and set category: "for-couples".
    /* 2. Add matching course card in COURSE_CATALOG */

    //========== ___The Relationship Worth Staying For____-----------===========

    {
      id: "love-without-losing-yourself",
      slug: "love-without-losing-yourself",
      category: "for-couples",
      title: "The Relationship Worth Staying For",
      subtitle: "How to recognize healthy commitment, repair what can be repaired, and choose a relationship that is genuinely worth building.",
      summary: `Love can make a relationship meaningful, but it cannot answer every question about whether two people should remain together. A couple may care deeply for each other while struggling with recurring conflict, unmet needs, broken trust, incompatible futures, or an imbalance in which one person carries most of the emotional work. Other couples may be facing ordinary difficulties that could become manageable with better communication, mutual responsibility, and a more deliberate approach to commitment.`,
      chapters: 7,
      time: "~45 min",
      tags: ["connection", "communication"],
      order: 7,
      visible: true,
      comingSoon: false,
      featured: true,
      entitlement: "free",
      accentColor: "#ab47bc",
      coverStyle: "infinity"
    },

    //========== ___When She Stops Chasing You____-----------===========

   {
      id: "the-moment-the-chase-ends",
      slug: "the-moment-the-chase-ends",
      category: "for-him",
      title: "When She Stops Chasing You",
      subtitle: `For a long time, her attention may have made the relationship feel secure.After This Section, You Will Be Able To

Evaluate future partners for emotional availability and compatibility rather than chemistry alone.

Communicate reassurance, boundaries, needs, and requests directly.

Build relationship agreements based on reciprocity and fairness.

Recognize pursuit-withdrawal patterns early enough to interrupt them`,

      summary: ` Turn everyday moments into meaningful romantic experiences.After This Section, You Will Be Able To

Evaluate future partners for emotional availability and compatibility rather than chemistry alone.

Communicate reassurance, boundaries, needs, and requests directly.

Build relationship agreements based on reciprocity and fairness.

Recognize pursuit-withdrawal patterns early enough to interrupt them.`,

      chapters: 8,
    //  time: "~25 min",
      tags: ["romance"],
      order: 4,
      visible: true,
      comingSoon: false,
      featured: false,
      entitlement: "free",
      accentColor: "#29b6f6",
      coverStyle: "orbit"
    },


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
      safeCourses.push(Object.freeze({
        ...course,
        entitlement: course.entitlement || "free",
        accentColor: course.accentColor || "#f48fb1",
        coverStyle: course.coverStyle || "rose-cards",
        tags: Object.freeze([...(course.tags || [])])
      }));
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

  function getCourseById(id) {
    return safeCatalog.find((course) => course.id === id) || null;
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
    getCourseById,
    getVisibleCourses,
    getFeaturedCourses,
    selectVisibleCourses,
    matchesFilter
  });
})(typeof window !== "undefined" ? window : globalThis);
