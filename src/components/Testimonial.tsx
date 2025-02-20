import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: [
        "Partnering with myhive has been a transformative experience for our business. Their cutting-edge automation and CRM tools have helped us eliminate time-wasting processes—especially repetitive tasks we were unaware of that slowed us down. We have greater efficiency, consistent quality, and twice the profitability.",
        "And beyond their service & technology, what truly sets myhive apart is its exclusive partnership network. Being part of this Next-Gen Community, subscribed to by prestigious alliances, has opened doors to new opportunities, collaborations, and growth. It’s more than just a partnership— we’re proud to be a part of myhive's community and excited for what’s ahead!",
      ],
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
    <div className="bg-gradient-to-b from-gray-100 to-gray-500 py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-thin text-center mb-24 text-zinc-800">
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
              <div className="bg-gray-700 mx-auto max-w-4xl p-12 rounded-2xl">
                <FaQuoteLeft className="text-4xl text-yellow-600 mb-6" />
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
