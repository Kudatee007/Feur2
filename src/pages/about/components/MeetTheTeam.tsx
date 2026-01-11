import React from "react";
import teamImage from "../../../assets/images/team.svg";

const MeetTheTeam: React.FC = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          Meet the Team Behind Feur
        </h2>

        {/* Subheading */}
        <p className="mt-3 max-w-2xl mx-auto text-slate-600 text-base md:text-lg">
          We&apos;re a diverse group of innovators, technologists, and
          transportation experts united by our mission to transform mobility
          across Africa.
        </p>

        {/* Image + Quote */}
        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-feur">
            {/* Image */}
            <img
              src={teamImage}
              alt="Feur team collaboration"
              className="w-full h-auto object-cover"
            />

            {/* Quote overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-black/50 backdrop-blur-sm px-6 py-4">
              <p className="text-white text-sm md:text-base italic leading-relaxed">
                “We&apos;re not just building an app, we&apos;re building a
                movement that&apos;s changing how Africa moves.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
