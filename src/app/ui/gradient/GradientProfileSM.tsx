import { CSSProperties } from 'react';

const GradientProfileSM = () => {
  return (
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="12" fill="url(#paint0_linear_1932_140)" />
        <mask
          id="mask0_1932_140"
          style={{ maskType: 'alpha' } as CSSProperties}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <circle cx="12" cy="12" r="12" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_1932_140)">
          <path
            d="M11.9978 13.8806C10.6081 13.8806 9.41837 13.3858 8.42871 12.3961C7.43905 11.4065 6.94422 10.2168 6.94422 8.82703C6.94422 7.43729 7.43905 6.24759 8.42871 5.25793C9.41837 4.26827 10.6081 3.77344 11.9978 3.77344C13.3875 3.77344 14.5772 4.26827 15.5669 5.25793C16.5566 6.24759 17.0514 7.43729 17.0514 8.82703C17.0514 10.2168 16.5566 11.4065 15.5669 12.3961C14.5772 13.3858 13.3875 13.8806 11.9978 13.8806ZM1.89062 23.9878V20.4503C1.89062 19.7344 2.07508 19.0766 2.44399 18.4769C2.81291 17.8772 3.30226 17.419 3.91206 17.1023C5.21757 16.4495 6.54414 15.9602 7.89177 15.6342C9.23939 15.3083 10.6081 15.1449 11.9978 15.144C13.3875 15.144 14.7562 15.3074 16.1039 15.6342C17.4515 15.961 18.778 16.4504 20.0836 17.1023C20.6942 17.4181 21.184 17.8763 21.5529 18.4769C21.9218 19.0774 22.1058 19.7352 22.105 20.4503V23.9878H1.89062Z"
            fill="white"
          />
        </g>
        <circle
          cx="12"
          cy="12"
          r="11.5"
          stroke="url(#paint1_linear_1932_140)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1932_140"
            x1="0"
            y1="0"
            x2="24"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00E0EE" />
            <stop offset="1" stopColor="#517EF3" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1932_140"
            x1="0"
            y1="0"
            x2="24"
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00E0EE" />
            <stop offset="1" stopColor="#517EF3" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default GradientProfileSM;
