import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { z } from 'zod';
import { TokenSlice, clearToken } from '../auth/slices/TokenSlice';

export const AuthenticatedApiSlice = createApi({
  reducerPath: 'authenticated.api',
  async baseQuery(args, api, options) {
    const state = z
      .object({
        [TokenSlice.name]: z.object({ token: z.string() }),
      })
      .safeParse(api.getState());

    if (!state.success) {
      return { error: 'No token found' };
    }

    const { token } = state.data.token;
    console.log(token);

    const response = await fetchBaseQuery({
      baseUrl: import.meta.env.VITE_API_URL,
      headers: { Authorization: `Bearer ${token}` },
    })(args, api, options);

    if (response.meta?.response?.status === 401) {
      api.dispatch(clearToken());
      return { error: 'Unauthorized' };
    }

    return response;
  },
  endpoints: () => ({}),
});
