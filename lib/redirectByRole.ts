import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type UserRole = "buyer" | "manufacturer" | "admin";

export function redirectByRole(
  role: UserRole,
  router: AppRouterInstance
) {
  if (role === "buyer") {
    router.replace("/buyer/dashboard");
  }

  if (role === "manufacturer") {
    router.replace("/manufacturer/onboarding");
  }

  if (role === "admin") {
    router.replace("/admin/rfqs");
  }
}
