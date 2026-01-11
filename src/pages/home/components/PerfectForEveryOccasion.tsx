import React from "react";
import dailyCommuteImg from "../../../assets/images/perfect1.svg";
import lateNightRidesImg from "../../../assets/images/perfect2.svg";
import weekendGetawaysImg from "../../../assets/images/perfect3.svg";
import specialEventsImg from "../../../assets/images/perfect4.svg";  

type Occasion = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const occasions: Occasion[] = [
  {
    id: 1,
    title: "Daily Commute",
    description:
      "Start your workday stress-free with a professional driver.",
    image: dailyCommuteImg,
  },
  {
    id: 2,
    title: "Late Night Rides",
    description:
      "Safe and secure transportation at any hour of the night.",
    image: lateNightRidesImg,
  },
  {
    id: 3,
    title: "Weekend Getaways",
    description:
      "Enjoy family trips without the hassle of driving.",
    image: weekendGetawaysImg,
  },
  {
    id: 4,
    title: "Special Events",
    description:
      "Weddings, parties, and celebrations made easy.",
    image: specialEventsImg,
  },
];

const PerfectForEveryOccasion: React.FC = () => {
  return (
    <section className="bg-[#FFFFFF] md:bg-[#F1F9FB] px-5 lg:px-22 xl:px-36 py-16">
      <div className="max-w-7xl mx-auto text-center">
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
              className="bg-white rounded-2xl shadow-feur overflow-hidden text-left transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4">
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
        <p className="max-w-2xl mx-auto text-[#364153] text-base md:text-xl mt-4">
        Ready to experience hassle-free transportation for any occasion?
        </p>
        {/* CTA */}
        <div className="mt-6">
          <button className="px-8 py-3 rounded-full bg-[#3894A3] text-white text-sm font-medium shadow-md hover:opacity-90 transition">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default PerfectForEveryOccasion;
