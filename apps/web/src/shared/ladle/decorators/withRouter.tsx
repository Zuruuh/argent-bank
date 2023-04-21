import { MemoryRouter } from 'react-router';
import type { DecoratorProvider, DecoratorProps } from './Decorator.types';

export const withRouter = ({ story, props }: DecoratorProps): JSX.Element => (
  <MemoryRouter>{story(props)}</MemoryRouter>
);

export const withRouterProvider: DecoratorProvider = () => (story, props) =>
  withRouter({ story, props });
