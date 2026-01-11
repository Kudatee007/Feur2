export default function ReadyToGetStarted() {
  return (
    <section className="bg-[#2F414F] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center text-white">
        {/* Eyebrow */}
        <p className="text-xs uppercase tracking-wide text-slate-300 mb-2">
          Ready to Get Started?
        </p>

        {/* Main Message */}
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">
          Download the Feur app today and experience the convenience of hiring a
          professional driver anytime, anywhere.
        </h2>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary CTA */}
          <button className="px-6 py-3 rounded-full bg-teal-600 text-white text-sm font-medium shadow-md hover:bg-teal-700 transition">
            Download App
          </button>

          {/* Secondary CTA */}
          <button className="px-6 py-3 rounded-full border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
