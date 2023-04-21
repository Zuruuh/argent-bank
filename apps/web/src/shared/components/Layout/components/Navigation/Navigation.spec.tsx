import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import { MemoryRouter } from 'react-router';
import { SignInPageConfig } from '~/pages/SignInPage';
import Navigation from './Navigation';

test('It renders', async () => {
  render(<Navigation />, {
    wrapper: MemoryRouter,
  });
});

test("The navlink is active on it's url", async () => {
  const { container } = render(
    <MemoryRouter initialEntries={[SignInPageConfig.path]}>
      <Navigation />
    </MemoryRouter>
  );

  const link = container.querySelector(`a[href="${SignInPageConfig.path}"]`);
  expect(link).to.have.class('activeLink');
});

test('The navlink is not active on another url', async () => {
  const { container } = render(<Navigation />, { wrapper: MemoryRouter });

  const link = container.querySelector(`a[href="${SignInPageConfig.path}"]`);
  expect(link).not.to.have.class('activeLink');
});
