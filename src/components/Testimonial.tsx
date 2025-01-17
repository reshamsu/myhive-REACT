import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "HiVE has been instrumental in revolutionizing our operations at Air Ceylon. From streamlining bookings and payments to enhancing customer engagement with their 24/7 Ai Live Bot, their technology has boosted our efficiency and customer satisfaction.The Digital Marketing tools have amplified our brand visibility, while Real-Time Tracking & Analytics provide invaluable insights for decision-making. Beyond the tools, HiVE’s exceptional support and dedication have made all the difference.Thank you, HiVE, for helping us deliver world-class travel experiences with world-class tech!",
      client: "Director of Air Ceylon International Pvt (Ltd.)",
    },
    // {
    //   text: "The automation features are a game changer! We've seen a 40% increase in productivity.",
    //   client: "Michael Chen, CTO of DataDrive",
    // },
    // {
    //   text: "Real-time analytics have improved our decision-making process significantly.",
    //   client: "Emma Rodriguez, CFO of GrowthCorp",
    // },
  ];

  return (
    <div className="bg-zinc-900 py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-thin text-center mb-24 text-zinc-100">
          What Our <span className="font-bold">Clients Say</span>
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          className="w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-zinc-800 mx-auto max-w-4xl p-12 rounded-2xl">
                <FaQuoteLeft className="text-4xl text-amber-500 mb-6" />
                <p className="text-lg text-zinc-100 mb-6">{testimonial.text}</p>
                <p className="text-xl italic text-zinc-400">
                  - {testimonial.client}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
