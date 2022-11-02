import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { signIn } from "next-auth/react";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  pages: {
    signIn: '/auth/login',
  } 
})