import { type FC } from 'react';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import { HomePageConfig } from '~/pages/HomePage';
import { SignInPageConfig } from '~/pages/SignInPage';

const router = createBrowserRouter([HomePageConfig, SignInPageConfig]);

const App: FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
