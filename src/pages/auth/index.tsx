import { SignInForm, SignUpForm } from '@/components';
import styles from './auth.module.scss';
import { useRouter } from 'next/router';

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

//TODO: redirect from auth page if authed
