import React from "react";
import dailyCommuteIcon from "../../../assets/icons/daily-commute-icon.svg";
import lateNightRidesIcon from "../../../assets/icons/late-night-icon.svg";
import weekendGetawaysIcon from "../../../assets/icons/weeken-getaway-icon.svg";
import specialEventsIcon from "../../../assets/icons/special-event-icon.svg";

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
    description:
      "Start your workday stress-free with a professional driver.",
    image: "/daily-commute.webp",
    icon: dailyCommuteIcon,
  },
  {
    id: 2,
    title: "Late Night Rides",
    description:
      "Safe and secure transportation at any hour of the night.",
    image: "/late-night-rides.webp",
    icon: lateNightRidesIcon,
  },
  {
    id: 3,
    title: "Weekend Getaways",
    description:
      "Enjoy family trips without the hassle of driving.",
    image: "/weekends-getaway.webp",
    icon: weekendGetawaysIcon,
  },
  {
    id: 4,
    title: "Special Events",
    description:
      "Weddings, parties, and celebrations made easy.",
    image: "/special-events.webp",
    icon: specialEventsIcon,
  },
];

const PerfectForEveryOccasion: React.FC = () => {
  return (
    <section className="bg-[#FFFFFF] md:bg-[#F1F9FB] px-5 lg:px-22 xl:px-36 py-10 pb-18">
      <div className="mx-auto text-center">
        {/* Section pill */}
        <span className="inline-block mb-6 px-6 ld:px-12 py-3 rounded-full bg-[#2F414F] text-white text-xl lg:text-2xl font-medium">
          Perfect For Every Occasion
        </span>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto mb-18 text-[#364153] text-base md:text-xl">
          Whether it&apos;s your daily commute or a special event, Feur has you
          covered with professional drivers ready to take you anywhere.
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {occasions.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-feur overflow-hidden text-left transition-transform duration-300 hover:-translate-y-1 shadow-md"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
  {/* Image */}
  <img
    src={item.image}
    alt={item.title}
    className="
      h-full w-full object-cover
      scale-105
      blur-[1px]
      brightness-90
      contrast-95
    "
  />

  {/* Soft overlay (this is key) */}
  <div className="absolute top-4 right-4 bg-white/90 rounded-full p-4 shadow-md">

  {/* Floating icon */}
  <div className="
  relative
    w-14 h-12
    rounded-2xl
    bg-[#3894A3]
    shadow-lg
    flex items-center justify-center
  ">
    <img src={item.icon} alt="" className="w-10 h-10 absolute top-2" />
  </div>
  </div>
</div>


              {/* Content */}
              <div className="p-4 lg:pb-14">
                <h3 className="text-sm font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

     <div className="mt-16">
     <p className="max-w-2xl mx-auto text-[#364153] text-xl mt-4">
        Ready to experience hassle-free transportation for any occasion?
        </p>

        {/* CTA */}
        <div className="mt-6">
          <button className="px-8 py-4 w-full sm:w-fit rounded-full bg-[#3894A3] text-white text-base font-medium shadow-md hover:opacity-90 transition">
            Get Started Today
          </button>
        </div>
     </div>
      </div>
    </section>
  );
};

export default PerfectForEveryOccasion;
