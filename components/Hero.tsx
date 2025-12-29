"use client";

import { motion } from "framer-motion";
import {
  FaCog,
  FaIndustry,
  FaTools,
  FaCogs,
  FaWrench,
  FaMicrochip,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-white flex items-center">
      {/* 🔷 Blueprint grid background (UNCHANGED) */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* 🔵 Soft blue gradients (UNCHANGED) */}
      <div className="absolute -top-40 -left-40 w-130 h-130 bg-blue-200 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-50 right-50 w-130 h-130 bg-blue-300 rounded-full blur-3xl opacity-30" />

      {/* ⚙️ Industrial accents (MORE, SAME SCALE) */}
      <motion.div
        className="absolute top-24 left-16 text-blue-400 opacity-30"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <FaCog size={52} />
      </motion.div>

      <motion.div
        className="absolute top-40 right-28 text-blue-300 opacity-25"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <FaCogs size={46} />
      </motion.div>

      <motion.div
        className="absolute bottom-36 left-24 text-blue-400 opacity-25"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <FaTools size={44} />
      </motion.div>

      <motion.div
        className="absolute bottom-28 right-32 text-blue-500 opacity-20"
        animate={{ y: [0, 22, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
      >
        <FaIndustry size={48} />
      </motion.div>

      {/* ➕ Additional industrial elements */}
      <motion.div
        className="absolute top-36 left-55 text-blue-300 opacity-20"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        <FaWrench size={42} />
      </motion.div>

      <motion.div
        className="absolute bottom-85 right-1/5 text-blue-400 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        <FaMicrochip size={40} />
      </motion.div>

      {/* 🧠 Hero content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900"
        >
          RFX <span className="text-blue-600">P-A-A-S</span>
        </motion.h1>

        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-4 text-2xl md:text-3xl font-semibold text-gray-800"
        >
          Procurement as a Service
        </motion.h2>

        {/* H3 */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mt-2 text-lg md:text-xl font-medium text-gray-600"
        >
          Reinvented for the Indian Manufacturing Industry
        </motion.h3>

        {/* Emphasized subheader with blue shade */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-lg md:text-xl font-semibold text-blue-700"
        >
          From RFQ to Delivery —{" "}
          <span className="text-gray-900">
            We Handle Procurement, You Focus on Growth.
          </span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-col items-center gap-6"
        >
          {/* Primary CTA on top */}
          <a
            href="/login"
            className="bg-blue-600 text-white px-9 py-4 rounded-2xl
                       text-lg font-semibold shadow-soft
                       hover:bg-blue-700 transition"
          >
            🔴 Start Free Trial of 5 Procurements
          </a>

          {/* Secondary CTAs below */}
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="/login?role=manufacturer"
              className="border border-blue-600 text-blue-600
                         px-7 py-4 rounded-2xl text-lg font-medium
                         hover:bg-blue-50 transition"
            >
              Register as a Manufacturer
            </a>

            <a
              href="/login?role=buyer"
              className="border border-gray-400 text-gray-800
                         px-7 py-4 rounded-2xl text-lg font-medium
                         hover:bg-gray-100 transition"
            >
              Register as a Buyer
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
