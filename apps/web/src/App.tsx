import { type FC } from 'react';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import { HomePageConfig } from './pages/HomePage';
import { SignInPageConfig } from './pages/SignInPage';
import { ProfilePageConfig } from './pages/ProfilePage';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from './shared/store';
import Layout from './shared/components/Layout';
import type { PageConfig } from './shared/types/PageConfig';
import { PrivateRoute } from './shared/guards/PrivateRoute';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [HomePageConfig, SignInPageConfig, ProfilePageConfig].map(
      (config: PageConfig) => {
        if (config.private) {
          config.element = <PrivateRoute>{config.element}</PrivateRoute>;
        }

        return config;
      }
    ),
  },
]);

const App: FC = () => {
  return (
    <ReduxProvider store={createStore()}>
      <RouterProvider router={router} />
    </ReduxProvider>
  );
};

export default App;
