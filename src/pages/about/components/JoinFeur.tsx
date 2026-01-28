import React from "react";
import joinIcon from "../../../assets/icons/joinAbt.svg";

const JoinFeur: React.FC = () => {
  return (
    <section className="relative bg-[#3894A3] py-24 px-4 overflow-hidden">
      {/* subtle background glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#2F8F9D]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2F8F9D]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center text-white">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-16 rounded-2xl bg-[#2F414F] flex items-center justify-center shadow-lg">
          <img src={joinIcon} alt="join" className="w-10 h-10"/>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold">
          Join the Feur Revolution
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-2xl mx-auto text-white/80 text-base md:text-lg leading-relaxed">
          Whether you&apos;re a car owner looking for reliable drivers or a
          professional driver seeking new opportunities, we invite you to be
          part of Africa&apos;s mobility transformation.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 rounded-full bg-[#2F8F9D] text-white text-sm font-medium shadow-md hover:opacity-90 transition">
            Download the App
          </button>

          <button className="px-8 py-3 rounded-full border border-white text-white text-sm font-medium hover:bg-white/10 transition">
            Become a Driver
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinFeur;
