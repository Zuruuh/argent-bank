import { render } from '@testing-library/react';
import { test } from 'vitest';
import Navigation from './Navigation';

test('It renders', async () => {
  render(<Navigation />);
});
