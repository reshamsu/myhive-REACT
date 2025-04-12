"use client";

import type React from "react";

import { motion } from "framer-motion";
import { CheckCircle, Zap, TrendingUp, Cpu, Lock } from "lucide-react";
import bg2 from "../assets/4.png";

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true, margin: "-100px" }}
    className="group relative overflow-hidden rounded-2xl bg-gray-800 p-8 shadow-lg transition-all duration-300 hover:bg-yellow-600"
  >
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-600/20 text-yellow-500 group-hover:bg-gray-800/20 group-hover:text-gray-800">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="mb-3 text-xl font-bold text-yellow-500 group-hover:text-gray-900">
      {title}
    </h3>
    <p className="text-gray-300 group-hover:text-gray-900">{description}</p>

    {/* Decorative corner element */}
    <div className="absolute -bottom-2 -right-2 h-12 w-12 rounded-tl-xl bg-yellow-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
  </motion.div>
);

export default function WhyHive() {
  const features = [
    {
      title: "Licensed Merchant Platform",
      description:
        "Ensuring compliance and secure payments for all your business transactions.",
      icon: CheckCircle,
    },
    {
      title: "End-to-End Automation",
      description:
        "Seamless business operations from customer acquisition to fulfillment.",
      icon: Zap,
    },
    {
      title: "Scalability",
      description:
        "Our platform evolves with your business growth, from startup to enterprise.",
      icon: TrendingUp,
    },
    {
      title: "Ai-Driven Efficiency",
      description:
        "Intelligent systems that improve performance and decision-making.",
      icon: Cpu,
    },
    {
      title: "Security & Compliance",
      description:
        "Protecting your data and ensuring peace of mind with enterprise-grade security.",
      icon: Lock,
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${bg2})` }}
        ></div>
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-yellow-500/10 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-yellow-500/10 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center md:mb-24"
        >
          <span className="mb-2 inline-block rounded-full bg-yellow-900/30 px-4 py-1.5 text-sm font-medium text-yellow-400">
            Our Difference
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Why Choose <span className="text-yellow-500">myhive</span>?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Here's what sets us apart from the competition
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
