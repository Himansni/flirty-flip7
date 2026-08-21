# PAIRPLAY — Couple Card Game MVP

A no-backend MVP for an online couple card game.

## Run locally

Open `index.html` in a browser.

For the best local development experience, use VS Code + Live Server.

## Deploy to Netlify

1. Create a Netlify account.
2. Drag the `couple-card-game` folder into Netlify Drop, or connect a Git repository.
3. No build command is required.
4. Publish directory: `/`

## Current MVP

- Premium responsive landing page
- Mood selection
- Sweet / Romantic / Deep / Flirty / Spicy 18+ modes
- 10 / 25 / 50 card lengths
- 3D card flip
- Randomized prompts
- Progress tracking
- Skip card
- Favorite interaction
- Completion screen
- No login
- No database
- No payment
- Mobile-first UI

## Final visual/gameplay changes

- Black + red cinematic theme with stronger typography and neon-red glow.
- Mood-specific typography/pattern treatment on mood cards and game cards.
- Card-sweep transition: tapping the current card immediately advances to the next prompt, already revealed.
- `NEXT CARD →` remains available as a second way to advance.
- Added a front-end Play Online room flow: choose mood -> choose card count -> create/share room -> waiting/connection state -> start game.
- Added clear comments above major HTML, CSS and JavaScript sections so future changes are easier to locate.

> Note: the project is still a no-backend MVP. The Play Online lobby and shareable room URL are implemented as the front-end flow, while real cross-device partner presence/synchronization still requires a realtime backend such as the Supabase upgrade listed below.

## Supabase auth setup

This app now supports a simple Supabase auth flow with three modes:

- Log in
- Sign up
- Guest mode

To enable real accounts, open `index.html` and replace the placeholder values in the Supabase config block with your own project URL and anon key:

```html
<script>
  window.PAIRPLAY_SUPABASE_CONFIG = {
    url: "https://YOUR_PROJECT_REF.supabase.co",
    anonKey: "YOUR_ANON_KEY"
  };
</script>
```

Guest mode works instantly without configuration and stores the local session in the browser. If Supabase is configured, email/password auth will use the configured project automatically.

## Next upgrades

1. Add 300+ original cards.
2. Add localStorage for favorites/history.
3. Add online room codes with Supabase Realtime.
4. Add profile metadata and saved game history.
5. Add premium card packs and payments.
6. Add admin panel.
7. Add analytics.
