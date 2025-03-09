import React, { useState } from "react";

interface DropDownListProps {
  placeholder?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export const DropDownList = ({ 
  placeholder = "Выберите способ оплаты", 
  defaultValue = "Выберите способ оплаты",
  onChange 
}: DropDownListProps): React.JSX.Element => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="relative">
        <svg width="321" height="45" viewBox="0 0 321 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="0.5" width="319" height="44" rx="22" stroke="url(#paint0_linear_125_2024)"/>
          <defs>
            <linearGradient id="paint0_linear_125_2024" x1="114.786" y1="18.4821" x2="120.706" y2="52.7476" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.15"/>
              <stop offset="0.51" stopColor="white" stopOpacity="0.8"/>
              <stop offset="1" stopColor="white" stopOpacity="0.25"/>
            </linearGradient>
          </defs>
        </svg>

        <div 
          className="absolute inset-0 flex items-center justify-between px-8 cursor-pointer"
          onClick={toggleDropdown}
        >
          <span className="ml-[14%] text-white text-[13px] font-normal">
            {selectedOption || placeholder}
          </span>
          <div className="pointer-events-none flex items-center text-white mr-[22%]">
            <svg className="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-[#14141F] border border-[rgba(255,255,255,0.2)] rounded-md shadow-lg">
          <ul className="py-1">
            <li 
              className="px-4 py-2 text-white text-[13px] hover:bg-[rgba(255,255,255,0.1)] cursor-pointer"
              onClick={() => handleOptionChange("Сбербанк")}
            >
              Сбербанк
            </li>
            <li 
              className="px-4 py-2 text-white text-[13px] hover:bg-[rgba(255,255,255,0.1)] cursor-pointer"
              onClick={() => handleOptionChange("Криптовалюта")}
            >
              Криптовалюта
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
