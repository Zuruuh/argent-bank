import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '~/shared/store';

export interface TokenSliceState {
  token?: string;
}

// Need to declare this aside with type annotation so redux infers all undefined keys
const initialState: TokenSliceState = {};

export const TokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken(state: TokenSliceState, action): TokenSliceState {
      console.log('token set !');
      return { ...state, token: action.payload };
    },

    clearToken(state: TokenSliceState): TokenSliceState {
      return { ...state, token: undefined };
    },
  },
});

export const { setToken, clearToken } = TokenSlice.actions;

export const selectCurrentToken = (state: RootState): string | undefined =>
  state[TokenSlice.name].token;
