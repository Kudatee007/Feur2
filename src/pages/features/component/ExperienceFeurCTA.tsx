const ExperienceFeurCTA = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#2F8F9D] to-[#1F6F7A] py-20">
      <div className="max-w-4xl mx-auto px-5 text-center text-white">
        {/* Icon */}
        <div className="mx-auto mb-6 w-14 h-14 flex items-center justify-center rounded-xl bg-white/20 backdrop-blur">
          ⚡
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Experience the Feur Difference Today
        </h2>

        {/* Subtext */}
        <p className="text-white/90 max-w-xl mx-auto mb-10 leading-relaxed">
          Join thousands of satisfied customers who have made Feur their go-to
          solution for professional driving services.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#1F6F7A] font-medium shadow hover:opacity-90 transition">
            Download the App
          </button>

          <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/60 text-white hover:bg-white/10 transition">
            Become a Driver
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceFeurCTA;