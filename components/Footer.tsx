"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-50 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-xl font-bold text-gray-900">RFX</h3>
          <p className="mt-3 text-sm text-gray-600 max-w-xs">
            Procurement-as-a-Service platform built for the Indian
            manufacturing ecosystem.
          </p>
        </div>

        {/* Buyers */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-3">
            For Buyers
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/login">Submit RFQ</Link></li>
            <li><Link href="/manufacturers">Find Manufacturers</Link></li>
            <li><Link href="/coming-soon">Procurement Tools</Link></li>
          </ul>
        </div>

        {/* Manufacturers */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-3">
            For Manufacturers
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/login">Register as Manufacturer</Link></li>
            <li><Link href="/coming-soon">One Marketplace</Link></li>
            <li><Link href="/coming-soon">Business Tools</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-3">
            Company
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><Link href="/company">About Us</Link></li>
            <li><Link href="/news">News & Topics</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-2">
          <span>© {new Date().getFullYear()} RFX. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
