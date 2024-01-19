'use client';

interface IconsProps {
  name: IconPathTypes;
  className?: string;
  onClick?: () => void;
}

const Icons = ({ name, className, onClick }: IconsProps) => {
  const { width, height, fill, path, options } = name;
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      onClick={onClick}
      fill={fill}
      className={className}
    >
      <path d={path} {...options} />
    </svg>
  );
};

export default Icons;
