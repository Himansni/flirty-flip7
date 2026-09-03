import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const catalogSource = await readFile(new URL("../course-catalog.js", import.meta.url), "utf8");
const scriptSource = await readFile(new URL("../script.js", import.meta.url), "utf8");
const html = await readFile(new URL("../index.html", import.meta.url), "utf8");

function loadCatalog() {
  const warnings = [];
  const context = vm.createContext({
    console: { warn(message) { warnings.push(String(message)); } }
  });
  vm.runInContext(catalogSource, context, { filename: "course-catalog.js" });
  return { catalog: context.FlirtyFlipCourseCatalog, warnings };
}

test("course catalog has unique IDs and slugs with no validation warnings", () => {
  const { catalog, warnings } = loadCatalog();
  const courses = Array.from(catalog.courses);

  assert.equal(catalog.validationIssues.length, 0);
  assert.equal(warnings.length, 0);
  assert.equal(new Set(courses.map(({ id }) => id)).size, courses.length);
  assert.equal(new Set(courses.map(({ slug }) => slug)).size, courses.length);
});

test("course categories use the three stable editable category definitions", () => {
  const { catalog } = loadCatalog();
  assert.deepEqual(
    Array.from(catalog.categories, ({ id, label }) => [id, label]),
    [["for-her", "For Her"], ["for-him", "For Him"], ["for-couples", "For Couples"]]
  );
  assert.ok(Array.from(catalog.courses).every(({ category }) => catalog.getCategory(category)));
});

test("all existing course titles and direct slugs remain available", () => {
  const { catalog } = loadCatalog();
  const expected = new Map([
    ["better-communication", "THE INTIMACY BLUEPRINT FOR MEN"],
    ["confident-connection", "Confident Connection"],
    ["art-of-romance", "The Art of Romance"],
    ["How to last longer", "How to last longer"]
  ]);

  for (const [slug, title] of expected) {
    assert.equal(catalog.getCourseBySlug(slug)?.title, title);
  }
  assert.equal(catalog.getCourseBySlug("not-a-course"), null);
});

test("visible courses filter and sort by category then editable order", () => {
  const { catalog } = loadCatalog();
  const visibleForHim = catalog.getVisibleCourses("for-him");

  assert.deepEqual(Array.from(visibleForHim, ({ order }) => order), [1, 2, 3, 4]);
  assert.ok(visibleForHim.every(({ category }) => category === "for-him"));
  assert.deepEqual(
    Array.from(catalog.getVisibleCourses("romance"), ({ slug }) => slug),
    ["art-of-romance", "How to last longer"]
  );
});

test("visible false hides a catalog card without deleting its metadata", () => {
  const { catalog } = loadCatalog();
  const hiddenCourse = { ...catalog.courses[0], visible: false };

  assert.equal(catalog.selectVisibleCourses([hiddenCourse]).length, 0);
  assert.equal(catalog.getCourseBySlug(hiddenCourse.slug)?.slug, hiddenCourse.slug);
});

test("catalog validation catches duplicate identity and required-field mistakes", () => {
  const { catalog } = loadCatalog();
  const sample = { id: "one", slug: "one", title: "One", category: "for-him", order: 1 };
  const issues = Array.from(catalog.validateCourseCatalog([
    sample,
    { ...sample, title: "" },
    { id: "three", slug: "three", title: "Three", category: "unknown", order: -1 }
  ]));

  assert.ok(issues.some((issue) => issue.includes("duplicate id")));
  assert.ok(issues.some((issue) => issue.includes("duplicate slug")));
  assert.ok(issues.some((issue) => issue.includes("title is required")));
  assert.ok(issues.some((issue) => issue.includes("invalid category")));
  assert.ok(issues.some((issue) => issue.includes("order must be")));
});

test("optional summaries and topic tags can be omitted safely", () => {
  const { catalog } = loadCatalog();
  const minimal = { id: "minimal", slug: "minimal", title: "Minimal", category: "for-couples", order: 1 };

  assert.deepEqual(Array.from(catalog.validateCourseCatalog([minimal])), []);
  assert.equal(catalog.matchesFilter(minimal, "communication"), false);
  assert.equal(catalog.selectVisibleCourses([minimal], "for-couples").length, 1);
});

test("catalog data loads before script.js and drives navigation and course renderers", () => {
  assert.ok(html.indexOf('src="/course-catalog.js"') < html.indexOf('src="/script.js"'));
  assert.match(html, /id="course-category-menu"/);
  assert.match(html, /id="course-featured-menu"/);
  assert.match(scriptSource, /courseCatalogApi\?\.getVisibleCourses/);
  assert.match(scriptSource, /courseCatalogApi\?\.getFeaturedCourses/);
  assert.match(scriptSource, /course\.slug/);
  assert.match(scriptSource, /course\.category === category\.id/);
});

test("long lessons remain in the separate content structure", () => {
  assert.match(scriptSource, /const courseContentData = \{/);
  assert.match(scriptSource, /THE CENTRAL IDEA - The central idea of this course is simple/);
  assert.doesNotMatch(catalogSource, /THE CENTRAL IDEA - The central idea of this course is simple/);
});
