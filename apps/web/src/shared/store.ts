import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { rememberEnhancer, rememberReducer } from 'redux-remember';
import { LoginApiSlice } from '~/shared/auth/api/LoginApiSlice';
import { TokenSlice } from '~/shared/auth/slices/TokenSlice';
import { ProfileApiSlice } from './slices/user/ProfileApiSlice';

const reducers = {
  [LoginApiSlice.reducerPath]: LoginApiSlice.reducer,
  [TokenSlice.name]: TokenSlice.reducer,
  [ProfileApiSlice.reducerPath]: ProfileApiSlice.reducer,
};

const persistedKeys: (keyof typeof reducers)[] = [TokenSlice.name];

export const store = configureStore({
  // Need to "hack" this type bcz if we don't `RootState` will be of type `any` :/
  reducer: rememberReducer(reducers) as unknown as typeof reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(LoginApiSlice.middleware)
      .concat(ProfileApiSlice.middleware),
  devTools: import.meta.env.DEV,
  enhancers: [
    rememberEnhancer(localStorage, persistedKeys, { persistWholeStore: true }),
  ],
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
