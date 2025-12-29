"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";

type Manufacturer = {
  id: string;
  name: string;
  logo_url: string;
};

export default function TrustedManufacturers() {
  const [manufacturers, setManufacturers] = useState<Manufacturer[]>([]);

  useEffect(() => {
    const fetchManufacturers = async () => {
      const { data, error } = await supabase
        .from("trusted_manufacturers")
        .select("id, name, logo_url")
        .order("created_at", { ascending: true });

      if (error) {
        console.error(error);
        return;
      }

      if (data) {
        setManufacturers([...data, ...data]);
      }
    };

    fetchManufacturers();
  }, []);

  if (!manufacturers.length) return null;

  return (
    <section className="bg-white py-16 border-t border-gray-600">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-center text-xl font-bold text-blue-700 mb-10">
          Trusted by Manufacturers Across India
        </h3>

        <div className="overflow-hidden">
          <motion.div
            className="flex items-center gap-16"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {manufacturers.map((m, i) => (
              <div
                key={`${m.id}-${i}`}
                className="min-w-[180px] flex items-center justify-center"
              >
                <Image
                  src={m.logo_url}
                  alt={m.name}
                  width={140}
                  height={60}
                  className="
                    object-contain
                    opacity-80
                    transition
                    hover:grayscale-0
                    hover:opacity-100
                  "
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
