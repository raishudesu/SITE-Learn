// MIDDLEWARE FOR APP ROUTES

export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/forums",
    "/dashboard/materials",
    "/ai-chat",
    "/profile",
    "/settings",
    "/settings/account",
    "/materials",
    "/blogs/create",
  ],
}; // INCLUDE PROTECTED ROUTES HERE
