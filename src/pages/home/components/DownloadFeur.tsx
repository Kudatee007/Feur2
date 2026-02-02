import { Apple, Play } from "lucide-react";
import downloadFeurIcon from "../../../assets/icons/download-feur-icon.svg";

const DownloadFeur = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#3894A3] to-[#1F6F7A] py-20 px-4">
      {/* subtle background glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
            {/* Icon */}
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-12 rounded-xl bg-linear-to-br from-[#2F414F] to-[#000E1C] flex items-center justify-center">
            <img src={downloadFeurIcon} alt="download" className="h-10 w-10"/>
              </div>
            </div>
        <div className="flex flex-col lg:flex-row items-center justify-around gap-12 lg:gap-0">
          {/* LEFT — Content */}
          <div className="max-w-xl text-center lg:text-left">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
              Download the Feur App Today
            </h2>

            {/* Description */}
            <p className="mt-4 text-white/90 text-base md:text-lg leading-relaxed">
              Available on iOS and Android. Get started in minutes and enjoy the
              freedom of having a professional driver at your fingertips.
            </p>

            {/* Store buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-black text-white shadow-lg hover:opacity-90 transition">
                <Apple className="w-5 h-5" />
                <div className="flex flex-col leading-tight text-left">
                  <span className="text-xs">Download on the</span>
                  <span className="text-base font-medium">App Store</span>
                </div>
              </button>

              <button className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl bg-black text-white shadow-lg hover:opacity-90 transition">
                <Play className="w-5 h-5" />
                <div className="flex flex-col leading-tight text-left">
                  <span className="text-xs">Get it on</span>
                  <span className="text-base font-medium">Google Play</span>
                </div>
              </button>
            </div>
          </div>

          {/* RIGHT — App Preview */}
          <div className="relative flex justify-center lg:justify-end bg-linear-to-br from-[#3894A3] to-[#1F6F7A] py-4 px-22 rounded-3xl shadow-2xl w-full max-w-lg">
            {/* glow behind phone */}
            <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl scale-90" />

            <img
              src="/feurAppPreview.png"
              alt="Feur app preview"
              className="relative w-62 h-70 drop-shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadFeur;
