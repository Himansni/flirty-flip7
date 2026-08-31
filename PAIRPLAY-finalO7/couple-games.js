// ========================================
// FLIRTYFLIP LOCAL COUPLE MINI-GAME ENGINE
// This module owns /games mode selection and eight one-device games.
// Edit public-safe prompts in couple-games-data.js; the legacy question-card engine remains in script.js.
// ========================================
(function createCoupleGames(global) {
  "use strict";

  const data = global.FlirtyFlipCoupleGameData;
  const SESSION_KEY = "flirtyflip-couple-games-session-v1";
  const RESULT_STAGES = Object.freeze(["idle", "anticipation", "animating", "settling", "reveal", "completed"]);
  const BUSY_STAGES = new Set(["anticipation", "animating", "settling"]);
  const WINNING_LINES = Object.freeze([
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ]);
  const DICE_ORIENTATIONS = Object.freeze({
    1: { x: 0, y: 0 },
    2: { x: 0, y: -90 },
    3: { x: -90, y: 0 },
    4: { x: 90, y: 0 },
    5: { x: 0, y: 90 },
    6: { x: 0, y: 180 }
  });
  const runtime = {
    root: null,
    navigate: null,
    gameId: "",
    state: null,
    result: null,
    stage: "idle",
    activeRound: false,
    turnIndex: 0,
    timers: new Set(),
    disposers: new Set(),
    audioContext: null,
    muted: false,
    players: { first: "", second: "" }
  };

  // Session-only names, turn order and sound preferences never leave this browser tab.
  function readSession() {
    try {
      const saved = JSON.parse(global.sessionStorage?.getItem(SESSION_KEY) || "null");
      if (!saved || typeof saved !== "object") return;
      runtime.players.first = saved.first === "Player One" ? "" : sanitizeName(saved.first);
      runtime.players.second = saved.second === "Player Two" ? "" : sanitizeName(saved.second);
      runtime.muted = Boolean(saved.muted);
      runtime.turnIndex = saved.turnIndex === 1 ? 1 : 0;
    } catch (_) {
      // Storage is optional; private browsing restrictions must never block local play.
    }
  }

  function writeSession() {
    try {
      global.sessionStorage?.setItem(SESSION_KEY, JSON.stringify({ ...runtime.players, muted: runtime.muted, turnIndex: runtime.turnIndex }));
    } catch (_) {
      // Keep playing in memory when storage is unavailable.
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

  function prefersReducedMotion() {
    return Boolean(global.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches);
  }

  function motionDuration(normalDuration, reducedDuration = 260) {
    return prefersReducedMotion() ? reducedDuration : normalDuration;
  }

  function isBusyStage(stage = runtime.stage) {
    return BUSY_STAGES.has(stage);
  }

  function isResultVisible(stage = runtime.stage) {
    return stage === "reveal" || stage === "completed";
  }

  // All random outcomes use Web Crypto with rejection sampling so each result remains unbiased.
  function secureRandomIndex(length) {
    if (!Number.isSafeInteger(length) || length <= 0) throw new RangeError("A positive collection length is required.");
    const cryptoApi = global.crypto;
    if (!cryptoApi || typeof cryptoApi.getRandomValues !== "function") throw new Error("Secure random play is unavailable in this browser.");
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
      if (board[a] && board[a] === board[b] && board[a] === board[c]) return { winner: board[a], line, draw: false };
    }
    return { winner: "", line: [], draw: board.every(Boolean) };
  }

  // Wheel math converts a preselected segment into an exact pointer-aligned final angle.
  function calculateWheelRotation(currentRotation, selectedIndex, segmentCount, completeTurns) {
    const segmentDegrees = 360 / segmentCount;
    const normalizedCurrent = ((currentRotation % 360) + 360) % 360;
    const target = (360 - (selectedIndex * segmentDegrees + segmentDegrees / 2) + 360) % 360;
    const alignmentDelta = (target - normalizedCurrent + 360) % 360;
    return currentRotation + completeTurns * 360 + alignmentDelta;
  }

  function getDiceOrientation(face) {
    return DICE_ORIENTATIONS[face] || DICE_ORIENTATIONS[1];
  }

  function resolveReactionTap({ phase, tapLocked, player }) {
    if (tapLocked || !["countdown", "waiting", "go"].includes(phase)) return { accepted: false };
    if (phase === "go") return { accepted: true, early: false, winner: player };
    return { accepted: true, early: true, winner: player === 0 ? 1 : 0 };
  }

  function reactionCountdownLabel(countdown) {
    return countdown === 6 ? "GET READY" : String(Math.max(1, countdown));
  }

  function getGame(id) {
    return data?.games?.find((game) => game.id === id) || null;
  }

  function gameUrl(id) {
    return `/games?mode=together&game=${encodeURIComponent(id)}`;
  }

  function playerName(index) {
    return index === 0 ? runtime.players.first || "You" : runtime.players.second || "Them";
  }

  function turnLabel(index) {
    const name = index === 0 ? runtime.players.first : runtime.players.second;
    return name ? `${name.toLocaleUpperCase()}’S TURN` : index === 0 ? "YOUR TURN" : "THEIR TURN";
  }

  function taskLabel(responsibility) {
    if (responsibility === "both") return "BOTH OF YOU";
    const index = responsibility === 1 ? 1 : 0;
    const name = index === 0 ? runtime.players.first : runtime.players.second;
    return name ? `${name.toLocaleUpperCase()}’S TASK` : index === 0 ? "YOUR TASK" : "THEIR TASK";
  }

  // Timers and temporary animation listeners share one cleanup path for route exits and restarts.
  function stopTimer(timer) {
    if (!timer) return;
    global.clearTimeout(timer);
    global.clearInterval(timer);
    runtime.timers.delete(timer);
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

  function clearPendingWork() {
    Array.from(runtime.disposers).forEach((dispose) => dispose());
    runtime.disposers.clear();
    Array.from(runtime.timers).forEach(stopTimer);
    runtime.timers.clear();
  }

  function waitForVisualCompletion(selector, eventNames, fallbackDuration, callback) {
    const element = runtime.root?.querySelector(selector);
    const names = Array.isArray(eventNames) ? eventNames : [eventNames];
    let finished = false;
    let fallback = null;
    const finish = () => {
      if (finished) return;
      finished = true;
      names.forEach((name) => element?.removeEventListener(name, onEnd));
      stopTimer(fallback);
      runtime.disposers.delete(dispose);
      callback();
    };
    const onEnd = (event) => {
      if (event.target === element) finish();
    };
    const dispose = () => {
      if (finished) return;
      finished = true;
      names.forEach((name) => element?.removeEventListener(name, onEnd));
      stopTimer(fallback);
      runtime.disposers.delete(dispose);
    };
    names.forEach((name) => element?.addEventListener(name, onEnd));
    runtime.disposers.add(dispose);
    fallback = schedule(finish, motionDuration(fallbackDuration, 360));
  }

  function announce(message) {
    const live = runtime.root?.querySelector("[data-cg-live]");
    if (!live) return;
    live.textContent = "";
    schedule(() => { if (live.isConnected) live.textContent = message; }, 20);
  }

  function playTone(frequency = 620, duration = 0.12) {
    if (runtime.muted) return;
    try {
      const AudioContext = global.AudioContext || global.webkitAudioContext;
      if (!AudioContext) return;
      runtime.audioContext ||= new AudioContext();
      const oscillator = runtime.audioContext.createOscillator();
      const gain = runtime.audioContext.createGain();
      oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(0.035, runtime.audioContext.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, runtime.audioContext.currentTime + duration);
      oscillator.connect(gain).connect(runtime.audioContext.destination);
      oscillator.start();
      oscillator.stop(runtime.audioContext.currentTime + duration);
    } catch (_) {
      // Sound is enhancement-only and respects autoplay/privacy restrictions.
    }
  }

  function setRoundActive(active) {
    runtime.activeRound = Boolean(active);
  }

  function stageStatusMarkup(verb) {
    if (runtime.stage === "anticipation") return `<div class="cg-stage-status" role="status">Get ready…</div>`;
    if (runtime.stage === "animating") return `<div class="cg-stage-status" role="status">${escapeHtml(verb)}</div>`;
    if (runtime.stage === "settling") return `<div class="cg-stage-status" role="status">Settling…</div>`;
    return "";
  }

  // The result is inserted inline only after settling, then focused and announced once visible.
  function revealStagedResult() {
    if (!runtime.result) return;
    runtime.stage = "reveal";
    setRoundActive(false);
    if (!runtime.result.turnAdvanced) {
      const actor = runtime.result.responsibility;
      runtime.turnIndex = typeof actor === "number" ? (actor === 0 ? 1 : 0) : runtime.turnIndex === 0 ? 1 : 0;
      runtime.result.turnAdvanced = true;
      writeSession();
    }
    renderActiveGame();
    const card = runtime.root?.querySelector("[data-cg-result-card]");
    if (card) {
      card.scrollIntoView?.({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "center" });
      card.focus?.({ preventScroll: true });
    }
    announce(`${taskLabel(runtime.result.responsibility)}. ${runtime.result.category}. ${runtime.result.text}`);
    playTone();
    schedule(() => {
      runtime.stage = "completed";
      runtime.root?.querySelector("[data-cg-result-card]")?.setAttribute("data-result-stage", "completed");
    }, motionDuration(480, 220));
  }

  function startStagedResult({ result, selector, events = "animationend", animationTimeout, anticipation = 220, settling = 320, onStage }) {
    if (isBusyStage() || isResultVisible()) return false;
    runtime.result = { consent: true, different: false, skip: false, chooseLabel: "Choose Another Game", ...result, turnAdvanced: false };
    runtime.stage = "anticipation";
    setRoundActive(true);
    onStage?.("anticipation");
    renderActiveGame();
    schedule(() => {
      if (runtime.stage !== "anticipation") return;
      runtime.stage = "animating";
      onStage?.("animating");
      renderActiveGame();
      waitForVisualCompletion(selector, events, animationTimeout, () => {
        if (runtime.stage !== "animating") return;
        runtime.stage = "settling";
        onStage?.("settling");
        renderActiveGame();
        schedule(revealStagedResult, motionDuration(settling, 220));
      });
    }, motionDuration(anticipation, 180));
    return true;
  }

  function settleResult(result, delay = 260) {
    if (isBusyStage() || isResultVisible()) return false;
    runtime.result = { consent: true, different: false, skip: false, chooseLabel: "Choose Another Game", ...result, turnAdvanced: false };
    runtime.stage = "settling";
    setRoundActive(true);
    renderActiveGame();
    schedule(revealStagedResult, motionDuration(delay, 200));
    return true;
  }

  function resultCardMarkup() {
    if (!runtime.result || !isResultVisible()) return "";
    const result = runtime.result;
    return `
      <article class="cg-result-card" data-cg-result-card data-result-stage="${runtime.stage}" tabindex="-1" aria-label="Game result">
        <div class="cg-result-card__top">
          <span class="cg-result-category">${escapeHtml(String(result.category || "Result").toLocaleUpperCase())}</span>
          <span class="cg-result-owner">${escapeHtml(taskLabel(result.responsibility))}</span>
        </div>
        <p>${escapeHtml(result.text)}</p>
        ${result.detail ? `<small class="cg-result-detail">${escapeHtml(result.detail)}</small>` : ""}
        ${result.consent ? `<div class="cg-result-consent">♡ You can always skip or choose another.</div>` : ""}
        <div class="cg-result-actions">
          <button class="pill-btn" type="button" data-cg-action="play-again">${escapeHtml(result.replayLabel || "Play Again")}</button>
          <button class="ghost-btn" type="button" data-cg-route="/games?mode=together">${escapeHtml(result.chooseLabel)}</button>
          ${result.different ? `<button class="cg-text-action" type="button" data-cg-action="different-challenge">Different Challenge</button>` : ""}
          ${result.skip ? `<button class="cg-text-action" type="button" data-cg-action="result-skip">Skip</button>` : ""}
        </div>
      </article>`;
  }

  // The Games mode hub and catalog remain independent of all active-round state.
  function renderModeHub() {
    runtime.root.innerHTML = `
      <div class="cg-hub">
        <div class="cg-hub__intro"><span class="cg-eyebrow">COUPLE GAMES</span><h2>Choose how you want to play.</h2><p>Share one screen right now, or prepare a private room for two devices.</p></div>
        <div class="cg-mode-grid">
          <a class="cg-mode-card cg-mode-card--together" href="/games?mode=together" data-cg-route="/games?mode=together"><span class="cg-mode-card__icon" aria-hidden="true">♡</span><span class="cg-eyebrow">PLAY TOGETHER</span><h3>One device. Two people.</h3><p>Eight quick mini-games made for the couch, a date, or a quiet night in.</p><strong>Choose a game <span aria-hidden="true">→</span></strong></a>
          <a class="cg-mode-card cg-mode-card--online" href="/games?mode=online" data-cg-route="/games?mode=online"><span class="cg-mode-card__icon" aria-hidden="true">↗</span><span class="cg-eyebrow">PLAY ONLINE</span><h3>Two devices. One private room.</h3><p>Secure Realtime rooms are shown only after the dedicated online service is configured and verified.</p><strong>Check availability <span aria-hidden="true">→</span></strong></a>
        </div>
      </div>`;
  }

  function renderTogetherCatalog() {
    runtime.root.innerHTML = `
      <div class="cg-catalog">
        <section class="cg-player-setup" aria-labelledby="cg-player-title">
          <div><span class="cg-eyebrow">OPTIONAL NICKNAMES</span><h2 id="cg-player-title">Who is playing?</h2><p>Names stay in this tab and are never sent to FlirtyFlip or Supabase.</p></div>
          <div class="cg-player-fields">
            <label>Player one <input type="text" maxlength="24" autocomplete="off" placeholder="Player One" value="${escapeHtml(runtime.players.first)}" data-cg-input="player-first"></label>
            <label>Player two <input type="text" maxlength="24" autocomplete="off" placeholder="Player Two" value="${escapeHtml(runtime.players.second)}" data-cg-input="player-second"></label>
          </div>
        </section>
        <div class="cg-section-heading"><div><span class="cg-eyebrow">PLAY TOGETHER</span><h2>Pick your next little adventure.</h2></div><p>No login, no scoreboards, no pressure. Every challenge can be skipped.</p></div>
        <div class="cg-game-grid">
          ${data.games.map((game, index) => `<a class="cg-game-card" style="--cg-accent:${game.accent}" href="${gameUrl(game.id)}" data-cg-route="${gameUrl(game.id)}"><span class="cg-game-card__number">0${index + 1}</span><span class="cg-game-card__icon" aria-hidden="true">${escapeHtml(game.icon)}</span><span class="cg-eyebrow">${escapeHtml(game.subtitle)}</span><h3>${escapeHtml(game.title)}</h3><p>${escapeHtml(game.description)}</p><span class="cg-game-card__footer"><small>${escapeHtml(game.duration)}</small><strong>Play <span aria-hidden="true">→</span></strong></span></a>`).join("")}
        </div>
      </div>`;
  }

  // Play Online is rendered by its isolated test-project adapter and stays disabled until public configuration is approved.
  function renderOnlineSetup() {
    global.FlirtyFlipOnlineGames?.render?.(runtime.root, { navigate: runtime.navigate });
  }

  function gameShell(game, body) {
    return `<div class="cg-play-page" data-result-stage="${runtime.stage}" style="--cg-accent:${game.accent}"><div class="cg-game-topbar"><button class="cg-back" type="button" data-cg-route="/games?mode=together" aria-label="Exit ${escapeHtml(game.title)}">← Exit</button><div><span class="cg-eyebrow">${escapeHtml(game.subtitle)}</span><strong>${escapeHtml(game.title)}</strong></div><button class="cg-sound" type="button" data-cg-action="toggle-sound" aria-pressed="${runtime.muted}" aria-label="${runtime.muted ? "Turn sound on" : "Mute sound"}">${runtime.muted ? "Sound off" : "Sound on"}</button></div><div class="cg-game-stage">${body}${resultCardMarkup()}</div><p class="cg-consent-note">Play only what feels good for both of you. Either person can pause, skip, or choose another game.</p><div class="sr-only" aria-live="polite" aria-atomic="true" data-cg-live></div></div>`;
  }

  function createInitialState(gameId) {
    const turn = runtime.turnIndex;
    if (gameId === "tic-tac-toe") return { board: Array(9).fill(""), current: turn, outcome: null };
    if (gameId === "love-toss") return { heads: data.coinDefaults.heads, tails: data.coinDefaults.tails, face: "", isFlipping: false, turn };
    if (gameId === "couple-wheel") return { rotation: 0, targetRotation: 0, selected: -1, outcome: null, isSpinning: false, turn };
    if (gameId === "rapid-fire") return { phase: "idle", countdown: 3, remaining: 10, prompt: data.rapidPrompts[secureRandomIndex(data.rapidPrompts.length)], timer: null, startedAt: 0, turn };
    if (gameId === "mystery-box") return { boxes: shuffle(data.mysteryOutcomes).slice(0, 8), opened: [], selected: -1, isAnimating: false, turn };
    if (gameId === "reaction-test") return { phase: "idle", countdown: 6, signalAt: 0, timer: null, winner: -1, reaction: 0, tapLocked: false };
    if (gameId === "couple-dice") return { value: 1, outcome: null, isRolling: false, turn };
    if (gameId === "choose-a-door") return { doors: shuffle(data.doors).slice(0, 3), selected: -1, revealed: false, isOpening: false, turn };
    return {};
  }

  function renderActiveGame() {
    if (!runtime.root || !runtime.gameId) return;
    const game = getGame(runtime.gameId);
    const renderers = { "tic-tac-toe": renderTicTacToe, "love-toss": renderLoveToss, "couple-wheel": renderWheel, "rapid-fire": renderRapidFire, "mystery-box": renderMysteryBox, "reaction-test": renderReactionTest, "couple-dice": renderDice, "choose-a-door": renderDoors };
    if (game && renderers[runtime.gameId]) runtime.root.innerHTML = gameShell(game, renderers[runtime.gameId]());
  }

  // Tic-Tac-Toe locks the board at completion and waits for the winning line before revealing its reward.
  function renderTicTacToe() {
    const state = runtime.state;
    const outcome = state.outcome;
    const showLine = outcome?.winner && runtime.stage !== "anticipation";
    const lineIndex = showLine ? WINNING_LINES.findIndex((line) => line.every((cell, index) => cell === outcome.line[index])) : -1;
    const status = outcome ? outcome.draw ? "ROUND DRAW" : `${playerName(outcome.winner === "heart" ? 0 : 1).toLocaleUpperCase()} WINS` : turnLabel(state.current);
    return `<section class="cg-ttt ${showLine ? "is-celebrating" : ""}" aria-labelledby="cg-game-heading"><div class="cg-game-copy"><span class="cg-turn-pill">${escapeHtml(status)}</span><h1 id="cg-game-heading">Heart meets Flame.</h1><p>First to connect three wins the privilege of choosing what comes next.</p></div><div class="cg-ttt-board" role="grid" aria-label="Tic-Tac-Toe board">${lineIndex >= 0 ? `<span class="cg-winning-line cg-winning-line--${lineIndex}" aria-hidden="true"></span>` : ""}${state.board.map((cell, index) => { const winning = outcome?.line?.includes(index); const symbol = cell === "heart" ? "♡" : cell === "flame" ? "🔥" : ""; return `<button type="button" role="gridcell" class="cg-ttt-cell ${cell ? `is-${cell}` : ""} ${winning ? "is-winning" : ""}" data-cg-action="ttt-cell" data-index="${index}" ${cell || outcome || isBusyStage() || isResultVisible() ? "disabled" : ""} aria-label="${cell ? `${cell} occupies cell ${index + 1}` : `Empty cell ${index + 1}`}">${symbol}</button>`; }).join("")}</div><div class="cg-player-key"><span><b>♡</b>${escapeHtml(playerName(0))}</span><span><b>🔥</b>${escapeHtml(playerName(1))}</span></div>${stageStatusMarkup("Celebrating…")}</section>`;
  }

  // Love Toss uses a true two-sided CSS coin and keeps its preselected side stable through settling.
  function renderLoveToss() {
    const state = runtime.state;
    const locked = isBusyStage() || isResultVisible();
    return `<section class="cg-toss" aria-labelledby="cg-game-heading"><div class="cg-game-copy"><span class="cg-turn-pill">${escapeHtml(turnLabel(state.turn))}</span><h1 id="cg-game-heading">A fair little flip.</h1><p>Give both sides an outcome, or keep the defaults.</p></div><div class="cg-toss-layout"><div class="cg-coin-scene"><div class="cg-coin ${state.isFlipping ? "is-flipping" : ""} ${state.face ? `is-${state.face}` : ""}" data-cg-coin style="--coin-final:${state.face === "tails" ? 180 : 0}deg" aria-label="${state.face && !isBusyStage() ? `${state.face} won` : "Coin ready to flip"}"><span class="cg-coin-face cg-coin-face--front"><b>♡</b><small>HEART</small></span><span class="cg-coin-face cg-coin-face--back"><b>✦</b><small>STAR</small></span></div></div><div class="cg-outcome-fields"><label>Heart side<input type="text" maxlength="80" value="${escapeHtml(state.heads)}" data-cg-input="coin-heads" ${locked ? "disabled" : ""}></label><label>Star side<input type="text" maxlength="80" value="${escapeHtml(state.tails)}" data-cg-input="coin-tails" ${locked ? "disabled" : ""}></label><button class="pill-btn" type="button" data-cg-action="flip-coin" ${locked ? "disabled" : ""}>${state.isFlipping ? "Flipping…" : "Flip the Coin"}</button>${stageStatusMarkup("Flipping…")}</div></div></section>`;
  }

  // Wheel labels share the exact segment geometry used by the pointer-alignment calculation.
  function renderWheel() {
    const state = runtime.state;
    const segmentSize = 100 / data.wheel.length;
    const segments = data.wheel.map((item, index) => `${item.color} ${index * segmentSize}% ${(index + 1) * segmentSize}%`).join(", ");
    const locked = isBusyStage() || isResultVisible();
    return `<section class="cg-wheel-game" aria-labelledby="cg-game-heading"><div class="cg-game-copy"><span class="cg-turn-pill">${escapeHtml(turnLabel(state.turn))}</span><h1 id="cg-game-heading">Spin toward something new.</h1><p>Questions, dares, compliments and free passes—all optional.</p></div><div class="cg-wheel-wrap"><div class="cg-wheel-pointer" aria-hidden="true"></div><div class="cg-wheel ${state.isSpinning ? "is-spinning" : ""}" data-cg-wheel style="--wheel:${segments}; transform:rotate(${state.rotation}deg)" aria-label="Six-category couple wheel">${data.wheel.map((item, index) => `<span style="--i:${index}"><b>${escapeHtml(item.label)}</b></span>`).join("")}</div><button class="pill-btn" type="button" data-cg-action="spin-wheel" ${locked ? "disabled" : ""}>${state.isSpinning ? "Spinning…" : "Spin the Wheel"}</button>${stageStatusMarkup("Spinning…")}</div></section>`;
  }

  // Rapid Fire hides its prompt during the full three-second ready count and runs one cancellable clock.
  function renderRapidFire() {
    const state = runtime.state;
    const promptVisible = ["running", "paused", "finished"].includes(state.phase);
    const display = state.phase === "countdown" ? state.countdown : state.remaining.toFixed(1);
    const progress = state.phase === "countdown" ? (state.countdown / 3) * 100 : Math.max(0, state.remaining * 10);
    const action = state.phase === "idle" || state.phase === "finished" ? "rapid-start" : state.phase === "running" ? "rapid-pause" : state.phase === "paused" ? "rapid-resume" : "";
    const label = state.phase === "idle" || state.phase === "finished" ? "Start Round" : state.phase === "running" ? "Pause" : state.phase === "paused" ? "Resume" : "Get Ready…";
    return `<section class="cg-rapid" aria-labelledby="cg-game-heading"><div class="cg-game-copy"><span class="cg-turn-pill">${escapeHtml(turnLabel(state.turn))}</span><h1 id="cg-game-heading">Ten seconds. Go with your first thought.</h1></div><article class="cg-prompt-card ${promptVisible ? "is-visible" : "is-hidden"}"><span class="cg-eyebrow">${state.phase === "countdown" ? `READY · ${state.countdown}` : "RAPID FIRE"}</span><p>${promptVisible ? escapeHtml(state.prompt.text) : "Prompt unlocks when the countdown ends."}</p></article><div class="cg-timer-ring" style="--timer-progress:${progress * 3.6}deg" aria-label="${display} seconds remaining"><strong class="cg-timer__value">${display}</strong><span>seconds</span></div><div class="cg-control-row"><button class="pill-btn" type="button" data-cg-action="${action}" ${state.phase === "countdown" || isResultVisible() ? "disabled" : ""}>${label}</button><button class="ghost-btn" type="button" data-cg-action="rapid-next" ${state.phase === "countdown" || isResultVisible() ? "disabled" : ""}>Next Prompt</button><button class="cg-text-action" type="button" data-cg-action="rapid-restart">Restart</button></div></section>`;
  }

  // Mystery Box completes lift, shake, lid and glow stages before inserting the readable result card.
  function renderMysteryBox() {
    const state = runtime.state;
    const locked = isBusyStage() || isResultVisible();
    return `<section class="cg-mystery" aria-labelledby="cg-game-heading"><div class="cg-game-copy"><span class="cg-turn-pill">${escapeHtml(turnLabel(state.turn))}</span><h1 id="cg-game-heading">Eight boxes. No repeats.</h1><p>Every reveal is optional. Choose another box whenever a challenge does not feel right.</p></div><div class="cg-box-grid">${state.boxes.map((outcome, index) => { const opened = state.opened.includes(index); const selected = state.selected === index; return `<button class="cg-mystery-box ${opened ? "is-open" : ""} ${selected && state.isAnimating ? "is-animating" : ""} ${state.selected >= 0 && !selected ? "is-dimmed" : ""}" type="button" data-cg-action="open-box" data-index="${index}" ${opened || locked ? "disabled" : ""} aria-label="${opened ? `Box ${index + 1} opened` : `Open mystery box ${index + 1}`}"><span class="cg-box-visual"><i class="cg-box-lid"></i><i class="cg-box-base"><b>${opened ? "✦" : index + 1}</b></i><i class="cg-box-glow"></i></span><small>${opened ? "Opened" : "Mystery"}</small></button>`; }).join("")}</div><div class="cg-control-row"><button class="ghost-btn" type="button" data-cg-action="reset-boxes" ${isBusyStage() ? "disabled" : ""}>Reset Boxes</button><button class="cg-text-action" type="button" data-cg-route="/games?mode=together">Choose Another Game</button></div>${stageStatusMarkup("Opening…")}</section>`;
  }

  // Reaction Test includes an explicit five-second preparation count and accepts early taps throughout it.
  function renderReactionTest() {
    const state = runtime.state;
    const status = state.phase === "countdown" ? reactionCountdownLabel(state.countdown) : state.phase === "waiting" ? "WAIT…" : state.phase === "go" ? "TAP NOW!" : state.phase === "done" ? `${playerName(state.winner).toLocaleUpperCase()} WINS` : "Start when both players are ready";
    const tapsEnabled = ["countdown", "waiting", "go"].includes(state.phase) && !state.tapLocked;
    return `<section class="cg-reaction ${state.phase === "go" ? "is-go" : ""} ${state.phase === "countdown" ? "is-countdown" : ""}" aria-labelledby="cg-game-heading"><div class="cg-game-copy"><span class="cg-eyebrow">REACTION TEST</span><h1 id="cg-game-heading">Who’s faster?</h1><p>Five seconds to prepare, then wait for the unpredictable signal. This local game is not used for Online mode.</p></div><div class="cg-reaction-status" role="status">${escapeHtml(status)}</div><div class="cg-reaction-zones"><button type="button" data-cg-action="reaction-tap" data-player="0" ${tapsEnabled ? "" : "disabled"}><span>${escapeHtml(playerName(0))}</span><strong>TAP</strong></button><button type="button" data-cg-action="reaction-tap" data-player="1" ${tapsEnabled ? "" : "disabled"}><span>${escapeHtml(playerName(1))}</span><strong>TAP</strong></button></div><button class="pill-btn" type="button" data-cg-action="reaction-start" ${["countdown", "waiting", "go"].includes(state.phase) || isResultVisible() ? "disabled" : ""}>${state.phase === "done" ? "Race Again" : "Start Race"}</button></section>`;
  }

  function dieFaceMarkup(face) {
    return `<span class="cg-dice-face cg-dice-face--${face}" aria-hidden="true"><b>${face}</b></span>`;
  }

  // Couple Dice is a six-face preserve-3d cube whose preselected value controls its final orientation.
  function renderDice() {
    const state = runtime.state;
    const orientation = getDiceOrientation(state.value);
    const locked = isBusyStage() || isResultVisible();
    return `<section class="cg-dice-game" aria-labelledby="cg-game-heading"><div class="cg-game-copy"><span class="cg-turn-pill">${escapeHtml(turnLabel(state.turn))}</span><h1 id="cg-game-heading">Let the dice decide.</h1><p>Question, compliment, laugh, challenge, connection or wild card.</p></div><div class="cg-dice-scene"><div class="cg-dice-cube ${state.isRolling ? "is-rolling" : ""}" data-cg-dice style="--die-x:${orientation.x}deg;--die-y:${orientation.y}deg" aria-label="${state.outcome && !isBusyStage() ? `Die showing ${state.value}` : "Dice ready to roll"}">${[1, 2, 3, 4, 5, 6].map(dieFaceMarkup).join("")}</div></div><div class="cg-roll-hint">${state.outcome && !isBusyStage() ? `Rolled ${state.value}` : "Roll to reveal"}</div><button class="pill-btn" type="button" data-cg-action="roll-dice" ${locked ? "disabled" : ""}>${state.isRolling ? "Rolling…" : "Roll the Dice"}</button>${stageStatusMarkup("Tumbling…")}</section>`;
  }

  // Door outcomes are randomized before selection; only the chosen hinge opens and its category settles first.
  function renderDoors() {
    const state = runtime.state;
    const locked = state.selected >= 0 || isBusyStage() || isResultVisible();
    const selectedOutcome = state.selected >= 0 ? state.doors[state.selected] : null;
    return `<section class="cg-doors" aria-labelledby="cg-game-heading"><div class="cg-game-copy"><span class="cg-turn-pill">${escapeHtml(turnLabel(state.turn))}</span><h1 id="cg-game-heading">Choose a door.</h1><p>The outcome is fixed before you pick. No peeking—but you can always pass.</p></div><div class="cg-door-grid">${state.doors.map((outcome, index) => { const selected = state.selected === index; return `<button type="button" class="cg-door ${selected ? "is-selected" : ""} ${selected && state.isOpening ? "is-opening" : ""} ${selected && state.revealed ? "is-open" : ""} ${state.selected >= 0 && !selected ? "is-dimmed" : ""}" data-cg-action="choose-door" data-index="${index}" ${locked ? "disabled" : ""} aria-label="Choose door ${index + 1}"><span class="cg-door__number">0${index + 1}</span><span class="cg-door__glow"></span><span class="cg-door__panel"><i></i><strong>Open</strong></span></button>`; }).join("")}</div>${runtime.stage === "settling" && selectedOutcome ? `<div class="cg-door-category" role="status">${escapeHtml(selectedOutcome.type.toLocaleUpperCase())}</div>` : ""}${stageStatusMarkup("Opening…")}</section>`;
  }

  function resetCurrentGame() {
    const coinChoices = runtime.gameId === "love-toss" && runtime.state ? { heads: runtime.state.heads, tails: runtime.state.tails } : null;
    clearPendingWork();
    runtime.stage = "idle";
    runtime.result = null;
    runtime.state = createInitialState(runtime.gameId);
    if (coinChoices) Object.assign(runtime.state, coinChoices);
    setRoundActive(false);
    renderActiveGame();
  }

  function handleTicTacToe(index) {
    const state = runtime.state;
    if (isBusyStage() || isResultVisible() || !Number.isInteger(index) || index < 0 || index > 8 || state.board[index] || state.outcome) return;
    state.board[index] = state.current === 0 ? "heart" : "flame";
    setRoundActive(true);
    const outcome = evaluateTicTacToe(state.board);
    if (outcome.winner || outcome.draw) {
      state.outcome = outcome;
      const winner = outcome.winner === "heart" ? 0 : outcome.winner === "flame" ? 1 : "both";
      const result = outcome.draw
        ? { category: "Round Result", responsibility: "both", text: "Heart and Flame were perfectly matched.", replayLabel: "Play Again", consent: false, skip: true }
        : { category: data.ticTacToeReward.category, responsibility: winner, text: data.ticTacToeReward.text, detail: `${playerName(winner)} connected three symbols.`, replayLabel: "Play Again", consent: false, skip: true };
      startStagedResult({ result, selector: outcome.winner ? ".cg-winning-line" : ".cg-ttt-board", events: "animationend", animationTimeout: outcome.winner ? 760 : 420, anticipation: 120, settling: 260 });
      return;
    }
    state.current = state.current === 0 ? 1 : 0;
    renderActiveGame();
    announce(turnLabel(state.current));
  }

  function flipCoin() {
    const state = runtime.state;
    if (isBusyStage() || isResultVisible()) return;
    state.face = secureRandomIndex(2) === 0 ? "heads" : "tails";
    const text = state.face === "heads" ? state.heads : state.tails;
    startStagedResult({
      result: { category: "Reward", responsibility: state.turn, text, detail: state.face === "heads" ? "Heart side" : "Star side", replayLabel: "Flip Again", skip: true },
      selector: "[data-cg-coin]",
      events: "animationend",
      animationTimeout: 2050,
      anticipation: 220,
      settling: 300,
      onStage: (stage) => { state.isFlipping = stage === "animating"; }
    });
  }

  function spinWheel() {
    const state = runtime.state;
    if (isBusyStage() || isResultVisible()) return;
    state.selected = secureRandomIndex(data.wheel.length);
    const category = data.wheel[state.selected];
    state.outcome = category.outcomes[secureRandomIndex(category.outcomes.length)];
    const turns = 4 + secureRandomIndex(4);
    state.targetRotation = calculateWheelRotation(state.rotation, state.selected, data.wheel.length, turns);
    startStagedResult({
      result: { category: category.label, responsibility: state.turn, text: state.outcome.text, replayLabel: "Spin Again", different: true },
      selector: "[data-cg-wheel]",
      events: "transitionend",
      animationTimeout: 4700,
      anticipation: 250,
      settling: 360,
      onStage: (stage) => {
        state.isSpinning = stage === "animating";
        if (stage === "animating") state.rotation = state.targetRotation;
      }
    });
  }

  function stopRapidTimer() {
    stopTimer(runtime.state?.timer);
    if (runtime.state) runtime.state.timer = null;
  }

  function startRapidCountdown() {
    const state = runtime.state;
    if (state.phase === "countdown" || state.phase === "running" || isResultVisible()) return;
    stopRapidTimer();
    runtime.result = null;
    runtime.stage = "idle";
    state.phase = "countdown";
    state.countdown = 3;
    state.remaining = 10;
    setRoundActive(true);
    renderActiveGame();
    announce("Ready. 3");
    state.timer = repeat(() => {
      state.countdown -= 1;
      if (state.countdown <= 0) {
        stopRapidTimer();
        state.phase = "running";
        renderActiveGame();
        announce(`${turnLabel(state.turn)}. Go. Ten seconds.`);
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
      const ring = runtime.root?.querySelector(".cg-timer-ring");
      if (value) value.textContent = state.remaining.toFixed(1);
      if (ring) ring.style.setProperty("--timer-progress", `${state.remaining * 36}deg`);
      if (state.remaining <= 0) {
        stopRapidTimer();
        state.phase = "finished";
        settleResult({ category: "Round Complete", responsibility: state.turn, text: "Time! Your first thoughts were enough for this round.", replayLabel: "Play Again", different: true }, 260);
      }
    }, 100);
  }

  function pauseRapid() {
    if (runtime.state.phase !== "running") return;
    stopRapidTimer();
    runtime.state.phase = "paused";
    renderActiveGame();
    announce("Timer paused");
  }

  function resumeRapid() {
    if (runtime.state.phase !== "paused") return;
    runtime.state.phase = "running";
    renderActiveGame();
    startRapidClock();
    announce("Timer resumed");
  }

  function nextRapidPrompt() {
    const state = runtime.state;
    stopRapidTimer();
    let next = state.prompt;
    if (data.rapidPrompts.length > 1) while (next === state.prompt) next = data.rapidPrompts[secureRandomIndex(data.rapidPrompts.length)];
    state.prompt = next;
    state.phase = "idle";
    state.countdown = 3;
    state.remaining = 10;
    runtime.stage = "idle";
    runtime.result = null;
    setRoundActive(false);
    renderActiveGame();
  }

  function openMysteryBox(index) {
    const state = runtime.state;
    if (isBusyStage() || isResultVisible() || !Number.isInteger(index) || !state.boxes[index] || state.opened.includes(index)) return;
    state.selected = index;
    const outcome = state.boxes[index];
    startStagedResult({
      result: { category: outcome.type, responsibility: state.turn, text: outcome.text, replayLabel: "Reset Boxes", different: true },
      selector: `.cg-mystery-box[data-index="${index}"]`,
      events: "animationend",
      animationTimeout: 1450,
      anticipation: 180,
      settling: 340,
      onStage: (stage) => {
        state.isAnimating = stage === "animating";
        if (stage === "settling" && !state.opened.includes(index)) state.opened.push(index);
      }
    });
  }

  function startReaction() {
    clearPendingWork();
    runtime.stage = "idle";
    runtime.result = null;
    const state = runtime.state;
    state.phase = "countdown";
    state.countdown = 6;
    state.winner = -1;
    state.reaction = 0;
    state.tapLocked = false;
    setRoundActive(true);
    renderActiveGame();
    announce("Get ready. 5");
    state.timer = repeat(() => {
      state.countdown -= 1;
      if (state.countdown <= 0) {
        stopTimer(state.timer);
        state.timer = null;
        state.phase = "waiting";
        renderActiveGame();
        announce("Wait");
        const wait = 1200 + secureRandomIndex(3001);
        state.timer = schedule(() => {
          if (state.tapLocked || state.phase !== "waiting") return;
          state.phase = "go";
          state.signalAt = global.performance.now();
          renderActiveGame();
          announce("Tap now");
          playTone(760, 0.09);
        }, wait);
      } else {
        renderActiveGame();
        announce(String(state.countdown));
      }
    }, 1000);
  }

  function reactionTap(player) {
    const state = runtime.state;
    const resolution = resolveReactionTap({ phase: state.phase, tapLocked: state.tapLocked, player });
    if (!resolution.accepted) return;
    state.tapLocked = true;
    clearPendingWork();
    state.winner = resolution.winner;
    state.phase = "done";
    if (resolution.early) {
      const message = `Too soon — ${playerName(player)} tapped early. ${playerName(state.winner)} wins this round.`;
      announce(message);
      settleResult({ category: "Reaction Result", responsibility: state.winner, text: message, detail: "Early taps lose the round.", replayLabel: "Race Again", consent: false, skip: true }, 260);
      return;
    }
    state.reaction = Math.max(0, Math.round(global.performance.now() - state.signalAt));
    const reward = data.reactionRewards[secureRandomIndex(data.reactionRewards.length)];
    settleResult({ category: reward.category, responsibility: state.winner, text: reward.text, detail: `${state.reaction} ms after the signal on this device.`, replayLabel: "Race Again", consent: false, skip: true }, 260);
  }

  function rollDice() {
    const state = runtime.state;
    if (isBusyStage() || isResultVisible()) return;
    state.value = secureRandomIndex(6) + 1;
    state.outcome = data.dice[state.value];
    startStagedResult({
      result: { category: state.outcome.type, responsibility: state.turn, text: state.outcome.text, detail: `Rolled ${state.value}`, replayLabel: "Roll Again", skip: true },
      selector: "[data-cg-dice]",
      events: "animationend",
      animationTimeout: 2200,
      anticipation: 220,
      settling: 320,
      onStage: (stage) => { state.isRolling = stage === "animating"; }
    });
  }

  function chooseDoor(index) {
    const state = runtime.state;
    if (state.selected >= 0 || isBusyStage() || isResultVisible() || !Number.isInteger(index) || !state.doors[index]) return;
    state.selected = index;
    const outcome = state.doors[index];
    startStagedResult({
      result: { category: outcome.type, responsibility: state.turn, text: outcome.text, replayLabel: "Play Again", different: true },
      selector: `.cg-door[data-index="${index}"] .cg-door__panel`,
      events: "transitionend",
      animationTimeout: 1350,
      anticipation: 180,
      settling: 420,
      onStage: (stage) => {
        state.isOpening = stage === "animating";
        if (stage === "settling") state.revealed = true;
      }
    });
  }

  function differentChallenge() {
    if (!runtime.result || !isResultVisible()) return;
    let pool = [];
    if (runtime.gameId === "couple-wheel") pool = data.wheel[runtime.state.selected].outcomes;
    if (runtime.gameId === "mystery-box") pool = runtime.state.boxes;
    if (runtime.gameId === "choose-a-door") pool = data.doors;
    if (runtime.gameId === "rapid-fire") {
      nextRapidPrompt();
      return;
    }
    const alternatives = pool.filter((item) => item.text !== runtime.result.text);
    if (!alternatives.length) return;
    const next = alternatives[secureRandomIndex(alternatives.length)];
    runtime.result.category = next.category || next.type || runtime.result.category;
    runtime.result.text = next.text;
    renderActiveGame();
    runtime.root?.querySelector("[data-cg-result-card]")?.focus?.({ preventScroll: true });
    announce(`${taskLabel(runtime.result.responsibility)}. ${runtime.result.category}. ${runtime.result.text}`);
  }

  // One delegated listener survives every render; busy-stage guards block repeated activation.
  function handleClick(event) {
    const routeTarget = event.target.closest("[data-cg-route]");
    if (routeTarget) {
      event.preventDefault();
      runtime.navigate?.(routeTarget.dataset.cgRoute);
      return;
    }
    const control = event.target.closest("[data-cg-action]");
    if (!control) return;
    const action = control.dataset.cgAction;
    if (action === "toggle-sound") { runtime.muted = !runtime.muted; writeSession(); renderActiveGame(); return; }
    if (action === "play-again") {
      const restartReaction = runtime.gameId === "reaction-test";
      resetCurrentGame();
      if (restartReaction) startReaction();
      return;
    }
    if (action === "different-challenge") return differentChallenge();
    if (action === "result-skip") return resetCurrentGame();
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
    if (input.dataset.cgInput === "player-first") runtime.players.first = sanitizeName(value);
    if (input.dataset.cgInput === "player-second") runtime.players.second = sanitizeName(value);
    if (input.dataset.cgInput === "coin-heads") runtime.state.heads = value.trim() || data.coinDefaults.heads;
    if (input.dataset.cgInput === "coin-tails") runtime.state.tails = value.trim() || data.coinDefaults.tails;
    writeSession();
  }

  function bindRoot(root) {
    if (root.dataset.coupleGamesBound === "true") return;
    root.dataset.coupleGamesBound = "true";
    root.addEventListener("click", handleClick);
    root.addEventListener("input", handleInput);
  }

  // Router integration resets all animation listeners/timers when the selected mini-game changes.
  function render(root, { url, navigate } = {}) {
    if (!root || !url) return;
    if (runtime.root && runtime.root !== root) cleanup();
    runtime.root = root;
    runtime.navigate = navigate;
    bindRoot(root);
    readSession();
    const mode = url.searchParams.get("mode") || "";
    if (mode !== "online") global.FlirtyFlipOnlineGames?.cleanup?.();
    const requestedGame = url.searchParams.get("game") || "";
    const nextGame = mode === "together" && getGame(requestedGame) ? requestedGame : "";
    if (nextGame !== runtime.gameId) {
      clearPendingWork();
      runtime.gameId = nextGame;
      runtime.stage = "idle";
      runtime.result = null;
      runtime.state = nextGame ? createInitialState(nextGame) : null;
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
    clearPendingWork();
    global.FlirtyFlipOnlineGames?.cleanup?.();
    runtime.activeRound = false;
    runtime.stage = "idle";
    runtime.result = null;
    runtime.gameId = "";
    runtime.state = null;
  }

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
    __test: Object.freeze({
      RESULT_STAGES,
      calculateWheelRotation,
      evaluateTicTacToe,
      getDiceOrientation,
      isBusyStage,
      isResultVisible,
      motionDuration,
      reactionCountdownLabel,
      resolveReactionTap,
      secureRandomIndex,
      shuffle
    })
  });
})(window);
