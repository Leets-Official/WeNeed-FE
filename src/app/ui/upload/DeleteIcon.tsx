'use client';
import { useState } from 'react';

const hovered = {
  rectColor: 'url(#paint0_linear_1583_272)',
  lineColor: 'white',
};

const unHovered = {
  rectColor: '#D9D9D9',
  lineColor: 'black',
};

const DeleteIcon = () => {
  const [isHovered, setIsHovered] = useState(false);
  const color = isHovered ? hovered : unHovered;

  return (
    <div
      className="cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33"
        height="33"
        viewBox="0 0 33 33"
        fill="none"
      >
        <rect
          x="0.113281"
          y="0.154297"
          width="32"
          height="32"
          fill={color.rectColor}
        />
        <rect
          x="14.8477"
          y="14.2539"
          width="5.91992"
          height="1.33"
          transform="rotate(90 14.8477 14.2539)"
          fill={color.lineColor}
        />
        <rect
          x="18.6992"
          y="14.2539"
          width="5.91992"
          height="1.33"
          transform="rotate(90 18.6992 14.2539)"
          fill={color.lineColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.708 9.3173V10.4785H18.5148L18.5148 9.3173H13.708ZM12.378 7.9873V10.4785H8.61328V11.8085H9.84187L9.84187 22.9912H9.83594V24.3212H22.3867V23.4893V22.9912L22.3867 11.8085H23.6094V10.4785H19.8448L19.8448 9.3173V7.9873H18.5148H13.708H12.419H12.378ZM21.0567 11.8085H11.1719L11.1719 22.9912H21.0567L21.0567 11.8085Z"
          fill={color.lineColor}
        />
        {isHovered && (
          <defs>
            <linearGradient
              id="paint0_linear_1583_272"
              x1="0.113281"
              y1="0.154297"
              x2="32.1133"
              y2="0.154297"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00E0EE" />
              <stop offset="1" stopColor="#517EF3" />
            </linearGradient>
          </defs>
        )}
      </svg>
    </div>
  );
};
export default DeleteIcon;
