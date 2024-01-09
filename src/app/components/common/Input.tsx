'use client';

import { INPUT_STYLE } from 'constants/styles';

interface InputProps {
  type: 'search' | 'default';
  textValue: string;
  placeholder?: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onEnterPress?: () => void;
}

const Input = ({
  type,
  textValue,
  placeholder,
  className,
  onFocus,
  onEnterPress,
  onChange,
}: InputProps) => {
  const buttonStyles = INPUT_STYLE[type](className || '');

  return (
    <input
      value={textValue}
      placeholder={placeholder}
      onFocus={onFocus}
      onKeyPress={(e) => e.key === 'Enter' && onEnterPress}
      onChange={onChange}
      className={buttonStyles}
    />
  );
};

export default Input;
