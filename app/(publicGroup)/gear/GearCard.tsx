import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gear } from "@/types";

export function GearCard({ gear }: { gear: Gear }) {
  return (
    <Link href={`/gear/${gear.id}`}>
      <Card className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer h-full">
        <div className="relative w-full aspect-square bg-muted">
          <Image
            src={gear.images[0] || "/placeholder-gear.png"}
            alt={gear.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          <Badge
            className="absolute top-2 right-2"
            variant={gear.isAvailable ? "default" : "secondary"}
          >
            {gear.isAvailable ? "Available" : "Unavailable"}
          </Badge>
        </div>

        <div className="p-3 space-y-1">
          <p className="text-xs text-muted-foreground">{gear.category}</p>
          <h3 className="font-medium text-sm line-clamp-1">{gear.title}</h3>
          <p className="text-sm font-semibold">
            ৳{gear.pricePerDay}
            <span className="text-xs font-normal text-muted-foreground">
              {" "}
              / day
            </span>
          </p>
        </div>
      </Card>
    </Link>
  );
}