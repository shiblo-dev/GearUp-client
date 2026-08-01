"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { gearSchema, GearFormValues } from "@/lib/validations/gear";
import { createGear } from "@/lib/api/gear";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CATEGORIES = ["Camping", "Cycling", "Hiking", "Water Sports", "Winter Sports"];

export default function NewGearPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<GearFormValues>({
    resolver: zodResolver(gearSchema),
    defaultValues: { isAvailable: true },
  });

  const onSubmit = async (data: GearFormValues) => {
    try {
      // কমা দিয়ে আলাদা করা একাধিক image URL কে array তে ভাঙা
      const images = data.images
        .split(",")
        .map((url) => url.trim())
        .filter(Boolean);

      const res = await createGear({
        ...data,
        images,
      });

      if (res.success) {
        toast.success("Gear added successfully!");
        router.push("/dashboard/provider/gear");
      }
    } catch (error: any) {
      const message =
        error?.response?.data?.message || "Failed to add gear. Try again.";
      toast.error(message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Add New Gear</h1>

      <Card className="p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Title</label>
            <Input placeholder="Mountain Bike - Trek X-Caliber" {...register("title")} />
            {errors.title && (
              <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium">Description</label>
            <textarea
              className="w-full border rounded-md p-2 text-sm min-h-24"
              placeholder="Describe the gear's condition, features, etc."
              {...register("description")}
            />
            {errors.description && (
              <p className="text-sm text-red-500 mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Category</label>
              <select
                className="w-full border rounded-md h-10 px-3 text-sm"
                defaultValue=""
                {...register("category")}
              >
                <option value="" disabled>Select category</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              {errors.category && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.category.message}
                </p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium">Brand</label>
              <Input placeholder="Trek" {...register("brand")} />
              {errors.brand && (
                <p className="text-sm text-red-500 mt-1">{errors.brand.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Price per day (৳)</label>
            <Input type="number" placeholder="500" {...register("pricePerDay")} />
            {errors.pricePerDay && (
              <p className="text-sm text-red-500 mt-1">
                {errors.pricePerDay.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium">
              Image URLs (comma separated)
            </label>
            <Input
              placeholder="https://example.com/img1.jpg, https://example.com/img2.jpg"
              {...register("images")}
            />
            {errors.images && (
              <p className="text-sm text-red-500 mt-1">{errors.images.message}</p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="isAvailable" {...register("isAvailable")} />
            <label htmlFor="isAvailable" className="text-sm">
              Available for rent immediately
            </label>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Adding..." : "Add Gear"}
          </Button>
        </form>
      </Card>
    </div>
  );
}