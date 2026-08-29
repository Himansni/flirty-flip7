// ========================================
// GAME TURN RESOLVER TESTS
// Protect inclusive nickname, alternating, shared and challenge labels independently of the DOM.
// ========================================
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const source = await readFile(new URL("../game-turn.js", import.meta.url), "utf8");
const sandbox = { window: {} };
vm.runInNewContext(source, sandbox, { filename: "game-turn.js" });
const turns = sandbox.window.FlirtyFlipTurn;

const standardCard = (question) => ["ASK", question];

test("entered nicknames personalize alternating turns", () => {
  const cards = [standardCard("First"), standardCard("Second")];
  const players = turns.createPlayers("Alex", "Priya");

  assert.equal(turns.resolveTurn({ cards, index: 0, players }).label, "Alex’s Turn");
  assert.equal(turns.resolveTurn({ cards, index: 1, players }).label, "Priya’s Turn");
});

test("skipped names use inclusive neutral labels", () => {
  const cards = [standardCard("First"), standardCard("Second")];
  const players = turns.createPlayers("", "");

  assert.equal(turns.resolveTurn({ cards, index: 0, players }).label, "Your Turn");
  assert.equal(turns.resolveTurn({ cards, index: 1, players }).label, "Their Turn");
});

test("shared and challenge cards do not consume the alternating turn", () => {
  const cards = [
    standardCard("First"),
    ["DO", "Take turns sharing one small win each."],
    standardCard("Second"),
    ["CHALLENGE🎯", "Plan a date together."],
    standardCard("Third")
  ];
  const players = turns.createPlayers("Alex", "Priya");

  assert.equal(turns.resolveTurn({ cards, index: 0, players }).label, "Alex’s Turn");
  assert.equal(turns.resolveTurn({ cards, index: 1, players }).label, "Both of You");
  assert.equal(turns.resolveTurn({ cards, index: 2, players }).label, "Priya’s Turn");
  assert.equal(turns.resolveTurn({ cards, index: 3, players }).label, "Team Challenge");
  assert.equal(turns.resolveTurn({ cards, index: 4, players }).label, "Alex’s Turn");
});

test("explicit shared prompts and shared actions use the requested labels", () => {
  assert.equal(turns.resolveTurn({ cards: [["TOGETHER", "Share an answer."]], index: 0 }).label, "Answer Together");
  assert.equal(turns.resolveTurn({ cards: [["DO✦", "Hold hands and breathe together."]], index: 0 }).label, "Both of You");
});

test("challenge card variants always use Team Challenge", () => {
  assert.equal(turns.resolveTurn({ cards: [["CHALLENGE", "Try this."]], index: 0 }).label, "Team Challenge");
  assert.equal(turns.resolveTurn({ cards: [["CHALLENGE🎯", "Try this together."]], index: 0 }).label, "Team Challenge");
});

test("names are sanitized and survive a current-session snapshot round trip", () => {
  const original = turns.createPlayers("  Alex\nRiver  ", " Priya\u0000 ");
  const snapshot = JSON.parse(JSON.stringify({ players: original }));
  const restored = turns.createPlayers(snapshot.players.yourName, snapshot.players.partnerName);

  assert.equal(original.yourName, "AlexRiver");
  assert.equal(original.partnerName, "Priya");
  assert.deepEqual({ ...restored }, { yourName: "AlexRiver", partnerName: "Priya" });
});
