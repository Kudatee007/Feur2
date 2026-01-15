import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard
            icon={<Mail size={20} />}
            title="Email Us"
            main="support@feur.com"
            sub="We’ll respond within 24 hours"
          />

          <InfoCard
            icon={<Phone size={20} />}
            title="Call Us"
            main="+234 800 123 4567"
            sub="Mon–Fri from 8am to 6pm"
          />

          <InfoCard
            icon={<MapPin size={20} />}
            title="Visit Us"
            main="Lagos, Nigeria"
            sub="Come say hello at our HQ"
          />

          <InfoCard
            icon={<Clock size={20} />}
            title="Working Hours"
            main="8:00 AM – 6:00 PM"
            sub="Monday to Friday"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Card Component ---------- */

type InfoCardProps = {
  icon: React.ReactNode;
  title: string;
  main: string;
  sub: string;
};

function InfoCard({ icon, title, main, sub }: InfoCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-lg p-6 text-center transition hover:shadow-xl">
      {/* Icon */}
      <div className="mx-auto mb-4 w-14 h-12 rounded-xl bg-gradient-to-br from-[#3894A3] to-[#056170] flex items-center justify-center text-white shadow-md">
        {icon}
      </div>

      {/* Title */}
      <h4 className="text-sm font-medium text-slate-700 mb-1">{title}</h4>

      {/* Main Info */}
      <p className="text-sm font-semibold text-teal-700 mb-1">{main}</p>

      {/* Sub Text */}
      <p className="text-xs text-slate-500">{sub}</p>
    </div>
  );
}
