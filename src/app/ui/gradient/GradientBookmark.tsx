interface GradientHeartProps {
  width: number;
  height: number;
}

const GradientBookmark = ({ width, height }: GradientHeartProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <path
        d="M17 0H0V24L8.5 18.2857L17 24V0Z"
        fill="url(#paint0_linear_831_1599)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_831_1599"
          x1="0"
          y1="0"
          x2="17"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E0EE" />
          <stop offset="1" stopColor="#517EF3" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GradientBookmark;
