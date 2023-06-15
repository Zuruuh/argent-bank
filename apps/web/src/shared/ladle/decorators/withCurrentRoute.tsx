import { MemoryRouter, Route, Routes } from 'react-router';
import { Decorator } from './Decorator.types';
import { createProvider } from './createProvider';

type DecoratorProps = { currentPath?: string };

const withCurrentRoute: Decorator<DecoratorProps> = (
  element,
  { currentPath = '/' }
): JSX.Element => (
  <MemoryRouter initialEntries={[currentPath]}>
    <Routes>
      <Route path="*" element={element}>
        <Route
          path={currentPath === '/' ? '*' : `*/${currentPath}`}
          element={element}
        ></Route>
      </Route>
    </Routes>
  </MemoryRouter>
);

export const withCurrentRouteProvider = createProvider(withCurrentRoute);
