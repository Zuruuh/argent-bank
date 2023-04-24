import { useId, type FC } from 'react';
import styles from './Checkbox.module.css';
import formStyles from '../Form.module.css';

interface CheckboxProps {
  name: string;
  label: string;
  checked?: boolean;
}

const Checkbox: FC<CheckboxProps> = ({ name, label, checked }) => {
  const fieldId = useId();

  return (
    <div className={styles.inputCheckbox}>
      <input
        checked={checked}
        type="checkbox"
        name={name}
        className={formStyles.inputField}
        id={fieldId}
      />
      <label className={styles.inputCheckboxLabel} htmlFor={fieldId}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
