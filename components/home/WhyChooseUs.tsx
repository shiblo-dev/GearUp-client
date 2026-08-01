import {
  ShieldCheck,
  CreditCard,
  Truck,
  Clock,
} from "lucide-react";

const features = [
  {
    title: "Verified Providers",
    description:
      "Every provider is verified to ensure trusted and high-quality rental equipment.",
    icon: ShieldCheck,
  },
  {
    title: "Secure Payments",
    description:
      "Pay safely using our secure online payment system with complete transparency.",
    icon: CreditCard,
  },
  {
    title: "Easy Pickup & Return",
    description:
      "Convenient pickup and return options that fit your adventure schedule.",
    icon: Truck,
  },
  {
    title: "24/7 Support",
    description:
      "Need help? Our support team is always ready to assist you anytime.",
    icon: Clock,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-muted/30 py-24">

      <div className="container mx-auto px-6">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-widest text-emerald-600">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Everything You Need For Your Next Adventure
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            GearUp connects outdoor enthusiasts with trusted providers,
            making sports and outdoor gear rental simple, affordable,
            and reliable.
          </p>

        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border bg-background p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100">

                  <Icon className="h-8 w-8 text-emerald-600" />

                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-muted-foreground leading-7">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}