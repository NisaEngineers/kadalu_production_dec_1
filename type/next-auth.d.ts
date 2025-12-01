import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;   // 👈 change here from string → number
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: number;    // 👈 change here too
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: number;    // 👈 and here
  }
}
