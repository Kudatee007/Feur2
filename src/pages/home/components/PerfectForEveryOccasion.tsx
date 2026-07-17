import React from "react";
import dailyCommuteIcon from "../../../assets/icons/daily-commute-icon.svg";
import lateNightRidesIcon from "../../../assets/icons/late-night-icon.svg";
import weekendGetawaysIcon from "../../../assets/icons/weeken-getaway-icon.svg";
import specialEventsIcon from "../../../assets/icons/special-event-icon.svg";
import dailyCommuteImage from "../../../assets/images/daily-commute.svg";
import lateNightRidesImage from "../../../assets/images/late-night-rides.svg";
import weekendGetawaysImage from "../../../assets/images/weekend-getaways.svg";
import specialEventsImage from "../../../assets/images/special-events.svg";

type Occasion = {
  id: number;
  title: string;
  description: string;
  image: string;
  icon?: string;
};

const occasions: Occasion[] = [
  {
    id: 1,
    title: "Daily Commute",
    description: "Start your workday stress-free with a professional driver.",
    image: dailyCommuteImage,
    icon: dailyCommuteIcon,
  },
  {
    id: 2,
    title: "Late Night Rides",
    description: "Safe and secure transportation at any hour of the night.",
    image: lateNightRidesImage,
    icon: lateNightRidesIcon,
  },
  {
    id: 3,
    title: "Weekend Getaways",
    description: "Enjoy family trips without the hassle of driving.",
    image: weekendGetawaysImage,
    icon: weekendGetawaysIcon,
  },
  {
    id: 4,
    title: "Special Events",
    description: "Weddings, parties, and celebrations made easy.",
    image: specialEventsImage,
    icon: specialEventsIcon,
  },
];

const PerfectForEveryOccasion: React.FC = () => {
  return (
    <section className="bg-white md:bg-[#F1F9FB] px-5 lg:px-22 xl:px-36 py-10 pb-18">
      <div className="mx-auto text-center">

        {/* Pill */}
        <span className="inline-block mb-6 px-6 py-3 rounded-full bg-[#2F414F] text-white text-xl font-medium">
          Perfect For Every Occasion
        </span>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto mb-12 text-[#364153] text-base md:text-xl">
          Whether it&apos;s your daily commute or a special event, Feur has you
          covered with professional drivers ready to take you anywhere.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {occasions.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow-md overflow-hidden text-left
                transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-38 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover scale-105 brightness-90
                    transition-transform duration-500 group-hover:scale-110"
                />

                {/* Icon badge */}
                {item.icon && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-md
                    transition-transform duration-300 group-hover:scale-110">
                    <div className="w-10 h-10 rounded-xl bg-[#3894A3] flex items-center justify-center">
                      <img src={item.icon} alt="" className="w-6 h-6" />
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 pb-6">
                <h3 className="text-base font-semibold text-[#2F414F]
                  transition-colors duration-300 group-hover:text-[#3894A3]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm text-[#4A5565] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
          <p className="max-w-2xl mx-auto text-[#364153] text-xl">
            Ready to experience hassle-free transportation for any occasion?
          </p>
          <div className="mt-6">
            <button className="px-8 py-4 w-full sm:w-fit rounded-full bg-[#3894A3]
              hover:bg-[#2F414F] active:scale-95
              text-white text-base font-medium shadow-md
              transition-all duration-300 hover:shadow-lg">
              Get Started Today
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PerfectForEveryOccasion;