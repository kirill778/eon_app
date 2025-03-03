import React from "react";
import Image from "next/image";

interface LectureAttributeProps {
  text?: string;
}

export function LectureAttribute({ text = "Лекция доступна в составе курса" }: LectureAttributeProps) {
  return (
    <div className="flex gap-2">
      <Image
        src="/ico_course_block.svg"
        alt="Course icon"
        width={14}
        height={13}
        className="object-contain"
      />
      <span className="text-white text-[13px]">{text}</span>
    </div>
  );
} 