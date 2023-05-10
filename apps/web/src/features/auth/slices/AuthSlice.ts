import { createSlice } from '@reduxjs/toolkit';
import { User } from '~/shared/models/User';

export interface AuthSliceState {
  user?: User;
  token?: string;
}

const AuthSlice = createSlice({
  name: 'auth.slice',
  initialState: {} satisfies AuthSliceState,
  reducers: {
    setCredentials(state: AuthSliceState, action): void {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    logOut(state: AuthSliceState): void {
      state.user = undefined;
      state.token = undefined;
    },
  },
});

export const { setCredentials, logOut } = AuthSlice.actions;
export const selectCurrentUser = (state: {
  auth: AuthSliceState;
}): User | undefined => state.auth.user;
export const selectCurrentToken = (state: {
  auth: AuthSliceState;
}): string | undefined => state.auth.token;

export default AuthSlice.reducer;
