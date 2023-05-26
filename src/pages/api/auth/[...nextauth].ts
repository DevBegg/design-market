import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIEND_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET as string,
    }),
  ],
  //https://next-auth.js.org/getting-started/upgrade-v4#missing-secret
  //generate secret
  secret: 'SECRET',
};

export default NextAuth(authOptions);
