import { type FC } from 'react';
import Logo from './images/argent-bank-logo.png';
import styles from './Navigation.module.css';
import globals from '~/shared/assets/styles/globals.module.css';
import { HomePageConfig } from '~/pages/HomePage';

const Navigation: FC = () => {
  return (
    <nav className={styles.navigation}>
      <a
        className={`${styles.link} ${styles.linkLogo}`}
        href={HomePageConfig.path}
      >
        <img
          className={styles.linkLogoImage}
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className={globals.srOnly}>Argent Bank</h1>
      </a>
      <div>
        <a
          className={`${styles.link} ${styles.navigationItem}`}
          href="./sign-in.html"
        >
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
