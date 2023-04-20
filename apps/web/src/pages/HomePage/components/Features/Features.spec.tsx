import { render } from '@testing-library/react';
import { test } from 'vitest';
import Features from './Features';

test('It renders', async () => {
  render(<Features />);
});
