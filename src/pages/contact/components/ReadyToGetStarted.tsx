export default function ReadyToGetStarted() {
  return (
    <section className="bg-[#3894A3] py-20 px-14">
      <div className="max-w-4xl mx-auto text-center text-white">
        <img src="/ready.svg" alt="ready" className="w-[84px] h-[62px] mx-auto mb-[40px]" />
        <h5 className="text-2xl md:text-base md:font-medium uppercase tracking-wide text-white mb-5">
          Ready to Get Started?
        </h5>

        {/* Main Message */}
        <p className="text-lg sm:text-xl mb-4">
          Download the Feur app today and experience the convenience of hiring a
          professional driver anytime, anywhere.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary CTA */}
          <button className="w-full md:max-w-[170px] py-4 rounded-full bg-[#3894A3] text-white text-base shadow-md hover:bg-teal-700 transition">
            Download App
          </button>

          {/* Secondary CTA */}
          <button className="w-full md:max-w-[170px] py-4 rounded-full border-2 border-white text-white text-base hover:bg-white/10 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
