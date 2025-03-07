import React from "react";
import f1 from "./f-1.png";

export const Image = (): React.ReactNode => {
  return (
    <div className="w-[279px] h-[211px]">
      <img
        className=" w-[279px] h-[211px] object-cover"
        alt="F"
        src="IconComponentNode.png"
      />

      <div className="flex justify-center gap-[25px] mt-[8%] ml-[0%]">
        <div className="w-[3px] h-[3px] rounded-full bg-white opacity-30" />
        <div className="w-[3px] h-[3px] rounded-full bg-white opacity-30" />
        <div className="w-[3px] h-[3px] rounded-full bg-white opacity-30" />
        <div className="w-[3px] h-[3px] rounded-full bg-white opacity-30" />
        <div className="w-[3px] h-[3px] rounded-full bg-white opacity-30" />
      </div>
    </div>
    
  );
};