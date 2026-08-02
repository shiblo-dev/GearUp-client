import {
  Package,
  Users,
  ShoppingBag,
  Star,
} from "lucide-react";

const stats = [
  {
    title: "Gear Available",
    value: "1,200+",
    icon: Package,
  },
  {
    title: "Trusted Providers",
    value: "350+",
    icon: Users,
  },
  {
    title: "Successful Rentals",
    value: "8,500+",
    icon: ShoppingBag,
  },
  {
    title: "Customer Rating",
    value: "4.9/5",
    icon: Star,
  },
];

export default function Stats() {
  return (
    <section className="bg-emerald-600 py-20">

      <div className="container mx-auto px-6">

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur transition duration-300 hover:bg-white/20"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="mt-6 text-4xl font-bold text-white">
                  {item.value}
                </h3>

                <p className="mt-2 text-white/80">
                  {item.title}
                </p>
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}