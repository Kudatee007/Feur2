import React from "react";

const SafetySupportCTA: React.FC = () => {
  return (
    <section className="bg-[#2F414F] py-20 px-4 sm:px-8">
      <div className="mx-auto max-w-3xl text-center text-white">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#3B95A3] shadow-[0_0_30px_rgba(59,149,163,0.5)]">
          <span className="text-xl">📞</span>
        </div>

        {/* Title */}
        <h2 className="mb-3 text-2xl font-semibold">
          Need Help? We’re Here 24/7
        </h2>

        {/* Description */}
        <p className="mb-8 text-sm sm:text-base text-white/80 leading-relaxed">
          Our dedicated safety team is available around the clock to assist
          with any concerns or emergencies.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="rounded-full bg-[#3B95A3] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#34818D]">
            Contact Safety Team
          </button>

          <button className="rounded-full border border-white/40 px-8 py-3 text-sm font-medium text-white transition hover:border-white hover:bg-white/10">
            Safety Resources
          </button>
        </div>
      </div>
    </section>
  );
};

export default SafetySupportCTA;