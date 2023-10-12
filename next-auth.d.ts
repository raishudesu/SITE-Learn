import { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJwt } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      isAdmin: boolean;
    } & DefaultSession;
  }
  interface User extends DefaultUser {
    isAdmin: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultUser {
    isAdmin: boolean;
  }
}
