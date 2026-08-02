import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeDollarSign } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function BecomeProvider() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">

        <div className="grid items-center gap-14 overflow-hidden rounded-3xl bg-emerald-600 p-10 lg:grid-cols-2 lg:p-16">

          {/* Left Content */}
          <div>

            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-white">
              <BadgeDollarSign className="h-5 w-5" />
              <span>Earn Extra Income</span>
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
              Own Sports Equipment?
              <br />
              Rent It Out With GearUp.
            </h2>

            <p className="mt-6 max-w-xl text-lg text-emerald-100">
              Turn your unused sports and outdoor equipment into income.
              List your gear, manage bookings, and reach thousands of
              adventure lovers across the country.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Button
                asChild
                size="lg"
                variant="secondary"
              >
                <Link href="/provider/register">
                  Become a Provider
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-emerald-600"
              >
                <Link href="/about">
                  Learn More
                </Link>
              </Button>

            </div>

          </div>

          {/* Right Image */}

          <div className="relative">

            <Image
              src="https://images.unsplash.com/photo-1522163182402-834f871fd851?w=900"
              alt="Become Provider"
              width={700}
              height={600}
              className="rounded-3xl object-cover shadow-2xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
}