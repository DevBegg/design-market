import { AuthSignupForm, AuthSigninForm } from '@/types';
import { api } from './api';

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    userSignUp: build.mutation<any, AuthSignupForm>({
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
    getTestRss: build.query<any, void>({
      query: () => ({
        url: ' https://api.rss2json.com/v1/api.json?rss_url=https://www.pravda.com.ua/rus/rss/view_news/',
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useUserSignUpMutation, useUserSignInMutation, useGetTestRssQuery } = authApi;
