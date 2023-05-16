import { useRouter } from 'next/router';
import { SignInForm } from './signin-form';
import { SignUpForm } from './signup-form';

export const AuthForm = () => {
  const {
    query: { action },
  } = useRouter();

  if (action === 'signin') {
    return <SignInForm />;
  }

  return <SignUpForm />;
};
