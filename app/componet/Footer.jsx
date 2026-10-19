import React from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
  Shield,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-zinc-900 bg-[#020202] text-white">
      {/* TOP RED LINE */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-red-600 to-transparent" />

      {/* RED AMBIENT LIGHT */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[280px] w-[70%] -translate-x-1/2 rounded-full bg-red-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-20">
        {/* MAIN GRID */}
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* ================= BRAND ================= */}
          <div>
            <div className="mb-7">
              <img
                src="/7df670d2-c441-4384-a8a7-e3a07212b946.png"
                alt="GAMERGEAR"
                className="h-16 w-auto object-contain"
              />
            </div>

            <p className="max-w-sm text-base leading-7 text-zinc-400">
              GAMERGEAR is your destination for premium gaming hardware,
              accessories and high-performance gear built for serious gamers.
            </p>

            {/* SYSTEM STATUS */}
            <div className="mt-8 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]" />

              <span className="text-xs font-medium tracking-[0.25em] text-zinc-400">
                SYSTEM ONLINE
              </span>
            </div>
          </div>

          {/* ================= NAVIGATION ================= */}
          <div>
            <p className="mb-7 text-xs font-bold tracking-[0.35em] text-red-500">
              // NAVIGATION
            </p>

            <div className="flex flex-col gap-5">

              <Link
                href="/"
                className="group flex items-center gap-2 text-base font-medium text-zinc-400 transition-colors hover:text-white"
              >
                HOME

                <ArrowUpRight
                  size={16}
                  className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                />
              </Link>

              <Link
                href="/store"
                className="group flex items-center gap-2 text-base font-medium text-zinc-400 transition-colors hover:text-white"
              >
                STORE

                <ArrowUpRight
                  size={16}
                  className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                />
              </Link>

              <Link
                href="/cart"
                className="group flex items-center gap-2 text-base font-medium text-zinc-400 transition-colors hover:text-white"
              >
                CART

                <ArrowUpRight
                  size={16}
                  className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                />
              </Link>

              <Link
                href="/wishlist"
                className="group flex items-center gap-2 text-base font-medium text-zinc-400 transition-colors hover:text-white"
              >
                WISHLIST

                <ArrowUpRight
                  size={16}
                  className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                />
              </Link>

            </div>
          </div>

          {/* ================= SUPPORT ================= */}
          <div>
            <p className="mb-7 text-xs font-bold tracking-[0.35em] text-red-500">
              // SUPPORT
            </p>

            <div className="flex flex-col gap-5">

              <a
                href="#"
                className="text-base font-medium text-zinc-400 transition-colors hover:text-white"
              >
                SHIPPING INFORMATION
              </a>

              <a
                href="#"
                className="text-base font-medium text-zinc-400 transition-colors hover:text-white"
              >
                RETURN POLICY
              </a>

              <a
                href="#"
                className="text-base font-medium text-zinc-400 transition-colors hover:text-white"
              >
                WARRANTY
              </a>

              <a
                href="#"
                className="text-base font-medium text-zinc-400 transition-colors hover:text-white"
              >
                FAQ
              </a>

            </div>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <p className="mb-7 text-xs font-bold tracking-[0.35em] text-red-500">
              // CONTACT
            </p>

            <div className="flex flex-col gap-6">

              {/* LOCATION */}
              <div className="flex items-start gap-4">

                <MapPin
                  size={20}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0 text-red-600"
                />

                <div>
                  <p className="text-sm font-medium text-zinc-300">
                    ISFAHAN
                  </p>

                  <p className="mt-1 text-sm text-zinc-500">
                    Iran
                  </p>
                </div>

              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-4">

                <Mail
                  size={20}
                  strokeWidth={1.5}
                  className="shrink-0 text-red-600"
                />

                <a
                  href="mailto:gamegaer@gmail.com"
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  gamegaer@gmail.com
                </a>

              </div>

              {/* PHONE */}
              <div className="flex items-center gap-4">

                <Phone
                  size={20}
                  strokeWidth={1.5}
                  className="shrink-0 text-red-600"
                />

                <span className="text-sm text-zinc-400">
                  +98 000 000 0000
                </span>

              </div>

            </div>

            {/* SUPPORT BUTTONS */}
            <div className="mt-8 flex gap-3">

              <button
                type="button"
                aria-label="Security"
                className="flex h-11 w-11 items-center justify-center border border-zinc-800 bg-zinc-950 text-zinc-500 transition-all duration-300 hover:border-red-600 hover:text-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.15)]"
              >
                <Shield size={19} />
              </button>

              <button
                type="button"
                aria-label="Support"
                className="flex h-11 w-11 items-center justify-center border border-zinc-800 bg-zinc-950 text-zinc-500 transition-all duration-300 hover:border-red-600 hover:text-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.15)]"
              >
                <MessageCircle size={19} />
              </button>

            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-14 h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

          <p className="text-xs tracking-[0.2em] text-zinc-600">
            © 2026 GAMERGEAR. ALL RIGHTS RESERVED.
          </p>

          <div className="flex items-center gap-7">

            <span className="text-xs tracking-[0.2em] text-zinc-600">
              SYSTEM // 001
            </span>

            <span className="flex items-center gap-2 text-xs tracking-[0.2em] text-zinc-600">

              <span className="h-2 w-2 rounded-full bg-red-600" />

              ONLINE

            </span>

          </div>

        </div>
      </div>

      {/* BOTTOM RED LINE */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-red-600/40 to-transparent" />
    </footer>
  );
};

export default Footer;