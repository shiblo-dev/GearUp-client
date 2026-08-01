import { z } from "zod";

export const gearSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  category: z.string().min(1, "Category is required"),
  brand: z.string().min(1, "Brand is required"),
  pricePerDay: z.coerce.number().positive("Price must be greater than 0"),
  images: z
    .string()
    .min(1, "At least one image URL is required"),
  isAvailable: z.boolean().default(true),
});

export type GearFormValues = z.infer<typeof gearSchema>;