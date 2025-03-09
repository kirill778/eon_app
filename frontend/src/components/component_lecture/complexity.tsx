import React, { useState } from "react";

export const Complexity = (): React.JSX.Element => {
  const [level, setLevel] = useState<"beginner" | "intermediate" | "advanced">("beginner");

  const handleLevelChange = (selectedLevel: "beginner" | "intermediate" | "advanced") => {
    setLevel(selectedLevel);
  };

  // Получаем стили градиента в зависимости от выбранного уровня
  const getGradientStyle = () => {
    switch (level) {
      case "beginner":
        return {
          width: "93px",
          background: "linear-gradient(90deg, #594790 0%, #594790 70%, #8072AA 100%)",
          boxShadow: "0px 1px 1px 0px #8072AA inset"
        };
      case "intermediate":
        return {
          width: "186px",
          background: "linear-gradient(90deg, #594790 0%, #594790 50%, #8072AA 100%)",
          boxShadow: "0px 1px 1px 0px #8072AA inset"
        };
      case "advanced":
        return {
          width: "279px",
          background: "linear-gradient(90deg, #594790 0%, #594790 30%, #8072AA 100%)",
          boxShadow: "0px 1px 1px 0px #8072AA inset"
        };
    }
  };

  return (
    <div className="relative w-[279px] h-[49px]">
      <div className="w-[287px] h-[49px]">
        <div className="absolute top-0 left-0 font-normal text-white text-[13px]">
          Сложность
        </div>

        <div 
          className={`left-[205px] absolute top-9 font-normal text-[11px] text-right whitespace-nowrap ${level === "advanced" ? "text-white" : "text-[#ffffff80]"}`}
          onClick={() => handleLevelChange("advanced")}
          style={{ cursor: "pointer" }}
        >
          Продвинутый
        </div>

        <div 
          className={`left-[115px] absolute top-9 font-normal text-[11px] text-right whitespace-nowrap ${level === "intermediate" ? "text-white" : "text-[#ffffff80]"}`}
          onClick={() => handleLevelChange("intermediate")}
          style={{ cursor: "pointer" }}
        >
          Средний
        </div>

        <div 
          className={`left-0 absolute top-9 font-normal text-[11px] text-right whitespace-nowrap ${level === "beginner" ? "text-white" : "text-[#ffffff80]"}`}
          onClick={() => handleLevelChange("beginner")}
          style={{ cursor: "pointer" }}
        >
          Новичок
        </div>

        <div className="absolute w-[279px] h-2 top-6 left-0">
          {/* Фоновая линия */}
          <div className="absolute w-[279px] h-px top-0 left-0 bg-[#d9d9d90d] shadow-[inset_0px_1px_1px_#ffffff4c]" />
          
          {/* Градиентная полоса сложности */}
          <div 
            className="absolute h-2 top-0 left-0 transition-all duration-300"
            style={getGradientStyle()}
          />
        </div>
      </div>
    </div>
  );
};
