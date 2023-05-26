import React from 'react';
import { CardContent, Box, Card, TextField, Button } from '@mui/material';
import styles from './signup-form.module.scss';
import { AuthSignupForm } from '@/types';
import { useSelector, useDispatch } from 'react-redux';
import { authSelector, actions as authSliceActions } from '@/stores/auth-slice/auth-slice';
import { useUserSignUpMutation } from '@/stores/api/auth-api';

export const SignUpForm = () => {
  const { signUpForm } = useSelector(authSelector);
  const { updateSignUpForm } = authSliceActions;
  const [userSignUp] = useUserSignUpMutation();
  const dispatch = useDispatch();

  const handleUpdateForm = (fieldName: keyof AuthSignupForm, value: string) => {
    dispatch(
      updateSignUpForm({
        [fieldName]: value,
      }),
    );
  };

  const handleSubmitSignup = async () => {
    //TODO: provide validation
    try {
      const { data } = await userSignUp(signUpForm).unwrap();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card className={styles.card}>
      <CardContent className={styles.cardContent}>
        <h3>Sign Up</h3>
        <Box className={styles.formBox} component="form" noValidate autoComplete="off">
          <TextField
            required
            label="Email Address"
            className={styles.input}
            size="small"
            value={signUpForm.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleUpdateForm('email', e.target.value)
            }
          />
          <TextField
            required
            label="First Name"
            className={styles.input}
            size="small"
            value={signUpForm.firstName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleUpdateForm('firstName', e.target.value)
            }
          />
          <TextField
            required
            label="Last Name"
            className={styles.input}
            size="small"
            value={signUpForm.lastName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleUpdateForm('lastName', e.target.value)
            }
          />
          <TextField
            required
            label="Password"
            className={styles.input}
            size="small"
            value={signUpForm.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleUpdateForm('password', e.target.value)
            }
          />
          <div>
            <Button
              className={styles.button}
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
