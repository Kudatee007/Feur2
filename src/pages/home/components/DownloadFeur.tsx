import React from "react";
import { Apple, Play } from "lucide-react";
import appPreview from "../../../assets/images/app-preview.png";

// const stats = [
//   { value: "50000+", label: "Active Users" },
//   { value: "1000+", label: "Verified Drivers" },
//   { value: "4.8★", label: "App Rating" },
// ];

const DownloadFeur: React.FC = () => {
  return (
    <section className="bg-[#2F8F9D] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center justify-between">
          {/* LEFT — Content */}
          <div className="text-center lg:text-left">
            {/* Icon */}
            <div className="flex justify-center lg:justify-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M12 3v12m0 0l4-4m-4 4l-4-4M5 21h14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
              Download the Feur App Today
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-white/90 text-base md:text-lg leading-relaxed">
              Available on iOS and Android. Get started in minutes and
              experience the convenience of having a professional driver at your
              fingertips.
            </p>

            {/* Store buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-black text-white shadow-md hover:opacity-90 transition">
                <Apple className="w-5 h-5" />
                <div className="flex flex-col leading-tight text-start">
                  <span className="text-xs font-normal">Download on the</span>
                  <span className="text-xl font-normal">App Store</span>
                </div>
              </button>

              <button className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-black text-white shadow-md hover:opacity-90 transition">
                <Play className="w-5 h-5" />
                <div className="flex flex-col leading-tight text-start">
                  <span className="text-xs font-normal">Get it on</span>
                  <span className="text-xl font-normal">Google Play</span>
                </div>
              </button>
            </div>

            {/* Stats */}
            {/* <div className="mt-10 flex justify-center lg:justify-start gap-8">
              {stats.map((item, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-white text-lg font-semibold">
                    {item.value}
                  </p>
                  <p className="text-white/80 text-xs mt-1">{item.label}</p>
                </div>
              ))}
            </div> */}
          </div>

          {/* RIGHT — Image */}
          <div className="flex justify-center lg:justify-end rounded-2xl bg-white/10 w-full sm:w-[320px] md:w-[360px] p-6">
            <img
              src={appPreview}
              alt="Feur app preview"
              className="w-44 sm:w-full h-auto"
            />
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadFeur;
