// ========================================
// PRODUCTION AUTHENTICATION REDIRECT TESTS
// Guard canonical email destinations, the implicit recovery route and token-safe diagnostics.
// ========================================
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { readFile } from "node:fs/promises";
import test from "node:test";

const require = createRequire(import.meta.url);
const redirects = require("../auth-redirects.js");
const [helperSource, html, script, vercel] = await Promise.all([
  readFile(new URL("../auth-redirects.js", import.meta.url), "utf8"),
  readFile(new URL("../index.html", import.meta.url), "utf8"),
  readFile(new URL("../script.js", import.meta.url), "utf8"),
  readFile(new URL("../vercel.json", import.meta.url), "utf8")
]);

test("Production password recovery uses the canonical FlirtyFlip route", () => {
  for (const host of ["https://flirtyflip.com/games", "https://www.flirtyflip.com/games?mode=online"]) {
    const result = redirects.getAuthRedirectUrls(host);
    assert.equal(result.passwordRecovery, "https://flirtyflip.com/reset-password");
    assert.doesNotMatch(result.passwordRecovery, /localhost|127\.0\.0\.1/i);
  }
});

test("Production signup confirmation returns to FlirtyFlip without localhost", () => {
  const result = redirects.getAuthRedirectUrls("https://www.flirtyflip.com/play");
  assert.equal(result.signupConfirmation, "https://flirtyflip.com/");
  assert.doesNotMatch(result.signupConfirmation, /localhost|127\.0\.0\.1/i);
});

test("local development keeps the current local origin", () => {
  const result = redirects.getAuthRedirectUrls("http://localhost:4173/play");
  assert.equal(result.passwordRecovery, "http://localhost:4173/reset-password");
  assert.equal(result.signupConfirmation, "http://localhost:4173/");
});

test("redirect configuration has no localhost fallback or user-selected path", () => {
  assert.doesNotMatch(helperSource, /localhost:3000|127\.0\.0\.1/);
  assert.throws(() => redirects.getAuthRedirectUrls("javascript:alert(1)"), /invalid_auth_origin/);
  assert.deepEqual(Object.keys(redirects.getAuthRedirectUrls("https://flirtyflip.com")), ["passwordRecovery", "signupConfirmation"]);
});

test("Supabase recovery and signup calls use only the fixed redirect helper", () => {
  assert.match(script, /resetPasswordForEmail\(email, \{ redirectTo: passwordRecovery \}\)/);
  assert.match(script, /options: \{ emailRedirectTo: getAuthRedirectUrls\(\)\.signupConfirmation \}/);
  assert.doesNotMatch(script, /resetPasswordForEmail\([^\n]+window\.location\.origin/);
});

test("the redirect helper loads before the authentication code that consumes it", () => {
  assert.ok(html.indexOf('src="/auth-redirects.js"') > -1);
  assert.ok(html.indexOf('src="/auth-redirects.js"') < html.indexOf('src="/script.js"'));
});

test("reset-password is a direct SPA route with the required secure form", () => {
  assert.match(script, /resetPassword: "\/reset-password"/);
  assert.match(html, /id="reset-password" class="page/);
  assert.match(html, />New password</);
  assert.match(html, />Confirm password</);
  assert.match(html, />Update Password</);
  assert.match(script, /client\.auth\.updateUser\(\{ password: newPassword \}\)/);
  assert.match(vercel, /"source": "\/\(\(\?!api\/\)\.\*\)"[\s\S]*?"destination": "\/index\.html"/);
});

test("Supabase JS v2 keeps implicit callback handling and cleans auth fragments", () => {
  assert.match(html, /@supabase\/supabase-js@2/);
  assert.doesNotMatch(script, /exchangeCodeForSession|flowType:\s*["']pkce["']/);
  assert.match(script, /event === "PASSWORD_RECOVERY"|isPasswordRecoveryRoute\(\)/);
  assert.match(script, /_supabaseClient = window\.supabase\.createClient\([^;]+;\s*bindSupabaseAuthStateListener\(_supabaseClient\)/);
  assert.ok(script.indexOf("passwordRecoveryCallbackPresent = isPasswordRecoveryRoute()") < script.indexOf("const client = await ensureSupabaseClient(1200)"));
  assert.match(script, /event === "PASSWORD_RECOVERY" && passwordRecoveryCallbackPresent && session\?\.user/);
  assert.match(script, /session\?\.user && passwordRecoveryAuthorized/);
  assert.match(script, /cleanAuthFragmentFromUrl\(\)/);
  assert.match(script, /window\.history\.replaceState\([^\n]+`\$\{url\.pathname\}\$\{url\.search\}`/);
});

test("normal authenticated and guest flows remain available outside recovery", () => {
  assert.match(script, /client\.auth\.signInWithPassword\(\{ email, password \}\)/);
  assert.match(script, /if \(session\?\.user\) \{\s*signedInUser = session\.user;\s*clearStoredGuest\(\);/);
  assert.match(script, /else if \(event === "SIGNED_OUT" \|\| !readStoredGuest\(\)\)/);
  assert.match(script, /if \(authMode === "guest"\)/);
});

test("authentication diagnostics do not log email, sessions or callback tokens", () => {
  assert.doesNotMatch(script, /submitAuthForm: starting', \{ authMode, email \}/);
  assert.doesNotMatch(script, /submitAuthForm: auth result', \{ data, error \}/);
  const consoleLines = script.split("\n").filter((line) => /console\.(?:debug|log|warn|error)/.test(line)).join("\n");
  assert.doesNotMatch(consoleLines, /access_token|refresh_token|token_hash|newPassword|confirmPassword|authMode, email|\{ data, error \}/i);
  assert.match(script, /publicUrl\.hash = ""/);
  assert.match(script, /page_location: publicUrl\.href/);
  assert.doesNotMatch(script, /page_location: url\.href/);
});
