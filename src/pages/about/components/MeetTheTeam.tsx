import React from "react";

const MeetTheTeam: React.FC = () => {
  return (
    <section className="bg-white py-10 lg:py-20 px-5 lg:px-22 xl:px-36">
      <div className="max-w-6xl mx-auto text-center">
        {/* Pill */}
        <h4 className="text-[#2F414F] text-2xl lg:text-3xl font-medium">
          Meet the Team Behind Feur
        </h4>

        {/* Subheading */}
        <p className="mt-4 max-w-2xl mx-auto text-[#364153] text-base md:text-lg leading-relaxed">
          We're a diverse group of innovators, technologists, and transportation
          experts united by our mission to transform mobility across Africa.
        </p>

        {/* Image + Quote */}
        <div className="mt-12 flex justify-center">
          <div
            className="group relative w-full rounded-2xl overflow-hidden shadow-md
            transition-transform duration-500 hover:shadow-xl"
          >
            {/* Responsive image */}
            <picture className="w-full h-full block">
              <source srcSet="/teamMobile.webp" media="(max-width: 768px)" />
              <img
                src="/team.webp"
                alt="Feur team collaboration"
                className="w-full h-full object-cover rounded-2xl
                  transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </picture>

            {/* Quote overlay — stronger gradient for legibility */}
            <div
              className="absolute inset-x-0 bottom-0
              bg-gradient-to-t from-black/60 to-transparent
              px-6 py-6 md:py-8"
            >
              <p className="text-white text-sm md:text-base italic leading-relaxed max-w-2xl mx-auto">
                &ldquo;We&apos;re not just building an app we&apos;re building a
                movement that&apos;s changing how Africa moves.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
