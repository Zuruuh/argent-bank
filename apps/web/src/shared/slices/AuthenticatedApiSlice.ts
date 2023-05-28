import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  ProfileResponse,
  ProfileResponseSchema,
} from '../schema/ProfileResponseSchema';

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
    profile: builder.query<ProfileResponse, Record<string, never>>({
      query: () => '/user/profile',
      providesTags: ['_self'],
      transformResponse: (response) => ProfileResponseSchema.parse(response),
    }),
  }),
});

export const { useProfileQuery } = AuthenticatedApiSlice;
