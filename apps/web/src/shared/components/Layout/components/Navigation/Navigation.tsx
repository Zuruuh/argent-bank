import { type FC } from 'react';
import Logo from './images/argent-bank-logo.png';
import styles from './Navigation.module.css';
import globals from '~/shared/assets/styles/globals.module.css';
import { HomePageConfig } from '~/pages/HomePage';
import { SignInPageConfig } from '~/pages/SignInPage';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { ProfilePageConfig } from '~/pages/ProfilePage';
import { useProfileQuery } from '~/shared/slices/user/ProfileApiSlice';
import { useSignOut } from '~/shared/hooks/auth/useSignOut';

const Navigation: FC = () => {
  const profile = useProfileQuery();
  const signOut = useSignOut();

  return (
    <nav className={styles.navigation}>
      <NavLink
        className={clsx(styles.link, styles.linkLogo)}
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
        {profile.isLoading ? (
          <></>
        ) : profile.isError ? (
          <NavLink
            className={({ isActive }) =>
              clsx(styles.link, styles.navigationItem, {
                [styles.activeLink]: isActive,
              })
            }
            to={SignInPageConfig.path}
          >
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        ) : (
          <>
            <NavLink
              to={ProfilePageConfig.path}
              className={clsx(styles.link, styles.navigationItem)}
            >
              <i className="fa fa-user-circle"></i>
              {profile.data?.firstName}
            </NavLink>
            <button
              onClick={signOut}
              className={clsx(styles.link, styles.navigationItem)}
            >
              <i className="fa fa-sign-out"></i>
              Sign out
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
