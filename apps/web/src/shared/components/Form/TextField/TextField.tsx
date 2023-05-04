import { useId, type FC, type HTMLInputTypeAttribute, useEffect } from 'react';
import styles from './TextField.module.css';
import formstyles from '../Form.module.css';
import {
  type UseFormReturn,
  type UseFormRegisterReturn,
} from 'react-hook-form';
import { clsx } from 'clsx';

interface TextFieldProps {
  label: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  autocomplete?: string;
  // We can't use generics here and nothing I've tried works
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  form: UseFormReturn<any>;
  formData: UseFormRegisterReturn;
}

const TextField: FC<TextFieldProps> = ({
  label,
  type = 'text',
  placeholder,
  autocomplete,
  form,
  formData,
}) => {
  const fieldId = useId();

  const errors = form.formState.errors[formData.name];
  const hasError = errors !== undefined && errors.message !== undefined;

  return (
    <div className={clsx(styles.input, { [styles.hasError]: hasError })}>
      <label className={styles.inputLabel} htmlFor={fieldId}>
        {label}
      </label>
      <input
        className={formstyles.inputField}
        placeholder={placeholder}
        type={type}
        id={fieldId}
        autoComplete={autocomplete}
        {...formData}
      />
      {hasError ? (
        <span className={styles.errorMessage}>
          {errors.message?.toString()}
        </span>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TextField;
