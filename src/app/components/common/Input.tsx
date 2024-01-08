'use client';

interface InputProps {
  type: string;
  textValue: string;
  placeholder: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onEnterPress?: () => void;
}

const getInputType = (type: string) => {
  switch (type) {
    case 'info':
      return {
        input: 'px-5 py-2',
      };
    default:
      return {
        input: 'w-full h-full',
      };
  }
};

const Input = ({
  type,
  textValue,
  placeholder,
  onFocus,
  onEnterPress,
  onChange,
  className,
}: InputProps) => {
  return (
    <input
      value={textValue}
      placeholder={placeholder}
      onFocus={onFocus}
      onKeyPress={(e) => e.key === 'Enter' && onEnterPress}
      onChange={onChange}
      className={`${className} ${getInputType(type).input}`}
    />
  );
};

export default Input;
