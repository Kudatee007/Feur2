import React from "react";
import { type LucideProps } from "lucide-react";

interface HowItWorksCardProps {
  icon: React.ComponentType<LucideProps>;
  title: string;
  txt: string;
  step: string;
}

const HowItWorksCard: React.FC<HowItWorksCardProps> = ({
  icon: Icon,
  title,
  txt,
  step,
}) => {
  return (
    <div className="group bg-white p-5 rounded-2xl shadow-md w-full lg:max-w-[300px] text-start
      transition-all duration-300 ease-in-out
      hover:shadow-xl hover:-translate-y-1 hover:bg-[#F1F9FB] cursor-pointer">

      <div className="flex justify-between items-center pb-6">
        <div className="w-16 h-12 bg-linear-to-br from-[#3894A3] to-[#1F6F7A] rounded-xl
          flex items-center justify-center
          transition-transform duration-300 group-hover:scale-110">
          <Icon size={24} color="#ffffff" strokeWidth={1.8} />
        </div>
        <span className="text-5xl font-bold tracking-wide
          text-gray-200 transition-colors duration-300 group-hover:text-[#3894A3]/30">
          {step}
        </span>
      </div>

      <p className="text-lg font-semibold leading-7 tracking-tight text-[#2F414F] pb-1
        transition-colors duration-300 group-hover:text-[#3894A3]">
        {title}
      </p>
      <p className="text-base font-normal leading-6 tracking-tight text-[#4A5565]">
        {txt}
      </p>
    </div>
  );
};

export default HowItWorksCard;