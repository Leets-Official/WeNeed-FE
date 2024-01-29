import { IconsSVGTypes } from '_types/icon';

interface IconsSVGProps {
  svgInfo: IconsSVGTypes;
}

export const IconsSVG = ({ svgInfo }: IconsSVGProps) => {
  const { size, rsize, rfill, path, fill } = svgInfo;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
    >
      <rect width={rsize} height={rsize} fill={rfill} />
      <path fillRule="evenodd" clipRule="evenodd" d={path} fill={fill} />
    </svg>
  );
};
