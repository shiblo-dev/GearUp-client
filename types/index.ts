export type UserRole = "CUSTOMER" | "PROVIDER" | "ADMIN";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: "ACTIVE" | "SUSPENDED";
  createdAt: string;
}

export interface Gear {
  id: string;
  title: string;
  description: string;
  category: string;
  brand: string;
  pricePerDay: number;
  images: string[];
  isAvailable: boolean;
  providerId: string;
  provider?: {
    id: string;
    name: string;
  };
  createdAt: string;
}

export type OrderStatus =
  | "PLACED"
  | "CONFIRMED"
  | "PAID"
  | "PICKED_UP"
  | "RETURNED"
  | "CANCELLED";

export interface RentalOrder {
  id: string;
  gearId: string;
  gear?: Gear;
  customerId: string;
  customer?: {
    id: string;
    name: string;
  };
  startDate: string;
  endDate: string;
  totalPrice: number;
  status: OrderStatus;
  createdAt: string;
}

export interface Payment {
  id: string;
  orderId: string;
  amount: number;
  status: "PENDING" | "SUCCESS" | "FAILED";
  method: "STRIPE" | "SSLCOMMERZ";
  createdAt: string;
}

export interface Review {
  id: string;
  gearId: string;
  orderId: string;
  customerId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}