"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "99 %", label: "Customer Satisfaction" },
  { value: "24/7", label: "Support Available" },
  { value: "25%", label: "Revenue Growth" },
  { value: "100k+", label: "Active Users" },
];

export default function Statistics() {
  // No state needed since we're using whileInView for animations

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200"></div>

      {/* Decorative elements */}
      <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-yellow-500/10 blur-2xl"></div>
      <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-yellow-500/10 blur-2xl"></div>

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Trusted by <span className="text-yellow-600">Businesses</span>{" "}
              Worldwide
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Our platform delivers measurable results that help businesses
              thrive
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center rounded-2xl bg-white p-8 shadow-md"
              >
                <div className="text-4xl font-bold text-yellow-600 md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-center text-sm font-medium text-gray-600 md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
