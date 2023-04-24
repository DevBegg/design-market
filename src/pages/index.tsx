import type { NextPage } from 'next';
import Head from 'next/head';

export const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Design market</title>
        <meta name="description" content="Basic setup v1.0" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        Some content
      </main>
    </>
  );
};
