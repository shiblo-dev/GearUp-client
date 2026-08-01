"use client";

import { useAuth } from "@/hooks/useAuth";

export function AuthInitializer({
  children,
}: {
  children: React.ReactNode;
}) {
  useAuth();
  return <>{children}</>;
}