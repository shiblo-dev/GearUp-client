import { Suspense } from "react";
import { getGearList } from "@/lib/api/gear";
import { GearGrid } from "./GearGrid";
import { GearFilters } from "./GearFilters";
import { GearGridSkeleton } from "./GearGridSkeleton";


interface GearPageProps {
  searchParams: Promise<{
    category?: string;
    search?: string;
    minPrice?: string;
    maxPrice?: string;
    page?: string;
  }>;
}

async function GearResults({
  searchParams,
}: {
  searchParams: GearPageProps["searchParams"];
}) {
  const params = await searchParams;

  const filters = {
    category: params.category === "all" ? undefined : params.category,
    search: params.search,
    minPrice: params.minPrice ? Number(params.minPrice) : undefined,
    maxPrice: params.maxPrice ? Number(params.maxPrice) : undefined,
    page: params.page ? Number(params.page) : 1,
    limit: 12,
  };

  const res = await getGearList(filters);

  return <GearGrid gears={res.data} />;
}

export default function GearPage({ searchParams }: GearPageProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-6">Browse Gear</h1>

      <GearFilters />

      <Suspense fallback={<GearGridSkeleton />}>
        <GearResults searchParams={searchParams} />
      </Suspense>
    </div>
  );
}