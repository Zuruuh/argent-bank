import { render } from '@testing-library/react';
import { test } from 'vitest';
import Layout from './Layout';
import { MemoryRouter } from 'react-router-dom';

test('It renders', async () => {
  render(<Layout />, {
    wrapper: MemoryRouter,
  });
});
