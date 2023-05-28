import { type FC } from 'react';
import styles from './Button.module.css';

export interface ButtonProps {
  label: string;
  loading?: boolean;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ label, loading, disabled }) => {
  return (
    <button disabled={disabled || loading} className={styles.button}>
      {loading ? <i className="fa fa-spinner fa-spin fa-lg"></i> : <>{label}</>}
    </button>
  );
};

export default Button;
