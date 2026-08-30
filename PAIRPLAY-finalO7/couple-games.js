// ========================================
// FLIRTYFLIP LOCAL COUPLE MINI-GAME ENGINE
// This module owns the /games mode selector and eight one-device games.
// Edit game copy in couple-games-data.js; keep routing and the legacy question-card engine in script.js.
// ========================================
(function createCoupleGames(global) {
  "use strict";

  const data = global.FlirtyFlipCoupleGameData;
  const SESSION_KEY = "flirtyflip-couple-games-session-v1";
  const DEFAULT_PLAYERS = Object.freeze({ first: "Player One", second: "Player Two" });
  const WINNING_LINES = Object.freeze([
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ]);
  const runtime = {
    root: null,
    navigate: null,
    gameId: "",
    state: null,
    modal: null,
    activeRound: false,
    timers: new Set(),
    audioContext: null,
    muted: false,
    players: { ...DEFAULT_PLAYERS }
  };

  // Read and write only current-session convenience data. Names never leave this browser tab.
  function readSession() {
    try {
      const saved = JSON.parse(global.sessionStorage?.getItem(SESSION_KEY) || "null");
      if (!saved || typeof saved !== "object") return;
      runtime.players.first = sanitizeName(saved.first) || DEFAULT_PLAYERS.first;
      runtime.players.second = sanitizeName(saved.second) || DEFAULT_PLAYERS.second;
      runtime.muted = Boolean(saved.muted);
    } catch (_) {
      // Storage can be blocked in private contexts; the games still work in memory.
    }
  }

  function writeSession() {
    try {
      global.sessionStorage?.setItem(SESSION_KEY, JSON.stringify({ ...runtime.players, muted: runtime.muted }));
    } catch (_) {
      // Session persistence is optional and must never block play.
    }
  }

  function sanitizeName(value) {
    return String(value || "").replace(/[<>]/g, "").replace(/\s+/g, " ").trim().slice(0, 24);
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // All randomized outcomes use Web Crypto with rejection sampling so every result is unbiased.
  function secureRandomIndex(length) {
    if (!Number.isSafeInteger(length) || length <= 0) throw new RangeError("A positive collection length is required.");
    const cryptoApi = global.crypto;
    if (!cryptoApi || typeof cryptoApi.getRandomValues !== "function") {
      throw new Error("Secure random play is unavailable in this browser.");
    }
    const maximum = 0x100000000;
    const limit = maximum - (maximum % length);
    const buffer = new Uint32Array(1);
    do cryptoApi.getRandomValues(buffer); while (buffer[0] >= limit);
    return buffer[0] % length;
  }

  function shuffle(items) {
    const result = Array.from(items);
    for (let index = result.length - 1; index > 0; index -= 1) {
      const swapIndex = secureRandomIndex(index + 1);
      [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
    }
    return result;
  }

  function evaluateTicTacToe(board) {
    for (const line of WINNING_LINES) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return { winner: board[a], line, draw: false };
      }
    }
    return { winner: "", line: [], draw: board.every(Boolean) };
  }

  function getGame(id) {
    return data?.games?.find((game) => game.id === id) || null;
  }

  function gameUrl(id) {
    return `/games?mode=together&game=${encodeURIComponent(id)}`;
  }

  function clearTimers() {
    runtime.timers.forEach((timer) => {
      global.clearTimeout(timer);
      global.clearInterval(timer);
    });
    runtime.timers.clear();
  }

  function schedule(callback, delay) {
    const timer = global.setTimeout(() => {
      runtime.timers.delete(timer);
      callback();
    }, delay);
    runtime.timers.add(timer);
    return timer;
  }

  function repeat(callback, delay) {
    const timer = global.setInterval(callback, delay);
    runtime.timers.add(timer);
    return timer;
  }

  function stopTimer(timer) {
    if (!timer) return;
    global.clearTimeout(timer);
    global.clearInterval(timer);
    runtime.timers.delete(timer);
  }

  function announce(message) {
    const live = runtime.root?.querySelector("[data-cg-live]");
    if (!live) return;
    live.textContent = "";
    schedule(() => { if (live.isConnected) live.textContent = message; }, 20);
  }

  function playerName(index) {
    return index === 0 ? runtime.players.first : runtime.players.second;
  }

  function setRoundActive(active) {
    runtime.activeRound = Boolean(active);
  }

  // A single result dialog is shared by every game to keep replay and exit behavior consistent.
  function showResult({ eyebrow = "ROUND COMPLETE", title, text, reward = "", replayLabel = "Play Again", chooseLabel = "Choose Another Game", closeLabel = "Close" }) {
    runtime.modal = { eyebrow, title, text, reward, replayLabel, chooseLabel, closeLabel };
    setRoundActive(false);
    renderActiveGame();
    schedule(() => runtime.root?.querySelector("[data-cg-action='play-again']")?.focus(), 20);
    announce(`${title}. ${text}`);
    playTone();
  }

  function resultModalMarkup() {
    if (!runtime.modal) return "";
    return `
      <div class="cg-result-modal" role="presentation">
        <section class="cg-result-modal__panel" role="dialog" aria-modal="true" aria-labelledby="cg-result-title" tabindex="-1">
          <span class="cg-eyebrow">${escapeHtml(runtime.modal.eyebrow)}</span>
          <h2 id="cg-result-title">${escapeHtml(runtime.modal.title)}</h2>
          <p>${escapeHtml(runtime.modal.text)}</p>
          ${runtime.modal.reward ? `<div class="cg-reward">✦ ${escapeHtml(runtime.modal.reward)}</div>` : ""}
          <div class="cg-result-actions">
            <button class="pill-btn" type="button" data-cg-action="play-again">${escapeHtml(runtime.modal.replayLabel)}</button>
            <button class="ghost-btn" type="button" data-cg-route="/games?mode=together">${escapeHtml(runtime.modal.chooseLabel)}</button>
            <button class="cg-text-action" type="button" data-cg-action="close-result">${escapeHtml(runtime.modal.closeLabel)}</button>
          </div>
        </section>
      </div>`;
  }

  function playTone() {
    if (runtime.muted) return;
    try {
      const AudioContext = global.AudioContext || global.webkitAudioContext;
      if (!AudioContext) return;
      runtime.audioContext ||= new AudioContext();
      const oscillator = runtime.audioContext.createOscillator();
      const gain = runtime.audioContext.createGain();
      oscillator.frequency.value = 620;
      gain.gain.setValueAtTime(0.035, runtime.audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, runtime.audioContext.currentTime + 0.12);
      oscillator.connect(gain).connect(runtime.audioContext.destination);
      oscillator.start();
      oscillator.stop(runtime.audioContext.currentTime + 0.12);
    } catch (_) {
      // Sound is enhancement-only; autoplay and privacy restrictions are respected.
    }
  }

  // The mode hub makes local and future online play explicit instead of mixing incompatible flows.
  function renderModeHub() {
    runtime.root.innerHTML = `
      <div class="cg-hub">
        <div class="cg-hub__intro">
          <span class="cg-eyebrow">COUPLE GAMES</span>
          <h2>Choose how you want to play.</h2>
          <p>Share one screen right now, or prepare a private room for two devices.</p>
        </div>
        <div class="cg-mode-grid">
          <a class="cg-mode-card cg-mode-card--together" href="/games?mode=together" data-cg-route="/games?mode=together">
            <span class="cg-mode-card__icon" aria-hidden="true">♡</span>
            <span class="cg-eyebrow">PLAY TOGETHER</span>
            <h3>One device. Two people.</h3>
            <p>Eight quick mini-games made for the couch, a date, or a quiet night in.</p>
            <strong>Choose a game <span aria-hidden="true">→</span></strong>
          </a>
          <a class="cg-mode-card cg-mode-card--online" href="/games?mode=online" data-cg-route="/games?mode=online">
            <span class="cg-mode-card__icon" aria-hidden="true">↗</span>
            <span class="cg-eyebrow">PLAY ONLINE</span>
            <h3>Two devices. One private room.</h3>
            <p>Secure Realtime rooms are shown only after the dedicated online service is configured and verified.</p>
            <strong>Check availability <span aria-hidden="true">→</span></strong>
          </a>
        </div>
      </div>`;
  }

  // Local setup collects optional nicknames and renders the canonical eight-game catalog.
  function renderTogetherCatalog() {
    const first = runtime.players.first === DEFAULT_PLAYERS.first ? "" : runtime.players.first;
    const second = runtime.players.second === DEFAULT_PLAYERS.second ? "" : runtime.players.second;
    runtime.root.innerHTML = `
      <div class="cg-catalog">
        <section class="cg-player-setup" aria-labelledby="cg-player-title">
          <div>
            <span class="cg-eyebrow">OPTIONAL NICKNAMES</span>
            <h2 id="cg-player-title">Who is playing?</h2>
            <p>Names stay in this tab and are never sent to FlirtyFlip or Supabase.</p>
          </div>
          <div class="cg-player-fields">
            <label>Player one <input type="text" maxlength="24" autocomplete="off" placeholder="Player One" value="${escapeHtml(first)}" data-cg-input="player-first"></label>
            <label>Player two <input type="text" maxlength="24" autocomplete="off" placeholder="Player Two" value="${escapeHtml(second)}" data-cg-input="player-second"></label>
          </div>
        </section>
        <div class="cg-section-heading">
          <div><span class="cg-eyebrow">PLAY TOGETHER</span><h2>Pick your next little adventure.</h2></div>
          <p>No login, no scoreboards, no pressure. Every challenge can be skipped.</p>
        </div>
        <div class="cg-game-grid">
          ${data.games.map((game, index) => `
            <a class="cg-game-card" style="--cg-accent:${game.accent}" href="${gameUrl(game.id)}" data-cg-route="${gameUrl(game.id)}">
              <span class="cg-game-card__number">0${index + 1}</span>
              <span class="cg-game-card__icon" aria-hidden="true">${escapeHtml(game.icon)}</span>
              <span class="cg-eyebrow">${escapeHtml(game.subtitle)}</span>
              <h3>${escapeHtml(game.title)}</h3>
              <p>${escapeHtml(game.description)}</p>
              <span class="cg-game-card__footer"><small>${escapeHtml(game.duration)}</small><strong>Play <span aria-hidden="true">→</span></strong></span>
            </a>`).join("")}
        </div>
      </div>`;
  }

  // Online mode never falls back to fake room codes or the production authentication client.
  function renderOnlineSetup() {
    const readiness = global.FlirtyFlipOnlineGames?.getReadiness?.() || {
      ready: false,
      status: "Setup required",
      reason: "The dedicated online service is not configured."
    };
    runtime.root.innerHTML = `
      <section class="cg-online-state" aria-labelledby="cg-online-title">
        <div class="cg-online-state__signal" aria-hidden="true"><span></span><span></span></div>
        <span class="cg-status-badge">${escapeHtml(readiness.status)}</span>
        <h2 id="cg-online-title">Private online rooms are not enabled yet.</h2>
        <p>${escapeHtml(readiness.reason)}</p>
        <div class="cg-online-safety">
          <strong>What happens next</strong>
          <ul>
            <li>A dedicated Supabase Realtime project is configured.</li>
            <li>Authenticated two-player room policies are applied and reviewed.</li>
            <li>Two separate browser sessions pass expiry and disconnect testing.</li>
          </ul>
        </div>
        <a class="pill-btn" href="/games?mode=together" data-cg-route="/games?mode=together">Play Together Instead</a>
      </section>`;
  }

  function gameShell(game, body) {
    return `
      <div class="cg-play-page" style="--cg-accent:${game.accent}">
        <div class="cg-game-topbar">
          <button class="cg-back" type="button" data-cg-route="/games?mode=together" aria-label="Exit ${escapeHtml(game.title)}">← Exit</button>
          <div><span class="cg-eyebrow">${escapeHtml(game.subtitle)}</span><strong>${escapeHtml(game.title)}</strong></div>
          <button class="cg-sound" type="button" data-cg-action="toggle-sound" aria-pressed="${runtime.muted}" aria-label="${runtime.muted ? "Turn sound on" : "Mute sound"}">${runtime.muted ? "Sound off" : "Sound on"}</button>
        </div>
        <div class="cg-game-stage">${body}</div>
        <p class="cg-consent-note">Play only what feels good for both of you. Either person can pause, skip, or choose another game.</p>
        <div class="sr-only" aria-live="polite" aria-atomic="true" data-cg-live></div>
        ${resultModalMarkup()}
      </div>`;
  }

  function createInitialState(gameId) {
    if (gameId === "tic-tac-toe") return { board: Array(9).fill(""), current: 0, outcome: null };
    if (gameId === "love-toss") return { heads: data.coinDefaults.heads, tails: data.coinDefaults.tails, face: "", flipping: false };
    if (gameId === "couple-wheel") return { rotation: 0, selected: -1, outcome: "", spinning: false };
    if (gameId === "rapid-fire") return { phase: "idle", countdown: 3, remaining: 10, prompt: data.rapidPrompts[secureRandomIndex(data.rapidPrompts.length)], timer: null, startedAt: 0 };
    if (gameId === "mystery-box") return { boxes: shuffle(data.mysteryOutcomes).slice(0, 8), opened: [], selected: -1 };
    if (gameId === "reaction-test") return { phase: "idle", signalAt: 0, waitTimer: null, winner: -1, reaction: 0 };
    if (gameId === "couple-dice") return { value: 1, rolling: false, outcome: null };
    if (gameId === "choose-a-door") return { doors: shuffle(data.doors).slice(0, 3), selected: -1, revealed: false };
    return {};
  }

  function renderActiveGame() {
    if (!runtime.root || !runtime.gameId) return;
    const game = getGame(runtime.gameId);
    if (!game) return;
    const renderers = {
      "tic-tac-toe": renderTicTacToe,
      "love-toss": renderLoveToss,
      "couple-wheel": renderWheel,
      "rapid-fire": renderRapidFire,
      "mystery-box": renderMysteryBox,
      "reaction-test": renderReactionTest,
      "couple-dice": renderDice,
      "choose-a-door": renderDoors
    };
    runtime.root.innerHTML = gameShell(game, renderers[runtime.gameId]());
  }

  // Tic-Tac-Toe uses deterministic win/draw rules and alternates Heart and Flame turns.
  function renderTicTacToe() {
    const state = runtime.state;
    const outcome = state.outcome;
    const winningLineIndex = outcome?.winner ? WINNING_LINES.findIndex((line) => line.every((cell, index) => cell === outcome.line[index])) : -1;
    const turn = outcome ? (outcome.draw ? "It’s a draw" : `${playerName(outcome.winner === "heart" ? 0 : 1)} wins`) : `${playerName(state.current)}’s turn`;
    return `
      <section class="cg-ttt ${outcome?.winner ? "is-celebrating" : ""}" aria-labelledby="cg-game-heading">
        <div class="cg-game-copy"><span class="cg-turn-pill">${escapeHtml(turn)}</span><h1 id="cg-game-heading">Heart meets Flame.</h1><p>First to connect three wins the privilege of choosing what comes next.</p></div>
        <div class="cg-ttt-board" role="grid" aria-label="Tic-Tac-Toe board">
          ${winningLineIndex >= 0 ? `<span class="cg-winning-line cg-winning-line--${winningLineIndex}" aria-hidden="true"></span>` : ""}
          ${state.board.map((cell, index) => {
            const isWinning = outcome?.line?.includes(index);
            const symbol = cell === "heart" ? "♡" : cell === "flame" ? "🔥" : "";
            return `<button type="button" role="gridcell" class="cg-ttt-cell ${cell ? `is-${cell}` : ""} ${isWinning ? "is-winning" : ""}" data-cg-action="ttt-cell" data-index="${index}" ${cell || outcome ? "disabled" : ""} aria-label="${cell ? `${cell} occupies cell ${index + 1}` : `Empty cell ${index + 1}`}">${symbol}</button>`;
          }).join("")}
        </div>
        <div class="cg-player-key"><span><b>♡</b>${escapeHtml(playerName(0))}</span><span><b>🔥</b>${escapeHtml(playerName(1))}</span></div>
      </section>`;
  }

  // Love Toss accepts optional custom outcomes, then resolves them with Web Crypto.
  function renderLoveToss() {
    const state = runtime.state;
    return `
      <section class="cg-toss" aria-labelledby="cg-game-heading">
        <div class="cg-game-copy"><span class="cg-eyebrow">LET CHANCE CHOOSE</span><h1 id="cg-game-heading">A fair little flip.</h1><p>Give both sides an outcome, or keep the defaults.</p></div>
        <div class="cg-toss-layout">
          <div class="cg-coin ${state.flipping ? "is-flipping" : ""}" aria-label="${state.face ? `${state.face} won` : "Coin ready to flip"}"><span>${state.face === "tails" ? "✦" : "♡"}</span></div>
          <div class="cg-outcome-fields">
            <label>Heart side<input type="text" maxlength="80" value="${escapeHtml(state.heads)}" data-cg-input="coin-heads" ${state.flipping ? "disabled" : ""}></label>
            <label>Star side<input type="text" maxlength="80" value="${escapeHtml(state.tails)}" data-cg-input="coin-tails" ${state.flipping ? "disabled" : ""}></label>
            <button class="pill-btn" type="button" data-cg-action="flip-coin" ${state.flipping ? "disabled" : ""}>${state.flipping ? "Flipping…" : "Flip the Coin"}</button>
          </div>
        </div>
      </section>`;
  }

  // The wheel's visible rotation is calculated from the exact securely-selected segment.
  function renderWheel() {
    const state = runtime.state;
    const segmentSize = 100 / data.wheel.length;
    const segments = data.wheel.map((item, index) => `${item.color} ${index * segmentSize}% ${(index + 1) * segmentSize}%`).join(", ");
    return `
      <section class="cg-wheel-game" aria-labelledby="cg-game-heading">
        <div class="cg-game-copy"><span class="cg-eyebrow">SIX POSSIBILITIES</span><h1 id="cg-game-heading">Spin toward something new.</h1><p>Questions, dares, compliments and free passes—all optional.</p></div>
        <div class="cg-wheel-wrap">
          <div class="cg-wheel-pointer" aria-hidden="true"></div>
          <div class="cg-wheel" style="--wheel:${segments}; transform:rotate(${state.rotation}deg)" aria-label="Six-category couple wheel">
            ${data.wheel.map((item, index) => `<span style="--i:${index}">${escapeHtml(item.label)}</span>`).join("")}
          </div>
          <button class="pill-btn" type="button" data-cg-action="spin-wheel" ${state.spinning ? "disabled" : ""}>${state.spinning ? "Spinning…" : "Spin the Wheel"}</button>
        </div>
      </section>`;
  }

  // Rapid Fire uses a three-second preparation count and a ten-second pausable round timer.
  function renderRapidFire() {
    const state = runtime.state;
    const display = state.phase === "countdown" ? state.countdown : state.remaining.toFixed(1);
    const progress = state.phase === "countdown" ? 100 : Math.max(0, state.remaining * 10);
    const primaryAction = state.phase === "idle" || state.phase === "finished" ? "rapid-start" : state.phase === "running" ? "rapid-pause" : state.phase === "paused" ? "rapid-resume" : "";
    const primaryLabel = state.phase === "idle" || state.phase === "finished" ? "Start Round" : state.phase === "running" ? "Pause" : state.phase === "paused" ? "Resume" : "Get Ready…";
    return `
      <section class="cg-rapid" aria-labelledby="cg-game-heading">
        <div class="cg-game-copy"><span class="cg-eyebrow">ANSWER TOGETHER</span><h1 id="cg-game-heading">Ten seconds. Go with your first thought.</h1></div>
        <article class="cg-prompt-card"><span class="cg-turn-pill">Both of You</span><p>${escapeHtml(state.prompt)}</p></article>
        <div class="cg-timer" aria-label="${display} seconds remaining"><strong class="cg-timer__value">${display}</strong><span>seconds</span><div><i style="width:${progress}%"></i></div></div>
        <div class="cg-control-row">
          <button class="pill-btn" type="button" data-cg-action="${primaryAction}" ${state.phase === "countdown" ? "disabled" : ""}>${primaryLabel}</button>
          <button class="ghost-btn" type="button" data-cg-action="rapid-next">Next Prompt</button>
          <button class="cg-text-action" type="button" data-cg-action="rapid-restart">Restart</button>
        </div>
      </section>`;
  }

  // Mystery Box shuffles a larger safe pool and reveals each of eight boxes at most once.
  function renderMysteryBox() {
    const state = runtime.state;
    const selected = state.selected >= 0 ? state.boxes[state.selected] : null;
    return `
      <section class="cg-mystery" aria-labelledby="cg-game-heading">
        <div class="cg-game-copy"><span class="cg-eyebrow">PICK ONE</span><h1 id="cg-game-heading">Eight boxes. No repeats.</h1><p>Every reveal is optional. Choose another box whenever a challenge does not feel right.</p></div>
        <div class="cg-box-grid">
          ${state.boxes.map((outcome, index) => {
            const opened = state.opened.includes(index);
            return `<button class="cg-mystery-box ${opened ? "is-open" : ""}" type="button" data-cg-action="open-box" data-index="${index}" ${opened ? "disabled" : ""} aria-label="${opened ? `Box ${index + 1} opened: ${outcome.type}` : `Open mystery box ${index + 1}`}"><span>${opened ? "✦" : index + 1}</span><small>${opened ? escapeHtml(outcome.type) : "Mystery"}</small></button>`;
          }).join("")}
        </div>
        ${selected ? `<article class="cg-inline-result"><span>${escapeHtml(selected.type)}</span><p>${escapeHtml(selected.text)}</p></article>` : ""}
        <button class="cg-text-action" type="button" data-cg-action="reset-boxes">Reset Round</button>
      </section>`;
  }

  // Reaction Test uses a cryptographically selected wait and performance.now for local timing.
  function renderReactionTest() {
    const state = runtime.state;
    const status = state.phase === "waiting" ? "Wait for it…" : state.phase === "go" ? "TAP NOW" : state.phase === "done" ? `${playerName(state.winner)} wins` : "Start when both players are ready";
    return `
      <section class="cg-reaction ${state.phase === "go" ? "is-go" : ""}" aria-labelledby="cg-game-heading">
        <div class="cg-game-copy"><span class="cg-eyebrow">REACTION TEST</span><h1 id="cg-game-heading">Who’s faster?</h1><p>This measures two taps on one device. Network and device latency make it unsuitable for online competition.</p></div>
        <div class="cg-reaction-status" role="status">${escapeHtml(status)}</div>
        <div class="cg-reaction-zones">
          <button type="button" data-cg-action="reaction-tap" data-player="0" ${state.phase === "idle" || state.phase === "done" ? "disabled" : ""}><span>${escapeHtml(playerName(0))}</span><strong>TAP</strong></button>
          <button type="button" data-cg-action="reaction-tap" data-player="1" ${state.phase === "idle" || state.phase === "done" ? "disabled" : ""}><span>${escapeHtml(playerName(1))}</span><strong>TAP</strong></button>
        </div>
        <button class="pill-btn" type="button" data-cg-action="reaction-start" ${state.phase === "waiting" || state.phase === "go" ? "disabled" : ""}>${state.phase === "done" ? "Race Again" : "Start Race"}</button>
      </section>`;
  }

  // Couple Dice maps every face to a stable consent-friendly category and prompt.
  function renderDice() {
    const state = runtime.state;
    return `
      <section class="cg-dice-game" aria-labelledby="cg-game-heading">
        <div class="cg-game-copy"><span class="cg-eyebrow">ROLL FOR TWO</span><h1 id="cg-game-heading">Let the dice decide.</h1><p>Question, compliment, laugh, challenge, connection or wild card.</p></div>
        <div class="cg-die ${state.rolling ? "is-rolling" : ""}" data-face="${state.value}" aria-label="Die showing ${state.value}">
          ${Array.from({ length: 9 }, (_, index) => `<i data-pip="${index + 1}"></i>`).join("")}
        </div>
        ${state.outcome ? `<article class="cg-inline-result"><span>${escapeHtml(state.outcome.type)}</span><p>${escapeHtml(state.outcome.text)}</p></article>` : ""}
        <button class="pill-btn" type="button" data-cg-action="roll-dice" ${state.rolling ? "disabled" : ""}>${state.rolling ? "Rolling…" : "Roll the Dice"}</button>
      </section>`;
  }

  // Choose a Door locks one choice per round and reshuffles all outcomes before replay.
  function renderDoors() {
    const state = runtime.state;
    return `
      <section class="cg-doors" aria-labelledby="cg-game-heading">
        <div class="cg-game-copy"><span class="cg-eyebrow">ONE CHOICE</span><h1 id="cg-game-heading">Choose a door.</h1><p>The outcome is fixed before you pick. No peeking—but you can always pass.</p></div>
        <div class="cg-door-grid">
          ${state.doors.map((outcome, index) => {
            const selected = state.selected === index;
            return `<button type="button" class="cg-door ${selected ? "is-open" : ""}" data-cg-action="choose-door" data-index="${index}" ${state.revealed ? "disabled" : ""} aria-label="${selected ? `Door ${index + 1}: ${outcome.type}` : `Choose door ${index + 1}`}"><span class="cg-door__number">0${index + 1}</span><span class="cg-door__panel"><i></i><strong>${selected ? escapeHtml(outcome.type) : "Open"}</strong></span></button>`;
          }).join("")}
        </div>
        ${state.revealed ? `<article class="cg-inline-result"><span>${escapeHtml(state.doors[state.selected].type)}</span><p>${escapeHtml(state.doors[state.selected].text)}</p></article>` : ""}
      </section>`;
  }

  function resetCurrentGame() {
    clearTimers();
    runtime.modal = null;
    runtime.state = createInitialState(runtime.gameId);
    setRoundActive(false);
    renderActiveGame();
  }

  function handleTicTacToe(index) {
    const state = runtime.state;
    if (!Number.isInteger(index) || index < 0 || index > 8 || state.board[index] || state.outcome) return;
    state.board[index] = state.current === 0 ? "heart" : "flame";
    setRoundActive(true);
    const outcome = evaluateTicTacToe(state.board);
    if (outcome.winner || outcome.draw) {
      state.outcome = outcome;
      renderActiveGame();
      const title = outcome.draw ? "A perfect draw" : `${playerName(outcome.winner === "heart" ? 0 : 1)} wins`;
      schedule(() => showResult({ title, text: outcome.draw ? "Heart and Flame were evenly matched." : "Three connected symbols ended the round.", reward: "Choose the next question or game" }), 520);
      return;
    }
    state.current = state.current === 0 ? 1 : 0;
    renderActiveGame();
    announce(`${playerName(state.current)}’s turn`);
  }

  function flipCoin() {
    const state = runtime.state;
    if (state.flipping) return;
    state.flipping = true;
    state.face = "";
    setRoundActive(true);
    renderActiveGame();
    schedule(() => {
      state.face = secureRandomIndex(2) === 0 ? "heads" : "tails";
      state.flipping = false;
      const result = state.face === "heads" ? state.heads : state.tails;
      showResult({ title: state.face === "heads" ? "Heart side" : "Star side", text: result, replayLabel: "Flip Again" });
    }, 1050);
  }

  function spinWheel() {
    const state = runtime.state;
    if (state.spinning) return;
    const selected = secureRandomIndex(data.wheel.length);
    const segmentDegrees = 360 / data.wheel.length;
    const currentTurns = Math.ceil(state.rotation / 360);
    state.selected = selected;
    state.rotation = ((currentTurns + 5) * 360) + (360 - (selected * segmentDegrees + segmentDegrees / 2));
    state.spinning = true;
    setRoundActive(true);
    renderActiveGame();
    schedule(() => {
      const category = data.wheel[selected];
      state.outcome = category.outcomes[secureRandomIndex(category.outcomes.length)];
      state.spinning = false;
      showResult({ eyebrow: category.label.toUpperCase(), title: category.label, text: state.outcome, replayLabel: "Spin Again", closeLabel: "Skip" });
    }, 2250);
  }

  function stopRapidTimer() {
    stopTimer(runtime.state?.timer);
    if (runtime.state) runtime.state.timer = null;
  }

  function startRapidCountdown() {
    const state = runtime.state;
    stopRapidTimer();
    state.phase = "countdown";
    state.countdown = 3;
    state.remaining = 10;
    setRoundActive(true);
    renderActiveGame();
    state.timer = repeat(() => {
      state.countdown -= 1;
      if (state.countdown <= 0) {
        stopRapidTimer();
        state.phase = "running";
        state.startedAt = global.performance.now();
        renderActiveGame();
        announce("Go. Ten seconds.");
        startRapidClock();
      } else {
        renderActiveGame();
        announce(String(state.countdown));
      }
    }, 1000);
  }

  function startRapidClock() {
    const state = runtime.state;
    state.startedAt = global.performance.now();
    const startingRemaining = state.remaining;
    state.timer = repeat(() => {
      const elapsed = (global.performance.now() - state.startedAt) / 1000;
      state.remaining = Math.max(0, startingRemaining - elapsed);
      const value = runtime.root?.querySelector(".cg-timer__value");
      const bar = runtime.root?.querySelector(".cg-timer i");
      if (value) value.textContent = state.remaining.toFixed(1);
      if (bar) bar.style.width = `${state.remaining * 10}%`;
      if (state.remaining <= 0) {
        stopRapidTimer();
        state.phase = "finished";
        showResult({ title: "Time!", text: "Whatever came first was the right answer for this round.", replayLabel: "Try Again" });
      }
    }, 100);
  }

  function pauseRapid() {
    const state = runtime.state;
    if (state.phase !== "running") return;
    stopRapidTimer();
    state.phase = "paused";
    renderActiveGame();
    announce("Timer paused");
  }

  function resumeRapid() {
    const state = runtime.state;
    if (state.phase !== "paused") return;
    state.phase = "running";
    renderActiveGame();
    startRapidClock();
    announce("Timer resumed");
  }

  function nextRapidPrompt() {
    const state = runtime.state;
    stopRapidTimer();
    let next = state.prompt;
    if (data.rapidPrompts.length > 1) {
      while (next === state.prompt) next = data.rapidPrompts[secureRandomIndex(data.rapidPrompts.length)];
    }
    state.prompt = next;
    state.phase = "idle";
    state.remaining = 10;
    setRoundActive(false);
    renderActiveGame();
  }

  function openMysteryBox(index) {
    const state = runtime.state;
    if (!Number.isInteger(index) || !state.boxes[index] || state.opened.includes(index)) return;
    state.opened.push(index);
    state.selected = index;
    setRoundActive(state.opened.length < state.boxes.length);
    renderActiveGame();
    const result = state.boxes[index];
    schedule(() => showResult({ eyebrow: result.type.toUpperCase(), title: `Box ${index + 1}`, text: result.text, replayLabel: "Reset Round" }), 260);
  }

  function startReaction() {
    const state = runtime.state;
    clearTimers();
    runtime.modal = null;
    state.phase = "waiting";
    state.winner = -1;
    state.reaction = 0;
    setRoundActive(true);
    renderActiveGame();
    const delay = 1500 + secureRandomIndex(3001);
    state.waitTimer = schedule(() => {
      state.phase = "go";
      state.signalAt = global.performance.now();
      renderActiveGame();
      announce("Tap now");
      playTone();
    }, delay);
  }

  function reactionTap(player) {
    const state = runtime.state;
    if (state.phase === "waiting") {
      clearTimers();
      state.phase = "done";
      state.winner = player === 0 ? 1 : 0;
      renderActiveGame();
      showResult({ title: `${playerName(player)} tapped early`, text: `${playerName(state.winner)} wins this round.`, replayLabel: "Race Again" });
      return;
    }
    if (state.phase !== "go") return;
    state.reaction = Math.max(0, Math.round(global.performance.now() - state.signalAt));
    state.winner = player;
    state.phase = "done";
    renderActiveGame();
    showResult({ title: `${playerName(player)} wins`, text: `${state.reaction} ms after the signal on this device.`, replayLabel: "Race Again" });
  }

  function rollDice() {
    const state = runtime.state;
    if (state.rolling) return;
    state.rolling = true;
    state.outcome = null;
    setRoundActive(true);
    renderActiveGame();
    schedule(() => {
      state.value = secureRandomIndex(6) + 1;
      state.outcome = data.dice[state.value];
      state.rolling = false;
      renderActiveGame();
      schedule(() => showResult({ eyebrow: `ROLLED ${state.value}`, title: state.outcome.type, text: state.outcome.text, replayLabel: "Roll Again", chooseLabel: "Change Game" }), 180);
    }, 780);
  }

  function chooseDoor(index) {
    const state = runtime.state;
    if (state.revealed || !Number.isInteger(index) || !state.doors[index]) return;
    state.selected = index;
    state.revealed = true;
    setRoundActive(true);
    renderActiveGame();
    const outcome = state.doors[index];
    schedule(() => showResult({ eyebrow: outcome.type.toUpperCase(), title: `Behind door ${index + 1}`, text: outcome.text, replayLabel: "Choose Again" }), 520);
  }

  // Event delegation keeps one listener per catalog root across every render and replay.
  function handleClick(event) {
    const routeTarget = event.target.closest("[data-cg-route]");
    if (routeTarget) {
      event.preventDefault();
      const destination = routeTarget.dataset.cgRoute;
      runtime.navigate?.(destination);
      return;
    }
    const control = event.target.closest("[data-cg-action]");
    if (!control) return;
    const action = control.dataset.cgAction;
    if (action === "toggle-sound") {
      runtime.muted = !runtime.muted;
      writeSession();
      renderActiveGame();
      return;
    }
    if (action === "close-result") {
      runtime.modal = null;
      renderActiveGame();
      return;
    }
    if (action === "play-again") return resetCurrentGame();
    if (action === "ttt-cell") return handleTicTacToe(Number(control.dataset.index));
    if (action === "flip-coin") return flipCoin();
    if (action === "spin-wheel") return spinWheel();
    if (action === "rapid-start") return startRapidCountdown();
    if (action === "rapid-pause") return pauseRapid();
    if (action === "rapid-resume") return resumeRapid();
    if (action === "rapid-next") return nextRapidPrompt();
    if (action === "rapid-restart") return resetCurrentGame();
    if (action === "open-box") return openMysteryBox(Number(control.dataset.index));
    if (action === "reset-boxes") return resetCurrentGame();
    if (action === "reaction-start") return startReaction();
    if (action === "reaction-tap") return reactionTap(Number(control.dataset.player));
    if (action === "roll-dice") return rollDice();
    if (action === "choose-door") return chooseDoor(Number(control.dataset.index));
  }

  function handleInput(event) {
    const input = event.target.closest("[data-cg-input]");
    if (!input) return;
    const value = input.value.slice(0, Number(input.maxLength) || 80);
    if (input.dataset.cgInput === "player-first") runtime.players.first = sanitizeName(value) || DEFAULT_PLAYERS.first;
    if (input.dataset.cgInput === "player-second") runtime.players.second = sanitizeName(value) || DEFAULT_PLAYERS.second;
    if (input.dataset.cgInput === "coin-heads") runtime.state.heads = value.trim() || data.coinDefaults.heads;
    if (input.dataset.cgInput === "coin-tails") runtime.state.tails = value.trim() || data.coinDefaults.tails;
    writeSession();
  }

  function handleKeydown(event) {
    if (!runtime.modal) return;
    if (event.key === "Escape") {
      event.preventDefault();
      runtime.modal = null;
      renderActiveGame();
      runtime.root?.querySelector(".cg-game-stage button:not(:disabled)")?.focus();
      return;
    }
    if (event.key === "Tab") {
      const controls = Array.from(runtime.root?.querySelectorAll(".cg-result-modal button:not(:disabled)") || []);
      if (!controls.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  }

  function bindRoot(root) {
    if (root.dataset.coupleGamesBound === "true") return;
    root.dataset.coupleGamesBound = "true";
    root.addEventListener("click", handleClick);
    root.addEventListener("input", handleInput);
    root.addEventListener("keydown", handleKeydown);
  }

  // Router integration renders only inside the shared catalog shell and cleans stale rounds first.
  function render(root, { url, navigate } = {}) {
    if (!root || !url) return;
    if (runtime.root && runtime.root !== root) cleanup();
    runtime.root = root;
    runtime.navigate = navigate;
    bindRoot(root);
    readSession();
    const mode = url.searchParams.get("mode") || "";
    const requestedGame = url.searchParams.get("game") || "";
    const nextGame = mode === "together" && getGame(requestedGame) ? requestedGame : "";
    if (nextGame !== runtime.gameId) {
      clearTimers();
      runtime.gameId = nextGame;
      runtime.state = nextGame ? createInitialState(nextGame) : null;
      runtime.modal = null;
      setRoundActive(false);
    }
    if (nextGame) renderActiveGame();
    else if (mode === "together") renderTogetherCatalog();
    else if (mode === "online") renderOnlineSetup();
    else renderModeHub();
  }

  function canNavigate(destination) {
    if (!runtime.activeRound) return true;
    const target = new URL(destination, global.location?.origin || "https://flirtyflip.local");
    const sameGame = target.pathname === "/games" && target.searchParams.get("game") === runtime.gameId;
    if (sameGame) return true;
    return global.confirm("A round is in progress. Leave this game and lose the current round?");
  }

  function cleanup() {
    clearTimers();
    runtime.activeRound = false;
    runtime.modal = null;
    runtime.gameId = "";
    runtime.state = null;
  }

  // Guard browser refresh/close during an active round without affecting the rest of FlirtyFlip.
  global.addEventListener?.("beforeunload", (event) => {
    if (!runtime.activeRound) return;
    event.preventDefault();
    event.returnValue = "";
  });

  global.FlirtyFlipCoupleGames = Object.freeze({
    cleanup,
    canNavigate,
    hasGame: (id) => Boolean(getGame(id)),
    render,
    __test: Object.freeze({ evaluateTicTacToe, secureRandomIndex, shuffle })
  });
})(window);
