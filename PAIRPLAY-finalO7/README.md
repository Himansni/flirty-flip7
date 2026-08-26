# FLIRTYFLIP

FLIRTYFLIP is a responsive date-night card game with local play, shareable online-room setup, a browsable game catalog, guided courses, favorites, and optional Supabase authentication.

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
- `/games` — filterable game catalog
- `/courses` — filterable course catalog
- `/course/:slug` — course detail and lesson reader
- `/online` — online-room setup
- `/how` — how it works
- `/support` — support pages

The central client-side router lives in `script.js`. It uses `history.pushState`, `history.replaceState`, and `popstate`, and safely redirects routes that require missing game or course state.

## Local state

- The current game is stored in `sessionStorage` under `flirtyflip-game-session-v1` so refresh and browser Back/Forward preserve the round.
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

## Current limitation

The online-room interface and shareable room URL are implemented, but real cross-device presence and synchronized cards still require a realtime backend such as Supabase Realtime.
