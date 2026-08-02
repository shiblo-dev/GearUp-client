import Image from "next/image";
import { Star } from "lucide-react";

import { testimonials } from "@/data/home";

export default function Testimonials() {
  return (
    <section className="py-24">

      <div className="container mx-auto px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.25em] text-emerald-600">
            Testimonials
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            What Our Customers Say
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Thousands of customers trust GearUp for renting premium sports
            and outdoor equipment.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {testimonials.map((user) => (

            <div
              key={user.id}
              className="rounded-3xl border bg-background p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="flex gap-1">

                {Array.from({ length: user.rating }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              <p className="mt-6 leading-8 text-muted-foreground">
                {user.review}
              </p>

              <div className="mt-8 flex items-center gap-4">

                <Image
                  src={user.image}
                  alt={user.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />

                <div>

                  <h4 className="font-bold">
                    {user.name}
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    {user.role}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}