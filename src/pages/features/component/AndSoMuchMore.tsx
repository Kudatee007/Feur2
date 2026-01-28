import safetyIcon from "../../../assets/icons/safety-first.svg";
import smartIcon from "../../../assets/icons/smart-notification.svg";
import availabilityIcon from "../../../assets/icons/availability.svg";
import ratingsIcon from "../../../assets/icons/driver-rating.svg";
import affordabilityIcon from "../../../assets/icons/affordability.svg";
import easyAppIcon from "../../../assets/icons/easy-to-use.svg";

type Feature = {
  title: string;
  description: string;
  icon: string;
  iconBg: string;
};

const moreFeatures: Feature[] = [
  {
    title: "Safety First",
    description: "24/7 support and emergency assistance",
    icon: safetyIcon,
    iconBg: "bg-gradient-to-br from-[#2F8F9D] to-[#1F6F7A] shadow-[#2F8F9D]/40",
  },
  {
    title: "Smart Notifications",
    description: "Stay updated at every step",
    icon: smartIcon,
    iconBg: "bg-gradient-to-br from-[#1E293B] to-[#0F172A] shadow-black/40",
  },
  {
    title: "Availability",
    description: "Drivers available 24/7",
    icon: availabilityIcon,
    iconBg: "bg-gradient-to-br from-[#3BA6B0] to-[#2F8F9D] shadow-[#3BA6B0]/40",
  },
  {
    title: "Driver Ratings",
    description: "Rate and review every trip",
    icon: ratingsIcon,
    iconBg: "bg-gradient-to-br from-[#1E293B] to-[#020617] shadow-black/40",
  },
  {
    title: "Affordability",
    description: "Affordable pricing and secure in-app transactions",
    icon: affordabilityIcon,
    iconBg: "bg-gradient-to-br from-[#2F8F9D] to-[#0E5F6F] shadow-[#2F8F9D]/40",
  },
  {
    title: "Easy-to-Use App",
    description: "Intuitive interface for all ages",
    icon: easyAppIcon,
    iconBg: "bg-gradient-to-br from-[#1E293B] to-[#020617] shadow-black/40",
  },
];

const AndSoMuchMore = () => {
  return (
    <section className="bg-[#F1F9FB] py-20">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-semibold text-[#2F414F] mb-3">
            And So Much More
          </h2>
          <p className="text-[#5F7282] max-w-md mx-auto">
            Additional features designed to enhance your experience.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {moreFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div
                className={`
    inline-flex items-center justify-center
    w-14 h-12 rounded-xl mb-6
    ${feature.iconBg}
    shadow-lg
    transition-transform duration-300
    group-hover:-translate-y-0.5
  `}
              >
                <img
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  className="w-6 h-6"
                />
              </div>

              {/* Content */}
              <h3 className="text-lg font-medium text-[#2F414F] mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-[#5F7282] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AndSoMuchMore;
