import type { StoryDefault, Story } from '@ladle/react';
import { withCurrentRoute, withRouter } from '~/shared/ladle/decorators';
import { SignInPageConfig } from '~/pages/SignInPage';
import Navigation from './Navigation';

export default {
  title: 'Components/Layout/Navigation',
} satisfies StoryDefault;

export const Default: Story = () =>
  withRouter({ story: Navigation, props: {} });

export const WithActiveLink: Story = () =>
  withCurrentRoute(
    { story: Navigation, props: {} },
    { element: <></>, currentPath: SignInPageConfig.path }
  );
