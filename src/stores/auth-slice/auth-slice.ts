import { AuthSignupForm } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface CounterState {
  signUpForm: AuthSignupForm;
}

const initialState: CounterState = {
  signUpForm: {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  },
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    updateSignUpForm: (state, action: PayloadAction<Partial<AuthSignupForm>>) => {
      state.signUpForm = { ...state.signUpForm, ...action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions } = authSlice;

export const authSelector = (state: RootState) => state.authSlice;

export default authSlice.reducer;
