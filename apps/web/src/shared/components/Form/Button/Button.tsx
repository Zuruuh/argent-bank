import { type FC } from 'react';
import styles from './Button.module.css';
import { BUTTON_SIZES, type ButtonProps } from './Button.types';
import clsx from 'clsx';

const Button: FC<ButtonProps> = ({
  label,
  loading,
  disabled,
  size = BUTTON_SIZES.LARGE,
  onClick = () => {
    /*noop*/
  },
}) => {
  return (
    <button
      disabled={disabled || loading}
      className={clsx(styles.button, styles[size])}
      onClick={onClick}
    >
      {loading ? (
        <i
          className={clsx('fa fa-spinner fa-spin', {
            ['fa-lg']: size === BUTTON_SIZES.LARGE,
          })}
        ></i>
      ) : (
        <>{label}</>
      )}
    </button>
  );
};

export default Button;
