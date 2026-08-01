import {
  Search,
  CalendarDays,
  CreditCard,
  Backpack,
} from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Browse Gear",
    description:
      "Explore hundreds of sports and outdoor equipment from trusted providers.",
    icon: Search,
  },
  {
    id: "02",
    title: "Choose Rental Dates",
    description:
      "Select your preferred rental period and check availability instantly.",
    icon: CalendarDays,
  },
  {
    id: "03",
    title: "Secure Payment",
    description:
      "Complete your booking with our fast and secure payment system.",
    icon: CreditCard,
  },
  {
    id: "04",
    title: "Pick Up & Enjoy",
    description:
      "Collect your gear and enjoy your adventure with confidence.",
    icon: Backpack,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24">

      <div className="container mx-auto px-6">

        <div className="text-center">

          <span className="font-semibold uppercase tracking-[0.25em] text-emerald-600">
            How It Works
          </span>

          <h2 className="mt-3 text-4xl font-bold">
            Rent Gear in 4 Easy Steps
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Renting equipment has never been easier. Follow these simple
            steps and start your next adventure today.
          </p>

        </div>

        <div className="relative mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {/* Timeline Line */}
          <div className="absolute left-0 right-0 top-10 hidden h-1 bg-border xl:block" />

          {steps.map((step) => {

            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="relative rounded-3xl border bg-background p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                  {step.id}
                </div>

                <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100">
                  <Icon className="h-8 w-8 text-emerald-600" />
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {step.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}