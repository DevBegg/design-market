import { AuthSignupForm, AuthSigninForm } from '@/types';
import { api } from './api';

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    userSignUp: build.mutation<void, AuthSignupForm>({
      query: (body) => ({
        url: 'auth/signup',
        method: 'POST',
        body,
      }),
      // transformResponse: (response: { data: any }) => response.data,
    }),
    userSignIn: build.mutation<any, AuthSigninForm>({
      query: (body) => ({
        url: 'auth/signin',
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useUserSignUpMutation, useUserSignInMutation } = authApi;
