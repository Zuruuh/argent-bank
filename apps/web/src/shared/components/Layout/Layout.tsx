import { type FC } from 'react';
import { Outlet } from 'react-router';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

const Layout: FC = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
