// ========================================
// PLAY ONLINE SECURITY CONTRACT TESTS
// Validate the unapplied SQL contract and isolated browser adapter without contacting Supabase.
// ========================================
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";
import { buildOnlineClientConfig } from "../api/online/client-config.mjs";

const [dataSource, onlineSource, migration, userLockMigration, joinConflictMigration, envExample] = await Promise.all([
  readFile(new URL("../couple-games-data.js", import.meta.url), "utf8"),
  readFile(new URL("../couple-games-online.js", import.meta.url), "utf8"),
  readFile(new URL("../supabase/migrations/20260830000000_couple_games_realtime.sql", import.meta.url), "utf8"),
  readFile(new URL("../supabase/migrations/20260831000000_couple_games_user_locking.sql", import.meta.url), "utf8"),
  readFile(new URL("../supabase/migrations/20260831010000_couple_games_join_conflict_repair.sql", import.meta.url), "utf8"),
  readFile(new URL("../.env.example", import.meta.url), "utf8")
]);

const stored = new Map();
const window = {
  addEventListener() {},
  clearInterval,
  clearTimeout,
  crypto: { randomUUID: () => "10000000-1000-4000-8000-100000000001" },
  matchMedia: () => ({ matches: false }),
  sessionStorage: {
    getItem(key) { return stored.get(key) ?? null; },
    removeItem(key) { stored.delete(key); },
    setItem(key, value) { stored.set(key, value); }
  },
  setInterval,
  setTimeout
};
vm.runInNewContext(dataSource, { window }, { filename: "couple-games-data.js" });
vm.runInNewContext(onlineSource, { URL, window }, { filename: "couple-games-online.js" });
const adapter = window.FlirtyFlipOnlineGames.__test;

test("public config is disabled by default and never returns a secret value", () => {
  const disabled = buildOnlineClientConfig({
    ONLINE_GAMES_SUPABASE_URL: "https://hacnnarthuzyblahoyqu.supabase.co/",
    ONLINE_GAMES_SUPABASE_PUBLISHABLE_KEY: "sb_publishable_example",
    ONLINE_GAMES_EXPECTED_PROJECT_REF: "hacnnarthuzyblahoyqu",
    ONLINE_GAMES_SCHEMA_VERSION: "20260830000000-v2",
    ONLINE_GAMES_ENABLED: "false",
    ONLINE_GAMES_ANONYMOUS_AUTH_ENABLED: "true",
    SUPABASE_SERVICE_ROLE_KEY: "must-never-be-returned"
  });
  assert.equal(disabled.enabled, false);
  assert.equal(disabled.anonymousAuthEnabled, false);
  assert.doesNotMatch(JSON.stringify(disabled), /must-never-be-returned|service.role/i);

  const missing = buildOnlineClientConfig({});
  assert.deepEqual(missing, {
    enabled: false,
    anonymousAuthEnabled: false,
    schemaVersion: "20260830000000-v2",
    status: "setup_required"
  });
});

test("forward-only join repair uses verified constraints and preserves the per-user lock", () => {
  assert.doesNotMatch(joinConflictMigration, /\b(drop\s+(table|schema|policy)|truncate|delete\s+from|alter\s+table[^;]+drop)\b/i);
  assert.doesNotMatch(joinConflictMigration, /academy|razorpay|entitlement|purchase|production/i);
  assert.match(joinConflictMigration, /on conflict on constraint couple_game_memberships_pkey/i);
  assert.match(joinConflictMigration, /on conflict on constraint couple_game_participants_pkey/i);
  assert.doesNotMatch(joinConflictMigration, /on conflict\s*\(\s*room_id/i);
  assert.match(joinConflictMigration, /pg_advisory_xact_lock[\s\S]+hashtextextended\('couple-game-user:' \|\| v_user_id::text, 0\)/i);
  assert.match(joinConflictMigration, /security definer set search_path = pg_catalog, public/i);
  assert.match(joinConflictMigration, /return query select v_room\.id, v_existing, null::text/i);
  assert.match(joinConflictMigration, /grant execute on function public\.couple_game_join_room\(text, text\) to authenticated/i);
});

test("public config accepts only a matching HTTPS Supabase project and reviewed schema", () => {
  const valid = buildOnlineClientConfig({
    ONLINE_GAMES_SUPABASE_URL: "https://hacnnarthuzyblahoyqu.supabase.co/",
    ONLINE_GAMES_SUPABASE_PUBLISHABLE_KEY: "sb_publishable_example",
    ONLINE_GAMES_EXPECTED_PROJECT_REF: "hacnnarthuzyblahoyqu",
    ONLINE_GAMES_SCHEMA_VERSION: "20260830000000-v2",
    ONLINE_GAMES_ENABLED: "true",
    ONLINE_GAMES_ANONYMOUS_AUTH_ENABLED: "false"
  });
  assert.equal(valid.enabled, true);
  assert.equal(valid.projectRef, "hacnnarthuzyblahoyqu");
  assert.equal(valid.anonymousAuthEnabled, false);

  const mismatch = buildOnlineClientConfig({
    ...Object.fromEntries(Object.entries({
      ONLINE_GAMES_SUPABASE_URL: "https://different-project.supabase.co/",
      ONLINE_GAMES_SUPABASE_PUBLISHABLE_KEY: "sb_publishable_example",
      ONLINE_GAMES_EXPECTED_PROJECT_REF: "hacnnarthuzyblahoyqu",
      ONLINE_GAMES_SCHEMA_VERSION: "20260830000000-v2",
      ONLINE_GAMES_ENABLED: "true"
    }))
  });
  assert.equal(mismatch.enabled, false);
  assert.equal("publishableKey" in mismatch, false);
});

test("browser adapter stays isolated and stores only scoped reconnect state in sessionStorage", () => {
  assert.doesNotMatch(onlineSource, /PAIRPLAY_SUPABASE_CONFIG|global\.localStorage|window\.localStorage|service[_-]?role|p_next_state/i);
  assert.match(onlineSource, /AUTH_STORAGE_KEY = "flirtyflip-online-auth-v1"/);
  assert.match(onlineSource, /ROOM_STORAGE_KEY = "flirtyflip-online-room-v1"/);
  assert.match(onlineSource, /detectSessionInUrl:\s*false/);
  assert.match(onlineSource, /sessionStorageAdapter\(\)/);
  assert.match(onlineSource, /p_expected_version/);
  assert.match(onlineSource, /p_idempotency_key/);
  assert.match(onlineSource, /Number\(row\.new_version\) < Number\(runtime\.room\.version\)/);
  assert.match(onlineSource, /filter: `id=eq\.\$\{roomId\}`/);
  assert.match(onlineSource, /filter: `room_id=eq\.\$\{roomId\}`/);
  assert.match(onlineSource, /config: \{ private: true \}/);
  assert.match(onlineSource, /realtime\.setAuth\(\)/);
});

test("online availability excludes Reaction Test and keeps all seven server-safe games", () => {
  assert.deepEqual(Array.from(adapter.GAME_IDS), [
    "tic-tac-toe", "love-toss", "couple-wheel", "rapid-fire",
    "mystery-box", "couple-dice", "choose-a-door"
  ]);
  assert.equal(adapter.GAME_IDS.includes("reaction-test"), false);
  assert.doesNotMatch(migration, /reaction-test/i);
});

test("input and public-config helpers reject ambiguous codes and mismatched projects", () => {
  assert.equal(adapter.normalizeRoomCode("a1-o0i2z9"), "A2Z9");
  assert.equal(adapter.sanitizeNickname("  <Alex>\n the   Great  "), "Alex the Great");
  assert.equal(adapter.validatePublicConfig({ enabled: true }), null);
  assert.equal(adapter.validatePublicConfig({
    enabled: true,
    anonymousAuthEnabled: false,
    projectRef: "wrong-project",
    publishableKey: "sb_publishable_example",
    schemaVersion: adapter.REQUIRED_SCHEMA_VERSION,
    supabaseUrl: "https://hacnnarthuzyblahoyqu.supabase.co/"
  }), null);
});

test("synchronized results resolve only server-selected indices and preserve reduced motion", () => {
  const wheel = adapter.resolveServerResult("couple-wheel", { category_index: 0, outcome_index: 1, responsibility: 2 });
  assert.equal(wheel.text, window.FlirtyFlipCoupleGameData.wheel[0].outcomes[1].text);
  assert.equal(wheel.responsibility, 2);
  const die = adapter.resolveServerResult("couple-dice", { value: 6, responsibility: 1 });
  assert.equal(die.text, window.FlirtyFlipCoupleGameData.dice[6].text);
  assert.equal(adapter.animationDuration("couple-wheel", false), 4200);
  assert.equal(adapter.animationDuration("couple-wheel", true), 360);
  assert.equal(adapter.visualStageAfterAction("active"), "idle");
  assert.equal(adapter.visualStageAfterAction("complete"), "completed");
});

test("connection status has a bounded reconnect threshold", () => {
  const now = Date.parse("2026-08-31T10:00:00.000Z");
  assert.equal(adapter.participantConnection({ last_seen_at: "2026-08-31T09:59:30.000Z", left_at: null }, now), "connected");
  assert.equal(adapter.participantConnection({ last_seen_at: "2026-08-31T09:58:00.000Z", left_at: null }, now), "reconnecting");
  assert.equal(adapter.participantConnection({ last_seen_at: "2026-08-31T09:59:59.000Z", left_at: "2026-08-31T09:59:59.000Z" }, now), "left");
});

test("migration contains no broad destructive operation or Academy reference", () => {
  assert.doesNotMatch(migration, /\b(drop\s+(table|schema)|truncate|alter\s+table[^;]+drop)\b/i);
  assert.doesNotMatch(migration, /academy|razorpay|entitlement|purchase/i);
  const deletes = Array.from(migration.matchAll(/delete\s+from\s+public\.([a-z0-9_]+)/gi), (match) => match[1]);
  assert.deepEqual(deletes, ["couple_game_rooms", "couple_game_rate_limits"]);
  assert.match(migration, /status in \('closed','expired'\) and updated_at < now\(\) - interval '24 hours'/i);
});

test("forward-only repair serializes create and join with the same per-user transaction lock", () => {
  assert.doesNotMatch(userLockMigration, /\b(drop\s+(table|schema|policy)|truncate|delete\s+from|alter\s+table[^;]+drop)\b/i);
  assert.doesNotMatch(userLockMigration, /academy|razorpay|entitlement|purchase|production/i);
  assert.equal((userLockMigration.match(/pg_advisory_xact_lock/gi) || []).length, 2);
  assert.equal((userLockMigration.match(/hashtextextended\('couple-game-user:' \|\| v_user_id::text, 0\)/gi) || []).length, 2);
  assert.doesNotMatch(userLockMigration, /pg_advisory_lock\s*\(/i);

  for (const functionName of ["create_room", "join_room"]) {
    const declaration = userLockMigration.match(new RegExp(`create or replace function public\\.couple_game_${functionName}[\\s\\S]*?\\$\\$;`, "i"))?.[0];
    assert.ok(declaration, `${functionName} must be redefined`);
    assert.match(declaration, /security definer set search_path =/i);
    assert.match(declaration, /v_user_id uuid := auth\.uid\(\)/i);
    assert.match(declaration, /pg_advisory_xact_lock[\s\S]+v_user_id::text/i);
  }

  assert.ok(
    userLockMigration.indexOf("pg_advisory_xact_lock") < userLockMigration.indexOf("active_room_exists"),
    "create must acquire the user lock before checking active rooms"
  );
  const joinStart = userLockMigration.indexOf("create or replace function public.couple_game_join_room");
  const joinBody = userLockMigration.slice(joinStart);
  assert.ok(joinBody.indexOf("pg_advisory_xact_lock") < joinBody.indexOf("select * into v_room"));
  assert.match(userLockMigration, /on conflict \(room_id, user_id\) do update/i);
  assert.match(userLockMigration, /couple_game_memberships[\s\S]+player_number = 2/i);
});

test("all five isolated tables use RLS and browser roles have no direct write grant", () => {
  for (const table of ["rooms", "memberships", "participants", "actions", "rate_limits"]) {
    assert.match(migration, new RegExp(`alter table public\\.couple_game_${table} enable row level security`, "i"));
    assert.match(migration, new RegExp(`revoke all on public\\.couple_game_${table} from public, anon, authenticated`, "i"));
  }
  assert.doesNotMatch(migration, /grant\s+(insert|update|delete|all)\s+on[^;]+to\s+(anon|authenticated)/i);
  assert.doesNotMatch(migration, /grant select on public\.couple_game_(memberships|rate_limits)/i);
  assert.match(migration, /using \(public\.couple_game_is_participant\(id\)\)/i);
  assert.match(migration, /using \(public\.couple_game_is_participant\(room_id\)\)/i);
  assert.match(migration, /create policy couple_game_realtime_member_read on realtime\.messages/i);
  assert.match(migration, /public\.couple_game_is_participant\([\s\S]+realtime\.topic\(\)/i);
  assert.doesNotMatch(migration, /create policy couple_game_realtime[^;]+for insert/is);
});

test("every SECURITY DEFINER function fixes search_path and hides helper execution", () => {
  const declarations = Array.from(migration.matchAll(/create or replace function[\s\S]*?\$\$;/gi), (match) => match[0]);
  const definers = declarations.filter((declaration) => /security definer/i.test(declaration));
  assert.ok(definers.length >= 10);
  for (const declaration of definers) assert.match(declaration, /security definer set search_path =/i);
  assert.match(migration, /revoke all on function public\.couple_game_random_int\(integer\) from public, anon, authenticated/i);
  assert.match(migration, /revoke all on function public\.couple_game_expire_rooms\(\) from public, anon, authenticated/i);
  assert.match(migration, /grant execute on function public\.couple_game_expire_rooms\(\) to service_role/i);
});

test("room creation and joining resist guessing, enumeration and simultaneous third joins", () => {
  assert.match(migration, /room_code ~ '\^\[A-HJ-NP-Z2-9\]\{6\}\$'/i);
  assert.match(migration, /v_alphabet constant text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'/i);
  assert.match(migration, /'join', 6, interval '5 minutes', interval '15 minutes'/i);
  assert.match(migration, /'room_unavailable'::text/i);
  assert.match(migration, /where room_code = upper\(p_room_code\) for update/i);
  assert.match(migration, /couple_game_memberships_active_slot_idx/i);
  assert.match(migration, /player_number smallint not null check \(player_number in \(1, 2\)\)/i);
});

test("turns, random outcomes, stale actions and replays are database authoritative", () => {
  assert.doesNotMatch(migration, /p_next_state/i);
  assert.match(migration, /where id = p_room_id for update/i);
  assert.match(migration, /if v_room\.version <> p_expected_version then raise exception 'stale_version'/i);
  assert.match(migration, /unique \(room_id, actor_player_number, idempotency_key\)/i);
  assert.match(migration, /unique \(room_id, room_version\)/i);
  assert.match(migration, /if found then return query select v_existing\.room_version/i);
  assert.match(migration, /raise exception 'out_of_turn'/i);
  assert.match(migration, /public\.couple_game_random_int\(2\)/i);
  assert.match(migration, /public\.couple_game_random_int\(6\)/i);
  assert.match(migration, /public\.couple_game_random_int\(10\)/i);
  assert.match(migration, /v_room\.status <> 'active'/i);
});

test("reconnect, leave, expiry and private Realtime paths are explicitly represented", () => {
  assert.match(migration, /create or replace function public\.couple_game_touch_room/i);
  assert.match(migration, /create or replace function public\.couple_game_leave_room/i);
  assert.match(migration, /if v_player = 1 then[\s\S]*status = 'closed'/i);
  assert.match(migration, /else[\s\S]*status = 'waiting', game_id = null/i);
  assert.match(migration, /session_user <> 'postgres'/i);
  assert.match(migration, /current_setting\('request\.jwt\.claim\.role', true\)[^;]+service_role/is);
  for (const table of ["rooms", "participants", "actions"]) {
    assert.match(migration, new RegExp(`alter publication supabase_realtime add table public\\.couple_game_${table}`, "i"));
  }
  assert.doesNotMatch(migration, /alter publication supabase_realtime add table public\.couple_game_(memberships|rate_limits)/i);
});

test("Preview environment template contains only placeholders and defaults both gates off", () => {
  assert.match(envExample, /^ONLINE_GAMES_ENABLED=false$/m);
  assert.match(envExample, /^ONLINE_GAMES_ANONYMOUS_AUTH_ENABLED=false$/m);
  assert.match(envExample, /^ONLINE_GAMES_SCHEMA_VERSION=20260830000000-v2$/m);
  assert.doesNotMatch(envExample, /hacnnarthuzyblahoyqu|eyJ|rzp_|service.role/i);
});
