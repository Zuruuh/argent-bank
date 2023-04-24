import { useId, type FC, type HTMLInputTypeAttribute } from 'react';
import styles from './TextField.module.css';
import formstyles from '../Form.module.css';

interface TextFieldProps {
  name: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
}

const TextField: FC<TextFieldProps> = ({
  name,
  label,
  type = 'text',
  placeholder,
}) => {
  const fieldId = useId();

  return (
    <div className={styles.input}>
      <label className={styles.inputLabel} htmlFor={fieldId}>
        {label}
      </label>
      <input
        name={name}
        className={formstyles.inputField}
        placeholder={placeholder}
        type={type}
        id={fieldId}
      />
    </div>
  );
};

export default TextField;
