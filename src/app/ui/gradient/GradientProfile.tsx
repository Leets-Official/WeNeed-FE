import { CSSProperties } from 'react';

const GradientProfile = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="77"
      height="76"
      viewBox="0 0 77 76"
      fill="none"
    >
      <circle cx="38.0391" cy="38" r="38" fill="url(#paint0_linear_1863_155)" />
      <mask
        id="mask0_1863_155"
        style={{ maskType: 'alpha' } as CSSProperties}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="77"
        height="76"
      >
        <circle cx="38.0391" cy="38" r="38" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1863_155)">
        <path
          d="M38.0373 43.9592C33.6365 43.9592 29.8691 42.3922 26.7352 39.2583C23.6013 36.1244 22.0343 32.357 22.0343 27.9562C22.0343 23.5553 23.6013 19.7879 26.7352 16.654C29.8691 13.5201 33.6365 11.9531 38.0373 11.9531C42.4382 11.9531 46.2056 13.5201 49.3395 16.654C52.4734 19.7879 54.0404 23.5553 54.0404 27.9562C54.0404 32.357 52.4734 36.1244 49.3395 39.2583C46.2056 42.3922 42.4382 43.9592 38.0373 43.9592ZM6.03125 75.9653V64.7632C6.03125 62.4961 6.61536 60.413 7.78358 58.514C8.95181 56.615 10.5014 55.164 12.4325 54.1612C16.5666 52.0941 20.7674 50.5445 25.0349 49.5123C29.3023 48.4801 33.6365 47.9626 38.0373 47.96C42.4382 47.96 46.7723 48.4774 51.0398 49.5123C55.3073 50.5471 59.5081 52.0968 63.6422 54.1612C65.5759 55.1613 67.1269 56.6123 68.2951 58.514C69.4633 60.4157 70.0461 62.4987 70.0434 64.7632V75.9653H6.03125Z"
          fill="white"
        />
      </g>
      <circle
        cx="38.0391"
        cy="38"
        r="36.5"
        stroke="url(#paint1_linear_1863_155)"
        strokeWidth="3"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1863_155"
          x1="0.0390625"
          y1="0"
          x2="76.0391"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00E0EE" />
          <stop offset="1" stopColor="#517EF3" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1863_155"
          x1="0.0390625"
          y1="0"
          x2="76.0391"
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

export default GradientProfile;
