import { Story, StoryDefault } from '@ladle/react';
import Account from './Account';

export default {
  title: 'Pages/User/Account',
} satisfies StoryDefault;

export const Default: Story = () => (
  <Account amount={10} count={5} name="My account" />
);
