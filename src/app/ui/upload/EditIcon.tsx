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

const EditIcon = () => {
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
          x="0.613281"
          y="0.154297"
          width="32"
          height="32"
          fill={color.rectColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.954 8.82326L21.0136 7.88281L21.0126 7.88376L21.0117 7.88281L20.0712 8.82326L20.0722 8.82421L8.3362 20.5602L8.35088 20.5749H8.33594L8.33594 24.4255H9.66594V24.4255H12.1874V24.4047L12.2083 24.4255L24.8857 11.7481L23.9452 10.8077L23.9409 10.812L21.9531 8.82421L21.954 8.82326ZM11.6574 23.0955L20.0431 14.7098L18.0553 12.722L9.66594 21.1114L9.66594 23.0955H11.6574ZM20.9835 13.7694L23.0004 11.7525L21.0126 9.76466L18.9957 11.7816L20.9835 13.7694Z"
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
export default EditIcon;
