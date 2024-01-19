'use client';

import { BUTTON_STYLE } from 'constants/styles';

interface ButtonProps {
  buttonText: string;
  type: 'small' | 'medium' | 'large' | 'share' | 'default';
  className?: string;
  isDisabled: boolean;
  onClickHandler: () => void;
}

const Button = ({
  type,
  buttonText,
  className,
  isDisabled,
  onClickHandler,
}: ButtonProps) => {
  const buttonStyles = BUTTON_STYLE[type](className || '');

  return (
    <button
      className={`${buttonStyles}`}
      onClick={onClickHandler}
      disabled={isDisabled}
    >
      {buttonText}
    </button>
  );
};

export default Button;
