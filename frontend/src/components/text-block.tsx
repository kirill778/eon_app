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
    </div>
  );
} 