import { type FC } from 'react';
import Features from './components/Features';
import Hero from './components/Hero';

const HomePage: FC = () => {
  return (
    <main>
      <Hero />
      <Features />
    </main>
  );
};

export default HomePage;
