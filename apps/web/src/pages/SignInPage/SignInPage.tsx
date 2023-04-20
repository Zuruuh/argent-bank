import { useId, type FC } from 'react';
import Footer from '~/shared/components/Layout/Footer/Footer';
import Navigation from '~/shared/components/Layout/Navigation/Navigation';
import styles from './SignInPage.module.css';
import globals from '~/shared/assets/styles/globals.module.css';

const SignInPage: FC = () => {
  const usernameId = useId();
  const passwordId = useId();
  const rememberMeId = useId();

  return (
    <>
      <Navigation />
      <main className={`${globals.main} ${globals.bgDark}`}>
        <section className={styles.signInContent}>
          <i className={`fa fa-user-circle ${styles.signInIcon}`}></i>
          <h1>Sign In</h1>
          <form>
            <div className={styles.input}>
              <label className={styles.inputLabel} htmlFor={usernameId}>
                Username
              </label>
              <input
                className={styles.inputField}
                type="text"
                id={usernameId}
              />
            </div>
            <div className={styles.input}>
              <label className={styles.inputLabel} htmlFor={passwordId}>
                Password
              </label>
              <input
                className={styles.inputField}
                type="password"
                id={passwordId}
              />
            </div>
            <div className={styles.inputRemember}>
              <input
                className={styles.inputField}
                type="checkbox"
                id={rememberMeId}
              />
              <label
                className={styles.inputRememberLabel}
                htmlFor={rememberMeId}
              >
                Remember me
              </label>
            </div>
            <button className={styles.signInButton}>Sign In</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SignInPage;
