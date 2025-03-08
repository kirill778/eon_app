import React from "react";
import { useRouter } from "next/navigation";

interface Btn_testProps {
  onClick?: () => void;
}

export const Btn_test: React.FC<Btn_testProps> = ({ onClick }) => {
  const router = useRouter();

  const handleClick = () => {
    onClick ? onClick() : router.push('/test');
  };

  return (
    <button 
      onClick={handleClick}
      className="flex w-[139px] items-center justify-center gap-2.5 px-7 py-[13px] relative bg-[#0a724a] hover:bg-[#0b8557] rounded-[30px] shadow-[inset_0px_1px_1px_#23b980]"
    >
      <svg width="34" height="16" viewBox="0 0 34 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 3.17857L5.72131 8L13.0656 0.5M22.5082 0.5H33M5.72131 15.5H33M14.1148 8H33" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      <span className="font-semibold text-white text-[15px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
        Тест
      </span>
    </button>
  );
};
