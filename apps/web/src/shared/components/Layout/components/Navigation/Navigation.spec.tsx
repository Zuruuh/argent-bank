import { render } from '@testing-library/react';
import { test } from 'vitest';
import Navigation from './Navigation';
import { MemoryRouter } from 'react-router';

test('It renders', async () => {
  render(<Navigation />, {
    wrapper: MemoryRouter,
  });
});
