import React from "react";

export type FeatureCardProps = {
  imageSrc: string;
  imageAlt?: string;
  index?: number | string;
  pill?: string;
  title: string;
  description?: React.ReactNode;
  imageOverlay?: React.ReactNode;
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
  imageOverlay,
  reverse = false,
  className = "",
  onClick,
}) => {
  const containerClasses = [
    "flex",
    "flex-col",
    "md:flex-row",
    "items-center",
    "gap-8",
    "w-full",
    "max-w-7xl",
    "mx-auto",
    "py-6",
    reverse ? "md:flex-row-reverse" : "",
    className,
  ].join(" ");

  return (
    <div
      className={containerClasses}
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
      {/* Image */}
      <div className="relative shrink-0 w-full md:w-[45%] lg:w-[40%]">
        <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto object-cover block"
          />
        </div>

        {/* Index circle */}
        {index !== undefined && (
          <div className="absolute left-4 bottom-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center
                         bg-teal-600 text-white text-sm font-semibold shadow-md"
              aria-hidden
            >
              {index}
            </div>
          </div>
        )}

        {/* Image overlay icon */}
        {imageOverlay && (
          <div className="absolute right-4 top-4">
            <div
              className="w-10 h-10 rounded-lg bg-white/90 flex items-center justify-center shadow"
              aria-hidden
            >
              {imageOverlay}
            </div>
          </div>
        )}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0 text-start md:text-left">
        {pill && (
          <span className="inline-block mb-3 px-3 py-1 text-xs font-medium rounded-full text-white bg-[#3894A3]">
            {pill}
          </span>
        )}

        <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 leading-tight">
          {title}
        </h3>

        {description && (
          <p className="mt-3 text-slate-600 text-base md:text-lg leading-relaxed">
            {description}
          </p>
        )}

        {/* Decorative underline */}
        <div className="mt-4 h-1 w-14 bg-slate-200 rounded-full" />
      </div>
    </div>
  );
};

export default FeatureCard;
