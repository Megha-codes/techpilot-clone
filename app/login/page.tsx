"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaCog, FaTools, FaIndustry } from "react-icons/fa";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"buyer" | "manufacturer">("buyer");
  const [loading, setLoading] = useState(false);

  const handleEmailAuth = async () => {
    setLoading(true);

    const { data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    let user = data?.user;

    if (!user) {
      const { data: signUpData } = await supabase.auth.signUp({
        email,
        password,
      });
      user = signUpData.user;

      if (user) {
        await supabase.from("profiles").insert({
          id: user.id,
          role,
        });
      }
    }

    window.location.href =
      role === "buyer" ? "/rfq" : "/manufacturers";

    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin,
      },
    });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-white flex items-center justify-center px-6">
      {/* 🔵 Floating grid / dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "radial-gradient(#cbd5e1 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* 🔵 Animated blue blobs */}
      <motion.div
        className="absolute -top-40 -left-40 w-130 h-130 bg-blue-200 rounded-full blur-3xl opacity-40"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-50 right-50 w-130 h-130 bg-blue-300 rounded-full blur-3xl opacity-30"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity }}
      />

      {/* 🏭 Floating mechanical icons */}
      <motion.div
        className="absolute top-24 left-16 text-blue-300 opacity-40"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <FaCog size={48} />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-24 text-blue-400 opacity-30"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <FaTools size={42} />
      </motion.div>

      <motion.div
        className="absolute top-40 right-32 text-blue-300 opacity-30"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        <FaIndustry size={44} />
      </motion.div>

      {/* 🔐 Glassmorphism Auth Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md rounded-2xl border border-white/30
                   bg-white/70 backdrop-blur-xl shadow-soft p-8"
      >
        {/* Animated Header */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-gray-900 mb-1"
        >
          Welcome to <span className="text-blue-600">RFX</span>
        </motion.h1>

        <p className="text-gray-600 mb-6">
          Login or create an account to continue
        </p>

        {/* Role */}
        <label className="text-sm font-medium text-gray-700">
          I am a
        </label>
        <select
          className="w-full mt-1 mb-4 p-3 rounded-lg border border-gray-300
                     focus:ring-2 focus:ring-blue-300 outline-none"
          value={role}
          onChange={(e) =>
            setRole(e.target.value as "buyer" | "manufacturer")
          }
        >
          <option value="buyer">Buyer</option>
          <option value="manufacturer">Manufacturer</option>
        </select>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-3 rounded-lg border border-gray-300
                     focus:ring-2 focus:ring-blue-300 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-5 p-3 rounded-lg border border-gray-300
                     focus:ring-2 focus:ring-blue-300 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* ✅ Always-visible primary CTA */}
        <button
          onClick={handleEmailAuth}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-xl
                     font-semibold text-lg hover:bg-blue-700 transition"
        >
          {loading ? "Please wait…" : "Login / Sign up"}
        </button>

        <div className="flex items-center my-6">
          <div className="grow border-t border-gray-300" />
          <span className="px-3 text-sm text-gray-400">OR</span>
          <div className="grow border-t border-gray-300" />
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 py-3
                     rounded-xl border border-gray-300 font-medium
                     text-gray-800 hover:bg-gray-50 transition"
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>

        <p className="mt-4 text-xs text-gray-500 text-center">
          New users will be automatically registered.
        </p>
      </motion.div>
    </main>
  );
}
