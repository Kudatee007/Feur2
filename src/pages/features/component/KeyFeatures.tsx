import { CheckCircle } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Flexible Booking",
    desc: "Book instantly or schedule ahead for any occasion. Whether you need a driver in 5 minutes or 5 days, Feur has you covered.",
    image: "/flexibleBook.svg",
    points: [
      "Instant booking in under 60 seconds",
      "Schedule rides up to 30 days in advance",
      "Half-day and full day instant or scheduled booking",
      "Recurring bookings for regular needs",
      "Cancel or reschedule easily",
    ],
  },
  {
    id: 2,
    title: "Professional Drivers",
    desc: "Every driver is thoroughly vetted, trained, and professional. Experience service that exceeds expectations every time.",
    image: "/features-professional-0driver.svg",
    points: [
      "Comprehensive background checks",
      "Minimum 3 years professional experience",
      "Ongoing training and quality assurance",
      "Rated 4.8+ stars on average",
    ],
  },
  {
    id: 3,
    title: "Real-Time Tracking",
    desc: "Know exactly where your driver is with live GPS tracking. Share your trip with loved ones for added peace of mind.",
    image: "/realTime.svg",
    points: [
      "Live GPS tracking during the entire trip",
      "Share trip details with trusted contacts",
      "Estimated time of arrival updates",
      "Trip history and route playback",
    ],
  },
  {
    id: 4,
    title: "Price Bargaining",
    desc: "Negotiable and fair pricing. See the exact cost upfront, negotiate and pay securely through the app.",
    image: "/priceBargain.svg",
    points: [
      "Clear pricing before you book",
      "Bargain fare",
      "Secure payment options",
      "Automatic receipts and invoices",
    ],
  },
];

const KeyFeatures = () => {
  return (
    <section className="bg-[#F1F9FB] py-16">
      <div className="max-w-6xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#2F414F] text-white text-xl px-6 py-3 sm:px-18 rounded-full mb-4">
            Key Features
          </span>
          <p className="text-[#2F414F] max-w-xl mx-auto text-xl">
            Everything you need for a seamless, safe, and convenient driving experience.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-20">
          {features.map((feature, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={feature.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 items-center`}
              >
                {/* Image */}
                <div className={`group ${isReversed ? "md:order-2" : ""}`}>
                  <div className="rounded-2xl overflow-hidden
                    transition-transform duration-500 hover:scale-[1.02]">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={isReversed ? "md:order-1" : ""}>
                  {/* Animated accent bar */}
                  <div className="mb-4 h-1.5 w-12 bg-[#3894A3] rounded-full
                    transition-all duration-500 hover:w-24" />

                  <h3 className="text-2xl font-semibold text-[#2F414F] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-base text-[#364153] mb-5 leading-relaxed">
                    {feature.desc}
                  </p>

                  <ul className="space-y-3">
                    {feature.points.map((point, i) => (
                      <li
                        key={i}
                        className="group/item flex items-start gap-3 text-[#2F414F]
                          bg-white/60 px-4 py-3 rounded-xl
                          transition-all duration-300
                          hover:bg-white hover:shadow-sm hover:-translate-y-0.5"
                      >
                        <CheckCircle className="w-5 h-5 text-[#3894A3] mt-0.5 shrink-0
                          transition-transform duration-300 group-hover/item:scale-110" />
                        <span className="text-base">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;