import React, { useState } from "react";

export const Swap = (): React.JSX.Element => {
  const [currentText, setCurrentText] = useState("Лекции");
  const [animationClass, setAnimationClass] = useState("");

  const handleSwap = (direction: "left" | "right") => {
    // Устанавливаем класс анимации в зависимости от направления
    setAnimationClass(direction === "left" ? "slide-left" : "slide-right");
    
    // Через 300мс меняем текст и сбрасываем анимацию
    setTimeout(() => {
      setCurrentText(currentText === "Лекции" ? "Курсы" : "Лекции");
      setAnimationClass("");
    }, 300);
  };

  // Определяем смещение в зависимости от текста
  const getTextPosition = () => {
    return currentText === "Лекции" ? "0px" : "10px";
  };

  return (
    <div className="w-[169px] h-6">
      <div className="w-[169px] h-6">
        <div className="relative w-[171px] h-6">
          {/* Левая стрелка */}
          <img
            className="absolute left-0 w-2 h-3 top-[7px] cursor-pointer z-10"
            alt="Vector"
            src="/vector_swap.svg"
            onClick={() => handleSwap("left")}
          />

          {/* Текст с анимацией */}
          <div 
            className={`absolute top-0 font-normal text-white text-xl text-center whitespace-nowrap transition-all duration-300 ${animationClass}`}
            style={{
              left: `calc(47px + ${getTextPosition()})`,
              transform: animationClass === "slide-left" 
                ? "translateX(-20px)" 
                : animationClass === "slide-right" 
                  ? "translateX(20px)" 
                  : "translateX(0)",
              opacity: animationClass ? "0" : "1"
            }}
          >
            {currentText}
          </div>

          {/* Правая стрелка */}
          <img
            className="absolute right-0 w-2 h-3 top-[7px] rotate-180 cursor-pointer z-10"
            alt="Vector"
            src="/vector_swap.svg"
            onClick={() => handleSwap("right")}
          />
        </div>
      </div>

      {/* Добавляем CSS для анимации */}
      <style jsx>{`
        .slide-left {
          transform: translateX(-20px) !important;
          opacity: 0;
        }
        .slide-right {
          transform: translateX(20px) !important;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};
