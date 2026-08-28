// Verify Razorpay's raw-body signature, deduplicate event IDs, then reconcile capture/refund events.
import { createHash } from "node:crypto";
import { AcademyHttpError, errorResponse, findOrderByProviderId, findWebhookEvent, fulfillCapturedPayment, jsonResponse, paymentMatchesOrder, razorpayRequest, recordWebhookEvent, revokeRefundedPayment, verifyWebhookSignature, webhookPayloadDigest } from "../_lib/academy-server.mjs";

const MAX_WEBHOOK_BYTES = 256_000;

async function handler(request) {
  try {
    if (request.method !== "POST") return jsonResponse({ code: "METHOD_NOT_ALLOWED", message: "This request method is not supported." }, 405);
    const contentLength = Number(request.headers.get("content-length") || 0);
    if (Number.isFinite(contentLength) && contentLength > MAX_WEBHOOK_BYTES) {
      throw new AcademyHttpError(413, "BODY_TOO_LARGE", "The webhook body is too large.");
    }
    const rawBody = Buffer.from(await request.arrayBuffer());
    if (rawBody.byteLength > MAX_WEBHOOK_BYTES) throw new AcademyHttpError(413, "BODY_TOO_LARGE", "The webhook body is too large.");
    const signature = request.headers.get("x-razorpay-signature") || "";
    if (!verifyWebhookSignature(rawBody, signature)) return jsonResponse({ code: "INVALID_WEBHOOK_SIGNATURE", message: "Invalid webhook signature." }, 400);

    let event;
    try {
      event = JSON.parse(rawBody.toString("utf8"));
    } catch (error) {
      throw new AcademyHttpError(400, "INVALID_WEBHOOK_BODY", "The webhook body must be valid JSON.");
    }
    if (!event || Array.isArray(event) || typeof event !== "object" || typeof event.event !== "string" || !event.event || event.event.length > 120) {
      throw new AcademyHttpError(400, "INVALID_WEBHOOK_BODY", "The webhook body is missing required event data.");
    }
    const eventId = request.headers.get("x-razorpay-event-id")
      || event.id
      || `sha256:${createHash("sha256").update(rawBody).digest("hex")}`;
    const recordedEvent = await findWebhookEvent(eventId);
    if (recordedEvent) {
      if (recordedEvent.payload_sha256 !== webhookPayloadDigest(rawBody)) {
        throw new AcademyHttpError(409, "WEBHOOK_REPLAY_CONFLICT", "This webhook event ID was already used with different content.");
      }
      return jsonResponse({ received: true, duplicate: true });
    }

    if (["payment.captured", "order.paid"].includes(event.event)) {
      const payment = event.payload?.payment?.entity;
      const order = await findOrderByProviderId(payment?.order_id);
      if (order && order.status !== "refunded" && payment?.status === "captured" && paymentMatchesOrder(payment, order)) {
        await fulfillCapturedPayment(order, payment.id, eventId);
      }
    }

    if (event.event === "refund.processed") {
      const refund = event.payload?.refund?.entity;
      if (refund?.payment_id) {
        // Fetch the payment so an out-of-order refund can still be associated with its order.
        const payment = await razorpayRequest(`payments/${encodeURIComponent(refund.payment_id)}`);
        const order = await findOrderByProviderId(payment?.order_id);
        if (order && paymentMatchesOrder(payment, order)) {
          if (!order.provider_payment_id && payment.status === "captured") await fulfillCapturedPayment(order, payment.id, eventId);
          await revokeRefundedPayment(payment.id, eventId);
        }
      }
    }

    // Record the event only after its side effect succeeds so a failed delivery remains retryable.
    // Fulfillment and revocation RPCs are idempotent, which also makes concurrent retries safe.
    const isNew = await recordWebhookEvent(eventId, event.event, rawBody);
    return jsonResponse({ received: true, duplicate: !isNew });
  } catch (error) {
    return errorResponse(error);
  }
}

export { handler as POST };
