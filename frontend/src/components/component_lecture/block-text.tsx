import React, { useState } from "react";
import del from "/public/del.svg";
import group213 from "/public/group-1416.svg";
import rectangle471 from "/public/rectangle-471.svg";
import vector358 from "/public/vector-358.svg";
import x00201 from "/public/group-863.svg";

export const BlockText = (): JSX.Element => {
  const [text, setText] = useState("");

  return (
    <div className="flex flex-col w-[312px] items-center gap-4 relative">
      <div className="relative w-[314px] h-[242px] mr-[-2.00px]">
        <div className="relative w-[312px] h-[242px]">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Введите текст"
            className="absolute w-[312px] h-[211px] top-0 left-0 bg-transparent resize-none p-4 text-[13px] text-white placeholder-[#ffffff80] [font-family:'Roboto-Regular',Helvetica] outline-none z-10 text-center placeholder:text-center"
            style={{
              backgroundImage: `url(${rectangle471.src})`,
              backgroundSize: '100% 100%',
            }}
          />

          <div className="absolute w-[175px] h-[60px] top-[182px] left-[68px] z-20">
            <div className="absolute w-[30px] h-[30px] top-3.5 left-0">
              <button 
                onClick={() => setText("")}
                className="relative w-[30px] h-[30px] bg-[#ffffff4c] rounded-[15px] backdrop-blur backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8px)_brightness(100%)]"
              >
                <img
                  className="absolute w-[30px] h-[30px] top-0"
                  alt="X"
                  src={x00201.src}
                />
              </button>
            </div>

            <div className="absolute w-[29px] h-[29px] top-[13px] left-[146px]">
              <div className="h-[29px]">
                <div className="w-[29px] h-[29px]">
                  <div className="h-[29px]">
                    <div className="relative w-[29px] h-[29px] bg-[#ffffff4c] rounded-[14.5px] backdrop-blur backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8px)_brightness(100%)]">
                      <img
                        className="absolute w-[29px] h-[29px]"
                        alt="Del"
                        src={del.src}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute w-[60px] h-[60px] top-0 left-[57px]">
              <div className="relative ">
                <img
                  className="absolute  top-[0vh]"
                  alt="Group"
                  src={group213.src}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-52 h-[49px]">
        <img
          className="absolute w-[110px] h-px top-[49px] left-[49px]"
          alt="Vector"
          src={vector358}
        />

        <div className="absolute w-[210px] h-[26px] top-0 left-0">
          <div className="absolute w-[25px] h-[25px] top-px left-0 bg-[url(/ellipse-27.svg)] bg-[100%_100%]">
            <div className="relative w-[11px] h-[11px] top-[7px] left-[7px]">
              <div className="h-[11px]">
                <div className="w-[11px] h-[11px] bg-[url(/image.svg)] bg-[100%_100%]">
                  <div className="relative w-1.5 h-1.5 top-0.5 left-0.5 rounded-[3.18px] blur-[1px] [background:radial-gradient(50%_50%_at_50%_50%,rgb(255,255,255)_25%,rgb(178.81,154.47,255)_73%)]" />
                </div>
              </div>
            </div>
          </div>

          <p className="w-[171px] top-0 left-[37px] text-[11px] absolute [font-family:'Roboto-Regular',Helvetica] font-normal text-[#ffffff80] tracking-[0] leading-[normal]">
            Сделать модуль доступным для ознакомительной версии
          </p>
        </div>
      </div>
    </div>
  );
};
