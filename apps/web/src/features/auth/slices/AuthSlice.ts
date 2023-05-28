import { createSlice } from '@reduxjs/toolkit';

export interface AuthSliceState {
  token?: string;
}

const AuthSlice = createSlice({
  name: 'auth',
  initialState: {} satisfies AuthSliceState,
  reducers: {
    setToken(state: AuthSliceState, action): void {
      state.token = action.payload;
    },
    logOut(state: AuthSliceState): void {
      state.token = undefined;
    },
  },
});

export const { setToken, logOut } = AuthSlice.actions;
export const selectCurrentToken = (state: {
  auth: AuthSliceState;
}): string | undefined => state.auth.token;

export default AuthSlice.reducer;
