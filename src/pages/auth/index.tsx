import styles from './auth.module.scss';
import { SimpleContainer, SignupForm } from '@/components';

const AuthPage = () => {
  return (
    <main className={styles.authPage}>
      <SimpleContainer>
        <div className={styles.authPageForm}>
          <SignupForm />
        </div>
      </SimpleContainer>
    </main>
  );
};

export default AuthPage;
