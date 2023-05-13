import { AuthSignupForm } from '@/types';
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
  }),
});

export const { useUserSignUpMutation } = authApi;
