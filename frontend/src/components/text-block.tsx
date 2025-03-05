interface TextBlockProps {
  paragraphs: string[];
}

export function TextBlock({ paragraphs }: TextBlockProps) {
  return (
    <div className="w-[236px] h-auto">
      {paragraphs.map((paragraph, index) => (
        <p 
          key={index} 
          className={`
            ${index > 0 ? 'mt-[16px]' : ''} 
            font-normal 
            text-white 
            text-[13px] 
            tracking-[0] 
            leading-[16px]
          `}
        >
          {paragraph}
        </p>
      ))}
      <div className="flex justify-center gap-[25px] mt-[4px] ml-[17%]">
        <div className="w-[3px] h-[3px] rounded-full bg-white opacity-30" />
        <div className="w-[3px] h-[3px] rounded-full bg-white opacity-30" />
        <div className="w-[3px] h-[3px] rounded-full bg-white opacity-30" />
        <div className="w-[3px] h-[3px] rounded-full bg-white opacity-30" />
        <div className="w-[3px] h-[3px] rounded-full bg-white opacity-30" />
      </div>
      
    </div>
  );
} 