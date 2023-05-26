import { AuthHeader, AuthHero } from '@/components';
import { ApplicationName } from '@/constants';
import Head from 'next/head';
import type { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../pages/api/auth/[...nextauth]';
import { getProviders } from 'next-auth/react';

export default function App() {
  return (
    <>
      <Head>
        <title>{ApplicationName}</title>
        <meta name="description" content="Basic setup v1.0" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AuthHeader />
        <AuthHero />
      </main>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return { redirect: { destination: '/personal-space' } };
  }

  const providers = await getProviders();

  return {
    props: { providers: providers ?? [] },
  };
}
