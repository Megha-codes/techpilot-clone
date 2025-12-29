"use client";

import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

export default function RFQPage() {
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [details, setDetails] = useState<File | null>(null);

  const submitRFQ = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Please login first");
      return;
    }

    let fileUrl = null;

    if (details) {
      const { data } = await supabase.storage
        .from("rfq-files")
        .upload(`${user.id}/${details.name}`, details);

      fileUrl = data?.path;
    }

    await supabase.from("rfqs").insert({
      buyer_id: user.id,
      category,
      quantity,
      file_url: fileUrl,
    });

    alert("RFQ submitted. We will contact you.");
  };

  return (
    <main className="max-w-xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold mb-6">Submit RFQ</h1>

      <input
        className="w-full border p-2 mb-3"
        placeholder="Category"
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        className="w-full border p-2 mb-3"
        type="number"
        placeholder="Quantity"
        onChange={(e) => setQuantity(+e.target.value)}
      />

      <input
        type="file"
        className="mb-4"
        onChange={(e) => setDetails(e.target.files?.[0] || null)}
      />

      <button
        onClick={submitRFQ}
        className="bg-secondary text-white px-6 py-2 rounded-xl"
      >
        Submit RFQ
      </button>
    </main>
  );
}
