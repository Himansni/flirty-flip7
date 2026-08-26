// Verify Razorpay's raw-body signature, deduplicate event IDs, then reconcile capture/refund events.
import { createHash } from "node:crypto";
import { errorResponse, findOrderByProviderId, fulfillCapturedPayment, jsonResponse, paymentMatchesOrder, razorpayRequest, recordWebhookEvent, revokeRefundedPayment, verifyWebhookSignature } from "../_lib/academy-server.mjs";

export default async function handler(request) {
  try {
    if (request.method !== "POST") return jsonResponse({ code: "METHOD_NOT_ALLOWED", message: "This request method is not supported." }, 405);
    const rawBody = Buffer.from(await request.arrayBuffer());
    const signature = request.headers.get("x-razorpay-signature") || "";
    if (!verifyWebhookSignature(rawBody, signature)) return jsonResponse({ code: "INVALID_WEBHOOK_SIGNATURE", message: "Invalid webhook signature." }, 400);

    const event = JSON.parse(rawBody.toString("utf8"));
    const eventId = request.headers.get("x-razorpay-event-id")
      || event.id
      || `sha256:${createHash("sha256").update(rawBody).digest("hex")}`;
    if (["payment.captured", "order.paid"].includes(event.event)) {
      const payment = event.payload?.payment?.entity;
      const order = await findOrderByProviderId(payment?.order_id);
      if (order && payment?.status === "captured" && paymentMatchesOrder(payment, order)) {
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
          if (!order.provider_payment_id) await fulfillCapturedPayment(order, payment.id, eventId);
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
