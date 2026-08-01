import { Gear } from "@/types";
import { GearCard } from "./GearCard";

export function GearGrid({ gears }: { gears: Gear[] }) {
  if (gears.length === 0) {
    return (
      <div className="text-center py-16 text-muted-foreground">
        No gear found matching your filters.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {gears.map((gear) => (
        <GearCard key={gear.id} gear={gear} />
      ))}
    </div>
  );
}