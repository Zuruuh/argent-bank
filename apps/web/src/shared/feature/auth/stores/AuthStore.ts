import { createSlice } from '@reduxjs/toolkit';
import { User } from '~/shared/models/User';
import { providePersister } from '~/shared/persistence/providePersister';
import { z } from 'zod';

const persister = providePersister();
const token = persister.get('token', z.string());

export interface AuthState {
  loading: boolean;
  token?: string;
  user?: User;
  error?: string;
  success?: boolean;
}

export const authStore = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    token: token.success ? token.data : undefined,
  } satisfies AuthState,
  reducers: {},
});

export default authStore.reducer;
