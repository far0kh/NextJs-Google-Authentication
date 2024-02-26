import NextAuth from "next-auth/next";
import { NextAuthOptions, Account, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }: {
      user: AdapterUser | User;
      account: Account | null;
    }) {
      if (account?.provider === "google") {
        try {
          const { name, email } = user;
          const response = await fetch("http://localhost:3000/api/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              email,
            }),
          });

          // print response message
          const result = await response.json()
          console.log(result.message)

          if (response.ok) {
            return true;
          }

        } catch (error) {
          console.log(error);
        }
      }
      return false;
    }
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
