import { MemoryRouter } from 'react-router';
import type { Decorator } from './Decorator.types';
import { createProvider } from './createProvider';

const withRouter: Decorator = (story) => <MemoryRouter>{story}</MemoryRouter>;

export const withRouterProvider = createProvider(withRouter);
