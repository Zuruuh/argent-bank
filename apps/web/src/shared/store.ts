import {
  PreloadedState,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { rememberEnhancer, rememberReducer } from 'redux-remember';
import { LoginApiSlice } from '~/shared/auth/api/LoginApiSlice';
import { TokenSlice } from '~/shared/auth/slices/TokenSlice';
import { ProfileApiSlice } from './slices/user/ProfileApiSlice';
import { AuthenticatedApiSlice } from './slices/AuthenticatedApiSlice';

let reducers = {
  [LoginApiSlice.reducerPath]: LoginApiSlice.reducer,
  [TokenSlice.name]: TokenSlice.reducer,
  [AuthenticatedApiSlice.reducerPath]: AuthenticatedApiSlice.reducer,
  [ProfileApiSlice.reducerPath]: ProfileApiSlice.reducer,
};

// Need to "hack" this type bcz if we don't `RootState` will be of type `any` :/
reducers = rememberReducer(reducers) as unknown as typeof reducers;

const rootReducers = combineReducers(reducers);

const persistedKeys: (keyof typeof reducers)[] = [TokenSlice.name];

export function createStore(preloadedState: PreloadedState<RootState> = {}) {
  const store = configureStore({
    reducer: rootReducers,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(LoginApiSlice.middleware)
        .concat(ProfileApiSlice.middleware),
    devTools: import.meta.env.DEV,
    enhancers: [
      rememberEnhancer(localStorage, persistedKeys, {
        persistWholeStore: true,
      }),
    ],
  });

  setupListeners(store.dispatch);

  return store;
}

export type RootState = ReturnType<typeof rootReducers>;
export type AppStore = ReturnType<typeof createStore>;
export type AppDispatch = AppStore['dispatch'];
