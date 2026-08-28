// Verify Checkout HMAC, fetch Razorpay's authoritative payment, and grant access only when captured.
import { AcademyHttpError, errorResponse, findUserOrderByProviderId, fulfillCapturedPayment, jsonResponse, parseJsonBody, paymentMatchesOrder, razorpayRequest, requireMethod, requireSupabaseUser, updatePaymentOrder, verifyCheckoutSignature } from "../_lib/academy-server.mjs";

async function handler(request) {
  try {
    requireMethod(request, ["POST"]);
    const user = await requireSupabaseUser(request);
    const body = await parseJsonBody(request);
    const orderId = String(body.razorpayOrderId || "");
    const paymentId = String(body.razorpayPaymentId || "");
    const signature = String(body.razorpaySignature || "");
    if (!/^pay_[A-Za-z0-9]+$/.test(paymentId)) throw new AcademyHttpError(400, "INVALID_PAYMENT", "A valid payment ID is required.");
    const order = await findUserOrderByProviderId(user.id, orderId);
    if (!order) throw new AcademyHttpError(404, "ORDER_NOT_FOUND", "This payment order was not found.");
    if (order.status === "refunded") throw new AcademyHttpError(409, "ORDER_REFUNDED", "This payment was refunded and cannot grant access.");
    if (!verifyCheckoutSignature(order.provider_order_id, paymentId, signature)) {
      throw new AcademyHttpError(400, "INVALID_PAYMENT_SIGNATURE", "Payment verification failed and access was not granted.");
    }

    const payment = await razorpayRequest(`payments/${encodeURIComponent(paymentId)}`);
    if (!paymentMatchesOrder(payment, order)) throw new AcademyHttpError(409, "PAYMENT_ORDER_MISMATCH", "The payment does not match this order.");
    if (payment.status !== "captured") {
      await updatePaymentOrder(order.id, { provider_payment_id: paymentId, status: payment.status === "authorized" ? "authorized" : "attempted", updated_at: new Date().toISOString() });
      return jsonResponse({ entitlementActive: false, orderId, paymentId, paymentStatus: payment.status }, 202);
    }

    await fulfillCapturedPayment(order, paymentId);
    return jsonResponse({ entitlementActive: true, orderId, paymentId, paymentStatus: "captured" });
  } catch (error) {
    return errorResponse(error);
  }
}

export { handler as POST };
