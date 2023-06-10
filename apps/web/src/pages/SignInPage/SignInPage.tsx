import { useCallback, type FC } from 'react';
import { useForm, type SubmitHandler, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLoginMutation } from '~/shared/auth/api/LoginApiSlice';
import TextField from '~/shared/components/Form/TextField';
import Checkbox from '~/shared/components/Form/Checkbox';
import styles from './SignInPage.module.css';
import globals from '~/shared/assets/styles/globals.module.css';
import Button from '~/shared/components/Form/Button/Button';
import {
  LoginBodySchema,
  type LoginBody,
} from '~/shared/auth/schema/LoginBodySchema';
import clsx from 'clsx';
import { ReduxWrappedInvalidResponseSchema } from '~/shared/schema/InvalidResponseSchema';
import { useNavigate } from 'react-router';
import { ProfilePageConfig } from '../ProfilePage';
import { DevTool as HookFormDevtools } from '@hookform/devtools';

const SignInPage: FC = () => {
  const form = useForm<LoginBody>({
    resolver: zodResolver(LoginBodySchema),
    mode: 'onTouched',
  });

  const [doLogin, res] = useLoginMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginBody> = useCallback(
    async (body) => {
      const result = await doLogin(body);
      if ('data' in result) {
        navigate(ProfilePageConfig.path);

        return;
      }

      const error = ReduxWrappedInvalidResponseSchema.safeParse(result.error);
      if (!error.success) {
        console.error(
          `Could not parse response returned from API: `,
          result.error
        );

        return;
      }

      // Really bad way to determine which field has an error,
      // But api response is really badly designed so this is the only option,
      // apart from adding all error messages to root

      const field = (
        {
          'Error: User not found!': 'email',
          'Error: Password is invalid': 'password',
        } satisfies Record<string, Parameters<typeof form.setError>[0]>
      )[error.data.data.message];

      form.setError(
        field ?? 'root',
        { message: error.data.data.message },
        { shouldFocus: true }
      );

      return;
    },
    [doLogin, form, navigate]
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
      <HookFormDevtools control={form.control} />
    </main>
  );
};

export default SignInPage;
