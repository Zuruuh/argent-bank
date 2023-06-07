import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { z } from 'zod';
import { TokenSlice } from '../auth/slices/TokenSlice';

export const AuthenticatedApiSlice = createApi({
  reducerPath: 'authenticated.api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders(headers, { getState }) {
      const { token } = z
        .object({
          [TokenSlice.name]: z.object({ token: z.string().optional() }),
        })
        .parse(getState())[TokenSlice.name];

      if (typeof token === 'string') {
        headers.set('Authorization', `Bearer ${token}`);
      }
    },
  }),
  endpoints: () => ({}),
});

//export const { useProfileQuery } = AuthenticatedApiSlice;
