import { type FC } from 'react';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import { HomePageConfig } from '~/pages/HomePage';
import { SignInPageConfig } from '~/pages/SignInPage';
import Layout from '~/shared/components/Layout';

const router = createBrowserRouter([
  { element: <Layout />, children: [HomePageConfig, SignInPageConfig] },
]);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
