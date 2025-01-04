import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

const clientId = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  throw new Error("Missing clientId or clientSecret");
}

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: clientId,
      clientSecret: clientSecret,
    }),
  ],
};
