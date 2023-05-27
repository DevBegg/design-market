import NextAuth, { CallbacksOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIEND_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ account, ...signInProps }): Promise<boolean> {
      if (account?.provider === 'google') {
        const { user } = signInProps;

        const googleUser = {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
        };

        console.log('googleUser', googleUser);
        // user.accessToken = await getTokenFromYourAPIServer('google', googleUser)
        return true;
      }
      return false;
    },
  } as Partial<CallbacksOptions>,
  //https://next-auth.js.org/getting-started/upgrade-v4#missing-secret
  //generate secret
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
