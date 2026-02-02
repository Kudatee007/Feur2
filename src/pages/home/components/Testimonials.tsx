import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


type Testimonial = {
  id: number;
  name: string;
  location?: string;
  message: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amara Okonkwo",
    location: "Lagos, Nigeria",
    message:
      "Feur has been a lifesaver! I own a car but hate driving in Lagos traffic. Now I can relax in the backseat while a professional driver handles everything. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Tunde Balogun",
    location: "Accra, Ghana",
    message:
      "The drivers are professional, punctual, and treat my car with respect. I use Feur every Friday after work and it's become an essential part of my routine.",
    rating: 5,
  },
  {
    id: 3,
    name: "Zainab Bello",
    location: "Nairobi, Kenya",
    message:
      "As a business owner, I need reliable transportation for client meetings. Feur's verified drivers are always professional and make great impressions. Worth every penny!",
    rating: 4,
  },
];

const TestimonialCard = ({ item }: { item: Testimonial }) => (
<div className="bg-linear-to-br from-[#3894A3] to-[#C7DAD4] rounded-2xl pt-2.5">
<div className="relative bg-[#F9FCFD] p-6 flex flex-col shadow-md min-h-[360px]">
    {/* Author */}
    <div className="my-4">
      <p className="font-medium text-slate-900 text-xl">{item.name}</p>
      {item.location && <p className="text-base text-slate-500">{item.location}</p>}
    </div>

       {/* Stars */}
       <div className="flex gap-1 mb-2">
      {Array.from({ length: item.rating }).map((_, i) => (
        <span key={i} className="text-[#3894A3] text-xl">
          ★
        </span>
      ))}
    </div>


    {/* Message */}
    <p className="text-slate-700 text-[18px] md:text-base leading-relaxed flex-1">
      “{item.message}”
    </p>
  </div>
</div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white px-5 lg:px-22 xl:px-36 py-8 md:py-16">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#2F414F]">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-[#2F414F] text-base md:text-lg font-normal">
            Join thousands of satisfied customers across Africa who trust Feur
            for their daily and special journeys.
          </p>
        </div>

        {/* MOBILE — Swiper */}
        <div className="mt-12 md:hidden">
          <Swiper spaceBetween={16} slidesPerView={1.1} centeredSlides={false}>
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <TestimonialCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* DESKTOP — Grid */}
        <div className="hidden md:grid mt-12 grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
