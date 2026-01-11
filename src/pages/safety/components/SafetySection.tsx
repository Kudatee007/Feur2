import React from "react";

type SafetyItem = {
  id: string;
  title: string;
  points: string[];
  image: string;
};

type SafetyCardProps = {
    item: SafetyItem;
    reverse?: boolean;
  };
  
const safetyItems: SafetyItem[] = [
  {
    id: "01",
    title: "Thorough Driver Screening",
    image: "/images/driver-screening.png",
    points: [
      "Comprehensive background checks including criminal records",
      "Valid driver’s license and professional certification",
      "Minimum of 3 years verified driving experience",
      "In-depth interviews to assess reliability",
    ],
  },
  {
    id: "02",
    title: "Real-Time Trip Monitoring",
    image: "/images/tracking.png",
    points: [
      "Live GPS tracking throughout every trip",
      "Safe and efficient route optimization",
      "Share trip details with trusted contacts",
      "Automatic alerts for route deviations",
    ],
  },
  {
    id: "03",
    title: "Passenger & Driver Identity Verification",
    image: "/images/identity.png",
    points: [
      "Mandatory ID verification for all users",
      "Photo verification to match real identities",
      "Two-factor authentication for added security",
      "Regular re-verification to maintain trust",
    ],
  },
  {
    id: "04",
    title: "Emergency Assistance",
    image: "/images/emergency.png",
    points: [
      "One-tap in-app panic button",
      "24/7 emergency response support",
      "Real-time location sharing during emergencies",
      "Dedicated safety team monitoring trips",
    ],
  },
];

const SafetyCard: React.FC<SafetyCardProps> = ({ item, reverse }) => {
    return (
      <div
        className={`flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-sm md:flex-row md:items-center ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <div className="md:w-1/2">
          <div className="relative overflow-hidden rounded-xl">
            <img
              src={item.image}
              alt={item.title}
              className="h-64 w-full object-cover"
            />
            <span className="absolute top-4 left-4 rounded-full bg-[#3894A3] px-3 py-1 text-xs font-medium text-white">
              {item.id}
            </span>
          </div>
        </div>
  
        {/* Content */}
        <div className="md:w-1/2">
          <h3 className="mb-4 text-xl font-semibold text-[#2F414F]">
            {item.title}
          </h3>
  
          <ul className="space-y-3">
            {item.points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-[#2F414F]/80">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#3894A3]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

const SafetySection: React.FC = () => {
  return (
    <section className="bg-[#F4FBFD] py-16 px-4 sm:px-8">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="inline-block mb-4 rounded-full bg-[#2F414F] px-6 py-2 text-sm text-white">
          How We Ensure Safety
        </span>
        <p className="text-[#2F414F]/80 text-base sm:text-lg">
          A comprehensive approach to safety that covers every step of your
          journey.
        </p>
      </div>

      {/* Safety Cards */}
      <div className="max-w-6xl mx-auto space-y-10">
        {safetyItems.map((item, index) => (
          <SafetyCard
            key={item.id}
            item={item}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default SafetySection;