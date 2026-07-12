import { AiFillCheckCircle } from "react-icons/ai";

const features = [
  {
    id: 1,
    label: "01",
    tag: "EARN MORE",
    title: "Keep 65% of Every Trip",
    desc: "Earn more from every completed booking while Feur handles customer acquisition, bookings, and platform support. You focus on driving.",
    image: "/features-earn-more.png",
    points: ["65% of every fare is yours", "No customer-hunting or marketing"],
  },
  {
    id: 2,
    label: "02",
    tag: "WORK YOUR WAY",
    title: "Flexible Work Schedule",
    desc: "Choose when you're available and accept the bookings that fit your life. Drive full-time or pick up extra income on the side.",
    image: "/features-flexible-schedule.jpg",
    points: ["Set your own availability", "Accept only the trips you want"],
  },
  {
    id: 3,
    label: "03",
    tag: "GROW YOUR NAME",
    title: "Build Your Professional Reputation",
    desc: "Receive ratings and reviews from customers and establish yourself as a trusted, in-demand professional driver.",
    image: "/features-reputation.jpg",
    points: ["Ratings build your profile", "Top drivers get more bookings"],
  },
  {
    id: 4,
    label: "04",
    tag: "DRIVE PROTECTED",
    title: "Safety and Support",
    desc: "Feur prioritizes safety with driver verification, trip monitoring, and responsive support — a safer experience for you and your customers.",
    image: "/features-safety.jpg",
    points: [
      "Verified drivers & monitored trips",
      "Support whenever you need it",
    ],
  },
];

const ownershipCosts = [
  {
    id: 1,
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 2h8l2-2zM13 16l2-5h3l2 5H13z"
        />
      </svg>
    ),
    title: "Car purchase costs",
    desc: "No need to have a car",
  },
  {
    id: 2,
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
    title: "Vehicle servicing costs",
    desc: "No need to spend money on servicing a vehicle",
  },
  {
    id: 3,
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Maintenance expenses",
    desc: "No need for car maintenance",
  },
  {
    id: 4,
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 10h2l1 2h13l1-3H6M7 17a1 1 0 100 2 1 1 0 000-2zm10 0a1 1 0 100 2 1 1 0 000-2z"
        />
      </svg>
    ),
    title: "Fuel for your vehicle",
    desc: "No need to buy fuel",
  },
  {
    id: 5,
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Personal vehicle insurance",
    desc: "No need for personal vehicle insurance",
  },
  {
    id: 6,
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
        />
      </svg>
    ),
    title: "Depreciation worries",
    desc: "No more worrying about depreciating of your car and income",
  },
];

const earnWays = [
  {
    id: 1,
    image: "/earn-daily-transport.jpg",
    title: "Daily transportation",
    desc: "Everyday commutes, errands and city runs.",
  },
  {
    id: 2,
    image: "/earn-driver-hire.jpg",
    title: "Daily driver hire packages",
    desc: "Half-day and full-day hire bookings.",
  },
  {
    id: 3,
    image: "/earn-scheduled.jpg",
    title: "Scheduled bookings",
    desc: "Pre-planned trips, booked in advance.",
  },
];

const qualifications = [
  "Have a valid driver's licence",
  "Have driving experience",
  "Are professional and courteous",
  "Can communicate effectively with customers",
  "Are willing to complete Feur's verification process",
];

const ForDrivers = () => {
  return (
    <div>
      {/* hero section */}
      <section
        className="text-center flex flex-col lg:flex-row items-center lg:justify-between py-10 px-4 sm:px-8 lg:px-22 gap-8
           bg-cover bg-center bg-no-repeat min-h-[92vh]
           bg-[linear-gradient(rgba(27,35,49,0.45),rgba(27,45,49,0.45)),url('/forDrivers.webp')]"
      >
        <div className="space-y-6 flex flex-col items-center lg:items-start lg:max-w-4xl px-4">
          <span className="text-[12px] font-bold text-[#5EA9B5]">
            DRIVE WITH FEUR
          </span>
          <h1 className="text-[32px] sm:text-5xl lg:text-[73px] text-white font-bold lg:text-start leading-10 sm:leading-[60px] lg:leading-[90px]">
            Turn Your Driving Skills Into Income
          </h1>
          <p className="text-[#F1F9FB] text-[17px] sm:text-2xl font-normal lg:text-start mb-[18px] leading-6 lg:leading-12">
            You don't need to own a car to earn with Feur.
          </p>
          <p className="text-[#C7DAD4] text-sm sm:text-lg  font-normal lg:text-start mb-4 leading-7 ">
            Whether you’re looking for full-time work or additional income, Feur
            gives you access to customers while you focus on what you do best —
            driving.
          </p>

          <button className="text-white text-base bg-[#3894A3] mt-4 h-14 rounded-full flex items-center justify-center gap-2 w-full max-w-[338px] hover:bg-[#327d8a] transition-colors">
            Become a Driver →
          </button>
        </div>

        <img
          src="/for-drivers.jpg"
          alt="Driver holding steering wheel and smiling"
          className="w-full max-w-60 sm:w-full sm:min-w-[490px] sm:h-full rounded-xl self-center"
        />
      </section>

      {/* why join feur */}
      <section className="bg-[#F1F9FB] py-16">
        <div className="max-w-6xl mx-auto px-5">
          {/* Header */}
          <div className="mb-8 md:mb-12 xl:mb-16 text-start sm:text-center">
            <span className="inline-block bg-[#2F414F] text-white text-[20px] sm:text-[26px] text-xl px-6 py-3 sm:px-[34px] sm:py-3.5 rounded-full mb-4">
              Why Join Feur?
            </span>
            <p className="text-[#364153] mx-auto text-base sm:text-xl leading-[22px]">
              Real reasons drivers choose Feur, no vehicle to own, total
              flexibility, and more of every fare in your pocket.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-10">
            {features.map((feature, index) => {
              const isReversed = index % 2 !== 0;
              return (
                <div
                  key={feature.id}
                  className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-20 items-center"
                >
                  {/* Image */}
                  <div className={`${isReversed ? "md:order-2" : ""}`}>
                    <div className="rounded-2xl overflow-hidden aspect-4/3 w-full">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`${isReversed ? "md:order-1" : ""} space-y-3`}
                  >
                    {/* Numbered pill + tag */}
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-12 h-8 rounded-full bg-[#3894A3] text-white text-xs font-bold shrink-0">
                        {feature.label}
                      </span>
                      <span className="text-lg font-bold tracking-widest text-[#3894A3] uppercase">
                        {feature.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-[22px] lg:text-[32px] font-bold text-[#2F414F] leading-tight">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-[#6B7280] leading-relaxed">
                      {feature.desc}
                    </p>

                    {/* Points */}
                    <ul className="space-y-3 pt-1">
                      {feature.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-[#2F414F]"
                        >
                          <span className="flex items-center justify-center w-5 h-5 rounded-full border-[1.67px] border-[#3894A3] shrink-0">
                            <svg
                              className="w-3 h-3 text-[#3894A3]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          <span className="text-[15px] font-medium">
                            {point}
                          </span>
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

      {/* Zero Costs of Ownership */}
      <section className="bg-[#2F414F] py-12 px-5">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <p className="text-xs xl:text-base font-bold tracking-widest text-[#5EC6CF] uppercase mb-3">
              NO CAR REQUIRED
            </p>
            <h2 className="text-[27px] sm:text-3xl xl:text-[40px] font-bold text-white mb-3">
              Zero Costs of Ownership
            </h2>
            <p className="text-[#C7DAD4] text-[15px] xl:text-[19px] max-w-3xl mx-auto leading-relaxed">
              You drive the customer's car - so every cost of owning a vehicle
              is crossed off your list. Keep your earnings, not the expenses.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-x-8 xl:gap-y-11 mb-12">
            {ownershipCosts.map((item) => (
              <div
                key={item.id}
                className="bg-[#38505F] border border-[#46606F] rounded-2xl p-5 flex flex-col gap-2.5 sm:gap-4 items-start"
              >
                {/* Icon + NO badge */}
                <div className="flex items-end justify-between w-full">
                  <div className="w-17 h-13 rounded-xl bg-linear-to-br from-[#3894A3] to-[#056170] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="hidden sm:flex items-center gap-1 bg-[#2F414F] text-[#5EE0C0] text-[14px] font-semibold px-2.5 py-1 rounded-full">
                    <svg
                      className="w-3 h-3 text-[#5EE0C0]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    ₦O
                  </span>
                </div>

                {/* Text */}
                <div>
                  <p className="text-[#9FB3BF] md:text-white w-[14ch] sm:w-full line-through font-semibold text-sm sm:text-base xl:text-[19px] mb-1">
                    {item.title}
                  </p>
                  <p className="text-[#BFE0E4] text-[18px] leading-relaxed flex items-center gap-1.5 sm:hidden">
                    <AiFillCheckCircle />
                    <span className="text-[13px]">You pay ₦0</span>
                  </p>
                  <p className="text-[#9FB4BF] text-[13px] leading-relaxed hidden sm:flex">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <button className="bg-[#3894A3] hover:bg-[#2d7a8a] text-white font-semibold px-6 py-4 rounded-full transition-colors text-base">
              Just drive and earn.
            </button>
          </div>
        </div>
      </section>

      {/* Multiple Ways to Earn */}
      <section className="py-12 px-6 bg-[#F1F9FB]">
        <div className="max-w-5xl mx-auto">
          {/* Header pill + title + desc */}
          <div className="mb-7">
            <div className="inline-flex items-center bg-[#2F414F] text-white text-lg xl:text-[26px] font-semibold px-6 py-2.5 xl:px-[34px] xl:py-3.5 rounded-full mb-3 md:mb-6">
              Multiple Ways to Earn
            </div>
            <p className="text-[#4B5563] text-base xl:text-xl max-w-4xl leading-relaxed">
              Access customers looking for drivers across every kind of trip.
              The more available you are, the more earning opportunities you
              unlock.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4.5 mb-10">
            {earnWays.map((way) => (
              <div
                key={way.id}
                className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
              >
                <div className="aspect-4/2 overflow-hidden">
                  <img
                    src={way.image}
                    alt={way.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-[#2F414F] text-[17px] xl:text-[18px] mb-1">
                    {way.title}
                  </p>
                  <p className="text-sm text-[#52606B] leading-relaxed">
                    {way.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#2F414F] font-medium text-sm">
              Ready to turn your availability into income?
            </p>
            <button className="bg-[#3894A3] hover:bg-[#2d7a8a] text-white font-semibold w-full sm:w-fit px-8 py-[15px] rounded-full transition-colors text-base whitespace-nowrap">
              Start Earning Today
            </button>
          </div>
        </div>
      </section>

      {/* Who Can Apply? */}
      <section className="py-12 sm:py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Tag */}
          <p className="text-xs sm:text-sm xl:text-base font-bold tracking-widest text-[#3894A3] uppercase mb-2.5 md:mb-4">
            JOIN THE TEAM
          </p>

          {/* Title + desc */}
          <h2 className="text-[27px] sm:text-3xl xl:text-[40px] font-bold text-[#2F414F] mb-2.5 md:mb-4">
            Who Can Apply?
          </h2>
          <p className="text-[#4B5563] text-base max-w-2xl leading-relaxed mb-5.5 md:mb-11">
            You may qualify if you meet a few simple requirements. No vehicle
            ownership needed, just the skills and professionalism to drive
            customers safely.
          </p>

          {/* Split layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden aspect-4/3">
              <img
                src="/who-can-apply.jpg"
                alt="Two people shaking hands"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Qualifications card */}
            <div className="bg-[#F1F9FB] border border-[#C7DAD4] rounded-2xl p-8">
              <p className="text-[#3894A3] font-semibold text-sm mb-4">
                You may qualify if you:
              </p>
              <ul className="space-y-4">
                {qualifications.map((q, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6.5 h-6.5 rounded-full bg-[#3894A3] flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-[#2F414F] text-[15px] font-medium leading-relaxed">
                      {q}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForDrivers;
