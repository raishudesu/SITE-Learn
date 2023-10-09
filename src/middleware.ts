// MIDDLEWARE FOR APP ROUTES

export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard", "/ai-chat", "/profile", "/settings", "/materials"],
}; // INCLUDE PROTECTED ROUTES HERE
