import type { StoryDefault, Story } from '@ladle/react';
import { withCurrentRoute } from '~/shared/ladle/decorators';
import { Page } from '~/shared/ladle/content/page';
import Layout from './Layout';

export default {
  title: 'Components/Layout',
} satisfies StoryDefault;

export const Default: Story = () =>
  withCurrentRoute({ story: Layout, props: {} }, { element: <Page /> });
