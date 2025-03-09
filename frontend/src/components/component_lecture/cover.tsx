import PropTypes from "prop-types";
import React from "react";
import circle from "./circle.svg";
import courseIco from "./course-ico.png";
import group459 from "./group-459.png";
import group1191 from "./group-1191.png";

interface Props {
  property1: "clear" | "lec" | "fill" | "serv" | "crs";
  className: any;
  lectureNotificationClassName: any;
  lectureNotification: string;
}

export const Cover = ({
  property1,
  className,
  lectureNotificationClassName,
  lectureNotification = "lecture_notification_ico.svg",
}: Props): React.JSX.Element => {
  return (
    <div
      className={`h-[211px] ${property1 === "serv" ? "w-[211px]" : "w-[375px]"} ${property1 === "fill" ? "bg-cover" : ""} ${property1 === "fill" ? "bg-[url(/cover-creat-test.png)]" : ""} ${property1 === "fill" ? "bg-[50%_50%]" : ""} ${className}`}
    >
      {["clear", "crs", "lec", "serv"].includes(property1) && (
        <div
          className={`h-[211px] ${property1 === "serv" ? "w-[215px]" : "w-[375px]"} ${["clear", "crs", "lec"].includes(property1) ? "flex" : ""} ${["clear", "crs", "lec"].includes(property1) ? "flex-col" : ""} ${["clear", "crs", "lec"].includes(property1) ? "items-start" : ""} ${["clear", "crs", "lec"].includes(property1) ? "gap-2.5" : ""} ${["clear", "crs", "lec"].includes(property1) ? "px-[69px] py-9" : ""} ${["clear", "crs", "lec"].includes(property1) ? "bg-[#ffffff0d]" : ""} ${["clear", "crs", "lec"].includes(property1) ? "relative" : ""}`}
        >
          <div
            className={`relative ${property1 === "clear" ? "w-[235px]" : (property1 === "serv") ? "w-[211px]" : "w-[239px]"} ${property1 === "clear" ? "flex" : ""} ${property1 === "clear" ? "flex-col" : ""} ${property1 === "clear" ? "items-center" : ""} ${["crs", "lec"].includes(property1) ? "mr-[-2.00px]" : ""} ${property1 === "clear" ? "gap-4" : ""} ${property1 === "clear" ? "flex-[0_0_auto]" : ""} ${["crs", "lec"].includes(property1) ? "h-[134px]" : (property1 === "serv") ? "h-[211px]" : ""} ${property1 === "serv" ? "rounded-[150px]" : ""} ${property1 === "serv" ? "bg-[#ffffff0d]" : ""}`}
          >
            {property1 === "clear" && (
              <>
                <img
                  className="relative w-[63px] h-[63px] mt-[-0.50px]"
                  alt="Group"
                  src={"/group-1191.png"}
                />

                <div className="relative w-[239px] h-14 mr-[-4.00px]">
                  <div className="absolute top-0 left-3.5 [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[15px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                    Загрузите обложку для теста
                  </div>

                  <p className="absolute top-[30px] left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-[#ffffff80] text-[11px] text-center tracking-[0] leading-[normal]">
                    файл png / jpg Минимум 1600 пкс по ширине,
                    <br />
                    размером не более 10 мб
                  </p>
                </div>
              </>
            )}

            {["crs", "lec", "serv"].includes(property1) && (
              <>
                <div
                  className={`[font-family:'Roboto-Regular',Helvetica] tracking-[0] text-[15px] text-white absolute font-normal text-center leading-[normal] ${property1 === "serv" ? "left-[39px]" : (property1 === "crs") ? "left-[13px]" : "left-2"} ${property1 === "serv" ? "top-[102px]" : "top-[78px]"} ${["crs", "lec"].includes(property1) ? "whitespace-nowrap" : ""}`}
                >
                  {property1 === "lec" && <>Загрузите обложку для лекции</>}

                  {property1 === "serv" && (
                    <>
                      Загрузите обложку
                      <br />
                      для услуги
                    </>
                  )}

                  {property1 === "crs" && <>Загрузите обложку для курса</>}
                </div>

                <div
                  className={`[font-family:'Roboto-Regular',Helvetica] tracking-[0] text-[#ffffff80] absolute font-normal text-center leading-[normal] ${property1 === "serv" ? "left-[42px]" : "left-0"} ${property1 === "serv" ? "text-[9px]" : "text-[11px]"} ${property1 === "serv" ? "top-[146px]" : "top-[108px]"}`}
                >
                  {["crs", "lec"].includes(property1) && (
                    <p>
                      файл png / jpg Минимум 1600 пкс по ширине,
                      <br />
                      размером не более 10 мб
                    </p>
                  )}

                  {property1 === "serv" && (
                    <p>
                      файл png / jpg
                      <br />
                      минимум 1600 пкс по ширине,
                      <br />
                      не более 10 мб
                    </p>
                  )}
                </div>
              </>
            )}

            {["lec", "serv"].includes(property1) && (
              <img
                className={`absolute ${property1 === "serv" ? "w-[82px]" : "w-[63px]"} ${property1 === "serv" ? "left-[76px]" : "left-[84px]"} ${property1 === "serv" ? "top-8" : "top-0"} ${property1 === "serv" ? "h-[59px]" : "h-[63px]"} ${lectureNotificationClassName}`}
                alt="Lecture notification"
                src={property1 === "serv" ? "/group-459.png" : "/lecture_notification_ico.svg"}
              />
            )}

            {property1 === "crs" && (
              <div
                className={`absolute w-[62px] h-[62px] top-0 left-[85px] ${lectureNotificationClassName}`}
              >
                <div className="relative w-[63px] h-[63px]">
                  <img
                    className="absolute w-[33px] h-[30px] top-[17px] left-3.5"
                    alt="Course ico"
                    src={"/course-ico.png"}
                  />

                  <img
                    className="absolute w-[63px] h-[63px] top-0 left-0"
                    alt="Circle"
                    src={"/circle.svg"}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

Cover.propTypes = {
  property1: PropTypes.oneOf(["clear", "lec", "fill", "serv", "crs"]),
  lectureNotification: PropTypes.string,
};
