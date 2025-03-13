import React from "react";

interface CourseNamePayProps {
  value: string;
  unit: string;
  onValueChange: (value: string) => void;
  onUnitChange: (unit: any) => void;
}

export const CourseNamePay = ({ 
  value,
  unit,
  onValueChange,
  onUnitChange
}: CourseNamePayProps): React.JSX.Element => {
  
  const handleCourseNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(event.target.value);
  };

  const handleUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onUnitChange(event.target.value);
  };

  return (
    <div className="relative inline-block ml-[6%]">
      <div className="relative">
        <svg width="120" height="44" viewBox="0 0 120 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="119" height="43" rx="21.5" stroke="url(#paint0_linear_125_1813)"/>
          <defs>
            <linearGradient id="paint0_linear_125_1813" x1="29.2857" y1="18.0714" x2="45.1413" y2="42.123" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.15"/>
              <stop offset="0.51" stopColor="white" stopOpacity="0.8"/>
              <stop offset="1" stopColor="white" stopOpacity="0.25"/>
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center space-x-1">
            <input
              type="text"
              value={value}
              onChange={handleCourseNameChange}
              className="w-[40px] bg-transparent text-white text-[15px] font-medium text-right focus:outline-none"
            />
            
            <div className="relative">
              <select 
                className="appearance-none bg-transparent border-none text-white/50 text-[13px] focus:outline-none cursor-pointer pr-5"
                onChange={handleUnitChange}
                value={unit}
              >
                {unit === "мин" || unit === "час" ? (
                  <>
                    <option value="мин">мин</option>
                    <option value="час">час</option>
                  </>
                ) : unit === "руб" || unit === "$" ? (
                  <>
                    <option value="руб">руб</option>
                    <option value="$">$</option>
                  </>
                ) : (
                  <>
                    <option value="рус">рус</option>
                    <option value="англ">англ</option>
                  </>
                )}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-white">
                <svg className="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
