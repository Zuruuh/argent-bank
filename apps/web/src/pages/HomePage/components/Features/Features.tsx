import { type FC } from 'react';
import styles from './Features.module.css';
import globals from '~/shared/assets/styles/globals.module.css';

const Features: FC = () => {
  return (
    <section className={styles.features}>
      <h2 className={globals.srOnly}>Features</h2>
      <div className={styles.featureItem}>
        <img
          src="./images/icon-chat.png"
          alt="Chat Icon"
          className={styles.featureIcon}
        />
        <h3 className={styles.featureItemTitle}>You are our #1 priority</h3>
        <p>
          Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes.
        </p>
      </div>
      <div className={styles.featureItem}>
        <img
          src="./images/icon-money.png"
          alt="Money Icon"
          className={styles.featureIcon}
        />
        <h3 className={styles.featureItemTitle}>
          More savings means higher rates
        </h3>
        <p>The more you save with us, the higher your interest rate will be!</p>
      </div>
      <div className={styles.featureItem}>
        <img
          src="./images/icon-security.png"
          alt="Security Icon"
          className={styles.featureIcon}
        />
        <h3 className={styles.featureItemTitle}>Security you can trust</h3>
        <p>
          We use top of the line encryption to make sure your data and money is
          always safe.
        </p>
      </div>
    </section>
  );
};

export default Features;
