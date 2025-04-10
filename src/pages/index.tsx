import { AuthHeader, AuthHero } from '@/components';
import { ApplicationName } from '@/constants';
import Head from 'next/head';

const App = () => {
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
};

export default App;
