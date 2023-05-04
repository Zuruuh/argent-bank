import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  LoginErrorResponseSchema,
  type LoginValidResponse,
  LoginValidResponseSchema,
} from '../schema/LoginResponseSchemas';
import { LoginBody } from '../schema/LoginBodySchema';

export const AuthApi = createApi({
  reducerPath: 'auth.api',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginValidResponse, LoginBody>({
      query: (body) => ({
        url: '/api/v1/user/login',
        method: 'POST',
        body,
      }),
      transformResponse: (response) => LoginValidResponseSchema.parse(response),
      transformErrorResponse: (response) =>
        LoginErrorResponseSchema.parse(response),
    }),
  }),
});

export const { useLoginMutation } = AuthApi;
