// ========================================
// COUPLE MINI-GAME ROUTING AND SECURITY TESTS
// Guard script ordering, navigation entry points, scoped styling and the unapplied online schema.
// ========================================
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const [html, script, styles, online, migration, vercel] = await Promise.all([
  readFile(new URL("../index.html", import.meta.url), "utf8"),
  readFile(new URL("../script.js", import.meta.url), "utf8"),
  readFile(new URL("../couple-games.css", import.meta.url), "utf8"),
  readFile(new URL("../couple-games-online.js", import.meta.url), "utf8"),
  readFile(new URL("../supabase/migrations/20260830000000_couple_games_realtime.sql", import.meta.url), "utf8"),
  readFile(new URL("../vercel.json", import.meta.url), "utf8")
]);

test("desktop and mobile navigation expose only the two new Games modes", () => {
  const gamesMenu = html.slice(html.indexOf('id="games-menu"'), html.indexOf('data-key="courses"'));
  assert.match(gamesMenu, /Play Together/);
  assert.match(gamesMenu, /Play on one device/);
  assert.match(gamesMenu, /Play Online/);
  assert.match(gamesMenu, /Create private room/);
  assert.match(gamesMenu, /Join with room code/);
  assert.doesNotMatch(gamesMenu, /Quick Games|Conversation|Truth &amp; Dare|Romantic|Flirty/);
  assert.match(html, /href="\/games\?mode=together"[^>]*>Play Together/);
  assert.match(html, /href="\/games\?mode=online"[^>]*>Play Online/);
});

test("mini-game assets load before the main router and keep legacy game-turn support", () => {
  for (const asset of ["/game-turn.js", "/couple-games-data.js", "/couple-games-online.js", "/couple-games.js", "/script.js"]) {
    assert.ok(html.includes(`src="${asset}"`), `${asset} must load`);
  }
  assert.ok(html.indexOf('src="/game-turn.js"') < html.indexOf('src="/script.js"'));
  assert.ok(html.indexOf('src="/couple-games.js"') < html.indexOf('src="/script.js"'));
  assert.match(html, /href="\/couple-games\.css"/);
});

test("the shared router delegates only /games to the isolated engine", () => {
  assert.match(script, /function renderCoupleGamesRoute\(url\)/);
  assert.match(script, /window\.FlirtyFlipCoupleGames\.render\(root/);
  assert.match(script, /window\.FlirtyFlipCoupleGames\?\.cleanup\?\.\(\)/);
  assert.match(script, /url\.searchParams\.get\("mode"\) !== "together"/);
  assert.match(script, /renderFavoritesCatalog\(\)/);
});

test("mini-game styles cover phone grids, staged results, 3D controls and reduced motion", () => {
  assert.match(styles, /@media \(max-width:520px\)/);
  assert.match(styles, /@media \(prefers-reduced-motion:reduce\)/);
  assert.match(styles, /min-height:44px/);
  assert.doesNotMatch(styles, /filter:\s*blur/);
  assert.doesNotMatch(styles, /backdrop-filter/);
  assert.match(styles, /\.cg-winning-line/);
  assert.match(styles, /@keyframes cg-celebrate/);
  assert.match(styles, /\.cg-result-card/);
  assert.match(styles, /\[data-cg-live\][^{]*\{[^}]*clip-path:inset\(50%\)/s);
  assert.match(styles, /transform-style:preserve-3d/);
  assert.match(styles, /@keyframes cg-coin-flip/);
  assert.match(styles, /@keyframes cg-dice-tumble/);
  assert.match(styles, /@keyframes cg-box-sequence/);
  assert.doesNotMatch(styles, /\.cg-result-modal/);
});

test("online client requires a separate publishable configuration and never reuses an existing auth client", () => {
  assert.match(online, /\/api\/online\/client-config/);
  assert.match(online, /sb_publishable_/);
  assert.match(online, /sessionStorageAdapter/);
  assert.match(online, /signInAnonymously/);
  assert.doesNotMatch(online, /PAIRPLAY_SUPABASE_CONFIG|anonKey|service[_-]?role/i);
});

test("Vercel keeps SPA deep links while allowing the Online config function to execute", () => {
  const config = JSON.parse(vercel);
  assert.deepEqual(config.rewrites, [{ source: "/((?!api/).*)", destination: "/index.html" }]);
});

test("online schema is authenticated, two-player, expiring and replay protected", () => {
  for (const table of ["couple_game_rooms", "couple_game_memberships", "couple_game_participants", "couple_game_actions", "couple_game_rate_limits"]) {
    assert.match(migration, new RegExp(`alter table public\\.${table} enable row level security`, "i"));
    assert.match(migration, new RegExp(`revoke all on public\\.${table} from public, anon, authenticated`, "i"));
  }
  assert.match(migration, /player_number in \(1, 2\)/i);
  assert.match(migration, /couple_game_memberships_active_slot_idx/i);
  assert.match(migration, /expires_at timestamptz not null/i);
  assert.match(migration, /unique \(room_id, actor_player_number, idempotency_key\)/i);
  assert.match(migration, /and version = p_expected_version/i);
  assert.match(migration, /grant execute on function public\.couple_game_create_room\(text\) to authenticated/i);
  assert.match(migration, /grant execute on function public\.couple_game_submit_action\(uuid, bigint, uuid, jsonb\) to authenticated/i);
  assert.match(migration, /revoke all on function public\.couple_game_expire_rooms\(\) from public, anon, authenticated/i);
  assert.doesNotMatch(migration, /p_next_state|actor_user_id|host_user_id/i);
  assert.doesNotMatch(migration, /grant\s+(insert|update|delete|all)\s+on[^;]+to\s+(anon|authenticated)/i);
});
