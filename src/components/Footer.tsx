"use client";

import {
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#071936] text-white">
      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-14 sm:px-6 lg:pb-12">
        <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-5">
          {/* BRAND */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="grid size-10 place-items-center rounded-xl bg-green-500/10 text-green-400">
                <Sparkles size={19} />
              </div>

              <p className="text-xl font-black tracking-[-0.035em] sm:text-2xl">
                Sparkle
                <span className="text-green-400">
                  Clean
                </span>
              </p>
            </div>

            <p className="mt-4 max-w-md text-sm leading-6 text-white/65">
              A modern cleaning website design for home,
              office, deep-cleaning and end-of-lease service
              businesses.
            </p>

            <div className="mt-5 inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1.5">
              <span className="text-[9px] font-black uppercase tracking-[0.14em] text-green-400">
                Sample Website
              </span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.15em] text-white">
              Quick Links
            </h4>

            <nav className="mt-5 space-y-3 text-sm text-white/65">
              <a
                href="#"
                className="block transition hover:text-green-400"
              >
                Home
              </a>

              <a
                href="#services"
                className="block transition hover:text-green-400"
              >
                Services
              </a>

              <a
                href="#pricing"
                className="block transition hover:text-green-400"
              >
                Pricing
              </a>

              <a
                href="#testimonials"
                className="block transition hover:text-green-400"
              >
                Customer Stories
              </a>

              <a
                href="#contact"
                className="block transition hover:text-green-400"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.15em] text-white">
              Services
            </h4>

            <div className="mt-5 space-y-3 text-sm text-white/65">
              <p>Home Cleaning</p>
              <p>Office Cleaning</p>
              <p>Deep Cleaning</p>
              <p>End of Lease</p>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.15em] text-white">
              Contact
            </h4>

            <div className="mt-5 space-y-4 text-sm text-white/65">
              <div className="flex items-start gap-3">
                <Phone
                  size={15}
                  className="mt-0.5 shrink-0 text-green-400"
                />

                <span>
                  Sample phone number
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Mail
                  size={15}
                  className="mt-0.5 shrink-0 text-green-400"
                />

                <span className="break-all">
                  hello@example.com
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={15}
                  className="mt-0.5 shrink-0 text-green-400"
                />

                <span>
                  Sydney, NSW
                </span>
              </div>
            </div>

            <p className="mt-4 max-w-[220px] text-[10px] leading-4 text-white/35">
              Sample contact details shown for design preview.
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 pb-8 pt-5 text-xs text-white/45 sm:px-6 sm:pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-white/55">
              © 2026 SparkleClean.
            </p>

            <p className="mt-1.5 text-[9px] leading-4 text-white/30">
              Demo website content for design preview only.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="transition hover:text-green-400">
              Privacy Policy
            </span>

            <span className="transition hover:text-green-400">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}