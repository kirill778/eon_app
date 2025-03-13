import React from "react";
import group916 from "/public/Group-916.svg";
import group917 from "/public/Group-917.svg";
import group918 from "/public/Group-918.svg";
import group919 from "/public/Group-919.svg";
import group951 from "/public/Group-951.svg";
import btn4 from "/public/btn-4.svg";
import Group1489 from "/public/Group-1489.svg";

interface BlockProps {
  onAddTextBlock: () => void;
}

export const Block = ({ onAddTextBlock }: BlockProps): React.JSX.Element => {
  return (
    <div>
      <div className="flex flex-col h-[205px] items-start gap-2.5 px-12 py-7 relative bg-white [background:linear-gradient(180deg,rgba(255,255,255,0.0)_0%,rgba(255,255,255,0.07)_100%)]">
        <div className="relative w-[263.79px] h-[148px]">
          <div className="absolute w-[97px] h-[13px] top-0 left-[84px]">
            <div className="absolute h-[13px] top-0 left-0 [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[11px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
              Добавить модуль
            </div>
          </div>

          <div className="absolute w-[264px] h-[107px] top-[41px] left-0">
            <div className="absolute w-[264px] h-[45px] top-[62px] left-0">
              <img
                className="absolute w-[45px] h-[45px] top-0 left-[73px]"
                alt="Group"
                src={group916.src}
              />

              <img
                className="absolute w-[45px] h-[45px] top-0 left-[146px]"
                alt="Group"
                src={group918.src}
              />

              <img
                className="absolute w-[45px] h-[45px] top-0 left-[219px]"
                alt="Group"
                src={group919.src}
              />

              <img
                className="absolute w-[45px] h-[45px] top-0 left-0"
                alt="Group"
                src={group917.src}
              />
            </div>

            <div 
              className="absolute w-[132px] h-11 top-0 left-[65px] cursor-pointer"
              onClick={onAddTextBlock}
            >
              <img
                className="absolute w-[132px] h-[44px]"
                alt="Group"
                src={group951.src}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#14141F] p-4 mt-[0vh]">
        <div className="w-[196px]">
          <img
            className="mt-[2vh] ml-[36.5%]"
            alt="Group" 
            src={btn4.src}
          />
        </div>

        <div className="w-[197px]">
          <img
            className="mt-[3.5vh] ml-[36.5%]"
            alt="Group"
            src={Group1489.src}
          />
        </div>
      </div>
    </div>
  );
};
