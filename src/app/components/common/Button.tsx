'use client';

import { BUTTON_STYLE } from 'constants/styles';

interface ButtonProps {
  buttonText: string;
  type: keyof typeof BUTTON_STYLE;
  className?: string;
  isDisabled: boolean;
  onClickHandler: () => void;
  children?: React.ReactNode;
}

const Button = ({
  type,
  buttonText,
  className,
  isDisabled,
  onClickHandler,
  children,
}: ButtonProps) => {
  const buttonStyles = BUTTON_STYLE[type](className || '');

  return (
    <button
      className={`${buttonStyles}`}
      onClick={onClickHandler}
      disabled={isDisabled}
    >
      {children}
      {buttonText}
    </button>
  );
};

export default Button;
