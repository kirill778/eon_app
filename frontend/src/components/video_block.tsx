import PropTypes from "prop-types";
import React from "react";
import { PlayBtn } from "./video_player";

interface Props {
  className?: any;
  groupClassName?: any;
  icon?: React.ReactNode;
  vectorClassName?: any;
  vector?: string;
}

export const VideoSimpleVideo = ({
  className = "",
  groupClassName = "",
  icon = (
    <PlayBtn className="!absolute !w-[60px] !h-[60px] !top-[75px] !left-[109px]" xmlns="http://www.w3.org/2000/svg" />
  ),
  vectorClassName = "",
  vector = "vector-360.svg",
}: Props): React.ReactNode => {
  return (
    <div
      className={`flex flex-col w-[279px] items-center gap-[23px] relative ${className}`}
    >
      <div
        className={`relative w-[279px] h-[211px] bg-[url(/IconComponentNode.png)] bg-cover bg-[50%_50%] ${groupClassName}`}
      >
        {icon}
      </div>

      <div className="flex justify-center gap-[25px] mt-[0%] ml-[0%]">
        <div className="w-[3px] h-[3px] rounded-full bg-white opacity-30" />
        <div className="w-[3px] h-[3px] rounded-full bg-white opacity-30" />
        <div className="w-[3px] h-[3px] rounded-full bg-white opacity-30" />
        <div className="w-[3px] h-[3px] rounded-full bg-white opacity-30" />
        <div className="w-[3px] h-[3px] rounded-full bg-white opacity-30" />
      </div>

    </div>
  );
};

VideoSimpleVideo.propTypes = {
  vector: PropTypes.string,
};
