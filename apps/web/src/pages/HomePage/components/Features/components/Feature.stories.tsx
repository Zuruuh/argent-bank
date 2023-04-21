import { Story, StoryDefault } from '@ladle/react';
import FixtureIcon from './fixtures/icon-chat.png';
import Feature from './Feature';

export default {
  title: 'Pages/Home/Features/Feature',
} satisfies StoryDefault;

export const Default: Story = () => (
  <Feature
    alt="My icon"
    icon={FixtureIcon}
    subtitle="My subtitle"
    title="My Title"
  />
);
