// MIDDLEWARE FOR APP ROUTES

export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/my-blogs",
    "/my-forums",
    "/my-materials",
    "/ai-chat",
    "/profile",
    "/settings",
    "/materials",
    "/blogs/create",
  ],
}; // INCLUDE PROTECTED ROUTES HERE
