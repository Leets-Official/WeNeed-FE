'use client';

import { INPUT_STYLE } from 'constants/styles';

interface InputProps {
  type: 'search' | 'upload' | 'comment' | 'default' | 'upload_recruiter';
  textValue: string;
  name?: string;
  placeholder?: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onEnterPress?: () => void;
}

const Input = ({
  type,
  name,
  textValue,
  placeholder,
  className,
  onFocus,
  onBlur,
  onEnterPress,
  onChange,
}: InputProps) => {
  const buttonStyles = INPUT_STYLE[type](className || '');

  return (
    <input
      value={textValue}
      placeholder={placeholder}
      name={name}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyPress={(e) => e.key === 'Enter' && onEnterPress && onEnterPress()}
      onChange={onChange}
      className={buttonStyles}
    />
  );
};

export default Input;
