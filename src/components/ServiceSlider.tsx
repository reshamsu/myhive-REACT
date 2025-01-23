import type React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
// import { Check, X } from "lucide-react";

// Import images
import crmImage from "../assets/crm.jpeg";
import emailMarketingImage from "../assets/emailMarketing.jpeg";
import webBuilderImage from "../assets/webBuilder.jpeg";
import automationImage from "../assets/automation.jpeg";
import smsImage from "../assets/sms.jpeg";
import detailReportingImage from "../assets/detailReporting.jpeg";

interface PricingFeature {
  title: string;
  description: string;
  image: string;
  plans: {
    core: boolean;
    pro: boolean;
    essential: boolean;
  };
}

const pricingFeatures: PricingFeature[] = [
  {
    title: "CRM",
    description: "Manage customer relationships effectively",
    image: crmImage,
    plans: { core: true, pro: true, essential: true },
  },
  {
    title: "Email Marketing",
    description: "Create and send targeted email campaigns",
    image: emailMarketingImage,
    plans: { core: true, pro: true, essential: false },
  },
  {
    title: "Website Builder",
    description: "Build and customize your business website",
    image: webBuilderImage,
    plans: { core: false, pro: true, essential: false },
  },
  {
    title: "Automation",
    description: "Automate repetitive tasks and workflows",
    image: automationImage,
    plans: { core: false, pro: true, essential: true },
  },
  {
    title: "2-Way SMS Messaging",
    description: "Engage with customers via text messages",
    image: smsImage,
    plans: { core: false, pro: false, essential: true },
  },
  {
    title: "Detailed Reporting",
    description: "Access comprehensive business insights",
    image: detailReportingImage,
    plans: { core: false, pro: true, essential: true },
  },
];

const ServiceSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative px-4 md:px-0 bg-gray-100 py-4">
      {/* Mobile View */}
      <div className="md:hidden overflow-y-auto max-h-[80vh] space-y-6 text-center">
        {pricingFeatures.map((feature, index) => (
          <ServiceCard key={index} feature={feature} />
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {pricingFeatures.map((feature, index) => (
            <SwiperSlide key={index}>
              <ServiceCard feature={feature} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center mt-8">
          <p className="text-gray-600 text-lg">
            Service {activeIndex + 1} of {pricingFeatures.length}
          </p>
        </div>
      </div>
    </div>
  );
};

const ServiceCard: React.FC<{ feature: PricingFeature }> = ({ feature }) => {
  return (
    <div className="bg-white rounded-lg p-6 md:p-8 flex flex-col justify-between shadow-xl h-full">
      <div>
        <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
          <img
            src={feature.image || "/placeholder.svg"}
            alt={feature.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              {feature.title}
            </h3>
          </div>
        </div>
        <p className="text-gray-600 mb-6 text-lg">{feature.description}</p>
      </div>
      {/* <div className="grid grid-cols-3 gap-4 bg-gray-200 p-4 rounded-lg">
        {Object.entries(feature.plans).map(([plan, included], idx) => (
          <div key={idx} className="text-center">
            <p className="text-gray-700 mb-2 capitalize font-semibold">
              {plan}
            </p>
            {included ? (
              <div className="bg-green-500 rounded-full p-2 inline-block">
                <Check className="text-white" />
              </div>
            ) : (
              <div className="bg-red-500 rounded-full p-2 inline-block">
                <X className="text-white" />
              </div>
            )}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default ServiceSlider;
