"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function NewRFQPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    category: "",
    quantity: "",
    material: "",
    delivery_timeline: "",
    location: "",
    notes: "",
  });

  const [files, setFiles] = useState<File[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push("/login");
      return;
    }

    // 1️⃣ Insert RFQ
    const { data: rfq, error } = await supabase
      .from("rfqs")
      .insert({
        buyer_id: user.id,
        ...form,
      })
      .select()
      .single();

    if (error) {
      alert("Failed to submit RFQ");
      setLoading(false);
      return;
    }

    // 2️⃣ Upload files
    for (const file of files) {
      await supabase.storage
        .from("rfq-files")
        .upload(`${user.id}/${rfq.id}/${file.name}`, file);
    }

    setLoading(false);
    router.push("/buyer/dashboard");
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-semibold">Submit RFQ</h1>
      <p className="text-gray-600 mt-1">
        Our procurement team will call you within 1–2 working hours.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <input
          required
          placeholder="Category (e.g. CNC Machining)"
          className="input"
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />

        <input
          placeholder="Quantity"
          className="input"
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
        />

        <input
          placeholder="Material"
          className="input"
          onChange={(e) => setForm({ ...form, material: e.target.value })}
        />

        <input
          placeholder="Delivery Timeline"
          className="input"
          onChange={(e) =>
            setForm({ ...form, delivery_timeline: e.target.value })
          }
        />

        <input
          placeholder="Location"
          className="input"
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />

        <textarea
          placeholder="Additional Notes"
          className="input min-h-25"
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
        />

        <input
          type="file"
          multiple
          onChange={(e) => setFiles(Array.from(e.target.files || []))}
        />

        <button
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium"
        >
          {loading ? "Submitting..." : "Submit RFQ"}
        </button>
      </form>
    </div>
  );
}
