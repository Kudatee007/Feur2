import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Testimonial = {
  id: number;
  name: string;
  role?: string;
  message: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amara Okonkwo",
    role: "Product Manager",
    message:
      "Feur has completely changed how I move around the city. The drivers are professional and I always feel safe.",
    rating: 5,
  },
  {
    id: 2,
    name: "Tunde Balogun",
    role: "Entrepreneur",
    message:
      "Booking a ride is seamless and stress-free. Feur is now an essential part of my daily routine.",
    rating: 5,
  },
  {
    id: 3,
    name: "Zainab Bello",
    role: "Marketing Consultant",
    message:
      "Late-night rides used to worry me, but Feur gives me peace of mind every time.",
    rating: 4,
  },
];

const TestimonialCard = ({ item }: { item: Testimonial }) => (
  <div className="relative bg-[#F9FCFD] rounded-2xl p-6 h-full flex flex-col shadow-md">
    {/* Author */}
    <div className="mb-4">
      <p className="font-medium text-slate-900 text-sm">{item.name}</p>
      {item.role && <p className="text-xs text-slate-500">{item.role}</p>}
    </div>

    {/* Stars */}
    <div className="flex gap-1 mb-4">
      {Array.from({ length: item.rating }).map((_, i) => (
        <span key={i} className="text-[#3894A3] text-sm">
          ★
        </span>
      ))}
    </div>

    {/* Message */}
    <p className="text-slate-700 text-sm md:text-base leading-relaxed flex-1">
      “{item.message}”
    </p>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
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
