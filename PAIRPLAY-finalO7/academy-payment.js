// ========================================
// ACADEMY PAYMENT CLIENT
// This browser module coordinates authenticated Vercel API calls and Razorpay Checkout states.
// It never decides entitlement locally: only a verified backend response can unlock a course.
// Edit endpoint paths here if the serverless routes move; never add Razorpay or Supabase secrets.
// ========================================
(function configureAcademyPayments(global) {
  "use strict";

  const API_ROOT = "/api/academy";
  const RAZORPAY_CHECKOUT_URL = "https://checkout.razorpay.com/v1/checkout.js";
  let razorpayLoader = null;
  let checkoutBusy = false;

  class AcademyApiError extends Error {
    constructor(message, status = 0, code = "ACADEMY_API_ERROR") {
      super(message);
      this.name = "AcademyApiError";
      this.status = status;
      this.code = code;
    }
  }

  // Read the real Supabase session created by the existing authentication system.
  // Guest profiles intentionally have no bearer token and cannot call paid Academy APIs.
  async function getAccessToken() {
    const client = typeof getSupabaseClient === "function" ? getSupabaseClient() : null;
    if (!client) return null;
    const { data, error } = await client.auth.getSession();
    if (error) throw new AcademyApiError("Your session could not be checked. Please sign in again.", 401, "SESSION_ERROR");
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
          theme: { color: "#c79a42" },
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
