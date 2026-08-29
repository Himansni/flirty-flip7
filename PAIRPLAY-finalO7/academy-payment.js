// ========================================
// ACADEMY PAYMENT CLIENT
// This browser module coordinates authenticated Vercel API calls and Razorpay Checkout states.
// It never decides entitlement locally: only a verified backend response can unlock a course.
// Edit endpoint paths here if the serverless routes move; never add Razorpay or Supabase secrets.
// ========================================
(function configureAcademyPayments(global) {
  "use strict";

  const API_ROOT = "/api/academy";
  const CLIENT_CONFIG_PATH = `${API_ROOT}/client-config`;
  const RAZORPAY_CHECKOUT_URL = "https://checkout.razorpay.com/v1/checkout.js";
  const ACADEMY_AUTH_STORAGE_KEY = "flirtyflip-academy-auth-v1";
  let razorpayLoader = null;
  let checkoutBusy = false;
  let academyClient = null;
  let academyClientPromise = null;
  let academyCurrentUser = null;
  let academyAuthInitialized = false;
  let academyAuthError = null;
  let academyAuthRevision = 0;

  class AcademyApiError extends Error {
    constructor(message, status = 0, code = "ACADEMY_API_ERROR") {
      super(message);
      this.name = "AcademyApiError";
      this.status = status;
      this.code = code;
    }
  }

  function validateClientConfig(payload) {
    const rawUrl = String(payload?.supabaseUrl || "").trim();
    const publishableKey = String(payload?.supabasePublishableKey || "").trim();
    let url;
    try {
      url = new URL(rawUrl);
    } catch (error) {
      throw new AcademyApiError("Academy login is unavailable in this environment.", 503, "ACADEMY_AUTH_UNAVAILABLE");
    }
    if (url.protocol !== "https:" || !/^[a-z0-9]+\.supabase\.co$/i.test(url.hostname) || url.pathname !== "/" || !publishableKey || publishableKey.startsWith("sb_secret_")) {
      throw new AcademyApiError("Academy login is unavailable in this environment.", 503, "ACADEMY_AUTH_UNAVAILABLE");
    }
    return { url: url.origin, publishableKey };
  }

  async function waitForSupabaseLibrary(timeoutMs = 4000) {
    const startedAt = Date.now();
    while (!global.supabase || typeof global.supabase.createClient !== "function") {
      if (Date.now() - startedAt >= timeoutMs) {
        throw new AcademyApiError("Academy login could not load. Refresh and try again.", 503, "ACADEMY_AUTH_UNAVAILABLE");
      }
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    return global.supabase;
  }

  // Academy uses an isolated Supabase client so Preview test accounts never replace the game session.
  // Edit public client values in Vercel Preview variables; never place a service-role key in this module.
  async function getAcademySupabaseClient() {
    if (academyClient) return academyClient;
    if (academyClientPromise) return academyClientPromise;

    academyClientPromise = (async () => {
      const supabaseLibrary = await waitForSupabaseLibrary();
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 7000);
      let response;
      try {
        response = await fetch(CLIENT_CONFIG_PATH, {
          method: "GET",
          headers: { Accept: "application/json" },
          credentials: "same-origin",
          signal: controller.signal
        });
      } catch (error) {
        throw new AcademyApiError("Academy login configuration could not be loaded. Please try again.", 503, "ACADEMY_AUTH_UNAVAILABLE");
      } finally {
        clearTimeout(timeout);
      }
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new AcademyApiError(payload.message || "Academy login is unavailable in this environment.", response.status, payload.code || "ACADEMY_AUTH_UNAVAILABLE");
      }
      const config = validateClientConfig(payload);
      academyClient = supabaseLibrary.createClient(config.url, config.publishableKey, {
        auth: {
          storageKey: ACADEMY_AUTH_STORAGE_KEY,
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: false
        }
      });
      academyAuthError = null;
      return academyClient;
    })().catch((error) => {
      academyClientPromise = null;
      academyAuthError = error instanceof AcademyApiError
        ? error
        : new AcademyApiError("Academy login is unavailable in this environment.", 503, "ACADEMY_AUTH_UNAVAILABLE");
      throw academyAuthError;
    });

    return academyClientPromise;
  }

  function notifyAcademyAuthChanged() {
    if (typeof global.handleAcademyAuthResolved === "function") global.handleAcademyAuthResolved();
  }

  // Publish each real Academy session transition once so the UI can invalidate account-owned data.
  // Keep this isolated from the site's game auth client and never infer paid access from browser state.
  function commitAcademySession(user, { force = false } = {}) {
    const nextUser = user?.id ? user : null;
    const previousId = academyCurrentUser?.id || null;
    const nextId = nextUser?.id || null;
    academyCurrentUser = nextUser;
    academyAuthInitialized = true;
    academyAuthError = null;
    if (force || previousId !== nextId) {
      academyAuthRevision += 1;
      notifyAcademyAuthChanged();
    }
    return academyCurrentUser;
  }

  async function initializeAuth() {
    if (academyAuthInitialized) return academyCurrentUser;
    const client = await getAcademySupabaseClient();
    const { data, error } = await client.auth.getSession();
    if (error) throw new AcademyApiError("Your Academy session could not be checked. Please sign in again.", 401, "SESSION_ERROR");
    commitAcademySession(data?.session?.user || null, { force: true });
    client.auth.onAuthStateChange((_event, session) => {
      commitAcademySession(session?.user || null);
    });
    return academyCurrentUser;
  }

  async function signIn(email, password) {
    const client = await getAcademySupabaseClient();
    const revisionBeforeSignIn = academyAuthRevision;
    const { data, error } = await client.auth.signInWithPassword({ email, password });
    if (error) throw new AcademyApiError(error.message || "Academy login failed.", error.status || 401, "ACADEMY_LOGIN_FAILED");
    commitAcademySession(data?.session?.user || null, { force: academyAuthRevision === revisionBeforeSignIn });
    return data;
  }

  async function signUp(email, password) {
    const client = await getAcademySupabaseClient();
    const revisionBeforeSignUp = academyAuthRevision;
    const { data, error } = await client.auth.signUp({ email, password });
    if (error) throw new AcademyApiError(error.message || "Academy signup failed.", error.status || 400, "ACADEMY_SIGNUP_FAILED");
    commitAcademySession(data?.session?.user || null, { force: academyAuthRevision === revisionBeforeSignUp });
    return data;
  }

  // Guest Mode signs out the isolated Academy client and verifies that no Academy session remains.
  // The game auth client is intentionally not referenced or changed here.
  async function signOut() {
    const client = await getAcademySupabaseClient();
    const revisionBeforeSignOut = academyAuthRevision;
    const { error } = await client.auth.signOut();
    if (error) throw new AcademyApiError(error.message || "Academy logout failed. Please try again.", error.status || 401, "ACADEMY_LOGOUT_FAILED");

    const { data, error: sessionError } = await client.auth.getSession();
    if (sessionError || data?.session) {
      throw new AcademyApiError("Academy logout could not be verified. Please try again.", 401, "ACADEMY_LOGOUT_FAILED");
    }
    commitAcademySession(null, { force: academyAuthRevision === revisionBeforeSignOut });
    return null;
  }

  async function sendPasswordReset(email, redirectTo) {
    const client = await getAcademySupabaseClient();
    const { error } = await client.auth.resetPasswordForEmail(email, { redirectTo });
    if (error) throw new AcademyApiError(error.message || "Unable to send the Academy reset link.", error.status || 400, "ACADEMY_RESET_FAILED");
  }

  // Read only the isolated Academy session. Guest and game sessions cannot authorize Academy APIs.
  async function getAccessToken() {
    const client = await getAcademySupabaseClient();
    const { data, error } = await client.auth.getSession();
    if (error) throw new AcademyApiError("Your session could not be checked. Please sign in again.", 401, "SESSION_ERROR");
    commitAcademySession(data?.session?.user || null);
    return data?.session?.access_token || null;
  }

  async function requestJson(path, options = {}) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), options.timeout || 12000);
    const headers = new Headers(options.headers || {});
    headers.set("Accept", "application/json");
    if (options.body !== undefined) headers.set("Content-Type", "application/json");

    if (options.auth !== false) {
      const token = await getAccessToken();
      if (!token) {
        clearTimeout(timeout);
        throw new AcademyApiError("Please log in with your email account to continue.", 401, "AUTH_REQUIRED");
      }
      headers.set("Authorization", `Bearer ${token}`);
    }

    try {
      const response = await fetch(`${API_ROOT}${path}`, {
        method: options.method || "GET",
        headers,
        body: options.body === undefined ? undefined : JSON.stringify(options.body),
        credentials: "same-origin",
        signal: controller.signal
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new AcademyApiError(
          payload.message || "The Academy service could not complete this request.",
          response.status,
          payload.code || "ACADEMY_API_ERROR"
        );
      }
      return payload;
    } catch (error) {
      if (error?.name === "AbortError") {
        throw new AcademyApiError("The request timed out. Check your connection and try again.", 0, "NETWORK_TIMEOUT");
      }
      if (error instanceof AcademyApiError) throw error;
      throw new AcademyApiError("The Academy service is currently unreachable. Please try again.", 0, "NETWORK_ERROR");
    } finally {
      clearTimeout(timeout);
    }
  }

  function createIdempotencyKey() {
    if (global.crypto?.randomUUID) return global.crypto.randomUUID();
    const values = new Uint8Array(16);
    global.crypto?.getRandomValues?.(values);
    return Array.from(values, (value) => value.toString(16).padStart(2, "0")).join("");
  }

  // Razorpay is loaded only after the backend confirms that checkout is configured.
  // This keeps the public Academy catalog light and prevents local tests from contacting Checkout.
  function loadRazorpayCheckout() {
    if (typeof global.Razorpay === "function") return Promise.resolve(global.Razorpay);
    if (razorpayLoader) return razorpayLoader;

    razorpayLoader = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = RAZORPAY_CHECKOUT_URL;
      script.async = true;
      script.onload = () => typeof global.Razorpay === "function"
        ? resolve(global.Razorpay)
        : reject(new AcademyApiError("Razorpay Checkout did not initialize.", 0, "CHECKOUT_LOAD_FAILED"));
      script.onerror = () => reject(new AcademyApiError("Razorpay Checkout could not be loaded.", 0, "CHECKOUT_LOAD_FAILED"));
      document.head.appendChild(script);
    });

    return razorpayLoader;
  }

  async function getPublicCatalog() {
    return requestJson("/catalog", { auth: false, timeout: 7000 });
  }

  async function getEntitlements() {
    return requestJson("/entitlements");
  }

  async function getLesson(courseSlug, lessonSlug) {
    const query = new URLSearchParams({ course: courseSlug, lesson: lessonSlug });
    return requestJson(`/lesson-access?${query}`);
  }

  async function getProgress(courseSlug) {
    const query = new URLSearchParams({ course: courseSlug });
    return requestJson(`/progress?${query}`);
  }

  async function saveProgress(courseSlug, lessonSlug, completed = true) {
    return requestJson("/progress", {
      method: "POST",
      body: { courseSlug, lessonSlug, completed: Boolean(completed) }
    });
  }

  async function getPaymentStatus(orderId) {
    const query = new URLSearchParams({ orderId });
    return requestJson(`/payment-status?${query}`);
  }

  // Start Checkout once, relay every visible state to the Academy UI, and verify on the server.
  // The Razorpay handler is only a transport callback; it never writes or grants entitlement.
  async function startCheckout(course, onState = () => {}) {
    if (checkoutBusy) throw new AcademyApiError("Checkout is already being prepared.", 409, "CHECKOUT_BUSY");
    if (!course?.checkoutEnabled || !Number.isInteger(course.priceMinor) || course.priceMinor <= 0) {
      throw new AcademyApiError("Enrollment is not configured for this course yet.", 503, "CHECKOUT_UNAVAILABLE");
    }

    checkoutBusy = true;
    onState("creating-order");

    try {
      const idempotencyKey = createIdempotencyKey();
      const order = await requestJson("/create-order", {
        method: "POST",
        headers: { "Idempotency-Key": idempotencyKey },
        body: { courseSlug: course.slug }
      });

      const Razorpay = await loadRazorpayCheckout();
      onState("checkout-open", { orderId: order.orderId });

      return await new Promise((resolve, reject) => {
        let settled = false;
        const resolveOnce = (value) => {
          if (settled) return;
          settled = true;
          resolve(value);
        };
        const rejectOnce = (error) => {
          if (settled) return;
          settled = true;
          reject(error);
        };
        const checkout = new Razorpay({
          key: order.keyId,
          amount: order.amountMinor,
          currency: order.currency,
          name: "FlirtyFlip Academy",
          description: order.courseTitle,
          order_id: order.orderId,
          theme: {
            color: getComputedStyle(document.querySelector(".academy-page") || document.documentElement).getPropertyValue("--academy-red").trim() || "#e12847"
          },
          modal: {
            escape: true,
            confirm_close: true,
            ondismiss: () => {
              onState("cancelled", { orderId: order.orderId });
              rejectOnce(new AcademyApiError("Checkout was cancelled.", 0, "CHECKOUT_CANCELLED"));
            }
          },
          handler: async (response) => {
            try {
              onState("processing", { orderId: order.orderId });
              const verified = await requestJson("/verify-payment", {
                method: "POST",
                body: {
                  razorpayOrderId: response.razorpay_order_id,
                  razorpayPaymentId: response.razorpay_payment_id,
                  razorpaySignature: response.razorpay_signature
                }
              });
              onState(verified.entitlementActive ? "unlocked" : "verification-pending", verified);
              resolveOnce(verified);
            } catch (error) {
              onState("verification-failed", { orderId: order.orderId, error });
              rejectOnce(error);
            }
          }
        });

        checkout.on("payment.failed", (event) => {
          const description = event?.error?.description || "Razorpay reported that the payment failed.";
          onState("failed", { orderId: order.orderId, description });
          rejectOnce(new AcademyApiError(description, 402, "PAYMENT_FAILED"));
        });
        checkout.open();
      });
    } finally {
      checkoutBusy = false;
    }
  }

  global.AcademyPayments = Object.freeze({
    AcademyApiError,
    getAcademySupabaseClient,
    getCurrentUser: () => academyCurrentUser,
    getAuthRevision: () => academyAuthRevision,
    getAuthError: () => academyAuthError,
    isAuthInitialized: () => academyAuthInitialized,
    initializeAuth,
    signIn,
    signUp,
    signOut,
    sendPasswordReset,
    getAccessToken,
    getPublicCatalog,
    getEntitlements,
    getLesson,
    getProgress,
    saveProgress,
    getPaymentStatus,
    startCheckout,
    isCheckoutBusy: () => checkoutBusy
  });
})(window);
