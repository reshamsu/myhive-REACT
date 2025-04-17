"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Shield, Zap, BarChart, Heart } from "lucide-react";

const ValueCard = ({
  title,
  description,
  icon: Icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
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
        className={`absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-600 opacity-0 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : ""
        }`}
      />

      {/* Icon with animated background */}
      <div className="relative mb-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600 transition-all duration-300 group-hover:bg-white group-hover:text-yellow-600">
          <Icon className="h-8 w-8" />
        </div>
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="mb-4 text-xl font-semibold text-gray-900 group-hover:text-white">
          {title}
        </h3>
        <p className="text-gray-600 group-hover:text-white/90">{description}</p>
      </div>

      {/* Decorative corner element */}
      <div className="absolute -bottom-2 -right-2 h-12 w-12 rounded-tl-xl bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
};

export default function CoreValues() {
  const values = [
    {
      title: "Innovation",
      description:
        "We strive to be at the forefront of technology, constantly evolving our solutions.",
      icon: Lightbulb,
    },
    {
      title: "Security",
      description:
        "Safeguarding sensitive data and transactions is our top priority.",
      icon: Shield,
    },
    {
      title: "Efficiency",
      description:
        "Streamlining processes to save time and reduce errors for optimal performance.",
      icon: Zap,
    },
    {
      title: "Scalability",
      description:
        "Our solutions grow with your business needs, from startup to enterprise.",
      icon: BarChart,
    },
    {
      title: "Trust",
      description:
        "Building reliable and transparent partnerships with our clients and partners.",
      icon: Heart,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center md:mb-24"
        >
          <span className="mb-2 inline-block rounded-full bg-yellow-100 px-4 py-1.5 text-sm font-medium text-yellow-800">
            What Drives Us
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Our Core <span className="text-yellow-600">Values</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            The principles that guide everything we do at <span className="bg-gradient-to-r from-yellow-600 to-amber-500 bg-clip-text text-transparent font-bold">myhive</span>
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              title={value.title}
              description={value.description}
              icon={value.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
