import React from "react";

interface HowItWorksCardProps {
  src: string;
  title: string;
  txt: string;
  step: string;
}

const HowItWorksCard: React.FC<HowItWorksCardProps> = ({
  src,
  title,
  txt,
  step,
}) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-md w-full lg:max-w-[300px]">
      <div className="flex justify-between items-center pb-6">
        <img src={src} alt="" />
        <span className="text-4xl text-gray-200 tracking-wide">{step}</span>
      </div>
      <p className="text-lg font-medium leading-7 tracking-tighter text-[#2F414F]">
        {title}
      </p>
      <p className="text-base font-normal leading-6 tracking-tighter text-[#4A5565]">
        {txt}
      </p>
    </div>
  );
};

export default HowItWorksCard;
