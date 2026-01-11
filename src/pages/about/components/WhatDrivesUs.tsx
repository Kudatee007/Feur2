import React from "react";

type ValueItem = {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
};

const values: ValueItem[] = [
  {
    title: "Flexibility",
    description:
      "Adapting to your schedule and needs, whenever and wherever you need a driver.",
    image: "/images/values-flexibility.jpg",
    icon: "⚡",
  },
  {
    title: "Reliability",
    description:
      "Professional drivers you can count on for safe, timely service every time.",
    image: "/images/values-reliability.jpg",
    icon: "🛡️",
  },
  {
    title: "Innovation",
    description:
      "Leading Africa’s mobility revolution with cutting-edge technology.",
    image: "/images/values-innovation.jpg",
    icon: "💡",
  },
  {
    title: "Customer-Centric",
    description:
      "Your satisfaction drives everything we do, from features to support.",
    image: "/images/values-customer.jpg",
    icon: "👥",
  },
  {
    title: "Sustainability",
    description:
      "Committed to reducing environmental impact through smart solutions.",
    image: "/images/values-sustainability.jpg",
    icon: "♻️",
  },
  {
    title: "Safety",
    description:
      "Your security is our top priority with verified drivers and real-time tracking.",
    image: "/images/values-safety.jpg",
    icon: "❤️",
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

          <p className="text-slate-600 text-base md:text-xl">
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
                  className="w-full h-full object-cover"
                />

                {/* Icon */}
                <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-[#2F8F9D] text-white flex items-center justify-center shadow-md">
                  <span className="text-sm">{item.icon}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-sm font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
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
