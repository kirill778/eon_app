import React from "react";
import image from "./image.svg";
import vector from "./vector.svg";

export const Swap = (): React.JSX.Element => {
  return (
    <div className="w-[169px] h-6">
      <div className=" w-[169px] h-6">
        <div className="relative w-[171px] h-6">
          <div className="absolute top-0 left-[47px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Лекции
          </div>

          <img
            className="left-0 absolute w-2 h-3 top-[7px]"
            alt="Vector"
            src={"/vector_swap.svg"}
          />

          <img
            className="left-[161px] absolute w-2 h-3 top-[7px] rotate-180"
            alt="Vector"
            src={"/vector_swap.svg"}
          />
        </div>
      </div>
    </div>
  );
};
