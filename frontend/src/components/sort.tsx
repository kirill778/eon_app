import PropTypes from "prop-types";
import React from "react";

interface Props {
  text: string;
  groupClassName: any;
  polygonClassName: any;
  polygon: string;
}

export const Sort = ({
  text = "По умолчанию",
  groupClassName,
  polygonClassName,
  polygon = "filter_ico2.svg",
}: Props): React.JSX.Element => {
  return (
    <div className="relative w-[140px] h-4">
      <div className="absolute -top-px left-[23px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[13px] tracking-[0] leading-[normal]">
        {text}
      </div>

      <img
        className={`absolute w-4 h-4 top-0 left-0 bg-[#2a8050] rounded-[50px] ${groupClassName}`}
        alt="Sort"
        src={polygon}
      />
    </div>
  );
};

Sort.propTypes = {
  text: PropTypes.string,
  polygon: PropTypes.string,
};


