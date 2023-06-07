import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  type LoginResponse,
  LoginResponseSchema,
} from '../schema/LoginResponseSchemas';
import { LoginBody } from '../schema/LoginBodySchema';
import { AuthenticatedApiSlice } from '~/shared/slices/AuthenticatedApiSlice';
import { setToken } from '../slices/AuthSlice';

export const AuthApiSlice = createApi({
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
            context.dispatch(setToken(response.data.body.token));
            context.dispatch(
              AuthenticatedApiSlice.util.invalidateTags(['_self'])
            );
          })
          .catch(() => {
            /* noop */
          });
      },
    }),
  }),
});

export const { useLoginMutation } = AuthApiSlice;
