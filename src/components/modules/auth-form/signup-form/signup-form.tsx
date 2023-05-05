import React from 'react';
import { CardContent, Box, Card, TextField, Button } from '@mui/material';
import styles from './signup-form.module.scss';
import { AuthSignupForm } from '@/types';
import { useSelector, useDispatch } from 'react-redux';
import { authSelector, actions as authSliceActions } from '@/stores/auth-slice/auth-slice';

export const SignupForm = () => {
  const { signUpForm } = useSelector(authSelector);
  const { updateSignUpForm } = authSliceActions;
  const dispatch = useDispatch();

  const handleUpdateForm = (fieldName: keyof AuthSignupForm, value: string) => {
    dispatch(
      updateSignUpForm({
        [fieldName]: value,
      }),
    );
  };

  return (
    <Card className={styles.signupFormRoot}>
      <CardContent className={styles.signupFormContent}>
        <h3>Sign Up</h3>
        <Box className={styles.signupForm} component="form" noValidate autoComplete="off">
          <TextField
            required
            label="Email Address"
            className={styles.signupFormInput}
            size="small"
            value={signUpForm.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleUpdateForm('email', e.target.value)
            }
          />
          <TextField
            required
            label="First Name"
            className={styles.signupFormInput}
            size="small"
            value={signUpForm.firstName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleUpdateForm('firstName', e.target.value)
            }
          />
          <TextField
            required
            label="Last Name"
            className={styles.signupFormInput}
            size="small"
            value={signUpForm.lastName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleUpdateForm('lastName', e.target.value)
            }
          />
          <TextField
            required
            label="Password"
            className={styles.signupFormInput}
            size="small"
            value={signUpForm.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleUpdateForm('password', e.target.value)
            }
          />
          <div>
            <Button className={styles.authButton} variant="contained" size="small">
              Get Started
            </Button>
          </div>
        </Box>
      </CardContent>
    </Card>
  );
};
