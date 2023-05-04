import { type FC } from 'react';
import styles from './Button.module.css';

export interface ButtonProps {
  label: string;
  loading?: boolean;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ label, loading: _, disabled }) => {
  return (
    <button disabled={disabled} className={styles.button}>
      {label}
    </button>
  );
};

export default Button;
