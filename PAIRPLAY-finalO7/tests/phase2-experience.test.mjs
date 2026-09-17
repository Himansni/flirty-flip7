import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const [catalogSource, dataSource, engineSource, scriptSource] = await Promise.all([
  readFile(new URL("../course-catalog.js", import.meta.url), "utf8"),
  readFile(new URL("../couple-games-data.js", import.meta.url), "utf8"),
  readFile(new URL("../couple-games.js", import.meta.url), "utf8"),
  readFile(new URL("../script.js", import.meta.url), "utf8")
]);

const stored = new Map();
const sessionStored = new Map();
let nextRandom = 3;
const fakeWindow = {
  addEventListener() {},
  clearInterval,
  clearTimeout,
  confirm: () => true,
  crypto: { getRandomValues(buffer) { buffer[0] = nextRandom; return buffer; } },
  location: { origin: "https://flirtyflip.com", pathname: "/" },
  matchMedia: () => ({ matches: false }),
  navigator: { vibrate: () => true },
  performance,
  sessionStorage: {
    getItem(key) { return sessionStored.get(key) ?? null; },
    setItem(key, value) { sessionStored.set(key, String(value)); },
    removeItem(key) { sessionStored.delete(key); }
  },
  localStorage: {
    getItem(key) { return stored.get(key) ?? null; },
    setItem(key, value) { stored.set(key, String(value)); }
  },
  setInterval,
  setTimeout
};

const sandbox = { window: fakeWindow, Uint32Array, console };
vm.runInNewContext(catalogSource, sandbox, { filename: "course-catalog.js" });
vm.runInNewContext(dataSource, sandbox, { filename: "couple-games-data.js" });
vm.runInNewContext(engineSource, sandbox, { filename: "couple-games.js" });

const catalog = fakeWindow.FlirtyFlipCourseCatalog;
const gameData = fakeWindow.FlirtyFlipCoupleGameData;
const engine = fakeWindow.FlirtyFlipCoupleGames;

test("Phase 2: getCourseById returns expected course and null for unknown", () => {
  const c = catalog.getCourseById("better-communication");
  assert.ok(c);
  assert.equal(c.id, "better-communication");
  assert.equal(c.category, "for-him");

  assert.equal(catalog.getCourseById("non-existent-course-id"), null);
});

test("Phase 2: course entitlement is 'free' across all courses and decoupled from comingSoon", () => {
  const visible = catalog.getVisibleCourses("all");
  assert.ok(visible.length > 0);
  for (const course of visible) {
    assert.equal(course.entitlement, "free");
    assert.equal(course.comingSoon, false);
    assert.ok(course.accentColor.startsWith("#"));
  }
});

test("Phase 2: Would You Rather is registered and has 24 valid prompt pairs", () => {
  const wyrGame = gameData.games.find((g) => g.id === "would-you-rather");
  assert.ok(wyrGame);
  assert.equal(wyrGame.title, "Would You Rather");
  assert.equal(wyrGame.duration, "3–10 min");

  assert.equal(gameData.wouldYouRather.length, 24);
  for (const item of gameData.wouldYouRather) {
    assert.ok(item.a && item.b && item.topic);
    assert.equal(item.audience, "all-couples");
    assert.ok(item.text.includes("Would you rather:"));
  }
});

test("Phase 2: script.js defines clean route resolution for /play/:mood and /games/:gameId", () => {
  // Verify mood slug mapping exists
  assert.match(scriptSource, /const MOOD_ROUTE_SLUGS = Object\.freeze\(\{/);
  assert.match(scriptSource, /"romantic": "romantic"/);
  assert.match(scriptSource, /"truth-and-dare": "TruthandDare"/);

  // Verify gameId route resolution
  assert.match(scriptSource, /path\.startsWith\(`\$\{ROUTE_PATHS\.games\}\/`\)/);
  assert.match(scriptSource, /name: "game-detail", gameId/);
});

test("Phase 2: analytics events track deck_start, deck_complete, and deduplicated course_complete without PII", () => {
  // Check startGame fires deck_start instead of duplicate game_start
  assert.match(scriptSource, /trackEvent\('deck_start', \{ mood: selectedMood, card_count: selectedLength \}\);/);

  // Check finishGame fires deck_complete
  assert.match(scriptSource, /trackEvent\('deck_complete', \{/);

  // Check finish-course deduplication
  assert.match(scriptSource, /const completedSessionKey = `flirtyflip_completed_\$\{courseId\}`;/);
  assert.match(scriptSource, /trackEvent\('course_complete', \{ course_id: courseId \}\);/);

  // Ensure no PII in tracking calls
  assert.doesNotMatch(scriptSource, /trackEvent\('[^']+', \{[^}]*playerName/);
  assert.doesNotMatch(scriptSource, /trackEvent\('[^']+', \{[^}]*cardText/);
});

test("Phase 2: Would You Rather preserves two-partner secret choice flow with hide answer and match reveal", () => {
  // Verify couple-games contains the secret pass-and-play flow
  assert.match(engineSource, /step === "pass_device"/);
  assert.match(engineSource, /step === "p2_turn"/);
  assert.match(engineSource, /step === "revealed"/);

  // Verify pass the phone screen
  assert.match(engineSource, /Pass the phone to/);
  assert.match(engineSource, /Hand over the device without peeking!/);

  // Verify match / different reveal logic
  assert.match(engineSource, /isMatch = state\.choiceA === state\.choiceB/);
  assert.match(engineSource, /IT'S A MATCH!/);
  assert.match(engineSource, /YOU DIVERGED!/);

  // Verify discussion prompt
  assert.match(engineSource, /Couple Discussion/);

  // Verify haptic feedback feature detection
  assert.match(engineSource, /typeof navigator !== "undefined" && typeof navigator\.vibrate === "function"/);
});

