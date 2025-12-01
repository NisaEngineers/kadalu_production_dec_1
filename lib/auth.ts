// lib/auth.ts
import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import { openDb, initDb } from "@/lib/db";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        await initDb();
        const db = await openDb();

        const user = await db.get(
          "SELECT * FROM users WHERE email = ?",
          credentials.email
        );

        if (!user) return null;

        const match = await bcrypt.compare(credentials.password, user.password_hash);
        if (!match) return null;

        return { id: user.id, name: user.name, email: user.email };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        if (typeof user.id === "number") {
          token.id = user.id;
        }
        token.sub = String(user.id);  // ← string for session
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.sub) {
        (session.user as any).id = token.sub;  // ← type-safe override
      }
      if (token?.name) session.user.name = token.name;
      if (token?.email) session.user.email = token.email;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
};
