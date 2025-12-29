"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type RFQ = {
  id: string;
  category: string;
  quantity: number;
  status: string;
  created_at: string;
};

export default function AdminRFQsPage() {
  const [rfqs, setRfqs] = useState<RFQ[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ Effect handles async logic internally
  useEffect(() => {
    let isMounted = true; // safety guard

    const fetchRFQs = async () => {
      const { data, error } = await supabase
        .from("rfqs")
        .select("*")
        .order("created_at", { ascending: false });

      if (!isMounted) return;

      if (error) {
        console.error(error);
        alert("Failed to load RFQs");
      } else {
        setRfqs(data || []);
      }

      setLoading(false);
    };

    fetchRFQs();

    return () => {
      isMounted = false;
    };
  }, []);

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from("rfqs")
      .update({ status })
      .eq("id", id);

    if (error) {
      alert("Failed to update status");
      return;
    }

    // Refresh list safely
    const { data } = await supabase
      .from("rfqs")
      .select("*")
      .order("created_at", { ascending: false });

    setRfqs(data || []);
  };

  return (
    <main className="min-h-screen bg-muted py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-6">
          RFQ Management
        </h1>

        {loading ? (
          <p>Loading RFQs...</p>
        ) : rfqs.length === 0 ? (
          <p className="text-gray-600">No RFQs submitted yet.</p>
        ) : (
          <div className="overflow-x-auto bg-white rounded-2xl shadow-soft border">
            <table className="w-full text-sm">
              <thead className="bg-muted text-left">
                <tr>
                  <th className="p-3">Category</th>
                  <th className="p-3">Quantity</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Created</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {rfqs.map((rfq) => (
                  <tr key={rfq.id} className="border-t">
                    <td className="p-3">{rfq.category}</td>
                    <td className="p-3">{rfq.quantity}</td>
                    <td className="p-3 capitalize">{rfq.status}</td>
                    <td className="p-3">
                      {new Date(rfq.created_at).toLocaleDateString()}
                    </td>
                    <td className="p-3">
                      <select
                        className="border border-border p-1 rounded"
                        value={rfq.status}
                        onChange={(e) =>
                          updateStatus(rfq.id, e.target.value)
                        }
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="quoted">Quoted</option>
                        <option value="closed">Closed</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
