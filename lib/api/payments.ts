
import { ApiResponse, Payment } from "@/types";
import apiClient from "./client";

export interface CreatePaymentPayload {
  orderId: string;
  method: "STRIPE" | "SSLCOMMERZ";
}

export const createPayment = async (payload: CreatePaymentPayload) => {
  const res = await apiClient.post<ApiResponse<{ checkoutUrl: string }>>(
    "/payments/create",
    payload
  );
  return res.data;
};

export const getMyPayments = async () => {
  const res = await apiClient.get<ApiResponse<Payment[]>>("/payments");
  return res.data;
};