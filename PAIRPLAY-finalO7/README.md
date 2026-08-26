# FLIRTYFLIP

FLIRTYFLIP is a responsive date-night card game with local play, shareable online-room setup, a browsable game catalog, guided courses, favorites, optional Supabase authentication, and the FlirtyFlip Academy learning storefront.

## Run locally

Routes use the browser History API, so serve this directory through a web server instead of opening `index.html` directly.

```bash
cd PAIRPLAY-finalO7
npx --yes vercel@latest dev --local --listen 127.0.0.1:4173
```

Then open `http://127.0.0.1:4173`. `--local` uses `vercel.json` without linking a Vercel project, pulling remote variables, or deploying. Without local Academy credentials, public pages remain browsable and enrollment stays unavailable.

No build command or persistent package installation is required.

## Application routes

- `/` — home
- `/play` — mood selection
- `/play/setup` — deck-size selection
- `/game` — active local game
- `/results` — completed-game summary
- `/games` — filterable game catalog
- `/courses` — filterable course catalog
- `/course/:slug` — course detail and lesson reader
- `/academy` — FlirtyFlip Academy catalog
- `/academy/course/:slug` — public Academy course landing page
- `/academy/pricing/:slug` — authenticated enrollment entry
- `/academy/dashboard` — entitlement-backed student dashboard
- `/academy/learn/:course/:lesson` — protected lesson reader
- `/academy/payment/:status` — payment result state
- `/online` — online-room setup
- `/how` — how it works
- `/support` — support pages

The central client-side router lives in `script.js`. It uses `history.pushState`, `history.replaceState`, and `popstate`, and safely redirects routes that require missing game or course state.

## Local state

- The current game is stored in `sessionStorage` under `flirtyflip-game-session-v1` so refresh and browser Back/Forward preserve the round.
- Favorites and course progress use versioned `localStorage` keys.
- Guest identity is stored locally and remains separate from game progress.

## Deploy to Vercel

Set the Vercel project Root Directory to `PAIRPLAY-finalO7`. No build command is required. The included `vercel.json` rewrites application paths to `index.html` so direct route visits and refreshes work. Vercel resolves files and `/api` Functions before the SPA catch-all.

## Supabase authentication

The app supports log in, sign up, password reset, and guest mode. Guest mode works without external configuration. Browser authentication continues to use the existing publishable Supabase configuration block in `index.html`:

```html
<script>
  window.PAIRPLAY_SUPABASE_CONFIG = {
    url: "https://YOUR_PROJECT_REF.supabase.co",
    anonKey: "YOUR_ANON_KEY"
  };
</script>
```

If configured, the Supabase client is loaded on demand and email/password actions use that project. Academy purchase and lesson APIs accept only a real Supabase access token; local guest profiles remain browse-only.

## FlirtyFlip Academy architecture

Academy public metadata and paid access are deliberately separated:

- `academy-data.js` contains public merchandising metadata and curriculum previews only. It must never contain paid lesson bodies, private media URLs, prices, or credentials.
- `academy.js`, `academy-payment.js`, and `academy.css` own the SPA screens, authenticated API calls, Checkout state, and responsive presentation.
- `api/academy/` contains Vercel Functions for pricing, order creation, payment verification, webhooks, entitlements, protected lessons, and account-owned progress.
- `supabase/migrations/20260827000000_flirtyflip_academy.sql` creates the authoritative pricing, payment, entitlement, lesson, progress, webhook, and RLS model. Create the private Storage bucket separately through Supabase Storage.

The browser never grants access. Order amounts are read from `academy_courses.price_minor`, Razorpay signatures and captured payment status are checked on the server, and an idempotent database function activates the entitlement.

### Academy setup

1. Review and apply `supabase/migrations/20260827000000_flirtyflip_academy.sql` to the same Supabase project used by the website.
2. Create an `academy-private` bucket in Supabase Storage with **Public bucket** disabled. Add real paid lesson bodies to `academy_lessons.body`. Upload private media below a course folder such as `confident-connection/<YOUR_FILE>` and store only that object path in `academy_lessons.media_path`.
   The existing `/courses` feature remains public and still contains its legacy lesson copy in `script.js`. The seeded Academy titles reuse verified public metadata only; review or migrate any overlapping legacy material before enabling it as a paid Academy product.
3. Add a verified price in minor currency units and enable only the real course you intend to sell. For example, supply your real value in place of the placeholder—do not copy a made-up amount:

   ```sql
   update public.academy_courses
   set price_minor = <REAL_AMOUNT_IN_MINOR_UNITS>, checkout_enabled = true
   where slug = 'confident-connection';
   ```

4. Set the variables listed in `.env.example` in Vercel Project Settings. Use Vercel environment scopes intentionally for Preview and Production. `SUPABASE_SERVICE_ROLE_KEY`, `RAZORPAY_KEY_SECRET`, and `RAZORPAY_WEBHOOK_SECRET` are server-only.
5. In Razorpay, create a webhook pointing to `https://YOUR_DOMAIN/api/academy/webhook` and subscribe to `payment.captured`, `order.paid`, and `refund.processed`. Set the identical signing secret in `RAZORPAY_WEBHOOK_SECRET`.
6. Confirm Razorpay capture settings and complete a test-mode transaction before enabling a course. A payment that remains merely authorized does not unlock content.

Until a real database price, checkout flag, and payment credentials are all present, the Academy intentionally shows **Enrollment opening soon** and cannot open Checkout.

Run the local server-side security tests without live credentials:

```bash
node --test tests/academy-server.test.mjs
```

### Academy security notes

- Keep all `.env` files and Vercel credentials out of Git; only `.env.example` belongs in the repository.
- Never expose the Supabase service role or Razorpay secrets to `index.html`, browser JavaScript, logs, analytics, or query strings.
- Preserve the RLS policies and service-role-only fulfillment functions when changing the schema.
- Use the database order ID stored alongside the Razorpay order; do not trust a browser-supplied price, course title, access flag, or payment status.
- Private lesson media links expire after ten minutes and are created only after an entitlement check.

### Academy production-readiness checklist

Keep enrollment disabled until every item below has been completed and verified in a non-production environment.

- [ ] **Supabase migration:** Back up the project, review `20260827000000_flirtyflip_academy.sql`, and apply it once to the same Supabase project used by FlirtyFlip Auth. Confirm all Academy tables have RLS enabled, authenticated users cannot insert entitlements or payment orders, and both payment RPCs are executable only by `service_role`.
- [ ] **Course content:** Supply and editorially approve every paid lesson body. Confirm titles, lesson counts, audience labels, adult/consent language, and public previews match the final material; leave unfinished lessons unpublished.
- [ ] **Course pricing:** Supply the real ISO currency and amount in minor units for each course. Review the amount in Supabase and Razorpay Test Mode before setting `checkout_enabled = true`; do not enable any unfinished course.
- [ ] **Private lesson media:** Create the non-public `academy-private` bucket through Supabase Storage, add no public read policy, upload each object below its course slug folder, and store only the object path in `academy_lessons.media_path`. Verify an anonymous URL fails and an entitled API response returns a ten-minute signed URL.
- [ ] **Vercel environment variables:** Add `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, and `RAZORPAY_WEBHOOK_SECRET` with deliberate Preview/Production scopes. Confirm secrets never appear in browser bundles, logs, analytics, or Git.
- [ ] **Razorpay Test Mode:** Use only `rzp_test_...` credentials. Confirm payment capture settings, allowed domains, business/account readiness, and the final customer-facing business name before testing Checkout.
- [ ] **Razorpay webhook:** In Test Mode, point the webhook to the approved Preview URL at `/api/academy/webhook`; subscribe to `payment.captured`, `order.paid`, and `refund.processed`; and use the same strong webhook secret in Vercel. Verify raw-body signatures, duplicate `x-razorpay-event-id` deliveries, out-of-order events, and response latency. Configure Vercel Firewall rate limits for `/api/academy/*` while allowing signed Razorpay webhook delivery.
- [ ] **Purchase and entitlement tests:** Test successful capture, authorization/pending, failure, cancellation, repeated checkout clicks, duplicate callbacks, duplicate webhooks, refresh, delayed webhook delivery, refund, and repurchase. Confirm only a matching captured payment grants access, refund revokes only its own entitlement, guests cannot buy, another account cannot read the order, and direct lesson/media URLs remain locked.
- [ ] **Policies and support:** Supply and approve the real privacy, terms, refund, contact, and support information linked from Academy before enrollment opens. No placeholder policy should be treated as production approval.
- [ ] **Final merge and deployment:** Re-run tests and a production-like Preview smoke test, review the complete branch diff, obtain explicit approval, merge the feature branch into `main`, deploy through the normal Vercel production workflow, and repeat purchase/access smoke tests before considering enrollment live.

## Current limitation

The online-room interface and shareable room URL are implemented, but real cross-device presence and synchronized cards still require a realtime backend such as Supabase Realtime.
