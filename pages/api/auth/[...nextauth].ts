import { prisma } from "@/app/lib/prisma";
import { Session } from "@/app/types/session";
import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      let maybeUser = await prisma.user.findUnique({ where: { id: +user.id } });
      if (!maybeUser) {
        maybeUser = await prisma.user.create({
          data: {
            id: +user.id,
            email: user.email,
          },
        });
      }
      console.log(maybeUser);

      return true;
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.id = user.id;
      }

      return token;
    },
    async session({ session, token, user }) {
      const sess: Session = {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
          role: token.role as string,
        },
      };

      return sess;
    },
  },
};

export default NextAuth(authOptions);
