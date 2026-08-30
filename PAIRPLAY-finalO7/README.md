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

Online mini-game rooms are intentionally disabled by default. The UI displays `Setup required` and does not generate fake room codes or reuse the existing production authentication client.

Before enabling online rooms:

1. Create or select a dedicated **non-production** Supabase project.
2. Review and apply `supabase/migrations/20260830000000_couple_games_realtime.sql` to that project only. The migration has not been applied by this branch.
3. Verify authenticated-only RLS, the two-player limit, optimistic state versioning, idempotent actions, disconnect behavior, and the two-hour expiry job in two separate browser sessions.
4. Provide only the dedicated project URL and publishable key at runtime:

   ```html
   <script>
     window.FLIRTYFLIP_ONLINE_GAMES_CONFIG = {
       enabled: true,
       supabaseUrl: "https://YOUR_TEST_PROJECT_REF.supabase.co",
       publishableKey: "sb_publishable_YOUR_TEST_KEY"
     };
   </script>
   ```

5. Implement and review the Realtime client adapter, then change its readiness result only after the two-session security tests pass.

Never expose a service-role key in browser configuration. Production remains unchanged until the dedicated online flow is explicitly approved, verified, and deployed.
