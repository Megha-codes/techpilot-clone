import { supabase } from "@/lib/supabaseClient";

export async function getBuyerRFQs(buyerId: string) {
  const { data, error } = await supabase
    .from("rfqs")
    .select("id, category, status, created_at")
    .eq("buyer_id", buyerId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching RFQs:", error);
    return [];
  }

  return data;
}
