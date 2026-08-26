// Public Academy availability and pricing metadata; paid lesson bodies are never returned here.
import { errorResponse, jsonResponse, listPublishedCourses, razorpayIsConfigured, requireMethod } from "../_lib/academy-server.mjs";

export default async function handler(request) {
  try {
    requireMethod(request, ["GET"]);
    const providerReady = razorpayIsConfigured();
    const courses = await listPublishedCourses();
    return jsonResponse({
      courses: courses.map((course) => {
        const priceMinor = Number.isInteger(course.price_minor) && course.price_minor > 0 ? course.price_minor : null;
        return {
          slug: course.slug,
          title: course.title,
          audience: course.audience,
          currency: course.currency || "INR",
          priceMinor,
          checkoutEnabled: Boolean(course.checkout_enabled && priceMinor && providerReady)
        };
      })
    }, 200, { "Cache-Control": "public, max-age=60, s-maxage=300, stale-while-revalidate=600" });
  } catch (error) {
    return errorResponse(error);
  }
}
