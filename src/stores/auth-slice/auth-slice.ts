import { AuthSignupForm } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface AuthState {
  signUpForm: AuthSignupForm;
  token: string;
}

const initialState: AuthState = {
  signUpForm: {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  },
  token: '',
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    updateSignUpForm: (state, action: PayloadAction<Partial<AuthSignupForm>>) => {
      state.signUpForm = { ...state.signUpForm, ...action.payload };
    },
    setCredentials: (state, action) => {
      const { token } = action.payload;

      localStorage.setItem('newster_token', token);
      state.token = token;
    },
    logOut: (state) => {
      localStorage.removeItem('newster_token');
      state.token = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions } = authSlice;

export const authSelector = (state: RootState) => state.authSlice;

export const selectCurrentToken = (state: RootState) => state.authSlice.token;

export default authSlice.reducer;
