import { type FC } from 'react';
import styles from './SignInPage.module.css';
import globals from '~/shared/assets/styles/globals.module.css';
import TextField from '~/shared/components/Form/TextField';
import Checkbox from '~/shared/components/Form/Checkbox';

const SignInPage: FC = () => {
  return (
    <main className={`${globals.main} ${globals.bgDark}`}>
      <section className={styles.signInContent}>
        <i className={`fa fa-user-circle ${styles.signInIcon}`}></i>
        <h1>Sign In</h1>
        <form>
          <TextField label="Username" name="username" />
          <TextField label="Password" name="password" type="password" />
          <Checkbox label="Remember me" name="remember-me" />
          <button className={styles.signInButton}>Sign In</button>
        </form>
      </section>
    </main>
  );
};

export default SignInPage;
