"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-yellow-500/20 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-yellow-500/20 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block rounded-full bg-yellow-100 px-4 py-1.5 text-sm font-medium text-yellow-800"
          >
            Our Story
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
          >
            About{" "}
            <span className="bg-gradient-to-r from-yellow-600 to-amber-500 bg-clip-text text-transparent">
              Us
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-lg leading-relaxed text-gray-600 md:text-xl"
          >
            <span className="bg-gradient-to-r from-yellow-600 to-amber-500 bg-clip-text text-transparent font-bold">myhive</span> is a cutting-edge business tech company leading the way in
            innovation. Our Ai-powered, licensed merchant platform automates,
            integrates, and optimizes operations across departments, ensuring
            businesses thrive in the digital age. Whether you're a Freelancer, Startup, Small Scale Business,
            or Medium Scale Business - <span className="bg-gradient-to-r from-yellow-600 to-amber-500 bg-clip-text text-transparent font-bold">myhive</span> equips you with the tools to scale seamlessly
            and securely.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
