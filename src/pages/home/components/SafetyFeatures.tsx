import React from "react";
import { CheckCircle } from "lucide-react";

const features = [
  "All drivers undergo rigorous background checks",
  "Real-time GPS tracking for every trip",
  "24/7 customer support and emergency assistance",
  "Driver ratings and reviews from verified users",
];

const SafetyFeatures: React.FC = () => {
  return (
    <section className="bg-[#F1F9FB] md:bg-white px-5 lg:px-22 xl:px-36 py-8 md:py-16">
      <div className="mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-between gap-12 items-center">

          {/* LEFT: Image */}
          <div className="flex justify-center lg:justify-start flex-shrink-0">
            <img
              src="/safety-shield.png"
              alt="Safety features"
              className="w-44 md:w-[342px] h-auto
                drop-shadow-[0_16px_32px_rgba(56,148,163,0.2)]"
            />
          </div>

          {/* RIGHT: Content */}
          <div className="text-center lg:text-left">

            {/* Pill */}
            <span className="inline-block mb-6 px-6 py-2.5 rounded-full bg-[#2F414F] text-white text-xl font-medium">
              Safety Features
            </span>

            {/* Heading — fixed typo: font-meduim → font-semibold */}
            <h2 className="text-2xl md:text-3xl font-semibold text-[#2F414F]
              max-w-xs mx-auto lg:max-w-full">
              We&apos;re committed to{" "}
              <span className="text-[#3894A3]">keeping you safe</span>
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-[#4A5565] text-base leading-relaxed text-start">
              As a company that cares about your safety, there are provisions
              and guidelines set up for easy usage and seamless operations.
            </p>

            {/* Feature list */}
            <ul className="mt-6 space-y-3">
              {features.map((item, idx) => (
                <li
                  key={idx}
                  className="group flex items-start gap-3 justify-start
                    bg-white/70 px-4 py-3 rounded-xl
                    transition-all duration-300
                    hover:bg-white hover:shadow-sm hover:-translate-y-0.5"
                >
                  <CheckCircle className="w-5 h-5 text-[#3894A3] mt-0.5 shrink-0
                    transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-[#2F414F] text-base text-start">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <button className="px-8 py-3 w-full sm:w-auto rounded-full
                bg-[#3894A3] hover:bg-[#2F414F] active:scale-95
                text-white text-base font-medium shadow-md
                transition-all duration-300 hover:shadow-lg">
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