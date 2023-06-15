import type { StoryDefault, Story } from '@ladle/react';
import {
  withCurrentRouteProvider,
  withRouterProvider,
  withStoreProvider,
} from '~/shared/ladle/decorators';
import { SignInPageConfig } from '~/pages/SignInPage';
import Navigation from './Navigation';
import { StoreBuilder } from '~/shared/ladle/redux/StoreBuilder';
import { HomePageConfig } from '~/pages/HomePage';

export default {
  title: 'Components/Layout/Navigation',
} satisfies StoryDefault;

export const Default: Story = () => <Navigation />;

Default.decorators = [
  withStoreProvider({ store: new StoreBuilder().withAnonymousUser().build() }),
  withCurrentRouteProvider({ currentPath: HomePageConfig.path }),
];

export const WithActiveLink: Story = () => <Navigation />;

WithActiveLink.decorators = [
  withStoreProvider({ store: new StoreBuilder().withAnonymousUser().build() }),
  withCurrentRouteProvider({ currentPath: SignInPageConfig.path }),
];

export const LoggedIn: Story = () => <Navigation />;

LoggedIn.decorators = [
  withStoreProvider({ store: new StoreBuilder().withRandomUser().build() }),
  withRouterProvider(),
];
