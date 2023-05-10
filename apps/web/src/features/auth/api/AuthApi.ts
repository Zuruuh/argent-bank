import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  type LoginResponse,
  LoginResponseSchema,
} from '../schema/LoginResponseSchemas';
import { LoginBody } from '../schema/LoginBodySchema';

export const AuthApi = createApi({
  reducerPath: 'auth.api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    // prepareHeaders(headers, { getState }) {
    //   const token = (
    //     getState() as Record<PropertyKey, Record<PropertyKey, unknown>>
    //   )?.auth?.token;

    //   if (typeof token === 'string') {
    //     headers.set('authorization', `Bearer ${token}`);
    //   }
    // },
  }),

  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginBody>({
      query: (body) => ({
        url: '/api/v1/user/login',
        method: 'POST',
        body,
      }),
      transformResponse: (response) => LoginResponseSchema.parse(response),
    }),
    profile: builder.query(),
  }),
});

export const { useLoginMutation } = AuthApi;
