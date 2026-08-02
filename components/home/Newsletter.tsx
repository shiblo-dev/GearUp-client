import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">

        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-500 p-8 text-white lg:p-16">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* Left */}

            <div>

              <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2">

                <Mail className="h-5 w-5" />

                <span>Newsletter</span>

              </div>

              <h2 className="mt-6 text-4xl font-bold leading-tight">
                Get Exclusive Rental Deals
              </h2>

              <p className="mt-4 max-w-lg text-emerald-100">
                Subscribe to receive special offers, new gear updates,
                outdoor tips, and exclusive discounts directly in your inbox.
              </p>

            </div>

            {/* Right */}

            <div>

              <div className="rounded-2xl bg-white p-4 shadow-xl">

                <div className="flex flex-col gap-4 md:flex-row">

                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="h-12"
                  />

                  <Button className="h-12 md:w-44">
                    Subscribe
                  </Button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}