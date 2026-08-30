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

test("all prompt pools retain consent-friendly skip language where physical play appears", () => {
  const content = [
    ...catalog.wheel.flatMap((category) => category.outcomes),
    ...catalog.mysteryOutcomes.map((outcome) => outcome.text),
    ...Object.values(catalog.dice).map((outcome) => outcome.text),
    ...catalog.doors.map((outcome) => outcome.text)
  ].join(" ");
  assert.match(content, /skip|pass|optional|choose another/i);
  assert.doesNotMatch(content, /must obey|no refusing|force/i);
});

test("online readiness remains disabled without separate public configuration", () => {
  const readiness = window.FlirtyFlipOnlineGames.getReadiness();
  assert.equal(readiness.ready, false);
  assert.equal(readiness.configPresent, false);
  assert.equal(readiness.status, "Setup required");
  assert.doesNotMatch(onlineSource, /PAIRPLAY_SUPABASE_CONFIG|service[_-]?role/i);
});
