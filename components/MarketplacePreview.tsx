"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import {
  FaIndustry,
  FaUsers,
  FaLayerGroup,
  FaTools,
} from "react-icons/fa";

export default function MarketplacePreview() {
  return (
    <section className="relative bg-gray-50 py-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* LEFT: Video placeholder */}
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
            border border-gray-300
            bg-white
            flex items-center justify-center
          "
        >
          <div className="text-center px-6">
            <span className="inline-block mb-3 text-xs font-semibold tracking-wide text-blue-600 uppercase">
              Coming Soon
            </span>
            <div className="text-gray-800 font-medium">
              One Marketplace – Product Preview
            </div>
            <div className="mt-3 text-xs text-gray-500">
              Platform walkthrough video will be added here
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Textual explanation */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900"
          >
            One Marketplace
          </motion.h2>

          <p className="mt-4 text-gray-600 max-w-xl">
            A unified digital marketplace bringing together manufacturers,
            buyers, service providers, and resellers — with clear category
            separation and business-enabling tools.
          </p>

          <div className="mt-8 space-y-5">
            <Feature
              icon={FaIndustry}
              title="All Manufacturing Stakeholders"
              text="Manufacturers, buyers, service providers, and resellers on a single platform."
            />
            <Feature
              icon={FaLayerGroup}
              title="Clear Product & Service Categories"
              text="Structured classification for processes, materials, and capabilities."
            />
            <Feature
              icon={FaTools}
              title="Business Enrichment Tools"
              text="Access software tools that help manage visibility, leads, and operations."
            />
            <Feature
              icon={FaUsers}
              title="One Access, Multiple Solutions"
              text="Single account access across marketplace tools and RFX products."
            />
          </div>

          {/* Coming soon note */}
          <p className="mt-8 text-sm text-gray-500 italic">
            The One Marketplace platform is currently under development and will
            be launched in phases.
          </p>
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon: Icon,
  title,
  text,
}: {
  icon: IconType;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
        <Icon className="text-blue-600" size={18} />
      </div>
      <div>
        <h4 className="text-base font-semibold text-gray-900">
          {title}
        </h4>
        <p className="text-sm text-gray-600 mt-1">
          {text}
        </p>
      </div>
    </div>
  );
}
