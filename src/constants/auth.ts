import { NextAuthOptions } from 'next-auth';
import Github from 'next-auth/providers/github';

const GithubProvider = Github({
  clientId: process.env.GITHUB_ID as string,
  clientSecret: process.env.GITHUB_SECRET as string,
});

export const authConfig = {
  providers: [GithubProvider],
} satisfies NextAuthOptions;
