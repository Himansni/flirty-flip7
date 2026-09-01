// ========================================
// PRODUCTION AUTHENTICATION REDIRECT TESTS
// Guard canonical email destinations, the implicit recovery route and token-safe diagnostics.
// ========================================
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { createContext, runInContext } from "node:vm";

const require = createRequire(import.meta.url);
const redirects = require("../auth-redirects.js");
const [helperSource, html, script, vercel] = await Promise.all([
  readFile(new URL("../auth-redirects.js", import.meta.url), "utf8"),
  readFile(new URL("../index.html", import.meta.url), "utf8"),
  readFile(new URL("../script.js", import.meta.url), "utf8"),
  readFile(new URL("../vercel.json", import.meta.url), "utf8")
]);

function extractFunction(source, name) {
  const functionStart = source.indexOf(`function ${name}`);
  assert.notEqual(functionStart, -1, `${name} must exist`);
  const start = source.slice(functionStart - 6, functionStart) === "async " ? functionStart - 6 : functionStart;
  const bodyStart = source.indexOf("{", start);
  let depth = 0;
  for (let index = bodyStart; index < source.length; index += 1) {
    if (source[index] === "{") depth += 1;
    if (source[index] === "}") depth -= 1;
    if (depth === 0) return source.slice(start, index + 1);
  }
  throw new Error(`Could not extract ${name}`);
}

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

test("Production authentication fallback uses the project origin without a REST path", () => {
  assert.match(script, /url: "https:\/\/irspllhipxekdqvuppyr\.supabase\.co"/);
  assert.doesNotMatch(script, /irspllhipxekdqvuppyr\.supabase\.co\/rest\/v1/);
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

test("signup waits for confirmation while an immediate session signs in normally", async () => {
  assert.match(script, /const requestMode = authMode/);
  assert.match(script, /requestMode === "signup" && !data\?\.session/);
  assert.match(script, /Check your email to confirm your account, then return here to log in\./);
  assert.match(script, /signedInUser = data\?\.session\?\.user \|\| data\?\.user \|\| null/);

  const submitAuthFormSource = extractFunction(script, "submitAuthForm");
  const runSignup = async (session) => {
    const calls = { close: 0, guestClear: 0, statuses: [], toasts: [], ui: 0 };
    const emailInput = { value: "person@example.invalid", checkValidity: () => true };
    const passwordInput = { value: "A-secure-test-password" };
    const user = { id: "test-user", email: "person@example.invalid" };
    const context = createContext({
      authMode: "signup",
      signedInUser: { id: "guest-before-signup" },
      $: (id) => id === "auth-email" ? emailInput : id === "auth-password" ? passwordInput : null,
      setAuthStatus: (message) => calls.statuses.push(message),
      ensureSupabaseClient: async () => ({
        auth: {
          signUp: async () => ({ data: { user, session: session ? { user } : null }, error: null })
        }
      }),
      getAuthRedirectUrls: () => ({ signupConfirmation: "https://flirtyflip.com/" }),
      clearStoredGuest: () => { calls.guestClear += 1; },
      updateAuthUI: () => { calls.ui += 1; },
      closeAuthModal: () => { calls.close += 1; },
      toast: (message) => calls.toasts.push(message),
      console: { debug() {}, error() {} }
    });
    runInContext(`${submitAuthFormSource}; this.submitAuthForm = submitAuthForm;`, context);
    await context.submitAuthForm({ preventDefault() {} });
    return { calls, context, passwordInput };
  };

  const pending = await runSignup(false);
  assert.equal(pending.context.signedInUser, null);
  assert.equal(pending.calls.close, 0);
  assert.match(pending.calls.statuses.at(-1), /check your email to confirm/i);
  assert.equal(pending.passwordInput.value, "");

  const immediate = await runSignup(true);
  assert.equal(immediate.context.signedInUser.id, "test-user");
  assert.equal(immediate.calls.close, 1);
  assert.match(immediate.calls.toasts.at(-1), /Account created successfully/);
});

test("authentication failures use safe mapped copy instead of raw provider details", () => {
  assert.match(script, /function getSafeAuthErrorMessage\(error, context = "auth"\)/);
  assert.match(script, /The email or password was not accepted\. Please check your credentials and try again\./);
  assert.match(script, /Please confirm your email address before signing in\./);
  assert.match(script, /Too many authentication attempts were made\./);
  assert.match(script, /setAuthStatus\(getSafeAuthErrorMessage\(e, "reset"\), true\)/);
  assert.match(script, /setAuthStatus\(getSafeAuthErrorMessage\(error, requestMode\), true\)/);
  assert.doesNotMatch(script, /setAuthStatus\(\(e && e\.message\)|setAuthStatus\(\(error && error\.message\)/);

  const context = createContext({});
  runInContext(`${extractFunction(script, "getSafeAuthErrorMessage")}; this.mapError = getSafeAuthErrorMessage;`, context);
  assert.match(context.mapError({ message: "Invalid login credentials" }), /email or password was not accepted/i);
  assert.match(context.mapError({ message: "Email not confirmed" }), /confirm your email address/i);
  assert.match(context.mapError({ message: "Email rate limit exceeded" }), /too many authentication attempts/i);
  assert.match(context.mapError({ message: "Email rate limit exceeded" }, "reset"), /too many reset requests/i);
  assert.match(context.mapError({ message: "Invalid email" }), /valid email address/i);
  assert.match(context.mapError({ message: "Password should be at least 8 characters" }), /at least 8 characters/i);
  assert.match(context.mapError({ message: "User already registered" }), /If an account exists/i);
  assert.match(context.mapError({ message: "Failed to fetch" }), /couldn't reach the authentication service/i);
  assert.match(context.mapError({ message: "provider internal diagnostic" }), /temporarily unavailable/i);
});

test("password reset requests reject invalid email and block duplicate in-flight submissions", async () => {
  assert.match(script, /!email \|\| !emailEl\.checkValidity\(\)/);
  assert.match(script, /if \(passwordResetRequestPending\) return/);
  assert.match(script, /if \(submitButton\) submitButton\.disabled = true/);
  assert.match(script, /finally \{\s*passwordResetRequestPending = false/);

  const sendPasswordResetSource = extractFunction(script, "sendPasswordReset");
  const makeContext = (valid) => {
    const calls = { requests: 0, statuses: [] };
    const emailInput = { value: valid ? "person@example.invalid" : "not-an-email", checkValidity: () => valid };
    const submitButton = { disabled: false, isConnected: true };
    const context = createContext({
      passwordResetRequestPending: false,
      $: (id) => id === "auth-email" ? emailInput : id === "auth-reset-submit" ? submitButton : null,
      setAuthStatus: (message) => calls.statuses.push(message),
      ensureSupabaseClient: async () => ({
        auth: {
          resetPasswordForEmail: async () => {
            calls.requests += 1;
            await new Promise((resolve) => setTimeout(resolve, 5));
            return { error: null };
          }
        }
      }),
      getAuthRedirectUrls: () => ({ passwordRecovery: "https://flirtyflip.com/reset-password" }),
      getSafeAuthErrorMessage: () => "safe error",
      console: { error() {} },
      setTimeout
    });
    runInContext(`${sendPasswordResetSource}; this.sendPasswordReset = sendPasswordReset;`, context);
    return { calls, context, submitButton };
  };

  const invalid = makeContext(false);
  await invalid.context.sendPasswordReset();
  assert.equal(invalid.calls.requests, 0);
  assert.match(invalid.calls.statuses.at(-1), /valid email address/i);

  const concurrent = makeContext(true);
  const first = concurrent.context.sendPasswordReset();
  const second = concurrent.context.sendPasswordReset();
  await Promise.all([first, second]);
  assert.equal(concurrent.calls.requests, 1);
  assert.equal(concurrent.context.passwordResetRequestPending, false);
  assert.equal(concurrent.submitButton.disabled, false);
});

test("successful password recovery clears the one-time authorization state", () => {
  assert.match(script, /passwordRecoveryAuthorized = false;\s*passwordRecoveryCallbackPresent = false;\s*cleanAuthFragmentFromUrl\(\)/);
  assert.match(script, /event === "PASSWORD_RECOVERY" && passwordRecoveryCallbackPresent && session\?\.user/);
  assert.match(script, /else if \(event === "INITIAL_SESSION" \|\| event === "SIGNED_OUT" \|\| session\?\.user\)/);
  const initialization = script.slice(script.indexOf("async function initializeAuth"), script.indexOf("function updateAuthUI"));
  assert.match(initialization, /passwordRecoveryAuthorized = false/);
  assert.ok(initialization.indexOf("passwordRecoveryAuthorized = false") < initialization.indexOf("client.auth.getSession()"));
});

test("authentication diagnostics do not log email, sessions or callback tokens", () => {
  assert.doesNotMatch(script, /submitAuthForm: starting', \{ authMode, email \}/);
  assert.doesNotMatch(script, /submitAuthForm: auth result', \{ data, error \}/);
  const consoleLines = script.split("\n").filter((line) => /console\.(?:debug|log|warn|error)/.test(line)).join("\n");
  assert.doesNotMatch(consoleLines, /access_token|refresh_token|token_hash|newPassword|confirmPassword|authMode, email|\{ data, error \}/i);
  assert.doesNotMatch(script, /console\.error\(['"](?:Password reset request failed|submitAuthForm: authentication request failed)/);
  assert.match(script, /publicUrl\.hash = ""/);
  assert.match(script, /page_location: publicUrl\.href/);
  assert.doesNotMatch(script, /page_location: url\.href/);
});
