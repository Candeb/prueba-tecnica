import React from 'react';

export const BackIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="76"
      height="76"
      viewBox="0 0 76 76"
      fill="none"
    >
      <g filter="url(#filter0_d_2_789)">
        <circle
          cx="38"
          cy="34"
          r="18"
          transform="rotate(-180 38 34)"
          fill="white"
        />
      </g>
      <path
        d="M42.6912 42.0738C43.0539 42.4266 43.0902 43.082 42.8363 43.5861C42.5824 44.0399 42.1109 44.1407 41.7845 43.7878L33.2977 34.8647C32.9713 34.5118 32.8988 33.806 33.1527 33.3523C33.1889 33.2515 33.2615 33.2011 33.2977 33.1506L41.7845 24.2275C42.1109 23.8746 42.5824 23.925 42.8363 24.4292C43.0902 24.8829 43.0539 25.5383 42.6912 25.8912L35.0386 34.0077L42.6912 42.0738Z"
        fill="black"
      />
      <defs>
        <filter
          id="filter0_d_2_789"
          x="0"
          y="0"
          width="76"
          height="76"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 0 0.5 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2_789"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2_789"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
