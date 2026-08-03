"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import { getCurrentUser } from "@/lib/api/auth";

export function useAuth() {
  const { user, isAuthenticated, isLoading, setUser, clearUser, setLoading } =
    useAuthStore();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const res = await getCurrentUser();
        if (res.success && res.data) {
          setUser(res.data);
        } else {
          clearUser();
        }
      } catch {
        clearUser();
      }
    };

    fetchUser();
  }, [setUser, clearUser, setLoading]);

  return { user, isAuthenticated, isLoading };
}