// ========================================
// GAME TURN UI/SESSION INTEGRATION TESTS
// Guard the setup fields, accessible card UI and session-only refresh behavior in the app shell.
// ========================================
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const [html, script, styles] = await Promise.all([
  readFile(new URL("../index.html", import.meta.url), "utf8"),
  readFile(new URL("../script.js", import.meta.url), "utf8"),
  readFile(new URL("../style.css", import.meta.url), "utf8")
]);

test("setup offers two optional nickname fields and a clear skip action", () => {
  assert.match(script, /Your name or nickname/);
  assert.match(script, /Partner’s name or nickname/);
  assert.match(script, /data-player-name="your"/);
  assert.match(script, /data-player-name="partner"/);
  assert.match(script, />Skip names</);
});

test("card shell exposes a compact live turn indicator", () => {
  assert.match(html, /id="turn-pill"/);
  assert.match(html, /id="turn-label">Your Turn</);
  assert.match(html, /id="game-turn-announcer"[^>]*aria-live="polite"[^>]*aria-atomic="true"/);
  assert.match(styles, /\.turn-pill\s*\{/);
  assert.match(styles, /@keyframes turnPillChange/);
  assert.match(styles, /@media \(prefers-reduced-motion: reduce\)/);
});

test("turn resolver loads before the main game controller", () => {
  assert.ok(html.indexOf('src="/game-turn.js"') > -1);
  assert.ok(html.indexOf('src="/game-turn.js"') < html.indexOf('src="/script.js"'));
});

test("nickname refresh state uses only the current game session", () => {
  assert.match(script, /players:\s*\{ \.\.\.gamePlayers \}/);
  assert.match(script, /createGamePlayers\(saved\.players\?\.yourName, saved\.players\?\.partnerName\)/);
  assert.match(script, /sessionStorage\.setItem\(GAME_SESSION_KEY/);
  assert.doesNotMatch(script, /localStorage\.setItem\([^\n]*gamePlayers/);
});

test("card updates use text content and include the turn in keyboard-accessible card labels", () => {
  assert.match(script, /label\.textContent = turn\.label/);
  assert.match(script, /scene\.setAttribute\("aria-label", `\$\{turn\.label\}/);
  assert.match(script, /event\.key === 'Enter' \|\| event\.key === ' '/);
});
