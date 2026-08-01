import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Search,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-sky-100 -z-20" />

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-sky-300/20 blur-3xl -z-10" />

      <div className="container mx-auto px-6 py-20 lg:py-28">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
              🏕️ Trusted by Outdoor Enthusiasts
            </span>

            <h1 className="mt-6 text-5xl font-black leading-tight lg:text-7xl">
              Rent Sports &
              <span className="text-emerald-600"> Outdoor Gear </span>
              Instantly.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-600">
              Discover premium sports and outdoor equipment from trusted
              providers. Save money, travel lighter, and enjoy your next
              adventure without buying expensive gear.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Button size="lg">
                Browse Gear
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <Link href="/become-provider">
                  Become Provider
                </Link>
              </Button>

            </div>

            {/* Search */}

            <div className="mt-12 rounded-2xl border bg-white p-5 shadow-xl">

              <div className="grid gap-4 md:grid-cols-4">

                <Input
                  placeholder="Search Gear"
                />

                <div className="relative">

                  <MapPin
                    className="absolute left-3 top-3 h-5 w-5 text-muted-foreground"
                  />

                  <Input
                    className="pl-10"
                    placeholder="Location"
                  />

                </div>

                <div className="relative">

                  <Calendar
                    className="absolute left-3 top-3 h-5 w-5 text-muted-foreground"
                  />

                  <Input
                    className="pl-10"
                    type="date"
                  />

                </div>

                <Button className="w-full">

                  <Search className="mr-2 h-4 w-4" />

                  Search

                </Button>

              </div>

            </div>

            {/* Stats */}

            <div className="mt-10 flex flex-wrap gap-8">

              <div>
                <h3 className="text-3xl font-bold">500+</h3>
                <p className="text-muted-foreground">
                  Premium Gear
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">120+</h3>
                <p className="text-muted-foreground">
                  Providers
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">4.9★</h3>
                <p className="text-muted-foreground">
                  Customer Rating
                </p>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="relative">

            <Image
              src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=900"
              alt="GearUp"
              width={700}
              height={700}
              className="rounded-3xl shadow-2xl object-cover"
              priority
            />

            <div className="absolute -left-6 top-8 rounded-2xl bg-white p-5 shadow-xl">

              <p className="font-semibold">
                🚴 Mountain Bike
              </p>

              <p className="text-sm text-muted-foreground">
                From $25/day
              </p>

            </div>

            <div className="absolute -bottom-6 right-6 rounded-2xl bg-white p-5 shadow-xl">

              <div className="flex items-center gap-2">

                <ShieldCheck className="h-5 w-5 text-emerald-500" />

                <span className="font-semibold">
                  Verified Providers
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}