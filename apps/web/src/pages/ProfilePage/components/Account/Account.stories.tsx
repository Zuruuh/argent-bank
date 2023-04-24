import { Story, StoryDefault } from '@ladle/react';
import Account from './Account';

export default {
  title: 'Pages/Profile/Account',
} satisfies StoryDefault;

export const Default: Story = () => (
  <Account amount={10} count={5} name="My account" />
);

export const Thousand: Story = () => (
  <Account amount={1000} count={5} name="My account" />
);

export const Decimal: Story = () => (
  <Account amount={10.502} count={5} name="My account" />
);
