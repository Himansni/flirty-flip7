// ========================================
// ISOLATED PLAY ONLINE CLIENT
// Uses a dedicated Supabase client/session and server-authoritative couple_game_* RPCs.
// Configuration, anonymous auth and the migration remain disabled until explicitly approved.
// ========================================
(function configureOnlineGames(global) {
  "use strict";

  const CONFIG_ENDPOINT = "/api/online/client-config";
  const REQUIRED_SCHEMA_VERSION = "20260830000000-v2";
  const AUTH_STORAGE_KEY = "flirtyflip-online-auth-v1";
  const ROOM_STORAGE_KEY = "flirtyflip-online-room-v1";
  const GAME_IDS = Object.freeze([
    "tic-tac-toe", "love-toss", "couple-wheel", "rapid-fire",
    "mystery-box", "couple-dice", "choose-a-door"
  ]);
  const GAME_TITLES = Object.freeze({
    "tic-tac-toe": "Tic-Tac-Toe",
    "love-toss": "Love Toss",
    "couple-wheel": "Couple Wheel",
    "rapid-fire": "Rapid Fire",
    "mystery-box": "Mystery Box",
    "couple-dice": "Couple Dice",
    "choose-a-door": "Choose a Door"
  });
  const ANIMATION_MS = Object.freeze({
    "tic-tac-toe": 620,
    "love-toss": 1750,
    "couple-wheel": 4200,
    "rapid-fire": 320,
    "mystery-box": 1250,
    "couple-dice": 1850,
    "choose-a-door": 1050
  });
  const runtime = {
    root: null,
    navigate: null,
    config: null,
    client: null,
    session: null,
    room: null,
    participants: [],
    playerNumber: 0,
    channel: null,
    subscriptionEpoch: 0,
    subscribingRoomId: "",
    heartbeat: null,
    renderTimer: null,
    revealTimer: null,
    initialized: false,
    initializing: null,
    status: "loading",
    message: "Checking the dedicated test service…",
    pending: false,
    visualStage: "idle",
    acceptedVersion: 0,
    revealedVersion: 0,
    boundRoots: new WeakSet()
  };

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function sanitizeNickname(value) {
    return String(value || "").replace(/[<>\u0000-\u001f\u007f]/g, "").replace(/\s+/g, " ").trim().slice(0, 24);
  }

  function normalizeRoomCode(value) {
    return String(value || "").toUpperCase().replace(/[^A-HJ-NP-Z2-9]/g, "").slice(0, 6);
  }

  function validatePublicConfig(config) {
    if (!config || config.enabled !== true || config.schemaVersion !== REQUIRED_SCHEMA_VERSION) return null;
    let url;
    try { url = new URL(String(config.supabaseUrl || "")); } catch (_) { return null; }
    if (url.protocol !== "https:" || url.pathname !== "/" || !/^[a-z0-9-]+\.supabase\.co$/i.test(url.hostname)) return null;
    if (url.hostname.split(".")[0] !== String(config.projectRef || "")) return null;
    if (!String(config.publishableKey || "").startsWith("sb_publishable_")) return null;
    return Object.freeze({
      anonymousAuthEnabled: config.anonymousAuthEnabled === true,
      projectRef: config.projectRef,
      publishableKey: config.publishableKey,
      schemaVersion: config.schemaVersion,
      supabaseUrl: url.origin
    });
  }

  function getReadiness() {
    const configPresent = Boolean(runtime.config);
    return {
      ready: configPresent && runtime.initialized,
      configPresent,
      status: configPresent ? "Prepared for verification" : "Setup required",
      reason: configPresent
        ? "The isolated adapter is configured. Complete two-session security verification before wider testing."
        : "The reviewed migration, dedicated public configuration and approved authentication setting are still required."
    };
  }

  function sessionStorageAdapter() {
    return {
      getItem(key) { try { return global.sessionStorage?.getItem(key) ?? null; } catch (_) { return null; } },
      setItem(key, value) { try { global.sessionStorage?.setItem(key, value); } catch (_) {} },
      removeItem(key) { try { global.sessionStorage?.removeItem(key); } catch (_) {} }
    };
  }

  function saveReconnectRoom(roomId) {
    try {
      if (roomId) global.sessionStorage?.setItem(ROOM_STORAGE_KEY, JSON.stringify({ roomId }));
      else global.sessionStorage?.removeItem(ROOM_STORAGE_KEY);
    } catch (_) {}
  }

  function readReconnectRoom() {
    try {
      const saved = JSON.parse(global.sessionStorage?.getItem(ROOM_STORAGE_KEY) || "null");
      return /^[0-9a-f-]{36}$/i.test(String(saved?.roomId || "")) ? saved.roomId : "";
    } catch (_) { return ""; }
  }

  function safeMessage(error, fallback = "Unable to complete that request.") {
    const code = String(error?.code || error?.message || "").toLowerCase();
    if (code.includes("email_not_confirmed") || code.includes("email not confirmed")) return "Confirm this test account’s email before signing in.";
    if (code.includes("invalid_login_credentials") || code.includes("invalid login credentials")) return "The email or password was not accepted by the test project.";
    if (code.includes("rate_limited")) return "Too many attempts. Please wait before trying again.";
    if (code.includes("room_unavailable")) return "That room is unavailable or has expired.";
    if (code.includes("stale_version")) return "The room changed on the other device. Syncing the latest state…";
    if (code.includes("out_of_turn")) return "It is your partner’s turn.";
    if (code.includes("host_required")) return "Only the host can choose the game.";
    if (code.includes("room_not_ready")) return "Both players must be ready first.";
    if (code.includes("authentication")) return "Sign in to the dedicated test service first.";
    return fallback;
  }

  async function loadConfig() {
    const response = await global.fetch(CONFIG_ENDPOINT, { cache: "no-store", credentials: "same-origin", headers: { Accept: "application/json" } });
    if (!response.ok || !String(response.headers.get("content-type") || "").includes("application/json")) return null;
    return validatePublicConfig(await response.json());
  }

  function createDedicatedClient(config) {
    if (!global.supabase || typeof global.supabase.createClient !== "function") return null;
    return global.supabase.createClient(config.supabaseUrl, config.publishableKey, {
      auth: {
        autoRefreshToken: true,
        detectSessionInUrl: false,
        persistSession: true,
        storage: sessionStorageAdapter(),
        storageKey: AUTH_STORAGE_KEY
      },
      realtime: { params: { eventsPerSecond: 8 } }
    });
  }

  async function initialize() {
    if (runtime.initialized) return;
    if (runtime.initializing) return runtime.initializing;
    runtime.initializing = (async () => {
      try {
        runtime.config = await loadConfig();
        if (!runtime.config) {
          runtime.status = "setup_required";
          runtime.message = "Play Online is prepared but remains disabled until the reviewed test setup is approved.";
          return;
        }
        runtime.client = createDedicatedClient(runtime.config);
        if (!runtime.client) throw new Error("client_unavailable");
        const { data, error } = await runtime.client.auth.getSession();
        if (error) throw error;
        runtime.session = data.session || null;
        runtime.initialized = true;
        runtime.status = runtime.session ? "lobby" : "auth_required";
        runtime.message = runtime.session ? "Dedicated test session restored." : "Enter a nickname to create or join a private room.";
        const roomId = runtime.session ? readReconnectRoom() : "";
        if (roomId) await restoreRoom(roomId);
      } catch (_) {
        runtime.status = "setup_required";
        runtime.message = "The isolated online configuration is unavailable. Play Together still works normally.";
      } finally {
        runtime.initializing = null;
        renderCurrent();
      }
    })();
    return runtime.initializing;
  }

  async function ensureOnlineSession() {
    if (runtime.session) return runtime.session;
    if (!runtime.config?.anonymousAuthEnabled) throw new Error("authentication_required");
    const { data, error } = await runtime.client.auth.signInAnonymously();
    if (error || !data.session) throw error || new Error("authentication_required");
    runtime.session = data.session;
    return runtime.session;
  }

  async function signInTestAccount(email, password) {
    if (!runtime.client) throw new Error("client_unavailable");
    const { data, error } = await runtime.client.auth.signInWithPassword({ email: String(email || "").trim(), password: String(password || "") });
    if (error || !data.session) throw error || new Error("authentication_required");
    runtime.session = data.session;
    runtime.status = "lobby";
    runtime.message = "Signed in to the isolated test service.";
  }

  async function signOutOnline() {
    await leaveRoom(false);
    if (runtime.client) await runtime.client.auth.signOut({ scope: "local" });
    runtime.session = null;
    runtime.status = "auth_required";
    runtime.message = "The dedicated online session has been cleared.";
    renderCurrent();
  }

  async function createRoom(nickname) {
    const cleanName = sanitizeNickname(nickname);
    if (!cleanName) throw new Error("invalid_nickname");
    await ensureOnlineSession();
    const { data, error } = await runtime.client.rpc("couple_game_create_room", { p_nickname: cleanName });
    if (error || !data?.[0]) throw error || new Error("room_unavailable");
    runtime.playerNumber = Number(data[0].player_number);
    saveReconnectRoom(data[0].room_id);
    await restoreRoom(data[0].room_id);
  }

  async function joinRoom(code, nickname) {
    const cleanName = sanitizeNickname(nickname);
    const cleanCode = normalizeRoomCode(code);
    if (!cleanName || cleanCode.length !== 6) throw new Error("room_unavailable");
    await ensureOnlineSession();
    const { data, error } = await runtime.client.rpc("couple_game_join_room", { p_room_code: cleanCode, p_nickname: cleanName });
    if (error || !data?.[0] || data[0].error_code) throw error || new Error(data?.[0]?.error_code || "room_unavailable");
    runtime.playerNumber = Number(data[0].player_number);
    saveReconnectRoom(data[0].room_id);
    await restoreRoom(data[0].room_id);
  }

  async function fetchRoom(roomId, initial = false) {
    if (!runtime.client || !roomId) return false;
    const previousVersion = Number(runtime.room?.version || 0);
    const [roomResult, playersResult, playerNumberResult] = await Promise.all([
      runtime.client.from("couple_game_rooms").select("id,room_code,game_id,status,state,version,round_number,expires_at,updated_at").eq("id", roomId).single(),
      runtime.client.from("couple_game_participants").select("room_id,player_number,nickname,is_ready,last_seen_at,left_at").eq("room_id", roomId).order("player_number"),
      runtime.client.rpc("couple_game_player_number", { p_room_id: roomId })
    ]);
    const verifiedPlayerNumber = Number(playerNumberResult.data || 0);
    if (roomResult.error || !roomResult.data || playersResult.error || playerNumberResult.error || ![1, 2].includes(verifiedPlayerNumber)) return false;
    runtime.room = roomResult.data;
    runtime.participants = playersResult.data || [];
    runtime.playerNumber = verifiedPlayerNumber;
    const expired = Date.parse(runtime.room.expires_at || 0) <= Date.now();
    if (["closed", "expired"].includes(runtime.room.status) || expired) {
      unsubscribeRoom();
      saveReconnectRoom("");
      runtime.room = null;
      runtime.participants = [];
      runtime.playerNumber = 0;
      runtime.status = "lobby";
      runtime.message = expired || roomResult.data.status === "expired" ? "The private room expired." : "The host closed the private room.";
      renderCurrent();
      return false;
    }
    if (initial) {
      runtime.acceptedVersion = Number(runtime.room.version || 0);
      runtime.revealedVersion = Number(runtime.room.version || 0);
    } else if (Number(runtime.room.version || 0) > previousVersion && runtime.room.state?.phase === "complete") {
      receiveAcceptedAction({ room_version: runtime.room.version, resulting_state: runtime.room.state });
    }
    renderCurrent();
    return true;
  }

  async function restoreRoom(roomId) {
    const restored = await fetchRoom(roomId, true);
    if (!restored || ["closed", "expired"].includes(runtime.room.status)) {
      saveReconnectRoom("");
      runtime.room = null;
      runtime.participants = [];
      runtime.playerNumber = 0;
      runtime.status = "lobby";
      runtime.message = "That saved room is no longer available.";
      return;
    }
    runtime.status = "room";
    runtime.message = "Private room restored.";
    await subscribeToRoom(roomId);
  }

  function unsubscribeRoom() {
    runtime.subscriptionEpoch += 1;
    runtime.subscribingRoomId = "";
    if (runtime.channel && runtime.client) runtime.client.removeChannel(runtime.channel);
    runtime.channel = null;
    if (runtime.heartbeat) global.clearInterval(runtime.heartbeat);
    runtime.heartbeat = null;
    if (runtime.renderTimer) global.clearInterval(runtime.renderTimer);
    runtime.renderTimer = null;
    if (runtime.revealTimer) global.clearTimeout(runtime.revealTimer);
    runtime.revealTimer = null;
  }

  async function subscribeToRoom(roomId) {
    if (!runtime.client || !runtime.session || runtime.channel || runtime.subscribingRoomId === roomId) return;
    unsubscribeRoom();
    runtime.subscribingRoomId = roomId;
    const epoch = runtime.subscriptionEpoch;
    try {
      await runtime.client.realtime.setAuth();
    } catch (_) {
      runtime.subscribingRoomId = "";
      runtime.message = "Unable to authorize the private room stream. Retry the connection.";
      renderCurrent();
      return;
    }
    if (epoch !== runtime.subscriptionEpoch || runtime.room?.id !== roomId) return;
    runtime.channel = runtime.client.channel(`couple-game:${roomId}`, { config: { private: true } })
      .on("postgres_changes", { event: "*", schema: "public", table: "couple_game_rooms", filter: `id=eq.${roomId}` }, () => fetchRoom(roomId))
      .on("postgres_changes", { event: "*", schema: "public", table: "couple_game_participants", filter: `room_id=eq.${roomId}` }, () => fetchRoom(roomId))
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "couple_game_actions", filter: `room_id=eq.${roomId}` }, (payload) => receiveAcceptedAction(payload.new))
      .subscribe((status) => {
        if (status === "SUBSCRIBED") runtime.message = "Both devices are connected through the private room stream.";
        if (["CHANNEL_ERROR", "TIMED_OUT"].includes(status)) runtime.message = "Connection interrupted. Reconnecting safely…";
        renderCurrent();
      });
    runtime.subscribingRoomId = "";
    startHeartbeat();
  }

  function startHeartbeat() {
    if (runtime.heartbeat) global.clearInterval(runtime.heartbeat);
    const touch = async () => {
      if (!runtime.client || !runtime.room) return;
      await runtime.client.rpc("couple_game_touch_room", { p_room_id: runtime.room.id });
    };
    touch();
    runtime.heartbeat = global.setInterval(touch, 25000);
    if (runtime.renderTimer) global.clearInterval(runtime.renderTimer);
    runtime.renderTimer = global.setInterval(renderCurrent, 1000);
  }

  function receiveAcceptedAction(actionRow) {
    const version = Number(actionRow?.room_version || 0);
    if (!version || version <= runtime.acceptedVersion) return;
    runtime.acceptedVersion = version;
    runtime.visualStage = "animating";
    if (actionRow.resulting_state) runtime.room = {
      ...runtime.room,
      state: actionRow.resulting_state,
      status: actionRow.resulting_state.phase === "complete" ? "complete" : runtime.room.status,
      version
    };
    renderCurrent();
    if (runtime.revealTimer) global.clearTimeout(runtime.revealTimer);
    const duration = animationDuration(runtime.room?.game_id, prefersReducedMotion());
    runtime.revealTimer = global.setTimeout(() => {
      runtime.visualStage = visualStageAfterAction(runtime.room?.status);
      runtime.revealedVersion = version;
      runtime.revealTimer = null;
      renderCurrent();
      if (runtime.room?.status === "complete") announceResult();
    }, duration);
  }

  function prefersReducedMotion() {
    return Boolean(global.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches);
  }

  function animationDuration(gameId, reducedMotion = false) {
    return reducedMotion ? 360 : ANIMATION_MS[gameId] || 600;
  }

  function visualStageAfterAction(roomStatus) {
    return roomStatus === "complete" ? "completed" : "idle";
  }

  function announceResult() {
    const live = runtime.root?.querySelector("[data-online-live]");
    const result = resolveServerResult(runtime.room?.game_id, runtime.room?.state?.result);
    if (live && result) live.textContent = `${responsibilityLabel(result.responsibility)}. ${result.category}. ${result.text}`;
    runtime.root?.querySelector("[data-online-result]")?.focus?.({ preventScroll: false });
  }

  async function submitAction(action) {
    if (!runtime.room || runtime.pending) return;
    runtime.pending = true;
    runtime.visualStage = "anticipation";
    renderCurrent();
    try {
      const idempotencyKey = global.crypto?.randomUUID?.();
      if (!idempotencyKey) throw new Error("secure_random_unavailable");
      const { data, error } = await runtime.client.rpc("couple_game_submit_action", {
        p_room_id: runtime.room.id,
        p_expected_version: runtime.room.version,
        p_idempotency_key: idempotencyKey,
        p_action: action
      });
      if (error || !data?.[0]) throw error || new Error("action_failed");
      const row = data[0];
      if (Number(row.new_version) < Number(runtime.room.version)) {
        await fetchRoom(runtime.room.id, true);
        return;
      }
      runtime.room = { ...runtime.room, version: row.new_version, status: row.room_status, state: row.state };
      receiveAcceptedAction({ room_version: row.new_version, action: row.accepted_action, resulting_state: row.state });
    } catch (error) {
      runtime.visualStage = "idle";
      runtime.message = safeMessage(error);
      if (String(error?.message || error?.code || "").includes("stale")) await fetchRoom(runtime.room.id, true);
    } finally {
      runtime.pending = false;
      renderCurrent();
    }
  }

  async function setReady(ready = true) {
    if (!runtime.room || runtime.pending) return;
    runtime.pending = true;
    renderCurrent();
    const { error } = await runtime.client.rpc("couple_game_set_ready", { p_room_id: runtime.room.id, p_ready: ready });
    runtime.pending = false;
    if (error) runtime.message = safeMessage(error);
    await fetchRoom(runtime.room.id);
  }

  async function selectGame(gameId) {
    if (!GAME_IDS.includes(gameId) || runtime.playerNumber !== 1 || !runtime.room || runtime.pending) return;
    runtime.pending = true;
    renderCurrent();
    const { error } = await runtime.client.rpc("couple_game_select_game", { p_room_id: runtime.room.id, p_game_id: gameId });
    runtime.pending = false;
    if (error) runtime.message = safeMessage(error);
    await fetchRoom(runtime.room.id, true);
  }

  async function leaveRoom(notifyServer = true) {
    if (notifyServer && runtime.client && runtime.room) await runtime.client.rpc("couple_game_leave_room", { p_room_id: runtime.room.id });
    unsubscribeRoom();
    saveReconnectRoom("");
    runtime.room = null;
    runtime.participants = [];
    runtime.playerNumber = 0;
    runtime.acceptedVersion = 0;
    runtime.visualStage = "idle";
    runtime.revealedVersion = 0;
    runtime.status = runtime.session ? "lobby" : "auth_required";
    runtime.message = "You left the private room.";
    renderCurrent();
  }

  function playerByNumber(number) {
    return runtime.participants.find((player) => player.player_number === Number(number) && !player.left_at) || null;
  }

  function responsibilityLabel(number) {
    if (Number(number) === 0) return "BOTH OF YOU";
    const player = playerByNumber(number);
    return player ? `${player.nickname.toLocaleUpperCase()}’S TASK` : Number(number) === runtime.playerNumber ? "YOUR TASK" : "THEIR TASK";
  }

  function turnLabel(number) {
    const player = playerByNumber(number);
    if (player) return `${player.nickname.toLocaleUpperCase()}’S TURN`;
    return Number(number) === runtime.playerNumber ? "YOUR TURN" : "THEIR TURN";
  }

  function participantConnection(player, now = Date.now()) {
    if (!player || player.left_at) return "left";
    const age = now - Date.parse(player.last_seen_at || 0);
    return age > 45000 ? "reconnecting" : "connected";
  }

  function resolveServerResult(gameId, result) {
    const data = global.FlirtyFlipCoupleGameData;
    if (!result || !data) return null;
    if (gameId === "tic-tac-toe") return {
      category: result.category || "REWARD",
      responsibility: Number(result.responsibility || 0),
      text: result.text_key === "tic_tac_toe_draw" ? "Heart and Flame were perfectly matched." : data.ticTacToeReward.text
    };
    if (gameId === "love-toss") return {
      category: "REWARD", responsibility: Number(result.responsibility),
      text: result.face === "heads" ? data.coinDefaults.heads : data.coinDefaults.tails
    };
    if (gameId === "couple-wheel") {
      const category = data.wheel[Number(result.category_index)] || data.wheel[0];
      const outcome = category.outcomes[Number(result.outcome_index)] || category.outcomes[0];
      return { category: category.label.toLocaleUpperCase(), responsibility: Number(result.responsibility), text: outcome.text };
    }
    if (gameId === "rapid-fire") return { category: "ROUND COMPLETE", responsibility: Number(result.responsibility), text: "Time! Your first thoughts were enough for this round." };
    if (gameId === "mystery-box") {
      const outcome = data.mysteryOutcomes[Number(result.outcome_index)] || data.mysteryOutcomes[0];
      return { category: outcome.category.toLocaleUpperCase(), responsibility: Number(result.responsibility), text: outcome.text };
    }
    if (gameId === "couple-dice") {
      const outcome = data.dice[Number(result.value)] || data.dice[1];
      return { category: outcome.category.toLocaleUpperCase(), responsibility: Number(result.responsibility), text: outcome.text };
    }
    if (gameId === "choose-a-door") {
      const outcome = data.doors[Number(result.outcome_index)] || data.doors[0];
      return { category: outcome.category.toLocaleUpperCase(), responsibility: Number(result.responsibility), text: outcome.text };
    }
    return null;
  }

  function calculateWheelRotation(selectedIndex, version) {
    const turns = 4 + (Number(version || 0) % 4);
    return turns * 360 + (360 - (selectedIndex * 60 + 30) + 360) % 360;
  }

  function gameControlMarkup() {
    const room = runtime.room;
    const state = room?.state || {};
    const result = resolveServerResult(room?.game_id, state.result);
    const canAct = room?.status === "active" && Number(state.turn) === runtime.playerNumber && !runtime.pending && runtime.visualStage === "idle";
    const revealing = runtime.visualStage === "animating" || runtime.visualStage === "anticipation";
    const gameTitle = GAME_TITLES[room?.game_id] || "Online Game";
    let control = "";

    if (room.game_id === "tic-tac-toe") {
      const board = Array.isArray(state.board) ? state.board : Array(9).fill(0);
      control = `<div class="cg-ttt-board" role="grid" aria-label="Synchronized Tic-Tac-Toe board">${board.map((cell, index) => `<button class="cg-ttt-cell ${cell === 1 ? "is-heart" : cell === 2 ? "is-flame" : ""}" role="gridcell" type="button" data-online-action="game-action" data-action-type="place" data-index="${index}" ${!canAct || cell ? "disabled" : ""} aria-label="${cell ? `Player ${cell}` : `Empty cell ${index + 1}`}">${cell === 1 ? "♡" : cell === 2 ? "🔥" : ""}</button>`).join("")}</div>`;
    } else if (room.game_id === "love-toss") {
      const face = state.result?.face || "heads";
      control = `<div class="cg-coin-scene"><div class="cg-coin ${revealing ? "is-flipping" : ""}" style="--coin-final:${face === "tails" ? 180 : 0}deg"><span class="cg-coin-face"><b>♡</b><small>HEART</small></span><span class="cg-coin-face cg-coin-face--back"><b>✦</b><small>STAR</small></span></div></div><button class="pill-btn" type="button" data-online-action="game-action" data-action-type="flip" ${canAct ? "" : "disabled"}>${revealing ? "Flipping…" : "Flip the Coin"}</button>`;
    } else if (room.game_id === "couple-wheel") {
      const selected = Number(state.result?.category_index || 0);
      const segments = global.FlirtyFlipCoupleGameData.wheel.map((item, index) => `${item.color} ${index * (100 / 6)}% ${(index + 1) * (100 / 6)}%`).join(",");
      control = `<div class="cg-wheel-wrap"><div class="cg-wheel-pointer"></div><div class="cg-wheel" style="--wheel:${segments};transform:rotate(${state.result ? calculateWheelRotation(selected, room.version) : 0}deg)">${global.FlirtyFlipCoupleGameData.wheel.map((item,index)=>`<span style="--i:${index}"><b>${escapeHtml(item.label)}</b></span>`).join("")}</div></div><button class="pill-btn" type="button" data-online-action="game-action" data-action-type="spin" ${canAct ? "" : "disabled"}>${revealing ? "Spinning…" : "Spin the Wheel"}</button>`;
    } else if (room.game_id === "rapid-fire") {
      const starts = Date.parse(state.starts_at || 0); const ends = Date.parse(state.ends_at || 0); const now = Date.now();
      const waiting = state.phase === "running" && now < starts; const running = state.phase === "running" && now >= starts && now < ends;
      const remaining = running ? Math.max(0, (ends - now) / 1000) : waiting ? Math.max(0, (starts - now) / 1000) : 10;
      const prompt = global.FlirtyFlipCoupleGameData.rapidPrompts[Number(state.prompt_index || 0)]?.text || "Prompt unlocks after the countdown.";
      control = `<article class="cg-prompt-card ${running ? "is-visible" : "is-hidden"}"><span class="cg-eyebrow">${waiting ? "GET READY" : "RAPID FIRE"}</span><p>${running ? escapeHtml(prompt) : "Prompt unlocks when the countdown ends."}</p></article><div class="cg-timer-ring" style="--timer-progress:${Math.min(360,remaining*36)}deg"><strong>${remaining.toFixed(1)}</strong><span>seconds</span></div>${state.phase === "idle" ? `<button class="pill-btn" type="button" data-online-action="game-action" data-action-type="start" ${canAct ? "" : "disabled"}>Start Round</button>` : now >= ends && state.phase === "running" ? `<button class="pill-btn" type="button" data-online-action="game-action" data-action-type="finish" ${Number(state.turn) === runtime.playerNumber && !runtime.pending ? "" : "disabled"}>Finish Round</button>` : ""}`;
    } else if (room.game_id === "mystery-box") {
      const selected = Number(state.result?.box_index ?? -1);
      control = `<div class="cg-box-grid">${Array.from({length:8},(_,index)=>`<button class="cg-mystery-box ${selected===index&&revealing?"is-animating":""} ${selected>=0&&selected!==index?"is-dimmed":""}" type="button" data-online-action="game-action" data-action-type="open" data-index="${index}" ${canAct ? "" : "disabled"}><span class="cg-box-visual"><i class="cg-box-lid"></i><i class="cg-box-base"><b>${index+1}</b></i><i class="cg-box-glow"></i></span><small>Mystery</small></button>`).join("")}</div>`;
    } else if (room.game_id === "couple-dice") {
      const value = Number(state.result?.value || 1); const orientations = {1:[0,0],2:[0,-90],3:[-90,0],4:[90,0],5:[0,90],6:[0,180]}; const orientation = orientations[value];
      control = `<div class="cg-dice-scene"><div class="cg-dice-cube ${revealing?"is-rolling":""}" style="--die-x:${orientation[0]}deg;--die-y:${orientation[1]}deg">${[1,2,3,4,5,6].map(face=>`<span class="cg-dice-face cg-dice-face--${face}"><b>${face}</b></span>`).join("")}</div></div><button class="pill-btn" type="button" data-online-action="game-action" data-action-type="roll" ${canAct ? "" : "disabled"}>${revealing ? "Rolling…" : "Roll the Dice"}</button>`;
    } else if (room.game_id === "choose-a-door") {
      const selected = Number(state.result?.door_index ?? -1);
      control = `<div class="cg-door-grid">${[0,1,2].map(index=>`<button class="cg-door ${selected===index?"is-selected":""} ${selected===index&&revealing?"is-opening":""} ${selected>=0&&selected!==index?"is-dimmed":""}" type="button" data-online-action="game-action" data-action-type="open" data-index="${index}" ${canAct ? "" : "disabled"}><span class="cg-door__number">0${index+1}</span><span class="cg-door__glow"></span><span class="cg-door__panel"><i></i><strong>Open</strong></span></button>`).join("")}</div>`;
    }

    const showResult = result && room.status === "complete" && runtime.revealedVersion >= Number(room.version);
    return `<section class="cg-online-game" aria-labelledby="online-game-title"><div class="cg-game-copy"><span class="cg-turn-pill">${escapeHtml(turnLabel(state.turn))}</span><h2 id="online-game-title">${escapeHtml(gameTitle)}</h2><p>Server-authoritative round · version ${Number(room.version)}</p></div><div class="cg-online-game__control">${control}</div>${revealing ? `<div class="cg-stage-status">${runtime.visualStage === "anticipation" ? "Waiting for secure result…" : "Synchronizing animation…"}</div>` : ""}${showResult ? resultMarkup(result) : ""}</section>`;
  }

  function resultMarkup(result) {
    return `<article class="cg-result-card" data-online-result tabindex="-1" aria-label="Synchronized game result"><div class="cg-result-card__top"><span class="cg-result-category">${escapeHtml(result.category)}</span><span class="cg-result-owner">${escapeHtml(responsibilityLabel(result.responsibility))}</span></div><p>${escapeHtml(result.text)}</p><div class="cg-result-consent">♡ You can always skip the next round.</div><div class="cg-result-actions"><button class="pill-btn" type="button" data-online-action="ready">Ready for Rematch</button><button class="ghost-btn" type="button" data-online-action="ready">Choose Another Game</button><button class="cg-text-action" type="button" data-online-action="leave">Leave Room</button></div></article>`;
  }

  function setupMarkup() {
    return `<section class="cg-online-state" aria-labelledby="cg-online-title"><div class="cg-online-state__signal" aria-hidden="true"><span></span><span></span></div><span class="cg-status-badge">SETUP REQUIRED</span><h2 id="cg-online-title">Private online rooms are prepared, not enabled.</h2><p>${escapeHtml(runtime.message)}</p><div class="cg-online-safety"><strong>Approval gates still closed</strong><ul><li>The reviewed migration has not been applied.</li><li>Anonymous authentication has not been enabled.</li><li>No Preview variables have been added.</li></ul></div><div class="cg-control-row"><button class="ghost-btn" type="button" data-online-action="retry-config">Retry Setup Check</button><a class="pill-btn" href="/games?mode=together" data-online-route="/games?mode=together">Play Together Instead</a></div></section>`;
  }

  function authMarkup() {
    const anonymous = runtime.config?.anonymousAuthEnabled;
    return `<section class="cg-online-auth" aria-labelledby="cg-online-auth-title"><span class="cg-eyebrow">ISOLATED TEST AUTH</span><h2 id="cg-online-auth-title">Create a private room for two.</h2><p role="status" aria-live="polite">${escapeHtml(runtime.message)}</p><label>Nickname<input data-online-input="nickname" maxlength="24" autocomplete="nickname" placeholder="Your nickname"></label><div class="cg-online-entry-actions"><button class="pill-btn" type="button" data-online-action="create-room">Create Room</button><label>Room code<input data-online-input="room-code" maxlength="6" autocomplete="off" inputmode="text" placeholder="ABC234"></label><button class="ghost-btn" type="button" data-online-action="join-room">Join Room</button></div>${anonymous ? `<p class="cg-online-auth__note">A temporary anonymous test identity will be created only after you choose Create or Join.</p>` : `<form class="cg-online-test-login" data-online-test-login><span class="cg-eyebrow">TEST ACCOUNT FALLBACK</span><label>Email<input type="email" name="email" autocomplete="username" required></label><label>Password<input type="password" name="password" autocomplete="current-password" required></label><button class="ghost-btn" type="submit" ${runtime.pending ? "disabled" : ""}>${runtime.pending ? "Signing in…" : "Sign in to Test Project"}</button></form>`}<a class="cg-text-action" href="/games?mode=together" data-online-route="/games?mode=together">Play Together instead</a></section>`;
  }

  function lobbyMarkup() {
    return `<section class="cg-online-auth" aria-labelledby="cg-online-lobby-title"><span class="cg-eyebrow">PLAY ONLINE TEST LOBBY</span><h2 id="cg-online-lobby-title">Create or join a private room.</h2><p>${escapeHtml(runtime.message)}</p><label>Nickname<input data-online-input="nickname" maxlength="24" autocomplete="nickname" placeholder="Your nickname"></label><div class="cg-online-entry-actions"><button class="pill-btn" type="button" data-online-action="create-room" ${runtime.pending ? "disabled" : ""}>Create Room</button><label>Room code<input data-online-input="room-code" maxlength="6" autocomplete="off" placeholder="ABC234"></label><button class="ghost-btn" type="button" data-online-action="join-room" ${runtime.pending ? "disabled" : ""}>Join Room</button></div><button class="cg-text-action" type="button" data-online-action="sign-out">Clear Online Test Session</button></section>`;
  }

  function roomMarkup() {
    const room = runtime.room; const activePlayers = runtime.participants.filter((player)=>!player.left_at); const own = playerByNumber(runtime.playerNumber);
    const expires = room?.expires_at ? new Date(room.expires_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "soon";
    return `<section class="cg-online-room" aria-labelledby="cg-room-title"><div class="cg-online-room__header"><div><span class="cg-eyebrow">PRIVATE TEST ROOM</span><h2 id="cg-room-title">Room <strong>${escapeHtml(room.room_code)}</strong></h2><p>Expires around ${escapeHtml(expires)} · no room code is stored in a URL or localStorage.</p></div><div class="cg-control-row"><button class="ghost-btn" type="button" data-online-action="copy-code">Copy Code</button><button class="cg-text-action" type="button" data-online-action="leave">Leave Room</button></div></div><div class="cg-online-players">${[1,2].map((number)=>{const player=playerByNumber(number);const connection=participantConnection(player);return `<article class="cg-online-player ${player?.is_ready?"is-ready":""}"><span>PLAYER ${number}${number===1?" · HOST":""}</span><strong>${escapeHtml(player?.nickname||"Waiting for partner…")}</strong><small>${player ? `${player.is_ready?"Ready":"Not ready"} · ${connection}` : "Share the six-character code privately"}</small></article>`;}).join("")}</div>${["waiting","complete"].includes(room.status) ? `<button class="pill-btn" type="button" data-online-action="ready" ${own?.is_ready||activePlayers.length<2||runtime.pending?"disabled":""}>${own?.is_ready?"Waiting for partner…":"I’m Ready"}</button>` : ""}${room.status === "ready" ? runtime.playerNumber === 1 ? `<div class="cg-online-game-picker"><span class="cg-eyebrow">BOTH READY · HOST CHOOSES</span><div>${GAME_IDS.map((id)=>`<button type="button" data-online-action="select-game" data-game-id="${id}" ${runtime.pending?"disabled":""}>${escapeHtml(GAME_TITLES[id])}</button>`).join("")}</div><p>Reaction Test stays Play Together only because internet latency cannot provide a fair race.</p></div>` : `<div class="cg-stage-status">Both ready. Waiting for the host to choose a game…</div>` : ""}${["active","complete"].includes(room.status)&&room.game_id?gameControlMarkup():""}<p class="cg-online-room__status" role="status">${escapeHtml(runtime.message)}</p><span class="sr-only" data-online-live aria-live="polite" aria-atomic="true"></span></section>`;
  }

  function renderCurrent() {
    if (!runtime.root) return;
    if (runtime.status === "loading") runtime.root.innerHTML = `<section class="cg-online-state"><span class="cg-status-badge">CHECKING SETUP</span><h2>Preparing the private test lobby…</h2><p>${escapeHtml(runtime.message)}</p></section>`;
    else if (runtime.status === "setup_required") runtime.root.innerHTML = setupMarkup();
    else if (runtime.status === "auth_required") runtime.root.innerHTML = authMarkup();
    else if (runtime.room) runtime.root.innerHTML = roomMarkup();
    else runtime.root.innerHTML = lobbyMarkup();
  }

  function readInputs() {
    return {
      nickname: sanitizeNickname(runtime.root?.querySelector('[data-online-input="nickname"]')?.value),
      roomCode: normalizeRoomCode(runtime.root?.querySelector('[data-online-input="room-code"]')?.value)
    };
  }

  async function runPending(task) {
    if (runtime.pending) return;
    runtime.pending = true; renderCurrent();
    try { await task(); }
    catch (error) { runtime.message = safeMessage(error); }
    finally { runtime.pending = false; renderCurrent(); }
  }

  async function copyRoomCode() {
    const code = runtime.room?.room_code || "";
    if (!code || typeof global.navigator?.clipboard?.writeText !== "function") {
      runtime.message = "Copy is unavailable in this browser. Select the room code and share it privately.";
      renderCurrent();
      return;
    }
    try {
      await global.navigator.clipboard.writeText(code);
      runtime.message = "Room code copied.";
    } catch (_) {
      runtime.message = "Copy was blocked by the browser. Select the room code and share it privately.";
    }
    renderCurrent();
  }

  function retryConfiguration() {
    runtime.config = null;
    runtime.client = null;
    runtime.initialized = false;
    runtime.status = "loading";
    runtime.message = "Checking the dedicated test service…";
    renderCurrent();
    return initialize();
  }

  function bindRoot(root) {
    if (runtime.boundRoots.has(root)) return;
    runtime.boundRoots.add(root);
    root.addEventListener("input", (event) => {
      const code = event.target.closest?.('[data-online-input="room-code"]');
      if (code) code.value = normalizeRoomCode(code.value);
    });
    root.addEventListener("submit", (event) => {
      if (!event.target.matches("[data-online-test-login]")) return;
      event.preventDefault();
      const form = new FormData(event.target);
      runPending(() => signInTestAccount(form.get("email"), form.get("password")));
    });
    root.addEventListener("click", (event) => {
      const route = event.target.closest?.("[data-online-route]");
      if (route) { event.preventDefault(); runtime.navigate?.(route.dataset.onlineRoute); return; }
      const button = event.target.closest?.("[data-online-action]");
      if (!button) return;
      const action = button.dataset.onlineAction;
      if (action === "create-room") {
        const { nickname } = readInputs();
        return runPending(() => createRoom(nickname));
      }
      if (action === "join-room") {
        const { nickname, roomCode } = readInputs();
        return runPending(() => joinRoom(roomCode, nickname));
      }
      if (action === "sign-out") return runPending(signOutOnline);
      if (action === "ready") return setReady(true);
      if (action === "select-game") return selectGame(button.dataset.gameId);
      if (action === "leave") return runPending(() => leaveRoom(true));
      if (action === "copy-code") return copyRoomCode();
      if (action === "retry-config") return retryConfiguration();
      if (action === "game-action") {
        const payload = { type: button.dataset.actionType };
        if (button.dataset.index !== undefined) payload.index = Number(button.dataset.index);
        return submitAction(payload);
      }
    });
  }

  function render(root, { navigate } = {}) {
    if (!root) return;
    runtime.root = root;
    runtime.navigate = navigate;
    bindRoot(root);
    renderCurrent();
    if (runtime.initialized) {
      if (runtime.room && !runtime.channel) subscribeToRoom(runtime.room.id);
    } else initialize();
  }

  function cleanup() {
    unsubscribeRoom();
    runtime.root = null;
    runtime.navigate = null;
  }

  global.FlirtyFlipOnlineGames = Object.freeze({
    cleanup,
    getReadiness,
    render,
    __test: Object.freeze({
      GAME_IDS,
      REQUIRED_SCHEMA_VERSION,
      animationDuration,
      calculateWheelRotation,
      normalizeRoomCode,
      participantConnection,
      resolveServerResult,
      safeMessage,
      sanitizeNickname,
      visualStageAfterAction,
      validatePublicConfig
    })
  });
})(window);
