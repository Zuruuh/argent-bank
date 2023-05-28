import { useId, type FC, type HTMLInputTypeAttribute } from 'react';
import styles from './TextField.module.css';
import formstyles from '../Form.module.css';
import { useFormContext, type UseFormRegisterReturn } from 'react-hook-form';
import clsx from 'clsx';

interface TextFieldProps {
  label: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  autocomplete?: string;
  formData: UseFormRegisterReturn;
}

const TextField: FC<TextFieldProps> = ({
  label,
  type = 'text',
  placeholder,
  autocomplete,
  formData,
}) => {
  const fieldId = useId();
  const form = useFormContext();

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
