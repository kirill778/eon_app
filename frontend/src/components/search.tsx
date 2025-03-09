import React, { useState } from "react";

export const Search = (): React.JSX.Element => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="relative">
      <svg width="320" height="45" viewBox="0 0 320 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="319" height="44" rx="22" stroke="url(#paint0_linear_116_1152)"/>
        <defs>
          <linearGradient id="paint0_linear_116_1152" x1="114.286" y1="18.4821" x2="120.206" y2="52.7476" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.15"/>
            <stop offset="0.51" stopColor="white" stopOpacity="0.8"/>
            <stop offset="1" stopColor="white" stopOpacity="0.25"/>
          </linearGradient>
        </defs>
      </svg>

      <input
        type="text"
        value={searchText}
        onChange={handleSearchChange}
        placeholder="Поиск"
        className="absolute top-1/2 left-[-3%] transform -translate-y-1/2 w-[80%] h-[60%] px-8 text-[rgba(255,255,255,0.5)] text-[15px] font-normal leading-normal bg-transparent focus:outline-none"
      />
      
    </div>
  );
};
