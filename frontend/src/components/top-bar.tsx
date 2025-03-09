import React, { useState, useEffect } from "react";

export const TopBar = (): React.JSX.Element => {
  const [position, setPosition] = useState(0); // начальная позиция фиолетового прямоугольника
  const [activeTab, setActiveTab] = useState("courses"); // текущая активная вкладка

  const handleTabChange = (tab: "courses" | "services") => {
    setActiveTab(tab);
    setPosition(tab === "courses" ? 0 : 208); // 108 - примерная позиция для "Мои услуги"
  };

  return (
    <div className="">
      <svg width="320" height="45" viewBox="0 0 320 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_i_116_1155)">
          <rect width="320" height="45" rx="22.5" fill="white" fillOpacity="0.3"/>
        </g>
        <mask id="mask0_116_1155" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="320" height="45">
          <path d="M0 22.5C0 10.0736 10.0736 0 22.5 0H297.5C309.926 0 320 10.0736 320 22.5V22.5C320 34.9264 309.926 45 297.5 45H22.5C10.0736 45 0 34.9264 0 22.5V22.5Z" fill="#594790"/>
        </mask>
        <g mask="url(#mask0_116_1155)">
          <g filter="url(#filter1_i_116_1155)" style={{
            transform: `translateX(${position}px)`,
            transition: 'transform 0.3s ease-in-out'
          }}>
            <rect x="-52" width="212" height="44.9196" fill="#594790"/>
          </g>
        </g>

        {/* Кнопки для переключения */}
        <g onClick={() => handleTabChange("courses")} style={{ cursor: 'pointer' }}>
          <text
            x="40"
            y="26"
            fill="white"
            fontWeight={activeTab === "courses" ? "400" : "normal"}
          >
            Мои курсы
          </text>
        </g>

        <g onClick={() => handleTabChange("services")} style={{ cursor: 'pointer' }}>
          <text
            x="194"
            y="26"
            fill={activeTab === "services" ? "white" : "rgba(255, 255, 255, 0.5)"}
            fontWeight={activeTab === "services" ? "400" : "normal"}
          >
            Мои услуги
          </text>
        </g>

        <rect x="0.5" y="0.5" width="319" height="44" rx="22" stroke="url(#paint0_linear_116_1155)"/>
        <defs>
          <filter id="filter0_i_116_1155" x="0" y="0" width="320" height="50" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="5"/>
            <feGaussianBlur stdDeviation="10"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_116_1155"/>
          </filter>
          <filter id="filter1_i_116_1155" x="-52" y="0" width="212" height="45.9197" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="1"/>
            <feGaussianBlur stdDeviation="0.5"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.498039 0 0 0 0 0.443137 0 0 0 0 0.666667 0 0 0 1 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_116_1155"/>
          </filter>
          <linearGradient id="paint0_linear_116_1155" x1="114.286" y1="18.4821" x2="120.206" y2="52.7476" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.08"/>
            <stop offset="0.51" stopColor="white" stopOpacity="0.8"/>
            <stop offset="1" stopColor="white" stopOpacity="0.15"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};