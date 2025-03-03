import React from 'react';

interface DescriptionCardProps {
  title: string;
  description: string;
}

export function DescriptionCard({ title, description }: DescriptionCardProps) {
  // Функция для обработки текста с маркером списка
  const formatDescription = (text: string) => {
    return text.split('•').map((part, index) => (
      index === 0 ? 
        part : 
        <React.Fragment key={index}>
          <span className="flex mt-2">
            <span className="min-w-[12px]">•</span>
            <span className="pl-2">{part}</span>
          </span>
        </React.Fragment>
    ));
  };

  return (
    <div className="w-[319px]">
      <div className="w-[323px] relative">
        <div className="w-[319px] bg-[#ffffff0d] rounded-[28px] shadow-[inset_0px_1px_1px_#ffffff80] backdrop-blur-[25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25px)_brightness(100%)] p-7 pb-[26px]">
          <div className="text-[#ffffff80] text-[11px] [font-family:'Inter-Regular',Helvetica] font-normal tracking-[0] leading-[normal] mb-[8px]">
            {title}
          </div>
          <p className="text-white text-[14px] [font-family:'Inter-Regular',Helvetica] font-normal tracking-[0] leading-[16px]">
            {formatDescription(description)}
          </p>
        </div>
      </div>
    </div>
  );
} 