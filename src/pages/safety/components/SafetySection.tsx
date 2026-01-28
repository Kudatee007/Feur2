import { CheckCircle } from "lucide-react";
import React from "react";
import driverScreen from "../../../assets/images/driverScreen.svg";
import realTimeTracking from "../../../assets/images/realTime.svg";
import identityVerification from "../../../assets/images/passDriver.svg";
import emergencyAssistance from "../../../assets/images/emergencyAssit.svg";
import contactlessPayment from "../../../assets/images/contact-less.svg";
import ratingsSystem from "../../../assets/images/dri-ver.svg";
import insuranceProtection from "../../../assets/images/insureProtection.svg";

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
    image: driverScreen,
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
    image: realTimeTracking,
    points: [
      "GPS tracking for every trip with live location updates",
      "Route optimization to ensure the safest and most efficient path",
      "Ability to share trip details with friends and family in real-time",
      "Automated alerts if a trip deviates from the expected route",
    ],
  },
  {
    id: "03",
    title: "Passenger & Driver Identity Verification",
    image: identityVerification,
    points: [
      "Mandatory ID verification for all platform users",
      "Photo verification to match profiles with actual identity",
      "Two-factor authentication for enhanced account security",
      "Regular re-verification to maintain platform integrity",
    ],
  },
  {
    id: "04",
    title: "Emergency Assistance",
    image: emergencyAssistance,
    points: [
      "In-app panic button with direct connection to emergency services",
      "24/7 customer support team trained in crisis management",
      "Automatic location sharing with authorities when emergency is activated",
      "Dedicated safety team monitoring flagged trips in real-time",
    ],
  },
  {
    id: "05",
    title: "Contactless & Affordable Payments",
    image: contactlessPayment,
    points: [
      "End-to-end encrypted payment processing",
      "Multiple payment options including mobile money and cards",
      "No cash handling required, reducing robbery risk",
      "Automated payment receipts for complete transparency",
    ],
  },
  {
    id: "06",
    title: "Driver & Passenger Ratings System",
    image: ratingsSystem,
    points: [
      "Mutual rating system to maintain accountability",
      "Detailed trip reviews help identify and address concerns",
      "Low-rated drivers are automatically flagged for review",
      "Community-driven safety through shared feedback",
    ],
  },
  {
    id: "07",
    title: "Insurance Protection",
    image: insuranceProtection,
    points: [
      "Comprehensive insurance coverage for all trips",
      "Comprehensive insurance coverage for all trips",
      "Medical coverage in case of accidents during trips",
      "Quick claims processing for peace of mind",
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
        <div className="relative overflow-hidden rounded-xl h-88">
        <span className="font-medium text-white/40 absolute top-4 left-4 z-10 text-6xl">
          {item.id}
        </span>
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="md:w-1/2">
        <span className="rounded-full bg-[#3894A3] px-3 py-1 text-xs font-medium text-white mb-4 inline-block">
          {item.id}
        </span>
        <h3 className="mb-4 text-xl font-semibold text-[#2F414F]">
          {item.title}
        </h3>

        <ul className="space-y-3">
          {item.points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-3 text-[#2F414F]/80">
              {/* <span className="mt-1 h-2 w-2 rounded-full bg-[#3894A3]" /> */}
              <CheckCircle className="w-5 h-5 text-[#3894A3] mt-0.5 shrink-0" />
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
        <span className="inline-block bg-[#2F414F] text-white text-xl px-4 py-3 sm:px-18 rounded-full mb-6">
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
          <SafetyCard key={item.id} item={item} reverse={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
};

export default SafetySection;
