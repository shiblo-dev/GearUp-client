import Image from "next/image";
import { categories } from "@/data/home";
import { ArrowRight } from "lucide-react";

export default function Categories() {
  return (
    <section className="container mx-auto px-6 py-20">

      <div className="text-center">

        <p className="text-emerald-600 font-semibold uppercase tracking-widest">
          Categories
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          Explore Popular Categories
        </h2>

        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Choose from hundreds of sports and outdoor equipment
          available for rent.
        </p>

      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {categories.map((category) => (

          <div
            key={category.id}
            className="group overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
          >

            <div className="relative h-72 overflow-hidden">

              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

            </div>

            <div className="flex items-center justify-between p-6">

              <div>

                <h3 className="text-2xl font-bold">
                  {category.name}
                </h3>

                <p className="text-sm text-muted-foreground">
                  Browse available gear
                </p>

              </div>

              <div
                className="
                rounded-full
                bg-emerald-100
                p-3
                text-emerald-600
                transition
                group-hover:bg-emerald-600
                group-hover:text-white
              "
              >
                <ArrowRight size={22} />
              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}