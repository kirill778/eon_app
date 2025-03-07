import React from "react";

interface Props {
  className: any;
  xmlns: string;
}

export const PlayBtn = ({ className, xmlns }: Props): React.ReactElement => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="60"
      viewBox="0 0 60 60"
      width="60"
      xmlns={`${xmlns}`}
    >
      <foreignObject height="68" width="68" x="-4" y="-4">
        <div />
      </foreignObject>

      <circle
        cx="30"
        cy="30"
        data-figma-bg-blur-radius="4"
        fill="#D9D9D9"
        fillOpacity="0.05"
        r="29.5"
        stroke="url(#paint0_linear_47_549)"
      />

      <g filter="url(#filter1_i_47_549)">
        <path
          d="M30 10C35.5285 10 40.5149 12.2222 44.1463 15.8537C47.7778 19.4851 50 24.4715 50 30C50 35.5285 47.7778 40.5149 44.1463 44.1463C40.5149 47.7778 35.5285 50 30 50C24.4715 50 19.4851 47.7778 15.8537 44.1463C12.2222 40.5149 10 35.5285 10 30C10 24.4715 12.2222 19.4851 15.8537 15.8537C19.4851 12.2222 24.4715 10 30 10Z"
          fill="#FFFDFD"
          fillOpacity="0.3"
        />
      </g>

      <path
        d="M24.363 39.4306V20.0268C24.363 19.8642 24.4172 19.6474 24.5256 19.4848C24.7966 19.0512 25.3928 18.9428 25.8265 19.2138L40.3522 28.8073C40.4606 28.8615 40.569 28.9699 40.6232 29.0783C40.8942 29.5119 40.7858 30.1081 40.3522 30.3791L25.8807 40.1352C25.7181 40.2436 25.5012 40.352 25.2844 40.352C24.7424 40.352 24.3088 39.9184 24.3088 39.3764L24.363 39.4306Z"
        fill="white"
      />

      <defs>
        <clipPath id="bgblur_0_47_549_clip_path" transform="translate(4 4)">
          <circle cx="30" cy="30" r="29.5" />
        </clipPath>

        <filter
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="42"
          id="filter1_i_47_549"
          width="40"
          x="10"
          y="10"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />

          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            mode="normal"
            result="shape"
          />

          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />

          <feOffset dy="2" />

          <feGaussianBlur stdDeviation="1" />

          <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />

          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
          />

          <feBlend
            in2="shape"
            mode="normal"
            result="effect1_innerShadow_47_549"
          />
        </filter>

        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_47_549"
          x1="21.4286"
          x2="44.4643"
          y1="24.6429"
          y2="43.3929"
        >
          <stop stopColor="white" stopOpacity="0.08" />

          <stop offset="0.51" stopColor="white" stopOpacity="0.8" />

          <stop offset="1" stopColor="white" stopOpacity="0.15" />
        </linearGradient>
      </defs>
    </svg>
  );
};
