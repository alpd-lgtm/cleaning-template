"use client";

import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Pricing", href: "#pricing" },
  { label: "Customer Stories", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="relative z-50 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-xl lg:sticky lg:top-0">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:py-3.5">
        {/* LOGO */}
        <a
          href="#"
          onClick={closeMenu}
          className="flex min-w-0 items-center gap-2.5"
        >
          <div className="grid size-10 shrink-0 place-items-center rounded-xl border border-green-200 bg-green-50 text-green-600 sm:size-11 sm:rounded-2xl">
            <Sparkles size={20} />
          </div>

          <div className="min-w-0">
            <p className="text-lg font-black leading-none tracking-[-0.035em] text-[#071936] sm:text-xl">
              Sparkle
              <span className="text-green-600">Clean</span>
            </p>

            <p className="mt-1 text-[9px] font-semibold tracking-wide text-slate-400 sm:text-[10px]">
              Cleaning Services
            </p>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-7 text-sm font-bold text-[#071936] lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-green-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* DESKTOP TEMPLATE CTA */}
        <a
          href="#contact"
          className="hidden min-h-11 items-center justify-center rounded-xl bg-green-600 px-6 text-sm font-black text-white shadow-[0_10px_26px_rgba(22,163,74,0.2)] transition hover:-translate-y-0.5 hover:bg-green-700 lg:inline-flex"
        >
          Request a Quote
        </a>

        {/* MOBILE MENU */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid size-10 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white text-[#071936] shadow-sm transition hover:border-green-200 hover:bg-green-50 active:scale-95 lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 shadow-xl sm:px-6 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-bold text-[#071936] transition hover:bg-green-50 hover:text-green-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-3 flex min-h-12 w-full items-center justify-center rounded-xl bg-green-600 px-5 text-sm font-black text-white shadow-[0_10px_24px_rgba(22,163,74,0.16)] transition hover:bg-green-700"
          >
            Request a Cleaning Quote →
          </a>
        </div>
      )}
    </header>
  );
}