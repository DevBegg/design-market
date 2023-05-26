import { SignInForm, SignUpForm } from '@/components';
import styles from './auth.module.scss';
import { useRouter } from 'next/router';
import type { GetServerSidePropsContext } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../pages/api/auth/[...nextauth]';
import { getProviders } from 'next-auth/react';

export default function AuthPage() {
  const {
    query: { action },
  } = useRouter();

  const isSignUp = action === 'signup';

  return (
    <main className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          <div className={styles.image} />
        </div>
        <div className={styles.content}>{isSignUp ? <SignUpForm /> : <SignInForm />}</div>
      </div>
    </main>
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
