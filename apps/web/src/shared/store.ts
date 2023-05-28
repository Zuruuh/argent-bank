import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { rememberEnhancer, rememberReducer } from 'redux-remember';
import { AuthApiSlice } from '~/features/auth/api/AuthApiSlice';
import AuthSlice from '~/features/auth/slices/AuthSlice';
import { AuthenticatedApiSlice } from './slices/AuthenticatedApiSlice';

const reducers = {
  [AuthenticatedApiSlice.reducerPath]: AuthenticatedApiSlice.reducer,
  auth: AuthSlice,
};

const persistedKeys: (keyof typeof reducers)[] = ['auth'];

export const store = configureStore({
  reducer: rememberReducer(reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthApiSlice.middleware),
  devTools: import.meta.env.DEV,
  enhancers: [
    rememberEnhancer(localStorage, persistedKeys, { persistWholeStore: true }),
  ],
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
