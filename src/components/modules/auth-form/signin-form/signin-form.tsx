import React, { useState } from 'react';
import { CardContent, Box, Card, TextField, Button } from '@mui/material';
import styles from './signin-form.module.scss';
import { AuthSigninForm } from '@/types';
import { useDispatch } from 'react-redux';
import { actions as authSliceActions } from '@/stores/auth-slice/auth-slice';
import { useUserSignInMutation } from '@/stores/api/auth-api';
import { useRouter } from 'next/router';

export const SignInForm = () => {
  const [signInForm, setSignInForm] = useState<AuthSigninForm>({
    email: 'yaroslavfomink@gmail.com',
    password: '12345678',
  });

  const [userSignIn] = useUserSignInMutation();
  const { setCredentials } = authSliceActions;
  const dispatch = useDispatch();
  const router = useRouter();

  const handleUpdateForm = (fieldName: keyof AuthSigninForm, value: string) => {
    setSignInForm((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const handleSubmitSignup = async () => {
    //TODO: provide validation
    try {
      const { data } = await userSignIn(signInForm).unwrap();

      dispatch(setCredentials({ ...data }));
      router.push('/personal-space');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Card className={styles.signinFormRoot}>
      <CardContent className={styles.signinFormContent}>
        <h3>Sign Up</h3>
        <Box className={styles.signinForm} component="form" noValidate autoComplete="off">
          <TextField
            required
            label="Email Address"
            className={styles.signinFormInput}
            size="small"
            value={signInForm.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleUpdateForm('email', e.target.value)
            }
          />
          <TextField
            required
            label="Password"
            className={styles.signinFormInput}
            size="small"
            value={signInForm.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleUpdateForm('password', e.target.value)
            }
          />
          <div>
            <Button
              className={styles.authButton}
              onClick={handleSubmitSignup}
              variant="contained"
              size="small">
              Get Started
            </Button>
          </div>
        </Box>
      </CardContent>
    </Card>
  );
};
