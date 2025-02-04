import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define public routes, for example, the sign-in page
const isPublicRoute = createRouteMatcher(["/sign-in(.*)", "/signup(.*)"]);

// Create a matcher for the checkout route (add other routes as needed)
const isCheckoutRoute = createRouteMatcher(["/checkout(.*)"]);

export default clerkMiddleware(async (auth, request) => {
  // Protect all routes except the public routes and allow unauthenticated access to them
  if (!isPublicRoute(request)) {
    // For protected routes (including checkout), ensure the user is authenticated
    if (isCheckoutRoute(request)) {
      await auth.protect(); // If not authenticated, it will redirect to sign-in
    }
  }

  // Add Cache-Control headers to all responses
  const response = NextResponse.next();
  response.headers.set(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=59",
  );

  return response;
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
    // Match the checkout route (ensure it's protected)
    "/checkout(.*)",
  ],
};
