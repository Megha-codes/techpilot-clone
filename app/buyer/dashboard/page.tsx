"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

import { supabase } from "@/lib/supabaseClient";
import { getBuyerRFQs } from "@/lib/rfq";
import { requireRole } from "@/lib/requireRole";

type RFQ = {
  id: string;
  category: string;
  status: string;
  created_at: string;
};

export default function BuyerDashboard() {
  const router = useRouter();

  const [rfqs, setRfqs] = useState<RFQ[]>([]);
  const [loading, setLoading] = useState(true);

  /* 🔐 ROLE GUARD + DATA LOAD */
  useEffect(() => {
    const init = async () => {
      // 1️⃣ Protect route
      const access = await requireRole(["buyer"]);

      if (!access.allowed) {
        router.replace(access.redirect!);
        return;
      }

      // 2️⃣ Load RFQs after access is confirmed
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/login");
        return;
      }

      const data = await getBuyerRFQs(user.id);
      setRfqs(data);
      setLoading(false);
    };

    init();
  }, [router]);

  const stats = {
    submitted: rfqs.length,
    inProgress: rfqs.filter((r) => r.status !== "Delivered").length,
    completed: rfqs.filter((r) => r.status === "Delivered").length,
  };

  return (
    <div className="container section">
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">Welcome 👋</h1>
        <p className="text-gray-600 mt-1">
          Manage your RFQs, track progress, and connect with EsyProcure.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <StatCard title="RFQs Submitted" value={stats.submitted} />
        <StatCard title="In Progress" value={stats.inProgress} />
        <StatCard title="Completed" value={stats.completed} />
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-4 mb-12">
        <Link href="/rfq/new" className="btn-primary">
          Submit New RFQ
        </Link>

        <Link href="/manufacturers" className="btn-secondary">
          Discover Manufacturers
        </Link>

        <Link href="/contact" className="btn-secondary">
          Contact EsyProcure
        </Link>
      </div>

      {/* RFQ Table */}
      <div className="card">
        <div className="card-header">Your RFQs</div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b">
              <tr className="text-left text-gray-600">
                <th className="p-3">RFQ ID</th>
                <th className="p-3">Category</th>
                <th className="p-3">Status</th>
                <th className="p-3">Created</th>
              </tr>
            </thead>

            <tbody>
              {loading && (
                <tr>
                  <td className="p-4 text-gray-500" colSpan={4}>
                    Loading RFQs...
                  </td>
                </tr>
              )}

              {!loading && rfqs.length === 0 && (
                <tr>
                  <td className="p-4 text-gray-500" colSpan={4}>
                    No RFQs submitted yet.
                  </td>
                </tr>
              )}

              {rfqs.map((rfq) => (
                <tr key={rfq.id} className="border-b last:border-b-0">
                  <td className="p-3 font-medium">{rfq.id}</td>
                  <td className="p-3">{rfq.category}</td>
                  <td className="p-3">
                    <StatusBadge status={rfq.status} />
                  </td>
                  <td className="p-3 text-gray-500">
                    {new Date(rfq.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ---------- helpers ---------- */

function StatCard({ title, value }: { title: string; value: number }) {
  return (
    <div className="card">
      <div className="card-body">
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-2xl font-semibold mt-2">{value}</p>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const color =
    status === "Delivered"
      ? "bg-green-100 text-green-700"
      : status === "In Review"
      ? "bg-blue-100 text-blue-700"
      : "bg-gray-100 text-gray-700";

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${color}`}>
      {status}
    </span>
  );
}
