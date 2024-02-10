'use client';

import { BUTTON_STYLE } from 'constants/styles';

interface ButtonProps {
  buttonText: string;
  type: keyof typeof BUTTON_STYLE;
  className?: string;
  isDisabled: boolean;
  onClickHandler: () => void;
  mouseEnterHandler?: () => void;
  mouseLeaveHandler?: () => void;
}

const Button = ({
  type,
  buttonText,
  className,
  isDisabled,
  onClickHandler,
  mouseEnterHandler,
  mouseLeaveHandler,
}: ButtonProps) => {
  const buttonStyles = BUTTON_STYLE[type](className || '');

  return (
    <button
      className={`${buttonStyles}`}
      onClick={onClickHandler}
      disabled={isDisabled}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {buttonText}
    </button>
  );
};

export default Button;
