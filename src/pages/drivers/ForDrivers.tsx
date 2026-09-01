import { AiFillCheckCircle } from "react-icons/ai";
import FaqAccordion from "../../components/ui/FaqAccordion";
import { Helmet } from "react-helmet-async";
import car from "../../assets/icons/car.svg";
import service from "../../assets/icons/service.svg";
import maintain from "../../assets/icons/maintain.svg";
import fuel from "../../assets/icons/fuel.svg";
import insure from "../../assets/icons/insure.svg";
import depreciate from "../../assets/icons/depreciate.svg";
import steering from "../../assets/icons/steering-icon.svg";
import DriversHero from "../../components/hero/DriversHero";

const features = [
  {
    id: 1,
    label: "01",
    tag: "EARN MORE",
    title: "Keep 65% of Every Trip",
    desc: "Earn more from every completed booking while Feur handles customer acquisition, bookings, and platform support. You focus on driving.",
    image: "/fimg.webp",
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
    icon: car,
    title: "Car purchase costs",
    desc: "No need to have a car",
  },
  {
    id: 2,
    icon: service,
    title: "Vehicle servicing costs",
    desc: "No need to spend money on servicing a vehicle",
  },
  {
    id: 3,
    icon: maintain,
    title: "Maintenance expenses",
    desc: "No need for car maintenance",
  },
  {
    id: 4,
    icon: fuel,
    title: "Fuel for your vehicle",
    desc: "No need to buy fuel",
  },
  {
    id: 5,
    icon: insure,
    title: "Personal vehicle insurance",
    desc: "No need for personal vehicle insurance",
  },
  {
    id: 6,
    icon: depreciate,
    title: "Depreciation worries",
    desc: "No more worrying about depreciating of your car and income",
  },
];

const earnWays = [
  {
    id: 1,
    image: "/earn-daily-transport.webp",
    title: "Daily transportation",
    desc: "Everyday commutes, errands and city runs.",
  },
  {
    id: 2,
    image: "/earn-driver-hire.webp",
    title: "Daily driver hire packages",
    desc: "Half-day and full-day hire bookings.",
  },
  {
    id: 3,
    image: "/earn-scheduled.webp",
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

const driverFaqs = [
  {
    q: "What are the requirements to become a Feur driver?",
    a: "Drivers must possess a valid driver's licence, relevant identification documents, and successfully complete Feur's verification and screening process.",
  },
  {
    q: "How much does it cost to join Feur as a driver?",
    a: "There is no joining fee for qualified drivers who successfully complete the onboarding process.",
  },
  {
    q: "How much do drivers earn on Feur?",
    a: "Drivers earn 65% of every completed trip, while Feur retains 35% as the platform commission.",
  },
  {
    q: "How do drivers get paid, and when do they receive earnings?",
    a: "Passengers pay securely through the Feur app using Paystack. Once a passenger completes payment for a trip, drivers will receive a notification in the app. Earnings from completed and paid trips are accumulated and transferred to the driver's registered bank account on a weekly basis.",
  },
  {
    q: "What happens if a passenger doesn't pay?",
    a: "You never collect cash. All payments run through the Feur app, once a passenger pays, you're notified and the earnings join your next weekly payout.",
  },
  {
    q: "Can I choose when I work?",
    a: "Yes. You're free to decide when to go online and accept bookings, giving you flexibility based on your own availability and personal schedule.",
  },
  {
    q: "Is there a minimum number of trips I must complete?",
    a: "No. You decide when and how often you want to work.",
  },
  {
    q: "Will Feur provide me with a car?",
    a: "No. Feur connects you with customers who already own vehicles and need professional driving services.",
  },
  {
    q: "How will I know about new bookings?",
    a: "You'll receive booking notifications in the Feur app and can accept or decline requests based on your availability.",
  },
  {
    q: "What support does Feur provide drivers?",
    a: "Feur provides onboarding, customer support, and access to earning opportunities through the platform.",
  },
  {
    q: "What if a customer behaves inappropriately?",
    a: "You can report incidents through the app, and Feur will investigate and take appropriate action in line with our platform policies.",
  },
  {
    q: "How do I get started?",
    a: "Complete driver registration, submit the required documents, pass the verification checks, and once approved you can start accepting bookings in the app.",
  },
];

const ForDrivers = () => {
  return (
    <div className="">
      <Helmet>
        <title>Drivers — Feur</title>
        <meta
          name="description"
          content="Explore driver features and opportunities with Feur."
        />
        <link rel="canonical" href="https://usefeur.com/drivers" />
      </Helmet>
      {/* hero section */}
      <DriversHero
        image="/for-drivers.webp"
        backgroundImage="/forDrivers.svg"
      />

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
                  <div className={`${!isReversed ? "md:order-2" : ""}`}>
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
                    <img src={item.icon} alt={item.title} className="w-6 h-6" />
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
            <div className="w-fit mx-auto lg:mx-0 bg-[#2F414F] text-white text-lg xl:text-[26px] font-semibold px-6 py-2.5 xl:px-[34px] xl:py-3.5 rounded-full mb-3 md:mb-6">
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

      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center bg-[#2F414F] text-white text-base sm:text-xl lg:text-[24px] font-semibold px-6 py-3 lg:px-8 lg:py-3.5 rounded-full mb-4">
              Driver FAQs
            </div>
            <p className="text-[15px] sm:text-lg lg:text-xl text-[#364153]">
              Everything you need to know about driving and earning with Feur.
            </p>
          </div>

          <FaqAccordion items={driverFaqs} />
        </div>
      </section>

      <section className="py-13 md:py-16 lg:py-24 px-6 bg-[#3894A3] text-center">
        <img
          src={steering}
          alt="steering"
          className="w-[84px] h-full mx-auto pb-9 lg:pb-10"
        />
        <h4 className="text-[27px] sm:text-[32px] lg:text-[40px] font-bold leading-8 text-white pb-4 md:pb-5">
          Start Earning with Feur
        </h4>
        <p className="text-[15px] sm:text-base md:text-lg lg:text-xl font-normal leading-5.5 md:leading-7.5 text-[#EAFAFC] pb-4 md:pb-5 max-w-2xl mx-auto">
          Your driving skills are valuable. Join Feur today and connect with
          passengers looking for reliable, professional drivers.
        </p>
        <div className="bg-[#2F414F] rounded-[14px] w-[300px] mx-auto px-5 py-3.5 mb-5">
          <span className="text-[18px] font-bold text-white">
            Drive More. Earn More. <span className="lg:hidden">Keep 65%.</span>
          </span>
        </div>
        <button className="bg-white hover:bg-white/80 text-[#2F414F] font-semibold w-full sm:w-fit lg:px-10 lg:py-5 px-8 py-[15px] rounded-full transition-colors text-base md:text-lg whitespace-nowrap">
          Become a Driver →
        </button>
      </section>
    </div>
  );
};

export default ForDrivers;
