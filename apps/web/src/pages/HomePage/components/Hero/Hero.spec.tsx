import { render } from '@testing-library/react';
import { test } from 'vitest';
import Hero from './Hero';

test('It renders', async () => {
  render(<Hero />);
});
