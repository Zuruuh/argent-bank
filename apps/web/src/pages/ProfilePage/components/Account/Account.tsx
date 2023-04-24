import { type FC } from 'react';
import styles from './Account.module.css';

export interface AccountProps {
  name: string;
  count: number;
  amount: number;
}

const Account: FC<AccountProps> = ({ name, count, amount }) => {
  return (
    <section className={styles.account}>
      <div className={styles.accountContentWrapper}>
        <h3 className={styles.accountTitle}>
          {name} (x{count})
        </h3>
        <p className={styles.accountAmount}>
          {amount.toLocaleString('en', {
            currency: 'usd',
            style: 'currency',
            maximumFractionDigits: 2,
          })}
        </p>
        <p className={styles.accountAmountDescription}>Available Balance</p>
      </div>
      <div className={`${styles.accountContentWrapperCta}`}>
        <button className={styles.transactionButton}>View transactions</button>
      </div>
    </section>
  );
};

export default Account;
