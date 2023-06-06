import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProfileResponseSchema } from '../schema/ProfileResponseSchema';
import { User } from '../models/User';

export const AuthenticatedApiSlice = createApi({
  reducerPath: 'authenticated.api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders(headers, { getState }) {
      const token = (
        getState() as Record<PropertyKey, Record<PropertyKey, unknown>>
      )?.auth?.token;

      if (typeof token === 'string') {
        headers.set('Authorization', `Bearer ${token}`);
      }
    },
  }),
  tagTypes: ['_self'],
  endpoints: (builder) => ({
    profile: builder.query<User, Record<string, never>>({
      query: () => ({ url: '/api/v1/user/profile', method: 'POST' }),
      providesTags: ['_self'],
      transformResponse: (response) =>
        ProfileResponseSchema.parse(response).body,
    }),
  }),
});

export const { useProfileQuery } = AuthenticatedApiSlice;
