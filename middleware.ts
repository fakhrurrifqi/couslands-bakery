import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    // Add all the routes you want to protect here
    "/checkout/:path*", // Example: you will likely want to protect the checkout page later
    // To protect all sub-pages of account, you can use a wildcard:
    "/account/:path*",
  ],
};
