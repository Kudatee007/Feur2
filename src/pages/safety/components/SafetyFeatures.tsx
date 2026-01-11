import { ShieldCheck, MapPin, Bell } from "lucide-react";

type SafetyItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const safetyItems: SafetyItem[] = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: "Verified Drivers",
    description:
      "All drivers undergo comprehensive background checks, including criminal records, driving history, and professional references.",
  },
  {
    icon: <MapPin className="w-6 h-6 text-white" />,
    title: "Real-Time Tracking",
    description:
      "Track your trip live and share your location with trusted contacts. Our GPS tracking ensures you're always connected.",
  },
  {
    icon: <Bell className="w-6 h-6 text-white" />,
    title: "Emergency Support",
    description:
      "24/7 emergency assistance with one-tap access. Our support team is always ready to respond to safety concerns.",
  },
];

function SafetyCard({ icon, title, description }: Props) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-lg bg-[#3894A3] flex items-center justify-center mb-4">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>

      <p className="mt-2 text-slate-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function SafetyFeatures() {
  return (
    <section className="bg-[#F1F9FB] py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block bg-[#2F414F] text-white text-xl px-4 py-3 sm:px-18 rounded-full">
            Safety Features
          </span>

          <p className="mt-4 text-slate-600 text-xl">
            Multiple layers of protection designed to keep you safe at every
            stage of your journey.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {safetyItems.map((item, index) => (
            <SafetyCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
