import React from "react";
import flexIcon from "../../../assets/icons/flexIcon.svg";
import reliaIcon from "../../../assets/icons/reliaIcon.svg";
import innovIcon from "../../../assets/icons/innoIcon.svg";
import customerIcon from "../../../assets/icons/customerIcon.svg";
import sustainIcon from "../../../assets/icons/sustainIcon.svg";
import safetyIcon from "../../../assets/icons/safetyIcon.svg";

type ValueItem = {
  title: string;
  description: string;
  image: string;
  icon: string;
};

const values: ValueItem[] = [
  {
    title: "Flexibility",
    description:
      "Adapting to your schedule and needs, whenever and wherever you need a driver.",
    image: "/flexibility.webp",
    icon: flexIcon,
  },
  {
    title: "Reliability",
    description:
      "Professional drivers you can count on for safe, timely service every time.",
    image: "/reliability.webp",
    icon: safetyIcon,
  },
  {
    title: "Innovation",
    description:
      "Leading Africa’s mobility revolution with cutting-edge technology.",
    image: "/innovation.webp",
    icon: innovIcon,
  },
  {
    title: "Customer-Centric",
    description:
      "Your satisfaction drives everything we do, from features to support.",
    image: "/customer-centric.webp",
    icon: customerIcon,
  },
  {
    title: "Sustainability",
    description:
      "Committed to reducing environmental impact through smart solutions.",
    image: "/sustainability.webp",
    icon: sustainIcon,
  },
  {
    title: "Safety",
    description:
      "Your security is our top priority with verified drivers and real-time tracking.",
    image: "/safety.webp",
    icon: reliaIcon,
  },
];

const WhatDrivesUs: React.FC = () => {
  return (
    <section className="bg-[#F1F9FB] py-16 px-5 lg:px-22 xl:px-36">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block mb-4 px-6 py-3 sm:px-18 rounded-full bg-[#2F414F] text-white text-xl font-medium">
            What Drives Us
          </span>

          <p className="text-[#364153] text-base md:text-xl">
            Our core values shape every decision we make and every interaction
            we have.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl shadow-feur overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-40">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full min-h-40 object-cover"
                />

                {/* Icon */}
                <div className="absolute bottom-4 left-4 w-14 h-12 rounded-xl bg-[#2F8F9D] text-white flex items-center justify-center shadow-md">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="absolute top-3 w-8 h-8 object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#2F414F]">
                  {item.title}
                </h3>
                <p className="mt-2 text-base text-[#4A5565] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatDrivesUs;
