import { useCallback, type FC, FormEvent, useEffect } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLoginMutation } from '~/features/auth/api/AuthApi';
import TextField from '~/shared/components/Form/TextField';
import Checkbox from '~/shared/components/Form/Checkbox';
import styles from './SignInPage.module.css';
import globals from '~/shared/assets/styles/globals.module.css';
import Button from '~/shared/components/Form/Button/Button';
import {
  LoginBodySchema,
  type LoginBody,
} from '~/features/auth/schema/LoginBodySchema';

const SignInPage: FC = () => {
  const form = useForm<LoginBody>({
    resolver: zodResolver(LoginBodySchema),
  });
  const [doLogin, data] = useLoginMutation();

  const onSubmit: SubmitHandler<LoginBody> = useCallback(
    (body) => {
      doLogin(body);
    },
    [doLogin]
  );

  //   useEffect(() => {
  //     console.log(data.data);
  //   }, [data]);

  return (
    <main className={`${globals.main} ${globals.bgDark}`}>
      <section className={styles.signInContent}>
        <i className={`fa fa-user-circle ${styles.signInIcon}`}></i>
        <h1>Sign In</h1>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <TextField
            label="Email"
            type="email"
            autocomplete="username"
            form={form}
            formData={form.register('email')}
          />
          <TextField
            label="Password"
            type="password"
            autocomplete="current-password"
            form={form}
            formData={form.register('password')}
          />
          <Checkbox label="Remember me" name="remember-me" />
          <Button label="Sign in" />
        </form>
      </section>
    </main>
  );
};

export default SignInPage;
