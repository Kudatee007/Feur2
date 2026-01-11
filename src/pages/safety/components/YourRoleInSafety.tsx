import React from "react";

const safetyTips = [
  "Verify the driver’s identity by checking their photo, name, and vehicle details before entering the car.",
  "Share your trip details with a trusted friend or family member using the in-app share feature.",
  "Always wear your seatbelt and ensure all passengers do the same throughout the journey.",
  "Trust your instincts—if something feels wrong, end the trip and contact support immediately.",
  "Keep your phone charged and accessible during trips for emergency communication.",
  "Use in-app messaging instead of sharing personal contact information with drivers.",
  "Report any safety concerns or inappropriate behavior immediately through the app.",
];

const YourRoleInSafety: React.FC = () => {
  return (
    <section className="bg-[#3B95A3] py-20 px-4 sm:px-8">
      <div className="mx-auto max-w-3xl text-center text-white">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#2F414F] shadow-lg">
          <span className="text-xl">👥</span>
        </div>

        {/* Title */}
        <h2 className="mb-3 text-2xl font-semibold">
          Your Role in Safety
        </h2>

        {/* Subtitle */}
        <p className="mb-10 text-white/90 text-sm sm:text-base">
          Safety is a shared responsibility. Here’s how you can help create a
          safer experience for everyone.
        </p>

        {/* Tips Card */}
        <div className="rounded-2xl bg-white/10 backdrop-blur-md p-6 sm:p-8 text-left">
          <ul className="space-y-5">
            {safetyTips.map((tip, index) => (
              <li key={index} className="flex gap-4">
                {/* Number */}
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/20 text-sm font-medium">
                  {index + 1}
                </span>

                {/* Text */}
                <p className="text-sm sm:text-base leading-relaxed text-white/95">
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