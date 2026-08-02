import Link from "next/link";
import {

  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Browse Gear", href: "/gear" },
  { name: "Become Provider", href: "/provider" },
  { name: "About Us", href: "/about" },
];

const categories = [
  { name: "Camping", href: "/gear?category=camping" },
  { name: "Cycling", href: "/gear?category=cycling" },
  { name: "Football", href: "/gear?category=football" },
  { name: "Hiking", href: "/gear?category=hiking" },
];

const legal = [
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
];

export default function Footer() {
  return (
    <footer className="border-t bg-slate-950 text-slate-300">
      <div className="container mx-auto px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-3xl font-black text-white"
            >
              Gear<span className="text-emerald-500">Up</span>
            </Link>

            <p className="mt-5 leading-7 text-slate-400">
              GearUp is your trusted marketplace for renting sports
              and outdoor equipment from verified providers.
            </p>


          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">

              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="transition hover:text-emerald-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Categories */}
          <div>

            <h3 className="text-xl font-semibold text-white">
              Categories
            </h3>

            <ul className="mt-6 space-y-4">

              {categories.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="transition hover:text-emerald-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold text-white">
              Contact Us
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-emerald-500" />
                <span>Dhaka, Bangladesh</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-500" />
                <span>+880 1700-000000</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-500" />
                <span>support@gearup.com</span>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 md:flex-row">

          <p className="text-sm text-slate-500">
  © 2026 GearUp. All rights reserved.
</p>

          <div className="flex gap-6">

            {legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm transition hover:text-emerald-400"
              >
                {item.name}
              </Link>
            ))}

          </div>

        </div>

      </div>
    </footer>
  );
}