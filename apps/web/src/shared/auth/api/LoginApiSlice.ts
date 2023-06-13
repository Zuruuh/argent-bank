import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  type LoginResponse,
  LoginResponseSchema,
} from '../schema/LoginResponseSchemas';
import { LoginBody } from '../schema/LoginBodySchema';
import { setToken } from '../slices/TokenSlice';
import { clearProfileCache } from '~/shared/slices/user/ProfileApiSlice';

export const LoginApiSlice = createApi({
  reducerPath: 'auth.api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginBody>({
      query: (body) => ({
        url: '/api/v1/user/login',
        method: 'POST',
        body,
      }),
      transformResponse: (response) => LoginResponseSchema.parse(response),
      onQueryStarted(_, context) {
        context.queryFulfilled
          .then((response) => {
              console.log('dispatching token')
            context.dispatch(setToken(response.data.body.token));
            context.dispatch(clearProfileCache());
          })
          .catch(() => {
            /* noop */
          });
      },
    }),
  }),
});

export const { useLoginMutation } = LoginApiSlice;
