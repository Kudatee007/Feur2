const features = [
    {
      id: 1,
      title: "Flexible Booking",
      image: "/images/flexible-booking.jpg",
      points: [
        "Instant booking in under 60 seconds",
        "Schedule rides up to 30 days in advance",
        "Recurring bookings for regular needs",
        "Cancel or reschedule easily",
      ],
    },
    {
      id: 2,
      title: "Professional Drivers",
      image: "/images/professional-drivers.jpg",
      points: [
        "Comprehensive background checks",
        "Minimum 3 years professional experience",
        "Ongoing training and quality assurance",
        "Highly rated by customers",
      ],
    },
    {
      id: 3,
      title: "Real-Time Tracking",
      image: "/images/real-time-tracking.jpg",
      points: [
        "Live GPS tracking during the entire trip",
        "Share trip details with trusted contacts",
        "Estimated arrival time updates",
        "Trip history and route playback",
      ],
    },
    {
      id: 4,
      title: "Transparent Pricing",
      image: "/images/transparent-pricing.jpg",
      points: [
        "Clear pricing before booking",
        "Fair and negotiable fares",
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
            <span className="inline-block bg-[#2F414F] text-white text-xl px-4 py-3 sm:px-18 rounded-full mb-4">
              Key Features
            </span>
            <p className="text-[#2F414F] max-w-xl mx-auto text-xl">
              Everything you need for a seamless, safe, and convenient driving experience.
            </p>
          </div>
  
          {/* Features */}
          <div className="space-y-24">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={index % 2 !== 0 ? "md:order-2" : ""}>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
  
                {/* Content */}
                <div>
                  <h3 className="text-2xl font-semibold text-[#2F414F] mb-4">
                    {feature.title}
                  </h3>
  
                  <ul className="space-y-3">
                    {feature.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#2F414F]">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#3894A3]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default KeyFeatures;  