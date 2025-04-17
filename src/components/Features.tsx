"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { BotIcon, Cog } from "lucide-react";
import { TbFriends } from "react-icons/tb";

const FeatureCard = ({
  icon,
  title,
  description,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient that appears on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-yellow-50 to-yellow-100 opacity-0 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : ""
        }`}
      />

      {/* Icon with animated background */}
      <div className="relative mb-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600 transition-all duration-300 group-hover:bg-yellow-600 group-hover:text-white">
          <div className="text-3xl">{icon}</div>
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="mb-4 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>

      {/* Decorative corner element */}
      <div className="absolute -bottom-2 -right-2 h-12 w-12 rounded-tl-xl bg-yellow-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
};

export default function Features() {
  const features = [
    {
      icon: <BotIcon className="h-8 w-8" />,
      title: "Ai-Powered Automation",
      description:
        "Evolving businesses activities and functions with Artificial Intelligence.",
    },
    // {
    //   icon: <BarChart3 className="h-8 w-8" />,
    //   title: "Real-Time Analytics",
    //   description:
    //     "Make data-driven decisions with real-time insights into your sales, finances, and operations.",
    // },
    // {
    //   icon: <Lock className="h-8 w-8" />,
    //   title: "Secure Payment Processing",
    //   description:
    //     "Secure, multi-currency payment solutions with built-in fraud detection to protect your business.",
    // },
    {
      icon: <TbFriends className="h-8 w-8" />,
      title: "User Friendly",
      description:
        "Creating ultimate user friendliness with flexibility, convenience and preference.",
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "End-to-End Integration",
      description:
        "Unifying functions and operational lines across all business activities or departments of a brand.",
    },
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center md:mb-24"
        >
          <span className="mb-2 inline-block rounded-full bg-yellow-100 px-4 py-1.5 text-sm font-medium text-yellow-800">
            Powerful Capabilities
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Core <span className="text-yellow-600">Components</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Discover the core components of our solutions below.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
