// ========================================
// LOCAL COUPLE MINI-GAME UNIT TESTS
// Protect the eight-game catalog, Web Crypto randomness and deterministic board rules without a DOM.
// ========================================
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const [dataSource, engineSource, onlineSource] = await Promise.all([
  readFile(new URL("../couple-games-data.js", import.meta.url), "utf8"),
  readFile(new URL("../couple-games.js", import.meta.url), "utf8"),
  readFile(new URL("../couple-games-online.js", import.meta.url), "utf8")
]);

const stored = new Map();
let nextRandom = 7;
const window = {
  addEventListener() {},
  clearInterval,
  clearTimeout,
  confirm: () => true,
  crypto: { getRandomValues(buffer) { buffer[0] = nextRandom; return buffer; } },
  location: { origin: "https://example.test" },
  matchMedia: () => ({ matches: false }),
  performance,
  sessionStorage: {
    getItem(key) { return stored.get(key) ?? null; },
    setItem(key, value) { stored.set(key, value); }
  },
  setInterval,
  setTimeout
};
const sandbox = { window, Uint32Array };
vm.runInNewContext(dataSource, sandbox, { filename: "couple-games-data.js" });
vm.runInNewContext(onlineSource, sandbox, { filename: "couple-games-online.js" });
vm.runInNewContext(engineSource, sandbox, { filename: "couple-games.js" });

const catalog = window.FlirtyFlipCoupleGameData;
const engine = window.FlirtyFlipCoupleGames;

test("catalog exposes exactly the eight approved playable games", () => {
  assert.deepEqual(
    Array.from(catalog.games, (game) => game.id),
    ["tic-tac-toe", "love-toss", "couple-wheel", "rapid-fire", "mystery-box", "reaction-test", "couple-dice", "choose-a-door"]
  );
  for (const game of catalog.games) {
    assert.ok(game.title && game.subtitle && game.description && game.duration);
    assert.equal(engine.hasGame(game.id), true);
  }
  assert.equal(engine.hasGame("not-a-game"), false);
});

test("random outcomes use Web Crypto and stay inside collection bounds", () => {
  assert.doesNotMatch(engineSource, /Math\.random/);
  nextRandom = 11;
  assert.equal(engine.__test.secureRandomIndex(6), 5);
  nextRandom = 0;
  assert.equal(engine.__test.secureRandomIndex(6), 0);
  assert.throws(() => engine.__test.secureRandomIndex(0), /positive collection length/);
});

test("secure shuffle preserves every item exactly once", () => {
  nextRandom = 2;
  const result = Array.from(engine.__test.shuffle(["a", "b", "c", "d"]));
  assert.deepEqual(result.toSorted(), ["a", "b", "c", "d"]);
  assert.equal(new Set(result).size, 4);
});

test("Tic-Tac-Toe detects horizontal, diagonal and draw outcomes", () => {
  const horizontal = engine.__test.evaluateTicTacToe(["heart", "heart", "heart", "", "flame", "", "flame", "", ""]);
  assert.equal(horizontal.winner, "heart");
  assert.deepEqual(Array.from(horizontal.line), [0, 1, 2]);

  const diagonal = engine.__test.evaluateTicTacToe(["flame", "heart", "", "heart", "flame", "", "", "", "flame"]);
  assert.equal(diagonal.winner, "flame");
  assert.deepEqual(Array.from(diagonal.line), [0, 4, 8]);

  const draw = engine.__test.evaluateTicTacToe(["heart", "flame", "heart", "heart", "flame", "flame", "flame", "heart", "heart"]);
  assert.equal(draw.winner, "");
  assert.equal(draw.draw, true);
});

test("shared result lifecycle blocks activation until reveal and completion", () => {
  assert.deepEqual(Array.from(engine.__test.RESULT_STAGES), ["idle", "anticipation", "animating", "settling", "reveal", "completed"]);
  for (const stage of ["anticipation", "animating", "settling"]) {
    assert.equal(engine.__test.isBusyStage(stage), true);
    assert.equal(engine.__test.isResultVisible(stage), false);
  }
  assert.equal(engine.__test.isResultVisible("reveal"), true);
  assert.equal(engine.__test.isResultVisible("completed"), true);
});

test("reduced-motion mode keeps staged feedback but shortens visual waits", () => {
  window.matchMedia = () => ({ matches: true });
  assert.equal(engine.__test.motionDuration(1800, 220), 220);
  window.matchMedia = () => ({ matches: false });
});

test("wheel rotation completes four to seven turns and lands the selected segment under the pointer", () => {
  for (let selected = 0; selected < 6; selected += 1) {
    for (let turns = 4; turns <= 7; turns += 1) {
      const rotation = engine.__test.calculateWheelRotation(0, selected, 6, turns);
      assert.ok(rotation >= turns * 360);
      const normalized = ((rotation % 360) + 360) % 360;
      const expected = (360 - (selected * 60 + 30) + 360) % 360;
      assert.equal(normalized, expected);
    }
  }
});

test("all six dice faces have distinct stable 3D orientations", () => {
  const orientations = Array.from({ length: 6 }, (_, index) => engine.__test.getDiceOrientation(index + 1));
  assert.equal(new Set(orientations.map(({ x, y }) => `${x}:${y}`)).size, 6);
});

test("reaction resolver rejects repeated taps and awards early taps to the other player", () => {
  assert.deepEqual({ ...engine.__test.resolveReactionTap({ phase: "waiting", tapLocked: false, player: 0 }) }, { accepted: true, early: true, winner: 1 });
  assert.deepEqual({ ...engine.__test.resolveReactionTap({ phase: "go", tapLocked: false, player: 1 }) }, { accepted: true, early: false, winner: 1 });
  assert.deepEqual({ ...engine.__test.resolveReactionTap({ phase: "go", tapLocked: true, player: 0 }) }, { accepted: false });
});

test("Reaction Test exposes GET READY followed by the complete five-second countdown", () => {
  assert.deepEqual([6, 5, 4, 3, 2, 1].map(engine.__test.reactionCountdownLabel), ["GET READY", "5", "4", "3", "2", "1"]);
});

test("all prompt pools retain consent-friendly skip language where physical play appears", () => {
  const content = [
    ...catalog.wheel.flatMap((category) => category.outcomes.map((outcome) => outcome.text)),
    ...catalog.mysteryOutcomes.map((outcome) => outcome.text),
    ...Object.values(catalog.dice).map((outcome) => outcome.text),
    ...catalog.doors.map((outcome) => outcome.text)
  ].join(" ");
  assert.match(content, /skip|pass|optional|choose another/i);
  assert.doesNotMatch(content, /must obey|no refusing|force/i);
});

test("every public mini-game prompt is tagged by category and all-couples audience", () => {
  const prompts = [
    ...catalog.wheel.flatMap((category) => category.outcomes),
    ...catalog.rapidPrompts,
    ...catalog.mysteryOutcomes,
    ...Object.values(catalog.dice),
    ...catalog.doors,
    ...Object.values(catalog.coinPrompts),
    ...catalog.reactionRewards,
    catalog.ticTacToeReward
  ];
  for (const prompt of prompts) {
    assert.ok(prompt.category);
    assert.equal(prompt.audience, "all-couples");
    assert.ok(prompt.text);
  }
  assert.doesNotMatch(JSON.stringify(catalog), /18\+|explicit|nude|sex/i);
});

test("animation listeners have a timeout fallback and one cleanup path", () => {
  assert.match(engineSource, /animationend/);
  assert.match(engineSource, /transitionend/);
  assert.match(engineSource, /waitForVisualCompletion/);
  assert.match(engineSource, /clearPendingWork/);
  assert.doesNotMatch(engineSource, /result-modal/);
});

test("online readiness remains disabled without separate public configuration", () => {
  const readiness = window.FlirtyFlipOnlineGames.getReadiness();
  assert.equal(readiness.ready, false);
  assert.equal(readiness.configPresent, false);
  assert.equal(readiness.status, "Setup required");
  assert.doesNotMatch(onlineSource, /PAIRPLAY_SUPABASE_CONFIG|service[_-]?role/i);
});
