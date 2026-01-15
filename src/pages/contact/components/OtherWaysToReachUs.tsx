import { Globe, MessageSquare, Headphones } from "lucide-react";

export default function OtherWaysToReachUs() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">
          Other Ways to Reach Us
        </p>
        <h3 className="text-lg font-medium text-slate-700 mb-10">
          Choose the option that works best for you
        </h3>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <SupportCard
            icon={<Globe size={20} />}
            title="Help Center"
            description="Browse our comprehensive help articles and guides"
            button="Visit Help Center"
          />

          <SupportCard
            icon={<MessageSquare size={20} />}
            title="Live Chat"
            description="Chat with our support team in real-time"
            button="Start Chat"
          />

          <SupportCard
            icon={<Headphones size={20} />}
            title="Schedule a Call"
            description="Book a time that works for you to speak with us"
            button="Book Now"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Card ---------- */

type SupportCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  button: string;
};

function SupportCard({
  icon,
  title,
  description,
  button,
}: SupportCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-lg p-8 text-center transition hover:shadow-xl">
      {/* Icon */}
      <div className="mx-auto mb-4 w-12 h-12 rounded-xl bg-gradient-to-br from-[#3894A3] to-[#056170] flex items-center justify-center text-white shadow-md">
        {icon}
      </div>

      {/* Title */}
      <h4 className="text-sm font-semibold text-slate-700 mb-2">
        {title}
      </h4>

      {/* Description */}
      <p className="text-xs text-slate-500 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Button */}
      <button className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-teal-600 text-teal-700 text-xs font-medium hover:bg-teal-50 transition">
        {button}
      </button>
    </div>
  );
}
