// Reconcile a user's order with Razorpay before reporting whether entitlement is active.
import { AcademyHttpError, errorResponse, findEntitlement, findUserOrderByProviderId, fulfillCapturedPayment, jsonResponse, mapOrder, paymentMatchesOrder, razorpayRequest, requireMethod, requireSupabaseUser } from "../_lib/academy-server.mjs";

export default async function handler(request) {
  try {
    requireMethod(request, ["GET"]);
    const user = await requireSupabaseUser(request);
    const orderId = new URL(request.url).searchParams.get("orderId");
    const order = await findUserOrderByProviderId(user.id, orderId);
    if (!order) throw new AcademyHttpError(404, "ORDER_NOT_FOUND", "This payment order was not found.");

    let capturedPayment = null;
    if (order.status !== "captured" && order.provider_payment_id) {
      const payment = await razorpayRequest(`payments/${encodeURIComponent(order.provider_payment_id)}`);
      if (payment.status === "captured" && paymentMatchesOrder(payment, order)) capturedPayment = payment;
    }
    if (order.status !== "captured" && !order.provider_payment_id) {
      const payments = await razorpayRequest(`orders/${encodeURIComponent(order.provider_order_id)}/payments`);
      capturedPayment = payments?.items?.find((payment) => payment.status === "captured" && paymentMatchesOrder(payment, order)) || null;
    }
    if (capturedPayment) await fulfillCapturedPayment(order, capturedPayment.id);
    const entitlement = await findEntitlement(user.id, order.course_slug);
    const responseOrder = mapOrder(order);
    if (entitlement) responseOrder.status = "captured";
    return jsonResponse({ order: responseOrder, entitlementActive: Boolean(entitlement) });
  } catch (error) {
    return errorResponse(error);
  }
}
