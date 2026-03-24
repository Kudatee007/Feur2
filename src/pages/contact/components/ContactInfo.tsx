import React from "react";
import { Mail, Phone, MapPin, Clock, type LucideProps } from "lucide-react";

type InfoCardProps = {
  icon: React.ComponentType<LucideProps>;
  title: string;
  main: string;
  sub: string;
};

function InfoCard({ icon: Icon, title, main, sub }: InfoCardProps) {
  return (
    <div className="group bg-white rounded-xl border border-slate-100 shadow-lg p-6 text-center
      transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

      {/* Icon */}
      <div className="mx-auto mb-4 w-14 h-12 rounded-xl
        bg-linear-to-br from-[#3894A3] to-[#056170]
        flex items-center justify-center text-white shadow-md
        transition-transform duration-300 group-hover:scale-110">
        <Icon size={20} />
      </div>

      {/* Title */}
      <h4 className="text-sm font-medium text-slate-500 mb-1">{title}</h4>

      {/* Main Info */}
      <p className="text-sm font-semibold text-[#3894A3] mb-1
        transition-colors duration-300 group-hover:text-[#056170]">
        {main}
      </p>

      {/* Sub Text */}
      <p className="text-xs text-slate-400">{sub}</p>
    </div>
  );
}

export default function ContactInfo() {
  return (
    <section className="bg-white py-16 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard
            icon={Mail}
            title="Email Us"
            main="support@feur.com"
            sub="We'll respond within 24 hours"
          />
          <InfoCard
            icon={Phone}
            title="Call Us"
            main="+234 800 123 4567"
            sub="Mon–Fri from 8am to 6pm"
          />
          <InfoCard
            icon={MapPin}
            title="Visit Us"
            main="Lagos, Nigeria"
            sub="Come say hello at our HQ"
          />
          <InfoCard
            icon={Clock}
            title="Working Hours"
            main="8:00 AM – 6:00 PM"
            sub="Monday to Friday"
          />
        </div>
      </div>
    </section>
  );
}