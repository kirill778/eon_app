import PropTypes from "prop-types";
import React from "react";

interface Props {
  property1: "glass-btn" | "mate-btn" | "c-btn" | "g-btn";
  className: any;
  btnFClassName: any;
  text: string;
}

export const ButtonCreateNewLection = ({
  property1,
  className,
  btnFClassName,
  text = "Посмотреть",
}: Props): React.JSX.Element => {
  return (
    <div
      className={`inline-flex items-center gap-2.5 px-7 py-[13px] relative ${className}`}
    >
      <div
        className={`w-[149px] left-0 top-0 h-11 absolute bg-[rgba(255,255,255,0.05)] ${btnFClassName}`}
        style={{
          background: `url('/btn-border.svg')`,
          backgroundSize: '100% 100%'
        }}
      />

      <div
        className={`[font-family:'Inter-SemiBold',Helvetica] w-fit mt-[-1.00px] ml-[-10px] tracking-[0] text-[15px] font-normal text-center whitespace-nowrap leading-[normal] relative ${property1 === "mate-btn" ? "text-[#ffffff80]" : "text-white"}`}
      >
        {text}
      </div>
    </div>
  );
};

ButtonCreateNewLection.propTypes = {
  property1: PropTypes.oneOf(["glass-btn", "mate-btn", "c-btn", "g-btn"]),
  text: PropTypes.string,
};
