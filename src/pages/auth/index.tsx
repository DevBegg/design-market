import { AuthForm } from '@/components';
import styles from './auth.module.scss';
import { SimpleContainer } from '@/components';

const AuthPage = () => {
  return (
    <main className={styles.authPage}>
      <SimpleContainer>
        <div className={styles.authPageForm}>
          <AuthForm />
        </div>
      </SimpleContainer>
    </main>
  );
};

export default AuthPage;
