// components/hero/Hero.tsx
import React from "react";

interface HeroProps {
  image: string;
  imageAlt?: string;
  backgroundColor?: string;
  backgroundImage?: string;
}

const DriversHero: React.FC<HeroProps> = ({
  image,
  imageAlt = "Hero image",
  backgroundColor = "#2F414F",
  backgroundImage,
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
      <div className="space-y-6 flex flex-col items-center lg:items-start lg:max-w-4xl px-4">
        <span className="text-[12px] font-bold text-[#5EA9B5]">
          DRIVE WITH FEUR
        </span>
        <h1 className="text-[32px] sm:text-5xl lg:text-[73px] text-white font-bold lg:text-start leading-10 sm:leading-[60px] lg:leading-[90px]">
          Turn Your Driving Skills Into Income
        </h1>
        <p className="text-[#F1F9FB] text-[17px] sm:text-2xl font-normal lg:text-start mb-[18px] leading-6 lg:leading-12">
          You don't need to own a car to earn with Feur.
        </p>
        <p className="text-[#C7DAD4] text-sm sm:text-lg  font-normal lg:text-start mb-4 leading-7 ">
          Whether you’re looking for full-time work or additional income, Feur
          gives you access to customers while you focus on what you do best —
          driving.
        </p>

        <button className="text-white text-base bg-[#3894A3] mt-4 h-14 rounded-full flex items-center justify-center gap-2 w-full max-w-[338px] hover:bg-[#327d8a] transition-colors">
          Become a Driver →
        </button>
      </div>
      <img
        src={image}
        alt={imageAlt}
        className="mt-6 w-full max-w-60 sm:w-full sm:min-w-[490px] sm:h-full rounded-xl"
      />
    </section>
  );
};

export default DriversHero;
