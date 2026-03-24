import verifiedIcon from "../../../assets/icons/verifiedIcon.svg";
import trackingIcon from "../../../assets/icons/locationIcon.svg";
import emergencyIcon from "../../../assets/icons/emergencyIcon.svg";

type SafetyItem = {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
};

const safetyItems: SafetyItem[] = [
  {
    icon: verifiedIcon,
    iconAlt: "Verified driver icon",
    title: "Verified Drivers",
    description:
      "All drivers undergo comprehensive background checks, including criminal records, driving history, and professional references.",
  },
  {
    icon: trackingIcon,
    iconAlt: "Real-time tracking icon",
    title: "Real-Time Tracking",
    description:
      "Track your trip live and share your location with trusted contacts. Our GPS tracking ensures you're always connected.",
  },
  {
    icon: emergencyIcon,
    iconAlt: "Emergency support icon",
    title: "Emergency Support",
    description:
      "24/7 emergency assistance with one-tap access. Our support team is always ready to respond to safety concerns.",
  },
];

function SafetyCard({ icon, iconAlt, title, description }: SafetyItem) {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-sm
      transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-[#3894A3] flex items-center justify-center mb-5
        shadow-md transition-all duration-300 group-hover:bg-[#2F414F] group-hover:scale-110">
        <img src={icon} alt={iconAlt} className="w-6 h-6" />
      </div>

      <h3 className="text-lg font-semibold text-[#2F414F]
        transition-colors duration-300 group-hover:text-[#3894A3]">
        {title}
      </h3>

      <p className="mt-2 text-[#4A5565] text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function SafetyFeatures() {
  return (
    <section className="bg-[#F1F9FB] py-16">
      <div className="max-w-6xl mx-auto px-5">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-[#2F414F] text-white text-xl px-6 py-3 sm:px-18 rounded-full mb-4">
            Safety Features
          </span>
          <p className="text-[#364153] text-base md:text-xl">
            Multiple layers of protection designed to keep you safe at every
            stage of your journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {safetyItems.map((item, index) => (
            <SafetyCard key={index} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}