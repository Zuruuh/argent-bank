import { MemoryRouter, Route, Routes } from 'react-router';
import { DecoratorProvider, DecoratorProps } from './Decorator.types';

type DecoratorProviderProps = { element: JSX.Element; currentPath?: string };

export const withCurrentRoute = (
  { story, props = {} }: DecoratorProps,
  { element, currentPath = '/' }: DecoratorProviderProps
): JSX.Element => (
  <MemoryRouter initialEntries={[currentPath]}>
    <Routes>
      <Route path="*" element={story(props)}>
        <Route
          path={currentPath === '/' ? '*' : `*/${currentPath}`}
          element={element}
        ></Route>
      </Route>
    </Routes>
  </MemoryRouter>
);

export const withCurrentRouteProvider: DecoratorProvider<
  DecoratorProviderProps
> = (providerProps) => (story, props) =>
  withCurrentRoute({ story, props }, providerProps);
