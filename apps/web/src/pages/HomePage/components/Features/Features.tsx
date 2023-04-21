import { type FC } from 'react';
import ChatIcon from './images/icon-chat.png';
import MoneyIcon from './images/icon-money.png';
import SecurityIcon from './images/icon-security.png';
import Feature, { FeatureProps } from './components/Feature';
import styles from './Features.module.css';
import globals from '~/shared/assets/styles/globals.module.css';

const features: FeatureProps[] = [
  {
    icon: ChatIcon,
    alt: 'Chat Icon',
    title: 'You are our #1 priority',
    subtitle:
      'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
  },
  {
    icon: MoneyIcon,
    alt: 'Money Icon',
    title: 'More savings means higher rates',
    subtitle:
      'The more you save with us, the higher your interest rate will be!',
  },
  {
    icon: SecurityIcon,
    alt: 'Security Icon',
    title: 'Security you can trust',
    subtitle:
      'We use top of the line encryption to make sure your data and money is always safe.',
  },
];

const Features: FC = () => {
  return (
    <section className={styles.features}>
      <h2 className={globals.srOnly}>Features</h2>
      {features.map((feature) => (
        <Feature {...feature} key={feature.title} />
      ))}
    </section>
  );
};

export default Features;
