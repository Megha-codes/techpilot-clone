"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type Role = "buyer" | "manufacturer" | "admin" | null;

export default function Navbar() {
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<Role>(null);

  useEffect(() => {
    const getSessionAndRole = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setLoading(false);
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      setRole(profile?.role ?? null);
      setLoading(false);
    };

    getSessionAndRole();
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <nav
      className="
        sticky top-0 z-50 w-full
        bg-white/90 backdrop-blur-md
        border-b border-gray-200
      "
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-extrabold text-gray-900 tracking-wide"
        >
          RFX
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-m font-medium text-gray-700">
          <Link
            href="/buyers"
            className="hover:text-blue-600 transition"
          >
            Buyers
          </Link>

          <Link
            href="/manufacturers"
            className="hover:text-blue-600 transition"
          >
            Manufacturers
          </Link>

          <Link
            href="/company"
            className="hover:text-blue-600 transition"
          >
            Our Company
          </Link>

          <Link
            href="/news"
            className="hover:text-blue-600 transition"
          >
            News & Topics
          </Link>

          {/* Role-specific shortcut */}
          {role === "buyer" && (
            <Link
              href="/rfq"
              className="text-blue-600 font-semibold"
            >
              Submit RFQ
            </Link>
          )}

          {role === "admin" && (
            <Link
              href="/admin/rfqs"
              className="text-blue-600 font-semibold"
            >
              Admin
            </Link>
          )}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          {!loading && !role && (
            <Link
              href="/login"
              className="
                bg-blue-600 text-white
                px-5 py-2.5 rounded-xl
                text-sm font-semibold
                hover:bg-blue-700 transition
                shadow-sm
              "
            >
              Login
            </Link>
          )}

          {!loading && role && (
            <button
              onClick={logout}
              className="
                border border-gray-300
                px-4 py-2 rounded-xl
                text-sm font-medium text-gray-700
                hover:bg-gray-100 transition
              "
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
