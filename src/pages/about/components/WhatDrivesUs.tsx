import React from "react";
import flexImg from "../../../assets/images/flexibility.svg";
import reliabImg from "../../../assets/images/reliability.svg";
import innovImg from "../../../assets/images/innovation.svg";
import customerImg from "../../../assets/images/customer-centric.svg";
import sustainImg from "../../../assets/images/sustainability.svg";
import safetyImg from "../../../assets/images/safety.svg";
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
    image: flexImg,
    icon: flexIcon,
  },
  {
    title: "Reliability",
    description:
      "Professional drivers you can count on for safe, timely service every time.",
    image: reliabImg,
    icon: reliaIcon,
  },
  {
    title: "Innovation",
    description:
      "Leading Africa’s mobility revolution with cutting-edge technology.",
    image: innovImg,
    icon: innovIcon,
  },
  {
    title: "Customer-Centric",
    description:
      "Your satisfaction drives everything we do, from features to support.",
    image: customerImg,
    icon: customerIcon,
  },
  {
    title: "Sustainability",
    description:
      "Committed to reducing environmental impact through smart solutions.",
    image: sustainImg,
    icon: sustainIcon,
  },
  {
    title: "Safety",
    description:
      "Your security is our top priority with verified drivers and real-time tracking.",
    image: safetyImg,
    icon: safetyIcon,
  },
];

const WhatDrivesUs: React.FC = () => {
  return (
    <section className="bg-[#F1F9FB] py-20 px-4">
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
                  className="w-full h-full min-h-[160px] object-cover"
                />

                {/* Icon */}
                <div className="absolute top-4 left-4 w-18 h-14 rounded-xl bg-[#2F8F9D] text-white flex items-center justify-center shadow-md">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-6 h-6 object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-sm font-semibold text-[#2F414F]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#4A5565] leading-relaxed">
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
