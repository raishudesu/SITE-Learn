// MIDDLEWARE FOR APP ROUTES

export { default } from "next-auth/middleware";

export const config = { matcher: ["/dashboard"] }; // INCLUDE PROTECTED ROUTES HERE
