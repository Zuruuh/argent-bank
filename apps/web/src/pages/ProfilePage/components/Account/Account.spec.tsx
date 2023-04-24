import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Account from './Account';

test('It works', async () => {
  const { container } = render(<Account amount={5} count={10} name="test" />);
  const element = container.querySelector('.account')!;

  const title = element.querySelector('.accountTitle')!;
  expect(title).to.have.text('test (x10)');

  const amount = element.querySelector('.accountAmount')!;
  expect(amount).to.have.text('$5.00');
});
