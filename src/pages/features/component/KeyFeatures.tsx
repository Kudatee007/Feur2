import {CheckCircle} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Flexible Booking",
    desc: "Book instantly or schedule ahead for any occasion. Whether you need a driver in 5 minutes or 5 days, Feur has you covered.",
    image: "/flexibleBook.webp",
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
    image: "/profDrive.svg",
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
    image: "/realTime.webp",
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
    image: "/priceBargain.webp",
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
          <span className="inline-block bg-[#2F414F] text-white text-xl px-4 py-3 sm:px-18 rounded-full mb-4">
            Key Features
          </span>
          <p className="text-[#2F414F] max-w-xl mx-auto text-xl">
            Everything you need for a seamless, safe, and convenient driving
            experience.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-12 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className={index % 2 !== 0 ? "md:order-2" : ""}>
                {/* <div className="rounded-2xl overflow-hidden shadow-lg"> */}
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                {/* </div> */}
              </div>

              {/* Content */}
              <div>
              <div className="mb-4 h-2 w-22 bg-[#3894A3] rounded-full" />
                <h3 className="text-2xl font-semibold text-[#2F414F] mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg font-normal text-[#364153] mb-4">
                  {feature.desc}
                </p>

                <ul className="space-y-3">
                  {feature.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[#2F414F]"
                    >
                      <CheckCircle className="w-5 h-5 text-[#3894A3] mt-0.5 shrink-0" />
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
