// Test bootstrap file.
// This code is ran only once when testing something

import { chai } from 'vitest';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

chai.use((await import('chai-dom')).default);

afterEach(cleanup);
