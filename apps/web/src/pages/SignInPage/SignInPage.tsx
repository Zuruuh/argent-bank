import { useCallback, type FC } from 'react';
import { useForm, type SubmitHandler, FormProvider } from 'react-hook-form';
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
import { useDispatch } from 'react-redux';
import { setCredentials } from '~/features/auth/slices/AuthSlice';
import clsx from 'clsx';
import { ReduxWrappedInvalidResponseSchema } from '~/shared/schema/InvalidResponseSchema';
import { useNavigate } from 'react-router';

const SignInPage: FC = () => {
  const form = useForm<LoginBody>({
    resolver: zodResolver(LoginBodySchema),
  });
  const [doLogin, res] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginBody> = useCallback(
    async (body) => {
      try {
        const response = await doLogin(body).unwrap();
        dispatch(setCredentials({ token: response.body.token }));
      } catch (e: unknown) {
        const error = ReduxWrappedInvalidResponseSchema.safeParse(e);
        if (!error.success) {
          console.error(`Could not parse response returned from API: `, e);

          return;
        }

        // Really bad way to determine which field has an error,
        // But api resposne is really badly designed so this is the only option,
        // apart from adding all error messages to root

        const message =
          (
            {
              'Error: User not found!': 'email',
              'Error: Password is invalid': 'password',
            } as const
          )[error.data.data.message] ?? 'root';
        form.setError(
          message,
          { message: error.data.data.message },
          { shouldFocus: true }
        );

        return;
      }

      navigate('/');
    },
    [doLogin, dispatch, form, navigate]
  );

  return (
    <main className={clsx(globals.main, globals.bgDark)}>
      <section className={styles.signInContent}>
        <i className={clsx('fa fa-user-circle', styles.signInIcon)}></i>
        <h1>Sign In</h1>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <TextField
              label="Email"
              type="email"
              autocomplete="username"
              formData={form.register('email')}
            />
            <TextField
              label="Password"
              type="password"
              autocomplete="current-password"
              formData={form.register('password')}
            />
            <Checkbox label="Remember me" name="remember-me" />
            <Button label="Sign in" loading={res.isLoading} />
          </form>
        </FormProvider>
      </section>
    </main>
  );
};

export default SignInPage;
