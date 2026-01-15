import React from "react";
import ourStoryImg from "../../../assets/images/ourStoryImg.svg";
import visionIcon from "../../../assets/icons/visionIcon.svg";
import missionIcon from "../../../assets/icons/missionIcon.svg";

const OurStory: React.FC = () => {
  return (
    <section className="bg-[#F1F9FB] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* STORY */}
        <div className="flex flex-col lg:flex-row gap-16 items-center justify-center">
          {/* Left — Text */}
          <div>
            <div className="text-center lg:text-left mb-6">
              <span className="mb-4 px-6 py-3 rounded-full bg-[#2F414F] text-white text-xl font-medium text-center w-[164px] sm:px-18">
                Our Story
              </span>
            </div>

            <h2 className="text-2xl md:text-4xl font-normal text-[#2F414F] text-center lg:text-start">
              Born from a Simple Idea
            </h2>

            <div className="mt-6 space-y-4 text-[#364153] text-base leading-relaxed lg:max-w-xl">
              <p>
                Feur started with a simple observation: too many car owners were
                hesitant to enjoy social events because they couldn&apos;t drive
                after. Professional drivers were available, but finding and
                hiring them was complicated and unreliable.
              </p>

              <p>
                We asked ourselves: what if hiring a professional driver could
                be as easy as requesting a ride? What if car owners could
                maintain their independence while ensuring their safety?
              </p>

              <p>
                That question sparked a movement. Today, Feur is transforming
                how people think about personal mobility across Africa —
                creating opportunities for professional drivers while giving car
                owners unprecedented freedom.
              </p>
            </div>
          </div>

          {/* Right — Image grid */}
          <div>
            <img src={ourStoryImg} alt="" className="w-full" />
          </div>
        </div>

        {/* MISSION & VISION */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <span className="inline-block mb-4 px-6 py-3 sm:px-18 rounded-full bg-[#2F414F] text-white text-xl font-medium">
              Our Mission & Vision
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-[#2F8F9D] text-white rounded-2xl p-8 shadow-feur">
              <div className="mb-8">
                <span className="inline-flex items-center justify-center py-1 px-4 rounded-xl bg-linear-to-b from-[#2F414F] to-[#000E1C] shadow-feur">
                  <img src={visionIcon} alt="" className="w-12 h-12" />
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>

              <p className="text-white text-sm md:text-base leading-relaxed">
                To become Africa’s most trusted mobility platform — where every
                car owner has seamless access to professional drivers, and every
                driver has the opportunity to build a thriving career in a safe,
                supportive ecosystem.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-[#2F414F] text-white rounded-2xl p-8 shadow-feur">
              <div className="mb-8">
                <span className="inline-flex items-center justify-center py-1 px-4 rounded-xl bg-linear-to-b from-[#3894A3] to-[#056170] shadow-feur">
                  <img src={missionIcon} alt="" className="w-12 h-12" />
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>

              <p className="text-white text-sm md:text-base leading-relaxed">
                To revolutionize personal mobility across Africa by providing
                instant access to professional, verified drivers — empowering
                car owners with freedom, safety, and convenience while creating
                sustainable employment opportunities for skilled drivers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
