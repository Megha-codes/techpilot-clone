"use client";

import { motion } from "framer-motion";
import {
  FaFileAlt,
  FaPhoneAlt,
  FaNetworkWired,
  FaTruck,
} from "react-icons/fa";

const steps = [
  {
    icon: FaFileAlt,
    title: "Submit RFQ",
    text: "Buyers log in and submit their RFQ along with drawings, specifications, and required quantities.",
  },
  {
    icon: FaPhoneAlt,
    title: "Personal Call (1–2 Working Hours)",
    text: "Our procurement experts personally call you to understand the requirement in detail.",
  },
  {
    icon: FaNetworkWired,
    title: "Manufacturer Matching",
    text: "We circulate your requirement across our verified manufacturer network to find the best fit.",
  },
  {
    icon: FaTruck,
    title: "Production & Delivery",
    text: "Once finalized, the order is produced and delivered directly to you.",
  },
];

export default function PaasExplainer() {
  return (
    <section className="relative bg-white py-20">
      <div className="max-w-7xl mx-auto px-9 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* LEFT: Textual Flow */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-blue-700"
          >
            How RFX P-A-A-S Works
          </motion.h2>

          <div className="mt-8 space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <Icon className="text-blue-600" size={18} />
                  </div>

                  <div>
                    <h4 className="text-base font-semibold text-gray-900">
                      {step.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT: Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            relative
            w-full
            aspect-video
            rounded-2xl
            border border-gray-200
            bg-gray-50
            flex items-center justify-center
          "
        >
          <div className="text-center px-6">
            <div className="text-sm text-gray-500 uppercase tracking-wide">
              Process Overview
            </div>
            <div className="mt-2 text-gray-700 font-medium">
              Product walkthrough video
            </div>
            <div className="mt-4 text-xs text-gray-400">
              (Video will be embedded here)
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
