import React from "react";

export type FeatureCardProps = {
  imageSrc: string;
  imageAlt?: string;
  imageIcon?: string;
  index?: number | string;
  pill?: string;
  title: string;
  description?: React.ReactNode;
  reverse?: boolean;
  className?: string;
  onClick?: () => void;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  imageSrc,
  imageAlt = "feature image",
  index,
  pill,
  title,
  description,
  imageIcon,
  reverse = false,
  className = "",
  onClick,
}) => {
  const numericIndex = typeof index === "string" ? Number(index) : index;
  const isAccent = numericIndex === 2 || numericIndex === 4;

  return (
    <div
      className={[
        "group flex flex-col md:flex-row items-center gap-8 md:gap-12",
        "w-full max-w-7xl mx-auto py-6",
        reverse ? "md:flex-row-reverse" : "",
        onClick ? "cursor-pointer" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      {/* Image side */}
      <div className="relative shrink-0 w-full md:w-[45%] lg:w-[40%]">
        <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-100
          transition-transform duration-500 group-hover:scale-[1.02]">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto object-cover block"
          />
        </div>

        {/* Index badge */}
        {index !== undefined && (
          <div className="absolute left-4 bottom-4">
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center
                text-white text-xl font-semibold shadow-lg ring-2 ring-white
                transition-transform duration-300 group-hover:scale-110
                ${isAccent ? "bg-[#2F414F]" : "bg-[#3894A3]"}`}
              aria-hidden
            >
              {index}
            </div>
          </div>
        )}

        {/* Image icon */}
        {imageIcon && (
          <div className="absolute right-4 top-4">
            <div className="rounded-xl bg-white/90 backdrop-blur-sm shadow-md p-2.5
              transition-transform duration-300 group-hover:scale-105"
              aria-hidden
            >
              <img src={imageIcon} alt="" className="w-14 h-14" />
            </div>
          </div>
        )}
      </div>

      {/* Text side */}
      <div className="flex-1 min-w-0 text-start">
        {pill && (
          <span className={`inline-block mb-3 px-5 py-1.5 text-sm font-medium rounded-full text-white
            ${isAccent ? "bg-[#2F414F]" : "bg-[#3894A3]"}`}>
            {pill}
          </span>
        )}

        <h3 className="text-2xl md:text-3xl font-semibold text-[#2F414F] leading-tight
          transition-colors duration-300 group-hover:text-[#3894A3]">
          {title}
        </h3>

        {description && (
          <p className="mt-3 text-[#4A5565] text-base md:text-lg leading-relaxed">
            {description}
          </p>
        )}

        {/* Animated underline */}
        <div className={`mt-4 h-1.5 rounded-full
          transition-all duration-500 ease-out
          w-12 group-hover:w-24
          ${isAccent ? "bg-[#2F414F]" : "bg-[#3894A3]"}`}
        />
      </div>
    </div>
  );
};

export default FeatureCard;