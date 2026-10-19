
import Image from "next/image";
import { Suspense } from "react";import Link from "next/link";
import Search from "@/app/componet/Search";

const Header = () => {
  return (
    <header className="w-full bg-black">
      <section
        className="
          relative w-full overflow-hidden bg-black
          lg:h-[calc(100vh-80px)] lg:min-h-[600px]
        "
      >
        {/* MOBILE IMAGE */}
        <div className="relative block w-full bg-black lg:hidden">
          <Image
            src="/8d709ade-035a-40a0-b5f9-f8f9731aa161.png"
            alt="Gaming setup"
            width={1920}
            height={1080}
            priority
            sizes="100vw"
            className="block h-auto w-full"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />

          <div
            className="
              absolute left-4 top-4
              text-[8px] font-bold uppercase tracking-[0.25em]
              text-red-500
              sm:left-6 sm:top-6 sm:text-[9px]
            "
          >
            SYSTEM // 001
          </div>

          <div
            className="
              absolute right-4 top-4 h-6 w-6
              border-r border-t border-red-500/70
              sm:right-6 sm:top-6 sm:h-8 sm:w-8
            "
          />
        </div>

        {/* DESKTOP IMAGE */}
        <div className="absolute inset-0 hidden lg:block">
          <Image
            src="/8d709ade-035a-40a0-b5f9-f8f9731aa161.png"
            alt="Gaming setup"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-red-950/30" />
        </div>

        {/* MAIN CONTENT */}
        <div
          className="
            relative z-10 flex w-full flex-col
            items-center justify-center
            bg-gradient-to-b from-black via-black to-[#080000]
            px-5 pb-12 pt-8 text-center
            sm:px-8 sm:pb-16 sm:pt-10
            lg:absolute lg:inset-0 lg:bg-none
            lg:bg-transparent lg:px-10 lg:pb-0 lg:pt-0
          "
        >
          <div className="flex w-full max-w-5xl flex-col items-center gap-4 sm:gap-5">
            {/* SYSTEM LABEL */}
            <p
              className="
                text-[9px] font-medium uppercase tracking-[0.3em]
                text-red-500
                sm:text-[10px] sm:tracking-[0.4em]
                md:text-xs
              "
            >
               SYSTEM ONLINE  001
            </p>

            {/* TITLE */}
            <h1
              className="
                text-4xl font-black uppercase leading-none
                tracking-[0.1em] text-white
                sm:text-6xl sm:tracking-[0.15em]
                md:text-7xl
                lg:text-8xl lg:tracking-[0.2em]
              "
            >
              GAMER
              <span className="text-red-600">GEAR</span>
            </h1>

            {/* SUBTITLE */}
            <p
              className="
                max-w-[300px] text-[9px] leading-5
                uppercase tracking-[0.18em] text-gray-300
                sm:max-w-xl sm:text-xs sm:tracking-[0.25em]
                md:text-base md:tracking-[0.3em]
              "
            >
               SYSTEM ONLINE — CHOOSE YOUR WEAPON
            </p>

            {/* BUTTONS */}
            <div
              className="
                mt-4 flex w-full max-w-[300px] flex-col gap-3
                sm:mt-5 sm:max-w-none sm:flex-row
                sm:justify-center sm:gap-4
                lg:mt-6
              "
            >
              <Link
                href="/store"
                className="
                  flex min-h-[52px] w-full items-center
                  justify-center border border-red-600
                  bg-red-600 px-6 py-3 text-xs font-bold
                  uppercase tracking-[0.15em] text-black
                  transition-all duration-300
                  hover:-translate-y-1 hover:bg-red-500
                  hover:shadow-[0_0_30px_rgba(239,68,68,0.6)]
                  sm:w-[210px] sm:text-sm
                "
              >
                VIEW STORE
              </Link>

              <Link
                href="/store"
                className="
                  flex min-h-[52px] w-full items-center
                  justify-center border border-red-600
                  bg-black/70 px-6 py-3 text-xs font-bold
                  uppercase tracking-[0.15em] text-red-500
                  backdrop-blur-sm transition-all duration-300
                  hover:-translate-y-1 hover:bg-red-600
                  hover:text-black
                  hover:shadow-[0_0_30px_rgba(239,68,68,0.6)]
                  sm:w-[210px] sm:text-sm
                "
              >
                EXPLORE GEAR
              </Link>
            </div>

            {/* SEARCH BOX */}
           <div className="mt-5 w-full max-w-2xl text-left sm:mt-7">
  <Suspense fallback={<div className="h-20 w-full animate-pulse bg-zinc-950" />}>
    <Search />
  </Suspense>
</div>
          </div>
        </div>

        {/* DESKTOP DECORATION */}
        <div
          className="
            absolute bottom-6 left-1/2 z-20 hidden
            -translate-x-1/2 whitespace-nowrap
            text-xs uppercase tracking-[0.4em]
            text-red-500 lg:block
          "
        >
          SYSTEM // READY
        </div>

        <div
          className="
            absolute left-6 top-6 z-20 hidden
            h-8 w-8 border-l border-t
            border-red-500/50 lg:block
          "
        />

        <div
          className="
            absolute bottom-6 right-6 z-20 hidden
            h-8 w-8 border-b border-r
            border-red-500/50 lg:block
          "
        />
      </section>
    </header>
  );
};

export default Header;
