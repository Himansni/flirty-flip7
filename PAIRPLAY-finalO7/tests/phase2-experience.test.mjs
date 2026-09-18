import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const [catalogSource, dataSource, engineSource, scriptSource, htmlSource, styleSource] = await Promise.all([
  readFile(new URL("../course-catalog.js", import.meta.url), "utf8"),
  readFile(new URL("../couple-games-data.js", import.meta.url), "utf8"),
  readFile(new URL("../couple-games.js", import.meta.url), "utf8"),
  readFile(new URL("../script.js", import.meta.url), "utf8"),
  readFile(new URL("../index.html", import.meta.url), "utf8"),
  readFile(new URL("../style.css", import.meta.url), "utf8")
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

test("Phase 2 Experience: Theme system supports rose, amber, and cosmic with persistence", () => {
  assert.match(scriptSource, /function initTheme\(\)/);
  assert.match(scriptSource, /function setTheme\(theme/);
  assert.match(scriptSource, /"flirtyflip_theme"/);

  // Check supported themes in script
  assert.match(scriptSource, /\["rose", "amber", "cosmic"\]/);

  // Check custom theme event dispatch
  assert.match(scriptSource, /flirtyflip:themechange/);
});

test("Phase 2 Experience: Sound effects are off by default, use Web Audio API synthesis, and no autoplay", () => {
  // Sound is off by default
  assert.match(scriptSource, /let soundEnabled = false;/);
  assert.match(scriptSource, /localStorage\.getItem\("flirtyflip_sound_enabled"\) === "true"/);

  // Uses Web Audio synth without external mp3/wav files
  assert.match(scriptSource, /AudioContext \|\| window\.webkitAudioContext/);
  assert.match(scriptSource, /createOscillator/);
  assert.match(scriptSource, /createGain/);

  // Covers flip, click, and success/match sound synthesis
  assert.match(scriptSource, /type === "flip"/);
  assert.match(scriptSource, /type === "click"/);
  assert.match(scriptSource, /type === "success" \|\| type === "match"/);
});

test("Phase 2 Experience: Voice read-aloud uses Web Speech API and cancels on card navigation", () => {
  assert.match(scriptSource, /function toggleReadAloud\(\)/);
  assert.match(scriptSource, /function stopSpeaking\(\)/);
  assert.match(scriptSource, /SpeechSynthesisUtterance/);

  // Card transitions stop speech
  assert.match(scriptSource, /stopSpeaking\(\);\s*playSound\("flip"\);/);
  assert.match(scriptSource, /stopSpeaking\(\);\s*skipped\+\+;/);
});

test("Phase 2 Experience: Ambient particle system respects prefers-reduced-motion", () => {
  assert.match(scriptSource, /function initAmbientParticles\(\)/);
  assert.match(scriptSource, /prefers-reduced-motion: reduce/);
  assert.match(scriptSource, /ambient-canvas/);
});

test("Phase 2 Experience: Ambient particles render distinct shapes (hearts, stars, embers) with DPI scaling", () => {
  assert.match(scriptSource, /drawHeart/);
  assert.match(scriptSource, /drawStar/);
  assert.match(scriptSource, /drawEmber/);
  assert.match(scriptSource, /drawBokeh/);
  assert.match(scriptSource, /devicePixelRatio/);
  assert.match(scriptSource, /routeDampener/);
});

test("Phase 2 Experience: Sound synthesizer includes reveal and completion fanfare and couple-games is muted by default", () => {
  assert.match(scriptSource, /type === "reveal"/);
  assert.match(scriptSource, /type === "completion"/);
  assert.match(engineSource, /muted: true/);
  assert.match(engineSource, /window\.playSound\(isMatch \? "success" : "reveal"\)/);
});

test("Phase 2 Experience: Dual-mode course rendering system supports structured blocks and conservative string fallback", () => {
  // Core block engine helpers
  assert.match(scriptSource, /function getCourseReadingTime\(course\)/);
  assert.match(scriptSource, /function parseCourseLesson\(content, fallbackTitle/);
  assert.match(scriptSource, /function renderCourseBlocks\(blocks\)/);
  assert.match(scriptSource, /function formatLessonParagraphs\(body\)/);

  // Prototype course 'confident-connection' uses structured blocks
  assert.match(scriptSource, /'confident-connection':/);
  assert.match(scriptSource, /['"]?type['"]?:\s*['"]heading['"]/);
  assert.match(scriptSource, /['"]?type['"]?:\s*['"]quote['"]/);
  assert.match(scriptSource, /['"]?type['"]?:\s*['"]takeaway['"]/);
  assert.match(scriptSource, /['"]?type['"]?:\s*['"]checklist['"]/);
  assert.match(scriptSource, /['"]?type['"]?:\s*['"]steps['"]/);
  assert.match(scriptSource, /['"]?type['"]?:\s*['"]reflection['"]/);
  assert.match(scriptSource, /['"]?type['"]?:\s*['"]worksheet['"]/);
  assert.match(scriptSource, /['"]?type['"]?:\s*['"]scenario['"]/);

  // Course detail masterclass layout
  assert.match(scriptSource, /class="course-meta-chips"/);
  assert.match(scriptSource, /class="learning-outcomes__grid"/);
  assert.match(scriptSource, /class="learning-outcome-card"/);

  // Reader layout supports dual mode
  assert.match(scriptSource, /class="reader-top-bar"/);
  assert.match(scriptSource, /class="reader-chapter-badge"/);
  assert.match(scriptSource, /lesson\.blocks\s*\?\s*renderCourseBlocks\(lesson\.blocks\)\s*:/);

  // Legacy string courses still preserved (e.g. art-of-romance)
  assert.match(scriptSource, /'art-of-romance':/);
  assert.match(scriptSource, /THE CENTRAL IDEA - The central idea of this course is simple/);
});

test("Phase 2 Experience: Mobile drawer auth buttons use high-contrast grouped styling with >= 44px touch targets", () => {
  // Markup preserves element IDs inside drawer-auth-group
  assert.match(htmlSource, /class="drawer-auth-item"/);
  assert.match(htmlSource, /class="drawer-auth-group"/);
  assert.match(htmlSource, /<button[^>]*id="drawer-login"[^>]*class="drawer-btn drawer-btn--primary"[^>]*>/);
  assert.match(htmlSource, /<button[^>]*id="drawer-guest"[^>]*class="drawer-btn drawer-btn--secondary"[^>]*>/);

  // CSS guarantees touch targets and theme harmony
  assert.match(styleSource, /\.drawer-auth-group/);
  assert.match(styleSource, /\.drawer-btn\s*\{[^}]*min-height:\s*48px;/);
  assert.match(styleSource, /\.drawer-btn--primary/);
  assert.match(styleSource, /\.drawer-btn--secondary/);
});
