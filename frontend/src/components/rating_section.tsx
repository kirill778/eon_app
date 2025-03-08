import React, { useState } from "react";

export const Box = (): React.JSX.Element => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleStarClick = (starIndex: number) => {
    setRating(starIndex + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ rating, review });
  };

  return (
    <div className="relative w-[262px] h-[18px]">
      <div className="w-[264px] h-[18px]">
        <div className="absolute top-0 left-[3%] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[15px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
          Оценить лекцию
        </div>

        <div className="flex gap-[6%] w-[122px] h-[18px] ml-[55%]">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              width="19"
              height="17"
              viewBox="0 0 19 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => handleStarClick(index)}
              className="cursor-pointer"
            >
              <path
                d="M9.5 0L12.1979 5.28661L18.0595 6.21885L13.8653 10.4184L14.7901 16.2812L9.5 13.59L4.20993 16.2812L5.13465 10.4184L0.940492 6.21885L6.80207 5.28661L9.5 0Z"
                fill={index < rating ? "#FFD700" : "#0D3036"}
              />
            </svg>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-[28px] mt-[11.5%] ml-[0%] flex flex-col items-center w-full">
          <div className="relative inline-block w-full h-[45px] ml-[-13%]">
          <svg width="321" height="45" viewBox="0 0 321 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="0.5" width="319" height="44" rx="22" stroke="url(#paint0_linear_40_2284)"/>
            <defs>
            <linearGradient id="paint0_linear_40_2284" x1="114.786" y1="18.4821" x2="120.706" y2="52.7476" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" stopOpacity="0.15"/>
              <stop offset="0.51" stopColor="white" stopOpacity="0.8"/>
              <stop offset="1" stopColor="white" stopOpacity="0.25"/>
            </linearGradient>
            </defs>
            </svg>

            <input
              type="text"
              placeholder="Оставить отзыв"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="absolute ml-[10%] inset-0 bg-transparent border-none text-white placeholder:text-white/50 rounded-full text-center focus:outline-none w-full h-[45px] font-inter font-normal text-[15px] leading-[18px]"
            />
          </div>
          <button
            type="submit"
            className="mt-4 w-[68%] h-[44px] bg-[#0a724a] hover:bg-[#0a724a] text-white/50 rounded-[30px] py-2 px-4 bg-white/30 mx-auto"
          >
            Добавить отзыв
          </button>
        </form>

        <button
            type="submit"
            className="mt-4 w-[78%] h-[6vh] ml-[12%] inline-flex items-center gap-[10px] px-[28px] py-[13px] rounded-[30px] bg-[rgba(10,114,74,1)] hover:bg-[rgba(10,114,74,1)] shadow-[inset_0px_1px_1px_0px_#24BA80]"
          >
           Завершить лекцию
          </button>
          <div className="mt-[10%]">
            <svg width="275" height="1" viewBox="0 0 275 1" fill="none" xmlns="http://www.w3.org/2000/svg" style={{flexShrink: 0}}>
                <line x1="0" y1="0.5" x2="275" y2="0.5" stroke="rgba(255, 255, 255, 0.30)" strokeWidth="1"/>
            </svg>
          </div>
      </div>

      

    </div>
  );
};
