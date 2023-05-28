import { type FC } from 'react';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import { HomePageConfig } from './pages/HomePage';
import { SignInPageConfig } from './pages/SignInPage';
import { ProfilePageConfig } from './pages/ProfilePage';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './shared/store';
import Layout from './shared/components/Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [HomePageConfig, SignInPageConfig, ProfilePageConfig],
  },
]);

const App: FC = () => {
  return (
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
  );
};

export default App;
