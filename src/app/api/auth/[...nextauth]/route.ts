import connectDB from "@/lib/mongodb";
import User from "@/models/User/user";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { SigninSchema } from "@/lib/authSchemas";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        pwd: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, pwd } = SigninSchema.parse(credentials); //MIDDLEWARE VALIDATOR FOR SIGN IN DATA
        try {
          await connectDB();
          const user = await User.findOne({ email });

          if (!user) throw new Error("non-existent");

          const pwdMatched = await bcrypt.compare(pwd, user.password);
          if (!pwdMatched) throw new Error("wrong-pwd");
          console.log(user);
          return user;
        } catch (error: any) {
          if (error.message === "non-existent")
            throw new Error("User doesn't exist");
          if (error.message === "wrong-pwd")
            throw new Error("Incorrect password");
        }
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.uid as string;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin", // PAGE TO REDIRECT FOR PROTECTED ROUTES
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
