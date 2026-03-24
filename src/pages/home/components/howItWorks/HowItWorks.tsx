import React from "react";
import HowItWorksCard from "./components/HowItWorksCard";
import { Download, MapPin, User, Star } from "lucide-react";

type Step = {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
};

const steps: Step[] = [
  {
    id: 1,
    icon: "/stepIcon1.svg",
    title: "Download & Sign In",
    subtitle: "Open the FEUR app and sign in to get started",
  },
  {
    id: 2,
    icon: "/stepIcon2.svg",
    title: "Set Pick-Up & Drop-off Location",
    subtitle: "Choose and confirm your pick-up location",
  },
  {
    id: 3,
    icon: "/stepIcon3.svg",
    title: "Hire Your Driver",
    subtitle: "Select a verified driver and hop in your car",
  },
  {
    id: 4,
    icon: "/stepIcon4.svg",
    title: "Choose and Verify Driver",
    subtitle: "Choose and confirm the driver’s details on arrival.",
  },
  {
    id: 5,
    icon: "/stepIcon5.svg",
    title: "Arrive Safely",
    subtitle: "Celebrate your safe arrival at your destination",
  },
  {
    id: 6,
    icon: "/stepIcon6.svg",
    title: "Rate & Review",
    subtitle: "Share your experience and rate your driver",
  },
];


const StepItem: React.FC<{ step: Step; isLast?: boolean }> = ({ step }) => {
  return (
    <div
      className="group relative flex items-center gap-6 cursor-default
      transition-transform duration-300 hover:-translate-y-0.5"
    >
      {/* icon bubble */}
      <div className="relative z-10 shrink-0">
        <div
          className="w-[60px] h-[60px] bg-[#3894A3] rounded-full
          flex items-center justify-center shadow-md
          transition-all duration-300
          group-hover:bg-[#2F414F] group-hover:scale-105"
        >
          <img src={step.icon} alt={`step ${step.id}`} className="w-8 h-8" />
        </div>

        {/* step number badge */}
        <span
          className="absolute -right-1.5 -bottom-1.5
          text-[10px] font-bold text-white bg-[#2F414F]
          w-5 h-5 rounded-full flex items-center justify-center
          ring-2 ring-white
          transition-colors duration-300 group-hover:bg-[#3894A3]"
        >
          {step.id}
        </span>
      </div>

      {/* texts */}
      <div className="flex-1">
        <p
          className="text-[#2F414F] font-semibold text-[clamp(0.88rem,1.4vw,1.1rem)] leading-tight
          transition-colors duration-300 group-hover:text-[#3894A3]"
        >
          {step.title}
        </p>
        <p className="text-[#4A5565] text-[clamp(0.78rem,1.1vw,0.9rem)] mt-1">
          {step.subtitle}
        </p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <div className="bg-[#F1F9FB]">
      <div className="mx-auto text-center">
        <div className="px-5 lg:px-22 xl:px-36 py-10">
          <div className="text-center mb-12 sm:mb-16">
            <span className="mb-20 px-6 py-3 rounded-full bg-[#2F414F] text-white text-xl font-medium text-center">
              How It Works
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <HowItWorksCard
              icon={Download}
              step="01"
              title="Download & Register"
              txt="Download the Feur app and create your account to get started"
            />
            <HowItWorksCard
              icon={User}
              step="02"
              title="Request a Driver"
              txt="Choose your pick-up location and request a verified driver"
            />
            <HowItWorksCard
              icon={MapPin}
              step="03"
              title="Meet Your Driver"
              txt="Meet your professional driver and enjoy a safe journey to your destination"
            />
            <HowItWorksCard
              icon={Star}
              step="04"
              title="Rate & Review"
              txt="Share your experience and rate your driver after your ride"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-11 sm:mt-12 bg-white lg:bg-[#F1F9FB] px-5 lg:px-22 xl:px-36 py-10">
          <h3 className="bg-[#2F414F] px-6 py-3 rounded-full w-fit text-white text-xl font-semibold text-center">
            Steps To Using Feur
          </h3>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-16 lg:gap-20 w-full">
            <div className="relative">
              {/* vertical guide line behind badges */}
              <div className="absolute left-8 top-14 bottom-6 w-0.5">
                <div className="h-full w-2px bg-[#3894A3]/50" />
              </div>

              <div className="space-y-10 text-start">
                {steps.map((s, idx) => (
                  <div key={s.id} className="relative">
                    <StepItem step={s} isLast={idx === steps.length - 1} />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                src="/appStepMobile.webp"
                alt="mobile.svg"
                className="w-[220px] h-[380px] sm:w-auto sm:h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
