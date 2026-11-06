import React from "react";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  showSubtext?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  className = "",
  showSubtext = true,
}) => {
  const textColor = variant === "light" ? "text-white" : "text-slate-950";
  const subTextColor = variant === "light" ? "text-slate-300" : "text-slate-600";

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Vedaquim Emblem Vector SVG */}
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 120 102"
          className="w-9 h-8 sm:w-11 sm:h-10 drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo Vedaquim"
        >
          {/* Outer Blue V-Triangle with rounded corners */}
          <path
            d="M 14,14 L 106,14 L 38,88 Z"
            fill="#002CF5"
            stroke="#002CF5"
            strokeWidth="12"
            strokeLinejoin="round"
          />
          {/* Inner Green Arrowhead with crisp White outline */}
          <path
            d="M 26,28 L 78,38 L 48,66 Z"
            fill="#00E600"
            stroke="#FFFFFF"
            strokeWidth="7"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-black text-2xl sm:text-3xl tracking-tight leading-none ${textColor}`}
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 900 }}
        >
          VEDAQUIM
        </span>
        {showSubtext && (
          <span
            className={`text-[8px] sm:text-[9.5px] font-bold tracking-[0.27em] uppercase mt-1 leading-none ${subTextColor}`}
          >
            IMPERMEABILIZAÇÕES
          </span>
        )}
      </div>
    </div>
  );
};
