import clsx from 'clsx';
import { FC, useId } from 'react';
import { UseFormRegisterReturn, useFormContext } from 'react-hook-form';
import styles from './InlineField.module.css';

export interface InlineFieldProps {
  placeholder?: string;
  formData: UseFormRegisterReturn;
}

const InlineField: FC<InlineFieldProps> = ({ placeholder, formData }) => {
  const fieldId = useId();
  const form = useFormContext();

  const errors = form.formState.errors[formData.name];
  const hasError = errors !== undefined && errors.message !== undefined;

  return (
    <div className={clsx(styles.input, { [styles.hasError]: hasError })}>
      <input
        className={styles.inputField}
        placeholder={placeholder}
        type="text"
        id={fieldId}
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

export default InlineField;
