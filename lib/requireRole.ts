import { supabase } from "@/lib/supabaseClient";

type Role = "buyer" | "manufacturer" | "admin";

export async function requireRole(allowedRoles: Role[]) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { allowed: false, redirect: "/login" };
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (!profile || !allowedRoles.includes(profile.role)) {
    return { allowed: false, redirect: "/" };
  }

  return { allowed: true, role: profile.role };
}
