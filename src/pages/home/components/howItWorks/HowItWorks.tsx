import React from "react";
import HowItWorksCard from "./components/HowItWorksCard";
import step1Img from "../../../../assets/images/step1.svg";
import step2Img from "../../../../assets/images/step2.svg";
import step3Img from "../../../../assets/images/step3.svg";
import step4Img from "../../../../assets/images/step4.svg";
import appStep1Img from "../../../../assets/images/appStep1.svg";
import appStep2Img from "../../../../assets/images/appStep2.svg";
import appStep3Img from "../../../../assets/images/appStep3.svg";
import appStep4Img from "../../../../assets/images/appStep4.svg";
import appStep5Img from "../../../../assets/images/appStep5.svg";
import appStep6Img from "../../../../assets/images/appStep6.svg";
import appMobile from "../../../../assets/images/appStepMobile.svg";

type Step = {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
};

const steps: Step[] = [
  {
    id: 1,
    icon: appStep1Img,
    title: "Download & Sign In",
    subtitle: "Open the FEUR app and sign in to get started",
  },
  {
    id: 2,
    icon: appStep2Img,
    title: "Set Pick-Up & Drop-off Location",
    subtitle: "Choose and confirm your pick-up location",
  },
  {
    id: 3,
    icon: appStep3Img,
    title: "Hire Your Driver",
    subtitle: "Select a verified driver and hop in your car",
  },
  {
    id: 4,
    icon: appStep4Img,
    title: "Choose and Verify Driver",
    subtitle: "Choose and confirm the driver’s details on arrival.",
  },
  {
    id: 5,
    icon: appStep5Img,
    title: "Arrive Safely",
    subtitle: "Celebrate your safe arrival at your destination",
  },
  {
    id: 6,
    icon: appStep6Img,
    title: "Rate & Review",
    subtitle: "Share your experience and rate your driver",
  },
];

const StepItem: React.FC<{ step: Step; isLast?: boolean }> = ({ step }) => {
  return (
    <div className="relative flex items-center gap-2 sm:w-auto">
      {/* icon bubble */}
      <div className="relative z-10">
        <img src={step.icon} alt={`${step.id}`} className="" />
      </div>

      {/* texts */}
      <div className="flex-1">
        <p className="text-[#2F414F] font-semibold text-[clamp(0.88rem,1vw,2rem)] leading-tight">
          {step.title}
        </p>
        <p className="text-slate-400 text-[clamp(0.80rem,1vw,1.75rem)] mt-1">
          {step.subtitle}
        </p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <div className="bg-[#F1F9FB] px-5 lg:px-22 xl:px-36 py-10">
         <div className="max-w-7xl mx-auto text-center">
      <div className="">
        <h2>HowItWorks</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <HowItWorksCard
            src={step1Img}
            step="01"
            title="Download & Register"
            txt="Download the Feur app and create your account to get started"
          />
          <HowItWorksCard
            src={step2Img}
            step="02"
            title="Request a Driver"
            txt="Choose your pick-up location and request a verified driver"
          />
          <HowItWorksCard
            src={step3Img}
            step="03"
            title="Meet Your Driver"
            txt="Meet your professional driver and enjoy a safe journey to your destination"
          />
          <HowItWorksCard
            src={step4Img}
            step="04"
            title="Download & Register"
            txt="Share your experience and rate your driver after your ride"
          />
        </div>
      </div>

      <div className="py-10 flex flex-col items-center gap-11">
        <h3 className="bg-[#2F414F] px-5 py-3 rounded-full w-fit text-white text-xl font-semibold text-center">
          Steps To Using Feur
        </h3>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-16 lg:gap-20 w-full">
          <div className="relative">
            {/* vertical guide line behind badges */}
            <div className="absolute left-10 top-14 bottom-6 w-0.5">
              <div className="h-full w-px bg-[#3894A3]" />
            </div>

            <div className="space-y-8 text-start">
              {steps.map((s, idx) => (
                <div key={s.id} className="relative">
                  <StepItem step={s} isLast={idx === steps.length - 1} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <img
              src={appMobile}
              alt="mobile.svg"
              // className="w-[150px] h-[250px] sm:w-auto sm:h-auto"
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HowItWorks;
