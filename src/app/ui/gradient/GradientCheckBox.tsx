interface GradientCheckBoxProps {
  width: number;
  height: number;
}

const GradientCheckBox = ({ width, height }: GradientCheckBoxProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width - 1} ${height - 1}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.691406"
        y="0.926758"
        width="16"
        height="16"
        rx="5"
        fill="url(#paint0_linear_108_1864)"
      />
      <path
        d="M7.06172 12.9356L3.26172 9.13561L4.21172 8.18561L7.06172 11.0356L13.1784 4.91895L14.1284 5.86895L7.06172 12.9356Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_108_1864"
          x1="0.691406"
          y1="0.926758"
          x2="16.6914"
          y2="0.926758"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E0EE" />
          <stop offset="1" stopColor="#517EF3" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GradientCheckBox;
