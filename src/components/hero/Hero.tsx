// components/hero/Hero.tsx
import React from "react";
import bgImg from "../../assets/images/ImageWithFallback.svg";
import { CiMobile2 } from "react-icons/ci";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonIcon?: React.ReactNode;
  image: string;
  imageAlt?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  onButtonClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  buttonText,
  buttonIcon = <CiMobile2 className="text-white w-[22px] h-[26px]" />,
  image,
  imageAlt = "Hero image",
  backgroundColor = "#2F414F",
  backgroundImage = bgImg,
  onButtonClick,
}) => {
  return (
    <section
      className="text-center flex flex-col lg:flex-row items-center justify-center py-20 px-4 sm:px-8 lg:px-22 gap-8
           bg-cover bg-center bg-no-repeat min-h-[92vh]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor,
      }}
    >
      <div className="space-y-6 flex flex-col items-center lg:items-start lg:max-w-4xl">
        <h1 className="text-3xl sm:text-5xl lg:text-[80px] text-white font-bold lg:text-start leading-10 sm:leading-[60px] lg:leading-[90px]">
          {title}
        </h1>
        <p className="text-white text-lg sm:text-2xl lg:text-4xl font-normal lg:text-start mb-10 leading-8 lg:leading-12">
          {subtitle}
        </p>
        {buttonText && (
          <button
            onClick={onButtonClick}
            className="text-white bg-[#3894A3] h-14 rounded-full flex items-center justify-center gap-2 w-full max-w-[338px] hover:bg-[#327d8a] transition-colors"
          >
            {buttonIcon}
            <span>{buttonText}</span>
          </button>
        )}
      </div>
      <img
        src={image}
        alt={imageAlt}
        className="pt-6 w-full max-w-[340px] sm:max-w-[584px] sm:h-96 rounded-xl"
      />
    </section>
  );
};

export default Hero;
