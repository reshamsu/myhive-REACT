"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CallToAction() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200"></div>

      {/* Decorative elements */}
      <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-yellow-500/10 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-yellow-500/10 blur-3xl"></div>

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-xl md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Join thousands of businesses that have already elevated their
              operations with <span className="bg-gradient-to-r from-yellow-600 to-amber-500 bg-clip-text text-transparent font-bold">myhive</span>.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={() => handleNavigation("/pricing")}
                className="group inline-flex w-full items-center justify-center rounded-full bg-yellow-600 px-8 py-4 font-bold text-white transition-colors hover:bg-yellow-500 sm:w-auto"
              >
                Get Started Today
                <ArrowRight className="ml-2 inline-block h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => handleNavigation("/contact")}
                className="inline-flex w-full items-center justify-center rounded-full border-2 border-yellow-600 px-8 py-4 font-bold text-yellow-600 transition-colors hover:bg-yellow-50 hover:text-yellow-700 sm:w-auto"
              >
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
