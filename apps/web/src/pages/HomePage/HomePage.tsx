import { type FC } from 'react';
import Features from './components/Features';
import Hero from './components/Hero';
import Footer from '~/shared/components/Layout/Footer';
import Navigation from '~/shared/components/Layout/Navigation';

const HomePage: FC = () => {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
