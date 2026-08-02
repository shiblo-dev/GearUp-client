import Image from "next/image";
import { Heart, MapPin, Star } from "lucide-react";

import { featuredGear } from "@/data/home";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function FeaturedGear() {
  return (
    <section className="container mx-auto px-6 py-20">

      <div className="text-center">

        <p className="font-semibold uppercase tracking-widest text-emerald-600">
          Featured Gear
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          Popular Rental Equipment
        </h2>

        <p className="mt-4 text-muted-foreground">
          Discover the most rented sports and outdoor equipment.
        </p>

      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {featuredGear.map((gear) => (

          <div
            key={gear.id}
            className="group overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
          >

            <div className="relative h-72 overflow-hidden">

              <Image
                src={gear.image}
                alt={gear.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <button className="absolute right-4 top-4 rounded-full bg-white p-2 shadow">

                <Heart className="h-5 w-5" />

              </button>

            </div>

            <div className="space-y-4 p-6">

              <div className="flex items-center justify-between">

                <h3 className="text-2xl font-bold">
                  {gear.name}
                </h3>

                <Badge
                  variant={gear.available ? "default" : "destructive"}
                >
                  {gear.available ? "Available" : "Booked"}
                </Badge>

              </div>

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-1">

                  <Star
                    className="fill-yellow-400 text-yellow-400"
                    size={18}
                  />

                  <span>{gear.rating}</span>

                </div>

                <div className="flex items-center gap-1 text-muted-foreground">

                  <MapPin size={16} />

                  {gear.location}

                </div>

              </div>

              <div className="flex items-center justify-between">

                <div>

                  <span className="text-3xl font-bold">
                    ${gear.price}
                  </span>

                  <span className="text-muted-foreground">
                    /day
                  </span>

                </div>

                <Button>
                  Rent Now
                </Button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}