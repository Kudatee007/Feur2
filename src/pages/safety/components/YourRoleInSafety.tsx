import React from "react";
import yourRoleIcon from "../../../assets/icons/yourRoleIcon.svg";

const safetyTips = [
  "Verify the driver's identity by checking their photo, name, and vehicle details before entering the car.",
  "Share your trip details with a trusted friend or family member using the in-app share feature.",
  "Always wear your seatbelt and ensure all passengers do the same throughout the journey.",
  "Trust your instincts if something feels wrong, end the trip and contact support immediately.",
  "Keep your phone charged and accessible during trips for emergency communication.",
  "Use in-app messaging instead of sharing personal contact information with drivers.",
  "Report any safety concerns or inappropriate behavior immediately through the app.",
];

const YourRoleInSafety: React.FC = () => {
  return (
    <section className="relative bg-[#3B95A3] py-20 px-5 sm:px-8 overflow-hidden">

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-black/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center text-white">

        {/* Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center
          rounded-2xl bg-[#2F414F] shadow-lg
          transition-transform duration-300 hover:scale-105">
          <img src={yourRoleIcon} alt="" className="w-9 h-9" />
        </div>

        {/* Title */}
        <h2 className="mb-3 text-2xl md:text-3xl font-semibold leading-tight">
          Your Role in Safety
        </h2>

        {/* Subtitle */}
        <p className="mb-10 text-white/80 text-base max-w-xl mx-auto leading-relaxed">
          Safety is a shared responsibility. Here's how you can help create a
          safer experience for everyone.
        </p>

        {/* Tips Card */}
        <div className="rounded-2xl bg-white/10 backdrop-blur-md p-6 sm:p-8 text-left
          border border-white/10">
          <ul className="space-y-4">
            {safetyTips.map((tip, index) => (
              <li
                key={index}
                className="group flex gap-4 items-start
                  rounded-xl px-3 py-2.5
                  transition-all duration-300
                  hover:bg-white/10 hover:-translate-x-1"
              >
                {/* Number badge */}
                <span className="flex h-7 w-7 shrink-0 items-center justify-center
                  rounded-full bg-[#2F414F] text-xs font-semibold text-white
                  ring-2 ring-white/20
                  transition-all duration-300 group-hover:bg-white group-hover:text-[#3B95A3]">
                  {index + 1}
                </span>

                {/* Text */}
                <p className="text-sm sm:text-base leading-relaxed text-white/90
                  transition-colors duration-300 group-hover:text-white">
                  {tip}
                </p>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default YourRoleInSafety;