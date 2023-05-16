import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'apiRoot',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/',
    // credentials: 'include',
    // prepareHeaders: (headers, { getState }) => {
    //   const token = getState().auth.token;

    //   if (token) {
    //       headers.set("Authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  endpoints: () => ({}),
});
