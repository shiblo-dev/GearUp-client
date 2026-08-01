
import { ApiResponse, Gear, PaginatedResponse } from "@/types";
import apiClient from "./client";

export interface GearFilters {
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  available?: boolean;
  page?: number;
  limit?: number;
  search?: string;
}

export const getGearList = async (filters: GearFilters = {}) => {
  const res = await apiClient.get<PaginatedResponse<Gear>>("/gear", {
    params: filters,
  });
  return res.data;
};

export const getGearById = async (id: string) => {
  const res = await apiClient.get<ApiResponse<Gear>>(`/gear/${id}`);
  return res.data;
};

export const getCategories = async () => {
  const res = await apiClient.get<ApiResponse<string[]>>("/categories");
  return res.data;
};

// ----- Provider-only endpoints -----

export const getProviderGear = async () => {
  const res = await apiClient.get<ApiResponse<Gear[]>>("/provider/gear");
  return res.data;
};

export interface CreateGearPayload {
  title: string;
  description: string;
  category: string;
  brand: string;
  pricePerDay: number;
  images: string[];
  isAvailable: boolean;
}

export const createGear = async (payload: CreateGearPayload) => {
  const res = await apiClient.post<ApiResponse<Gear>>(
    "/provider/gear",
    payload
  );
  return res.data;
};

export const updateGear = async (
  id: string,
  payload: Partial<CreateGearPayload>
) => {
  const res = await apiClient.patch<ApiResponse<Gear>>(
    `/provider/gear/${id}`,
    payload
  );
  return res.data;
};

export const deleteGear = async (id: string) => {
  const res = await apiClient.delete<ApiResponse<null>>(
    `/provider/gear/${id}`
  );
  return res.data;
};