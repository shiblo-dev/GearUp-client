
import { ApiResponse, OrderStatus, RentalOrder } from "@/types";
import apiClient from "./client";

export interface CreateRentalPayload {
  gearId: string;
  startDate: string;
  endDate: string;
}

// ----- Customer -----

export const createRentalOrder = async (payload: CreateRentalPayload) => {
  const res = await apiClient.post<ApiResponse<RentalOrder>>(
    "/rentals",
    payload
  );
  return res.data;
};

export const getMyRentals = async () => {
  const res = await apiClient.get<ApiResponse<RentalOrder[]>>("/rentals");
  return res.data;
};

export const getRentalById = async (id: string) => {
  const res = await apiClient.get<ApiResponse<RentalOrder>>(
    `/rentals/${id}`
  );
  return res.data;
};

// ----- Provider -----

export const getProviderOrders = async () => {
  const res = await apiClient.get<ApiResponse<RentalOrder[]>>(
    "/provider/orders"
  );
  return res.data;
};

export const updateOrderStatus = async (
  id: string,
  status: OrderStatus
) => {
  const res = await apiClient.patch<ApiResponse<RentalOrder>>(
    `/provider/orders/${id}`,
    { status }
  );
  return res.data;
};