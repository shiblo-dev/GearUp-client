
import { ApiResponse, User, UserRole } from "@/types";
import apiClient from "./client";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}

export const loginUser = async (payload: LoginPayload) => {
  const res = await apiClient.post<ApiResponse<{ user: User }>>(
    "/auth/login",
    payload
  );
  return res.data;
};

export const registerUser = async (payload: RegisterPayload) => {
  const res = await apiClient.post<ApiResponse<{ user: User }>>(
    "/auth/register",
    payload
  );
  return res.data;
};

export const logoutUser = async () => {
  const res = await apiClient.post<ApiResponse<null>>("/auth/logout");
  return res.data;
};

export const getCurrentUser = async () => {
  const res = await apiClient.get<ApiResponse<User>>("/auth/me");
  return res.data;
};