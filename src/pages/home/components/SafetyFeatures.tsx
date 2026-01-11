import React from "react";
import { CheckCircle } from "lucide-react";
import safetyPersonImg from "../../../assets/images/safetyimage.svg";

const features = [
  "All drivers undergo rigorous background checks",
  "Real-time GPS tracking for every trip",
  "24/7 customer support and emergency assistance",
  "Driver ratings and reviews from verified users",
];

const SafetyFeatures: React.FC = () => {
  return (
    <section className="bg-[#F1F9FB] md:bg-[#FFFFFF] px-5 lg:px-22 xl:px-36 py-8 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-between gap-12 items-center">
          {/* LEFT: Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={safetyPersonImg}
              alt="Safety assurance"
              className="relative z-10 w-44 md:w-[342px] h-auto"
            />
          </div>

          {/* RIGHT: Content */}
          <div className="text-center lg:text-left">
            {/* Pill */}
            <span className="inline-block mb-8 px-6 py-2 rounded-full bg-[#2F414F] text-white text-xl font-medium">
              Safety Features
            </span>

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-meduim text-slate-900 max-w-50 mx-auto lg:max-w-full">
              We&apos;re committed to{" "}
              <span className="text-[#3894A3]">keeping you safe</span>
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-slate-600 text-base leading-relaxed text-start">
              As a company that cares about your safety, there are provisions
              and guidelines set up for easy usage and seamless operations.
            </p>

            {/* Feature list */}
            <ul className="mt-6 space-y-4">
              {features.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 justify-start bg-white/50 px-4 py-2 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-[#3894A3] mt-0.5 shrink-0" />
                  <span className="text-slate-700 text-sm md:text-base text-start">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <button className="px-8 py-3 w-full sm:w-auto rounded-full bg-[#3894A3] text-white text-sm font-medium shadow-md hover:opacity-90 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyFeatures;
