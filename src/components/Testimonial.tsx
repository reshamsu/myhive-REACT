import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { FaUser } from "react-icons/fa";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "HiVE has transformed our operations!",
      client: "Client A",
      image: "/images/client-a.jpg", // Replace with actual image paths
    },
    {
      text: "The automation features are a game changer!",
      client: "Client B",
      image: "/images/client-b.jpg", // Replace with actual image paths
    },
    {
      text: "Real-time analytics have improved our decision-making!",
      client: "Client C",
      image: "/images/client-c.jpg", // Replace with actual image paths
    },
  ];

  return (
    <div className="max-w-full mx-auto p-10  bg-zinc-900">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">
        What Our Clients Say
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
            <div className="bg-white mx-16 p-10 rounded-lg shadow flex items-center space-x-4">
              {/* <img
                src={testimonial.image}
                alt={testimonial.client}
                className="w-16 h-16 rounded-full object-cover"
              /> */}
              <FaUser/>
              <div className="">
                <p className="text-lg italic">"{testimonial.text}"</p>
                <p className="mt-2 text-sm text-gray-600">
                  - {testimonial.client}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
