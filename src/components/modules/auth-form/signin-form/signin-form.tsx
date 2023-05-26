import React, { useState } from 'react';
import { CardContent, Box, Card, TextField, Button } from '@mui/material';
import styles from './signin-form.module.scss';
import { AuthSigninForm } from '@/types';
import { signIn } from 'next-auth/react';
import { ApplicationName } from '@/constants';
import GoogleIcon from '@mui/icons-material/Google';
import Link from 'next/link';

export const SignInForm = () => {
  const [signInForm, setSignInForm] = useState<AuthSigninForm>({
    email: '',
    password: '',
  });

  const handleUpdateForm = (fieldName: keyof AuthSigninForm, value: string) => {
    setSignInForm((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const handleSubmitSignup = async () => {
    alert('Regular sign in process to be developed');
  };

  const handleSubmitGoogleAuth = async () => {
    signIn('google', { callbackUrl: 'http://localhost:3000/personal-space' });
  };

  return (
    <Card className={styles.card}>
      <CardContent className={styles.cardContent}>
        <h3 className={styles.title}>
          Welcome to <span>{ApplicationName}</span>
        </h3>
        <Box className={styles.formBox} component="form" noValidate autoComplete="off">
          <TextField
            required
            label="Email"
            className={styles.input}
            size="small"
            value={signInForm.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleUpdateForm('email', e.target.value)
            }
          />
          <TextField
            required
            label="Password"
            className={styles.input}
            size="small"
            value={signInForm.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleUpdateForm('password', e.target.value)
            }
          />
          <div className={styles.buttons}>
            <Button
              className={styles.button}
              onClick={handleSubmitSignup}
              variant="outlined"
              size="small">
              Get Started
            </Button>
            <Button
              className={styles.button}
              onClick={handleSubmitGoogleAuth}
              variant="contained"
              size="small"
              startIcon={<GoogleIcon />}>
              Sign in with Google
            </Button>
            <div className={styles.inline}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Don't have a Newster account?{' '}
              <Link href={{ pathname: '/auth', query: { action: 'signup' } }}>Sign Up</Link>
            </div>
          </div>
        </Box>
      </CardContent>
    </Card>
  );
};
