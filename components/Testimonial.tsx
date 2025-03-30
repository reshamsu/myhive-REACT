"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// Define a placeholder - you can replace this with actual avatar imports if you have them
const avatarPlaceholder = "/placeholder.svg?height=100&width=100";

export default function Testimonials() {
  const testimonials = [
    {
      text: [
        "Partnering with myhive has been a transformative experience for our business. Their cutting-edge automation and CRM tools have helped us eliminate time-wasting processes—especially repetitive tasks we were unaware of that slowed us down. We have greater efficiency, consistent quality, and twice the profitability.",
        "And beyond their service & technology, what truly sets myhive apart is its exclusive partnership network. Being part of this Next-Gen Community, subscribed to by prestigious alliances, has opened doors to new opportunities, collaborations, and growth. It's more than just a partnership— we're proud to be a part of myhive's community and excited for what's ahead!",
      ],
      client: "Director of Air Ceylon International Pvt (Ltd.)",
      company: "Air Ceylon International",
      avatar: avatarPlaceholder,
    },
    {
      text: [
        "The automation features are a game changer! We've seen a 40% increase in productivity since implementing myhive across our organization.",
        "Their customer support team has been exceptional, always available to answer questions and provide guidance when needed.",
      ],
      client: "Michael Chen",
      company: "CTO of DataDrive",
      avatar: avatarPlaceholder,
    },
    {
      text: [
        "Real-time analytics have improved our decision-making process significantly. We can now respond to market changes faster than ever before.",
        "The integration capabilities with our existing systems made the transition seamless and stress-free.",
      ],
      client: "Emma Rodriguez",
      company: "CFO of GrowthCorp",
      avatar: avatarPlaceholder,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-900 py-20 md:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-yellow-500 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-yellow-500 blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center md:mb-24"
        >
          <span className="mb-2 inline-block rounded-full bg-yellow-900/30 px-4 py-1.5 text-sm font-medium text-yellow-400">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            What Our <span className="text-yellow-500">Clients Say</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Hear from businesses that have transformed their operations with
            myhive
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-5xl"
        >
          {/* Simple testimonial display without Swiper */}
          <div className="rounded-2xl bg-gray-800 p-8 shadow-xl md:p-12">
            <div className="mb-6 flex items-center">
              <Quote className="h-10 w-10 text-yellow-500" />
            </div>

            <div className="mb-8 space-y-4">
              {testimonials[0].text.map((paragraph, i) => (
                <p key={i} className="text-lg leading-relaxed text-gray-200">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex items-center">
              <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-gray-700">
                <img
                  src={testimonials[0].avatar || "/placeholder.svg"}
                  alt={testimonials[0].client}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-white">
                  {testimonials[0].client}
                </p>
                <p className="text-sm text-gray-400">
                  {testimonials[0].company}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
