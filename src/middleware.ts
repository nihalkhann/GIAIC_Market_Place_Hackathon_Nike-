// import { cookies } from "next/headers";
// import { NextRequest, NextResponse } from "next/server";

// export async function middleware(request: NextRequest) {
//   const cookieStore = await cookies();

//   const IsLogin = cookieStore.get("IsLogin")?.value;

//   if (IsLogin === "0" && request.nextUrl.pathname === "/") {
//     return NextResponse.redirect(new URL("/Admin", request.url));
//   }

//   if (IsLogin === "1" && request.nextUrl.pathname === "/login") {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
// }

// export const config = {
//   matcher: ["/", "/Admin"],
// };

// ./src/middleware.ts

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

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
