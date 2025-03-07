import React from "react";
import x2579156067552 from "./2579156067552.png";
import { CallPanel } from "./CallPanel";
import { FullScreen } from "./FullScreen";
import { PlayBtn } from "./PlayBtn";
import { PropertyVolumeWrapper } from "./PropertyVolumeWrapper";
import { Volume } from "./Volume";
import line42 from "./line-4-2.svg";
import line45 from "./line-4-5.svg";
import line46 from "./line-4-6.svg";
import line47 from "./line-4-7.svg";
import line48 from "./line-4-8.svg";
import line4 from "./line-4.svg";
import line52 from "./line-5-2.svg";
import line5 from "./line-5.svg";
import rectangle517 from "./rectangle-517.svg";
import rectangle518 from "./rectangle-518.svg";

export const Screen = (): JSX.Element => {
  return (
    <div className="bg-black flex flex-row justify-center w-full">
      <div className="bg-black w-[375px] h-[880px]">
        <div className="relative h-[667px] bg-[url(/rectangle-504.png)] bg-cover bg-[50%_50%]">
          <div className="absolute w-[375px] h-[211px] top-[139px] left-0 bg-[url(/rectangle-520.png)] bg-cover bg-[50%_50%]">
            <div className="absolute w-7 h-[177px] top-[17px] left-[313px]">
              <div className="relative h-[177px]">
                <img
                  className="h-[177px] top-0 object-cover absolute w-px left-3.5"
                  alt="Line"
                  src={line5}
                />

                <div className="absolute w-7 h-[98px] top-[79px] left-0">
                  <div className="h-[98px]">
                    <div className="relative w-7 h-[98px]">
                      <img
                        className="h-[98px] top-px absolute w-px left-3.5"
                        alt="Line"
                        src={line45}
                      />

                      <div className="absolute w-px h-7 top-[-13px] left-[13px] rotate-[90.00deg]">
                        <div className="relative h-7">
                          <img
                            className="w-7 h-px top-3.5 -left-3.5 rotate-[-90.00deg] absolute object-cover"
                            alt="Line"
                            src={line46}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute w-7 h-[177px] top-[17px] left-[34px]">
              <div className="relative h-[177px]">
                <img
                  className="h-[177px] top-0 object-cover absolute w-px left-3.5"
                  alt="Line"
                  src={line52}
                />

                <div className="absolute w-7 h-[98px] top-[79px] left-0">
                  <div className="h-[98px]">
                    <div className="relative w-7 h-[98px]">
                      <img
                        className="h-[98px] top-px absolute w-px left-3.5"
                        alt="Line"
                        src={line47}
                      />

                      <div className="absolute w-px h-7 top-[-13px] left-[13px] rotate-[90.00deg]">
                        <div className="relative h-7">
                          <img
                            className="w-7 h-px top-3.5 -left-3.5 rotate-[-90.00deg] absolute object-cover"
                            alt="Line"
                            src={line48}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <FullScreen
              className="!absolute !w-[47px] !h-[47px] !top-[82px] !left-[164px]"
              opacity="0.5"
            />
          </div>

          <div className="absolute w-[375px] h-7 top-[538px] left-0">
            <div className="relative h-7">
              <img
                className="w-[375px] h-px top-3.5 left-0 absolute object-cover"
                alt="Line"
                src={line4}
              />

              <div className="absolute w-[279px] h-3 top-2 left-12">
                <img
                  className="w-px h-3 top-0 left-[279px] absolute object-cover"
                  alt="Line"
                  src={line42}
                />

                <div className="absolute w-px h-3 top-0 left-0 bg-[url(/line-4-3.svg)] bg-cover bg-[50%_50%]" />
              </div>

              <div className="absolute w-px h-7 top-0 left-[187px] bg-[url(/line-4-4.svg)] bg-cover bg-[50%_50%]" />
            </div>
          </div>

          <div className="absolute w-[375px] h-[58px] top-[609px] left-0 bg-[#ffffff0d] backdrop-blur-sm backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4px)_brightness(100%)]">
            <div className="absolute w-[311px] h-[22px] top-[13px] left-[37px]">
              <div className="absolute top-0 left-[141px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-lg text-center tracking-[0] leading-[normal]">
                1x
              </div>

              <div className="left-[280px] absolute top-[5px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#ffffff80] text-[11px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                1,5x
              </div>

              <div className="left-[202px] absolute top-[5px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#ffffff80] text-[11px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                1,25x
              </div>

              <div className="left-0 absolute top-[5px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#ffffff80] text-[11px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                0,5x
              </div>

              <div className="left-[71px] absolute top-[5px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#ffffff80] text-[11px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                0,75x
              </div>
            </div>

            <div className="absolute w-[210px] h-0.5 top-6 left-[83px]">
              <div className="left-0 rotate-[90.00deg] absolute w-0.5 h-0.5 top-0 bg-[#d9d9d980] rounded-[1px]" />

              <div className="left-[73px] rotate-[90.00deg] absolute w-0.5 h-0.5 top-0 bg-[#d9d9d980] rounded-[1px]" />

              <div className="left-[134px] rotate-[90.00deg] absolute w-0.5 h-0.5 top-0 bg-[#d9d9d980] rounded-[1px]" />

              <div className="left-52 rotate-[90.00deg] absolute w-0.5 h-0.5 top-0 bg-[#d9d9d980] rounded-[1px]" />
            </div>
          </div>

          <div className="absolute w-52 h-20 top-[430px] left-[83px]">
            <div className="absolute w-[141px] h-20 top-0 left-[33px]">
              <PlayBtn className="!absolute !w-20 !h-20 !top-0 !left-[31px]" />
              <div className="absolute w-[141px] h-[3px] top-[38px] left-0">
                <div className="left-0 rotate-[135deg] absolute w-0.5 h-0.5 top-0 bg-[#d9d9d980] rounded-[1px]" />

                <div className="left-[138px] rotate-[135deg] absolute w-0.5 h-0.5 top-0 bg-[#d9d9d980] rounded-[1px]" />
              </div>
            </div>

            <img
              className="absolute w-[18px] h-[18px] top-[30px] left-[190px]"
              alt="Rectangle"
              src={rectangle517}
            />

            <img
              className="absolute w-[18px] h-[18px] top-[30px] left-0"
              alt="Rectangle"
              src={rectangle518}
            />
          </div>

          <img
            className="absolute w-[35px] h-[35px] top-7 left-[310px]"
            alt="Element"
            src={x2579156067552}
          />

          <p className="absolute w-[209px] top-7 left-[47px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[13px] tracking-[0] leading-[normal]">
            Урок 1. Происхождение неизвестных видов в агресивн...
          </p>

          <PropertyVolumeWrapper
            className="!absolute !left-10 !top-[379px]"
            property1="brightness"
            rectangleClassName="!border-[unset] !border-[unset] !bg-[#d9d9d9]"
          />
          <Volume className="!absolute !w-3.5 !h-[13px] !top-[381px] !left-[321px]" />
          <CallPanel className="!absolute !w-7 !h-[26px] !top-[375px] !left-[173px]" />
        </div>
      </div>
    </div>
  );
};
