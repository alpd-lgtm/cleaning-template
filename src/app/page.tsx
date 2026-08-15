"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TemplateEnquiryModal from "@/components/TemplateEnquiryModal";

import {
  ArrowRight,
  Building2,
  Calendar,
  CalendarCheck,
  Check,
  Clock,
  Grid3X3,
  Home,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  User,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Home Cleaning",
    text: "Flexible regular and detailed cleaning designed around your home and routine.",
    icon: Home,
  },
  {
    title: "Office Cleaning",
    text: "Professional cleaning for offices, studios and other workplace environments.",
    icon: Building2,
  },
  {
    title: "Deep Cleaning",
    text: "A more detailed top-to-bottom clean when your space needs extra attention.",
    icon: Sparkles,
  },
  {
    title: "End of Lease",
    text: "Detailed move-out cleaning to help make your final handover less stressful.",
    icon: Wrench,
  },
];

const pricing = [
  {
    name: "Basic Clean",
    text: "Ideal for regular upkeep",
    price: "$120",
    popular: false,
    features: [
      "Up to 2 bedrooms",
      "General surface cleaning",
      "Dusting & vacuuming",
      "Kitchen & bathroom",
    ],
  },
  {
    name: "Standard Clean",
    text: "For a more detailed clean",
    price: "$180",
    popular: true,
    features: [
      "Up to 3 bedrooms",
      "Detailed cleaning",
      "Kitchen & bathroom",
      "Standard living areas",
    ],
  },
  {
    name: "Premium Clean",
    text: "A more complete service",
    price: "$250",
    popular: false,
    features: [
      "Larger homes",
      "Detailed cleaning",
      "Selected appliance cleaning",
      "Additional attention areas",
    ],
  },
];

const sampleReviews = [
  {
    service: "Home Cleaning",
    text: "The booking process was simple and the whole experience felt organised from start to finish.",
  },
  {
    service: "Office Cleaning",
    text: "Clear communication, an easy booking process and a professional-looking service experience.",
  },
  {
    service: "End of Lease",
    text: "A convenient option for customers who want everything clearly organised before moving out.",
  },
];

export default function Page() {
  const [templateModalOpen, setTemplateModalOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#071936]">
      <Header />

      {/* =====================================================
          AXIS STUDIO DEMO NOTICE
      ====================================================== */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6">
          {/* MOBILE */}
          <div className="flex items-center justify-between gap-3 sm:hidden">
            <span className="shrink-0 rounded-full bg-[#071936] px-2.5 py-1 text-[7px] font-black uppercase tracking-[0.14em] text-white">
              Axis Studio Demo
            </span>

            <button
              type="button"
              onClick={() => setTemplateModalOpen(true)}
              className="inline-flex min-h-8 items-center justify-center rounded-lg border border-green-600/20 bg-green-50 px-3 text-[8px] font-black text-green-700 transition hover:bg-green-100"
            >
              Start With This Design →
            </button>
          </div>

          {/* DESKTOP */}
          <div className="hidden items-center justify-between gap-5 sm:flex">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-[#071936] px-3 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-white">
                Axis Studio Demo
              </span>

              <p className="text-xs font-medium text-slate-500">
                Sample cleaning website content for design preview only.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setTemplateModalOpen(true)}
              className="rounded-lg border border-green-600/20 bg-white px-4 py-2 text-xs font-bold text-green-700 transition hover:bg-green-50"
            >
              Start With This Design →
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cleaning-hero.png"
            alt="Professional cleaning service"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[72%_center] md:object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#071936]/95 via-[#071936]/82 to-[#071936]/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 sm:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.78fr] lg:gap-16">
            {/* LEFT */}
            <div className="max-w-3xl text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.13em] text-white backdrop-blur-md sm:text-xs">
                <Sparkles size={14} className="text-green-400" />
                Professional Cleaning Services
              </div>

              <h1 className="mt-5 max-w-3xl text-[2.55rem] font-black leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[4.2rem]">
                A Cleaner Space
                <br />
                For A{" "}
                <span className="text-green-400">
                  Better Life
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-[15px] leading-7 text-white/80 sm:text-lg sm:leading-8">
                Flexible cleaning solutions for homes and businesses,
                with simple booking, clear service options and a
                professional customer experience.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-green-600 px-6 py-3.5 text-sm font-black text-white shadow-[0_14px_35px_rgba(22,163,74,0.28)] transition hover:-translate-y-0.5 hover:bg-green-700"
                >
                  <Calendar size={17} />
                  Request a Cleaning
                  <ArrowRight size={16} />
                </a>

                <a
                  href="#pricing"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-black text-white backdrop-blur-md transition hover:bg-white/15"
                >
                  View Example Pricing
                </a>
              </div>

              {/* BENEFITS */}
              <div className="mt-9 grid max-w-2xl gap-4 sm:grid-cols-3">
                <div className="flex items-start gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-green-400/15 text-green-400">
                    <CalendarCheck size={19} />
                  </span>

                  <div>
                    <p className="text-sm font-black">
                      Flexible Booking
                    </p>
                    <p className="mt-0.5 text-xs leading-5 text-white/60">
                      Choose a convenient time
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-green-400/15 text-green-400">
                    <ShieldCheck size={19} />
                  </span>

                  <div>
                    <p className="text-sm font-black">
                      Clear Service Options
                    </p>
                    <p className="mt-0.5 text-xs leading-5 text-white/60">
                      Know what is included
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-green-400/15 text-green-400">
                    <Sparkles size={19} />
                  </span>

                  <div>
                    <p className="text-sm font-black">
                      Detail Focused
                    </p>
                    <p className="mt-0.5 text-xs leading-5 text-white/60">
                      Homes and workplaces
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Simple booking",
                  "Straightforward pricing",
                  "Friendly support",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/[0.07] px-3 py-1.5 text-[10px] font-semibold text-white/75 backdrop-blur"
                  >
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>

            {/* =================================================
                DESKTOP DEMO BOOKING CARD
            ================================================== */}
            <div className="hidden w-full max-w-[420px] justify-self-end rounded-[28px] border border-white/10 bg-[#071936]/90 p-6 text-white shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl md:block">
              <div className="flex items-center gap-4">
                <div className="grid size-14 place-items-center rounded-2xl bg-green-600 text-white shadow-[0_10px_28px_rgba(22,163,74,0.3)]">
                  <Calendar size={27} />
                </div>

                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.15em] text-green-400">
                    Quick Enquiry
                  </p>

                  <h3 className="mt-1 text-xl font-black">
                    Request a Cleaning
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-white/65">
                Example booking form shown as part of this website
                design.
              </p>

              <div className="mt-5 space-y-3">
                <div className="flex items-center rounded-xl bg-white px-4 py-3.5 text-[#071936]">
                  <User
                    size={17}
                    className="mr-3 text-slate-400"
                  />

                  <input
                    className="w-full bg-transparent text-sm outline-none"
                    placeholder="Your Name"
                  />
                </div>

                <div className="flex items-center rounded-xl bg-white px-4 py-3.5 text-[#071936]">
                  <Phone
                    size={17}
                    className="mr-3 text-slate-400"
                  />

                  <input
                    className="w-full bg-transparent text-sm outline-none"
                    placeholder="Phone Number"
                  />
                </div>

                <div className="flex items-center rounded-xl bg-white px-4 py-3.5 text-[#071936]">
                  <MapPin
                    size={17}
                    className="mr-3 text-slate-400"
                  />

                  <input
                    className="w-full bg-transparent text-sm outline-none"
                    placeholder="Your Suburb"
                  />
                </div>

                <div className="flex items-center rounded-xl bg-white px-4 py-3.5 text-[#071936]">
                  <Grid3X3
                    size={17}
                    className="mr-3 text-slate-400"
                  />

                  <select
                    defaultValue=""
                    className="w-full bg-transparent text-sm outline-none"
                  >
                    <option value="" disabled>
                      Select Service
                    </option>
                    <option>Home Cleaning</option>
                    <option>Office Cleaning</option>
                    <option>Deep Cleaning</option>
                    <option>End of Lease</option>
                  </select>
                </div>

                <a
                  href="#contact"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-3.5 text-sm font-black text-white transition hover:bg-green-700"
                >
                  Continue Enquiry
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className="mt-5 flex items-center justify-center gap-2 border-t border-white/10 pt-4">
                <Clock
                  size={13}
                  className="text-green-400"
                />

                <p className="text-[10px] text-white/50">
                  Demo form shown for layout preview.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section
        id="services"
        className="bg-[#f8fafc] px-4 py-14 sm:px-6 sm:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.17em] text-green-600 sm:text-xs">
              Our Services
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-[#071936] sm:text-4xl lg:text-5xl">
              Cleaning for Every Kind of Space
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Flexible cleaning options designed around different
              homes, workplaces and customer needs.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="group flex h-full flex-col rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-500/25 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:p-6"
                >
                  <div className="grid size-11 place-items-center rounded-xl bg-green-50 text-green-600 transition group-hover:bg-green-600 group-hover:text-white sm:size-12">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-4 text-sm font-black tracking-[-0.02em] text-[#071936] sm:text-lg">
                    {service.title}
                  </h3>

                  <p className="mt-2 flex-1 text-[11px] leading-5 text-slate-500 sm:text-sm sm:leading-6">
                    {service.text}
                  </p>

                  <a
                    href="#contact"
                    className="mt-4 inline-flex items-center gap-1 text-[11px] font-black text-green-600 transition group-hover:gap-2 sm:text-sm"
                  >
                    Ask About This Service →
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE US
      ====================================================== */}
      <section
        id="why"
        className="bg-[#f8fafc] px-4 pb-16 sm:px-6"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.07)] lg:grid-cols-2">
            {/* CONTENT */}
            <div className="relative bg-[#071936] p-6 text-white sm:p-9 lg:p-10">
              <div className="pointer-events-none absolute right-0 top-0 size-48 rounded-full bg-green-500/10 blur-3xl" />

              <p className="relative text-[10px] font-black uppercase tracking-[0.17em] text-green-400 sm:text-xs">
                Why Choose Us
              </p>

              <h2 className="relative mt-3 max-w-xl text-3xl font-black leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Cleaning Made{" "}
                <span className="text-green-400">
                  Simple
                </span>
              </h2>

              <p className="relative mt-5 max-w-lg text-sm leading-7 text-white/70 sm:text-base">
                A good cleaning service should be straightforward to
                book, easy to understand and flexible enough to suit
                different homes and workplaces.
              </p>

              <div className="relative mt-7 grid gap-4 sm:grid-cols-2">
                {[
                  "Flexible scheduling options",
                  "Clear service choices",
                  "Straightforward pricing",
                  "Friendly communication",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-green-400/15 text-green-400">
                      <Check size={14} strokeWidth={3} />
                    </span>

                    <p className="text-sm font-bold">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGE + BENEFITS */}
            <div className="relative min-h-[330px] overflow-hidden sm:min-h-[400px]">
              <Image
                src="/images/cleaning-hero.png"
                alt="Cleaning service team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-x-4 bottom-4 grid gap-2 sm:inset-x-5 sm:bottom-5 sm:grid-cols-3">
                {[
                  ["Flexible", "Service options"],
                  ["Simple", "Booking process"],
                  ["Clear", "Communication"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-xl border border-white/60 bg-white/90 px-4 py-3 backdrop-blur-md"
                  >
                    <p className="text-sm font-black text-[#071936]">
                      {title}
                    </p>

                    <p className="mt-0.5 text-[10px] font-semibold text-slate-500">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PRICING
      ====================================================== */}
      <section
        id="pricing"
        className="bg-white px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-green-700">
              Example Pricing
            </div>

            <h2 className="mt-4 text-3xl font-black tracking-[-0.035em] text-[#071936] sm:text-4xl lg:text-5xl">
              Simple Pricing Options
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Sample pricing shown to demonstrate how service packages
              can be presented on this website design.
            </p>
          </div>

          <div className="mt-11 grid gap-5 md:grid-cols-3 md:items-center">
            {pricing.map((plan) => (
              <article
                key={plan.name}
                className={`relative rounded-[26px] border bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.1)] sm:p-7 ${
                  plan.popular
                    ? "border-green-500 md:scale-[1.025]"
                    : "border-slate-200"
                }`}
              >
                {plan.popular && (
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-600 px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.14em] text-white shadow-lg">
                    Popular Layout
                  </span>
                )}

                <h3 className="text-xl font-black text-[#071936]">
                  {plan.name}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {plan.text}
                </p>

                <div className="mt-6 flex items-end gap-2 border-b border-slate-100 pb-6">
                  <span className="text-4xl font-black tracking-[-0.04em] text-green-600 sm:text-5xl">
                    {plan.price}
                  </span>

                  <span className="mb-1 text-xs font-bold text-slate-400">
                    example
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  {plan.features.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-green-50 text-green-600">
                        <Check size={11} strokeWidth={3} />
                      </span>

                      {item}
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className={`mt-7 inline-flex min-h-11 w-full items-center justify-center rounded-xl border px-5 text-sm font-black transition ${
                    plan.popular
                      ? "border-green-600 bg-green-600 text-white hover:bg-green-700"
                      : "border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                  }`}
                >
                  Request a Quote
                </a>
              </article>
            ))}
          </div>

          <p className="mt-6 text-center text-[10px] leading-5 text-slate-400">
            Sample prices are shown for design preview only. Final
            pricing would be customised for the actual business.
          </p>
        </div>
      </section>

      {/* =====================================================
          SAMPLE CUSTOMER STORIES
      ====================================================== */}
      <section
        id="testimonials"
        className="bg-[#f8fafc] px-4 py-16 sm:px-6"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.17em] text-green-600 sm:text-xs">
              Example Customer Stories
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-[#071936] sm:text-4xl">
              Show Customers What to Expect
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
              This section can be replaced with genuine reviews once
              the website is customised for a real cleaning business.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {sampleReviews.map((review) => (
              <article
                key={review.service}
                className="rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="inline-flex rounded-full bg-green-50 px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.14em] text-green-700">
                  Sample Review
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  “{review.text}”
                </p>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  <p className="text-sm font-black text-[#071936]">
                    {review.service}
                  </p>

                  <p className="mt-1 text-[10px] text-slate-400">
                    Example content for design preview
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT / QUOTE SECTION
      ====================================================== */}
      <section
        id="contact"
        className="bg-[#f8fafc] px-4 pb-6 pt-4 sm:px-6 sm:pb-8"
      >
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.07)] lg:grid-cols-[0.85fr_1.15fr]">
          {/* LEFT */}
          <div className="bg-[#071936] p-6 text-white sm:p-8 lg:p-10">
            <p className="text-[9px] font-black uppercase tracking-[0.17em] text-green-400">
              Get a Quote
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl">
              Ready for a cleaner space?
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
              A real cleaning business could use this section to
              collect customer details, service preferences and
              booking enquiries.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Tell us what service you need",
                "Share your preferred area or suburb",
                "Receive the next steps from the business",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-green-400/15 text-green-400">
                    <Check size={12} strokeWidth={3} />
                  </span>

                  <p className="text-sm font-semibold text-white/85">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* DEMO FORM */}
          <div className="p-5 sm:p-7 lg:p-9">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.15em] text-green-600">
                  Demo Enquiry Form
                </p>

                <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] text-[#071936]">
                  Request a cleaning quote
                </h3>
              </div>

              <span className="hidden rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.12em] text-green-700 sm:block">
                Preview
              </span>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <input
                placeholder="Your name"
                className="min-h-12 rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
              />

              <input
                placeholder="Phone number"
                className="min-h-12 rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
              />
            </div>

            <input
              type="email"
              placeholder="Email address"
              className="mt-3 min-h-12 w-full rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
            />

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <select
                defaultValue=""
                className="min-h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-600 outline-none transition focus:border-green-500"
              >
                <option value="" disabled>
                  Select service
                </option>
                <option>Home Cleaning</option>
                <option>Office Cleaning</option>
                <option>Deep Cleaning</option>
                <option>End of Lease</option>
              </select>

              <input
                placeholder="Suburb / area"
                className="min-h-12 rounded-xl border border-slate-200 px-4 text-sm outline-none transition focus:border-green-500"
              />
            </div>

            <textarea
              rows={4}
              placeholder="Tell us anything important about the cleaning you need."
              className="mt-3 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm leading-6 outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-500/10"
            />

            <button
              type="button"
              className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-6 text-sm font-black text-white transition hover:bg-green-700"
            >
              Send Quote Request
              <ArrowRight size={16} />
            </button>

            <p className="mt-3 text-center text-[10px] text-slate-400">
              Demo form shown for layout preview only.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          AXIS STUDIO TEMPLATE CTA
      ====================================================== */}
      <section
        id="axis-demo-cta"
        className="bg-[#f8fafc] px-4 pb-10 pt-6 sm:px-6 sm:pb-12 sm:pt-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[24px] border border-slate-800 bg-[#071936] px-5 py-6 shadow-[0_18px_50px_rgba(7,25,54,0.12)] sm:rounded-[26px] sm:px-8 sm:py-7 lg:px-10">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-green-600 px-3 py-1 text-[8px] font-black uppercase tracking-[0.15em] text-white sm:text-[9px]">
                    Axis Studio Demo
                  </span>

                  <span className="text-[9px] font-medium text-slate-400 sm:text-[10px]">
                    Cleaning Services Website
                  </span>
                </div>

                <h2 className="mt-4 text-[1.55rem] font-black tracking-[-0.035em] text-white sm:text-3xl">
                  Like this website design?
                </h2>

                <p className="mt-3 max-w-2xl text-xs leading-5 text-slate-300 sm:text-sm sm:leading-6">
                  We can customise this design with your business
                  name, services, colours, images, pricing and contact
                  details, then help you launch it.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setTemplateModalOpen(true)}
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-green-600 px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-green-700 sm:px-7"
                >
                  Start With This Design →
                </button>

                <a
                  href="https://axistudio.studio/templates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-black text-white transition hover:border-white/25 hover:bg-white/[0.08] sm:px-7"
                >
                  View More Designs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ONE AXIS STUDIO ENQUIRY MODAL */}
      <TemplateEnquiryModal
        open={templateModalOpen}
        onClose={() => setTemplateModalOpen(false)}
      />

      <Footer />
    </main>
  );
}