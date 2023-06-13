import { useState, type FC, useCallback } from 'react';
import Account, { type AccountProps } from './components/Account';
import styles from './ProfilePage.module.css';
import globals from '~/shared/assets/styles/globals.module.css';
import clsx from 'clsx';
import {
  useProfileMutation,
  useProfileQuery,
} from '~/shared/slices/user/ProfileApiSlice';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import {
  UpdateProfile,
  UpdateProfileSchema,
} from './schemas/UpdateProfileSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '~/shared/components/Form/Button/Button';
import InlineField from '~/shared/components/Form/InlineField/InlineField';
import { BUTTON_SIZES } from '~/shared/components/Form/Button/Button.types';

const mockAccounts: AccountProps[] = [
  {
    amount: 2082.79,
    name: 'Argent Bank Checking',
    count: 8349,
  },
  {
    count: 6712,
    amount: 10928.42,
    name: 'Argent Bank Savings',
  },
  {
    count: 8349,
    name: 'Argent Bank Credit Card',
    amount: 184.3,
  },
];

const ProfilePage: FC = () => {
  const [editing, setEditing] = useState<boolean>(false);
  const [doProfileUpdate, res] = useProfileMutation();
  const { data: profile, isLoading: isProfileLoading } = useProfileQuery();
  const form = useForm<UpdateProfile>({
    resolver: zodResolver(UpdateProfileSchema),
    mode: 'onTouched',
    values: { ...profile },
  });
  const onSubmit: SubmitHandler<UpdateProfile> = useCallback(
    async (body) => {
      setEditing(false);
      await doProfileUpdate(body);
    },
    [doProfileUpdate, setEditing]
  );

  if (isProfileLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className={clsx(globals.main, globals.bgDark)}>
      <div className={styles.header}>
        <h1>Welcome back</h1>
        <br />
        {editing ? (
          <FormProvider {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className={styles.form}
            >
              <div className={styles.fieldsWrapper}>
                <InlineField
                  formData={form.register('firstName')}
                  placeholder={'Prénom'}
                />
                <InlineField
                  formData={form.register('lastName')}
                  placeholder={'Nom'}
                />
              </div>
              <div className={styles.buttonsWrapper}>
                <Button
                  label="Sign in"
                  loading={res.isLoading}
                  size={BUTTON_SIZES.SMALL}
                />
                <Button
                  disabled={res.isLoading}
                  label="Cancel"
                  size={BUTTON_SIZES.SMALL}
                  onClick={(e) => {
                    e.preventDefault();
                    setEditing(false);
                  }}
                />
              </div>
            </form>
          </FormProvider>
        ) : (
          <>
            <h1>
              {profile.firstName} {profile.lastName}!
            </h1>
            <button
              className={styles.editButton}
              onClick={() => setEditing(true)}
            >
              Edit Name
            </button>
          </>
        )}
      </div>
      <h2 className={globals.srOnly}>Accounts</h2>
      {mockAccounts.map((account, i) => (
        <Account {...account} key={i} />
      ))}
    </main>
  );
};

export default ProfilePage;
