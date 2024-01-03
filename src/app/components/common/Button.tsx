'use client';

interface ButtonProps {
  buttonText: string;
  buttonType: 'small' | 'medium' | 'large';
  className: string;
  isDisabled: boolean;
  onClickHandler: () => void;
}

const getButtonStyles = (buttonType: 'small' | 'medium' | 'large') => {
  switch (buttonType) {
    case 'small':
      return {
        button: `px-2 py-2`,
      };
    case 'medium':
      return {
        button: `px-10 py-10`,
      };
    case 'large':
      return {
        button: `px-20 py-20`,
      };
    default:
      return {
        button: 'w-full h-full',
      };
  }
};

const Button = ({
  onClickHandler,
  buttonText,
  buttonType,
  className,
  isDisabled,
}: ButtonProps) => {
  const buttonStyles = getButtonStyles(buttonType);

  return (
    <button
      type="button"
      className={`${buttonStyles.button} ${className}`}
      onClick={onClickHandler}
      disabled={isDisabled}
    >
      {buttonText}
    </button>
  );
};

export default Button;
