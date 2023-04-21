import { type FC } from 'react';
import Account, { type AccountProps } from './components/Account';
import styles from './UserPage.module.css';
import globals from '~/shared/assets/styles/globals.module.css';

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

const UserPage: FC = () => {
  return (
    <main className={`${globals.main} ${globals.bgDark}`}>
      <div className={styles.header}>
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className={styles.editButton}>Edit Name</button>
      </div>
      <h2 className={globals.srOnly}>Accounts</h2>
      {mockAccounts.map((account, i) => (
        <Account {...account} key={i} />
      ))}
    </main>
  );
};

export default UserPage;
