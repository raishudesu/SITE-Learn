// MIDDLEWARE FOR APP ROUTES

export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/forums",
    "/dashboard/materials",
    "/blogs/view",
    "/blogs/create",
    "/forums/view",
    "/materials",
    "/materials/view",
    "/ai-chat",
    "/settings",
    "/settings/account",
  ],
}; // INCLUDE PROTECTED ROUTES HERE
