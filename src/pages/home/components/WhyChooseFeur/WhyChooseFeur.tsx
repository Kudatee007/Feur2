import FeatureCard from "./components/FeatureCard";
import featureImg1 from "../../../../assets/images/featureImg1.svg";
import featureImg2 from "../../../../assets/images/featureImg2.svg";
import featureImg3 from "../../../../assets/images/featureImg3.svg";
import featureImg4 from "../../../../assets/images/featureImg4.svg";
import featureIcon1 from "../../../../assets/icons/featureIcon1.svg"
import featureIcon2 from "../../../../assets/icons/featureIcon2.svg"
import featureIcon3 from "../../../../assets/icons/featureIcon3.svg"
import featureIcon4 from "../../../../assets/icons/featureIcon4.svg"

const WhyChooseFeur = () => {
  return (
    <div className=" bg-[#ffffff] px-5 lg:px-22 xl:px-36 py-10">
      <div className="text-center">
        <span className="px-6 py-3 rounded-full bg-[#2F414F] text-white text-xl font-medium text-center">
          Why Choose Feur?
        </span>
        <p className="text-lg lg:text-xl text-[#364153] font-normal mt-4">
          Experience the future of personal mobility with features designed for
          your convenience and safety.
        </p>
      </div>

      <div className="sm:p-6">
        <FeatureCard
          imageSrc={featureImg1}
          imageAlt="Phone showing route in car"
          index="01"
          pill="Feature 1"
          title="Flexible Booking"
          description="Book a driver whenever you need one—instantly or schedule ahead for any occasion."
          imageIcon={featureIcon1}
        />

        <div className="mt-10" />
        <FeatureCard
          imageSrc={featureImg2}
          imageAlt="Phone showing route in car"
          index="02"
          pill="Feature 2"
          title="Professional Drivers"
          description="All drivers are verified, trained, and professional—giving you peace of mind."
          imageIcon={featureIcon2}
          reverse
        />

        <FeatureCard
          imageSrc={featureImg3}
          imageAlt="Phone showing route in car"
          index="03"
          pill="Feature 3"
          title="Real-Time Tracking"
          description="Know exactly where your driver is with live GPS tracking and ETA updates."
          imageIcon={featureIcon3}
        />

        <div className="mt-10" />
        <FeatureCard
          imageSrc={featureImg4}
          imageAlt="Phone showing route in car"
          index="04"
          pill="Feature 4"
          title="Negotiable Pricing"
          description="Negotiable pricing with quality service at fair rates."
          imageIcon={featureIcon4}
          reverse
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-2 text-center mt-4 mb-4  bg-white rounded-2xl shadow-[0_8px_10px_-6px_rgba(0,0,0,0.10),0_20px_25px_-5px_rgba(0,0,0,0.10)] py-6 px-8">
        <p className="text-[#2F414F] text-base leading-7">
          Ready to Experience the Difference?
        </p>

        <span className="text-[#364153] text-lg leading-7">
          Join thousands of satisfied car owners who trust Feur for their
          driving needs.
        </span>

        <button className="bg-[#3894A3] py-3 px-6 rounded-full text-[16px] text-white mt-5">
          Download Feur Today
        </button>
      </div>
    </div>
  );
};

export default WhyChooseFeur;
