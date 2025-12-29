"use client";

import { motion } from "framer-motion";
import {
  FaWrench,
  FaIndustry,
  FaCogs,
  FaTools,
  FaBolt,
  FaWater,
} from "react-icons/fa";

const capabilities = [
  { title: "TIG Welding", icon: FaWrench },
  { title: "Sheet Metal Processing", icon: FaIndustry },
  { title: "Blanking", icon: FaCogs },
  { title: "Milling", icon: FaTools },
  { title: "Injection Moulding", icon: FaIndustry },
  { title: "Laser Cutting", icon: FaBolt },
  { title: "Water Jet Cutting", icon: FaWater },
];

// duplicate for seamless loop
const items = [...capabilities, ...capabilities];

export default function CapabilitiesCarousel() {
  return (
    <section className="relative -mt-2.5 z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-5"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="
                    min-w-60
                    bg-white
                    rounded-xl
                    border border-gray-600
                    shadow-sm
                    px-5 py-6
                    flex flex-col items-center
                    justify-center
                    text-center
                  "
                >
                  <Icon
                    size={34}
                    className="text-blue-200 mb-4"
                  />
                  <h4 className="text-m font-semibold text-blue-700">
                    {item.title}
                  </h4>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
