# FLIRTYFLIP

FLIRTYFLIP is a responsive date-night card game with the original question-card experience, eight one-device couple mini-games, guided courses, favorites, and optional Supabase authentication.

## Run locally

Routes use the browser History API, so serve this directory through a web server instead of opening `index.html` directly.

```bash
cd PAIRPLAY-finalO7
python3 -m http.server 4173
```

Then open `http://localhost:4173`. A production-like local server should fall back unknown paths such as `/games` and `/course/confident-connection` to `index.html`.

No build command or package installation is required.

## Application routes

- `/` — home
- `/play` — mood selection
- `/play/setup` — deck-size selection
- `/game` — active local game
- `/results` — completed-game summary
- `/games` — choose local or online mini-game mode
- `/games?mode=together` — optional nicknames and eight playable one-device games
- `/games?mode=together&game=:id` — direct mini-game entry
- `/games?mode=online` — secure online-room readiness (shows Setup required until configured)
- `/courses` — filterable course catalog
- `/course/:slug` — course detail and lesson reader
- `/online` — online-room setup
- `/how` — how it works
- `/support` — support pages

The central client-side router lives in `script.js`. It uses `history.pushState`, `history.replaceState`, and `popstate`, and safely redirects routes that require missing game or course state.

## Local state

- The current game is stored in `sessionStorage` under `flirtyflip-game-session-v1` so refresh and browser Back/Forward preserve the round.
- Optional mini-game nicknames and the sound preference are stored in `sessionStorage` under `flirtyflip-couple-games-session-v1`; they are never sent to Supabase.
- Favorites and course progress use versioned `localStorage` keys.
- Guest identity is stored locally and remains separate from game progress.

## Deploy to Vercel

Set the Vercel project Root Directory to `PAIRPLAY-finalO7`. No build command is required. The included `vercel.json` rewrites application paths to `index.html` so direct route visits and refreshes work.

## Supabase authentication

The app supports log in, sign up, password reset, and guest mode. Guest mode works without external configuration. To enable real accounts, replace the placeholder values in the Supabase configuration block in `index.html`:

```html
<script>
  window.PAIRPLAY_SUPABASE_CONFIG = {
    url: "https://YOUR_PROJECT_REF.supabase.co",
    anonKey: "YOUR_ANON_KEY"
  };
</script>
```

If configured, the Supabase client is loaded on demand and email/password actions use that project.

## Couple mini-games

The local catalog includes Tic-Tac-Toe, Love Toss, Couple Wheel, Rapid Fire, Mystery Box, Reaction Test, Couple Dice, and Choose a Door. Random outcomes use the browser Web Crypto API. Every challenge is optional and every game supports keyboard controls, phone layouts, reduced motion, replay, and safe exit confirmation during an active round.

## Secure online-room setup

Online mini-game rooms are intentionally disabled by default. The isolated adapter uses its own Supabase client, sessionStorage auth namespace and `couple_game_*` database objects. It never reuses the production FlirtyFlip or Academy auth clients.

The reviewed test target is `hacnnarthuzyblahoyqu` (**FlirtyFlip Academy Test**, non-production). It can host this feature only because the migration uses separate tables, functions, RLS policies and Realtime filters; it does not read or modify Academy tables.

Approval-gated setup order:

1. Review `supabase/migrations/20260830000000_couple_games_realtime.sql`. It has **not** been applied by this branch. Before applying, use metadata-only queries to confirm the connected project reference is exactly `hacnnarthuzyblahoyqu` and that no `couple_game_*` tables, functions or policies already exist. If any exist, stop and create a forward-only migration instead of applying this foundation file over them.
2. Apply the migration in one transaction only to the verified test reference `hacnnarthuzyblahoyqu` after explicit approval. Verify all five tables have RLS, browser roles have SELECT only on rooms/participants/actions, private membership and rate-limit tables have no browser grants, every RPC grant matches the migration, and only the three sanitized tables are in `supabase_realtime`.
3. Initially test with two existing authenticated test accounts. This is safer than enabling anonymous sign-in before room-code throttling and RLS are verified.
4. If low-friction guest play is approved later, enable **Authentication → Providers → Anonymous Sign-Ins** in the test project only after reviewing Supabase Auth rate limits and CAPTCHA/bot protection. This dashboard change requires separate approval. Do not reuse the Academy login UI or session.
5. Add the Preview-only variables listed in `.env.example`. Keep `ONLINE_GAMES_ENABLED=false` and `ONLINE_GAMES_ANONYMOUS_AUTH_ENABLED=false` until the corresponding approval gates pass.
6. In **Integrations → Cron**, configure a reviewed database-function job to invoke `couple_game_expire_rooms()` on a regular interval. The database owner used by Supabase Cron is accepted; browser roles remain revoked. The function marks rooms expired at their deadline and deletes only closed/expired Online rows after 24 hours, without requiring a service-role key in Vercel.
7. Verify the two-session matrix below while the feature remains Preview-only.
8. Only after those checks pass, set `ONLINE_GAMES_ENABLED=true` in Preview. Production remains unchanged.

Preview variables:

- `ONLINE_GAMES_SUPABASE_URL=https://hacnnarthuzyblahoyqu.supabase.co/`
- `ONLINE_GAMES_SUPABASE_PUBLISHABLE_KEY=` the test project’s publishable key; public by design, never a service-role key
- `ONLINE_GAMES_EXPECTED_PROJECT_REF=hacnnarthuzyblahoyqu`
- `ONLINE_GAMES_SCHEMA_VERSION=20260830000000-v2`
- `ONLINE_GAMES_ENABLED=false` until migration and two-session verification pass
- `ONLINE_GAMES_ANONYMOUS_AUTH_ENABLED=false` until the separate anonymous-auth approval passes

Two-session security and synchronization matrix:

- Create in browser A and join in browser B; both must see the same sanitized room, participants and version.
- Try malformed, unknown and expired codes; all must return the same safe unavailable response. Seven join attempts in five minutes must trigger the database limit.
- Race browsers B and C for player two; one joins and one receives the generic unavailable response. A later third player must also be rejected.
- Ready both players; only player one can select a game, and both clients must receive the same selected game and initial turn.
- Exercise all seven supported games. The valid turn must advance the version; an unrelated user, the wrong turn, an invalid payload and a stale version must be denied.
- Replay the same idempotency key; it must return the accepted action without creating another action row or changing the room version. Concurrent valid actions at the same version must accept exactly one.
- Confirm Wheel, Dice, Coin, Door, Mystery Box and Rapid Fire outcomes are identical in both sessions and originate from the accepted database action.
- Refresh each browser and interrupt one connection for more than 45 seconds; its own slot must restore from session-only room state and the partner must see reconnecting/connected status.
- Leave as player two; player one must return to a cleared waiting lobby. Leave as host; both clients must see a closed room.
- Ready both after a completed result, then choose the same game for a rematch or a different game. Results from the completed version must remain immutable.
- Advance a test room past expiry and run the trusted cleanup function; further actions and joins must fail, then deletion must wait at least 24 hours.
- With a third authenticated account, attempt direct SELECTs and every RPC using another room UUID. RLS/membership checks must reveal no room, participant, action or player data.

The public config endpoint returns only the Supabase project URL, publishable key, project reference, reviewed schema version and boolean feature flags. It never reads or returns a service-role key. Reaction Test remains Play Together only because an internet race cannot be represented as fair without a separately proven latency model.
