import { PreloadedState, Store } from '@reduxjs/toolkit';
import { clearToken, setToken } from '~/shared/auth/slices/TokenSlice';
import { ProfileApiSlice } from '~/shared/slices/user/ProfileApiSlice';
import { RootState, createStore } from '~/shared/store';
import { generateRandomUser } from '~/shared/fixtures/user';

export class StoreBuilder {
  private state: PreloadedState<RootState>;

  public constructor() {
    this.state = {};
  }

  public withAnonymousUser(): this {
    this.state.token.token = undefined;

    return this;
  }

  public withRandomUser(): this {
    this.store.dispatch(setToken('token'));

    this.store.dispatch(
      ProfileApiSlice.util.updateQueryData('getProfile', {}, (draft) => {
        Object.assign(draft, generateRandomUser());
      })
    );

    return this;
  }

  public build(): Store {
    return createStore(this.state);
  }
}
