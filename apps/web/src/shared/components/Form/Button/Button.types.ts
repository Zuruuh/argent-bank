import { MouseEventHandler } from 'react';

const BUTTON_SIZES = {
  SMALL: 'small',
  LARGE: 'large',
} as const;

Object.freeze(BUTTON_SIZES);

export { BUTTON_SIZES };

export type ButtonSize = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];

export interface ButtonProps {
  label: string;
  loading?: boolean;
  disabled?: boolean;
  size?: ButtonSize;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
