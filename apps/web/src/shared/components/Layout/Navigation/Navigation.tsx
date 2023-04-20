import { type FC } from 'react';
import Logo from './images/argent-bank-logo.png';
import styles from './Navigation.module.css';
import globals from '~/shared/assets/styles/globals.module.css';
import { HomePageConfig } from '~/pages/HomePage';
import { SignInPageConfig } from '~/pages/SignInPage';
import { NavLink } from 'react-router-dom';

const Navigation: FC = () => {
  return (
    <nav className={styles.navigation}>
      <NavLink
        className={`${styles.link} ${styles.linkLogo}`}
        to={HomePageConfig.path}
      >
        <img
          className={styles.linkLogoImage}
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className={globals.srOnly}>Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink
          className={({ isActive }) =>
            `${styles.link} ${styles.navigationItem} ${
              isActive ? styles.activeLink : ''
            }`
          }
          to={SignInPageConfig.path}
        >
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
