"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { redirectByRole } from "@/lib/redirectByRole";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    redirectByRole(router);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center text-gray-600">
      Signing you in…
    </div>
  );
}
